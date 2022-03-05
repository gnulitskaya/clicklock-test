import { ClickStore, ClickQuery } from './state/click.store';
import { ClickService } from './state/click.service';
import { CheckedService } from './state/checked.service';
import { CheckedCreateStore } from './state/checked.store';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClicklockComponent } from './clicklock/clicklock.component';
import { AllownumbersonlyDirective } from './directives/allownumbersonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClicklockComponent,
    AllownumbersonlyDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [CheckedCreateStore,
    CheckedService,
    ClickStore,
    ClickQuery,
    ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
