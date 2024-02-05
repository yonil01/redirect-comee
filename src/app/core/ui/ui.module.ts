import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {BlockPageComponent} from "./block-page/block-page.component";

@NgModule({
  declarations: [BlockPageComponent],
  imports: [
    CommonModule,

    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [BlockPageComponent],
  providers: [],
})
export class UiModule {
}
