import {inject} from '@angular/core';
import {API_CONFIGURATION} from './configuration';

export function injectAPI(): any {
  const configuration = inject(API_CONFIGURATION);
  if (!configuration) {
    throw new Error('Provide API Configuration via API_CONFIGURATION');
  }
  return configuration;
}
