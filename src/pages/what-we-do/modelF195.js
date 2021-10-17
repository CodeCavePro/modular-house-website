import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model F195" page="house" component = {HousePage} house={2}>
    </Layout>
  );
};
export default HousesPage;

