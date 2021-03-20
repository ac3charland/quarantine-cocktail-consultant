export const sortObjectsByName = (a, b) => {
    const nameA = a?.name?.toLowerCase()
    const nameB = b?.name?.toLowerCase()

    let comparison = 0
    if (nameA > nameB) {
        comparison = 1
    }
    else if (nameA < nameB) {
        comparison = -1
    }
    return comparison
}
