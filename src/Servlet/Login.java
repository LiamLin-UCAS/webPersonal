package Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Login")
public class Login extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        String stuID=req.getParameter("studentID");
        String password=req.getParameter("password");
        if(JDBCdemo.login(stuID,password)){
            req.setAttribute("stuID",stuID);
            req.setAttribute("stuName",JDBCdemo.select(stuID));
            RequestDispatcher rd=req.getRequestDispatcher("mainPerson.jsp");
            try {
                rd.forward(req,resp);
            } catch (ServletException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
