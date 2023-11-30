import "./style.css";
import { BMTC_TABLE } from "./res/table";
import "./style.css";
import { addAttributes, createJsObjectFromTable, onFilter, createHtmlElementFromstring } from "./src/util";
import { FILTER_ID, TABLE_ID } from "./src/constants";
import { content } from "./res/contentTemplate";
const init = () => {
  document.querySelector("#app").innerHTML = BMTC_TABLE;
  document.querySelector("#app table")?.setAttribute("id", TABLE_ID);
 
  document.querySelector("#app").prepend(createHtmlElementFromstring(content));
  const input = document.getElementById(FILTER_ID)
  input.addEventListener("input", onFilter);
  createJsObjectFromTable();
};
init();
