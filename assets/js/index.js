jQuery(function () {
    // 获取用户基本信息
    getUserData()
    // 退出功能
    var layer = layui.layer
    jQuery('#Exit').on('click', function () {

        layer.confirm('你确定要退出码?', { icon: 3, title: '提示' }, function (index) {
            //do something
            localStorage.removeItem('token')
            location.href = "/login.html"
            layer.close(index);
        });
    })
})
// 获取用户基本信息
function getUserData() {
    jQuery.ajax({
        method: 'GET',
        url: 'http://api-breakingnews-web.itheima.net/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            // console.log(res);
            // 渲染用户头像
            rederA(res.data)
        }
    })
}
// 渲染用户头像
function rederA(user) {
    var name = user.nickname || user.username
    jQuery('.welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic === null) {
        var first = name[0].toUpperCase()
        jQuery('.text-a').html(first).show()
        jQuery('.Aaa').hide()
    } else {
        jQuery('.Aaa').attr('src', user.user_pic)
        jQuery('text-a').hide()
    }
}
