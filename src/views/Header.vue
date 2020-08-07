<template>
    <div class="navbar navbar-light">
        <div class="container">
            <router-link
                :to="{name: 'Home'}"

            >
                Conduit
            </router-link>
            <router-link
                :to="{name: 'Home'}"
            >
                Home
            </router-link>
            <router-link
                :to="{name: 'Login'}"
            >
                Login
            </router-link>
            <router-link
                :to="{name: 'Signup'}"
            >
                Signup
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>