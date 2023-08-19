import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://yt3.ggpht.com/yti/AOXPAcUOBr_bD9dcQqX6BrIkaPYx2aUy9S6sgrIXso9__A=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
