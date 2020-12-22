<%--
  Created by IntelliJ IDEA.
  User: LiamLin
  Date: 2020/12/21
  Time: 17:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>个人信息</title>
    <link rel="stylesheet" href="main.css">
    <script src="js/jquery.js"></script>
</head>
<body>
<article>
    <header>
        <div>
            <img src="logo.png" style="width: 60%;"/>
            <p>你好！ <i><%=request.getAttribute("stuName")%></i>  <%=request.getAttribute("stuID")%></p>
            <input id="stuID" type="hidden" value="<%=request.getAttribute("stuID")%>">
        </div>
        <h1>学生信息管理系统</h1>
    </header>
    <article id="main">
        <div class="naviContent">
            <div class="navigator">
                <button style="margin-top: 5px;" onclick="display(0)" class="headNavi">个人信息</button>
                <button class="subNavi0" onclick="displayInfo()">学籍信息</button>
                <button class="subNavi0">修改信息</button>
            </div>
            <div class="navigator">
                <button style="margin-top: 5px;" onclick="display(1)" class="headNavi">选课退课</button>
                <button class="subNavi1">选课</button>
                <button class="subNavi1">退课</button>
            </div>
            <div class="navigator">
                <button style="margin-top: 5px;" onclick="display(2)" class="headNavi">综合素质</button>
                <button class="subNavi2">成绩查询</button>
                <button class="subNavi2">社会工作</button>
            </div>
        </div>

        <div id="content" align="center"></div>
    </article>
</article>
<script src="js/mainPerson.js"></script>
</body>
</html>
