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
        String account=req.getParameter("account");
        String password=req.getParameter("password");
        String studentName=req.getParameter("studentName");
        String studentID=req.getParameter("studentID");
        String telephoneNum=req.getParameter("telephoneNumber");
        String email=req.getParameter("email");
        register(account,password,studentName,studentID,telephoneNum,email);
    }
    private static void register(String account,String password,String stuName,String studentID,String teleNum,String email){
        JDBCdemo jdbc=new JDBCdemo();
        jdbc.register(account,password,stuName,studentID,teleNum,email);
    }
}
