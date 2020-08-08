<template>
  <div>
    <form @submit.prevent="submit">
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
import { mapState } from "vuex";
import { LOGIN } from "../store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push({ name: "Home" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
