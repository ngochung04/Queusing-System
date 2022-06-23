import React from 'react';
import { ReactComponent as EyeIc } from '../../Assets/eye.svg';
import { ReactComponent as SearchIc } from '../../Assets/search.svg';
import './textbox.scss';

export enum InputType {
  password,
  search,
  text,
  field,
}

const Textbox: React.FC<{
  label?: string;
  type?: InputType;
  value?: string;
  onChange?: Function;
  boxWidth?: number,
  flexItem?: boolean
}> = ({ label, type, value, onChange, boxWidth, flexItem }) => {
  return (
    <div className={`app__text-box ${flexItem && `flex-1`}`}  style={{maxWidth: boxWidth}}>
      <div className="app__text-box__label">{label}</div>
      <div className="app__text-box__input">
        {(type === InputType.text || type === undefined) && <input   placeholder="" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.password) && <input  type={"password"} placeholder="" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.search) && <input   placeholder="Nhập từ khoá" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.field) && <textarea value={value} onChange={(e) => onChange && onChange(e.target.value)}/>}
        {type === InputType.password && <div className="input-icon">
          <EyeIc />
        </div>}
        {type === InputType.search && <div className="input-icon">
          <SearchIc />
        </div>}

      </div>
    </div>
  );
};

export default Textbox;
