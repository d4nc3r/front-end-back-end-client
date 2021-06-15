import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ParksModel } from '../reducers/parks.reducer';


export interface ServerResponse {
  data: ParksModel[]
};

@Injectable()
export class ParksService {

  constructor(private http: HttpClient) { }

  getParks(): Observable<ParksModel[]> {
    return this.http.get<ServerResponse>(`${environment.apiUrl}/references/parks`).pipe(
      map(response => response.data)
    );
  }
}
