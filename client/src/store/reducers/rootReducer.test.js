import { fetchData, fromShortList, toShortList } from '../actions/actions';
import rootReducer from './rootReducer';

const startDate = [{
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": "265.89",
    "change": "78.49",
    "change_percent": "0.66",
    "dividend": "0.01",
    "yield": "1.07",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
},{
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": "154.24",
    "change": "162.28",
    "change_percent": "0.95",
    "dividend": "0.83",
    "yield": "1.77",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
}, {
    "ticker": "MSFT",
    "exchange": "NASDAQ",
    "price": "118.65",
    "change": "150.84",
    "change_percent": "0.39",
    "dividend": "0.55",
    "yield": "1.27",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
},{
    "ticker": "AMZN",
    "exchange": "NASDAQ",
    "price": "225.58",
    "change": "188.59",
    "change_percent": "0.88",
    "dividend": "0.56",
    "yield": "0.32",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
}, {
    "ticker": "FB",
    "exchange": "NASDAQ",
    "price": "268.59",
    "change": "195.04",
    "change_percent": "0.38",
    "dividend": "0.44",
    "yield": "1.58",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
}, {
    "ticker": "TSLA",
    "exchange": "NASDAQ",
    "price": "206.76",
    "change": "182.08",
    "change_percent": "0.46",
    "dividend": "0.50",
    "yield": "0.77",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
} 
] 

const item = {
    "ticker": "TSLA",
    "exchange": "NASDAQ",
    "price": "206.76",
    "change": "182.08",
    "change_percent": "0.46",
    "dividend": "0.50",
    "yield": "0.77",
    "last_trade_time": "2022-09-11T09:08:13.000Z"
} 

it ('start length new state should be equal length incoming data', () => {
    let action = fetchData(startDate);
    let state = {
        data : [],
        prevData : [],
        shortList : [],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.data.length).toEqual(startDate.length)

});

it ('start new state should be equal incoming data', () => {
    let action = fetchData(startDate);
    let state = {
        data : [],
        prevData : [],
        shortList : [],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.data).toEqual(startDate);

});

it ('start speed should be equal set speed', () => {
    let action = fetchData(startDate);
    let state = {
        data : [],
        prevData : [],
        shortList : [],
        speed: 2,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.indexSpeed).toEqual(newState.speed);

});

it ('incoming state should be to copy like prev', () => {
    let action = fetchData(startDate);
    let state = {
        data : [{
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": "265.89",
            "change": "78.49",
            "change_percent": "0.66",
            "dividend": "0.01",
            "yield": "1.07",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }],
        prevData : [],
        shortList : [],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(state.data).toEqual(newState.prevData);

});

it ('lenght of main data list should be less on number items in short list', () => {
    let action = fetchData(startDate);
    let state = {
        data : [{
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": "265.89",
            "change": "78.49",
            "change_percent": "0.66",
            "dividend": "0.01",
            "yield": "1.07",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        },{
            "ticker": "GOOGL",
            "exchange": "NASDAQ",
            "price": "154.24",
            "change": "162.28",
            "change_percent": "0.95",
            "dividend": "0.83",
            "yield": "1.77",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }, {
            "ticker": "MSFT",
            "exchange": "NASDAQ",
            "price": "118.65",
            "change": "150.84",
            "change_percent": "0.39",
            "dividend": "0.55",
            "yield": "1.27",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        },{
            "ticker": "AMZN",
            "exchange": "NASDAQ",
            "price": "225.58",
            "change": "188.59",
            "change_percent": "0.88",
            "dividend": "0.56",
            "yield": "0.32",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }, {
            "ticker": "FB",
            "exchange": "NASDAQ",
            "price": "268.59",
            "change": "195.04",
            "change_percent": "0.38",
            "dividend": "0.44",
            "yield": "1.58",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }, {
            "ticker": "TSLA",
            "exchange": "NASDAQ",
            "price": "206.76",
            "change": "182.08",
            "change_percent": "0.46",
            "dividend": "0.50",
            "yield": "0.77",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        } ],
        prevData : [],
        shortList : [{
            "ticker": "FB",
            "exchange": "NASDAQ",
            "price": "268.59",
            "change": "195.04",
            "change_percent": "0.38",
            "dividend": "0.44",
            "yield": "1.58",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }, {
            "ticker": "TSLA",
            "exchange": "NASDAQ",
            "price": "206.76",
            "change": "182.08",
            "change_percent": "0.46",
            "dividend": "0.50",
            "yield": "0.77",
            "last_trade_time": "2022-09-11T09:08:13.000Z"
        }],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.shortList.length).toEqual(newState.data.length - newState.shortList.length);

});

it ('if speed more then 1 , then speed index should be decrease by one', () => {
    let action = fetchData(startDate);
    let state = {
        data : [],
        prevData : [],
        shortList : [],
        speed: 3,
        indexSpeed : 3
    };
    let newState = rootReducer(state, action);
    expect(state.indexSpeed - 1 ).toEqual(newState.indexSpeed);

});

it ('if add to short list length of short list should be to increase by one and length of main list to decrease by one', () => {
    let action = toShortList(item);
    let state = {
        data : [item],
        prevData : [],
        shortList : [],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.shortList.length).toEqual(state.shortList.length + 1);
    expect(newState.data.length).toEqual(state.data.length - 1);

});

it ('add short list should remove item from main data to short list', () => {
    let action = toShortList(item);
    let state = {
        data : [item],
        prevData : [],
        shortList : [],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.shortList).toEqual([item]);

});

it ('if remove to short list length of short list should be to decrease by one and length of main list to increase by one', () => {
    let action = fromShortList(item);
    let state = {
        data : [],
        prevData : [],
        shortList : [item],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.shortList.length).toEqual(state.shortList.length - 1);
    expect(newState.data.length).toEqual(state.data.length + 1);

});

it ('remove short list should remove item from main data to short list', () => {
    let action = fromShortList(item);
    let state = {
        data : [],
        prevData : [],
        shortList : [item],
        speed: 1,
        indexSpeed : 1
    };
    let newState = rootReducer(state, action);
    expect(newState.data).toEqual([item]);

});