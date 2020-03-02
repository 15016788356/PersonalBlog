<template>
    <div>
        <BHeader></BHeader>
        <Content></Content>
        <BFooter></BFooter>
    </div>
</template>
<script>
import BHeader from '../components/index/header.vue';
import Content from '../components/content.vue';
import BFooter from '../components/index/footer.vue';
export default {
    components: {
        BHeader,
        Content,
        BFooter
    }
}
</script>
<style lang="less">

</style>