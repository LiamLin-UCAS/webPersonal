<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <meta charset="utf-8">
    <title>山大软院信息管理系统</title>
    <link href="SignUp.css" rel="stylesheet">
</head>
<body>
<article class="content">
    <header>
        <h1 align="center" style="font-size: 2.75em;color: rgb(159,12,19);">山东大学软件学院</h1>
        <h2 align="center" style="font-size: 2em;color: rgb(159,12,19);">学生信息管理系统</h2>
    </header>
    <!--  登录面板    -->
    <div class="panel">
        <form action="../webPersonal_war_exploded/Login" method="post" id="form">
            <!--  账号和密码组    -->
            <div class="group">
                <%!
                String studentID;
                String password;
                %>
                <%
                    studentID=(String)request.getAttribute("studentID");
                    password=(String) request.getAttribute("password");
                %>
                <p class="words">学号</p>
                <input placeholder="请输入学号" name="studentID" value="<%=(studentID!=null)?studentID:""%>">
                <p class="words">密码</p>
                <input placeholder="请设置密码" type="password" name="password" value="<%=(password!=null)?password:""%>">
            </div>
            <!--  登录按钮    -->
            <div class="login">
                <button onclick="document.getElementById('form').submit();">登录</button>
            </div>
        </form>
        <div class="register">
            <button onclick="window.location.href='register.jsp'">创建新账号</button>
        </div>
            <!--  注册按钮    -->
    </div>
</article>
<script src="js/canvas-nest.min.js"></script>　
<script src="js/canvas.js"></script>
</body>
</html>