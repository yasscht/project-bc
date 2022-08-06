import { Controller, Get, Param, Post } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get('all/:firstName')
  findAll(@Param() firstName?: string) {
    return this.playerService.findAll(firstName);
  }
}
