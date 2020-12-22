<%--
  Created by IntelliJ IDEA.
  User: LiamLin
  Date: 2020/12/18
  Time: 22:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%request.setCharacterEncoding("UTF-8");%>
<html>
<head>
    <meta charset="UTF-8">
    <title>注册新账号</title>
    <link href="register.css" rel="stylesheet">
</head>
<body>
<article class="content">
    <header>
        <h1 align="center" style="font-size: 2.75em;color: rgb(159,12,19);">山东大学软件学院</h1>
        <h2 align="center" style="font-size: 2em;color: rgb(159,12,19);">学生信息管理系统</h2>
    </header>
    <!--  登录面板    -->
    <div class="panel">
        <form action="../webPersonal_war_exploded/Register" method="post" id="form" accept-charset="UTF-8">
            <!--  账号和密码组    -->
            <div class="group">
                <p class="words">学号</p>
                <input placeholder="请输入学号" name="studentID">
                <p class="words">密码</p>
                <input placeholder="请设置密码" type="password" name="password">
                <p class="words">姓名</p>
                <input placeholder="请输入姓名" name="studentName">
                <p class="words">联系方式</p>
                <input placeholder="电话号码" type="tel" name="telephoneNumber">
                <p class="words">电子邮箱</p>
                <input placeholder="youremail@example.com" type="email" name="email">
            </div>
            <!--  登录按钮    -->
            <div class="login">
                <button onclick="document.getElementById('form').submit();">创建新账号</button>
            </div>
            <div class="register">
                <button onclick="window.location.href='index.jsp'">返回</button>
            </div>
            <!--  注册按钮    -->
        </form>
    </div>
</article>
<script type="text/javascript" src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"></script>　
<script src="js/canvas.js"></script>
</body>
</html>
