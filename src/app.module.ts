import { Module } from '@nestjs/common'; 
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
 

@Module({
  imports: [ConfigModule.forRoot(),
    TasksModule,
    MongooseModule.forRoot(`mongodb+srv://nestuser:${process.env.DB_PASS}@cluster0.itgff.mongodb.net/test`)],
  controllers: [],
  providers: [],
})
export class AppModule {} 