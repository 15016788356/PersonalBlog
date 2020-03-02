<template>
    <div class="editor">
        <h1>每日一句编辑</h1>
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
import { setEveryDay } from '../api/index.js';
export default {
    
    components: {
        quillEditor
    },
    data() {
        return {
            content: '\<a\>\</a\>',
            tag: '',
            title: '',
            editorOptions: {}
        }
    },
    methods: {
        handleSubmit(){
            setEveryDay(this.content).then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            })
        }
    },
}
</script>
<style lang="less">
 @import '../less/editor.less';   
</style>