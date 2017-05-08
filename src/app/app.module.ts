import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {MenuComponent} from './root/menu/menu.component';
import {AddEmployeeComponent} from './root/add-employee/add-employee.component';
import {HomeComponent} from './root/home/home.component';
import {EmployeeRecordsComponent} from './root/employees-records/employees-records.component';
import {TranslateModule} from "ng2-translate";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        AddEmployeeComponent,
        HomeComponent,
        EmployeeRecordsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TranslateModule.forRoot()

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
