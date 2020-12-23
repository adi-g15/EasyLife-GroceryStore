import React from "react"
import LoadingBox from "./loadingBox";

export default function(props){
   const tmpList = []
    for (let i = 0; i < !!props.num || 0; i++) {
        tmpList.push((
            <LoadingBox key={i}/>
        ))
    }

    return (
        tmpList.map((box) => box)
    )
}
