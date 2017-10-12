/*eslint-disable */
const app = getApp();

Page({
    data: {
        imgSrc: '../../img/',
        userInfo: {},
        animationOne: {},
        animationTwo: {},
        animationThree: {},
        animationFour: {},
    },
    animationOne() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 1000,
        })

        animation.translateX(160).rotate(360).step();

        this.setData({
            animationOne: animation.export(),
        });
    },
    animationTwo() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 1000,
        })

        animation.translateX(160).rotate(360).step();

        this.setData({
            animationTwo: animation.export(),
        });
    },
    animationThree() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 1000,
        })

        animation.translateX(-160).rotate(-360).step();

        this.setData({
            animationThree: animation.export(),
        });
    },
    animationFour() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 1000,
        })

        animation.translateX(-160).rotate(-360).step();

        this.setData({
            animationFour: animation.export(),
        });
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
        this.animationOne();
        this.animationTwo();

        setTimeout(() => {
            this.animationThree();
            this.animationFour();
        }, 3500)
    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
})