import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../interfaces/employee";
import * as _ from "lodash";

@Component({
    selector: 'app-add-employee',
    templateUrl: 'add-employee.component.html',
    styleUrls: ['add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
    private employee: Employee = {
        name: '',
        age: 18,
        position: ''
    };
    private isSuccessAddEmployee = false;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    addEmployee(employee: Employee) {
        const clonedEmployee = _.clone(employee);
        clonedEmployee.id = this.generateRandomId();
        this.employeeService.addEmployee(clonedEmployee).subscribe(() => {
            this.isSuccessAddEmployee = true;
        });
    }

    private generateRandomId() {
        return Math.floor(Math.random() * (100000000 - 1 + 1)) + 1;
    }
}
