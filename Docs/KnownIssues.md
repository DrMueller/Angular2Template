# External library-bugs
## RxJs
RxJs seems to have a Bug in the newer version, so we leave it at 5.0.0-beta.12.

## SignalR
### "Load is not a function"

Fix: https://github.com/alextkachuk/SignalR/commit/297a3c269f423e31c678d92d4384de4a65d6cc0f

Discussion: https://github.com/SignalR/SignalR/issues/3710 

### "url.indexOf is not a function"
Issue: https://github.com/SignalR/SignalR/issues/3710

Exact fix: https://github.com/SignalR/SignalR/issues/3646

TLDR:

1. Go to "\node_modules\ms-signalr"
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
## index.ts
SystemJS doesn't recognize files named index.ts as default-barrel export. It can be configured, but that would mean, that every created index-file has to be added on the SystemJS-configuration.
At the moment, we just use the /index-suffix.

## Unexpected token <
Since SystemJS doesn't know Barrels without index, missing the /indexon an import is one of the reasons for this error.


# TypeScript-VisualStudio 2015
## General
There are several possibilites to work with TypeScript: It's dependency can get obtained via NuGet, global installation or NuGet.

## Gulp
The gulp-typescript compilers mostly use the latest stable build. The module can be specified manually in order to assure the local typescript-version is taken.
See the gulpfile for an example.

## VS 2015
There is a bug, which leaves the PATH-Variable on the older TS-Version. This needs to be changed manually.
Interesting enough, the VS2015-Window shows a different TS-version than the tsc-v command.
