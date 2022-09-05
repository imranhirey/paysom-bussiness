import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Areyousure from "../components/common/popups/Areyousure";
import Customers from "../components/dashboard/Customers";
import Devloper from "../components/dashboard/Devloper";
import Home from "../components/dashboard/Home";
import Intents from "../components/dashboard/Intents";
import Payments from "../components/dashboard/Payments";
import Subscriptions from "../components/dashboard/Subscriptions";
import { Pincontext } from "../context/pincontext";

const Dashboard = () => {
  let [logout, setlogout] = React.useState(false);
  let [pinrequired, setpinrequired] = useContext(Pincontext);
  let route = useNavigate();
  let onlocgoutclick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "80%",
          height: "95%",
        }}
      >
        <Tabs isLazy variant="enclosed">
          <TabList>
            <Tab>Home</Tab>
            <Tab>Payments</Tab>
            <Tab>Customers</Tab>
            <Tab>Billing</Tab>
            <Tab>Intents</Tab>
            <Tab>Subscriptions</Tab>
            <Tab>Developer section</Tab>
            <Tab>Settings</Tab>
            <Button
              onClick={() => {
                setlogout(true);
              }}
              color="white"
              backgroundColor="red"
              style={{ display: "flex", marginLeft: "40%", border: "none" }}
            >
              logout
            </Button>
          </TabList>
          {logout && (
            <Areyousure
              des="Loging out your account means you will be redirected to the login page 
  and you will need to enter your credentials again"
              open={logout}
              title="are you sure you want to logout"
              setopen={setlogout}
              onsubmit={() => {
                onlocgoutclick();
              }}
            />
          )}
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>

            <TabPanel>
              <Payments />
            </TabPanel>

            <TabPanel>
              <Customers />
            </TabPanel>

            <TabPanel>
            <h1>billing</h1>
            </TabPanel>

            <TabPanel>
              <Intents />
            </TabPanel>

            <TabPanel>
            <Subscriptions />
            </TabPanel>

            <TabPanel>
            <Devloper />
            </TabPanel>
           
            <TabPanel>
              <h1>settings</h1>
            </TabPanel>
            
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
