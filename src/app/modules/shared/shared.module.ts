import { NgModule } from '@angular/core';
import { TimeZonePipe } from './pipes/time-zone.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimeZonePipe],
  imports: [RouterModule.forChild([])],
  exports: [TimeZonePipe]
})

export class SharedModule { }
