import React, { useState } from "react";
import { Row, Col, Divider, Space } from "antd";
import { Link } from "react-router-dom";

const SideNav = ({ activeUser, activePage }) => {
  const [selectedNav, setSelectedNav] = useState(activePage);
  return (
    <div className="side-nav">
      <Space
        direction="vertical"
        size="small"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Row>
          <Col span={24}>
            <Link to={`/profile/${activeUser[0]?.id}`}>
              <div
                className={`${
                  selectedNav === "profile/1" ? "active-nav" : "non-active-nav"
                }`}
              >
                Profile
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/posts`}>
              <div
                className={`${
                  selectedNav === "posts" ? "active-nav" : "non-active-nav"
                }`}
              >
                Posts
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/gallery`}>
              <div
                className={`${
                  selectedNav === "gallery" ? "active-nav" : "non-active-nav"
                }`}
              >
                Gallery
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/todo`}>
              <div
                className={`${
                  selectedNav === "todo" ? "active-nav" : "non-active-nav"
                }`}
              >
                ToDo
              </div>
            </Link>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default SideNav;
