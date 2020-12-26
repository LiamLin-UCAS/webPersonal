let count=new Array();
count[0]=0;
count[1]=0;
count[2]=0;
let selectedCourse=0;
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
                "<td>电话号码</td><td><input id='tel' placeholder='手机号码' type='tel' value="+e.teleNum+"></td>" +
                "</tr>" +
                "<tr>" +
                "<td>电子邮箱：</td><td colspan='3'><input id='email' placeholder='yourEmail@example.com' type='email' style='width: 400px;' value="+e.email+"></td>" +
                "</tr>" +
                "</table>" +
                "<button onclick='changeInfo()' id='contentButton'>修改信息</button>" +
                "<button onclick='clickChangePassword()' id='contentButton' style='margin-left: 20px;'>修改密码</button>";
            content.innerHTML=x;
        }
    });
}
function changeInfo(){
    let stuID=document.getElementById("stuID").value;
    let tel=document.getElementById("tel").value;
    let email=document.getElementById("email").value;
    if(tel==""||email==""){
        alert("电话号码或电子邮箱不能为空，请输入！");
    }
    else{
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
                displayInfoAjax();
            }
        });
    }
}
function clickChangePassword(){
    document.getElementById("changePassword").click();
}
function displayChangePassword(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displayPassword",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            let content=document.getElementById("content");
            content.innerHTML="<table style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>原密码：</td>" +
                "<td><input disabled type='password' value='"+e.password+"'></td>" +
                "</tr>" +
                "<tr>" +
                "<td>请输入原密码：</td>" +
                "<td><input type='password' id='oldPassword' placeholder='原密码'></td>" +
                "</tr>" +
                "<tr>" +
                "<td>请输入新密码：</td>" +
                "<td><input type='password' id='newPassword' placeholder='新密码'></td>" +
                "</tr>" +
                "</table>" +
                "<button onclick='changePassword()' id='contentButton'>修改密码</button>"
        }
    })
}
function changePassword(){
    let stuID=document.getElementById("stuID").value;
    let oldPassword=document.getElementById("oldPassword").value;
    let newPassword=document.getElementById("newPassword").value;
    if(oldPassword==""||newPassword==""){
        alert("原密码或新密码不能为空，请输入！");
    }
    else {
        $.ajax({
            url:"changePassword",
            type:"post",
            data:{
                stuID:stuID,
                oldPassword:oldPassword,
                newPassword:newPassword
            },
            success:function (e){
                if(e.pass==true)
                    alert("修改成功");
                else
                    alert("原密码错误！重新输入");
                displayChangePassword();
            }
        });
    }
}
function displayCourse(){
    $.ajax({
        url:"displayCourse",
        type:"post",
        success:function (e){
            let content=document.getElementById("content");
            content.innerHTML="<table id='table' style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>课程号</td><td>课程名</td><td>老师</td><td>上课时间</td><td>课余量</td><td>选课</td>" +
                "</tr>";
            let table=document.getElementById("table");
            for(let i=0;i<5;i++){
                table.innerHTML+="<tr><td id='courseID"+i+"'>" + e.course[i][0] + "</td><td>" + e.course[i][1] + "</td><td>" + e.course[i][2] + "</td><td>" + e.course[i][3] + "</td><td>" + e.course[i][4] + "</td><td><input type='checkbox' name='selected'></td></tr>"
            }
            content.innerHTML+="</table><button onclick='selectCourse()' id='contentButton' style='margin-top: 20px;'>确认选课</button>";
        }
    });
}
function selectCourse(){
    let stuID=document.getElementById("stuID").value;
    let courses=new Array(5);
    for(let i=0;i<5;i++){
        if(document.getElementsByName("selected")[i].checked==true){
            courses[i]=document.getElementById("courseID"+i).innerHTML;
        }
    }
    $.ajax({
        url:"selectCourse",
        type:"post",
        data:{
            stuID:stuID,
            courses0:courses[0],
            courses1:courses[1],
            courses2:courses[2],
            courses3:courses[3],
            courses4:courses[4]
        },
        success:function (e){
            alert("成功选"+e.success+"门课程");
            displayCourse();
        }
    });
}
function displaySelectedCourse(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displaySelectCourse",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            if(e.course[0][0]==""){
                document.getElementById("content").innerHTML="<p style='margin-top: 30px;font-size: 2em;color: rgb(159,12,19)'>未选择任何课程！</p>";
            }
            else{
                for(let i=0;i<5;i++){
                    if(e.course[i][0]==""){
                        continue;
                    }
                    else{
                        let content = document.getElementById("content");
                        content.innerHTML="<table id='table' style='margin-top: 30px;'>" +
                            "<tr>" +
                            "<td>课程号</td><td>课程名</td><td>老师</td><td>上课时间</td><td>退课</td>" +
                            "</tr>";
                        let table=document.getElementById("table");
                        for(let j=0;j<length(e.course);j++){
                            table.innerHTML+="<tr><td id='courseID"+j+"'>" + e.course[j][0] + "</td><td>" + e.course[j][1] + "</td><td>" + e.course[j][2] + "</td><td>" + e.course[j][3] + "</td><td><input type='checkbox' name='selected'></td></tr>"
                        }
                        content.innerHTML+="</table><button onclick='disSelectCourse()' id='contentButton' style='margin-top: 20px;'>确认退课</button>";
                    }
                }
                selectedCourse=length(e.course);
            }
        }
    });
}
function length(data){
    let temp=0;
    for(let i=0;i<data.length;i++){
        if(data[i][0]!="")
            temp++;
    }
    return temp;
}
function disSelectCourse(){
    let stuID=document.getElementById("stuID").value;
    let courses=new Array(5);
    for(let i=0;i<selectedCourse;i++){
        if(document.getElementsByName("selected")[i].checked==true){
            courses[i]=document.getElementById("courseID"+i).innerHTML;
        }
    }
    $.ajax({
        url:"disSelectCourse",
        type:"post",
        data:{
            stuID:stuID,
            courses0:courses[0],
            courses1:courses[1],
            courses2:courses[2],
            courses3:courses[3],
            courses4:courses[4]
        },
        success:function (e){
            alert("成功退"+e.success+"门课程");
            displaySelectedCourse();
        }
    });
}
function displayScore(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displayScore",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            let content = document.getElementById("content");
            content.innerHTML="<table id='table' style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>课程名</td><td>分数</td><td>学分</td>" +
                "</tr>";
            let table=document.getElementById("table");
            for(let j=0;j<6;j++){
                table.innerHTML+="<tr><td>" + e.score[j][0] + "</td><td>" + e.score[j][1] + "</td><td>" + e.score[j][2] + "</td></tr>"
            }
            console.log(e);
        }
    })
}
function displaySocialWork(){
    let stuID=document.getElementById("stuID").value;
    $.ajax({
        url:"displaySocialWork",
        type:"post",
        data:{
            stuID:stuID
        },
        success:function (e){
            let content = document.getElementById("content");
            content.innerHTML="<table id='table' style='margin-top: 30px;'>" +
                "<tr>" +
                "<td>类型</td><td>内容</td>" +
                "</tr>";
            let table=document.getElementById("table");
            for(let j=0;j<2;j++){
                table.innerHTML+="<tr><td>" + e.data[j][0] + "</td><td>" + e.data[j][1] + "</td></tr>"
            }
            console.log(e);
        }
    })
}