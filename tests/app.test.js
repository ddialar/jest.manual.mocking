import 'jest';

import calculator from '../src/utils/__mocks__/calculator.mock';

import * as server from '../src/app';

describe('Testing the use of the \'calculator\' module', () => {
    test('Testing doASum ...', () => {
        expect(server.doASum()).toEqual(15);
    });
});