import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbFilter = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Report</Breadcrumb.Item>
    <Breadcrumb.Item active>Goal</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbFilter;