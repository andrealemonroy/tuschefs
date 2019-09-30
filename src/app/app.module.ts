import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
// import { ExamplesModule } from './examples/examples.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {LoginComponent} from './examples/login/login.component';
// import {RegisterComponent} from './examples/register/register.component'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from '../environments/environment';
import { CreateEventComponent } from './create-event/create-event.component';
import { ImageUploadModule } from './shared/image-upload/image-upload.module';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        CreateEventComponent,
        // LoginComponent,
        // RegisterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        // ExamplesModule,
        ReactiveFormsModule,
        HttpClientModule,
        ImageUploadModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
