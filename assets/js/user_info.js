$(function () {
    var layer = layui.layer
    getData();
    // 给表单注册提交事件
    $('#user-info').on('submit', function (e) {
        // 阻止表单默认提交行为
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: 'http://api-breakingnews-web.itheima.net/my/userinfo',
            data: $(this).serialize(),
            // data: { id: $('.layui-form-item [name=id]').val(), nickname: $('.layui-form-item [name=nickname]').val(), email: $('.layui-form-item [name=email]').val() },
            headers: {
                Authorization: localStorage.getItem('token')
            },
            success: function (res) {
                if (res.status !== 0) {
                    console.log(res.status);
                    console.log($('.layui-form-item [name=nickname]').val());
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                // 调用index.js中的方法
                parent.getUserData()
            }
        })
    })
    $('#reset').on('click', function (e) {
        e.preventDefault();
        getData();
    })
})
// 初始化用户基本信息
function getData() {
    var form = layui.form
    $.ajax({
        method: 'GET',
        url: 'http://api-breakingnews-web.itheima.net/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        success: function (res) {
            // console.log(res.data);
            // renderData(res.data);
            // 渲染用户基本信息
            form.val('formUserinfo', res.data)
        }
    })
}

