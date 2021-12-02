jQuery(function () {
    // 获取用户基本信息
    getUserData()
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
            console.log(res);
            // console.log(localStorage.getItem('token'));
        }
    })
}