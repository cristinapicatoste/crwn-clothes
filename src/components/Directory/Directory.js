import React from "react";
import { MenuItem } from "../Menu-item/MenuItem";
import { sections } from "../../data/data.directory";

import "./Directory.scss";

export const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} img={imageUrl} size={size} />
      ))}
    </div>
  );
};
