<template>
    <div class="editor">
        <h1>文章编辑</h1>
        <div>
            <h4>标题：</h4>
            <input type="text" placeholder="请输入标题" v-model="title">
        </div>
        <div>
            <h4>标签：</h4>
            <input type="text" placeholder="请输入标签，用逗号隔开" v-model="tag">
        </div>
        <quillEditor
            v-model="content" 
            ref="quillEditor"
            :options="editorOptions"
        ></quillEditor>
        <div>
            <button @click="handleSubmit" class="btn">提交</button>
        </div>
    </div>
    
</template>
<script>
import {quillEditor} from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { setBlog } from '../api/index.js'
var { removeHTMLTag, escape2Html } = require('../../util/removeHTMLTag.js');

export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: '',
            tag: '',
            title: '',
            editorOptions: {}
        }
    },
    methods: {
        handleSubmit(){
            if (this.content) {
                setBlog(this.title, this.tag, removeHTMLTag(this.content)).then(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                })
            }
        }
    },
}
</script>
<style lang="less">
    @import '../less/editor.less';
</style>