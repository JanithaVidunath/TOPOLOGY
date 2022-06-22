import React, { useCallback } from 'react' ;
import MAP from './REfreshMap.js';


function NewMap(){
    const MemoMap = useCallback(<MAP/>, [])
    return(
        <div>
           
                {MemoMap} 
        </div>
    )

}
export default NewMap;
/*
const Modal = React.memo(
  props => {...},
  (prevProps, nextProps) => prevProps.show === nextProps.show
);
*/