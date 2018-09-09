<template>
    <div>
        <Player class="player"
                v-for="player in players"
                v-bind:player="player"
                v-bind:allow-deleting="allowDeleting"
                v-bind:key="player.id"
                v-on:toggle-fight="playerToggleFight(player.id)"
                v-on:delete="deletePlayer(player.id)"/>
    </div>
</template>

<script>
    import Player from './Player';

    export default {
        name: 'Players',
        components: {Player},
        props: {
            players: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            allowDeleting: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            getPlayerIndex: function (playerId) {
                return this.players.findIndex(item => item.id === playerId);
            },
            playerToggleFight: function (playerId) {
                const playerIndex = this.getPlayerIndex(playerId);
                this.$emit('player-toggle-fight', this.players[playerIndex]);
            },
            deletePlayer: function (playerId) {
                const playerIndex = this.getPlayerIndex(playerId);
                const player = this.players[playerIndex];
                if (window.confirm(`Delete ${player.name}?`)) {
                    this.players.splice(playerIndex, 1);
                    this.$emit('player-deleted', player);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player {
        border-top: gray dotted 1px;
    }
    .player:last-of-type {
        border-bottom: gray dotted 1px;
    }
</style>
