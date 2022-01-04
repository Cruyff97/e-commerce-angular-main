import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { HomeComponent } from './home/home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationListComponent } from './navbar/navigation-list/navigation-list.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    AdminComponent,
    NavigationListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
