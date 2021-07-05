const errorDiv = document.querySelector("#error");
const scoreTable = document.querySelector("#score-table");
const clearTable = ()=>scoreTable.innerHTML = "";
const setScoreboardContents = markup =>
 scoreTable.innerHTML = markup;
const tableRows = data => data.sort(
({score:score1},{score:score2})=>score2-score1)
.reduce((x,y)=>
`${x}\n${tableRow(y)}`, "");
const tableRow = ({name, color, score})=>
`                <tr>
                    <td style="background-color:${color}"></td>
                    <td>${name}</td>
                    <td>
                        <span>${score}</span>
                        pieces of eight
                    </td>
                </tr>`;

export const fillScoreBoard = data => {
    clearTable();
    setScoreboardContents(tableRows(data));
}

export const reportError = e => {
    console.error("There was an error fetching the data.");
    errorDiv.innerHTML = "There was an error fetching the data.";
}
