import { Project } from "src/projects/entities/project.entity";
import { TaskStatus } from "../enum/TaskStatus";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/modules/users/entities/user.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name", nullable: false })
    name: string;

    @Column({ name: "createdAt", nullable: false })
    createdAt: Date;

    @Column({ name: "status", nullable: false, default: TaskStatus.pending })
    status: TaskStatus;

    @ManyToOne(() => Project, (project) => project.tasks, {
        cascade: true,
        nullable: false,
    })
    project: Project;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn()
    user: User;

}
