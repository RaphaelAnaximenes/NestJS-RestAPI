"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = exports.UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    create(createUserDto) {
        const currentMaxId = this.users[this.users.length - 1]?.id || 0;
        const id = currentMaxId + 1;
        const user = {
            id,
            ...createUserDto,
        };
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const index = this.users.findIndex((user) => user.id === id);
        return this.users[index];
    }
    update(id, updateUserDto) {
        const user = this.findOne(id);
        const newUser = {
            ...user,
            ...updateUserDto,
        };
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = newUser;
        return newUser;
    }
    remove(id) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('User with id ' + id + ' does not exist');
        }
        this.users.splice(index, 1);
        return;
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map