import { Sequelize } from 'sequelize-typescript';
import { User } from './users/users.model';
import {
  DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  SEQUELIZE,
} from './constants';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get('DB_HOST'),
        port: DB_PORT,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DATABASE,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
