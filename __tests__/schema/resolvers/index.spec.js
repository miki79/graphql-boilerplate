import resolvers from '../../../src/schema/resolvers';

describe('Resolvers', () => {
    test('Counter query should return count = 5', () => {
        let counter = resolvers.Query.counter();
        return expect(counter.count).toBe(5);
    });
});
