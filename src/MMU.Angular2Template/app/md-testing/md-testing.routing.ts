// external
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// feature
import { MdTestingComponent } from "./md-testing.component";

// sub-features
import { FormComponent } from "./form/index";

const routes: Routes = [
    {
        path: "mdTesting",
        component: MdTestingComponent,
        children: [
            { path: "", redirectTo: "form", pathMatch: "full" },
            { path: "form", component: FormComponent }
        ]
    }
];

export const mdTestingRouting = RouterModule.forChild(routes);