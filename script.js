const X_start = 2
const Y_start = 1
const X_goal = 0
const Y_goal = 0
let path = [[X_start, Y_start]]
ChessKnightMovesToGoal(X_goal, Y_goal, path)

function ChessKnightMovesToGoal(goal_X, goal_Y, path) {
    let last_move = path.slice(-1)[0]
    let current_X = last_move[0]
    let current_Y = last_move[1]
    
    // check conditions to end recursion
    if (current_X == goal_X && current_Y == goal_Y) {
        console.log("Path found:")
        for (let XY of path) {
            console.log(XY)
        }
        return
    } 

    if (path.length > 6) {
        return
    }
    
    // try one of eight possible moves (update next move and call again)
    // update position and visited moves
    for (let move of newMovesFrom(current_X, current_Y, path)) {
        let current_path = path
        ChessKnightMovesToGoal(goal_X, goal_Y, [...current_path, move])
    }
    return
}

function newMovesFrom(X, Y, visited_coordinates = []) {
    const newMoves = []
    console.log(visited_coordinates)
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