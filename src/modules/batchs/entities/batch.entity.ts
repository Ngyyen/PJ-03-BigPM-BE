import { InboundReceipt } from 'src/modules/inbound_receipt/entities/inbound_receipt.entity';
import { ProductSample } from 'src/modules/product_samples/entities/product_sample.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
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
  sell_price: string;

  @Column()
  discount: string;

  @Column()
  quantity: string;

  @Column()
  inbound_quantity: string;

  @Column()
  expiredAt: Date;

  @ManyToOne(() => InboundReceipt, (inboundReceipt) => inboundReceipt.batchs)
  inboundReceipt: InboundReceipt;

  @OneToOne(() => ProductSample, (productSample) => productSample.batch)
  @JoinColumn()
  productSample: ProductSample;
}
