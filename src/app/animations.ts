// import the required animation functions from the angular animations module
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
 
export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
 
        // route 'enter' transition
        transition(':enter', [
 
            // css styles at start of transition
            style({ opacity: 0 }),
 
            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);

    export const listStagger = 
    trigger('listStagger', [
            transition('* <=> *', [
              query(':enter', [
                style({ opacity: 0, transform: 'translateY(-15px)'}),
                stagger('50ms',
                animate('550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })))
              ],{ optional: true }),
              query(':leave', animate('50ms', style({ opacity: 0 })), {
                optional: true
              })
            ])
          ])