import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://api.giphy.com/v1/gifs/search';

  getConfig(query:any) {
    return this.http.get<any>(this.configUrl, {params: {api_key:'Av5w6YVdI9tHKM4UM5m6Nu8cUQ3Ot5Fw', q:query} });
  }
}

