#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2))
var shell = require('shelljs')
var pathExists = require('path-exists')
var updateNotifier = require('update-notifier')
var AdmZip = require('adm-zip')

var pkg = require('./package.json')
var pwd = path.resolve(__dirname)

/**
 * Arguments:
 *   --version  - to print current version
 *   --verbose  - to print logs while init
 *   --app-type - comming soon
*/

updateNotifier({pkg}).notify()

var commands = argv._
if (commands.length === 0) {
    if (argv.version) {
        console.log('jb-create-project version: ' + pkg.version)
        process.exit()
    }

    console.error( 'Usage: jb-create-project <project-directory> [--verbose]' )
    process.exit(1)
}

makeProject(commands[0], argv.verbose, argv['app-type'])

function makeProject(name, verbose, version) {
    var root = path.resolve(name)
    var appName = path.basename(root)

    if (!pathExists.sync(name)) {
        fs.mkdirSync(root);
    }

    var zip = new AdmZip(path.resolve(pwd, 'projects/es6-oraclejet.zip'))
    console.log('Unzipping proyect.');

    zip.getEntries()
        .forEach(function(zipEntry) {
            var dir = zipEntry.entryName
            if (dir.indexOf('__MACOSX') < 0 && dir.indexOf('.git') < 0 && dir.indexOf('.DS_Store') < 0){
                if (verbose){
                    console.log('  - Unzipped : ' + dir + '\n')
                }
                zip.extractEntryTo(dir, root, true, true)
            }
        });
    console.log('Jet project successfully created at: ' + root + '\n')

    console.log('Installing dependencies (npm install).');
    shell.cd(root)
    shell.exec('npm install', {silent: true})

    console.log('Installing dependencies (bower install).');
    shell.exec('bower install', {silent: true})
    
    console.log('We suggest that you begin by typing:\n')

    console.log('cd ' + root + ' npm run dev\n')


    process.exit()
}