// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    return Math.abs(distanceFromHqInBlocks(value) * 264);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance < 400) {
        return 0
    } else if (distance > 2500) {
        return 'cannot travel that far'
    } else if (distance > 2000) {
        return 25
    } else {
        return (distance - 400) * 0.02
    }
}