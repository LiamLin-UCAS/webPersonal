<!DOCTYPE html>
<html>
<head>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <meta charset="utf-8">
    <%! Boolean test;%>
    <%
        String s= (String) request.getAttribute("pass");

        if(s.equals("true"))
            test=true;
        else
            test=false;
    %>
    <title><%=test?"登录成功":"登录失败"%></title>
</head>
</html>