import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { ShareDataComponent } from './components/share-data/share-data.component';

@NgModule({
  declarations: [AppComponent, ShareDataComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ShareDataComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ShareDataComponent, { injector });
    customElements.define('input-output', customElement);
  }
  ngDoBootstrap() {}
}
