import React from "react";
import { Row, Col, Divider, Space } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

const SideNav = ({ activeUser }) => {
  const location = useLocation();
  const { id } = useParams();
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
                className={
                  location.pathname.includes("/profile/") &&
                  location.pathname.endsWith(id)
                    ? "active-nav"
                    : ""
                }
              >
                Profile
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/posts`}>
              <div
                className={location.pathname === "/posts" ? "active-nav" : ""}
              >
                Posts
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/gallery`}>
              <div
                className={location.pathname === "/gallery" ? "active-nav" : ""}
              >
                Gallery
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/todo`}>
              <div
                className={location.pathname === "/todo" ? "active-nav" : ""}
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
