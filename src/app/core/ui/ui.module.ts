import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {LocalStorageService} from '@app/core/services/local-storage/local-storage.service';
import {MenuComponent} from "@app/core/ui/menu/menu.component";
import {RouterModule} from "@angular/router";
import {MenuService} from "@app/core/ui/services/menu.service";
import {FooterComponent} from './footer/footer.component';
import {BlockPageComponent} from '@app/core/ui/block-page/block-page.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {CheckboxModule, DropdownModule, IconsModule, ToastModule} from "ecapture-ng-ui";
import {ConfirmDialogService} from "@app/core/ui/confirm-dialog/confirm-dialog.service";
import {PipesModule} from "@app/core/pipes/pipes.module";
import {EcTooltipDirective} from "@app/core/ui/directives/ec-tooltip.directive";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {DropdownComponent} from "@app/core/ui/dropdown/dropdown.component";
import {EcTemplateDirective} from "@app/core/ui/dropdown/directive/ec-template.directive";
import {QuicklinkModule} from "ngx-quicklink";

@NgModule({
  declarations: [LayoutComponent, MenuComponent, FooterComponent, BlockPageComponent, ConfirmDialogComponent, EcTooltipDirective, DropdownComponent, EcTemplateDirective],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    PipesModule,
    TranslateModule,
    DropdownModule,
    ReactiveFormsModule,
    ToastModule,
    CheckboxModule,
    QuicklinkModule
  ],
  exports: [LayoutComponent, FooterComponent, BlockPageComponent, ConfirmDialogComponent, EcTooltipDirective, DropdownComponent, EcTemplateDirective],
  providers: [LocalStorageService, MenuService, ConfirmDialogService],
})
export class UiModule {
}
