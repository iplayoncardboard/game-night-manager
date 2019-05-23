import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Event } from './event';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    private eventsUrl = 'api/events'

    constructor(private http: HttpClient){}

    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(`${this.eventsUrl}/`)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    errorHandler(err) {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent){
            errorMessage = `An Error Occurred ${err.error.errorMessage}`
        } else {
            errorMessage = `Backend Returned Code ${err.status}: ${err.body.error}`;
        }
        console.warn(errorMessage);
        return throwError(errorMessage);
    }
}
