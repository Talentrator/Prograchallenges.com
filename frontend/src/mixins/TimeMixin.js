export default {
    methods: {
        formatTime(seconds) {
            if (seconds == 0) return "0 sec";
            const minutes = parseInt(seconds / 60);
            seconds = seconds % 60;
            const minutesFormatted = minutes ? `${minutes} min ` : "";
            const secondssFormatted = seconds ? `${seconds} sec` : "";
            return `${minutesFormatted}${secondssFormatted}`;
        },
    }
}