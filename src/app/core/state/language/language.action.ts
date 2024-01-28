import { createAction, props } from '@ngrx/store';
import { SUPPORTED_LANGUAGES } from '../../model/language.enum';

// search action method
export const selectedLanguage = createAction(
  '[selectedLanguage] selectedLanguage',
  props<{ selectedLanguage: SUPPORTED_LANGUAGES }>()
);

// when search successfully returned a result
// export const searchUsersSuccess = createAction(
//   '[Search] Search Users Success',
//   props<{ users: User[] }>()
// );

// // call when an error happens when searching
// export const searchUsersFailure = createAction(
//   '[Search] Search Users Failure',
//   props<{ error: string }>()
// );
