import { RealTimeEventsConnectionBuilder } from './services/RealTimeEventsConnectionBuilder';
import IsValidUrl from './services/UrlValidator';

export function realTimeEventFactory(
  url: string
): RealTimeEventsConnectionBuilder {
  if (IsValidUrl(url)) {
    return new RealTimeEventsConnectionBuilder(url);
  }

  throw 'Could not create RealTimeEventsConnectionBuilder';
}
