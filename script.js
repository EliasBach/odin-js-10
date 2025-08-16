function knightMoves(start_xy, end_xy) {
    // ensure inputs are valid, i.e. dual-entry array with integers range 0-7
    try {
        if (start_xy.length != 2 || end_xy.length != 2) {
            console.log("Error: Invalid input length.") 
            return
        } 
    } catch (TypeError) {
        console.log("Error: Invalid input type.") 
        return
    }
    
    let IntegerError = false
    if (!Number.isInteger(start_xy[0])) IntegerError = true
    if (!Number.isInteger(start_xy[1])) IntegerError = true
    if (!Number.isInteger(end_xy[0])) IntegerError = true
    if (!Number.isInteger(end_xy[1])) IntegerError = true
    if (IntegerError) {
        console.log("Error: Coordinates must be integers.")
        return
    }

    let RangeError = false
    if (start_xy[0] < 0 || start_xy[0] > 7) RangeError = true
    if (start_xy[1] < 0 || start_xy[1] > 7) RangeError = true
    if (end_xy[0] < 0 || end_xy[0] > 7) RangeError = true
    if (end_xy[1] < 0 || end_xy[1] > 7) RangeError = true
    if (RangeError) {
        console.log("Error: Coordinates must be in range 0 to 7.")
        return
    }
    
    // actual algorithm
    const x1 = start_xy[0]
    const y1 = start_xy[1]
    const x2 = end_xy[0]
    const y2 = end_xy[1]


    
}



// testing 
let x = [0, 0]
let y = [7, 7]
let o = "test" // wrong type
let oo = [4.1, 6] // non-integer
let ooo = [0, 8] // out of range

knightMoves(x,o)
knightMoves(x,oo)
knightMoves(x,ooo)
knightMoves(x,y)
