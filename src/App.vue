<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <component :is="selectedComponent"></component>
        <!-- <app-quote>
          <h2 slot="title">Quote Heading</h2>
          <p slot="content">Quote Text</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import appQuote from "./Components/Quote.vue";
import appAuthor from "./Components/Author";
import appNew from "./Components/New";
export default {
  data: function() {
    return {
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote,
    appAuthor,
    appNew
  }
};
</script>

<style>
</style>
