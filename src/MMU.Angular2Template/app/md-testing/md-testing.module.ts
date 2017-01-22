// external
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";

// feature
import { MdTestingComponent } from "./md-testing.component";
import { mdTestingRouting } from "./md-testing.routing";

// sub-features
import { FormComponent } from "./form/index";

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        mdTestingRouting
    ],
    declarations: [
        FormComponent,
        MdTestingComponent
    ]
})

export class MdTestingModule {
}