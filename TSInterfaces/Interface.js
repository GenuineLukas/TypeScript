var lukas = {
    team: "Atlanta Braves",
    stemina: 100,
    contact: 90,
    power: 90,
    battingEye: 100,
    hand: 80,
    defense: 80,
    running: 123,
    showAvg: function () {
        console.log((this.stemina +
            this.contact +
            this.power +
            this.battingEye +
            this.hand +
            this.defense +
            this.running) /
            7);
    },
};
lukas.showAvg();
