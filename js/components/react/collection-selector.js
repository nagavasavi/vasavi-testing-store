import React, { useEffect, useState } from "react";
import { getCollectionData } from "./coll-data";

export default () => {
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const fetchData = async () => {
    setFetchedProduct(await getCollectionData());
  };
  useEffect(() => {
    fetchData();
  }, []);
       
    
    return (
      
          <>
            <div className="collection-container__opt-label">Featured products</div>
            <div className="collection-container__coll-title">{fetchedProduct && fetchedProduct.title}</div>
          </>
        
        
      
    );
  }
  