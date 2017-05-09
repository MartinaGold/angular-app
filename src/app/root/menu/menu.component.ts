import {Component, OnInit} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }


}
