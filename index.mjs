import assert from 'node:assert';


assert.match('I will fail', /pass/);
// AssertionError [ERR_ASSERTION]: The input did not match the regular ...
assert.match(123, /pass/);
// AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.
assert.match('I will pass', /pass/);
// OK
