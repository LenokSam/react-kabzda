import React, {useState} from 'react';

const OnOff = () => {
  let [on, setOn] = useState <boolean>(false)

  return (
    <div className={'onOff__wrapper'}>
      <div className={on?'green'+' '+ 'on' :'on'}></div>
      <div className={on?'off':'red'+' '+ 'off'}></div>
      <div className={on?'click'+' '+ 'green':'click'+' '+ 'red'} onClick={()=>setOn(!on)}></div>
    </div>
  );
};

export default OnOff;