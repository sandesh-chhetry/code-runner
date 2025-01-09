import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/layout";
import CodeBody from "./components/codebody";
import ResponseBody from "./components/responsebody";

const Home = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");


  useEffect(() => {
    const ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const responsebody = JSON.parse(event.data);
      console.log(responsebody)
      // if (responsebody.type === "stderr") {
      //   setIsError(true);
      //   setOutput("Something went wrong");
      // }else {
      // } 
      const char = responsebody.data;
      if (char != undefined) {
        setOutput((prevOutput) => (prevOutput ?? "") + char)
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
      console.log("WebSocket connection closed");
    };
  }, []);

  useEffect(() => {
    if(selectedLanguage == "HTML"){
      setOutput(code)
    }
  },[code])

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const containerWidth = window.innerWidth;
      const newDividerPosition = (e.clientX / containerWidth) * 100;
      setDividerPosition(Math.min(70, Math.max(30, newDividerPosition)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleRun = () => {
    setOutput(null);
    const payload = {
      "command": "run",
      "code": code,
      "language": selectedLanguage,
      "input": ""
    };
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(payload));
    }
    console.log(payload)
  }
  console.log(selectedLanguage)
  return (
    <>
      <Layout handleRun={handleRun} language={selectedLanguage} setLanguage={setSelectedLanguage}>
        <div className="resizable-container editor-body">
          <div className="left-div bg-dark p-2" style={{ width: `${dividerPosition}%` }}>
            <CodeBody setCode={setCode} />
          </div>
          <div className="divider" onMouseDown={handleMouseDown}></div>
          <div className="right-div bg-dark p-2" style={{ width: `${100 - dividerPosition}%` }}>
            <ResponseBody output={output} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home