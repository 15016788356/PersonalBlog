<template>
    <div class="sitemap">
        <div class="title">个人博客/s Sitemap</div>
        <div class="link"><a href=""><b>博客首页</b></a> >> 站点地图</div>
        <div class="blog_list">
            <span>最新文章</span>
            <ul>
                <li v-for="(item, index) in blogList" :key="index"><router-link :to="item.link">{{item.title}}</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { getBlogAll } from '../api/index.js';
export default {
    data() {
        return {
            blogList: []
        }
    },
    mounted() {
        getBlogAll().then(res => {
            console.log(res);
            for (let i = 0; i < res.data.data.length; i++) {
                res.data.data[i].link = '/blogDetail/' + res.data.data[i].id;                
            }
            this.blogList = res.data.data;
        }, err => {
            console.log(err);
        })
    },
}
</script>
<style lang="less">
    @import '../less/sitemap.less';
</style>