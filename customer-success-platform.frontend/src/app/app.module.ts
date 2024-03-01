import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingMinuteComponent } from './meeting-minute/meeting-minute/meeting-minute.component';
import { ProjectResourcesComponent } from './resources/project-resources/project-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingMinuteComponent,
    ProjectResourcesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
