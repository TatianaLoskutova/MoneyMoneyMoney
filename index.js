function calculateYears(principal, interest, tax, desired) {
    let year = 0

    while (principal < desired) {
        principal += (principal*interest) - (principal*interest*tax)
        year ++
    }

    return year
}