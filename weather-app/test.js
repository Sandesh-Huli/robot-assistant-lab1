// test.js

const assert = require('assert');

// Sample function to be tested
const add = (a, b) => a + b;

// Unit tests
describe('Addition Tests', () => {
    it('should return 5 when adding 2 and 3', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    it('should return 7 when adding 3 and 4', () => {
        assert.strictEqual(add(3, 4), 7);
    });

    it('should return 0 when adding -1 and 1', () => {
        assert.strictEqual(add(-1, 1), 0);
    });
});

// Sample test for app security (mocking process.env)
describe('Environment Variable Tests', () => {
    before(() => {
        process.env.WEATHER_API_KEY = 'test-api-key'; // Mocking the API key
    });

    it('should run without error if WEATHER_API_KEY is set', () => {
        assert.doesNotThrow(() => {
            require('./weather-app/app'); // This should not throw
        });
    });

    after(() => {
        delete process.env.WEATHER_API_KEY; // Clean up after tests
    });

    it('should fail if WEATHER_API_KEY is not set', () => {
        delete process.env.WEATHER_API_KEY; // Remove the env variable
        assert.throws(() => {
            require('./weather-app/app'); // This should throw due to no API key
        }, {
            name: 'Error',
            message: 'CRITICAL ERROR: No API Key found!'
        });
    });
});
