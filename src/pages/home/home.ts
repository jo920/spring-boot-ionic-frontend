import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage() // modulo lazy page

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  // ao realizar o login o usuario vai ser direcionado a pagina de Categoria
login(){
  // para direcionar uma pagina à outra é utilizado o NavController
  this.navCtrl.setRoot('CategoriasPage');
}

}
