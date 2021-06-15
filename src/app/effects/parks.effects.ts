import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { loadParks, loadParksFailed, loadParksSucceeded } from '../actions/parks.actions';
import { ParksService } from '../services';

@Injectable()
export class ParksEffects {
  constructor(private actions$: Actions, private service: ParksService) { }

  logItOut$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log('got an action of type: ', a))
    ), { dispatch: false }
  );

  loadParks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadParks),
      switchMap(() => this.service.getParks()),
      map(parks => loadParksSucceeded({ parks })),
      catchError(error => of(loadParksFailed({ error })))
    ), { dispatch: true }
  );
}
