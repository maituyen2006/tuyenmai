import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2-client',
  templateUrl: './banner2-client.component.html',
  styleUrls: ['./banner2-client.component.scss']
})
export class Banner2ClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/vendor/lightbox2/js/lightbox.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
}
