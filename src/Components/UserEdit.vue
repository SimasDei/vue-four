<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{age}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: ["age"],
  methods: {
    editAge() {
      this.age = 30;
      eventBus.$emit("ageWasEdited", this.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
