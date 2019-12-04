import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-client',
  templateUrl: './slide-client.component.html',
  styleUrls: ['./slide-client.component.scss']
})
export class SlideClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
   

  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/scriptSlide.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}


}
