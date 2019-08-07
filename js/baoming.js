
console.log("jjj");

// var obutton==document.getElementById('button1');
// obutton.onclick=function() {
// 	obutton.style.display='none';
// }
// console.log('obutton[0]');



function checkIP(){//js表单验证方法
   var text=document.getElementById("url").value;//通过id获取需要验证的表单元素的值
   if(text==""){//当上面获取的值为空时
     alert("不能为空哦！");//弹出提示
     return false;//返回false（不提交表单）
   }
   return true;//提交表单
}
//电话判断
function checkMobile(tel){
        var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        if(reg.test(tel)){
            return true;
        }else{
            return false;
        }
    }
function checkSubmit(){
        // 去除前后空格
        var userPhone = $.trim($('#input1').val());
        var password = $.trim($('#input2').val());
        if(userPhone == ''){
            showErrorMsg('手机号码不能为空！');
            return false;
        }
        if(!checkMobile(userPhone)){
            showErrorMsg('手机号码格式不对!');
            return false;
        }
        if(password == ''){
            showErrorMsg('密码不能为空！');
            return false;
        }
    }
    console.log("dwdw");























// <button type="button" class="btn btn-info btn-lg" id="button1">登陆</button> 
//          <button type="button" class="btn btn-info btn-lg" id="button2">注册</button> 
	
