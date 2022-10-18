import { Injectable } from '@angular/core';
import { Usuarios } from '../modelos/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoged = false;
  private coleccionUsuarios: AngularFirestoreCollection<Usuarios>

  constructor(private db: AngularFirestore) { 
    this.coleccionUsuarios = db.collection('usuarios');
  }

  getUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }

  login(form:FormGroup, usuariosCol: Usuarios[]){
    let texto = "No inició"
    if(form.valid){
      usuariosCol.forEach(
        usuario=>{
          if(form.value.nombre === usuario.nombre){
            if(form.value.contrasena === usuario.contrasena){
              this.isLoged = true;
              texto = "Inició sesión";
            }
          }
        }
      )
      alert(texto);
    }
  }

  estaLogueado(){
    return this.isLoged
  }  
}
