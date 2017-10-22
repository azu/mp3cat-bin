'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('mp3cat binary test failed');
		return;
	}

	log.success('mp3cat binary test passed successfully');
});
