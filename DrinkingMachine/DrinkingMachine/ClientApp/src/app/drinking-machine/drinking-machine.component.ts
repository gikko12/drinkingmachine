import {Component, OnInit, ViewChild} from '@angular/core';
import {Beverage} from "src/app/services/beverages/beverage";
import {BeverageEnum} from "src/app/enums/beverage.enum";
import {BeveragesService} from "src/app/services/beverages/beverages.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-drinking-machine',
  templateUrl: './drinking-machine.component.html',
  styleUrls: ['./drinking-machine.component.scss']
})
export class DrinkingMachineComponent implements OnInit {
  public beverages: Beverage[];

  public selectedBeverage : Beverage;
  public stepsOfPreparation: Array<String> = [];
  public timeouts = [];
  public loadingBeverage = false;

  public beverageEnum = BeverageEnum;

  // @ts-ignore
  @ViewChild('selectedBeverageModal') selectedBeverageModal;

  constructor(
    private beveragesService: BeveragesService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getAllBeverages();
  }

  getAllBeverages() {
    this.beveragesService.getListBeverages()
      .subscribe(
        beverages => this.beverages = beverages,
        error => console.log(error)
      );
  }

  selectBeverage(beverage: BeverageEnum) {
    if (beverage !== null) {
      this.beveragesService.getBeverage(beverage)
        .subscribe(
          beverage => {
            this.selectedBeverage = beverage;

            for (let i = 0; i < this.selectedBeverage.stepsOfPreparation.length; i++) {
              this.timeouts.push(setTimeout(() => {
                this.stepsOfPreparation.push(this.selectedBeverage.stepsOfPreparation[i]);
              }, 1000 * i));
            }

            this.openModal();
          },
          error => console.log(error)
        );
    } else {
      alert("Beverage not selected.");
    }
  }

  openModal() {
    this.modalService.open(this.selectedBeverageModal, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => this.cleanVariables(), () => this.cleanVariables());
  }

  cleanVariables() {
    if (this.timeouts && this.timeouts.length) {
      this.timeouts.map(m => clearTimeout(m));
      this.timeouts = [];
    }
    this.selectedBeverage = null;
    this.stepsOfPreparation = [];
  }
}
