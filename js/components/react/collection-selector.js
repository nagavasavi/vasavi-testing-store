import React, { useEffect, useState } from "react";

export default ({ shopifyData }) => {
   console.log(shopifyData)
    const { variants } = shopifyData.data;
    const { collections } = shopifyData.data;
    console.log(variants,'variants');
    console.log(collections,'collections');           
    
    return (
      
          <>
            <div className="collection-container__opt-label">Featured products</div>
            <div className="collection-container__coll-title">
          
            </div>
          </>
        
        
      
    );
  }
  