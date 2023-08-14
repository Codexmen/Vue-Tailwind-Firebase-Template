const STORAGE_KEY = 'smokeEventsList';
export class EventsStorage {
    constructor() {
        this.events = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        this.lastEvent = this.events.at(-1);
    }

    addEvent({ timestamp }) {
        this.events.push({ timestamp });
        this.lastEvent = { timestamp };
        this.commit();
    }
    getEventsForPeriod(start, end = Date.now()) {
        return this.events.filter((event) => {
            return event.timestamp > start && event.timestamp < end;
        });
    }
    getTimeFromLastEvent() {
        return this.lastEvent ? new Date(Date.now() - this.lastEvent.timestamp) : undefined;
    }
    commit() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.events));
    }
}
