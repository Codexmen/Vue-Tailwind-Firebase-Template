import { EventsStorage } from '../src/services/EventsStorage';
import { test, expect } from 'vitest';

test('Should add events', () => {
    const storage = new EventsStorage();

    expect(storage.lastEvent).equal(undefined);
    const date = new Date().getTime();
    storage.addEvent({ timestamp: date });
    expect(storage.events.length).equal(1);
    expect(storage.lastEvent.timestamp).equal(date);
});

test('Should filter events', () => {
    const storage = new EventsStorage();
    const date = new Date();
    date.setHours(date.getHours() - 1);
    storage.addEvent({ timestamp: date.getTime() });
    date.setHours(date.getHours() - 10);
    storage.addEvent({ timestamp: date.getTime() });
    expect(storage.events.length).equal(2);
    expect(storage.getEventsForPeriod(date.setHours(date.getHours() + 8)).length).equal(1);
});
