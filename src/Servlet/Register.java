package Servlet;

import javax.servlet.RequestDispatcher;
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
        System.out.println(account);
        String password=req.getParameter("password");
        System.out.println(password);
        String studentID=req.getParameter("studentID");
        System.out.println(studentID);
        String telephoneNum=req.getParameter("telephoneNumber");
        System.out.println(telephoneNum);
        String email=req.getParameter("email");
        System.out.println(email);
    }
}
