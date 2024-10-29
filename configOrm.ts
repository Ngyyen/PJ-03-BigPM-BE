import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Admin@123',
  database: 'MART_MANAGEMENT',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
