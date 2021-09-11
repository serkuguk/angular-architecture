import {Component, Input, OnInit} from '@angular/core';
import {EmployeeInterface} from '@app/shared/types/backend/types/employee-interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() role: EmployeeInterface

  constructor() { }

  ngOnInit(): void {
  }

}
