import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInboundReceiptDto } from './dto/create-inbound_receipt.dto';
import { UpdateInboundReceiptDto } from './dto/update-inbound_receipt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InboundReceipt } from './entities/inbound_receipt.entity';
import aqp from 'api-query-params';
import { UsersService } from '../users/users.service';
import { SuppliersService } from '../suppliers/suppliers.service';

@Injectable()
export class InboundReceiptService {
  constructor(
    @InjectRepository(InboundReceipt)
    private inboundReceiptRepository: Repository<InboundReceipt>,
    private usersService: UsersService,
    private suppliersService: SuppliersService,
  ) {}

  async create(createInboundReceiptDto: CreateInboundReceiptDto) {
    const { staffId, supplierId, ...rest } = createInboundReceiptDto;

    const inboundReceipt = this.inboundReceiptRepository.create(rest);
    if (staffId) {
      const staff = await this.usersService.findOneById(staffId);
      if (!staff) {
        throw new NotFoundException('Không tìm thấy mã nhân viên');
      }
      inboundReceipt.staff = staff;
    }

    if (supplierId) {
      const suppplier = await this.suppliersService.findOne(supplierId);
      if (!suppplier) {
        throw new NotFoundException('Không tìm thấy nhà cung cấp');
      }
      inboundReceipt.supplier = suppplier;
    }

    const savedInboundReceipt =
      this.inboundReceiptRepository.save(inboundReceipt);
    return savedInboundReceipt;
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

    const totalItems = await this.inboundReceiptRepository.count(filter);
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const options = {
      where: {},
      relations: [],
      take: pageSize,
      skip: skip,
    };

    const results = await this.inboundReceiptRepository.find(options);

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
    const inboundReceipt = await this.inboundReceiptRepository.findOne({
      where: { id },
    });

    if (!inboundReceipt) {
      throw new NotFoundException('Không tìm thấy đơn nhập hàng');
    }

    return inboundReceipt;
  }

  async update(id: number, updateInboundReceiptDto: UpdateInboundReceiptDto) {
    const inboundReceipt = await this.findOne(id);
    if (!inboundReceipt) {
      throw new NotFoundException('Không tìm thấy đơn nhập hàng');
    }
    if (updateInboundReceiptDto.staffId) {
      const staff = await this.usersService.findOneById(
        updateInboundReceiptDto.staffId,
      );
      if (!staff) {
        throw new NotFoundException('Không tìm thấy mã nhân viên');
      }
      inboundReceipt.staff = staff;
    }

    if (updateInboundReceiptDto.supplierId) {
      const suppplier = await this.suppliersService.findOne(
        updateInboundReceiptDto.supplierId,
      );
      if (!suppplier) {
        throw new NotFoundException('Không tìm thấy nhà cung cấp');
      }
      inboundReceipt.supplier = suppplier;
    }

    Object.assign(inboundReceipt, updateInboundReceiptDto);
    const savedUser = await this.inboundReceiptRepository.save(inboundReceipt);
    return savedUser;
  }

  async remove(id: number) {
    const inboundReceipt = await this.findOne(id);
    if (!inboundReceipt) {
      throw new NotFoundException('Không tìm thấy đơn nhập hàng');
    }
    await this.inboundReceiptRepository.softDelete(id);
    return inboundReceipt;
  }
}
