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
            let x="<table style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>学号：</td><td><input disabled value="+e.stuID+"></td>" +
                "<td>密码：</td><td><input disabled type='password' value="+e.password+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>姓名：</td><td><input disabled value="+e.stuName+"></td>" +
                "<td>电话号码</td><td><input disabled type='tel' value="+e.teleNum+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>电子邮箱：</td><td colspan='3'><input disabled type='email' style='width: 400px;' value="+e.email+"></td>" +
                "</tr>" +
                "</table>"
            content.innerHTML=x;
        }
    });
}

function displayInfoAjax(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displayInfo",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            let content=document.getElementById("content");
            let x="<table style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>学号：</td><td><input id='stuID' disabled value="+e.stuID+"></td>" +
                "<td>密码：</td><td><input disabled type='password' value="+e.password+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>姓名：</td><td><input disabled value="+e.stuName+"></td>" +
                "<td>电话号码</td><td><input id='tel' type='tel' value="+e.teleNum+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>电子邮箱：</td><td colspan='3'><input id='email' type='email' style='width: 400px;' value="+e.email+"></td>" +
                "</tr>" +
                "</table>" +
                "<button onclick='changeInfo()'>修改信息</button>"
            content.innerHTML=x;
        }
    });
}

function changeInfo(){
    let stuID=document.getElementById("stuID").value;
    let tel=document.getElementById("tel").value;
    let email=document.getElementById("email").value;
    $.ajax({
        url:"changeInfo",
        type:"post",
        data:{
            stuID:stuID,
            tel:tel,
            email:email
        },
        success:function (e){
            if(e.pass==true)
                alert("修改成功");
            else
                alert("修改失败");
            console.log(e);
            displayInfoAjax();
        }
    })
}