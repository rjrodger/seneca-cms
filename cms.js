/* Copyright (c) 2013 Alan Bradley, MIT License */
"use strict"

module.exports = function(options) {
  var seneca = this
  var plugin = 'cms'

  seneca.add({role:plugin, cmd:'getById'}, cmd_getById)
  seneca.add({role:plugin, cmd:'getByName'}, cmd_getByName)
  seneca.add({role:plugin, cmd:'getAll'}, cmd_getAll)
  seneca.add({role:plugin, cmd:'delete'}, cmd_delete)
  seneca.add({role:plugin, cmd:'createUpdate'}, cmd_createUpdate)

  function cmd_getById(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.load$(args.id, function(err, done) {
    })
  }

  function cmd_getByName(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.list$({name: args.name}, function(err, list) {
    })
  }

  function cmd_getAll(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.list$(function(err, list) {
    })
  }

  function cmd_delete(args, done) {
    var seneca = this
    var element = seneca.make('cms/element')
    element.remove$(args.id, done)
  }

  function cmd_createUpdate(args, done) {
    var seneca = this
    var elem = seneca.make('cms/element')

    if (args.id) elm.id = args.id
    elm.name = args.name
    elm.content = args.content

    elm.save$(function(err, elm) {
      done(err)
    })
  }

  return {
    name: plugin
  }
}
