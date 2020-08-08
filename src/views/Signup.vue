<template>
  <div>
    <form @submit="signup">
      <fieldset>
        <input type="text" v-model="username" placeholder="Name" />
      </fieldset>
      <fieldset>
        <input type="text" v-model="email" placeholder="Email" />
      </fieldset>
      <fieldset>
        <input type="password" v-model="password" placeholder="Password" />
      </fieldset>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { SIGNUP } from "../store/actions.type";

export default {
  data: function() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch(SIGNUP, {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push({ name: "Home" }));
    }
  }
};
</script>
