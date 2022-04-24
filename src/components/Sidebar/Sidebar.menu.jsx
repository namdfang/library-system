import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AiFillHome,
  RiAdminFill,
  IoDocumentsSharp,
  AiFillCaretRight,
  RiFunctionLine,
} from "react-icons/all";
import Title from "./Sidebar.title";
import { PATH } from "../../constants/path";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

export default function SidebarMenu(props) {
  const { isShowSidebar } = props;
  const [openKeys, setOpenKeys] = useState(["sub7"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Menu
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode={isShowSidebar ? "inline" : undefined}
    >
      <Menu.Item key="sub1" icon={<AiFillHome className="icon" />}>
        <Link className="text-link" to={PATH.HOME}>
          Home
        </Link>
      </Menu.Item>

      <SubMenu
        icon={<RiAdminFill className="icon" />}
        key="sub2"
        title={<Title title="Admin" iconRight={<AiFillCaretRight />} />}
      >
        <Menu.Item key="3" icon={<IoDocumentsSharp className="icon" />}>
          <Link
            className="mx-1 text-decoration-none text-link"
            to={PATH.DOCUMENT}
          >
            Manage documents
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RiFunctionLine className="icon" />}>
          <Link
            className="mx-1 text-decoration-none text-link"
            to={PATH.CATEGORY}
          >
            Manage categories
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
