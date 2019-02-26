import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './core.module';

(async(): Promise<void> => {
    await platformBrowserDynamic().bootstrapModule(CoreModule);
})();
