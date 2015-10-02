'use strict'

var fs = require('fs')
var xmlNodes = require('xml-nodes')
var xmlObjects = require('xml-objects')
var through2 = require('through2')
var splitStyle = require('inline-style-2-json')

module.exports = function pdftk2json (inputFile, node) {
  var all = []

  fs.createReadStream(__dirname + '/' + inputFile)
    .pipe(xmlNodes(node))
    .pipe(xmlObjects({explicitRoot: false, explicitArray: false, mergeAttrs: true}))
    .pipe(through2.obj(function (chunk, enc, callback) {
      chunk.style = splitStyle(chunk.style)
      this.push(chunk)
      callback()
    }))
    .on('data', function (data) {
      all.push(data)
    })
    .on('end', function (data) {
      if (all.length !== 0) {
        process.stdout.write(JSON.stringify(all) + '\n')
      }
    })
}
