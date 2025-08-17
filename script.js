function ValidChessXY(chess_xy) {
        // ensure inputs are valid, i.e. dual-entry array with integers in range 0-7
        try {
            if (chess_xy.length !== 2) {
                console.log("Error: Invalid input length.") 
                return false
            } 
        } catch (TypeError) {
            console.log("Error: Invalid input type.") 
            return false
        }
        
        let IntegerError = false
        if (!Number.isInteger(chess_xy[0])) IntegerError = true
        if (!Number.isInteger(chess_xy[1])) IntegerError = true
        if (IntegerError) {
            console.log("Error: Coordinates must be integers.")
            return false
        }

        let RangeError = false
        if (chess_xy[0] < 0 || chess_xy[0] > 7) RangeError = true
        if (chess_xy[1] < 0 || chess_xy[1] > 7) RangeError = true
        if (RangeError) {
            console.log("Error: Coordinates must be in range 0 to 7.")
            return false
        }

        return true
    }

class ChessKnight {
    constructor(xy_current) {
        if (ValidChessXY(xy_current)) {
            this.xy_current = xy_current 
        } else {
            this.xy_current = [0,1]
        }
    }

    knightHasMovesFrom(xy_current = this.xy_current, xy_visited = [], path) {
        const X = xy_current[0]
        const Y = xy_current[1]
        const validMoves = []
        if (X+2 <= 7 && Y+1 <= 7) {validMoves.push([X+2, Y+1])}
        if (X+2 <= 7 && Y-1 >= 0) {validMoves.push([X+2, Y-1])}
        if (X+1 <= 7 && Y+2 <= 7) {validMoves.push([X+1, Y+2])}
        if (X-1 >= 0 && Y+2 <= 7) {validMoves.push([X-1, Y+2])}
        if (X-2 >= 0 && Y+1 <= 7) {validMoves.push([X-2, Y+1])}
        if (X-2 >= 0 && Y-1 >= 0) {validMoves.push([X-2, Y-1])}
        if (X+1 <= 7 && Y-2 >= 0) {validMoves.push([X+1, Y-2])}
        if (X-1 >= 0 && Y-2 >= 0) {validMoves.push([X-1, Y-2])}
        console.log(validMoves)
        // have to still remove coordinates of already visited spaces
        return
    }

    knightMovesToGoal(xy_goal) {
       const x1 = this.xy_current[0]
       const y1 = this.xy_current[1]
       const x2 = this.xy_goal[0]
       const y2 = this.xy_goal[1]
       // to implement
    }

}

// testing 
let x = [1, 2]
let y = [7, 7]
let o = "test" // wrong type
let oo = [4.1, 6] // non-integer
let ooo = [0, 8] // out of range

ValidChessXY(x)
ValidChessXY(o)
ValidChessXY(oo)
ValidChessXY(ooo)
const K1 = new ChessKnight(o)
console.log(K1)
const K2 = new ChessKnight(x)
console.log(K2)
K2.knightHasMovesFrom()
