/* Copyright (c) 2013 Alan Bradley, MIT License */
"use strict"

var seneca = require('seneca')
var test = require('tap').test

var si = seneca()
si.use('..')

var cmspin = si.pin({role:'cms', cmd:'*'})

console.dir(cmspin)

test('save new element to cms', function(t){
  cmspin.save({id:undefined, name: 'test1', content:'<div>Test</div>'}, function(err, elm){
    // FIX: check err is null

    t.ok(elm.ok, 'Element not saved.')
    t.end()
  })

})
