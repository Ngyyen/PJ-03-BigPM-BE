import { Order } from 'src/modules/orders/entities/order.entity';
import { ProductSample } from 'src/modules/product_samples/entities/product_sample.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public orderId: number;

  @Column()
  public productSampleId: number;

  @Column()
  public quantity: number;

  @Column('decimal')
  public price: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  public order: Order;

  @ManyToOne(() => ProductSample, (order) => order.orderDetails)
  public productSample: ProductSample;
}
