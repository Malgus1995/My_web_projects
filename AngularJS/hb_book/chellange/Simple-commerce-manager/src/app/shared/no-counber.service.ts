import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { ScmDomain } from './scm-shared-util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoCounberService {
  get(domain: Observable<number>) {
    return this._getNumber$(domain).map( o => o.$value || 0 );
  }

  private _getNumber$(domain: ScmDomain) {
    return this.db.object(`/numbers${domain}`);
  }

  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) { throw new Error(`failed to increase number`); }

      if ( comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this._getNumber$(domain).$ref.transaction(num => (num || 0) + 1, onComplete);
    return id$;
  }

  constructor(private db: AngularFireDatabase) { }
}
