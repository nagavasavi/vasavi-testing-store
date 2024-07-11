import React, { useEffect, useState } from "react";


export const getCollectionData = async(handle) => {
    const collectionHandle = window.shopifyVariables.collectionHandle;
    const storeFrontKey = '1675ee19b18e9a949a475ec4823c6de6';
    const url = "/api/2024-01/graphql.json";
        let shopifyHeader = new Headers();
        shopifyHeader.append("Content-Type", "application/json");
        shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
        const graphqlquery = {
            query: `query AllProducts @inContext(country: ${window.Shopify.country}) {
                collection(handle: "${collectionHandle}") {
                  handle
                  title
                  
                    metafields(identifiers: [{namespace: "custom", key: "custom_collection_carousel"}]) {
                      value
                    }
                  products(first: 250) {
                    edges {
                      node {
                        handle
                        productType
                        tags
                        vendor
                        id
                        title
                        onlineStoreUrl
                        featuredImage{
                          src
                          id
                          width
                          height
                          altText
                        }
                        variants(first: 100) {
                          nodes {
                            metafields(identifiers: [{namespace: "custom", key: "show_in_bundle"}]) {
                              value
                            }
                            availableForSale
                            quantityAvailable
                            price {
                              amount
                              currencyCode
                            }
                            selectedOptions {
                              name
                              value 
                            }
                          }
                        }
                      }
                    }
                    pageInfo {
                      endCursor
                      hasNextPage
                      hasPreviousPage
                      startCursor
                    }
                  }
                }
            }`,
            variables:{
                "query":`${handle}`        
            }
        }

        let requestOptions = {
            method: 'POST',
            headers: shopifyHeader,
            body: JSON.stringify(graphqlquery)
        };

        const data = await fetch(url, requestOptions);
        const searchData = await data.json();
        const collectionsortdata =searchData.data.collection;
        console.log('collectionsortdata',collectionsortdata)
        return collectionsortdata;
}


export const getCollectoionId = async(id)=>{
  
}