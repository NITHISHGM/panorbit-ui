import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Avatar,
  Dropdown,
  Menu,
  Button,
  Divider,
} from "antd";
import { getUsers } from "../redux/slice/usersSlice";
import SideNav from "../components/sideNav/SideNav";
import ChatBot from "../components/ChatBot";

// eslint-disable-next-line no-unused-vars
const { Header, Footer, Sider, Content } = Layout;

const Profile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const selectedUserData = useSelector((state) => state.selectedUser.data);
  const { data, status } = useSelector((state) => state.allUsers);

  const [selectedUser, setSelectedUser] = useState([]);
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
      setDropdownList(createDropdownListData.slice(1, 3));
    }
  }, [status]);

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
            <div className="profile-divider" />
            <Menu.Item key={user.key} className="text-center">
              <span>
                <Avatar size={30} src={user.img} />
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
  const activePageName = () => {
    if (
      location.pathname.includes("/profile/") &&
      location.pathname.endsWith(id)
    ) {
      return "Profile";
    } else if (location.pathname === "/posts") {
      return "Posts";
    } else if (location.pathname === "/gallery") {
      return "Gallery";
    } else if (location.pathname === "/todo") {
      return "ToDo";
    }
  };

  return (
    <div className="profile-layout">
      <Layout>
        <Sider className="layout-sider">
          <SideNav activeUser={selectedUser} />
        </Sider>
        <Layout>
          <Header className="layout-header">
            <Row>
              <Col span={24}>
                <span className="page-heading">{activePageName()}</span>
                <span className="float-right">
                  <Avatar
                    size="default"
                    src={selectedUser[0]?.profilepicture}
                  />
                  <Dropdown
                    overlayStyle={{ width: "250px" }}
                    trigger={["click"]}
                    placement="bottomLeft"
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
          <Content className="layout-content"> {props.children}</Content>

          <Footer className="layout-footer">
            <ChatBot />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
