import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflixcom';
  navbg:any;
  
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllenth#');
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0)
    {
      this.navbg={
        'background-color':' #000000'
      }
    }
    else{
              this.navbg={  
              }
    }
  }
}
