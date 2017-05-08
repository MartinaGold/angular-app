import {Routes, RouterModule} from '@angular/router';
import {AddEmployeeComponent} from "./root/add-employee/add-employee.component";
import {HomeComponent} from "./root/home/home.component";
import {EmployeeRecordsComponent} from "./root/employees-records/employees-records.component";

export const APP_ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'home', component: HomeComponent},
    {path: 'add-employee', component: AddEmployeeComponent},
    {path: 'employee-records', component: EmployeeRecordsComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
