import React from "react";
import { Button } from "react-bootstrap";

const ResponseBody = () => {
  return (
    <>
      <div className="body-title justify-content-between">
        <h4>Output:</h4>
        <Button variant="light" className="btn-sm">CLEAR</Button>
      </div>
      <div className="bg-white editor-section">

        <h1>this is response Body</h1>
      </div>
    </>
  )
}

export default ResponseBody