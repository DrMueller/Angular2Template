// external
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// feature
import { MdTestingComponent } from "./md-testing.component";
import { mdTestingRouting } from "./md-testing.routing";

// sub-features
import { FormComponent } from "./form/index";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        mdTestingRouting
    ],
    declarations: [
        FormComponent,
        MdTestingComponent
    ]
})

export class MdTestingModule {
}