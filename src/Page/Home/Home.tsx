import { Layout } from "antd";
import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import styles from "./Home.module.scss";
import Dashboard from "./Dashboard";
import Devices from "./Devices";
import Services from "./Services";
import Provider from "./Provider";
import Report from "./Report";
import Settings from "./Settings";
import Info from "./Info";
import clsx from "clsx";
import SideBar from "../components/SideBar/SideBar";
import HeaderContent from "../components/Header/Header";

const { Sider, Content, Header } = Layout;

const Home = () => {
  const location = useLocation();
  return (
    <div className={clsx(styles.homeContainer)}>
      <Layout style={{ height: "100%" }}>
        <Sider
          width={205}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <SideBar />
        </Sider>
        <Layout style={{ marginLeft: 205 }}>
          <Header
            style={
              location.pathname == "/dashboard"
                ? {
                    height: "88px",
                    padding: "0",
                    backgroundColor: "transparent",
                    position: "fixed",
                    right: 0,
                    top: 0,
                    left: "205px",
                    zIndex: 100,
                  }
                : {
                    height: "88px",
                    padding: "0",
                    backgroundColor: "transparent",
                  }
            }
          >
            <HeaderContent />
          </Header>
          <Content>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/devices/*" element={<Devices />} />
              <Route path="/Services/*" element={<Services />} />
              <Route path="/Provider/*" element={<Provider />} />
              <Route path="/report/*" element={<Report />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;