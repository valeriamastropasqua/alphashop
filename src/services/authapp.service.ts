import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string): boolean =>{
    return(userId==='Valeria' && password==='123_Stella')? true :false ;
  }
}
