import cheerio from "cheerio";

// Your HTML table string
const htmlTableString = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>25</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>30</td>
        <td>Los Angeles</td>
      </tr>
    </tbody>
  </table>
`;

// Parse HTML table using cheerio
const $ = cheerio.load(htmlTableString);
const tableRows = $('table tbody tr');

// Create JSON object
const jsonData = [];

tableRows.each((index, row) => {
  const rowData = {};
  $(row).find('td').each((i, cell) => {
    const headerText = $('thead th').eq(i).text().toLowerCase(); // Assuming headers are in lowercase
    rowData[headerText] = $(cell).text();
  });
  jsonData.push(rowData);
});

// Print the resulting JSON object
console.log(JSON.stringify(jsonData, null, 2));
