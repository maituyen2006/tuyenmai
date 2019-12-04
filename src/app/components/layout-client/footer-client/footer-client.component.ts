import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer-client',
  templateUrl: './footer-client.component.html',
  styleUrls: ['./footer-client.component.scss']
})
export class FooterClientComponent implements OnInit {
  isShow: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
    

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
