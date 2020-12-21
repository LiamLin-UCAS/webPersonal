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
    <script src="jquery.js"></script>
</head>
<body>
<article>
    <header>
        <h1>山东大学软件学院<br>学生信息管理系统</h1>
        <p >你好！<%=request.getAttribute("stuName")%></p>
    </header>
    <article id="main">
        <div id="navigator">
            <div>func1</div>
            <div>func2</div>
            <div style="border-bottom: 2px solid black">func3</div>
        </div>
        <div id="content">
            <p>content</p>
        </div>
    </article>
</article>
</body>
</html>
