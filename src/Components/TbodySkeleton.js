import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

TbodySkeleton.propTypes = {
  numberCols: PropTypes.number.isRequired,
  numberRows: PropTypes.number.isRequired
}

function TbodySkeleton(props) {
  return (
    <>
      <tbody key={"skeleton_loading"}>
      {[...Array(props.numberRows)].map((item, index) => {
          return (<tr key={"ld_"+ index}>
            {[...Array(props.numberCols)].map((item2, index2) => {
              return (<td key={"le_"+ index2}><Skeleton count={1}/></td>);
            })}
          </tr>);
        })}
      </tbody>
    </>
  );
}

export default TbodySkeleton;