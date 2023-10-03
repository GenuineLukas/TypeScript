type Team =
  | "Atlanta Braves"
  | "LA Dodgers"
  | "Toronto Blue Jays"
  | "Texas Rangers"
  | "Houston Astros";
type Stemina = number;
type Contact = number;
type Power = number;
type BattingEye = number;
type Hand = number;
type Defense = number;
type Running = number;

interface Player {
  team: Team;
  stemina: Stemina;
  contact: Contact;
  power: Power;
  battingEye: BattingEye;
  hand: Hand;
  defense: Defense;
  running: Running;
  showAvg(): void;
}

const lukas: Player = {
  team: "Atlanta Braves",
  stemina: 100,
  contact: 90,
  power: 90,
  battingEye: 100,
  hand: 80,
  defense: 80,
  running: 123,
  showAvg() {
    console.log(
      (this.stemina +
        this.contact +
        this.power +
        this.battingEye +
        this.hand +
        this.defense +
        this.running) /
        7
    );
  },
};

lukas.showAvg();
