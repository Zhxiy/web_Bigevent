jQuery(function () {
    // 给登录账号和注册账号绑定点击事件
    jQuery('#reg_a').on('click', function () {
        jQuery('.login').hide();
        jQuery('.register').show();
    })
    jQuery('#login_a').on('click', function () {
        jQuery('.register').hide();
        jQuery('.login').show();
    })
    // 从layui中获取form对象
    var layer = layui.layer
    var form = layui.form
    // 输入规则
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            if (jQuery('.register [name=password]').val() !== value) {
                return '两次密码输入不一致'
            }

        }
    })
    // 调用接口，发用户注册请求

    jQuery('#form-reg').on('submit', function (e) {
        e.preventDefault()
        // 注意：定义变量的作用域！！！！！！
        var data = {
            username: jQuery("#form-reg [name=username]").val(),
            password: jQuery("#form-reg [name=password]").val()
        }
        jQuery.post('http://api-breakingnews-web.itheima.net/api/reguser', data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            $('#login_a').click()
        })
    })
    // 调用接口，发用户登录请求
    jQuery('#form-login').on('submit', function (e) {
        e.preventDefault()
        var data = {
            username: jQuery("#form-login [name=username]").val(),
            password: jQuery("#form-login [name=password]").val()
        }
        jQuery.post('http://api-breakingnews-web.itheima.net/api/login', data, function (res) {
            if (res.status !== 0) {
                return layer.msg('登录失败')
            }
            layer.msg('登录成功')
            window.location.href = 'index.html'
        })
    })

})
