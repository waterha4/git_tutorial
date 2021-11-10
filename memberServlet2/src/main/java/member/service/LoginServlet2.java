package member.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.dao.MemberDAO2;

@WebServlet("/LoginServlet2")
public class LoginServlet2 extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		MemberDAO2 memberDAO2 = MemberDAO2.getInstance();
	//	String name = memberDAO2.login(id, pwd);		
		
	}
}
