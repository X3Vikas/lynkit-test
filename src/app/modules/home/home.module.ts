
import { NgModule } from '@angular/core';
import { homeComponents, HomeRouting } from './home.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    homeComponents,
    NavBarComponent
  ],
  imports: [
    NgbDropdownModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HomeRouting,
    HttpClientModule,
    SharedModule
  ]
})
export class HomeModule { }
