import {BeverageEnum} from "src/app/enums/beverage.enum";

export class Beverage {
  enum: BeverageEnum;
  description: string;
  stepsOfPreparation: Array<string>;
}
