<template>
    <div>

        8485448545
    </div>
</template>
<script>
export default {
    mounted(){
        this.$store.state.isHeaderShow = false;
    },
    destroyed(){
        this.$store.state.isHeaderShow = true;
    }
}
</script>
<style lang="scss" scoped>

</style>
