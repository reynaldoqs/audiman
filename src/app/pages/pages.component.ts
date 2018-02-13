import { Component, OnInit } from '@angular/core';
import { informationTransitions, galleryTransitions } from '../animations/router.animations';

@Component({
  selector: 'aud-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [ informationTransitions, galleryTransitions]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  routeState(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
