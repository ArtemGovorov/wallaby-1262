import { FirebaseEvent } from 'common-types';
import A from './a';

it('should work', () => {
    console.log(FirebaseEvent);
    new A().test(123);
});