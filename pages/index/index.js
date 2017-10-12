/*eslint-disable */
const app = getApp();

Page({
    data: {
        userInfo: {}
    },
    onLoad(options) {
        app.getUserInfo().then(userInfo => {
            this.setData({
                userInfo,
            });
        });
    },
    onReady() {

    },
    onShow() {

    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
})