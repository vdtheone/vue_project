<template lang="">
<div>
    <h2 v-if="display">Display conditionally</h2>
    <!-- <button @click="displayBoolean = !displayBoolean">Toogle</button><br><br>
    <button @click="count++">Add 1</button> -->
    <!-- <p>Count is: {{ count }}</p> -->
    <br><br><br>
    <p>Has published books:</p>
    <span>{{ togle }}</span><br><br><br>
    <span>{{ display }}</span>
</div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ],
            displayBoolean: true,
            count: 0,
            val: true
        }
    },
    computed: {
        togle() {
            return this.books.length > 0 ? 'yes' : 'no'

        },
        display() {
            if (this.displayBoolean) {
                return true
            } else return false
        }
    },
}
</script>

<style lang="">

</style>
