# Structure
## Modules
### Feature-Modules

### General
See https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-module-provider-visibility 

#### Domain
Module, which is dedicated to one domain of the application. 

#### Routed

#### Routing

#### Service

#### Widget


# Barrels
## General
Every level has its barrels, which means every folder has one except some super-general folders like *Core* and *shared*. <br/>
Every barrel should export the types on its level and also every barrel from the lower ones. This allows a proper abstraction depending on the level the import-client is interested in.

## Exports
Generally, we should only export the types, that could be interesting for an **higher** level. <br/>
Since every higher level should only import values via the barrels, everything else is meant as __implementation-detail__. <br />
This leads to some general conclusions:
+ Every feature-module barrel has only its module-exported, since everything else is an implementation or in an shared-folder <br/>
..*This has to be reconsidered, since it would render the module-export feature useless for non-framework applications?
+ Types from the same level can be either imported via barrel, when they're also interesting for other levels, or directly with the app-name. For example: Since *feature1.routing* doesn't need to be propagated to higher levels, thus is not in the barrel, *feature1.module* imports it directly.

__Random-thoughts__:Since the types in the core- and shared-folders fullfil a different requirement, we might split the barrel-rules for functional- and non-functional features.




# Imports
## General
With the tsconfig-config entries:
```javascript
    "moduleResolution": "node",
    "baseUrl": "." // This allows TS to resolve the modules from the app-path instead of relative to the current file
```
We can use the relative path from the root, which seems more clear:
```javascript
import { ObjectDefinitionHandler } from "app/core/handlers/index"; // cool
import { ObjectDefinitionHandler } from "../../../core/handlers/index"; // ugly
```
__IMPORTANT__: We leave the baseUrl to the core-path, so the path matches with CommonJs, otherwise, we would have to start different mappings there as well.


##Suggestions
+ In order to make the aliases consistent, we try this convention: <br/>
+ feature1 --> whole feature
+ feature1Services --> all servies of this feature
+ feature1Models --> all models of this feature
+ part1 --> Whole part1-area of this feature

Further ideas: <br />
+ If we're on the same level, we emit the prefix, thus feature1-Service imports the feature1models via "models"

# General
+ Observables should be only used in Services, otherwise Promises (According to Ward Bell), except if a stream is in fact needed.
+ Since every filename should be written in lower-case, it is allowed to use - for better readabily. For example: *part1-list* instead of *part1list*.

