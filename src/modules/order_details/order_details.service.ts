import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetail } from './entities/order_detail.entity';
import { Order } from '../orders/entities/order.entity';
import { ProductSample } from '../product_samples/entities/product_sample.entity';
import { ProductSamplesService } from '../product_samples/product_samples.service';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    private readonly ordersService: OrdersService,
    private readonly productSamplesService: ProductSamplesService,
  ) {}

  async addProductsToOrder(createOrderDetailDto: CreateOrderDetailDto) {
    const { orderId, details } = createOrderDetailDto;
    const order = await this.ordersService.findOne(orderId);
    if (!order) {
      throw new NotFoundException(`Không tìm thấy đơn hàng với id ${orderId}`);
    }
    const orderDetails = [];
    for (const detail of details) {
      const { productSampleId, quantity, price } = detail;
      const productSample =
        await this.productSamplesService.findOne(productSampleId);
      if (!productSample) {
        throw new NotFoundException(
          `Không tìm thấy mẫu sản phẩm với id ${productSampleId}`,
        );
      }
      const orderDetail = this.orderDetailRepository.create({
        order,
        productSample,
        quantity,
        price,
      });
      orderDetails.push(orderDetail);
    }
    return this.orderDetailRepository.save(orderDetails);
  }
}
