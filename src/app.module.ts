import { Module } from '@nestjs/common'; 
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb+srv://nestuser:Se0y4sbGJmkge5is@cluster0.itgff.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
//Se0y4sbGJmkge5is