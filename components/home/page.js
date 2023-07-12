'use client'

import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";

import HomeBannerSectios from "./HomeBanner";
import PropertyServicesSection from "./classic/PropertyServices";


const BodyContent = () => {
    const [value, setValue] = useState();
    const [clientData, setClientData] = useState();
  
    useEffect(() => {
      getData(`${process.env.API_URL}/property`)
        .then((res) => {
          setValue(res.data);
        })
        .catch((error) => console.log("Error", error));
      getData(`${process.env.API_URL}/client-agent`)
        .then((res) => {
          setClientData(res.data);
        })
        .catch((error) => console.log("Error", error));
    }, []);
    return (
      <>
        <HomeBannerSectios />
        <PropertyServicesSection value={AppPropertyData.PropertyServicesInClassic} />
      </>
    );
  };
  
  export default BodyContent;
  