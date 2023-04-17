import { Component, EventEmitter, Output } from '@angular/core';
import { MovesEnum } from '../../enums/moves-enum';
import { ResultsEnum } from '../../enums/results-enum';
import { RpsgService } from '../../rpsg.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  public movesEnum = MovesEnum;
  public resultsEnum : ResultsEnum;
  public result : ResultsEnum;
  public computerMove : MovesEnum;

  @Output() updateList = new EventEmitter();

  constructor(
    private rpsgService: RpsgService
    
  ) { }

  onSave(move: MovesEnum) {
    this.rpsgService.playGame(move).subscribe(gameResult => {
      this.updateList.emit();
      this.result = gameResult.result;
      this.computerMove = gameResult.computerMove;
    });
  } 
}
