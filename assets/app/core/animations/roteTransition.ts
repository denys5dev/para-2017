// RoteTransiton

import {animate, state,  style, transition, trigger} from "@angular/core";

export class Animations {
  public static page = [
    trigger("routeAnimation", [
      state("*", style({transform: "translateX(0)", opacity: 1})),
      transition("void => *", [
        style({opacity: 0}),
        animate(400, style({opacity: 1})),
      ]),
      transition("* => void",
         animate(0, style({opacity: 0})),
      ),
    ]),
  ];
}
