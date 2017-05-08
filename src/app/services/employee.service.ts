import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../interfaces/employee";
import * as _ from "lodash";

let employeesRecords: Array<Employee> = [
    {
        name: 'Karel Novák',
        age: 25,
        position: 'Účetní',
        id: 0
    },
    {
        name: 'Petra Nováková',
        age: 25,
        position: 'Asistentka',
        id: 1
    },
    {
        name: 'Petr Fiala',
        age: 25,
        position: 'Ředitel',
        id: 2
    },
    {
        name: 'Karel Musil',
        age: 25,
        position: 'Údržbář',
        id: 3
    }
];

@Injectable()
export class EmployeeService {

    constructor() { }

    public addEmployee(employee: Employee) {
       return this.mockPost(employee);
    }

    public getEmployeeRecords() {
        return this.getEmployeeMock();
    }

    public deleteEmployee(employee) {
        _.remove(employeesRecords, (employeeRecord) => {
            return employeeRecord.id === employee.id;
        });
    }

    private mockPost(employee) {
        return new Observable((observer) => {
            observer.next();
            observer.complete();
            employeesRecords.push(employee);
        });
    }

    private getEmployeeMock() {
        return new Observable((observer) => {
            observer.next(employeesRecords);
            observer.complete()
        })
    }


}


