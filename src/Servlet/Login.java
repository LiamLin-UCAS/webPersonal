package Servlet;

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
        String acc="000";
        String pass="111";
        String account=req.getParameter("account");
        String password=req.getParameter("password");
        if(account.equals(acc)&&password.equals(pass)){
            req.setAttribute("pass","true");
            req.getRequestDispatcher("loginSuccess.jsp");
        }
    }
}
