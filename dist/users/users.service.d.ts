import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, updateUserDto: UpdateUserDto): {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    remove(id: number): void;
}
