/* Copyright (c) 2013 Alan Bradley, MIT License */
"use strict"

var nid = require('nid')({length:8})

module.exports = function(options) {
  var seneca = this
  var plugin = 'cms'

  //seneca.add({role:plugin, cmd:'load'}, cmd_load)
  seneca.add({role:plugin, cmd:'list'}, cmd_list)
  seneca.add({role:plugin, cmd:'remove'}, cmd_remove)
  seneca.add({role:plugin, cmd:'save'}, save)

  function cmd_get(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.list$({name: args.name}, function(err, list) {
    })
  }

  function cmd_list(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.list$(function(err, list) {
      if(err) return done(err)

      return done(null, {ok: true, elements: list})
    })
  }

  function cmd_remove(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.remove$(args.id, done)
  }

  function save(args, done) {
    var seneca = this
    var elm = seneca.make('cms/element')

    if (args.id) elm.id = args.id
    else elm.id = nid() 
    elm.name = args.name
    elm.content = args.content

    elm.save$(function(err, elm) {
      if(err) return done(err)

      return done(null, {ok: true, element:elm})
    })
  }

  return {
    name: plugin
  }
}
