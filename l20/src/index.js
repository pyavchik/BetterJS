class Team  {
    constructor(name){
        this.name = name
    }

    celebrate() {
        console.log("Let's dance!");
    }
}

class HockeyTeam extends Team {
    constructor(name) {
        super(name);
        this.type = "Hockey"
    }

    scoreGoal() {
        console.log('he shoots, he scores');
    }
}

class FootballTeam extends Team {

    constructor(name) {
        super(name);
        this.type = "Football"
    }

    touchdown() {
        console.log('Go for two');
    }
}

const wings = new HockeyTeam("wings");
wings.scoreGoal();
wings.celebrate();

const lions = new FootballTeam("lions");
lions.touchdown();
lions.celebrate()

console.log(wings);

