// External
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Features
import { FormValidationModule } from "./form-validation/index";

@NgModule({
    imports: [CommonModule],
    exports: [FormValidationModule, CommonModule, FormsModule]
})

export class SharedModule { }