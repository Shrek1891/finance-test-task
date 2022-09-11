import React from "react";
import { connect } from 'react-redux';
import { fromShortList } from "../../store/actions/actions";

const ShourtList = ({shortList, removeFtomList}) => {
    return (
        <div className="d-flex align-items-center justify-content-center border border-secondary mb-5 mt-3">
            {shortList.map((item) => {
                return (
                    <span className="mx-2" role='button' onClick={() => removeFtomList(item)}>{item.ticker}</span>
                )
            })}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFtomList : (item) => dispatch(fromShortList(item))
    }
  };
  
  const mapStateToProps = (state) => (
    {
      shortList: state.shortList
    }
  
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShourtList);