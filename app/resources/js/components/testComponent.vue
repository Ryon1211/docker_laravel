<template>
  <div>
    <p>{{test}}</p>
    <button v-on:click="testMethods()">change</button>
    <p>{{propArg}}</p>
    <p>{{id}}</p>
    <p>{{title}}</p>
    <p>{{delectus}}</p>
    <p>{{completed}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'testtest',
      id: '',
      title: '',
      delectus: '',
      completed: '',
    }
  },
  props: ['propArg'],

  methods: {
    testMethods(){
      this.test = 'change test txt!'
    },

    async getJson() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
      this.id = await response.data.id;
      this.title = await response.data.title;
      this.delectus = await response.data.delectus;
      this.completed = await response.data.completed;
    }
  },
  mounted() {
    console.log(this.propArg);
    this.getJson();
  },
}
</script>
