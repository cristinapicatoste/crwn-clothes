import React from "react";
import MenuItem from "../Menu-item/MenuItem";
import { sections } from "../../data/data.directory";

import "./Directory.scss";

const Directory = () => {
  return (
    // WAY ONE
    // <div className="directory-menu">
    //   {sections.map(({ id, title, imageUrl, size }) => (
    //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    //   ))}
    // </div>
    <div className="directory-menu">
      {/* Para hacer esto, el nombre de la prop y el valor deben coincidir */}
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
