import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Prevision } from '../objects/prevision';
import { catchError, tap } from 'rxjs/operators';
import { Carte } from '../objects/carte';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    /**
   * Return the list of the Freights
   *
   * @return  {Observable<Freight[]>}
   */
  getPrevision(cartes : Carte[]): Observable<Prevision> {
    let url : string = 'https://pok-api.herokuapp.com/obtenirPrevision?apiKey=ctgadfzcowmltzobjpnapud&';
    for (let index = 1; index <= cartes.length; index++) {
      url = url + '&carte' + index + '=' + cartes[index-1].nomCarte

    }
    return this.http
      .get<Prevision>(url)
      .pipe(catchError(this.handleError('api.freight.error')));
  }

   /**
   * Return the list of the Freights
   *
   * @return  {Observable<Freight[]>}
   */
  getPaquetDeCarte(): Observable<Carte[]> {
    return this.http
      .get<Carte[]>('https://pok-api.herokuapp.com/getPaquetCarte')
      .pipe(catchError(this.handleError('api.freight.error')));
  }

  private handleError(message = 'An error occured'): any {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.messageService.add(MessageType.Error, message);

      return throwError(error.statusText);
    };
  }


}
