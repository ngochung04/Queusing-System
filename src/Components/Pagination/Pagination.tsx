import React from 'react';
import './pagination.scss';
import { ReactComponent as ArrowIc } from '../../Assets/expand.svg';
import { useState } from 'react';

const Pagination: React.FC<{
  data?: Array<any>;
  displayRow: number;
  onChange?: Function;
}> = ({ displayRow, onChange, data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeIndex = (index: number): void => {
    if (onChange) {
      onChange(index);
    }

    setSelectedIndex(index);
  };
  return (
    <div className="app__pagination">
      <div className="app__pagination__btn prev">
        <ArrowIc />
      </div>
      <div className="app__pagination__indexes">
        {data &&
          data.map((item, index) => {
            if (index <= Math.ceil(data.length / displayRow) - 1) {
              return (
                <div
                  className={`index ${index === selectedIndex && `selected`}`}
                  onClick={() => changeIndex(index)}
                >
                  {index + 1}
                </div>
              );
            }
          })}
      </div>
      <div className="app__pagination__btn next">
        <ArrowIc />
      </div>
    </div>
  );
};

export default Pagination;
