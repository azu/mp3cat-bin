import test from 'ava';
import binCheck from 'bin-check';
import mp3cat from './';

test('returns path to binary and verify that it is working', async t => {
	t.true(await binCheck(mp3cat, ['--help']));
});
