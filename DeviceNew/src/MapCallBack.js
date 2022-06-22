import React, { useCallback } from 'react' 
import MAPSSS4 from './StateMapNew'


function NewMap(){
    const MemoMap = useCallback(<MAPSSS4 />, [])
    return(
        <div>
           
                {MemoMap} 
        </div>
    )

}
export default NewMap;
