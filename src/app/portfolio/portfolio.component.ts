import {Component, OnInit, AfterViewInit, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {

   constructor(private elementRef: ElementRef) {

   }

   ngAfterViewInit() {
     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
     this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'auto';
  }

  ngOnDestroy() {
     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#2b3d4b';
     this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
  }

  ngOnInit() {
  }

  moveDown(e) {
     let sectionTarget;

     if (e.target.text === 'O mnie') {
       sectionTarget = document.querySelector('.about-me');
     } else {
       sectionTarget = document.querySelector('.projects');
     }

     sectionTarget.scrollIntoView({
      behavior: 'smooth'
    });
  }


}
