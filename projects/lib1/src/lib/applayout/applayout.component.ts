import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare function name(): any;

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class ApplayoutComponent implements OnInit {

  lang!: string;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);
    document.documentElement.lang = this.lang;
  }

  ngOnInit(): void {
    name();
  }

  changeLang(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
      const value = event.target.value;
      localStorage.setItem('lang', value);
      window.location.reload();
    }
  }

}
