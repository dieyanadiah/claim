import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,

} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule
    ]
})
export class MaterialModule { }
