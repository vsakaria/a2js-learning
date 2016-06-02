import {Component} from '@angular/core';
import {TestComponent}  from './test-component';


//TS decorator to add meta data.
@Component({
    selector: 'e24',
    template: `<test-component></test-component>`,
    directives: [TestComponent]
})

//Module appoarch
export class e24 {

}