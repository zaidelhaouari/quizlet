import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mot } from './model/mot';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizlet';

  estCeQueJafficheEnArabe: boolean = true;
  index:number = 0;

  liste: Mot[] = [
      {arabe: "1 أحبّ", francais: "fr1"},
      {arabe: "أحبّ 2", francais: "fr2"},
  ];

  constructor(){
  }

  ngOninit(){
  }


  tourner() : void {

    console.log(this.estCeQueJafficheEnArabe)
    if(this.estCeQueJafficheEnArabe){
      this.estCeQueJafficheEnArabe = false;
    }
    else{
      this.estCeQueJafficheEnArabe = true;
    }
  }

  passerALaCarteSuivante() : void {
    console.log(this.index);
    this.estCeQueJafficheEnArabe = true;
    this.index = this.index + 1;
    if(this.index >= this.liste.length){
      this.index = 0;
    }
  }

  recupererListe(){
  }

}
