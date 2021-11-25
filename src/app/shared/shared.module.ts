import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { MenuClient } from './menu-items/menu-client';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [ MenuItems,MenuClient ]
})
export class SharedModule { }
