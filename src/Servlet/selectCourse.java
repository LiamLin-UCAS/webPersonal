package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/selectCourse")
public class selectCourse extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String[][] course=new String[5][5];
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                course[i][j]=new String();
            }
        }//初始化空间
        JDBCdemo.displayCourse(course);
        JSONObject json=new JSONObject();
        json.put("course",course);
        PrintWriter pw=resp.getWriter();
        pw.print(json);
    }
}
