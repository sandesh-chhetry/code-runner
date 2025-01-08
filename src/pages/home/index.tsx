import React, { useState } from "react";
import Layout from "../../components/layout";
import CodeBody from "./components/codebody";
import ResponseBody from "./components/responsebody";

const Home = () => {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const containerWidth = window.innerWidth;
      const newDividerPosition = (e.clientX / containerWidth) * 100;
      setDividerPosition(Math.min(80, Math.max(20, newDividerPosition)));
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
  return (
    <>
      <Layout>
        <div className="resizable-container editor-body">
          <div className="left-div bg-dark p-2" style={{ width: `${dividerPosition}%` }}>
            <CodeBody />
          </div>
          <div className="divider" onMouseDown={handleMouseDown}></div>
          <div className="right-div bg-dark p-2" style={{ width: `${100 - dividerPosition}%` }}>
            <ResponseBody />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home