import React from 'react';
import './select.scss';
import { ReactComponent as ExpandIc } from '../../Assets/expand.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const Select: React.FC<{
  label?: string;
  options: string[];
  onSelectedChange?: Function;
  width?: number;
  flexItem?:boolean
}> = ({ label, options, onSelectedChange, width, flexItem }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (onSelectedChange !== undefined) {
      onSelectedChange(options[selectedIndex]);
    }
  }, [selectedIndex]);

  return (
    <div className={`app__select ${flexItem && `flex-1`}`}>
      {label && <div className="app__select__label">{label}</div>}
      <div
        className="app__select__selector"
        style={{ width: width }}
        onClick={() => setIsExpand((prev) => !prev)}
      >
        <span className="app__select--selected-label">
          {options[selectedIndex]}
        </span>
        <span>
          <ExpandIc />
        </span>
        {isExpand && (
          <div className="dropdown">
            <div className="dropdown__container">
              {options.map((item, index) => {
                return (
                  <div
                    className={`select-item ${selectedIndex === index && `selected`
                      }`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
