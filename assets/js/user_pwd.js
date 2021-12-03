$(function () {
    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: 'http://api-breakingnews-web.itheima.net/my/updatepwd',
            data: $(this).serialize(),
            headers: {
                Authorization: localStorage.getItem('token')
            },
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg(res.message)
                $('.layui-form')[0].reset()
            }
        })
    })
})
