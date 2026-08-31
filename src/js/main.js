function qr(quant) {
    var cc = document.getElementById("cc");
    if (quant == '1') {
        cc.src = "./src/img/cirquito_s1.png";
        document.getElementById('R2').style.display = 'none';
        document.getElementById('R3').style.display = 'none';
    }
    else if (quant == '2') {
        cc.src = "./src/img/cirquito_s2.png";
        document.getElementById('R2').style.display = 'block';
        document.getElementById('R3').style.display = 'none';
    }
    else if (quant == '3') {
        cc.src = "./src/img/cirquito_s3.png";
        document.getElementById('R2').style.display = 'block';
        document.getElementById('R3').style.display = 'block';
    }
}
// function forma(f){
//     var cc=document.getElementById("cc");
//     if(f==='serie'){

//     }else if (f==='par'){

//     }
// }
function calc() {
    let q = parseInt(document.getElementById('q').value);
    let t = parseInt(document.getElementById('t').value);
    let i = parseInt(document.getElementById('i').value)
    let r1 = parseInt(document.getElementById('r1').value)
    var r2 = parseInt(document.getElementById('r2').value);
    var r3 = parseInt(document.getElementById('r3').value);
    let u = parseInt(document.getElementById('u').value);
    let p = parseInt(document.getElementById('p').value);
    let te = parseInt(document.getElementById('te').value);

    let campo = document.activeElement.id;//campo alterado

    r1 = (r1) ? r1 : 0;
    r2 = (r2) ? r2 : 0;
    r3 = (r3) ? r3 : 0;
    let rt = r1 + r2 + r3;
    let c=false;

    if (campo == 'q' || campo == 't') {
        if (t > 0) {
            i = q / t;
            if (i > 0 && rt > 0 && u>0) {
                u = i * rt;
            }
        }
        c=true;
    } else if (campo == 'i' && i > 0) {
        if (t > 0) {
            q = i * t;
        }
        if (rt > 0) {
            u = i * rt;
        }
        c=true;
    } else if (campo == 'u' && u > 0) {
        if (rt > 0) {
            i = u / rt;
            if (t > 0) {
                q = i * t;
            }
        }
        c=true;
    }else if (campo == 'r1'||campo == 'r2'||campo == 'r3') {
        rt = r1 + r2 + r3;
        if (i > 0 && rt > 0) {
            u = i * rt;
        } else if (u > 0 && rt > 0) {
            i = u / rt;
            if (t > 0) {
                q = i * t;
            }
        }
        c = true;
    }

    if (!c){
        if (i > 0 && rt > 0) {
            u = i * rt;
        } else if (u > 0 && rt > 0) {
            i = u / rt;
        }

        if (i > 0 && t > 0) {
            q = i * t;
        } else if (q > 0 && t > 0) {
            i = q / t;
        }
        if(u>0&&i>0){
            p=u*i;
        }
    }

    document.getElementById('q').value = q||'';
    document.getElementById('t').value = t||'';
    document.getElementById('i').value = i||'';
    document.getElementById('u').value = u||'';
    document.getElementById('rt').value = rt||'';
    document.getElementById('p').value = p || '';
}