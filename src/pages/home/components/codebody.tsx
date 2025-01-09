import React, { useEffect, useRef, useState } from "react";

const CodeBody = ({ setCode }: any) => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
    setInput(event.target.value);
  };

  const getLineNumbers = () => {
    const lines = input.split('\n').length;
    return Array.from({ length: lines }, (_, i) => i + 1).join('\n');
  };

  return (
    <>
      <div className="body-title gap-2">
        <h4>Status:</h4>
        <span className="badge status-icon bg-danger"></span>
        <span className="badge status-icon bg-success"></span>
      </div>
      <div className="bg-white editor-section ps-0">
        <div className="line-numbers">
          <pre>{getLineNumbers()}</pre>
        </div>
        <textarea rows={5} cols={10} id="code-input" className="code-input" onChange={handleCodeChange}></textarea>

        {/* <div>
          <button onClick={handleRun}>Run</button>
          <h1>The response text is:</h1>
          <div>{isError ? output : output || "Waiting for output..."}</div>
        </div> */}
      </div>

    </>
  );
};

export default CodeBody;
