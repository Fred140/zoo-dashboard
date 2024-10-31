import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ang-zoo-dash","appId":"1:194465629647:web:32d34cc5b3d42dfa4bfeba","storageBucket":"ang-zoo-dash.appspot.com","apiKey":"AIzaSyBW8UipDfmJNBSFp-NSX-20vZuYhJl4qHI","authDomain":"ang-zoo-dash.firebaseapp.com","messagingSenderId":"194465629647","measurementId":"G-02TLNN1V8D"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
