import React from "react";
import { connect } from 'react-redux';
import ArrowUp from "../arrowUp";
import ArrowDown from "../arrowDown";
import { toShortList } from "../../store/actions/actions";

const Main = ({data, prevData, addShortList}) => {
    let colour = ' table-light';
    let sign ;
    let arrow;
    return (
        <table className="table">
        <tbody>
                {data.map((ticker, index) =>{//get sign and arrow
                    if (prevData.length) {
                        if (ticker.price - prevData[index].price > 0) 
                        {
                        colour = ' table-success'; 
                        sign= '+';
                        arrow = <ArrowUp />
                    }  
                    if (ticker.price - prevData[index].price < 0) {
                        colour = ' table-danger';
                        sign = ' -';
                        arrow = <ArrowDown />    
                    }
                    }
                    return (
                    <>
                        <tr key={ticker.ticker}  className={"text-center" + colour} role = 'button' onClick={() => addShortList(ticker)}>
                        <th   scope="row"><span className="bg-primary p-2 "  >{ticker.exchange}</span></th>
                            <td >
                                <span className="border border-warning p-2">{ticker.ticker}</span>
                            </td>
                            <td>{ticker.price}</td>
                            <td><span>{sign}</span>{ticker.change}</td>
                            <td><span>{arrow }</span>{ticker.change_percent}</td>
                        </tr>
                    </>
                )})
                }
        </tbody>
        </table>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShortList : (item) => dispatch(toShortList(item))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        prevData: state.prevData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

