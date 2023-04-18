import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
texto : string = '';
verdade : string = '';
isPalindromo() : void{
  let inverso = this.texto.split('').reverse().join('');

  if(this.texto == inverso){
this.verdade = "É um Palindromo";
  }else{
    this.verdade = "Não é um palindromo"
  }
}

}
