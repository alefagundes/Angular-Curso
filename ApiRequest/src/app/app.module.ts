import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNameComponent } from './list-name/list-name.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumbersComponent } from './components/change-numbers/change-numbers.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDindsComponent } from './components/two-way-dinds/two-way-dinds.component';
import { AnimalsDetailsComponent } from './components/animals-details/animals-details.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNameComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EmitterComponent,
    ChangeNumbersComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayDindsComponent,
    AnimalsDetailsComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
