import {style, animate, transition, state, trigger} from '@angular/core';


export class Animations {
  static page = [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({opacity:0}),
        animate(400, style({opacity:1})) 
      ]),
      transition('* => void',
         animate(0, style({opacity:0})) 
      )
    ])
  ];
}