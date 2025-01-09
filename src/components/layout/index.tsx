import React, { useCallback } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ ...props }) => {
  const {handleRun, language, setLanguage} = props

  const handleLanguageChange = useCallback((lang: string) => {
    setLanguage(lang);
  }, []);
  return (
    <>
      <Header handleRun = {handleRun} language={language} setLanguage={handleLanguageChange}/>
      <div>
        <Sidebar handleLanguageChange = {handleLanguageChange} currentLanguage = {language} />
        <div className="body-wrap">
          {props.children}
        </div>

      </div>
    </>
  )
}

export default Layout