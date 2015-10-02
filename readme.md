# pdftk2json [![Build Status](https://travis-ci.org/RichardLitt/pdftk2json.svg?branch=master)](https://travis-ci.org/RichardLitt/pdftk2json)

> Convert pdftk output HTML into JSON


## Install

```
$ npm install --save pdftk2json
```


## Usage

```js
$ pdftk2json examples/small.html div > small.json
```


## API

### pdftk2json(input, node)

#### input

Type: `string`

The path to your file, not including `__dirname`.

#### node

Type: `string`

Your node type to look for, such as `span` or `div`.


## CLI

```
$ npm install --global pdftk2json
```

```
$ pdftk2json --help

  Usage
    pdftk2json [input] [node]


  Examples
    $ pdftk2json examples/small.html div
    [{"_":"kitty","style":{"color":"yellow"}}]
```


## License

MIT © [Richard Littauer](http://burntfen.com)
