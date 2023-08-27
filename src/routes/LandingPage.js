import React, { useEffect } from "react";
import { Row, Col, Card, Avatar, List, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice/usersSlice";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectedUserAction } from "../redux/slice/selectedUserSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.allUsers);

  const handleSelectUser = (item) => {
    dispatch(selectedUserAction(item));
  };
  return (
    <div className="homeImgCls">
      <Row>
        <Col span={7}></Col>
        <Col span={10} className="my-7">
          <Card
            className="landingCard"
            title={<div className="mainPageHead">Select an account </div>}
          >
            {!status ? (
              <>
                <div
                  id="scrollableDiv"
                  style={{
                    height: 350,
                    overflow: "auto",
                  }}
                >
                  <InfiniteScroll
                    dataLength={data.users.length}
                    loader={
                      <Skeleton
                        avatar
                        paragraph={{
                          rows: 1,
                        }}
                        active
                      />
                    }
                    scrollableTarget="scrollableDiv"
                  >
                    <List
                      dataSource={data.users}
                      className="users-list-card"
                      renderItem={(item) => (
                        <Link to={`/profile/${item.id}`}>
                          {" "}
                          <List.Item
                            key={item.email}
                            onClick={() => handleSelectUser(item)}
                          >
                            <List.Item.Meta
                              avatar={
                                <Avatar
                                  size="large"
                                  src={item.profilepicture}
                                />
                              }
                            />
                            <div className="usersList">{item.name}</div>
                          </List.Item>
                        </Link>
                      )}
                    />
                  </InfiniteScroll>
                </div>
              </>
            ) : (
              <>Loading...</>
            )}
          </Card>
        </Col>
        <Col span={7}></Col>
      </Row>
    </div>
  );
};

export default LandingPage;
