package Servlet;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/displayInfo")
public class displayInfo extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=UTF-8");
        String stuID=req.getParameter("stuID");
        String[] infoData=new String[5];
        for(int n=0;n<5;n++){
            infoData[n]=new String();
        }//new一个数据数组
        JDBCdemo.info(stuID,infoData);
        JSONObject json=new JSONObject();
        json.put("stuID",infoData[0]);
        json.put("password",infoData[1]);
        json.put("stuName",infoData[2]);
        json.put("teleNum",infoData[3]);
        json.put("email",infoData[4]);
        try {
            PrintWriter pw=resp.getWriter();
            pw.print(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
