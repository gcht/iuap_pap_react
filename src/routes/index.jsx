/*
* 路由表
* */
import React from "react";
import { Router, Route } from "mirrorx";
import Layout from "layout";

import MST from "modules/mst/router";
import PPM from "modules/ppm/router";
import order from "modules/order/router";
import Supplier from "../modules/supplier/router";
import contracts from "modules/contract/router";
import MainLayout from "../layout";
import "./index.less";

const App = () => (
  <Router>
    <div>
      <MainLayout />
      <div className="layout-content">
        {/* 主子表路由 */}
        <Route path="/mst" component={MST} />
        {/* 树表路由 */}
        <Route path="/ppm" component={PPM} />
        {/* 订单管理 */}
        <Route path="/order" component={order} />
        {/* 供应商 */}
        <Route path="/supplier" component={Supplier} />
        {/* 合同管理 */}
        <Route path="/contract" component={contracts} />
      </div>
    </div>
  </Router>
);

export default App;