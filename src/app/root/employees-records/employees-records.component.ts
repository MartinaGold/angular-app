import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {Employee} from "../../interfaces/employee";

@Component({
    selector: 'app-employees-records',
    templateUrl: 'employees-records.component.html',
    styleUrls: ['employees-records.component.scss']
})
export class EmployeeRecordsComponent implements OnInit {
    private employeesRecords: Observable<Array<Employee>>;

    constructor(private employeeService: EmployeeService) {
        this.employeesRecords = employeeService.getEmployeeRecords();
    }

    ngOnInit() {
    }

    deleteEmployee(employee) {
        this.employeeService.deleteEmployee(employee);
    }

}
