import { Injectable } from '@angular/core';
import {NoCounberService} from "./no-counber.service";
import {AngularFireDatabase} from "@angular/fire/database";
import {ScmDomain} from "./scm-shared-util";
import {take} from 'rxjs/operators';
import {FirebaseListFactoryOpts} from "@angular/fire/database-deprecated/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(
    private db: AngularFireDatabase,
    private counter: NoCounberService
  ) { }
  findObject$(domain: ScmDomain,no:number) {
    return this._findObject(domain, no, false);
  }
  findObjectSnapshot(domain: ScmDomain,no:number) {
    return this._findObject(domain, no, true).take(1);
  }
  private _findObject(domain: ScmDomain, no: number, isSnapshot: boolean) {
    if ( isSnapshot ) {
      return this.db.object(`/${domain}/${no}`, {preserveSnapshot: true});
    }
    return this.db.object(`/${domain}/${no}`);
  }
  findList$(domain: ScmDomain) {
    return this.db.list(`/${domain}`);
  }
  findList$ByQuery(domain: ScmDomain,queryKey: string, queryVal: any) {
    const option: FirebaseListFactoryOpts = {query: {orderByChild: queryKey, equalTo: queryVal}};
    return this._findListByOpt(domain,option).take(1);
  }
  findList$ByPage(domain: ScmDomain,pageNo,pageSize,totalCnt) {
    const offset = totalCnt - pageSize*(pageNo-1);
    const option: FirebaseListFactoryOpts = {
      query: {
        orderByChild:'no',
        endAt:offset,
        limitToLast: pageSize
      }
    };
    return this._findListByOpt(domain, option);
  }

  private _findListByOpt(domain: ScmDomain, option: FirebaseListFactoryOpts) {
    return this.db.list(`/${domain}`, option);

  }

}
