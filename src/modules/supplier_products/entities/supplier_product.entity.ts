import { ProductSample } from 'src/modules/product_samples/entities/product_sample.entity';
import { Supplier } from 'src/modules/suppliers/entities/supplier.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class SupplierProduct {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public supplierId: number;

  @Column()
  public productSampleId: number;

  @Column()
  public status: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.supplierProducts)
  public supplier: Supplier;

  @ManyToOne(
    () => ProductSample,
    (productSample) => productSample.supplierProducts,
  )
  public productSample: ProductSample;
}
