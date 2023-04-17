import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovesEnum } from '../../enums/moves-enum';
import { ResultsEnum } from '../../enums/results-enum';
import { GamesDto } from "../../model/GamesDto";
import { RpsgService } from '../../rpsg.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  dataSource = new MatTableDataSource<GamesDto>();
  displayedColumns: string[] = ['userMove', 'computerMove', 'result'];

  wins : GamesDto[];
  loses : GamesDto[];

  public movesEnum = MovesEnum;
  public resultsEnum = ResultsEnum;

  constructor(
    private prsgService: RpsgService
  ) { }

  ngOnInit(): void {
    this.prsgService.getGames().subscribe(
      games => {
        this.dataSource.data = games;
        this.wins = games.filter(game => game.result === ResultsEnum.WIN);
        this.loses = games.filter(game => game.result === ResultsEnum.LOSE);
      }
    );
  }

}
