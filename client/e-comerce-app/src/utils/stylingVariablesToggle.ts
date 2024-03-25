function stylingVariablesToggle(darkMode: boolean | any) {
  const root = document.getElementById("root");
  root?.style.setProperty("--main-background-color", !darkMode ? "#33322f" : "#f9f9f5")
}

export default stylingVariablesToggle;