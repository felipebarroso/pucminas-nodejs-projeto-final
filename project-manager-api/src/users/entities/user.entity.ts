import { Project } from "src/projects/entities/project.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    
    firstName: string;
    lasttName: string;
    email: string;
    password: string;
    projecs: Project[];
    tasks: Task[];

}
