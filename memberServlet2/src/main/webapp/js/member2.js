$(function(){
	
	// 회원가입
	$('#writeBtn').click(function(){
		$('#nameDiv').empty();
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		$('#repwdDiv').empty();
		
		if($('input[name="name"]').val() == ''){
			$('#nameDiv').html('이름 입력');
			$('#name').focus();
		}else if($('input[name="id"]').val() == ''){
			$('#idDiv').html('아이디 입력');
			$('#id').focus();
		}else if($('input[name="pwd"]').val() == ''){
			$('#pwdDiv').html('비밀번호 입력');
			$('#pwd').focus();
		}else if($('input[name="pwd"]').val() != $('input[name="repwd"]').val()){
			$('#repwddiv').html('비밀번호 틀림');
			$('#repwd').focus();
		}else
			$('form[name="writeForm"]').submit();
	});
	
	// 로그인
	$('#loginBtn').click(function(){
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		
		if($('input[name="id"]').val() == ''){
			$('#idDiv').html('아이디 입력');
		}else if($('input[name="pwd"]').val == ''){
			$('pwdDiv').html('비밀번호 입력');
		}else
			$('form[name="loginForm"]').submit();
	});	
});//가장 밖


//우편번호
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                /*if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;*/
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('zipcode').value = data.zonecode;
            document.getElementById("addr1").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("addr2").focus();
        }
    }).open();
}

// 아이디 중복 체크
function checkId(){
	var id = document.getElementById("id").value;
	if(id == "")
		alert("먼저 아이디를 입력하세요2");
	else
		window.open("/memberServlet2/CheckIdServlet2?id"+id,
		"checkId2", "width=400 height=200 top=200 left=400");
}