import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { SYSTOQUEAPI } from '../app.api';
import { IRegistroItens } from './venda-item.model';

const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroVendaService {

  constructor(private http: HttpClient) { }

  createVenda(venda: IRegistroItens): Observable<IRegistroItens> {
    return this.http.post<IRegistroItens>(`${SYSTOQUEAPI}/vendas`, venda, httpOptions)
      .pipe(
        tap(data => this.getIdVenda(data)),
        catchError(this.handleError)
      );
  }


  getIdVenda(obj: any) {
    return(obj.insertId);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
