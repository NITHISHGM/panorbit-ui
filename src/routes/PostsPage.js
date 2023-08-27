import React from "react";
import { Row, Col } from "antd";
import ComingSoon from "../components/ComingSoon";

const PostsPage = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <ComingSoon />
        </Col>
      </Row>
    </>
  );
};

export default PostsPage;
