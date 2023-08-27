import React from "react";
import { Row, Col } from "antd";
import mapImg from "../../assets/map.png";
import { useSelector } from "react-redux";

const ProfilePageRight = () => {
  const selectedUser = useSelector((state) => state.selectedUser.data);
  return (
    <div>
      <Row>
        {" "}
        <Col span={24} className="profile-right">
          <div className="label-text pb-1"> Address :</div>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end">
              <div className="label-text">Street </div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {selectedUser[0]?.address.street}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">Suite </div>
            </Col>{" "}
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.address.suite}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">City</div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.address.city}
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col span={8} className="textAlign-end ">
              <div className="label-text">Zipcode </div>
            </Col>
            <Col span={1} className="text-center label-text">
              :
            </Col>
            <Col span={15} className="value-text">
              {" "}
              {selectedUser[0]?.address.zipcode}
            </Col>
          </Row>
          <Row>
            <Col span={24} className="pt-2 pb-1">
              <img src={mapImg} className="mapImg" alt="mapimg" />
            </Col>
            <Col span={24}>
              <div className="float-right">
                {" "}
                <span className="sm-label-text">Lat :</span>
                <span className="p-lg-1 sm-value-text">
                  {selectedUser[0]?.address.geo.lat}
                </span>
                <span className="p-lg-1 sm-label-text">Long :</span>
                <span className="p-lg-1 sm-value-text">
                  {selectedUser[0]?.address.geo.lng}
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePageRight;
