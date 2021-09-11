import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getCurrentUser} from "@app/shared/dictionary/init/selectors";
import {filter, take} from "rxjs/operators";

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private store: Store) {}

  resolve(): Observable<any> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      take(1)
    );
  }

}
