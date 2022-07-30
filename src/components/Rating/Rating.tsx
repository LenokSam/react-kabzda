import React, {useState} from 'react';

export type RatingType ={
  value:number
}

const Rating :React.FC<RatingType> = ({value}) => {
  const [v, setV]=useState<number>(value)
  return (
    <div>
      <span
        style={v==1?{color:'red'}:{}}
      onClick={()=>setV(1)}
      > star</span>
      <span
        style={v==2?{color:'red'}:{}}
      onClick={()=>setV(2)}
      > star</span>
      <span
        style={v==3?{color:'red'}:{}}
      onClick={()=>setV(3)}
      > star</span>
      <span
        style={v==4?{color:'red'}:{}}
      onClick={()=>setV(4)}
      > star</span>

    </div>
  );
};

export default Rating;