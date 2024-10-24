function countPenSwitches(numbers) {
    if (numbers.length < 2) {
        return 0; 
    }

    let currentPen;
    if (numbers[0] % 2 !== 0) {
        currentPen = "green"; 
    } else {
        currentPen = "red"; 
    }

    let switches = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) { 
            if (currentPen === "red") { 
                switches++;
                currentPen = "green";
            }
        } else {
            if (currentPen === "green") {
                switches++;
                currentPen = "red";
            }
        }
    }

    return switches;
}
