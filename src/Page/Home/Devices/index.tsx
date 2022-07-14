import React from "react";
import { Route, Routes } from "react-router-dom";
import DevicesTable from "./DeviceTable";
import AddDevices from "./AddDevices";
import DetailDevices from "./DetailDevices";

const index = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddDevices />} />
      <Route path="/edit" element={<AddDevices />} />
      <Route path="/detail" element={<DetailDevices />} />
      <Route path="/" element={<DevicesTable />} />
    </Routes>
  );
};

export default index;
