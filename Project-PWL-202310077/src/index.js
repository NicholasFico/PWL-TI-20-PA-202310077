import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Form from "./Component/Tugas_1/Form";
import Widget from "./Component/Tugas_2/Widget";
import FormMultiple from "./Component/Tugas_2/FormMultiple";
import Layout from "./Component/Latihan-3-1/Layouts/Layout";
import Homes from "./Component/Latihan-3-1/Modules/Homes/Homes";
// import AppRoute from "./components/latihan-3-1/apps/AppRoute";
import AppRoute from "./Component/Tugas_4/apps/routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

const { PUBLIC_URL } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FormPersonalData />
    <Widget1 />
    <FormPersonalDataMultiple /> */}
    {/* <Layout>
      <Homes />
    </Layout> */}

    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();