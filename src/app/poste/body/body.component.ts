import { Component } from '@angular/core';
import { BodyService } from 'src/app/service/body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(public poste : BodyService){

  }
}
