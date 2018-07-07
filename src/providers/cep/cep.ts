import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepProvider {

  constructor(public http: Http) {
    
  }

  listarEndereco(cep : number){
    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(url, {headers: headers}).toPromise();
  }

}
