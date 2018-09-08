<template>
    <div id="app" class="container">
        <div class="top-input-area">
            <Dice v-if="playerInputIsHidden"/>
            <PlayerInput v-on:add-player="addPlayer" v-on:is-hidden="handleToggleInput($event)"/>
        </div>
        <Players
                v-bind:players="players"
                v-bind:allow-deleting="!playerInputIsHidden"
                v-on:player-toggle-fight="playerToggleFight"
                v-on:player-deleted="handlePlayerDeleted($event)"
        />
        <div class="text-center" v-if="players.length === 0">
            Such emptiness...
            <br>
            <font-awesome-icon :icon="['far', 'hand-point-right']" :transform="{ rotate: -110 }" v-if="!playerInputIsHidden"/>
            Add a few players
            <font-awesome-icon :icon="['far', 'hand-point-right']" :transform="{ rotate: -40 }" v-if="playerInputIsHidden"/>
            <br>
            Let the Munchinry begin
        </div>
        <Fight v-if="this.fight && playerInputIsHidden" v-bind:fight="fight" v-on:end-fight="fight=null"/>
    </div>
</template>

<script>
    import {PlayerModel, FightModel} from './models';
    import PlayerInput from './components/PlayerInput.vue';
    import Players from './components/Players';
    import Fight from './components/Fight';
    import Dice from './components/Dice';

    export default {
        name: 'app',
        components: {
            PlayerInput,
            Players,
            Fight,
            Dice
        },
        data: function () {
            return {
                players: [],
                fight: null,
                playerInputIsHidden: false
            };
        },
        methods: {
            addPlayer: function (playerName) {
                const maxPlayerId = Math.max(0, ...this.players.map(player => player.id));
                this.players.push(new PlayerModel(maxPlayerId + 1, playerName));
            },
            playerToggleFight: function (player) {
                player.isFighting = !player.isFighting;
                if (player.isFighting) {
                    this.fight = this.fight || new FightModel();
                    this.fight.addPlayer(player);
                }
                else if (this.fight) {
                    this.fight.removePlayer(player);
                    this.fight = this.fight.isEmpty() ? null : this.fight;
                }
            },
            handleToggleInput(isHidden) {
                this.playerInputIsHidden = isHidden;
            },
            handlePlayerDeleted(player) {
                if (this.fight) {
                    this.fight.removePlayer(player);
                }
            }
        }
    }
</script>

<style>
    #app {
        padding-bottom: 15px;
    }
    .top-input-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
