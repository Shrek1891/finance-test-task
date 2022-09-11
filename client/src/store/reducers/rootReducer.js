
const initialState = {
    data : [],
    prevData : [],
    shortList : [],
    speed: 1,
    indexSpeed : 1
};

const rootReducer = (state = initialState, action) => {
    const HIGH_SPEED = 10;
    const LOW_SPEED = 1;
    switch (action.type) {
        case 'FETCH_DATA_FROM_SOCKET':
            if ( state.indexSpeed === LOW_SPEED ) {
                let prevData = [...state.data]; // save prev data
                let sortData = action.payload.filter(item => state.shortList.every(name => name.ticker !== item.ticker));// compare short list and main list
                return {...state, data: [...sortData], prevData: [...prevData], indexSpeed: state.speed}
            } else {
                return {...state, indexSpeed: state.indexSpeed - 1} //if timer don`t end
            }
        case 'ADD_TO_SHORTLIST':
            let newList = [...state.shortList];
            let newData = state.data.filter((item) => {
                return item.ticker !== action.payload.ticker 
            });
            newList.push(action.payload);
            return {...state, shortList: [...newList], data : [...newData], prevData : [...newData] }
        case 'REMOVE_FROM_SHORT_LIST':
            let newShortList = state.shortList.filter((item) => {
                return item.ticker !== action.payload.ticker
            });
            let addData = [...state.data];
            addData.push(action.payload);
            let newPrevData = [...addData];
            return {...state, shortList: [...newShortList], data: [...addData], prevData: [...newPrevData]}
            case 'LOW_SPEED':
                console.log('low')
                let newLowSpeed = state.speed ;
                newLowSpeed <= LOW_SPEED ? newLowSpeed = 1 : newLowSpeed -= 1;
                return {...state, speed: newLowSpeed , indexSpeed: newLowSpeed}
            case 'HIGH_SPEED':
                console.log('high')
                let newHighSpeed = state.speed;
                newHighSpeed >= HIGH_SPEED ? newHighSpeed = 10 : newHighSpeed += 1;
                return {...state, speed: newHighSpeed , indexSpeed: newHighSpeed} 
        default:
            return {...state};
    }
}

export default rootReducer;