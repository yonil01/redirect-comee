import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private subject = new Subject<any>();

  constructor() {}

  close() {
    this.subject.next({ isOpen: false });
  }

  open() {
    this.subject.next({ isOpen: true });
  }

  getModal(): Observable<any> {
    return this.subject.asObservable();
  }
}
