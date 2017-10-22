# mp3cat-bin [![Build Status](https://travis-ci.org/azu/mp3cat-bin.svg?branch=master)](https://travis-ci.org/azu/mp3cat-bin)

> Binary wrapper for mp3cat - concat mp3 files.
> https://github.com/dmulholland/mp3cat


## CLI

```sh
$ npm install --save mp3cat-bin
```

```sh
$ mp3cat --help
```

## API

```sh
$ npm install --save mp3cat-bin
```

```js
const execFile = require('child_process').execFile;
const mp3cat = require('mp3cat-bin');

execFile(mp3cat, ['--help'], (err, stdout) => {
    console.log(stdout);
});
```

## License

MIT @ azu
