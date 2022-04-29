$(document).ready(function(){
    var i=1;
    $(#"btn2").click(function(){
        $("myModal").modal();
    });

    function kiemtraTen(){
        var i=1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val()==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi ký tự đầu viết hoa không xài số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraTen);

    function kiemtraSoAo(){
        var mauKT= /^\d*$/;
        if($("#Ao").val()==""){
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Ao").val())){
            $("#tbAo").html("Số từ 1-9");
            return true;
        }else{
            var soAo=$("#Ao").val();
            if(soAo<1||soAo>9){
                $("#tbAo").html("Số từ 1-9");
            }else{
                $("#tbAo").html("*");
                return true;
            }
        }
        
    }
    $("#Ao").blur(kiemtraSoAo);

    function kiemtraNTT(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("Không được để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        return false;
    }
    $("#tbNTT").html("*");
    return true;
    }
    $("#NTT").blur(kiemtraNTT);






})