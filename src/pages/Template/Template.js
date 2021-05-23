import React, { useState, useEffect, useCallback } from "react";
import CardList from "../../components/CardList/CardList";
import Dropdown from "../../components/Dropdown/Dropdown";
import classes from "./Template.module.css";
import { defaultOptions, categoryOptions } from "./../../config/Config";
import searchIcon from '../../assets/icons/search.svg'
import exclamationIcon from '../../assets/icons/exclamation.svg'
import rightArr from '../../assets/icons/rightArr.svg'
import FeedBox from "../../components/FeedBox/FeedBox";

function Template({
  templates,
  handleCategoryChange,
  handleOrderChange,
  handleDateChange,
  categoryValue,
  dateValue,
  orderValue,
  handleSearchTerm,
  searchTerm
}) {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const totalPages =  Number(templates.length)  ? Math.round(templates?.length / 15 ) : null  
  const paginator = useCallback(() => {
    let tempview = templates?.length > 0 ?  templates?.slice((pageNo - 1) * 15, pageNo * 15  ) || templates.slice(pageNo) : templates 
    setData(tempview);
    setPageNo((pageNo) => pageNo);
  }, [pageNo, templates]);

  useEffect(() => {
    paginator();
  }, [templates, paginator, pageNo]);

  const resultSummary =     `${templates.length || 0} Templates ${categoryValue!=="All" || searchTerm !== "" ? "Found" :""}` 

  return (
    <>
      <div className={classes.templateTopSec}>
        <div className={classes.searchContainer}>
          <input className={classes.searchBox} value={searchTerm} onChange={handleSearchTerm} placeholder="Search Templates" />
          <span className={classes.searchIcon}>
              <img src={searchIcon} alt="" width={25} />
          </span>
        </div>

        <div className={classes.dropdownsWrapper}>
          <span style={{
               fontSize: '14px',
               lineHeight: '16px',
               color: '#989898',
               marginRight:'20px',
               
          }}>Sort By:</span>
          <div className={classes.dropdown}>
            <Dropdown
              label='Category'
              variant='outlined'
              value={categoryValue}
              options={categoryOptions}
              handleChange={handleCategoryChange}
            />
          </div>
          <div className={classes.dropdown}>
            <Dropdown
              variant='outlined'
              label='Order'
              value={orderValue}
              options={defaultOptions}
              handleChange={handleOrderChange}
            />
          </div>
          <div className={classes.dropdown}>
            <Dropdown
              variant='outlined'
              label='Date'
              value={dateValue}
              options={defaultOptions}
              handleChange={handleDateChange}
            />
          </div>
        </div>
      </div>
      <div className={classes.feedBoxWrapper}>
          <FeedBox>
              <>
              <img src={exclamationIcon} alt="" style={{padding:'0 10px'}} />
              <p className={classes.advertContainer}>
              Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
              </p>
              </>
          </FeedBox>

      </div>
      <div className={classes.templateHeader}>
        <span className={classes.templateHeaderItem}> {categoryValue} Templates</span>
        <span  className={classes.templateHeaderSummary}>{resultSummary}</span>
      </div>
      <div>
        <CardList data={data} />
      </div>

      <div className={classes.paginateContainer}>
          {
              data?.length > 0 && (
              <>
              <button
              className={classes.paginateBtn}
              disabled={pageNo === 1}
              onClick={() => {
            setPageNo((page) => page - 1);
          }}>
          <span>Previous</span>
        </button>

        <div className={classes.noTotalContainer}>
          <span className={[classes.presentPageNo,classes.pagItem].join(" ")}>{pageNo}</span>
          <span className={classes.pagItem}>of</span>
          <span className={classes.pagItem}>{ totalPages &&  totalPages}</span>
        </div>
        <button
          className={classes.paginateBtn}
          disabled={templates.length < pageNo * 15}
          onClick={() => {
            setPageNo((page) => page + 1);
          }}>
          <span>Next  <img src={rightArr} alt="" style={{marginLeft:"4px"}} /></span>
        </button> 
        </>
        )
    }
      </div>
    </>
  );
}

export default Template;