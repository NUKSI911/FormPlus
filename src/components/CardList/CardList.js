import React from 'react'

import Card from '../Card/Card'
import classes from './CardList.module.css'
import Skeleton from 'react-loading-skeleton';

function CardList({data}) {


    let skeletonArrayList = new Array(15).fill(0);
    console.log(skeletonArrayList)
    return (
        <div className={classes.cardListWrapper}>
             {data.length > 0 ?  data?.map((template, i) => (
          <Card data={template} key={i} />

        )) : skeletonArrayList.map((item,i)=> <Skeleton  key={i} height={300} width={400} />)}
        </div>
    )
}

export default CardList
