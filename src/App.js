import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import Layout from "./Layout/layout";
import { Switch, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import routes from "./config/routes";
import { insertTemplateData } from "./pages/Template/Store/template.action";
import useFetch from "./hooks/useFetch";
import ApiEndPoints from "./config/endPoints";
function App() {
  const { fetchData, data, errorMsg } = useFetch({
    url: ApiEndPoints.GET_TEMPLATE,
  });
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const [categoryValue, setCategoryValue] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [searchTerm,setSearchTerm ] = useState("")
  const templates = useSelector((state) => state.template.templateData);

  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    fetchData();
    setCategoryValue("All")
    setDateValue("Defaut")
    setOrderValue("Default")
  }, []);

  useEffect(() => {
    dispatch(insertTemplateData(data));

    setResolvedData(data);
  }, [data]);

  const updateState = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

 const handleSearchTerm = (e) =>{
   setSearchTerm(e.target.value)
 }
  const handleCategoryChange = (value) => {
    setCategoryValue(value);
  };
  const handleOrderChange = (value) => {
    setOrderValue(value);
  };
  const handleDateChange = (value) => {
    setDateValue(value);
  };

  const filterByCategory = () => {
    let tempData = templates;
    if(  categoryValue !== "All" ){
      const filteredTemplate = tempData.filter((template) => {
        return template.category.forEach(catgyItem => catgyItem.include(categoryValue))
        });
        setResolvedData(filteredTemplate);
      }
      else{
        setResolvedData(templates)
      }
  };

  const filterByDate = useCallback(() => {
    let tempData = templates;
    if(dateValue !== "Default") {

      const filteredTemplate = tempData.slice(0).sort((a, b) => {
        let dateA = new Date(a.created);
        let dateB = new Date(b.created);
        if (dateValue === "Ascending") {
          if( dateA >  dateB){
            return -1
          }
        } else if (dateValue === "Descending") {
          if( dateA < dateB){
            return -1
        }
      }
      
      
    });
    setResolvedData(filteredTemplate);
  }
  else{
    setResolvedData(templates)
  }
  },[dateValue])


  const handleSearch =()=>{
    let tempData = templates;
    let filteredArr = []
    if(searchTerm!== "" ){
      
      if(Array.isArray(tempData)) {
        
       filteredArr = tempData.filter(template=>template.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }
        
     if( filteredArr.length === 0   ) {
       setResolvedData({resolvedState:'empty'}) 
     }
     else {

       filteredArr.resolveState = null
       return setResolvedData(filteredArr)
      }
    }
    else{
      setResolvedData(templates)
    }
  } 


  const  handleTemplateReordering = () => {
    let tempData = templates;
    if(orderValue !== "" && orderValue !== "Default" ) {

      let sortedData = tempData.slice(0).sort((a, b) => {
        if (orderValue === "Ascending") {
          if (a.name < b.name) {
            return - 1;
          }
        }
        if (orderValue === "Descending") {
          if (a.name > b.name) {
            return - 1;
          }
        }
      });      
      setResolvedData(sortedData);
    }

    else{
      setResolvedData(templates)
    }
    };

    useEffect(()=>{
    handleSearch()
    },[searchTerm])

    useEffect(() => {
      filterByCategory();
    }, [categoryValue]);
  
    useEffect(() => {
      handleTemplateReordering();
    }, [orderValue]);
  
    useEffect(() => {
      filterByDate();
    }, [dateValue]);

   
  

  return (
    <Layout>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.component
                {...props}
                templates={resolvedData}
                handleCategoryChange={handleCategoryChange}
                handleDateChange={handleDateChange}
                handleOrderChange={handleOrderChange}
                categoryValue={categoryValue}
                dateValue={dateValue}
                orderValue={orderValue}
                handleSearchTerm={handleSearchTerm}
                searchTerm={searchTerm}
              />
            )}
          />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;