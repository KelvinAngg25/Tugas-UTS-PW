var listKeahlian = [{nama : "Python", kategori1 : "programming", kategori2 : "-", audio : "Asset/audiopython.wav", gambar : "Asset/python.png"},
    {nama : "java", kategori1 : "Programming", kategori2 : "-", audio : "Asset/audiojava.wav", gambar : "Asset/java.png"},
    {nama : "canva", kategori1 : "Desain", kategori2 : "-", audio : "Asset/audiocanva.wav", gambar : "Asset/canva.png"},
    {nama : "winbox", kategori1 : "Networking", kategori2 : "-", audio : "Asset/audiowinbox.wav", gambar : "Asset/winbox.png"},
    {nama : "photoshop", kategori1 : "Desain",kategori2 : "-", audio : "Asset/audiophotoshop.wav", gambar : "Asset/photoshop.png"},
    {nama : "premier", kategori1 : "Animation",kategori2 : "-", audio : "Asset/audiopremier.wav", gambar : "Asset/premierpro.png"},
    {nama : "javascript", kategori1 : "Website",kategori2 : "programming", audio : "Asset/audiojs.wav", gambar : "Asset/js.webp"},
    {nama : "html", kategori1 : "Website",kategori2 : "-", audio : "Asset/audiohtml.wav", gambar : "Asset/html.png"},
    {nama : "css", kategori1 : "Website",kategori2 : "-", audio : "Asset/audiocss.wav", gambar : "Asset/css.png"}
]
var listKategori =["All","Website","Programming","Animation","Desain","Networking"]

var listIsiHtml = ["#isiKeahlian1","#isiKeahlian2","#isiKeahlian3"]

function filter(kategori) {
    var ctrIsi = 0;
    var isiFilter = 0;
    var isiHtml = 0;
    var pengisianBaris = document.querySelector(listIsiHtml[ctrIsi]);
    for (var i = 0; i < listKategori.length; i++) {
        if (listKategori[i] != kategori) {
            var gantiIsi = document.querySelector("#" + listKategori[i])
            gantiIsi.classList.add("itemkategori")
            gantiIsi.classList.remove("kategoridipilih")
            if (listKategori[i] == "Desain") {
                gantiIsi.innerHTML = `
                    <img src="Asset/${listKategori[i]}.png" alt="">
                    <p>${listKategori[i]} Grafis</p>
                `    
            } else {
                gantiIsi.innerHTML = `
                    <img src="Asset/${listKategori[i]}.png" alt="">
                    <p>${listKategori[i]}</p>
                `
            }
        } else {
            var gantiIsi = document.querySelector("#" + listKategori[i])
            gantiIsi.classList.remove("itemkategori")
            gantiIsi.classList.add("kategoridipilih")
            if (listKategori[i] == "Desain") {
                gantiIsi.innerHTML = `
                    <img src="Asset/${listKategori[i]}Pilih.png" alt="">
                    <p>${listKategori[i]} Grafis</p>
                `    
            } else {
                gantiIsi.innerHTML = `
                    <img src="Asset/${listKategori[i]}Pilih.png" alt="">
                    <p>${listKategori[i]}</p>
                `
            }
        }
    }
    for (var i = 0 ; i < listIsiHtml.length ; i++) {
        document.querySelector(listIsiHtml[i]).innerHTML = "";
    }
    if (kategori != "All") {
        for (var i = 0; i < listKeahlian.length ; i++) {
            if (isiFilter % 3 == 0 && isiFilter != 0) {
                ctrIsi++;
                pengisianBaris = document.querySelector(listIsiHtml[ctrIsi]);
            }
            if (listKeahlian[i].kategori1 == kategori || listKeahlian[i].kategori2 == kategori) {
                isiFilter++;
                pengisianBaris.innerHTML += `
                    <div class="container itemkeahlian">
                        <img src="${listKeahlian[i].gambar}" alt="">
                        <audio class="audio" controls>
                            <source src="${listKeahlian[i].audio}" type="audio/wav">
                        </audio>
                    </div>
                `
            }
        }
    } else {
        for (var i = 0; i < listKeahlian.length ; i++) {
            if (i % 3 == 0 && i != 0) {
                ctrIsi++;
                pengisianBaris = document.querySelector(listIsiHtml[ctrIsi]);
            }
            pengisianBaris.innerHTML += `
                <div class="container itemkeahlian">
                    <img src="${listKeahlian[i].gambar}" alt="">
                    <audio class="audio" controls>
                        <source src="${listKeahlian[i].audio}" type="audio/wav">
                    </audio>
                </div>
            `
        }
    }
}
var pindahUtama = document.querySelector("#utama")
var pindahForm = document.querySelector("#form")
var halamanForm = document.querySelector("#halamanform");
var halamanUtama = document.querySelector("#halamanutama");
var inputNama = document.querySelector("#nama");
var inputEmail = document.querySelector("#email");
var boxKonfirmasi = document.querySelector("#konfirmasi");
var boxPengisian = document.querySelector("#boxform");
pindahForm.addEventListener('click', function() {
    document.querySelector("#nama").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#perusahaan").value = "";
    document.querySelector("#notes").value = "";
    halamanForm.classList.remove("hidden");
    halamanUtama.classList.add("hidden");
    boxPengisian.classList.remove('hidden');
})

