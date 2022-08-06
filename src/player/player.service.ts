import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from 'src/entities/player.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  findAll(firstName?: string): Promise<Player | any> {
    return firstName
      ? this.playerRepository.findOne({ where: { firstName: firstName } })
      : this.playerRepository.find();
  }
  save(players: any): Promise<Player[]> {
    return this.playerRepository.save(players);
  }
}
