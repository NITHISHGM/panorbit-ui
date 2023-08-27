import React from "react";
import { Row, Col, Divider, Space } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";

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
                    : "non-active-nav"
                }
              >
                Profile <CaretRightFilled />
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/posts`}>
              <div
                className={
                  location.pathname === "/posts"
                    ? "active-nav"
                    : "non-active-nav"
                }
              >
                Posts <CaretRightFilled />
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/gallery`}>
              <div
                className={
                  location.pathname === "/gallery"
                    ? "active-nav"
                    : "non-active-nav"
                }
              >
                Gallery <CaretRightFilled />
              </div>
            </Link>
            <Divider />
          </Col>
          <Col span={24}>
            <Link to={`/todo`}>
              <div
                className={
                  location.pathname === "/todo"
                    ? "active-nav"
                    : "non-active-nav"
                }
              >
                ToDo <CaretRightFilled />
              </div>
            </Link>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default SideNav;
