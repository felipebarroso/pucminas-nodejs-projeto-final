import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';
import { ProjectsModule } from 'src/projects/projects.module';
import { UsersModule } from 'src/modules/users/users.module';
import { User } from 'src/modules/users/entities/user.entity';

@Module({
  imports: [ProjectsModule, UsersModule, TypeOrmModule.forFeature([Task, User, Project])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
