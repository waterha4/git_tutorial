package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.dao.MemberDAO;

@WebServlet("/CheckIdServlet")
public class CheckIdServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@Override
	//넘어가는건 post가 불가능한듯 안됨 무조건 get
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//데이터
		String id = request.getParameter("id");
		
		//DB
		MemberDAO memberDAO = MemberDAO.getInstance();
		boolean exist = memberDAO.isCheckId(id);
		
		//응답
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		
		if(exist)
			out.println("아이디"+id+" 은 사용하실 수 없습니다");
		else
			out.println("아이디"+id+" 은 사용하실 수 있습니다");
		out.println("</body>");
		out.println("</html>");
		
	}
}
