import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'lukasz-siwek', firstName: 'Lukasz', lastName: 'Siwek'},
                {id: 'patrycja-mila', firstName: 'Patrycja', lastName: 'Mila'}
            ];

            const expected = [
                {value: 'lukasz-siwek', text: 'Lukasz Siwek'},
                {value: 'patrycja-mila', text: 'Patrycja Mila'}
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});