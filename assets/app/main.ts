import './polyfills';
import {NotificationsService} from 'angular2-notifications/components'
import {COMPILER_PROVIDERS} from '@angular/compiler';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

platformBrowserDynamic([...COMPILER_PROVIDERS]).bootstrapModule(AppModule);