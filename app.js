/*eslint-disable */
//app.js
import wxp from './utils/wxpApi.js'
import Promise from './lib/es6-promise.min.js';

Object.assign = require('./utils/object-assign');

App({
    globalData: {
        userInfo: null,
        first: true,
        second: false,
        third: false,
        fourth: false,
        final: false,
    },
    onLaunch() {

    },
    onShow() {
        app.checkChapter();
    },
    //检查本地章节
    checkChapter() {
        this.globalData.second = this.getStorage('second');
        this.globalData.third = this.getStorage('third');
        this.globalData.fourth = this.getStorage('fourth');
        this.globalData.final = this.getStorage('final');
    },
    //存储当前章节
    setChapterStorage(chapter, value) {
        this.setStorage(chapter, value);
    },
    //获取本地数据
    getStorage(key) {
        return wx.getStorageSync(key);
    },
    //本地存储
    setStorage(key, value) {
        wx.setStorageSync(key, value);
    },
    //下载文件
    downloadFile(data) {
        return wxp.downloadFile(data);
    },
    //预览图片
    previewImage(data) {
        return wxp.previewImage(data);
    },
    //选择图片
    chooseImage(data) {
        const _data = Object.assign({}, {
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            count: 9,
        }, data);
        return wxp.chooseImage(_data);
    },
    //拨打电话
    makePhoneCall(phoneNumber) {
        return wxp.makePhoneCall({
            phoneNumber
        });
    },
    //返回前页
    back(delta = 1) {
        return wxp.navigateBack({
            delta,
        });
    },
    //关闭所以页面跳转
    reLaunch(page) {
        return wxp.reLaunch({
            url: page,
        });
    },
    //关闭当前页面跳转
    redirectTo(page) {
        return wxp.redirectTo({
            url: page
        });
    },
    //跳转页面
    navigateTo(page) {
        return wxp.navigateTo({
            url: page
        });
    },
    //获取屏幕信息
    getSystemInfo() {
        return wxp.getSystemInfo();
    },
    //获取用户位置
    getLocation(type = 'gcj02') {
        return wxp.getLocation({
            type,
        });
    },
    //调用小程序地图
    openLocation(data) {
        return wxp.openLocation(data);
    },
    //封装显示加载
    showLoading(title = '数据加载中') {
        return wxp.showLoading({
            title,
        });
    },
    //封装提示弹窗
    showModal(data) {
        return wxp.showModal(data);
    },
    //封装消息提示框
    showToast(status, text, imgSrc = '') {
        switch (status) {
            case 'success':
                return wxp.showToast({
                    title: text,
                    icon: 'success'
                }).then(() => {
                    setTimeout(() => {
                        wx.hideToast();
                    }, 2000);
                });
            case 'fail':
                return wxp.showToast({
                    title: text,
                    image: `${imgSrc}error.png`
                }).then(() => {
                    setTimeout(() => {
                        wx.hideToast();
                    }, 2000);
                });
            default:
                console.log(status);
        }
    },
    //获取用户信息
    getUserInfo() {
        return wxp.getUserInfo().then(res => {
            this.globalData.userInfo = res.userInfo;
            return res.userInfo;
        });
    },
})