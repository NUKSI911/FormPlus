import React from "react";

import Card from "../Card/Card";
import classes from "./CardList.module.css";
import Skeleton from "react-loading-skeleton";

function CardList({ data }) {
    console.log("data",data)
  let skeletonArrayList = new Array(15).fill(0);
  return (
    <div className={classes.cardListWrapper}>
      {
        data?.resolvedState == 'empty' ?
        <div > No Search Result Found  </div>
        : data?.length  > 0 && Array.isArray(data)
        ?     data?.map((template, i) => <Card data={template} key={i} />)
        : skeletonArrayList.map((item, i) => (
            <Skeleton key={i} height={300} width={300} />
          ))

     
        
        }
    </div>
  );
}

export default CardList;
