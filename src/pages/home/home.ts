import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage() // modulo lazy page

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu: MenuController) {
  }

 // quando a aplicação rodar eu retiro o menu da tela inicial

ionViewWillEnter(){
  this.menu.swipeEnable(false);
}

// So irei trazer o menu quando sair da tela inicial 
ionViewDidLeave(){
  this.menu.swipeEnable(true);
}


  // ao realizar o login o usuario vai ser direcionado a pagina de Categoria
login(){
  // para direcionar uma pagina à outra é utilizado o NavController
  this.navCtrl.setRoot('CategoriasPage');
}




}
