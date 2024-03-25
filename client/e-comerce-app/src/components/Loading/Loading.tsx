import { useAppSelector } from "@hooks/reduxHooks";

import "./Loading.scss";

function Loading() {
  const darkMode = useAppSelector((state) => state.darkMode);
  return (
    <div className="loading-container">
      <div className={`loader${darkMode ?"-dark":""}`}></div>
      <p style={{color: darkMode? "#fff": "#333238"}}>Loading...</p>
    </div>
  );
}

export default Loading;
