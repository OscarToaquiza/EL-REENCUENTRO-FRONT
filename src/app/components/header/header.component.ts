import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  public formSubmitted = false;
  public reservaForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { 
  }

  ngOnInit(): void {
    this.reservaForm = this.fb.group({
      nombres     : ['',Validators.required],
      apellidos   : ['',Validators.required],
      correo      : ['',[Validators.required,Validators.email]],
      telefono    : ['',Validators.required],
      fechaPrevista: ['',Validators.required],
      numPersonas : ['',Validators.required],
      observacion :['',Validators.required]
    });
  }

  enviarMsg(){
    this.formSubmitted = true;
    if( this.reservaForm.valid ){
      console.log(this.reservaForm.value);
      this.contactService.enviarCorreoReserva(this.reservaForm.value).subscribe(
        resp => {
          Swal.fire("El Reencuentro","Mensaje envido con exito","success")
        },
        error => {
          console.log(error);
          Swal.fire("Error","Error temporal intente mas tarde","error")
        }
      );
    }
  }

  campoValido( campo: string ):boolean{
    if( this.reservaForm.get(campo).invalid && this.formSubmitted ){
      return true
    }else{
      return false;
    }
  }

}
