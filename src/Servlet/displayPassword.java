package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/displayPassword")
public class displayPassword extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String stuID=req.getParameter("stuID");
        String oldPassword=JDBCdemo.selectPassword(stuID);
        JSONObject json=new JSONObject();
        json.put("oldPassword",oldPassword);
        PrintWriter pw=resp.getWriter();
        pw.print(json);
    }
}
