import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  enviarCorreoReserva( data:any ){
    const url = `${base_url}/send/email/reserva`;
    return this.http.post(url, data);
  }

  enviarCorreoContacto( data:any ){
    const url = `${base_url}/send/email/contacto`;
    return this.http.post(url, data);
  }

}
