import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { ParksModel } from "../reducers/parks.reducer";

export const loadParks = createAction(
  '[parks event] load parks data'
);

export const loadParksSucceeded = createAction(
  '[parks event] successfully loaded parks data',
  props<{ parks: ParksModel[] }>()
);

export const loadParksFailed = createAction(
  '[parks event] failed to load parks data',
  props<{ error: HttpErrorResponse }>()
);
