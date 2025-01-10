import { useCallback } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ ...props }) => {
  const {handleRun, handleStop, language, setLanguage, isDisabled} = props

  const handleLanguageChange = useCallback((lang: string) => {
    setLanguage(lang);
  }, []);
  return (
    <>
      <Header handleRun = {handleRun} handleStop={handleStop} language={language} setLanguage={handleLanguageChange} isDisabled={isDisabled}/>
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