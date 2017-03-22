import {NgModule} from '@angular/core';

import {BasicComponent} from './basic/basic.component';
import {routing} from "./rx.routing";
import {RxComponent} from "./rx.component";
import {SharedModule} from "../../shared/shared.module";
import {RxJsComponent} from './rx-js/rx-js.component';
import {ExtendComponent} from './extend/extend.component';
import {CreateComponent} from './create/create.component';
import {TransformComponent} from './transform/transform.component';

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    entryComponents: [
        BasicComponent,
        RxJsComponent,
        ExtendComponent,
        CreateComponent,
        TransformComponent,
    ],
    declarations: [
        BasicComponent,
        RxComponent,
        RxJsComponent,
        ExtendComponent,
        CreateComponent,
        TransformComponent
    ]
})
export class RxModule {
}
