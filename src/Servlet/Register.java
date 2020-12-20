package Servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Register")
public class Register extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String studentID=req.getParameter("studentID");
        String password=req.getParameter("password");
        String studentName=req.getParameter("studentName");
        String telephoneNum=req.getParameter("telephoneNumber");
        String email=req.getParameter("email");
        register(studentID,password,studentName,telephoneNum,email);
    }
    private static void register(String studentID,String password,String stuName,String teleNum,String email){
        JDBCdemo jdbc=new JDBCdemo();
        jdbc.register(studentID,password,stuName,teleNum,email);
    }
}
