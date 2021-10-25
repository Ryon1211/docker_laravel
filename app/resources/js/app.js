require('./bootstrap');
import Vue from 'vue'
import testComponent from './components/testComponent'

const app = new Vue({
  el: '#app',
  components: {
    testComponent,
  }
})
