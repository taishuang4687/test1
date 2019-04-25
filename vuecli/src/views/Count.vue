<template>
    <div>
        <div>此时的值为：{{$store.state.count}}</div>
        <button @click="$store.commit('add')">++</button>
        <button @click="$store.commit('reduce')">--</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>