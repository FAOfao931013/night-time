/*eslint-disable */
const app = getApp();

Page({
    data: {
        imgSrc: '../../img/',
    },
    openBg() {
        const backgroundAudioManager = wx.getBackgroundAudioManager();
        this.backgroundAudioManager = backgroundAudioManager;
        backgroundAudioManager.title = '安静的午后';
        backgroundAudioManager.epname = 'Pianoboy';
        backgroundAudioManager.singer = 'Pianoboy';
        backgroundAudioManager.coverImgUrl = '';
        backgroundAudioManager.src = '';

    },
    stopBg() {
        this.backgroundAudioManager.stop();
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
        // this.openBg();
    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
})