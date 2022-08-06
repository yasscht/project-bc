import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Player } from 'src/entities/player.entitie';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get()
  findAll(@Param() firstName: string) {
    return this.playerService.findAll();
  }
  @Post()
  save(@Body() players: Player[]) {
    for (let i = 0; i < players.length; i++) {
      this.playerService.save(players[i]);
    }

    return 'saved';
  }
}
