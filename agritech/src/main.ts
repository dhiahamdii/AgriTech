/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/
// src/main.ts
// src/main.ts
// src/main.ts
// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {bootstrapApplication} from "@angular/platform-browser";
import {importProvidersFrom} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {Router} from "@angular/router";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//bootstrapApplication(AppComponent, {
//   providers: [importProvidersFrom(Router)],
// });

