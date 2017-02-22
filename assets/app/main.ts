import './polyfills';
import {NotificationsService} from 'angular2-notifications/components'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);