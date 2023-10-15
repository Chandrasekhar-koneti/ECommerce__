import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const HeaderComponent = ({ setOpen }) => {
  return (
    <div className="h-14 bg-blue-700 fixed w-full shadow-lg">
      <header className="flex h-14 max-w-7xl mx-auto justify-around items-center">
        {/* logo text on the left */}
        <Link to="/">
          <div className="flex items-center gap-4">
            <HomeOutlinedIcon className="text-white" />
            <h3 className="text-white">MyCommerce</h3>
          </div>
        </Link>

        {/* nav right text */}

        <Nav setOpen={setOpen} />
      </header>
    </div>
  );
};

export default HeaderComponent;
