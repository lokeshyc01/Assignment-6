import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
         <h1 class="custom">Marvellous Infosystems</h1>
          <div class="custom"><input type="text"></div>
  `,
  styles:[
    `.custom
    {
        color:blue;
        text-align:center
    }`


  ]
})
export class AppComponent {
  title = 'Question3';
}
