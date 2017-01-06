import { Component, OnInit, Input } from "@angular/core";


@Component({
    moduleId: module.id,
    templateUrl: "./part1.component.html",
    selector: "part1"
})

export class Part1Component {
    private name: string;

    @Input()
    public oneNumber: number;

    constructor() {
        this.name = "Part 1";
    }
}