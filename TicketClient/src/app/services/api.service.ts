import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetailedShow } from '../models/detailed-show.interface';
import { FAKE_SHOWS, Show } from '../models/show.interface';

@Injectable()
export class ApiService {
  constructor() {}

  getShows(): Observable<Array<Show>> {
    return of(FAKE_SHOWS);
  }

  getDetailedShow(id: string): Observable<DetailedShow> {
    return of(FAKE_SHOWS[0]);
  }
}
