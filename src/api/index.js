var axios = require('axios');


/**
 * 编辑每日一句
 * @param {*} content 编辑内容
 */
export const setEveryDay = function (content){
    return axios.post('/api/editorEveryDay', {
        params: {
            content
        }
    })
}
/**
 * 获取每日一句
 */
export const getEveryDay = function () {
    return axios.get('/api/queryEveryDay');
}


/**
 * 编辑博客
 * @param {*} content 
 */
export const setBlog = function (title, tags, content){
    return axios.get('/api/editorBlog?title='+ title +'&tags='+ tags +'&content='+ content);
}

/**
 * 分页
 */
export const blogByPage = function (page, pageSize){
    return axios.get('/api/queryByPage?page='+page+'&pageSize='+pageSize);
}

/**
 * 获取总数
 */
export const getBlogCount = function (){
    return axios.get('/api/queryBlogCount');
}

/**
 * 获取文章详情
 */
export const getBlogDetail = function(id){
    return axios.get('/api/queryBlogById?id=' + id);
}

export const addComment = function(id, reply, name, email, content, parentName){
    return axios.get(`/api/addComment?bid=${id}&parent=${reply}&userName=${name}&email=${email}&content=${content}&reply_name=${parentName}`);
}

/**
 * 获取随机验证码
 */
export const getRandomCode = function (){
    return axios.get('/api/queryRandomCode');
}

export const getComments = function (id){
    return axios.get(`/api/queryCommentsByBlogId?bid=${id}`)
}


export const getCount = function(id){
    return axios.get('/api/queryCommentsCountByBlogId?bid=' + id);
}

/**
 * 获取所有文章
 */
export const getBlogAll = function (){
    return axios.get('/api/queryAllBog');
}

/**
 * 获取标签
 */
export const getTags = function (){
    return axios.get('/api/queryRandomTags');
}


/**
 * 获取热门博客
 * @param {*} size 
 */
export const getHotBlog = function(size){
    return axios.get('/api/queryHotBlog?size='+ size);
}


/**
 * 获取最新评论
 */
export const getNewComments = function (){
    return axios.get('/api/queryNewComments');
}
