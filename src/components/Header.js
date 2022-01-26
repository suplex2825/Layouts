import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (
      location.pathname === "/layout5" ||
      location.pathname === "/upload1" ||
      location.pathname === "/upload2" ||
      location.pathname === "/upload3"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return (
    <div
      className="header"
      style={
        show
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-start" }
      }
    >
      <div>
        <Link to="/">
          <Button type="primary">Layout 1</Button>
        </Link>
        <Link to="/layout2">
          <Button type="primary">Layout 2</Button>
        </Link>
        <Link to="/layout3">
          <Button type="primary">Layout 3</Button>
        </Link>
        <Link to="/layout4">
          <Button type="primary">Layout 4</Button>
        </Link>
        <Link to="/layout5">
          <Button type="primary">Layout 5</Button>
        </Link>
      </div>
      {show && (
        <div>
          <Link to="/upload1">
            <Button type="primary">Upload 1</Button>
          </Link>
          <Link to="/upload2">
            <Button type="primary">Upload 2</Button>
          </Link>
          <Link to="/upload3">
            <Button type="primary">Upload 3</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
