package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/displaySelectCourse")
public class displaySelectCourse extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String stuID=req.getParameter("stuID");
        String[][] course=new String[5][4];
        for(int i=0;i<5;i++){
            for(int j=0;j<4;j++){
                course[i][j]="";
            }
        }
        JDBCdemo.displaySelectCourse(stuID,course);
        JSONObject json=new JSONObject();
        json.put("course",course);
        PrintWriter pw=resp.getWriter();
        pw.print(json);
        pw.flush();
    }
}
