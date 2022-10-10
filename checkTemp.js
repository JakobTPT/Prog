function checkTemp() {
    Temp = 58
    if (Temp < 20 && Temp > 0) {
        console.log(-1)
    }
    else if (Temp < 40 && Temp > 21) {
        console.log(0)
    }
    else if (Temp < 60 && Temp > 41) {
        console.log(1)
    } else {
        console.log("ükski tingimus ei vastanud sisendile")
    }
}

checkTemp();