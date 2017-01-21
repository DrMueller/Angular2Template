# External library-bugs
## Bootstrap
### Version 4 - Sass
Currently nothing working really. But the switch to sass is easy and already prepared via gulp-tasks.

## Ng2-Bootstrap
### 'xx' is not a known element
Some of these Controls are not currently supported in ReactiveForms, thus need the [(ngModel)] to work properly.
THey're currently updating, so you might want to check the Issues on GitHub.

## Node-Sass
### [Windows Error ] %1 is not a valid win32 application
https://github.com/sass/node-sass/issues/468
TLDR:
1. npm rm node-sass
2. npm install node-sass


### Imports
For Some reason, it seems like we have to import the Modules on each module individually, not just on the root one.

## RxJs
RxJs seems to have a Bug in the newer version, so we leave it at 5.0.0-beta.12.

## SignalR
### "url.indexOf is not a function"
https://github.com/SignalR/SignalR/issues/3710 <br />
TLDR: <br />
1. Go to "\node_modules\ms-signalr" <br />
2. Open JQuery.signalrR.min.Js<br />
3. Replace
```javascript
e.load
```
with
```javascript
$
```

### "Load is not a function"
https://github.com/SignalR/SignalR/issues/3646 <br />
TLDR: <br />
1. Go to "\node_modules\ms-signalr" <br />
2. Open JQuery.signalrR.Js<br />
3. Replace 
```javascript
_pageWindow.load(function () { _pageLoaded = true; });
```
with 
```javascript
_pageWindow.on('load', function () { _pageLoaded = true; });
```
## SystemJS
### index.ts
SystemJS doesn't recognize files named index.ts as default-barrel export. It can be configured, but that would mean, that every created index-file has to be added on the SystemJS-configuration. <br />
At the moment, we just use the /index-suffix.

### Unexpected token <
Since SystemJS doesn't know Barrels without index, missing the */index* on an import is one of the reasons for this error.
Generally, this means that SystemJS doesn't find the expected module.


# TypeScript-VisualStudio 2015
## General
There are several possibilites to work with TypeScript: It's dependency can get obtained via NuGet, global installation or NuGet.

## Gulp
The gulp-typescript compilers mostly use the latest stable build. The module can be specified manually in order to assure the local typescript-version is taken. <br />
See the gulpfile for an example.

## VS 2015
There is a bug, which leaves the PATH-Variable on the older TS-Version. This needs to be changed manually. <br />
Interesting enough, the VS2015-Window shows a different TS-version than the tsc-v command.
