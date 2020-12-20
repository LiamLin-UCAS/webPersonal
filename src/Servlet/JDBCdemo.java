package Servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import com.mysql.cj.jdbc.Driver;

public class JDBCdemo {
//    public static void main(String[] args) {
//        register("201900150080","testPassword","lhy","201900150080","18046022036","605761792@qq.com");
//    }
    public static void selectAll(){
        Connection con=null;
        Statement stmt=null;
        ResultSet rs=null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url="jdbc:mysql://localhost:3306/studentlogin?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC";
            con=DriverManager.getConnection(url,"root","123456");
            stmt=con.createStatement();
            String sql="select * from studentid";
            rs=stmt.executeQuery(sql);
            while(rs.next()){
                System.out.println(rs.getInt("account")+","+rs.getString("studentname"));
            }
            close(rs,stmt,con);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    public static void register(String studentID,String password,String stuName,String teleNum,String email){
        Connection con=null;
        Statement stmt=null;
        ResultSet rs=null;
        try {

            Class.forName("com.mysql.jdbc.Driver");
            String url="jdbc:mysql://localhost:3306/studentdata?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC";
            con=DriverManager.getConnection(url,"root","123456");
            stmt=con.createStatement();
            //String sql="insert into stulogin values ('"+studentID+"','"+password+"','"+stuName+"','"+teleNum+"','"+email+"');";
            String sql="select * from stulogin where stuID='201900140060'";
            System.out.println(sql);
            rs=stmt.executeQuery(sql);
            System.out.println(rs.getString("stuName"));
            close(rs,stmt,con);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    private static void close(ResultSet rs,Statement stmt,Connection con){
        try{
            if(rs!=null){
                rs.close();
            }
            if(stmt!=null){
                stmt.close();
            }
            if(con!=null){
                con.close();
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
