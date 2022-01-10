export default {
    data() {
        return {
            languages: [{
                    text: "Please select a programming language",
                    value: null,
                    disabled: true,
                },
                { text: "Javascript", value: "javascript-node" },
                { text: "Python 3", value: "python3" },
                { text: "C", value: "c-gcc" },
                { text: "C++", value: "cpp-gcc" },
                { text: "Java 8", value: "java-jdk" },
                { text: "C#", value: "cs-mono" },
                { text: "Ruby", value: "ruby" },
                { text: "Kotlin", value: "kotlin" },
                { text: "Swift", value: "swift4" },
                { text: "Go", value: "go" },
            ],
        }
    },
    methods: {
        getProgrammingLanguage(language) {
            const lang = this.languages.find(({ value }) => value == language);
            return lang ? lang.text : null;
        }
    },
}