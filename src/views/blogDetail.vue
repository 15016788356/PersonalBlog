<template>
    <div class="blogDetail">
        <BHeader></BHeader>
        <div class="detail">
            <div class="content_left">
                <div class="blog">
                    <div class="blog_title">{{title}}</div>
                    <div class="blog_msg">作者：panda 标签：{{tags}} 发布于：{{ctime}} 浏览：{{views}}</div>
                    <div class="blog_content" v-html="content"></div>
                </div>

                <div class="blog_comments">
                    <span class="blog_comments_msg">当前文章：目前有{{bookLength}} 条留言</span>
                    <div class="blog_comment" v-for="(item, index) in bookList" :key="index">
                        <span>
                            <b>{{item.user_name}}</b>：{{item.option}}发表于 {{item.ctime}}
                            <a @click="replyTo(item.id, item.user_name)" href="#send_comments" style="cursor: pointer; color: #31708f;">[回复]</a>
                        </span>
                        <div>{{item.comments}}</div>
                    </div>
                </div>
                <div class="send_comments" id="send_comments">
                    <span>发表评论</span>
                    <div>
                        <input type="hidden" v-model="reply">
                        <input type="hidden" v-model="reply_name">
                        <input type="text" placeholder="昵称" v-model="name">
                        <input type="text" placeholder="邮箱(评论被回复时你能收到通知)" v-model="email">
                    </div>
                    <div>
                        <textarea placeholder="无意义的内容我可能不会回复你" v-model="comments"></textarea>
                    </div>
                    <div>
                        <input type="text" placeholder="验证码" v-model="code">
                        <span v-html="vcode" @click="replace" class="random"></span>
                    </div>
                    <button @click="sendComment">提交评论</button>
                    <button>重写</button>
                </div>
            </div>
            <div class="content_right">
                <div class="right_module">
                    <div>随机标签云</div>
                    <a href="" v-for="(item, index) in randomTags" :key="index" :style="{color: randomColor(), fontSize: randomSize()}">{{item}}</a>
                </div>
                <div class="right_module">
                    <div>最近热门</div>
                    <ul>
                        <li v-for="(item, index) in titleList" :key="index">
                            <a :href="item.link">{{item.title}}</a>
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
        <BFooter></BFooter>
    </div>
</template>
<script>
// https://wechat-miniprogram.github.io/kbone/docs/guide/quickstart.html
// npm install vue-threejs
import BHeader from '../components/index/header.vue';
import BFooter from '../components/index/footer.vue';
import { getBlogDetail, addComment, getRandomCode, getComments, getCount } from '../api/index.js';
export default {
    components: {
        BHeader,
        BFooter
    },
    data() {
        return {
            total: 100,
            bookLength: '0',
            bookList: [
                {
                    id: '1',
                    user_name: '2',
                    ctime: '3',
                    comments: '4',
                    option: ''
                }
            ],
            title: '',
            content: '',
            views: '',
            tags: '',
            ctime: '',
            reply_name: '0',
            randomTags: ['Vuejs', 'NodeJs', 'Webpack', 'jQuery', 'JavaScript', 'HTML5', 'CSS3', 'ES6', 'WebGL'],//随机云标签
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
                
            ],
            reply: '-1',
            name: '',
            email: '',
            comments: '',
            code: '',
            vcode: '',
            rightCode: ''
        }
    },
    mounted(){
        getBlogDetail(parseInt(this.$route.params.id)).then(res => {
            var result = res.data.data[0];
            this.title = result.title;
            this.content = result.content;
            this.views = result.views;
            this.tags = result.tags;
            this.ctime = result.ctime;
        }, err => {
            console.log(err);
        });
        this.replace();
        this.init();
    },
    methods: {
        init(){
            getComments(parseInt(this.$route.params.id)).then(res => {
                // console.log(res);
                this.bookList = res.data.data;
                for (let i = 0; i < this.bookList.length; i++) {
                    if (this.bookList[i].parent > -1) {
                        this.bookList[i].options = '回复@' + this.bookList[i].parent_name;
                    }                   
                }
            }, err => {
                console.log(err);
            })
            getCount(this.$route.params.id).then(res => {
                // console.log(res);
                this.bookLength = res.data.data[0].count;
            }, err => {
                console.log(err);
            })
        },
        /**
         * 回复评论
         */
        replyTo(id, user_name){

        },
        replace(){
            getRandomCode().then(res => {
                this.vcode = res.data.data.data;
                this.rightCode = res.data.data.text;
            }, err => {
                console.log(err);
            })
        },
        sendComment(){
            if (this.code != this.rightCode) {
                alert('验证码错误');
                return;
            }
            addComment(this.$route.params.id, this.reply, this.name, this.email, this.comments, this.reply_name).then(res => {
                console.log(res);
                this.init();
            }, err => {
                console.log(err);
            })
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
    }
}
</script>
<style lang="less">
.detail{
    overflow: hidden;
    .content_left {
        float: left;
        width: 66%;
        padding: 0 20px 0 0;
        box-sizing: border-box;
        .blog{
            background-color: #fff;
            width: 96%;
            border-radius: 5px;
            padding: 10px 15px;
            box-shadow: 3px 4px 3px #888;
            text-align: left;
            .blog_title{
                font-size: 24px;
                font-weight: bold;
            }
            .blog_msg{
                padding: 10px 0 20px;
                border-bottom: 1px solid #666;
                margin-bottom: 20px;
            }
            .blog_content{
                padding: 0 5px 20px 5px;
            }
        }
        .blog_comments {
            width: 100%;
            .blog_comments_msg {
                margin-top: 20px;
                padding: 10px;
                display: inline-block;
                width: 100%;
                text-align: left;
            }    
            .blog_comment {
                width: 95%;
                background-color: #d9edf7;
                border: 1px dashed #7ca4c1;
                padding: 10px 10px 20px 10px;
                color: #31708f;
                margin-top: 10px;
                text-align: left;
                span {
                    display: inline-block;
                    width: 100%;
                    padding-left: 10px;
                }
                div {
                    display: inline-block;
                    width: 100%;
                    padding-left: 10px;
                    margin-top: 10px;
                }
            }

        }
        .send_comments{
            background-color: #f5f5f5;
            width: 96%;
            border-radius: 5px;
            padding: 10px 15px;
            box-shadow: 3px 4px 3px #888;
            text-align: left;
            margin-top: 50px;
            input {
                width: 300px;
                height: 34px;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding-left: 5px;
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 14px;
            }
            textarea {
                width: 90%;
                height: 100px;
                border: 1px  solid #ccc;
                padding: 5px;
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 14px;
                border-radius: 5px;
            }
            button {
                width: 100px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin: 10px 0;
                font-size: 14px;
                outline: none;
                &:hover{
                    background-color: #adadaa;
                }
            }
            .random {
                cursor: pointer;
            }
        }
    }
    .content_right {
        float: right;
        width: 34%;
        padding: 0;
        margin-top: 20px;
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