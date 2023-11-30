import "./style.css";
import { BMTC_TABLE } from "./res/table";
import "./style.css";
import { addAttributes, assignColumnIdentifier, onFilter } from "./src/util";
import { FILTER_ID, TABLE_ID } from "./src/constants";
const init = () => {
  document.querySelector("#app").innerHTML = BMTC_TABLE;
  document.querySelector("#app table")?.setAttribute("id", TABLE_ID);
  let input = addAttributes(document.createElement("input"), {
    type: "text",
    class: "bus-filter",
    id: FILTER_ID,
  });
  input.addEventListener("input", onFilter);
  document.querySelector("#app").prepend(input);
  assignColumnIdentifier();
};
init();
