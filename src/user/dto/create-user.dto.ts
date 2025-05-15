import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";

export class CreateUserDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    role: UserRole
}
