import { MovesEnum } from "../enums/moves-enum";
import { ResultsEnum } from "../enums/results-enum";

export class GamesDto {
  userMove: MovesEnum;
  computerMove: MovesEnum;
  result: ResultsEnum;
}
