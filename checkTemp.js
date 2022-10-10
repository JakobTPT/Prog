function checkTemp(Temp) {
    if (Temp < 20 && Temp > 0) {
        return -1
    }
    else if (Temp < 40 && Temp > 20) {
        return 0
    }
    else if (Temp < 60 && Temp > 40) {
        return 1
    }
}
