import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  @Input() employee: UserEmployeeInterface

  constructor() { }

  ngOnInit(): void {
  }

}
