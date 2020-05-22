import { PrintResolver } from './print/print.resolver';
import { PrintComponent } from './print/print.component';
import { HomeResolver } from './home.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  resolve: { user: HomeResolver },
  children: [
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'print', component: PrintComponent, resolve: { packageJsonData: PrintResolver } }
  ]
}];

export const homeComponents = [
  HomeComponent,
  IndexComponent,
  PrintComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    HomeResolver,
    PrintResolver
  ]

})

export class HomeRouting {
  constructor() { }
}
