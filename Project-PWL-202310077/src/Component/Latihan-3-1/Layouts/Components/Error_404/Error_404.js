import React from "react";
import error from "../../../../../asset/404.jpg";

export default function Error_404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={error} alt="404 not found" style={{ width: "50%" }} />
    </div>
  );
}