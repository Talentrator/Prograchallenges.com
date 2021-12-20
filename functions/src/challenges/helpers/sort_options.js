const sortOptions = {
    date_desc: {
        field: "creationTime",
        method: "desc"
    },
    date_asc: {
        field: "creationTime",
        method: "asc"
    },
    relevance: {
        field: "score",
        method: "desc"
    }
}

module.exports = sortOptions;