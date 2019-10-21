import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { CreateEventComponent } from './create-event/create-event.component';
import {EventDescriptionComponent} from './event-description/event-description.component'
const routes: Routes = [
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'presentation', component: PresentationComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'sections', component: SectionsComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create-event', component: CreateEventComponent },
    { path: 'event-description', component: EventDescriptionComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
