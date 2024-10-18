import { ProductLine } from 'src/modules/product_lines/entities/product_line.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ProductType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductLine, (productLine) => productLine.productType)
  productLines: ProductLine[];
}
