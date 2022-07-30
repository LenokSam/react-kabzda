import React, {useState} from 'react';
import s from './selector.module.css'

export type ItemsType = {
  value: any
  title: any
}
type SelectorType = {
  value?: any
  onChange: (value: any) => void
  items: ItemsType[]
}


export const Selector: React.FC<SelectorType> = ({value, onChange, items}) => {
  const [active, setActive] = useState<boolean>(false)

  const selectedItem = items.find(i => i.value === value)
  return (
    <div className={s.select}>

      <span className={s.title} onClick={()=>setActive(!active)}> {selectedItem && selectedItem.title}</span>
      {
        active &&
        <div className={s.items}
             onBlur={() => setActive(false)}
        >
          {items.map(i => <div
            onMouseEnter={() => onChange(i.value)}
            className={i.value === value?s.item:''}
            key={i.value}
            onClick={() => setActive(!active)}
          >{i.title}</div>)}
        </div>
      }
    </div>
  );
};

