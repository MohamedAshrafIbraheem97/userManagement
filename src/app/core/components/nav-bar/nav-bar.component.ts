import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SUPPORTED_LANGUAGES } from '../../model/language.enum';
import { selectedLanguage } from '../../state/language/language.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
  selectedLanguage = SUPPORTED_LANGUAGES.en;
  otherLanguage = SUPPORTED_LANGUAGES.ar;
  constructor(public store: Store) {}
  toggleLanguage() {
    this.selectedLanguage =
      this.selectedLanguage === SUPPORTED_LANGUAGES.en
        ? SUPPORTED_LANGUAGES.ar
        : SUPPORTED_LANGUAGES.en;
    this.otherLanguage =
      this.selectedLanguage === SUPPORTED_LANGUAGES.en
        ? SUPPORTED_LANGUAGES.ar
        : SUPPORTED_LANGUAGES.en;
    this.store.dispatch(
      selectedLanguage({ selectedLanguage: this.selectedLanguage })
    );
  }
}
