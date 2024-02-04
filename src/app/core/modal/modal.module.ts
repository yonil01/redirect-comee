import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from '@app/core/modal/auth/auth-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import {UiModule} from "@app/core/ui/ui.module";
import {ToastModule} from "ecapture-ng-ui";

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, UiModule, ToastModule],
  exports: [AuthModalComponent],
})
export class ModalModule {}
