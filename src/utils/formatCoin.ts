export function formatCoin(value: number) {
    if(value >= 10000000) {
        return `+99kk`
    }
    if(value >= 1000000) {
        const operation = value/1000000
        return `${operation}kk`
    }
    if(value >= 1000) {
        const operation = Math.floor(value/1000)
        return `${operation}k`
    }
    return value
}