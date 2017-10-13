/*eslint-disable */
const app = getApp();

Page({
    data: {
        imgSrc: '../../img/',
        userInfo: {},
        animationXY: {},
        animationSF: {},
        starAn1: {},
        starAn2: {},
        starAn3: {},
        starAn4: {},
        starAn5: {},
        firstBtn: false,
        secondBtn: false,
        thirdBtn: false,
        fourthBtn: false,
        finalBtn: false,
        btnAn: {},
    },
    //'星'和'夜'字动画
    animationXY() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 1000,
        });

        animation.translateX(160).rotate(360).step();

        this.setData({
            animationXY: animation.export(),
        });
    },
    //'时'和'分'字动画
    animationSF() {
        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
        });

        animation.translateX(-160).rotate(-360).step();

        this.setData({
            animationSF: animation.export(),
        });
    },
    //流星动画
    meteorAnimation() {
        const duration = 800;

        const delay = 400;

        const animation1 = wx.createAnimation({
            duration,
            timingFunction: 'linear',
        });

        const animation2 = wx.createAnimation({
            duration,
            timingFunction: 'linear',
            delay,
        });

        const animation3 = wx.createAnimation({
            duration,
            timingFunction: 'linear',
            delay: delay * 2,
        });

        const animation4 = wx.createAnimation({
            duration,
            timingFunction: 'linear',
            delay: delay * 3,
        });

        const animation5 = wx.createAnimation({
            duration,
            timingFunction: 'linear',
            delay: delay * 4,
        });

        const trX = -480;
        const trY = 600;

        animation1.translate(trX, trY).rotate(-45).step();
        animation2.translate(trX, trY).rotate(-45).step();
        animation3.translate(trX, trY).rotate(-45).step();
        animation4.translate(trX, trY).rotate(-45).step();
        animation5.translate(trX, trY).rotate(-45).step();

        this.setData({
            starAn1: animation1.export(),
            starAn2: animation2.export(),
            starAn3: animation3.export(),
            starAn4: animation4.export(),
            starAn5: animation5.export(),
        });
    },
    showBtn() {
        const {
            first,
            second,
            third,
            fourth,
            final
        } = app.globalData;

        const animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'linear',
        });

        animation.opacity(1).step();

        this.setData({
            firstBtn: first,
            secondBtn: second,
            thirdBtn: third,
            fourthBtn: fourth,
            finalBtn: final,
        });

        setTimeout(() => {
            this.setData({
                btnAn: animation
            });
        }, 100);
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
        this.animationXY();

        setTimeout(() => {
            this.animationSF();
        }, 3500);

        setTimeout(() => {
            this.meteorAnimation();
        }, 6000);

        setTimeout(() => {
            this.showBtn();
        }, 8000);
    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
})