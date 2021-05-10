var x = localStorage.getItem('login');
var d=new Date();

if (x != d.getDay()) {
 // localStorage.removeItem("thongbao");
	var person = prompt("Nhập pass: ");
  if (person == "13052021") {
	localStorage.setItem('login', d.getDay());
  } 
  else 
  {
    localStorage.removeItem("login");
   // localStorage.removeItem("thongbao");
    window.location.href = "https://vn.minghui.org/";
  }	
}

//  if (location.protocol !== 'https:') {
//     location.replace('https:${location.href.substring(location.protocol.length)}');
// }

var myvar = '<div id="head">'+

'	<h1><a href="#">HY VỌNG</a></h1></h1>'+

'	<div id="headm">'+

// '	<h2 class="i3" onclick="openmenu()"><a>Menu ☰</a></h2>	'+
'	</div>'+
'</div>'+


//menu

'<div id="col2">'+
'		<a href="app.html">Tải ứng dụng</a>'+
'		<a href="ten.html">Đặt tên nick</a>'+
'		<a href="giaotiep.html">Các câu giao tiếp</a>'+
'		<a href="giaotiep2.html">Các câu giao tiếp 2</a>'+
'		<a href="moment.html">Đăng khoảnh khắc</a>			'+
'		<a href="groupname.html">Đặt tên nhóm</a>			'+
'		<a href="group.html">Các câu quản lý nhóm</a>'+
'	</div>';
	

	


//thongbao
// '<div id="thongbao">'+
// ' <p>'+
// '📣📣📣 Đã có kịch bản tiêm vác xin mới.  <a href="https://comingforyou20.github.io/search/kichban6.html#stu10">Ấn vào đây</a> '+
// '<br> Thông báo sẽ tự đóng sau 10 giây '+
// ' </p>'+
// ' <span id="close">Đóng</span>'+
// '</div>';
	
document.write(myvar);