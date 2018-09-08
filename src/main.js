import Vue from 'vue';
import App from './App.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faFemale,
    faMale,
    faTrashAlt,
    faPlus,
    faMinus,
    faUserPlus,
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import {faHandPointLeft, faHandPointRight, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faFemale,
    faMale,
    faTrashAlt,
    faPlus,
    faMinus,
    faHandPointLeft,
    faHandPointRight,
    faUserPlus,
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
    faPlayCircle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
