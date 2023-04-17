import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesDto } from './model/GamesDto';
import { HttpClient } from '@angular/common/http';
import { MovesEnum } from './enums/moves-enum';
import { ResultsEnum } from './enums/results-enum';

@Injectable({
  providedIn: 'root'
})
export class RpsgService {

  constructor(
    private http: HttpClient
  ) { }

  getGames(): Observable<GamesDto[]> {
    return this.http.get<GamesDto[]>('http://localhost:8080/game/findLastFiveWinLostGames');
  }

  playGame(move : MovesEnum): Observable<GamesDto> {
    return this.http.put<GamesDto>('http://localhost:8080/game/' + MovesEnum[move],null);
  }

}
