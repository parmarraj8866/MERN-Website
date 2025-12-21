import React from "react";

export default function SideLayout(props) {
  return (
    <div
      className=" border"
      style={{ width: "300px", height: "100vh", backgroundColor: "#dedebaff" }}
    >
      <h2 className="mx-5 fw-normal" style={{ marginTop: "100px" }}>
        {props.name}
      </h2>

      <div>
        <h4 className="mx-2 mt-3 fw-normal">Filter Products : </h4>
        <div className="mb-2">
          <input type="radio" name="filterproduct" className="" />
          <label htmlFor="">new</label>
        </div>
        <div className="mb-2">
          <input type="radio" name="filterproduct"  className="" />
          <label htmlFor="">new</label>
        </div>
      </div>
    </div>
  );
}
