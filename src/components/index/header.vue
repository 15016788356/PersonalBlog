<template>
    <div class="header">
        <div class="container">
            <a class="title">我的个人博客 | 技术博客</a>
            <ul class="menu">
                <router-link tag="li" to="/index">首页</router-link>
                <router-link tag="li" to="/sitemap">地图</router-link>
                <router-link tag="li" to="/about">关于</router-link>
                <router-link tag="li" to="/guestbook">留言</router-link>
            </ul>
            <div class="search_bar">
                <input type="text" placeholder="输入关键词查找">
                <button>查找</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    
</style>