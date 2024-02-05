import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {AppState} from "@app/core/store/app.reducers";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-system-obu';

  constructor(
    private translate: TranslateService,
    private store: Store<AppState>,
    private _localStorageService: LocalStorageService,
  ) {
    this.store.select('language').subscribe((state) => {
      this.setLanguage();
    });

    this.setLanguage();
  }

  private setLanguage(): void {
    const lang =  this._localStorageService.getLanguage();
    this.translate.setDefaultLang('es');
    this.translate.use(lang);
  }
}
