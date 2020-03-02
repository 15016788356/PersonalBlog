<template>
    <div class="guestbook">
        <BHeader></BHeader>
        <div class="content">
            <div class="content_left">
                <div class="description">
                    <p>欢迎灌水交流，别看我长时间不发博，博主可一直都在线~</p>
                    <p style="color: red;">友链只交换技术类个人博客。</p>
                    <p style="color: red;">不要皮，谢谢</p>
                </div>
                <div id="blogComment">
                    <ul>
                        
                    </ul>
                    <div class="addComment" id="addComment">
                        <input type="hidden">
                        <input type="text" placeholder="昵称"/>
                        <input type="text" placeholder="邮箱"/>
                        <textarea placeholder="无意义的内容我可能不会回复你"></textarea>
                        <input type="text" placeholder="请在这里输入验证码"><span></span>
                        <button @click="sendComment">提交留言</button>
                    </div>
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
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                        <li><a href="">使用码云git的web实现生产环境代</a></li>
                    </ul>
                </div>
                <div class="right_module">
                    <div>最新评论</div>
                    <ul>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                        <li>
                            <div>
                                <span>萌新</span>
                                <span class="pull_right">这里是时间</span>
                            </div>
                            <p>啊不知道是不是因为带了链接被插件屏蔽</p>
                        </li>
                    </ul>
                </div>
                <div class="right_module">
                    <div>友情链接</div>
                    <span><a href="#">挨踢茶馆</a></span><span><a href="#">挨踢茶馆</a></span>
                    <span><a href="#">挨踢茶馆</a></span><span><a href="#">挨踢茶馆</a></span>
                    <span><a href="#">挨踢茶馆</a></span><span><a href="#">挨踢茶馆</a></span>
                    <span><a href="#">挨踢茶馆</a></span><span><a href="#">挨踢茶馆</a></span>
                    <span><a href="#">挨踢茶馆</a></span><span><a href="#">挨踢茶馆</a></span>

                </div>
            </div>
        </div>
        <BFooter></BFooter>
    </div>
</template>
<script>
import BHeader from '../components/index/header.vue';
import BFooter from '../components/index/footer.vue';
import { mapState } from 'vuex'

export default {
    components: {
        BHeader,
        BFooter
    },
    computed: {
        ...mapState(['randomTags'])
    },
    methods: {
        /**
         * 提交留言
         */
        sendComment(){
            
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
    @import '../less/guestbook.less';
</style>