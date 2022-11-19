import dataBase from "../db/caloriesData.js";
const tableBody = document.getElementById("calories-table-body");

// This function is used to draw the table dynamically.
const drawTable = () => {
  const { data } = dataBase;
  // For the content of the table, dummy data was used from caloriesData.js file.
  const tableContent = data.map((item) => {
    const content = item.data.map(
      (innerItem) => `
    <tr class="calories__table__body--tr">
        <td class="calories__table__body--td">
          ${innerItem.title}
        </td>
        <td class="calories__table__body--td">${innerItem.value}</td>
    </tr>
    `
    );

    return `
    <tr class="calories__table__body--tr">
        <td class="calories__table__body--td full" colspan="2">
          ${item.title}
        </td>
    </tr>
    ${content.join("")}
    `;
  });

  tableBody.innerHTML = tableContent.join("");
};

drawTable();
