import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolbarComponent,
    SpinnerComponent
  ],
  exports: [
    ToolbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
