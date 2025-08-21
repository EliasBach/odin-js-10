// script1.js applies depth-first search
// script2.js optimized the code using claude.ai, to make a breadth-first search
// this is more efficient, because it guarantees finding the shortest path first
function ChessKnightMovesToGoal(goal_X, goal_Y, start_X, start_Y) {
    // queue stores [current_path, current_x, current_y]
    const queue = [[[start_X, start_Y], start_X, start_Y]]
    const visited = new Set([`${start_X},${start_Y}`])
    
    while (queue.length > 0) {
        const [path, current_X, current_Y] = queue.shift()
        
        // check if we reached the goal
        if (current_X === goal_X && current_Y === goal_Y) {
            console.log(`Shortest path found from: [${path[0]}, ${path[1]}]`)
            for (let coordinate of path.slice(2)) {
                console.log(coordinate)
            }
            console.log(`Path: ${path.length-2} moves`)
            return path
        }
        
        // try all possible knight moves
        for (let [next_X, next_Y] of getValidKnightMoves(current_X, current_Y)) {
            const posKey = `${next_X},${next_Y}`
            
            if (!visited.has(posKey)) {
                visited.add(posKey)
                queue.push([[...path, [next_X, next_Y]], next_X, next_Y])
            }
        }
    }
    
    console.log("No path found")
    return null
}

function getValidKnightMoves(X, Y) {
    const validMoves = []
    const knightMoves = [
        [2, 1], [2, -1], [1, 2], [-1, 2],
        [-2, 1], [-2, -1], [1, -2], [-1, -2]
    ]
    
    for (let [dx, dy] of knightMoves) {
        const newX = X + dx
        const newY = Y + dy
        
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            validMoves.push([newX, newY])
        }
    }
    
    return validMoves
}

const X_start = 7
const Y_start = 7
const X_goal = 0
const Y_goal = 0
ChessKnightMovesToGoal(X_goal, Y_goal, X_start, Y_start)