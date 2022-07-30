import React from 'react';
import s from './Accordion.module.css'


export type ItemType = {
  title: string,
  value: any
}
export type AccordionType = {
  title: string
  /**
   * When error
   */
  onChange: () => void
  collapsed: boolean
  items: Array<ItemType>
  onClickItems: (value: any) => void
}

const Accordion: React.FC<AccordionType> = ({title, onChange, collapsed, items, onClickItems}) => {

  return (

    <div>
      <h3
        onClick={(e) => onChange()}
      >{title}</h3>
      {!collapsed &&
          <ul>
            {items.map(i => <li
              key={i.title}
              onClick={()=>onClickItems(i.value)}
            >{i.title}</li>)}
          </ul>
      }

    </div>

  );
};

export default Accordion;