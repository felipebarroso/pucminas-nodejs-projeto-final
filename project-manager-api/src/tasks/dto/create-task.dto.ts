import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../enum/TaskStatus";

export class CreateTaskDto {

    @IsNotEmpty({ message: "O nome da tarefa precisa de ser definido" })
    @IsString()
    name: string;

    @IsNotEmpty({ message: "A descrição da tarefa precisa de ser definida" })
    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsNotEmpty({ message: "O Id do projeto precisa ser informado" })
    @IsNumber()
    projectId: number;

    createdAt: Date;

}