pindahUtama.addEventListener('click', function() {
    halamanForm.classList.add("hidden");
    halamanUtama.classList.remove("hidden");
    AOS.refreshHard();
})


function kirimPesan() {
    if (inputNama.value != "" && inputEmail.value != "") {
        boxKonfirmasi.classList.remove('hidden')
        boxPengisian.classList.add('hidden')
        boxKonfirmasi.innerHTML = `
        <div class="container col50 boxform" style="border: 1px solid cyan;">
            <div class="col100" style="text-align: center; align-items:center;">
                <img src="Asset/berhasil.png" alt="" width="150px;" id="centang"><br><br>
                <p>Terima kasih, ${inputNama.value}.</p>
                <p>Pesan kamu sudah kami terima.</p>
                <p>Kami akan segera menghubungi kamu melalui ${inputEmail.value}.</p>
                <p>— Kelvin Angjaya</p><br>
                <button type="button" onclick="kembaliForm()" class="isibox tombol">Kembali Ke Halaman Pengisian</button><br><br>
                <button type="button" onclick="kembaliUtama()" class="isibox tombol">Kembali Ke Halaman Utama</button><br>
            </div>
        </div>`
    } else {
        if (inputNama.value == "") {
            inputNama.classList.add('error');
        }
        if (inputEmail.value == "") {
            inputEmail.classList.add('error');
        }
    }
}

function kembaliForm() {
    document.querySelector("#nama").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#perusahaan").value = "";
    document.querySelector("#notes").value = "";
    boxKonfirmasi.classList.add('hidden');
    boxPengisian.classList.remove('hidden');
}

function kembaliUtama() {
    boxKonfirmasi.classList.add('hidden')
    halamanUtama.classList.remove('hidden')
    AOS.refreshHard();
}

window.addEventListener("scroll", function() {
    var tombol = document.querySelector("#panah");
    if (window.scrollY < 300) {
        tombol.classList.add("hidden");
    } else {
        tombol.classList.remove("hidden");
    }
})



inputNama.addEventListener('blur',function inputError() {
    if (inputNama.value == "") {
        inputNama.classList.add('error');
    } else {
        inputNama.classList.remove('error');
    }
});


inputEmail.addEventListener('blur',function inputError() {
    if (inputEmail.value == "") {
        inputEmail.classList.add('error');
    } else {
        inputEmail.classList.remove('error');
    }
});

function toggleMenu() {
    var menu = document.querySelector("#pilihannavbar");
    menu.classList.toggle("aktif");
}

filter("All");