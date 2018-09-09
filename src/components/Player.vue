<template>
    <div class="row align-items-center">
        <div class="col-5 text-truncate">
                <font-awesome-icon
                        class="text-info"
                        size="2x"
                        v-bind:icon="player.gender"
                        fixed-width
                        v-on:click="toggleGender"/>
                {{ player.name }}
        </div>
        <div class="col-2 text-center">{{ player.strength }}</div>
        <div class="col-5 text-right actions">
            <div class="btn-group">
                <button type="button" class="btn btn-outline-secondary" v-if="!allowDeleting"
                        v-on:click="reduceStrength(player)">
                    <font-awesome-icon icon="minus" fixed-width/>
                </button>
                <button type="button" class="btn btn-outline-secondary" v-if="!allowDeleting"
                        v-on:click="increaseStrength(player)">
                    <font-awesome-icon icon="plus" fixed-width/>
                </button>
                <button type="button" class="btn btn-outline-primary" v-bind:class="{active: player.isFighting}"
                        v-if="!allowDeleting" v-on:click="toggleFight()">
                    ⚔️
                </button>
                <button type="button" class="btn btn-outline-danger" v-if="allowDeleting" v-on:click="deletePlayer">
                    <font-awesome-icon icon="trash-alt" fixed-width/>
                </button>
            </div>
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
    .row > [class*="col-"] {
        padding-top: 7px;
        padding-bottom: 7px;
    }

    .btn-outline-primary:hover, .btn-outline-primary:focus {
        background-color: transparent;
    }

    .actions {
        touch-action: manipulation;
    }
</style>
