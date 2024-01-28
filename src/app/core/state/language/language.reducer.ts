import { createReducer, on } from '@ngrx/store';
import * as LanguageActions from './language.action';
import { SUPPORTED_LANGUAGES } from '../../model/language.enum';

export interface LanguageState {
  selectedLanguage: SUPPORTED_LANGUAGES;
}

const initialState: LanguageState = {
  selectedLanguage: SUPPORTED_LANGUAGES.en,
};

export const languageReducer = createReducer(
  initialState,
  on(LanguageActions.selectedLanguage, (state, { selectedLanguage }) => ({
    ...state,
    selectedLanguage: selectedLanguage,
  }))
  //   on(SearchActions.searchUsersSuccess, (state, { users }) => ({
  //     ...state,
  //     users,
  //     error: null,
  //     loading: false,
  //   })),
  //   on(SearchActions.searchUsersFailure, (state, { error }) => ({
  //     ...state,
  //     error,
  //     loading: false,
  //   }))
);
