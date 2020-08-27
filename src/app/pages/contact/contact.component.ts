import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {
  public formSubmitted = false;
  public contactoForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      nombres     : ['',Validators.required],
      apellidos   : ['',Validators.required],
      correo      : ['',[Validators.required,Validators.email]],
      telefono    : ['',Validators.required],
      msg :['',Validators.required]
    });
  }
  enviarMsg(){
    this.formSubmitted = true;
    if( this.contactoForm.valid ){
      this.contactService.enviarCorreoContacto(this.contactoForm.value).subscribe(
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
    if( this.contactoForm.get(campo).invalid && this.formSubmitted ){
      return true
    }else{
      return false;
    }
  }
}
