/*eslint-disable */
const app = getApp();

Page({
    data: {
        imgSrc: '../../img/',
    },
    setChapter() {
        app.setChapterStorage('third', true);
        app.reLaunch('/pages/index/index');
    },
    onLoad(options) {

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