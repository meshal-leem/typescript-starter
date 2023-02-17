import { IsEmpty, IsNotEmpty } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateProductDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly description: string;
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
