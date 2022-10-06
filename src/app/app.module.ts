import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsSectionComponent,
    WorksSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
