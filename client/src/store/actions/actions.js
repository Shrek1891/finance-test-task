export const fetchData = (data) => {
    return {
        type: 'FETCH_DATA_FROM_SOCKET',
        payload: data
    }
} 
export const toShortList = (item) => {
    return {
        type: 'ADD_TO_SHORTLIST',
        payload: item
    }
}
export const fromShortList = (item) => {
    return {
        type : 'REMOVE_FROM_SHORT_LIST',
        payload: item
    }
}
export const lowSpeed = () => {
    return {
        type : 'LOW_SPEED',
    }
}
export const highSpeed = () => {
    return {
        type : 'HIGH_SPEED',
    }
}