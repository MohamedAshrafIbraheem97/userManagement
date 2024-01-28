import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { languageReducer } from './core/state/language/language.reducer';
import { UserManagementModule } from './user-management/user-management.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent, NavBarComponent, DeleteDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserManagementModule,
    AuthModule,
    StoreModule.forRoot({ language: languageReducer }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
