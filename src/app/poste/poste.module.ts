import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : BodyComponent
      }])
  ]
})
export class PosteModule { }
