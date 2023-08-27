import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

const ProfilePageLeft = () => {
  const selectedUser = useSelector((state) => state.selectedUser.data);

  return (
    <div>
      <Row>
        <Col span={24}>
          <img
            src={selectedUser[0]?.profilepicture}
            className="user-img"
            alt="Avatar"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="profile-left">
          <div className="text-center value-text pb-1">
            {" "}
            {selectedUser[0]?.name}
          </div>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end">
              <div className="label-text">Username </div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {selectedUser[0]?.username}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">e-mail</div>
            </Col>{" "}
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.email}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">Phone</div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.phone}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">Website </div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.website}
            </Col>
          </Row>
        </Col>

        <div className="custom-divider"> </div>
        <Col span={24} className="profile-left">
          <div className="text-center label-text pb-1"> Company</div>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end">
              <div className="label-text">Name</div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {selectedUser[0]?.company.name}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">catchPhrase</div>
            </Col>{" "}
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.company.catchPhrase}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">bs</div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.company.bs}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePageLeft;
