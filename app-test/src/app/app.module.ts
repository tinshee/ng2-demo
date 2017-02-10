import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TabModule} from "./tab/tab.modlue";
import {IonicModule, IonicApp} from "ionic-angular";
import {TabComponent} from "./tab/tab.component";
import {CoreModule} from "./core/core.module";

import './rxjs-extensions';
import {deepLinks} from "./deepLinks";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        IonicModule.forRoot(AppComponent, {}, {
            links: deepLinks
        }),
        TabModule
    ],

    providers: [],
    bootstrap: [IonicApp],
    entryComponents: [
        TabComponent
    ]
})
export class AppModule {
}
