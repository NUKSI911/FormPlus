import React, { useState, useEffect,useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import routes from "./config/routes";
import { insertTemplateData } from "./pages/Home/Store/home.action";
import ApiEndPoints from "./config/endPoints";
import { categoryOptions,defaultOptions }  from "./config/Config";
import useFetch from "./hooks/useFetch";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const {  fetchData,data, errorMsg } = useFetch({
    url: ApiEndPoints.GET_TEMPLATE,
  });
  const dispatch = useDispatch();

  const [categoryValue, setCategoryValue] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const templates = useSelector((state) => state.template.templateData);

  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    fetchData()
    setCategoryValue(categoryOptions[0]);
    setDateValue(defaultOptions[0]);
    setOrderValue(defaultOptions[0]);
  }, []);

  useEffect(() => {
    dispatch(insertTemplateData(data));

    setResolvedData(data);
  }, [data]);


  

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
   
  };
  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrderValue(e.target.value);
   

  };
  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  
  };

  useEffect(()=>{
    filterByCategory();
  },[categoryValue])

  useEffect(()=>{
    handleTemplateReordering();
  },[orderValue])

  useEffect(()=>{
    filterByDate();
  },[dateValue])
  
  useEffect(()=>{
    handleSearch();
  },[searchTerm])


  const filterByCategory = () => {
    let defaultCategoryOption = categoryOptions[0] 
    let defaultoption = defaultOptions[0]
    let tempData = templates;
    setDateValue( defaultoption);
    setSearchTerm("");
    setOrderValue( defaultoption )
    if (categoryValue !== defaultCategoryOption ) {
      const filteredTemplate = tempData.filter((template) => {
        return template.category.includes(categoryValue)
      });
      setResolvedData(filteredTemplate);
    } else if (categoryValue === defaultCategoryOption ) {
      setResolvedData(templates);
    } else {
      setResolvedData(tempData);
    }
  };

  const filterByDate = useCallback(() => {
    let tempData = resolvedData;
    if (dateValue !== "Default" && Array.isArray(tempData)) {
      const filteredTemplate = tempData.slice(0).sort((a, b) => {
        let dateA = new Date(a.created);
        let dateB = new Date(b.created);
        if (dateValue === "Ascending") {
          if (dateA > dateB) {
            return -1;
          }
        } else if (dateValue === "Descending") {
          if (dateA < dateB) {
            return -1;
          }
        }
      });
      setResolvedData(filteredTemplate);
    } else if (dateValue === "Default") {
      setResolvedData(templates);
    } else {
      setResolvedData(tempData);
    }
  }, [dateValue]);

  const handleSearch = () => {
    let tempData = templates;
    let filteredArr = [];
    if (searchTerm !== "") {
      if (Array.isArray(tempData)) {
        filteredArr = tempData.filter((template) =>
          template.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (filteredArr.length === 0) {
        setResolvedData({ resolvedState: "empty" });
      } else {
        filteredArr.resolveState = null;
        return setResolvedData(filteredArr);
      }
    } else {
      setResolvedData(templates);
    }
  };

  const handleTemplateReordering = () => {
    let tempData = resolvedData;
    if (orderValue !== "Default" && Array.isArray(tempData)) {
      let sortedData = tempData.slice(0).sort((a, b) => {
        if (orderValue === "Ascending") {
          if (a.name < b.name) {
            return -1;
          }
        }
        if (orderValue === "Descending") {
          if (a.name > b.name) {
            return -1;
          }
        }
      });
      setResolvedData(sortedData);
    } else if (orderValue === "Default") {
      setResolvedData(templates);
    } else {
      setResolvedData(tempData);
    }
  };

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
                errorMsg={errorMsg}
              />
            )
          
          
          }
            
          />
        ))}
        <Route 
            
            path="/**"
            render = {(props)=>(<NotFound {...props} />) }
            />
      </Switch>
    </Layout>
  );
}

export default App;
