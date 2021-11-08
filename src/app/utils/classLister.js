export const classes = classArray => {
    if (!classArray || classArray.length < 0) return ""

    return classArray.join(' ')
}