import { GITHUB_RUN_NUMBER, GITHUB_SHA, TABLE_ID } from "./constants";
let dictionary = {};
export const addAttributes = (element, attributes) => {
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
};
const filterTable = (text) => {
  var table = document.getElementById(TABLE_ID);
  var rows = table.querySelectorAll("tr");

  // Change the condition
  const displayRows = [];
  for (const key in dictionary) {
    const obj = dictionary[key];
    if (
      obj.name.includes(text) ||
      obj.fromTo.includes(text) ||
      obj.via.includes(text)
    ) {
      displayRows.push(parseInt(key));
    }
  }
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].cells;

    if (displayRows.includes(i)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
};

export const onFilter = (event) => {
  filterTable(event.target.value);
};
const createFIlter = (cells, rowspan) => {
  return {
    name: cells[0].innerHTML.trim().toLowerCase(),
    fromTo: cells[1].innerHTML.trim().toLowerCase(),
    via: cells[2].innerHTML.trim().toLowerCase(),
    rowspan,
  };
};
export const createJsObjectFromTable = () => {
  var table = document.getElementById(TABLE_ID);
  var rows = table.getElementsByTagName("tr");
  dictionary = {};

  let i = 1;
  while (i < rows.length) {
    var cells = rows[i].cells;
    const plus = parseInt(cells[0].getAttribute("rowspan") || 1);
    const obj = createFIlter(cells, plus);
    dictionary[i] = obj;
    for (let j = 0; j < plus; j++) {
      dictionary[i + j] = obj;
    }
    i += plus;
  }
};

export const createHtmlElementFromstring = (divString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(divString, "text/html");
  const newElement = doc.body.firstChild;
  return newElement;
};
export const getVersionInfo = () =>{
  return createHtmlElementFromstring(`<div class="d-flex pad ver">About :  Ver 0.${GITHUB_RUN_NUMBER} / Build ${String(GITHUB_SHA).substring(0,6)}</div>`)
}