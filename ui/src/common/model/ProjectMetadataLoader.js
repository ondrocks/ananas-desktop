// @flow 

const fs       = require('fs')
const path     = require('path')
const readdirp = require('readdirp')
const util     = require('util')
const YAML     = require('yaml')

const promiseHelper = require('../util/promise')

import type { PlainUIMetadata, PlainExtension } from './flowtypes'

class ProjectMetadataLoader {
  static INSTANCE :? ProjectMetadataLoader 

  metadata :?{[string]: PlainUIMetadata}

  loadFromDir(dir: string, extensions: {[string]:PlainExtension}) :Promise<PlainUIMetadata> {
    // load project metadata from folder {PROJECT_HOME}/metadata/ 
    // metadata (node & editor descripor) are organized by extension 
    let output = {}
    let extensionNames = []
    for (let name in extensions) {
      extensionNames.push(name)
    }
    let metaEntries = []
    return readdirp.promise(path.join(dir, 'metadata'), {
        fileFilter: ['*.yaml', '*.yml', '*.json'],
        directoryFilter: [ ... extensionNames, 'editor' ], 
        depth: 2,
      }) 
      .then(entries => {
        // copy entries
        metaEntries = entries
        // read metadata
        let tasks = entries.filter(entry => {
          for (let name in extensions) {
            if (entry.path.startsWith(path.join(name, 'metadata'))) {
              return true
            }
          }
          return false
        }).map(entry => {
          return util.promisify(fs.readFile)(entry.fullPath) 
            .then(content => {
              if (entry.basename.endsWith('json')) {
                return JSON.parse(content.toString())
              } else {
                return YAML.parse(content.toString())
              }
            })
        })
        return promiseHelper.promiseAllWithoutError(tasks)
      })
      .then(metadatas => {
        let nodes = {}
        for (let meta of metadatas) {
          nodes = { ... nodes, ... meta } 
        }
        output.node = Object.values(nodes)
        return metaEntries
      })
      .then(entries => {
        // read editor
        let tasks = entries.filter(entry => {
          for (let name in extensions) {
            if (entry.path.startsWith(path.join(name, 'editor'))) {
              return true
            }
          }
          return false
        }).map(entry => {
          return util.promisify(fs.readFile)(entry.fullPath) 
            .then(content => {
              if (entry.basename.endsWith('json')) {
                return JSON.parse(content.toString())
              } else {
                return YAML.parse(content.toString())
              }
            })
        })
        return promiseHelper.promiseAllWithoutError(tasks)
      })
      .then(editors => {
        let editorMap = {}
        for (let editor of editors) {
          editorMap[editor.id] = editor
        }
        return editorMap
      })
      .then(editors => {
        output.editor = editors
        return output
      })
  }

  static getInstance() :ProjectMetadataLoader {
    if (ProjectMetadataLoader.INSTANCE !== null && 
        ProjectMetadataLoader.INSTANCE !== undefined ) {
      return ProjectMetadataLoader.INSTANCE
    }

    ProjectMetadataLoader.INSTANCE = new ProjectMetadataLoader()
    return ProjectMetadataLoader.INSTANCE
  }
}

module.exports = ProjectMetadataLoader