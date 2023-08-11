import { Component } from '@angular/core';
import { UserService } from 'src/app/service/users.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(public employee : UserService){

  }
}
