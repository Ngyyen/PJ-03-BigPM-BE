import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Batch } from './entities/batch.entity';
import aqp from 'api-query-params';
import { InboundReceiptService } from '../inbound_receipt/inbound_receipt.service';
import { ProductSamplesService } from '../product_samples/product_samples.service';

@Injectable()
export class BatchsService {
  constructor(
    @InjectRepository(Batch)
    private batchRepository: Repository<Batch>,
    private inboundReceiptService: InboundReceiptService,
    private productSampleService: ProductSamplesService,
  ) {}

  async create(createBatchDto: CreateBatchDto) {
    const { inboundReceiptId, productSampleId, ...rest } = createBatchDto;
    const batch = this.batchRepository.create(rest);

    if (inboundReceiptId) {
      const inboundReceipt =
        await this.inboundReceiptService.findOne(inboundReceiptId);
      if (!inboundReceipt) {
        throw new NotFoundException('Không tìm thấy đơn nhập hàng');
      }
      batch.inboundReceipt = inboundReceipt;
    }

    if (productSampleId) {
      const productSample =
        await this.productSampleService.findOne(productSampleId);
      if (!productSample) {
        throw new NotFoundException('Không tìm thấy mẫu sản phẩm');
      }
      batch.productSample = productSample;
    }
    const savedBatch = this.batchRepository.save(batch);
    return savedBatch;
  }

  async findAll(query: string, current: number, pageSize: number) {
    console.log(query);
    console.log(current, pageSize);

    const { filter, sort } = aqp(query);
    console.log('filter', filter);
    console.log('sort', sort);

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;
    delete filter.current;
    delete filter.pageSize;

    const totalItems = await this.batchRepository.count(filter);
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const options = {
      where: {},
      relations: [],
      take: pageSize,
      skip: skip,
    };

    const results = await this.batchRepository.find(options);

    return {
      meta: {
        current,
        pageSize,
        pages: totalPages,
        total: totalItems,
      },
      results,
    };
  }

  async findOne(id: number) {
    const batch = await this.batchRepository.findOne({
      where: { id },
    });

    if (!batch) {
      throw new NotFoundException('Không tìm thấy lô hàng');
    }

    return batch;
  }

  async update(id: number, updateBatchDto: UpdateBatchDto) {
    const batch = await this.findOne(id);
    if (!batch) {
      throw new NotFoundException('Không tìm thấy lô hàng');
    }
    if (updateBatchDto.productSampleId) {
      const productSample = await this.productSampleService.findOne(
        updateBatchDto.productSampleId,
      );
      if (!productSample) {
        throw new NotFoundException('Không tìm thấy mẫu sản phẩm');
      }
      batch.productSample = productSample;
    }

    if (updateBatchDto.inboundReceiptId) {
      const inboundReceipt = await this.inboundReceiptService.findOne(
        updateBatchDto.inboundReceiptId,
      );
      if (!inboundReceipt) {
        throw new NotFoundException('Không tìm thấy đơn nhập hàng');
      }
      batch.inboundReceipt = inboundReceipt;
    }

    Object.assign(batch, updateBatchDto);
    const savedBatch = await this.batchRepository.save(batch);
    return savedBatch;
  }

  async remove(id: number) {
    const batch = await this.findOne(id);
    if (!batch) {
      throw new NotFoundException('Không tìm thấy đơn nhập hàng');
    }
    await this.batchRepository.softDelete(id);
    return batch;
  }
}
