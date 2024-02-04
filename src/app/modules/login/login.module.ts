import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '@app/modules/login/login.component';
import { AuthenticationService } from '@app/core/services/authentication/authentication.service';

import {EnvService} from "@app/core/services/env/env.service";
import {TranslateModule} from "@ngx-translate/core";
import {
    ButtonTabModule, DropdownModule,
    IconsModule,
    InputDateModule,
    InputPasswordModule,
    InputTextModule, ModalModule, ToastModule, ToastService, ToggleModule
} from "ecapture-ng-ui";
import {UiModule} from "@app/core/ui/ui.module";
@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule,
        ButtonTabModule,
        InputTextModule,
        InputPasswordModule,
        IconsModule,
        InputDateModule,
        DropdownModule,
        ToggleModule,
        ToastModule,
        ModalModule,
        UiModule,
    ],
  providers: [AuthenticationService, EnvService, ToastService],
})
export class LoginModule {}
