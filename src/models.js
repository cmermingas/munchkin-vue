export class PlayerModel {
    constructor(
        id,
        name,
    ) {
        this.id = id;
        this.name = name;
        this.gender = 'female';
        this.strength = 1;
        this.isFighting = false;
    }

    toggleGender() {
        this.gender = this.gender === 'female' ? 'male' : 'female';
    }

    reduceStrength() {
        this.strength = Math.max(1, this.strength - 1);
    }

    increaseStrength() {
        this.strength += 1;
    }
}

export class FightModel {
    constructor() {
        this.players = [];
        this.playersExtraStrength = 0;
        this._monsterStrength = 1;
    }

    getPlayerIndex(player) {
        return this.players.findIndex(item => item.id === player.id);
    }

    addPlayer(player) {
        const playerIndex = this.getPlayerIndex(player);
        if (playerIndex === -1) {
            this.players.push(player);
        }
    }

    removePlayer(player) {
        const playerIndex = this.getPlayerIndex(player);
        if (playerIndex > -1) {
            this.players.splice(playerIndex, 1);
        }
    }

    isEmpty() {
        return this.players.length === 0;
    }

    playerStrength() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue.strength;
        return this.players.reduce(reducer, 0) + this.playersExtraStrength;
    }

    monsterStrength() {
        return this._monsterStrength;
    }

    difference() {
        return Math.abs(this.playerStrength() - this.monsterStrength());
    }

    reducePlayerStrength() {
        this.playersExtraStrength -= 1;
    }

    increasePlayerStrength() {
        this.playersExtraStrength += 1;
    }

    reduceMonsterStrength() {
        this._monsterStrength -= 1;
    }

    increaseMonsterStrength() {
        this._monsterStrength += 1;
    }

    playersAreWinning() {
        return this.playerStrength() > this.monsterStrength();
    }

    monstersAreWinning() {
        return this.playerStrength() < this.monsterStrength();
    }
}