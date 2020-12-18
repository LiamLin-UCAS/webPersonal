<%--
  Created by IntelliJ IDEA.
  User: LiamLin
  Date: 2020/12/18
  Time: 22:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
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
        <form action="../webPersonal_war_exploded/Register" method="post" id="form">
            <!--  账号和密码组    -->
            <div class="group">
                <p class="words">账号</p>
                <input placeholder="请输入账号" name="account">
                <p class="words">密码</p>
                <input placeholder="请输入密码" type="password" name="password">
                <p class="words">学号</p>
                <input placeholder="2019XXXXXXXX" name="studentID">
                <p class="words">联系方式</p>
                <input placeholder="电话号码" type="tel" name="telephone">
                <p class="words">电子邮箱</p>
                <input placeholder="youremail@example.com" type="email" name="email">
            </div>
            <!--  登录按钮    -->
            <div class="login">
                <button onclick="document.getElementById('form').submit();">登录</button>
            </div>
            <div class="register">
                <button onclick="window.location.href='register.jsp'">创建新账号</button>
            </div>
            <!--  注册按钮    -->
        </form>
    </div>





</article>
</body>
</html>
