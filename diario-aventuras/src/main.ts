import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

import { IonicStorageModule } from '@ionic/storage-angular'; // 👈 importa Storage
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // 👇 Aquí importamos IonicStorage como proveedor
    importProvidersFrom(
      IonicStorageModule.forRoot()
    ),
  ],
});
