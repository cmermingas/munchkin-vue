<template>
    <div>
        <font-awesome-icon v-bind:icon="icons[value]" size="2x" fixed-width v-on:click="roll(10)"/>
    </div>
</template>

<script>
    export default {
        name: 'Dice',
        data: function () {
            return {
                value: 5,
                icons: ['dice-one', 'dice-two', 'dice-three', 'dice-four', 'dice-five', 'dice-six']
            };
        },
        methods: {
            roll: function (iterations) {
                if (iterations > 0) {
                    const capturedThis = this;
                    setTimeout(function () {
                            requestAnimationFrame(function () {
                                capturedThis.value = Math.floor(Math.random() * 6);
                                capturedThis.roll(iterations - 1)
                            });
                        }, 50
                    );
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
