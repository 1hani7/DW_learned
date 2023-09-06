<script>
  import { inject } from 'vue';
import { RouterView } from 'vue-router';
  
  export default{
    setup() {
        const today = inject('today');
        return { today };
    },
    components: { RouterView }
}
</script>

<template>
  <header>
    <hgroup class="my-5">
      <h1>나의 할 일</h1>
      <em>{{ today }}</em>
    </hgroup>
    <RouterView/>
  </header>
</template>

<style scoped>
hgroup{
  text-align:center;
  font-family:'Arial Bold';
}
hgroup h1{
  font-weight:bolder;
}
</style>
