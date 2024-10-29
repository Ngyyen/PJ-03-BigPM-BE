import { InboundReceipt } from 'src/modules/inbound_receipt/entities/inbound_receipt.entity';
import { ProductSample } from 'src/modules/product_samples/entities/product_sample.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Batch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inbound_price: number;

  @Column()
  sell_price: number;

  @Column()
  discount: number;

  @Column()
  quantity: number;

  @Column()
  inbound_quantity: number;

  @Column()
  expiredAt: Date;

  @ManyToOne(() => InboundReceipt, (inboundReceipt) => inboundReceipt.batchs)
  @JoinColumn()
  inboundReceipt: InboundReceipt;

  @OneToOne(() => ProductSample, (productSample) => productSample.batch)
  @JoinColumn()
  productSample: ProductSample;
}
