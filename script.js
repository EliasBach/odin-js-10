function ChessKnightMovesToGoal(X, Y, goal_X, goal_Y, visited_coordinates = [[X, Y]]) {
    // check conditions to end recursion
    
    if (X == goal_X && Y == goal_Y) { 
        console.log("Path found")
        for (let XY of visited_coordinates) {
            console.log(XY)
        }
        return
    } 
    
    
    // try one of eight possible moves (update next move and call again)
    // update position and visited moves
    for (let move of newMovesFrom(X, Y, visited_coordinates)) {
        visited_coordinates.push(move)
        X = move[0]
        Y = move[1]
        if (visited_coordinates.length > 6) {
            console.log("Too many moves made.")
            return
        }

        ChessKnightMovesToGoal(X, Y, goal_X, goal_Y, visited_coordinates)
    }
    return
}

function newMovesFrom(X, Y, visited_coordinates) {
    const newMoves = []
    if (X+2 <= 7 && Y+1 <= 7) {newMoves.push([X+2, Y+1])}
    if (X+2 <= 7 && Y-1 >= 0) {newMoves.push([X+2, Y-1])}
    if (X+1 <= 7 && Y+2 <= 7) {newMoves.push([X+1, Y+2])}
    if (X-1 >= 0 && Y+2 <= 7) {newMoves.push([X-1, Y+2])}
    if (X-2 >= 0 && Y+1 <= 7) {newMoves.push([X-2, Y+1])}
    if (X-2 >= 0 && Y-1 >= 0) {newMoves.push([X-2, Y-1])}
    if (X+1 <= 7 && Y-2 >= 0) {newMoves.push([X+1, Y-2])}
    if (X-1 >= 0 && Y-2 >= 0) {newMoves.push([X-1, Y-2])}
    const visitedSet = new Set(visited_coordinates.map(c => `${c[0]},${c[1]}`))
    return newMoves.filter(c => !visitedSet.has(`${c[0]},${c[1]}`))
}

// testing
const X = 5
const Y = 3
const goal_X = 3
const goal_Y = 2
ChessKnightMovesToGoal(X, Y, goal_X, goal_Y)