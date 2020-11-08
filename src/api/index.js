import { get, post } from '../utils/request'
import { APP_ID, APP_SECRET } from '../utils/const'

// 封装API_URL地址
const API_URL = 'https://test.youbaobao.xyz:18081'

// 获取微信用户的openIdAPI
export function getOpenId(code) {
    return get(`${API_URL}/openId/get`, {
        // 小程序ID
        appId: APP_ID,
        // 小程序密钥
        secret: APP_SECRET,
        // 微信登录wx.login后获得的code
        code
    })
}

// 获取微信用户注册API
export function register(openId, userInfo) {
    return post(`${API_URL}/user/register`, {
        // 用户的openId
        openId,
        // 用户所属平台，默认wx
        platform: mpvuePlatform,
        // 用户的信息
        ...userInfo
    })
}

// 获取首页API
export function getHomeData(params) {
    return get(`${API_URL}/book/home/v2?`, params)
}


// 获取首页图书热门推荐API
export function recommend() {
    return get(`${API_URL}/book/home/recommend/v2?`)
}

// 获取首页图书免费阅读API
export function freeRead() {
    return get(`${API_URL}/book/home/freeRead/v2?`)
}

// 获取搜索关键词API
export function search(params) {
    return get(`${API_URL}/book/search`, params)
}

// 获取热门搜索词API
export function hotSearch() {
    return get(`${API_URL}/book/hot-search`)
}

// 获取图书详情API
export function bookDetail(params) {
    return get(`${API_URL}/book/detail`, params)
}

// 获取图书详情评分API
export function bookRanSave(params) {
    return get(`${API_URL}/book/rank/save`, params)
}

// 获取图书详情目录API
export function bookContents(params) {
    return get(`${API_URL}/book/contents`, params)
}

// 获取图书详情书架状态API
export function bookIsInShelf(params) {
    return get(`${API_URL}/book/shelf/get`, params)
}

// 获取图书详情加入书架API
export function bookShelfSave(params) {
    return get(`${API_URL}/book/shelf/save`, {
        shelf: JSON.stringify(params)
    })
}

// 获取图书详情移出书架API
export function bookShelfRemove(params) {
    return get(`${API_URL}/book/shelf/remove`, {
        shelf: JSON.stringify(params)
    })
}

// 获取图书列表API
export function searchList(params) {
    return get(`${API_URL}/book/search-list`, params)
}

// 获取图书分类API
export function categoryList() {
    return get(`${API_URL}/book/category/list/v2`)
}

// 获取书架读书天数API
export function userDay(params) {
    return get(`${API_URL}/user/day`, params)
}
