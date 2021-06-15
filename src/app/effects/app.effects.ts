import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { applicationStarted } from '../actions/app.actions';
import { loadParks } from '../actions/parks.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

  loadParksOnAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => loadParks())
    )
  );
}
