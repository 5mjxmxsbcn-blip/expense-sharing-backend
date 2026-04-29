import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'Test User 1' },
      { id: 2, name: 'Test User 2' }
    ];
  }
}
