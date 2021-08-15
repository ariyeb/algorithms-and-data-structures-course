const table = [
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1]
];

const findGroups = (table) => {
    let recursionCounter = 0;
    const cellsChecked = new Set();
    const groups = [];
    const directions = {
        up: "down",
        right: "left",
        down: "up",
        left: "right"
    };

    const checkCellAndFindNeighbors = (x, y, fromDirection, groupCountIndex) => {
        if (cellsChecked.has(`${x}:${y}`)) return;
        if (x < 0 || y < 0 || y >= table.length || x >= table[y].length) return;
        recursionCounter++;
        cellsChecked.add(`${x}:${y}`);
        if (table[y][x] === 0) return;

        groups[groupCountIndex]++;

        for (let direction in directions) {
            if (fromDirection === direction) continue;
            switch (direction) {
                case "up":
                    checkCellAndFindNeighbors(x, y - 1, directions[direction], groupCountIndex);
                    break;
                case "right":
                    checkCellAndFindNeighbors(x + 1, y, directions[direction], groupCountIndex);
                    break;
                case "down":
                    checkCellAndFindNeighbors(x, y + 1, directions[direction], groupCountIndex);
                    break;
                case "left":
                    checkCellAndFindNeighbors(x - 1, y, directions[direction], groupCountIndex);
                    break;
            }
        }
    };

    for (let tableY = 0; tableY < table.length; tableY++) {
        const row = table[tableY];
        for (let tableX = 0; tableX < row.length; tableX++) {
            if (cellsChecked.has(`${tableX}:${tableY}`)) continue;
            if (table[tableY][tableX] === 1) {
                groups.push(0);
                checkCellAndFindNeighbors(tableX, tableY, "left", groups.length - 1);
            }
            cellsChecked.add(`${tableX}:${tableY}`);
        }
    }
    console.log("counter:", recursionCounter);
    return groups;
};

console.log(findGroups(table));

