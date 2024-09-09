import { SequelizeModule } from "@nestjs/sequelize";

export const dbModule = SequelizeModule.forRoot({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "vocantion",
  autoLoadModels: true,
  retryAttempts: 3,
  synchronize: true,
});
