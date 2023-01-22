import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testes_unitarios';

  public soma(valor1: number, valor2: number){
    return valor1 + valor2;
  }
}
