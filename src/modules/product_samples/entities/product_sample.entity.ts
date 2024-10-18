import { Batch } from 'src/modules/batchs/entities/batch.entity';
import { OrderDetail } from 'src/modules/order_details/entities/order_detail.entity';
import { ProductLine } from 'src/modules/product_lines/entities/product_line.entity';
import { SupplierProduct } from 'src/modules/supplier_products/entities/supplier_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ProductSample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: string;

  @DeleteDateColumn()
  deletedAt: string;

  @ManyToOne(() => ProductLine, (productLine) => productLine.productSamples)
  productLine: ProductLine;

  @OneToMany(
    () => SupplierProduct,
    (supplierProduct) => supplierProduct.productSample,
  )
  supplierProducts: SupplierProduct[];

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.productSample)
  orderDetails: OrderDetail[];

  @OneToOne(() => Batch, (batch) => batch.productSample)
  batch: Batch;
}
