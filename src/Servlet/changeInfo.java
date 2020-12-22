package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/changeInfo")
public class changeInfo extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String stuID=req.getParameter("stuID");
        String newTele=req.getParameter("tel");
        String newEmail=req.getParameter("email");
        boolean indicator=JDBCdemo.changeInfo(stuID,newTele,newEmail);
        JSONObject json=new JSONObject();
        json.put("pass", indicator);
        PrintWriter pw=resp.getWriter();
        pw.print(json);
    }
}
