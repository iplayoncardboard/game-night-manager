import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable() 
export class BoardGameGeekService {

    constructor(private http$: HttpClient) {}
    private corsOverride = 'https://cors-escape.herokuapp.com/'

    bggXMLAPI1 () {
        const baseURL = `${this.corsOverride}https://www.boardgamegeek.com/xmlapi`

        return this.http$.get(baseURL);
    }

    bggXMLAPI2() {
       let params = { type:'boardgame'};
       let baseURL: 'https://www.boardgamegeek.com/xmlapi2';
        
       return this.http$.get(baseURL, {params: params})
    }
}

