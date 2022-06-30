import React, { useState } from "react";
import Cancel from "../accets/Cancel.png";
import "../styles/Tags.css";

export const Tags: React.FC = () => {
  const [listTags, setlistTags] = useState(["1", "Tag", "3", "4", "5"]);
  const delateTag = (val: string) => {
    let tag = listTags.filter((search) => val !== search);
    setlistTags(tag);
  };
  return (
    <div>
      <h2>Tags input</h2>
      <div className="TagsForm">
        {listTags.map((arg) => (
          <div key={arg} className="tags">
            <label>{arg}</label>
            <img alt="cancel" src={Cancel} onClick={() => delateTag(arg)}></img>
          </div>
        ))}
      </div>
    </div>
  );
};
