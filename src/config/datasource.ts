import 'reflect-metadata';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/db/bd.db",
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  })
  AppDataSource.initialize()
    .then(() => {
        console.log('DATABASE RUNNING')
    })
    .catch((error) => console.log(error))