 var form = document.getElementById("form");
    form.onsubmit = function(e){
        e.preventDefault();
        alert("Başvurunuz başarıyla gönderilmiştir!");
        form.reset();
    };