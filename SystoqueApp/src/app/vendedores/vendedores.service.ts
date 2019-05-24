import { Injectable } from '@angular/core';
import { Vendedor } from './vendedor/vendedor.model';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SYSTOQUEAPI } from '../app.api';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {


  createVendedor(vendedor: Vendedor): Observable<Vendedor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(JSON.stringify(vendedor));
    return this.http.post(`${SYSTOQUEAPI}/vendedores`, JSON.stringify(vendedor), new RequestOptions ({headers: headers}))
    .pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  getVendedores(): Observable<Vendedor[]> {
    return this.httpCliente.get<Vendedor[]>(`${SYSTOQUEAPI}/vendedores`)
      .pipe(catchError(this.handleError));
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `Ocorreu um erro: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Servidor Backend retornou codigo ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  constructor(private http: Http, private httpCliente: HttpClient) { }
}
