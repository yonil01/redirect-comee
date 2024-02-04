import {OnInit, Component, OnDestroy} from '@angular/core';
import {ModalService} from '@app/core/services/modal/modal.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AuthenticationService} from '@app/core/services/authentication/authentication.service';
import {EnvService} from '@app/core/services/env/env.service';
import {AppState} from '@app/core/store/app.reducers';
import {Store} from '@ngrx/store';
import {controlLogin} from '@app/core/store/actions/token.action';
import {ToastService} from "ecapture-ng-ui";
import {toastDataStyle} from "@app/modules/login/data/style/data.style";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  providers: [AuthenticationService, EnvService],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public _subscription: Subscription = new Subscription();
  public readonly toastStyle = toastDataStyle
  public form: FormGroup;
  public loginError = false;
  public isLoading = false;

  constructor(
    private modalService: ModalService,
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private store: Store<AppState>,
    private _messageService: ToastService
  ) {

    this._subscription.add(
      this.modalService.getModal().subscribe((state) => {
        this.isOpen = state.isOpen;
      })
    );

    this.form = this._formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {
    this.loginError = false;
    document.oncontextmenu  = () => false;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    document.oncontextmenu  = () => true;
  }

  public login(): void {
    this.isLoading = true;
    this._subscription.add(
      this._authenticationService.login(this.form.value).subscribe({
        next: (resp) => {
          if (resp.error) {
            this._messageService.add({type: 'error', message: resp.msg, life: 5000});
          } else {
            this._authenticationService.setTokenSessionStorage(resp.data);
            this.store.dispatch(controlLogin({logged: true}));
            this.modalService.close();
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._messageService.add({type: 'error', message: 'No se pudo realizar la autenticación, intente nuevamente!', life: 5000});
        }
      })
    );
  }


}
