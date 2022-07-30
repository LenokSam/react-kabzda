import React, {useState} from 'react';

export type OnOffType={
  // isOn:true|false
}

const OnOff: React.FC<OnOffType> = () => {
  let [on, setOn] = useState <boolean>(true)

  return (
    <div className={'onOff__wrapper'}>
      <div className={on?'green'+' '+ 'on' :'on'}></div>
      <div className={on?'off':'red'+' '+ 'off'}></div>
      <div className={on?'click'+' '+ 'green':'click'+' '+ 'red'} onClick={()=>setOn(!on)}></div>
    </div>
  );
};

export default OnOff;