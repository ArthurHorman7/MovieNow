import { Consultar } from './../model/indicacao';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {

  // PEGANDO A URL DA API PARA FAZER A COMUNICAÇÃO
  consultaUrl = "http://www.omdbapi.com/";
  consultaKey = "&apikey=c90cf684"

  constructor(private http: HttpClient) {}

  indicaFilmes(i:string): Observable<Consultar>{
    return this.http.get<Consultar>(this.consultaUrl  + '?i=' + i + this.consultaKey);
  }

  consultarFilmes(t:string): Observable<Consultar>{
    return this.http.get<Consultar>(this.consultaUrl  + '?t=' + t + this.consultaKey);
  }
}
