alert("Máy đã ra 1 số từ 1 đến 100 mời bạn đoán!!!");
var batky = Math.floor(Math.random() * 100) + 1;
var soLanDoan=1;
function choilai() {
    location.reload(); //load lại trang
}

function resetso() {
    var lamlai = document.getElementById('nhap').value = "";
}

function doan() {

    var doanso = document.getElementById('nhap').value;
    //var doanso = prompt("Mời bạn nhập số: ", "số đoán");
    if(doanso > 100) {
        alert("số cần đoán nằm trong khoảng từ 1 đến 100, mời bạn đoán lại!!!");
    }
    if (doanso == batky && (soLanDoan < 8))
    {
        var doi = batky.toString(10);
        document.getElementById('hien').innerHTML = "bạn đã đoán trúng số cần tìm là "+doi;				
        document.getElementById('hien1').innerHTML ="";
        const div = document.querySelector('#gift')
        div.style.display = 'block';
        document.getElementById('nhap').disabled = true;
        document.getElementById('xoa').disabled = true;
        document.getElementById('doan').disabled = true;
    }
    else {
        if(soLanDoan > 7)
        {
            var doi = batky.toString(10);
            document.getElementById('hien').innerHTML ="Thua!!! Bạn đã hết 7 lượt chơi! số cần đoán là: "+batky;
            document.getElementById('hien1').innerHTML ="";
            document.getElementById('nhap').disabled = true;
            document.getElementById('xoa').disabled = true;
            document.getElementById('doan').disabled = true;
            const div = document.querySelector('#loser')
            div.style.display = 'block';
        }
        else {
            soLanDoan.toString(10);
            document.getElementById('hien1').innerHTML ="Bạn đoán lần thứ "+soLanDoan.toString(10);
            soLanDoan = soLanDoan+1;
            if(doanso < batky)
        {
            document.getElementById('hien').innerHTML ="Bạn đoán sai! <br/> số máy > số của bạn";
        }
            else if(doanso > batky)
        {
            document.getElementById('hien').innerHTML ="Bạn đoán sai! <br/> số máy < số của bạn";
        }
            else {
                document.getElementById('nhap').disabled=true;
            }
            parseInt(soLanDoan, 10);
        }
    }
}
function huongdan() {
    alert("Sử dụng thuật toán: Binary Search, Bạn có 7 lượt chơi!!!!")
}

function randomgame() {
    alert("Game đoán số từ 1 đến 100")
}