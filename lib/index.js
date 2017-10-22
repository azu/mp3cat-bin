'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '3.0.0';
var BASE = 'https://github.com/dmulholland/mp3cat/releases/download/' + VERSION + '/';

module.exports = new BinWrapper()
	.src(BASE + 'linux.zip', 'linux', '386')
	.src(BASE + 'linux.zip', 'linux', 'amd64')
	.src(BASE + 'mac.zip', 'darwin')
	.src(BASE + 'windows.zip', 'windows', '386')
	.src(BASE + 'windows.zip', 'windows', 'amd64')
	.dest(path.join(__dirname, '../vendor'))
	.use('mp3cat');
