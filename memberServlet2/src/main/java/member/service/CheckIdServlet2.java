package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.dao.MemberDAO2;

@WebServlet("/CheckIdServlet2")
public class CheckIdServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//데이터
		String id = request.getParameter("id");
		
		//DB
		MemberDAO2 memberDAO2 = MemberDAO2.getInstance();
		boolean exist = memberDAO2.isCheckId(id);
		
		//응답
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		
		if(exist) {
			out.println("아이디 "+id+" 는 사용하실수 없습니다");
		}else {
			out.println("아이디 "+id+" 는 사용하실수 없습니다");
		}
		out.println("</body>");
		out.println("</html>");
	}

}
