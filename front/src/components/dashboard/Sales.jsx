import React from 'react';
import HeadTitle from './HeadTitle';
import { Icons } from '../../assets/icons';
import { SALES_LISTS } from '../../constants/menuLists';

const Sales = () => {
  return (
    <div className="block-cell">
      <div className="header-wrapper flex justify-between">
        <HeadTitle title="Today's Salse" />
        <div className="export-button">
          <button className="flex items-center gap-x-[6px] h-8 border border-solid border-gray-500 rounded-md py-[2px] px-2 font-semibold">
            <img
              src={Icons.ExportDark}
              alt=""
              className="invert-[1] brightness-[100%]"
            />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="cards flex gap-4 mt-6">
        {SALES_LISTS.map((item, idx) => (
          <div className="card-item" key={idx}>
            <div className="card-icon">
              <img src={item.src} alt="" />
            </div>
            <div className="card-value">{item.value}</div>
            <p className="card-title">{item.title}</p>
            <span className="card-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
