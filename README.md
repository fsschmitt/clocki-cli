# ClocKI

A simple tool to track in-and-out time and taks done during the day

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/clocki.svg)](https://npmjs.org/package/clocki)
[![Downloads/week](https://img.shields.io/npm/dw/clocki.svg)](https://npmjs.org/package/clocki)
[![License](https://img.shields.io/npm/l/clocki.svg)](https://github.com/fsschmitt/clocki-cli/blob/master/package.json)

<!-- toc -->
* [ClocKI](#clocki)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g clocki
$ clocki COMMAND
running command...
$ clocki (-v|--version|version)
clocki/0.0.1 darwin-x64 node-v10.10.0
$ clocki --help [COMMAND]
USAGE
  $ clocki COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`clocki help [COMMAND]`](#clocki-help-command)
* [`clocki in`](#clocki-in)
* [`clocki out`](#clocki-out)
* [`clocki report`](#clocki-report)
* [`clocki task [TASK]`](#clocki-task-task)

## `clocki help [COMMAND]`

display help for clocki

```
USAGE
  $ clocki help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `clocki in`

Clock in the time you arrived at work

```
USAGE
  $ clocki in

OPTIONS
  -d, --date=date  date
  -h, --help       show CLI help
  -t, --time=time  time

ALIASES
  $ clocki hi
  $ clocki hello
```

_See code: [src/commands/in.ts](https://github.com/fsschmitt/clocki-cli/blob/v0.0.1/src/commands/in.ts)_

## `clocki out`

Clock out the time you left work

```
USAGE
  $ clocki out

OPTIONS
  -d, --date=date  date
  -h, --help       show CLI help
  -t, --time=time  time

ALIASES
  $ clocki bye
  $ clocki goodbye
```

_See code: [src/commands/out.ts](https://github.com/fsschmitt/clocki-cli/blob/v0.0.1/src/commands/out.ts)_

## `clocki report`

describe the command here

```
USAGE
  $ clocki report

OPTIONS
  -d, --date=date  Specify date of report
  -h, --help       show CLI help
  -v, --verbose    Include all information
  -w, --week       Weekly report
```

_See code: [src/commands/report.ts](https://github.com/fsschmitt/clocki-cli/blob/v0.0.1/src/commands/report.ts)_

## `clocki task [TASK]`

Add a work task

```
USAGE
  $ clocki task [TASK]

OPTIONS
  -c, --clean
  -d, --date=date    date
  -h, --help         show CLI help
  -r, --remove-last

ALIASES
  $ clocki work
```

_See code: [src/commands/task.ts](https://github.com/fsschmitt/clocki-cli/blob/v0.0.1/src/commands/task.ts)_
<!-- commandsstop -->
