import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    DragDropModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://api.limantech.com/todo' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
