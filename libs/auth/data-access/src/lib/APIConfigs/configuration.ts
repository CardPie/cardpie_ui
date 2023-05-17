import {InjectionToken, Provider} from '@angular/core';

export interface ApiConfiguration {
  apiDomain: string;
}
export const API_CONFIGURATION = new InjectionToken<ApiConfiguration>(
  'API configuration',
);

export function provideApiConfiguration(
  configuration: ApiConfiguration,
): Provider {
  return {
    provide: API_CONFIGURATION,
    useValue: configuration,
  };
}
