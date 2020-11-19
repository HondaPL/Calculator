var c = true;
var a = 0;
var b = "0";
var document;
         function append(b, a) {
             
             if (c == true) {
                 if(b.length < 14) {

             if(a == '.'){
                 if(b.lastIndexOf('.') == '-1') {
                 document.getElementById("result").innerHTML = b + a;
                 }
             } else if(b == '0'){
                 document.getElementById("result").innerHTML = a;
                 acc();
             } else{
                 document.getElementById("result").innerHTML = b + a;
                 acc();
             }
                 }
             } else if(a == '.'){
                 document.getElementById("result").innerHTML = '0' + a;
             } else {
                 document.getElementById("result").innerHTML = a;
             }
                 c = true;
            a = 0;
            b = "0";
             }
            
        function add() {
            a = document.getElementById("result").innerHTML; 
            b = "+";
            c = false;
            document.getElementById("add").style.cssText = "background:white; color:orange;";
            document.getElementById("sub").style.cssText = "background:orange; color:white;";
            document.getElementById("mul").style.cssText = "background:orange; color:white;";
            document.getElementById("div").style.cssText = "background:orange; color:white;";
        }
            function sub() {
            a = document.getElementById("result").innerHTML; 
            b = "-";
            c = false;
                document.getElementById("sub").style.cssText = "background:white; color:orange;";
                document.getElementById("add").style.cssText = "background:orange; color:white;";
                document.getElementById("mul").style.cssText = "background:orange; color:white;";
                document.getElementById("div").style.cssText = "background:orange; color:white;";
        }
            function mul() {
            a = document.getElementById("result").innerHTML; 
            b = "*";
            c = false;
                document.getElementById("mul").style.cssText = "background:white; color:orange;";
                document.getElementById("add").style.cssText = "background:orange; color:white;";
                document.getElementById("sub").style.cssText = "background:orange; color:white;";
                document.getElementById("div").style.cssText = "background:orange; color:white;";
        }
            function div() {
            a = document.getElementById("result").innerHTML; 
            b = "/";
//            document.getElementById("result").innerHTML = '0';
                document.getElementById("div").style.cssText = "background:white; color:orange;";
                document.getElementById("add").style.cssText = "background:orange; color:white;";
                document.getElementById("sub").style.cssText = "background:orange; color:white;";
                document.getElementById("mul").style.cssText = "background:orange; color:white;";
                c = false;
        }
            
            function math() {
                var z = document.getElementById("result").innerHTML;
                if(b == "+"){
                    document.getElementById("result").innerHTML = parseFloat(z) + parseFloat(a);
                    document.getElementById("add").style.cssText = "background:orange; color:white;";
                } else if(b == '-') {
                    document.getElementById("result").innerHTML = parseFloat(a) - parseFloat(z);
                    document.getElementById("sub").style.cssText = "background:orange; color:white;";
                } else if(b == '*') {
                    document.getElementById("result").innerHTML = parseFloat(z) * parseFloat(a);
                    document.getElementById("mul").style.cssText = "background:orange; color:white;";
                } else if(b == '/') {
                    if(z == '0') {
                        document.getElementById("result").innerHTML = 'ERROR';
                    } else {
                        document.getElementById("result").innerHTML = parseFloat(a) / parseFloat(z);
                    }
                    document.getElementById("div").style.cssText = "background:orange; color:white;";
                }
                c = false;
                a = 0;
                document.getElementById("result").innerHTML = Math.round(document.getElementById("result").innerHTML*10000)/10000;
                if(document.getElementById("result").innerHTML.length > 15) {
                    document.getElementById("result").innerHTML = "Too long";
                }
                
            }
function minusplus() {
    var z = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = -parseFloat(z)
}

function acc(){
    if(document.getElementById("result").innerHTML != '0') {
    document.getElementById("ac").innerHTML = "C";
    }
}

function ca(){
    document.getElementById("result").innerHTML='0';
    document.getElementById("ac").innerHTML = "AC";
    document.getElementById("div").style.cssText = "background:orange; color:white;";
                document.getElementById("add").style.cssText = "background:orange; color:white;";
                document.getElementById("sub").style.cssText = "background:orange; color:white;";
                document.getElementById("mul").style.cssText = "background:orange; color:white;";
}          