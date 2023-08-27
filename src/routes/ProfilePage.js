import React from "react";
import { Row, Col } from "antd";
import ProfilePageLeft from "../components/ProfilePage/ProfilePageLeft";
import ProfilePageRight from "../components/ProfilePage/ProfilePageRight";

const ProfilePage = () => {
  return (
    <div>
      <Row>
        <Col span={9} className="pr-40">
          <ProfilePageLeft />
        </Col>
        <Col span={1}>
          <div className="custom-vertical-divider"></div>
        </Col>

        <Col span={14} className="pr-40">
          <ProfilePageRight />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
