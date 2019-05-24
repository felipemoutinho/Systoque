import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduto } from './produto/produto.model';
import { SYSTOQUEAPI } from '../app.api';


const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProduto(cb: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${SYSTOQUEAPI}/produtos/${cb}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  createProduto(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(`${SYSTOQUEAPI}/produtos`, produto, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
