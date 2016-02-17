// foo.js
export class Foo {
    static bar() {
        console.log('bar!');
    }
}

// bar.js
import { Foo } from './foo';

Foo.bar();
