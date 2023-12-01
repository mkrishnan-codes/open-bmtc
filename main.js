import "./style.css";
import { BMTC_TABLE } from "./res/table";
import "./style.css";
import { createJsObjectFromTable, onFilter, createHtmlElementFromstring } from "./src/util";
import { FILTER_ID, GITHUB_RUN_NUMBER, GITHUB_SHA, TABLE_ID } from "./src/constants";
import { content } from "./res/contentTemplate";
const init = () => {
  document.querySelector("#app").innerHTML = BMTC_TABLE;
  document.querySelector("#app table")?.setAttribute("id", TABLE_ID);
 
  document.querySelector("#app").prepend(createHtmlElementFromstring(content));
  const input = document.getElementById(FILTER_ID)
  input.addEventListener("input", onFilter);
  createJsObjectFromTable();
  document.querySelector("#app").append(createHtmlElementFromstring(`<div class="d-flex pad">About :  Ver 0.${GITHUB_RUN_NUMBER} / Build${GITHUB_SHA}</div>`))
};
init();
