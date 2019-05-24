import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


import { SYSTOQUEAPI } from '../app.api';
import { IExtrato } from './extrato-comissao/extrato.model';
import { IProduto } from '../produtos/produto/produto.model';


const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  constructor(private http: HttpClient) { }

  getExtratoComissao(extrato): Observable<IExtrato[]> {
    return this.http.post<IExtrato[]>(`${SYSTOQUEAPI}/extrato-comissao`, extrato, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProdutosEmFalta(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${SYSTOQUEAPI}/produtos-em-falta`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProdutosEmEstoque(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${SYSTOQUEAPI}/produtos-em-estoque`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFaturamento(faturamento): Observable<IExtrato[]> {
    return this.http.post<IExtrato[]>(`${SYSTOQUEAPI}/faturamento`, faturamento, httpOptions)
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
