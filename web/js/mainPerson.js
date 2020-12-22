let count=new Array();
count[0]=0;
count[1]=0;
count[2]=0;
function display(num){
    count[num]++;
    let selector=".navigator .subNavi"+num;
    if(count[num]%2==1){
        $(selector).slideDown();
    }
    else{
        $(selector).slideUp();
    }
    for(let n=0;n<3;n++){
        let selector=".navigator .subNavi"+n;
        if(n==num)
            continue;
        else{
            if(count[n]%2==1){
                count[n]++;
                $(selector).slideUp();
            }
        }
    }
}
// function show(num) {
//     num=".navigator .subNavi"+num;
//     $(num).slideDown();
// }

function displayInfo(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displayInfo",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            let content=document.getElementById("content");

            let n="<p>学号：</p><input disabled value="+e.stuID+">" +
                "<p>密码：</p><input disabled type='password' value="+e.password+">" +
                "<p>姓名：</p><input disabled value="+e.stuName+">" +
                "<p>电话号码：</p><input type='tel' value="+e.teleNum+">" +
                "<p>电子邮箱：</p><input type='email' value="+e.email+">";


            let x="<table>" +
                "<tr>" +
                "<td>学号：</td><td><input disabled value="+e.stuID+"></td>" +
                "<td>密码：</td><td><input disabled type='password' value="+e.password+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>姓名：</td><td><input disabled value="+e.stuName+"></td>" +
                "<td>电话号码</td><td><input type='tel' value="+e.teleNum+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>电子邮箱：</td><td><input type='email' value="+e.email+"></td>" +
                "<td></td><td></td>" +
                "</tr>" +
                "</table>"
            content.innerHTML=x;
        }
    })
}