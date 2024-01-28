import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectNewLanguage } from './core/state/language/language.selector';
import { SUPPORTED_LANGUAGES } from './core/model/language.enum';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'userManagement';
  SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
  languageDirection: Direction = 'ltr';
  supportedLanguages: SUPPORTED_LANGUAGES[] =
    Object.values(SUPPORTED_LANGUAGES);
  constructor(public translate: TranslateService, private store: Store) {
    translate.addLangs(this.supportedLanguages);
    translate.setDefaultLang(SUPPORTED_LANGUAGES.en);
    this.store.select(selectNewLanguage).subscribe((language) => {
      translate.use(language);
      this.languageDirection =
        language === SUPPORTED_LANGUAGES.en ? 'ltr' : 'rtl';
    });
  }
}
