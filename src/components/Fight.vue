<template>
    <div class="fight container-fluid">
        <!-- Titles -->
        <div class="row text-center">
            <div class="col-4">Munchkins</div>
            <div class="col-4 offset-4">Monsters</div>
        </div>

        <!-- +/- controls -->
        <div class="row text-center align-items-center">
            <div class="col-4">
                <div class="btn-group mx-auto">
                    <button type="button" class="btn btn-outline-secondary" v-on:click="fight.reducePlayerStrength()">
                        <font-awesome-icon icon="minus" fixed-width/>
                    </button>
                    <button type="button" class="btn btn-outline-secondary" v-on:click="fight.increasePlayerStrength()">
                        <font-awesome-icon icon="plus" fixed-width/>
                    </button>
                </div>
            </div>
            <div class="col-4 font-weight-bold align-middle">{{ title }}!</div>
            <div class="col-4">
                <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary" v-on:click="fight.reduceMonsterStrength()">
                        <font-awesome-icon icon="minus" fixed-width/>
                    </button>
                    <button type="button" class="btn btn-outline-secondary"
                            v-on:click="fight.increaseMonsterStrength()">
                        <font-awesome-icon icon="plus" fixed-width/>
                    </button>
                </div>
            </div>
        </div>

        <!-- Extra points -->
        <div class="row text-center">
            <div class="col-4">
                Extra: {{ fight.playersExtraStrength }}
            </div>
        </div>

        <!-- Final strength and fight difference -->
        <div class="row text-center align-items-center">
            <div class="col-4"><strong>{{ fight.playerStrength() }}</strong></div>
            <div class="col-4">
                <span v-if="fight.playersAreWinning()">
                    <font-awesome-icon :icon="['far', 'hand-point-left']"/> wins by {{ fight.difference() }}
                </span>
                <span v-else-if="fight.monstersAreWinning()">
                    wins by {{ fight.difference() }} <font-awesome-icon :icon="['far', 'hand-point-right']"/>
                </span>
                <span v-else>
                    tied
                </span>
            </div>
            <div class="col-4"><strong>{{ fight.monsterStrength() }}</strong></div>
        </div>

        <!-- Fight actions -->
        <div class="row actions">
            <div class="col-10 offset-1">
                <button class="btn btn-block btn-danger" v-on:click="endFight">End {{ title }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {FightModel} from "../models";

    export default {
        name: 'Fight',
        props: {
            fight: FightModel
        },
        data: function () {
            return {
                title: this.randomTitle()
            };
        },
        methods: {
            randomTitle() {
                const titles = [
                    'Brawl',
                    'Fracas',
                    'Rumpus',
                    'Skirmish',
                    'Scuffle',
                    'Altercation',
                    'Clash',
                    'Fisticuffs',
                    'Battle',
                    'Fight',
                    'Clash',
                    'Conflict',
                    'Combat',
                    'Quarrel',
                    'Pelea'
                ];
                return titles[Math.floor(Math.random() * titles.length)];
            },
            endFight: function () {
                this.fight.players.forEach(player => player.isFighting = false);
                this.$emit('end-fight');
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row > [class*="col-"] {
        padding-left: 0;
        padding-right: 0;
    }

    .fight {
        margin-top: 15px;
        touch-action: manipulation;
    }

    .actions {
        margin-top: 15px;
    }
</style>
