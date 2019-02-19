import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {RouterModule,ROUTES, Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {StudentService} from './shared/student.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleNavComponent } from './toggle-nav/toggle-nav.component';
import { SliderComponent } from './slider/slider.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';



const appRoutes:Routes = 
[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'addstudent',component:AddStudentComponent},
  {path:"**",component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ToggleNavComponent,
    SliderComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    
    
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
