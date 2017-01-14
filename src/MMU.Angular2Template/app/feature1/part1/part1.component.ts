import { Component, OnInit, Input } from "@angular/core";

import * as models from "../shared/models/index";

@Component({
    moduleId: module.id,
    templateUrl: "./part1.component.html",
    selector: "[part1-tr]" // Attribute selector, see http://stackoverflow.com/questions/34556277/angular2-table-rows-as-component 
})

export class Part1Component {
    @Input() public helloWorld: models.HelloWorld;
}