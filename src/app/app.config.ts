import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { environment } from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      projectId: "llama-hackaton",
      appId: "1:570067757184:web:8be13e90ffc253d8959e65",
      storageBucket: "llama-hackaton.firebasestorage.app",
      apiKey: "AIzaSyAhpxY_hn4tl_5M5hkniVATRKdVDmnFAEg",
      authDomain: "llama-hackaton.firebaseapp.com",
      messagingSenderId: "570067757184"
    })),
    provideFunctions(() => getEnvFunctions()),
  ]
};

function getEnvFunctions() {
  const functions = getFunctions(getApp(), "europe-west6");
  if (!environment.production) {
    connectFunctionsEmulator(functions, 'localhost', 5001);
  }
  return functions;
}
