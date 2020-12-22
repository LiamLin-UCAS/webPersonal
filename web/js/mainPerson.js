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