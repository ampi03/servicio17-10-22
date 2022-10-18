import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Usuarios } from 'src/app/modelos/usuarios';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  colUsuarios: Usuarios[]=[]

  datosUsuarios= new FormGroup (
    {
    nombre: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required)
    }
  )

  constructor(private servicioUsuarios: LoginService) { }

  ngOnInit(): void {
    this.servicioUsuarios.getUsuarios().subscribe(
      usuarios => this.colUsuarios = usuarios
    )
  }

  inicioSesion(){
    this.servicioUsuarios.login(this.datosUsuarios, this.colUsuarios)
  }

}
