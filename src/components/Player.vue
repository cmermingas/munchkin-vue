<template>
    <div class="player">
        <font-awesome-icon class="text-info" v-bind:icon="player.gender" size="2x" fixed-width v-on:click="toggleGender"/>
        <div class="player-stats">
            <span class="player-name">{{ player.name }}</span>
            <span class="player-strength">{{ player.strength }}</span>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary" v-if="!allowDeleting" v-on:click="reduceStrength(player)">
                <font-awesome-icon icon="minus" fixed-width/>
            </button>
            <button type="button" class="btn btn-outline-secondary" v-if="!allowDeleting" v-on:click="increaseStrength(player)">
                <font-awesome-icon icon="plus" fixed-width/>
            </button>
            <button type="button" class="btn btn-outline-primary" v-bind:class="{active: player.isFighting}" v-if="!allowDeleting" v-on:click="toggleFight()">
                ⚔️
            </button>
            <button type="button" class="btn btn-outline-danger" v-if="allowDeleting" v-on:click="deletePlayer">
                <font-awesome-icon icon="trash-alt" fixed-width/>
            </button>
        </div>
    </div>
</template>

<script>
    import {PlayerModel} from "../models";

    export default {
        name: 'Player',
        props: {
            player: PlayerModel,
            allowDeleting: false
        },
        methods: {
            toggleGender: function () {
                this.player.toggleGender();
            },
            reduceStrength(player) {
                player.reduceStrength();
            },
            increaseStrength(player) {
                player.increaseStrength();
            },
            toggleFight() {
                this.$emit('toggle-fight');
            },
            deletePlayer() {
                this.$emit('delete');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        touch-action: manipulation;
    }
    .player-stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .btn-outline-primary:hover, .btn-outline-primary:focus {
        background-color: transparent;
    }
</style>
