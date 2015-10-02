#!/usr/bin/env node
'use strict'
var meow = require('meow')
var pdftk2json = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ pdftk2json [input] [node]',
    '',
    'Examples',
    '  $ pdftk2json examples/small.html div',
    '  [{"_":"kitty","style":{"color":"yellow"}}]'
  ]
})

pdftk2json(cli.input[0], cli.input[1])
