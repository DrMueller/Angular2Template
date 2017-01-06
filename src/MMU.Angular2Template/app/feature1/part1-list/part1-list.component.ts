import { Component, OnInit } from "@angular/core";


@Component({
    moduleId: module.id,
    templateUrl: "./part1-list.component.html"
})

export class Part1ListComponent implements OnInit {
    private numbers: number[];

    public constructor() {
        this.numbers = [];
    }

    public ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.numbers.push(i);
        }
    }
}