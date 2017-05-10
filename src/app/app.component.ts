import {Component} from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {environment} from "../environments/environment";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EmployeeService]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(environment.language);
  }
}
