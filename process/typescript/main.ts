/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

// Import all of our dependencies
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app.component';

// Start our Angular2 App with the AppComponent as the root node
// And state that the base for routing is /
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);
