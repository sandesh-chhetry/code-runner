import React, { useEffect, useRef, useState } from "react";

const CodeBody = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>(''); 
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const responsebody = JSON.parse(event.data);

      if (responsebody.type === "stderr") {
        setIsError(true);
        setOutput("Something went wrong");
      } else {
        setOutput((prevOutput) => prevOutput + responsebody.data);
      }

      console.log("Full Output So Far:", output + responsebody.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
      console.log("WebSocket connection closed");
    };
  }, []);

  const handleRun = (e: React.MouseEvent<HTMLButtonElement>) => {
    const codeField = document.getElementById('code-input') as HTMLTextAreaElement;
    const codeValue = codeField?.value; // Get value from textarea

    if (codeValue) {
      setInput(codeValue); // Update input state with the current code

      const payload = {
        "command": "run",
        "code": codeValue,
        "language": "javascript",
        "input": ""
      };

      console.log("Payload sent:", payload);

      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify(payload));
      } else {
        console.error("WebSocket is not open");
      }
    } else {
      console.error("Code input is empty");
    }
  };

  return (
    <>
      <div className="body-title gap-2">
        <h4>Status:</h4>
        <span className="badge status-icon bg-danger"></span>
        <span className="badge status-icon bg-success"></span>
      </div>
      <div className="bg-white editor-section">
        <textarea rows={5} cols={10} id="code-input"></textarea>
        <button onClick={handleRun}>Run</button>

      {/* Show output only if not empty and error is not present */}
      <h1>The response text is:</h1>
      <div>{isError ? output : output || "Waiting for output..."}</div>
      </div>

    </>
  );
};

export default CodeBody;
