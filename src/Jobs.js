import React from "react";
import "./Jobs.css";
import { useState } from "react";

export default function Jobs() {
  const [data, updateData] = useState([
    {
      tag1: "photoshop",
      tag2: "new",
      tag3: "featured",
      tag4: "devloper",
      tag5: "2w",
      tag6: "fulltime",
      tag7: "usa",
      tag8: "fullstack",
      tag9: "html",
      tag10: "css",
      tag11: "javascript",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    },
    {
      tag1: "dev",
      tag2: "old",
      tag3: "featu",
      tag4: "devloper jobs",
      tag5: "10w",
      tag6: "half",
      tag7: "india",
      tag8: "react",
      tag9: "java",
      tag10: "golang",
      tag11: "cpp",
    }
  ]);

  return (
    <div>
      {data.map((info, i) => {
        return (
          <div className="container">
            <div className="box">
              <img src={require("./instagram.png")} alt="instagram image" />
              <div className="info">
                <div className="feature">
                  <span>{info.tag1}</span>
                  <span className="new">{info.tag2}</span>
                  <span className="featured">{info.tag3}</span>
                </div>
                <div className="title">
                  <span>{info.tag4}</span>
                </div>
                <div className="feature">
                  <span>{info.tag5}</span>
                  <span>{info.tag6}</span>
                  <span>{info.tag7}</span>
                </div>
              </div>
              <div className="moreTags">
                <span>{info.tag8}</span>
                <span>{info.tag9}</span>
                <span>{info.tag10}</span>
                <span>{info.tag11}</span>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}
