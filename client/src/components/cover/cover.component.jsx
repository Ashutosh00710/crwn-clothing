import React from "react";
import CoverPhoto from "../../assets/cover.png";
import { CoverContainer } from "./cover.styles";

const Cover = () => {
  return (
    <div>
      <CoverContainer src={CoverPhoto} alt="cover" />
    </div>
  );
};

export default Cover;
