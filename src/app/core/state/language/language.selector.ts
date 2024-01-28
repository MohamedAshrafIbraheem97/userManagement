import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LanguageState } from './language.reducer';
import { SUPPORTED_LANGUAGES } from '../../model/language.enum';

export const selectLanguageState =
  createFeatureSelector<LanguageState>('language');

// to handle search state
export const selectNewLanguage = createSelector(
  selectLanguageState,
  (state) => (state ? state.selectedLanguage : null) as SUPPORTED_LANGUAGES
);
