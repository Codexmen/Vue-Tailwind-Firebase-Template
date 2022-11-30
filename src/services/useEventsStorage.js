import {shallowRef, computed} from 'vue';
import {EventsStorage} from "./EventsStorage.js";

const storage = new EventsStorage();
const storageRef = shallowRef({
    lastEvent: undefined,
    events: [],

})

export function useEventsStorage() {
    storageRef.value = {
        lastEvent: storage.lastEvent,
        events: storage.events,
    }
    function addEvent(timestamp) {
        console.log('add event');
        storage.addEvent({timestamp});
        storageRef.value = {
            lastEvent: storage.lastEvent,
            events: storage.events,
        }
    }
    function getEventsForPeriod(start, end = Date.now()) {
        return storageRef.value.events.filter(event => {
            return event.timestamp > start && event.timestamp < end
        })
    }
    const eventsForToday= computed(() => {
        const start = new Date()
        start.setHours(0,0,0,0);
        return getEventsForPeriod(start);

    })
    const eventsForYesterday = computed(() => {
        const end = new Date()
        end.setHours(0,0,0,0);
        const start = new Date(end)
        start.setDate(end.getDate() -1)
        return getEventsForPeriod(start, end);
    })
    const eventsForWeek = computed(() => {
        const start = new Date()
        start.setHours(0,0,0,0);
        start.setDate(start.getDate() -6)

        return getEventsForPeriod(start);
    })
    const eventsForMonth = computed(() => {
        const start = new Date()
        start.setHours(0,0,0,0);
        start.setMonth(start.getMonth(), 1)

        return getEventsForPeriod(start);
    })
    const eventsForYear = computed(() => {
        const start = new Date()
        start.setHours(0,0,0,0);
        start.setFullYear(start.getFullYear() -1, 0, 1)

        return getEventsForPeriod(start);
    })
    return {
        storage: storageRef,
        addEvent,
        eventsForToday,
        eventsForYesterday,
        eventsForWeek,
        eventsForMonth,
        eventsForYear,
    }
}
