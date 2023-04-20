function rabbit(garden) {
    let jumps = 0;

    for (let currRow = 0; currRow < garden.length; currRow++) {
        let row = garden[currRow];
        for (let currPosition = 0; currPosition < row.length; currPosition++) {
            if (row[currPosition] == "x") {
                jumps += 1;
                isCarrot(garden, currRow, currPosition);
            };
        };
    };

    return jumps;
};

function isCarrot(garden, x, y) {
    if (x < 0 || x >= garden.length) {
        return;
    };

    if (y < 0 || y >= garden[x].length) {
        return;
    };

    if (garden[x][y] !== "x") {
        return;
    };

    garden[x][y] = "eaten";

    isCarrot(garden, x + 1, y);
    isCarrot(garden, x - 1, y);
    isCarrot(garden, x, y + 1);
    isCarrot(garden, x, y - 1);
};

rabbit([
    ["x", "x", " ", " ", " "],
    ["x", "x", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "x", "x"],
    [" ", " ", " ", "x", "x"],
]);

