package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/disSelectCourse")
public class disSelectedCourse extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String[] courses=new String[5];
        String stuID=req.getParameter("stuID");
        int count=0;
        for(int i=0;i<5;i++){
            String temp=req.getParameter("courses"+i);
            courses[i]= temp;
        }
        for(int i=0;i<5;i++){
            if(JDBCdemo.checkCourseForDisSelect(stuID,courses[i])){
                JDBCdemo.disSelectCourse(stuID,courses[i]);
                count++;
            }
        }
        JSONObject json=new JSONObject();
        json.put("success",count);
        PrintWriter pw= resp.getWriter();
        pw.print(json);
        pw.flush();
    }
}
