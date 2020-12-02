import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrinkingMachineComponent} from './drinking-machine.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BeveragesService} from "src/app/services/beverages/beverages.service";
import {NgbModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    DrinkingMachineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
    RouterModule.forChild([
      {path: '', component: DrinkingMachineComponent}
    ])
  ],
  providers: [
    BeveragesService,
    NgbModal
  ]
})
export class DrinkingMachineModule {
}
