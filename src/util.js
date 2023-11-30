import { TABLE_ID } from "./constants";
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
//   var rows = table.querySelectorAll(".searchable");
  var rows = table.querySelectorAll("tr");

  // Change the condition based on your requirement
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
console.log(displayRows,rows.length,"DISPLAYROWS");
  for (var i = 0; i < rows.length; i++) {
    // Start from 1 to skip the header row
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
const createFIlter = (cells,rowspan) => {
  return {
    name: cells[0].innerHTML.trim().toLowerCase(),
    fromTo: cells[1].innerHTML.trim().toLowerCase(),
    via: cells[2].innerHTML.trim().toLowerCase(),
    rowspan,
  };
};
export const assignColumnIdentifier = () => {
  var table = document.getElementById(TABLE_ID);
  var rows = table.getElementsByTagName("tr");
  dictionary = {};

  let i = 1;
  while (i < rows.length) {
    // Start from 1 to skip the header row
    var cells = rows[i].cells;
    rows[i].setAttribute("class", "searchable");
    var name = cells[0].setAttribute("class", "route");
    const plus = parseInt(cells[0].getAttribute("rowspan") || 1);
    dictionary[i] = createFIlter(cells,plus);
    i += plus;
  }
  console.log(dictionary, "Dictio");
};
