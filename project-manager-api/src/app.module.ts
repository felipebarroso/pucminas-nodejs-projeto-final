import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmConfigModule } from './modules/config/typeorm/type-orm-config.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ProjectsModule, 
    UsersModule, 
    TasksModule, 
    TypeOrmConfigModule, 
    PaginationModule, 
    CacheModule.register({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
