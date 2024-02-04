import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AuthenticationService} from '@app/core/services/authentication/authentication.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '@app/core/services/local-storage/local-storage.service';
import {Module, Response} from '@app/core/models';
import {AppState} from '@app/core/store/app.reducers';
import {Store} from '@ngrx/store';
import {controlLogin} from '@app/core/store/actions/token.action';
import {EnvService} from '@app/core/services/env/env.service';
import {EnvServiceProvider} from '@app/core/services/env/env.service.provider';
import {ModulesService} from '@app/core/services/graphql/auth/modules/modules.service';
import {controlModules} from '@app/core/store/actions/modules.action';
import {Subscription} from 'rxjs/internal/Subscription';
import {encryptText} from "@app/core/utils/crypto/cypher";
import {ToastStyleModel} from "ecapture-ng-ui/lib/modules/toast/model/toast.model";
import {toastDataStyle} from "@app/modules/login/data/style/data.style";
import {ToastService} from "ecapture-ng-ui";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [EnvService],
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  //Assets Core
  public logo_core: string = '';
  public logo_parnet: string = '';

  public formLogin: FormGroup;
  public loginError = false;
  public url_logo: string = '';
  public slogan: string = '';
  public url_banner: string = '';
  public version: string = '';
  public nameProyect: string = '';
  public siteKey: string = '';
  public isBlock: boolean = false;
  public toastStyle: ToastStyleModel = toastDataStyle;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _route: Router,
    private _localStorageService: LocalStorageService,
    private store: Store<AppState>,
    private modulesService: ModulesService,
    private messageService: ToastService
  ) {
    this.isLogged();
    this.formLogin = this._formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
      recaptcha: [''],
    });
  }

  ngOnInit(): void {
    this.getDataDynamic();
    this.changes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login(): void {
    if (this.formLogin.valid) {
      this.loginError = false;
      this.isBlock = true;
      this.subscription.add(
        this._authenticationService.login(this.formLogin.value).subscribe(
          (resp: Response) => {
            if (resp.error) {
              this.isBlock = false;
              this.messageService.add(
                {
                  type: 'error',
                  message: resp.msg,
                  life: 5000
                }
              );
            } else {
              if (resp.data.access_token !== "") {
                this._authenticationService.setTokenSessionStorage(resp.data);
                this.store.dispatch(controlLogin({logged: true}));
              } else {
                this.loginError = true;
                this.messageService.add(
                  {
                    type: 'error',
                    message: resp.msg,
                    life: 5000
                  }
                );
              }
              this.isLogged();
            }
            this.isBlock = false;
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.messageService.add({type: 'error', message: err.message, life: 5000});
            this.isBlock = false;
            this.loginError = true;
          }),
      );
    } else {
      this.messageService.add({
        type: 'warning',
        message: 'Rellene todos los campos correctamente por favor!',
        life: 5000
      });
      this.formLogin.markAllAsTouched();
    }
  }

  private async isLogged() {
    if (this._authenticationService.isLogged()) {
      const res = await this.getModules();
      if (typeof res === "boolean") {
        this.messageService.add({
          type: 'error',
          message: 'No se pudo obtener los modulos asociados al usuario, intente nuevamente',
          life: 5000
        });
        this.isBlock = false;
        sessionStorage.clear();
        return
      }
      const modules: Module[] = res;
      sessionStorage.setItem('Modules', encryptText(JSON.stringify(modules)));
      this.store.dispatch(controlModules({modules: modules}));
      if (modules.length > 0) {
        await this._route.navigateByUrl('/home');
        this.isBlock = false;
      } else {
        this.messageService.add({
          type: 'warning',
          message: 'Su rol no tiene módulos asignados o no se pudieron traer los modulos asignados, se ha cerrado sesión automaticamente!',
          life: 5000
        });
        this.isBlock = false;
        sessionStorage.clear();
      }
    } else {
      this.isBlock = false;
    }
  }

  public getModules(): Promise<any> {
    const roles = this._localStorageService.getRoles();
    console.log(roles);
    return new Promise((res, rej) => {
      this.subscription.add(
        this.modulesService.getModulesByRole(roles, 2,).subscribe(
          (resp) => {
            if (resp.error) {
              res(resp.error);
            } else {
              res(resp.data);
            }
          },
          (err: HttpErrorResponse) => {
            this.messageService.add({type: 'error', message: err.message, life: 5000});
            res(false);
          }
        )
      );
    });
  }

  public changes(): void {
    this.subscription.add(
      this.formLogin.valueChanges.subscribe(() => {
        this.loginError = false;
      }),
    );
  }

  public getDataDynamic(): void {
    this.logo_core = EnvServiceProvider.useFactory().LOGO_CORE;
    this.logo_parnet = EnvServiceProvider.useFactory().LOGO_PARNET;

    this.url_logo = EnvServiceProvider.useFactory().LOGIN_URL_LOGO;
    this.url_banner = EnvServiceProvider.useFactory().BANNER_URL_LOGIN;
    this.slogan = EnvServiceProvider.useFactory().LOGIN_SLOGAN;
    this.version = EnvServiceProvider.useFactory().LOGIN_VERSION;
    this.nameProyect = EnvServiceProvider.useFactory().LOGIN_PROYECTO;
    this.siteKey = EnvServiceProvider.useFactory().GOOGLE_RECAPTCHA_SITEKEY;
  }

  get username() {
    return this.formLogin.get('id');
  }

  get password() {
    return this.formLogin.get('password');
  }


}
