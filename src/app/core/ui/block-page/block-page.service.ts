import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class BlockPageService {

  private blockPageSubject = new Subject<boolean>();

  public blockPageSource$ = this.blockPageSubject.asObservable();

  public setBlockPage(show: boolean): any {
    this.blockPageSubject.next(show);
  }

}
