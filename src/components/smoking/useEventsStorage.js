import {computed} from 'vue';
import useStorage from '/src/services/useStorage'

const {isLoading, list, addItem, fetchList} = useStorage('events', {
    fromApi: (data) => { return data},
    toApi:  (data) => { return data},
});
const lastEvent = computed(() => {
    return list.value[0];
});

export function useEventsStorage() {
    const addEvent = (timestamp) => {
        addItem({timestamp});
        fetchList();
    }

    function getEventsForPeriod(start, end = Date.now()) {
        return list.value.filter(event => {
            return event.timestamp > start && event.timestamp < end
        })
    }

    const eventsForToday = computed(() => {
        const start = new Date()
        start.setHours(0,0,0,0);
        return list.value.filter(event => {
            return event.timestamp > start && event.timestamp < Date.now()
        })
        // return getEventsForPeriod(start);

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

    return {lastEvent, list, isLoading, eventsForToday,
        eventsForYesterday,
        eventsForWeek,
        eventsForMonth,
        eventsForYear, addEvent};
};

