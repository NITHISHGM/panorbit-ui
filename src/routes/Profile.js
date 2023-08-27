import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Avatar, Dropdown, Menu, Button } from "antd";
import { getUsers } from "../redux/slice/usersSlice";
import SideNav from "../components/sideNav/SideNav";
import ChatBot from "../components/ChatBot";

// eslint-disable-next-line no-unused-vars
const { Header, Footer, Sider, Content } = Layout;

const Profile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const selectedUserData = useSelector((state) => state.selectedUser.data);
  const { data, status } = useSelector((state) => state.allUsers);
  const [selectedUser, setSelectedUser] = useState([]);
  const [activePage, setActivePage] = useState("");
  const [activePageHeading, setActivePageHeading] = useState("");
  const [dropDownList, setDropdownList] = useState([]);

  useEffect(() => {
    setSelectedUser(selectedUserData);
  }, [selectedUserData]);

  useEffect(() => {
    if (!status) {
      let createDropdownListData = data?.users.map((user, key) => {
        let Obj = { label: user.name, key: key + 1, img: user.profilepicture };
        return Obj;
      });
      setDropdownList(createDropdownListData.slice(1, 4));
    }
  }, [status]);

  useEffect(() => {
    if (location) {
      let tmp = location.pathname;
      const urlWithoutSlash = tmp.substring(1);
      setActivePage(urlWithoutSlash);
    }
  }, [location]);
  useEffect(() => {
    if (activePage) {
      if (activePage === "profile/1") {
        setActivePageHeading("Profile");
      } else if (activePage === "posts") {
        setActivePageHeading("Posts");
      } else if (activePage === "gallery") {
        setActivePageHeading("Gallery");
      } else if (activePage === "todo") {
        setActivePageHeading("ToDo");
      }
    }
  }, [activePage]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleSignOut = () => {
    navigate("/");
  };
  const dropdownRender = () => (
    <>
      <Menu>
        <div className="pt-3 pb-3 text-center">
          <Avatar size={80} src={selectedUser[0]?.profilepicture} />
          <div className="value-text">{selectedUser[0]?.name}</div>
          <div>{selectedUser[0]?.email}</div>
        </div>

        {dropDownList.map((user) => (
          <>
            <Menu.Item key={user.key}>
              <span>
                <Avatar size="default" src={user.img} />

                <span className="p-lg-3">{user.label}</span>
              </span>
            </Menu.Item>
          </>
        ))}
        <div className="mt-2 mb-3 text-center">
          <Button
            type="primary"
            shape="round"
            danger
            size="middle"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </Menu>
    </>
  );

  return (
    <div className="profile-layout">
      {console.log("dropDownList", dropDownList)}
      <Layout>
        <Sider className="layout-sider">
          <SideNav activeUser={selectedUser} activePage={activePage} />
        </Sider>
        <Layout>
          <Header className="layout-header">
            <Row>
              <Col span={24}>
                <span className="page-heading">{activePageHeading}</span>
                <span className="float-right">
                  <Avatar
                    size="default"
                    src={selectedUser[0]?.profilepicture}
                  />
                  <Dropdown
                    overlayStyle={{ width: "250px" }}
                    trigger={["click"]}
                    placement="bottom"
                    overlayInnerStyle={{ padding: "10px" }}
                    dropdownRender={dropdownRender}
                  >
                    <span className="loggedIn-username cursor-pointer">
                      {selectedUser[0]?.name}
                    </span>
                  </Dropdown>
                </span>
              </Col>
            </Row>
          </Header>
          <Content className="layout-content">
            {" "}
            {props.children}
            <ChatBot />
          </Content>

          {/* <Footer className="layout-footer"></Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
