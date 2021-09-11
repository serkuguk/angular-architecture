import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getEmployeesItemsSelector} from "@app/pages/employees/components/store/selectors";
import {readEmployeeActions} from "@app/pages/employees/components/store/actions/employees.actions";
import {UserEmployeeInterface} from "@app/pages/employees/components/types/user-employee-Interface";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  employees$: Observable<UserEmployeeInterface[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(getEmployeesItemsSelector))
    this.store.dispatch(readEmployeeActions())
  }

}
