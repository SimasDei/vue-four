<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :name="name"
          @nameWasReset="name = $event"
          :resetFunction="resetName"
          :age="age"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Sai",
      age: 28
    };
  },
  methods: {
    changeName() {
      this.name = "Dude Bro";
    },
    resetName() {
      this.name = "Sai";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
