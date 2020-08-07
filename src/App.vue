<template>
    <div>
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './views/Header'
import Footer from './views/Footer'

export default {
    data: function() {
        return {
            message: "Hello world!"
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>