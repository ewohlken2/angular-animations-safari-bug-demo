import { Component } from '@angular/core';
import { state, animateChild, stagger, trigger, query, transition, animate, style, group} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('testAnimation', [
        state('below, none, void', style({
            opacity: 0,
            transform: 'translate3d(-100px, 0, 0)',
        })),
        state('in, above', style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        })),
        transition('* => in', [
            group([
                animate(`1000ms ease`, style({
                    transform: 'translate3d(0, 0, 0)',
                })),
                animate(`300ms ease`, style({
                    opacity: 1,
                }))
            ])
        ])
    ]),
    trigger('parentAnimation', [
      transition('* => in', [
        query('@testAnimation', [
            stagger(200, [
                animateChild()
            ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  state;

  ngOnInit() {
    this.state = 'in';
  }
}
