import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pryreencuentro';

  public selectLang = 'es';
  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }

  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
    this.selectLang = language;
  }

}
