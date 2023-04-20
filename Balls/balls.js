function balls (arr){
    let balls = {};
    let highestCount = 0;
    let totalCount = 0;
    let result = 0;

        for(let currColor of arr){
            if(currColor == "End"){
                break;
            };

            let [ color, count ] = currColor.split(": ");
            count = Number(count)
            if(balls.hasOwnProperty(color)){
                balls[color] += count;
            }else{
                balls[color] = count;
            };
        };

        for(let currColor in balls){
            totalCount += balls[currColor];
            if(balls[currColor] >= highestCount){
                highestCount = balls[currColor];
            };
        };
        
        result = totalCount - highestCount;
        return result;

};

console.log(balls([
    'Red: 10',
    'Black: 20',
    'Blue: 12',
    'Red: 15',
    'Black: 10',
    "End",
    'Black: 20',
]));