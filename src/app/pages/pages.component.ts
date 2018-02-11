import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'aud-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [

       /* query(':enter, :leave', style({ position: 'absolute'})
      , { optional: true }),*/

      group([

        query(':enter', [

          style({ transform: 'translateX(100%) scale(.5)', opacity: 0 }),
          animate('.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))

        ], { optional: true }),
        query(':leave', [

          style({ transform: 'translateX(0%) translateY(-100%)' }),
          animate('.5s ease-in-out', style({ transform: 'translateX(-100%) translateY(-100%) scale(.5)', opacity: 0 }))

        ], { optional: true })

      ])

      ])
    ])
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  routeState(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
