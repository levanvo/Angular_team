import { Component } from '@angular/core';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent {
  ValueSearch:string="";//value search

  Search(){
    console.log(this.ValueSearch);
    
  }
}
