import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { ProductSamplesModule } from '../product_samples/product_samples.module';
import { ProductTypesModule } from '../product_types/product_types.module';
import { ProductLinesModule } from '../product_lines/product_lines.module';
import { GroupsModule } from '../groups/groups.module';
import { RolesModule } from '../roles/roles.module';
import { BatchsModule } from '../batchs/batchs.module';
import { AuthsModule } from '../auths/auths.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    SuppliersModule,
    ProductSamplesModule,
    ProductTypesModule,
    ProductLinesModule,
    GroupsModule,
    RolesModule,
    BatchsModule,
    AuthsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
