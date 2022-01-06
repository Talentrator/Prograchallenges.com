export default {
    data() {
        return {
            failed: 0,
            passed: 0,
        }
    },
    computed: {
        passedTestsFormattedText() {
            const count = (this.failed == 0 && this.passed > 0) ? 'All' : this.passed;
            return `${count} test${ this.passed > 1 ? 's' : '' } passed`;
        },
        failedTestsFormattedText() {
            return `${this.failed} test${ this.failed > 1 ? 's' : '' } failed`;
        },
    },
    methods: {
        erronoeusResult(result) {
            return !(result.indexOf('true') >= 0 || result.indexOf('false') >= 0);
        },
        parseResult(result) {
            if (!this.erronoeusResult(result)) {
                result.split(/\s+/).map((res) => res === 'true' ? this.passed++ : this.failed++);
            }
        }
    },
}