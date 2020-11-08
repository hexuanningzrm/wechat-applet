import { getOpenId } from './index'

// 获取微信用户的当前设置API
export function getSetting(auth, onSuccess, onFail) {
    mpvue.getSetting({
        success(res) {
            /**
             * success      接口调用成功的回调函数
             * fail         接口调用失败的回调函数
             * authSetting  用户授权设置信息
             */
            if (res.authSetting[`scope.${auth}`]) {
                onSuccess(res)
            } else {
                onFail(res)
            }
        },
        fail(res) {
            console.log(res) // 直接抛出异常
        }
    })
}

// 获取微信用户信息API
export function getUserInfo(onSuccess, onFail) {
    mpvue.getUserInfo({
        success(res) {
            const { userInfo } = res
            if (userInfo) {
                onSuccess(userInfo)
            } else {
                onFail(res)
            }
        },
        fail(res) {
            console.log(res) // 直接抛出异常
        }
    })
}

// 设置微信本地存储同步API
export function setStorageSync(key, data) {
    mpvue.setStorageSync(key, data)
}

// 获取微信本地存储同步API
export function getStorageSync(key) {
    return mpvue.getStorageSync(key)
}

// 获取微信用户的openId的API
export function getUserOpenId(callback) {
    mpvue.login({
        success(res) {
            if (res.code) {
                const { code } = res
                getOpenId(code).then(response => {
                    const { data: { data: { openid } } } = response
                    setStorageSync('openId', openid)
                    callback && callback(openid)
                }).catch(err => {
                    console.log(err) // 直接抛出异常
                })
            } else {
                console.log(res) // 直接抛出异常
            }
        },
        fail(res) {
            console.log(res) // 直接抛出异常
        }
    })
}

// 获取显示消息提示框API
export function showToast(title) {
    mpvue.showToast({
        title,
        duration: 2000
    })
}

// 设置动态当前页面的标题API
export function setNavigationBarTitle(title) {
    mpvue.setNavigationBarTitle({ title })
}
