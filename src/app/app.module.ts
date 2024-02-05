import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FuseProgressBarModule} from "./core/components/progress-bar/progress-bar.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "ecapture-ng-ui";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UiModule} from "./core/ui/ui.module";
import {ModalModule} from "@app/core/modal/modal.module";
import {appReducers} from "@app/core/store/app.reducers";
import {StoreModule} from "@ngrx/store";
import {GraphQLModule} from "@app/graphql.module";



export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuseProgressBarModule,
    ReactiveFormsModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    UiModule,
    ModalModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
