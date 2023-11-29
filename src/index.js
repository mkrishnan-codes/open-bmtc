const renderHTML = () => {
  const htmlFilePath = "./resources/bmtc-table-v.html";

  // Fetch the HTML content from the file
  fetch(htmlFilePath)
    .then((response) => response.text())
    .then((htmlContent) => {
      // Render the HTML content into the 'root' div
      document.getElementById("root").innerHTML = htmlContent;
    })
    .catch((error) => console.error("Error fetching HTML:", error));
};
renderHTML();
