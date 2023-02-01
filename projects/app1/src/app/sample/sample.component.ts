import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  lang!: string;
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);
    document.documentElement.lang = this.lang;
  }
}
