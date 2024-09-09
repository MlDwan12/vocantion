import { Module } from "@nestjs/common";
import { dbModule } from "./database/database.module";
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [dbModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
