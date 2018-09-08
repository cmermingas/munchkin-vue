<template>
    <div class="player-input">
        <div class="form-row align-items-center">
            <div class="col-auto" v-if="!isHidden">
                <label for="player_name" class="sr-only">New player name</label>
                <input type="text" class="form-control" id="player_name" placeholder="Add a player" v-model="playerName"
                       v-on:change="addPlayer(playerName)">
            </div>
        </div>
        <div class="text-center">
            <font-awesome-icon
                    :icon="['far', 'play-circle']"
                    fixed-width
                    size="2x"
                    class="text-primary"
                    v-if="!isHidden"
                    v-on:click="toggleHidden"/>
            <font-awesome-icon v-else icon="user-plus" fixed-width v-on:click="toggleHidden"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlayerInput',
        data: function () {
            return {
                playerName: '',
                isHidden: false
            };
        },
        methods: {
            addPlayer: function (playerName) {
                let result = playerName.trim();
                if (result) {
                    this.$emit('add-player', result);
                    this.playerName = '';
                }
            },
            toggleHidden: function () {
                this.isHidden = !this.isHidden;
                this.$emit('is-hidden', this.isHidden);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player-input {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
</style>
