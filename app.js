// Ehliyet alma şartları: 18 yaşını doldurmuş ve lise mezunu olmak
let yas = 18
let mezuniyet = "ortaokul"

if (yas >= 18 && mezuniyet == "lise" || mezuniyet == "universite") { // || uygulayalım.
    console.log("Ehliyet Şartlarını Karşıladığınız için Ehliyet Alabilirsiniz");  
}else if(yas < 18){
    console.log("Ehliyet almak için yaşınız uygun değil");
}
else {
    console.log("Ehliyet Şartlarını Karşılamadığınız için Ehliyet Alamazsınız");
}