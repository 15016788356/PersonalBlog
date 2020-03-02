<template>
    <div class="content">
        <div class="content_left">
            <div class="every_day">
                <span>每日一句</span>
                <p>{{getContent}}</p>
            </div>
            <div class="article_list">
                <div class="article" v-for="(item, index) in article_list" :key="index">
                    <!-- <a :href="item.link" class="article_title">
                        {{ item.title }}
                    </a> -->
                    <router-link :to="'/blogDetail/' + item.link" class="article_title">
                        {{ item.title }}
                    </router-link>
                    <p class="article_content">
                        {{ item.content }}
                    </p>
                    <div class="article_foot">发布于{{ item.date }} |  浏览({{item.views}}) | Tags：{{item.tags}}</div>
                </div>
            </div>
            <div class="page_tool">
                    <ul>
                        <li v-for="(pageNum, index) in pageNumList" :key="index"
                         v-bind:class="{now_page: (pageNum.text == page)}"
                         @click="jumpTo(pageNum.text)">{{pageNum.text}}</li>
                    </ul>
                </div>
        </div>
        <div class="content_right">
            <div class="right_module">
                <div>随机标签云</div>
                <a href="" v-for="(item, index) in randomTags" :key="index" :style="{color: randomColor(), fontSize: randomSize()}">{{item.tag}}</a>
            </div>
            <div class="right_module">
                <div>最近热门</div>
                <ul>
                    <li v-for="(item, index) in titleList" :key="index">
                        <router-link :to="'/blogDetail/'+ item.link">{{item.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="right_module">
                <div>最新评论</div>
                <ul>
                    <li v-for="(item, index) in commentList" :key="index">
                        <div>
                            <span>{{item.name}}</span>
                            <span class="pull_right">{{item.date}}</span>
                        </div>
                        <p>{{item.comment}}</p>
                    </li>
                </ul>
            </div>
            <div class="right_module">
                <div>友情链接</div>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
                <span><a href="">挨踢茶馆</a></span>
            </div>
        </div>
    </div>
</template>
<script>
import { getEveryDay, blogByPage, getBlogCount, getHotBlog, getNewComments } from '../api/index.js';
import { mapState } from 'vuex'
export default {
    data(){
        return {
            page: 1,
            pageSize: 5,
            count: 100,
            pageNumList: [],
            content: '--------is努力的是你比我还 报',//每日一句
            article_list: [
                {
                    title: 'Laravel5.4安装passport时遇到的一些问题',
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport 
                        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示
                    “There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...`,
                    date: '2018-12-11',
                    views: '101',
                    tags: "test1 test2",
                    id: 1,
                    link: ''
                },
                {
                    title: 'Laravel5.4安装passport时遇到的一些问题',
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport 
                        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示
                    “There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...`,
                    date: '2018-12-11',
                    views: '101',
                    tags: "test1 test2",
                    id: 1,
                    link: ''
                },
                {
                    title: 'Laravel5.4安装passport时遇到的一些问题',
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport 
                        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示
                    “There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...`,
                    date: '2018-12-11',
                    views: '101',
                    tags: "test1 test2",
                    id: 1,
                    link: ''
                },
                {
                    title: 'Laravel5.4安装passport时遇到的一些问题',
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport 
                        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示
                    “There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...`,
                    date: '2018-12-11',
                    views: '101',
                    tags: "test1 test2",
                    id: 1,
                    link: ''
                },
                {
                    title: 'Laravel5.4安装passport时遇到的一些问题',
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport 
                        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示
                    “There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...`,
                    date: '2018-12-11',
                    views: '101',
                    tags: "test1 test2",
                    id: 1,
                    link: ''
                },
                
            ],//文章列表
            // randomTags: ['Vuejs', 'NodeJs', 'Webpack', 'jQuery', 'JavaScript', 'HTML5', 'CSS3', 'ES6', 'WebGL'],//随机云标签
            titleList: [
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: 'https://github.com/gouqie722/PersonalBlog'
                },
            ],
            commentList: [
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                {
                    name: '这里是用户名',
                    date: '这里是时间',
                    comment: "交换下友连吧ivenluck.c"
                },
                
            ]
        }
    },
    computed: {
        ...mapState(['randomTags']),
        getContent(){
            return this.content;
        },
        getPage(){
            return function (page, pageSize){
                blogByPage(page - 1, pageSize).then(res => {
                    // console.log(res);
                    var list = [];
                    var result = res.data.data;
                    for (let i = 0; i < result.length; i++) {
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].ctime;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = result[i].id + '';
                        list.push(temp);
                    }
                    this.page = page;
                    this.article_list = list;
                }, err => {
                    console.log(err);
                })
                getBlogCount().then(res => {
                    console.log(res.data.data[0]['count(1)']);
                    this.count = res.data.data[0]['count(1)'];
                    this.geteratePageTool;
                }, err => {
                    console.log(err);
                })
            }
        },
        geteratePageTool(){
            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalCount = this.count;
            var result = [];
            result.push({text: "<", page: 1});
            if (nowPage > 2) {
                result.push({text: nowPage - 2, page: nowPage - 2});
            }
            if (nowPage > 1) {
                result.push({text: nowPage - 1, page: nowPage - 1});
            }
            result.push({text: nowPage, page: nowPage});
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text: nowPage + 1, page: nowPage + 1});
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text: nowPage + 2, page: nowPage + 2});
            }
            result.push({text: ">", page: parseInt((totalCount + pageSize - 1) / pageSize)})
            this.pageNumList = result;
            return result;
        },
    },
    created() {
        //请求数据给content赋值
        getEveryDay().then(res => {
            // console.log(res);
            this.content = res.data.data[0].content;
        }, err => {
            console.log(err);
        })
        this.getPage(this.page, this.pageSize);

    },
    methods: {
        jumpTo(page){
            this.getPage(page, this.pageSize)
        },
        randomColor(){
            var red = Math.random() * 255;
            var green = Math.random() * 255;
            var blue = Math.random() * 255;
            return `rgb(${red}, ${green}, ${blue})`;
        },
        randomSize(){
            var size = Math.random() * 20 + 12 + "px";
            return size; 
        }
    },
    mounted() {
        getHotBlog(5).then(res => {
            var result = [];
            for (let i = 0; i < res.data.data.length; i++) {
                var temp = {};
                temp.title = res.data.data[i].title;
                temp.link = res.data.data[i].id;
                result.push(temp);
            }   
            this.titleList = result;
        }, err => {
            console.log(err);
        })
        getNewComments().then(res => {
            console.log(res);
            var result = [];
            for (let i = 0; i < res.data.data.length; i++) {
                var temp = {};
                temp.name = res.data.data[i].user_name;
                temp.date = res.data.data[i].ctime;
                temp.comment = res.data.data[i].comments;
                result.push(temp);
            }
            this.commentList = result;
        }, err => {
            console.log(err);
        })
    },
}
</script>
<style lang="less">
.every_day {
    background-color: #fff;
    text-align: left;
    border-radius: 5px;
    box-shadow: 3px 4px 3px #888;
    padding: 10px 15px;
    &::before{
        font-family: 'MyIcon';
        content: '\e112';
        font-size: 12px;
        color: cadetblue;
        position: relative;
        display: block;
        height: 0;
        left: 54px;
    }
    span{
        display: block;
        font-size: 12px;
        margin-bottom: 5px;
        color: cadetblue;
    }
}
.article_list {
    width: 100%;
    border-radius: 5px;
    margin-top: 15px;
    .article {
        background-color: #fff;
        display: inline-block;
        width: 100%;
        border-radius: 5px;
        box-shadow: 1px 2px 2px #888;
        overflow: hidden;
        text-align: left;
        margin-top: 15px;
        .article_title {
            display: inline-block;
            font-size: 20px;
            color: #13102d;
            padding: 20px 10px 5px 10px;
            text-align: left;
            cursor: pointer;
        }

        .article_title:hover {
            color: #337ab7;
        }

        .article_content {
            font-size: 14px;
            color: #13102b;
            padding: 0 10px 20px 10px;
            text-align: left;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }

        .article_foot {
            color: #888;
            background-color: #1f1f1f;
            width: 100%;
            padding: 5px 10px;
            font-size: 14px;
        }
    }
    
}
.page_tool{
    margin-top: 20px;
    display: inline-block;

    ul {
        li {
            display: inline-block;
            width: 40px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #292929;
            color: #fff;
            border-radius: 15%;
            cursor: pointer;
            &:hover{
                background-color: #777777;
                color: #eee;
            }
        }
        .now_page{
            background-color: #337ab7;
        }
    }
}

.right_module {
    display: inline-block;
    width: 100%;
    background-color: #1f1f1f;
    color: #ffff;
    border-radius: 10px;
    text-align: left;
    padding: 0 15px 25px 15px;
    margin-bottom: 20px;
    div{
        text-align: left;
        font-size: 14px;
        padding: 15px 5px 15px 0;
        color: dodgerblue;
    }
    >a {
        display: inline-block;
        font-size: 14px;
        color: dodgerblue;
        margin: 2px  5px 2px 2px;
    }
    ul {
        li {
            color: #fff;
            padding: 8px 0;
            border-bottom: 1px solid #292929;
            a {
                font-size: 14px;
                color: #fff;
            }
            div{
                padding: 5px 0;
                span{
                    font-size: 14px;
                    color: #fff;
                }
                .pull_right{
                    position: absolute;
                    right: 15px;
                }
            }
            p {
                font-size: 14px;
                color: #777777;
                height: 20px;
                line-height: 20px;
            }
        }
    }
    >span{
        display: inline-block;
        width: 50%;
        height: 30px;
        margin-top: 10px;
        a{
            color: #fff;
            font-size: 14px;
            line-height: 30px;
        }
    }
}


</style>