document.addEventListener("DOMContentLoaded", () => {

    /* تأثير ظهور العناصر عند النزول */
    const items = document.querySelectorAll(".card, .preview img, .video iframe, .manual p");

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.7s ease";
    });

    const revealItems = () => {
        items.forEach(item => {
            const top = item.getBoundingClientRect().top;

            if(top < window.innerHeight - 100){
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealItems);
    revealItems();



    /* زر التحميل */
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {

            /* إذا وضعت رابط حقيقي لن يمنع التحويل */
            const link = btn.getAttribute("href");

            if(link === "#" || link === "" || link === null){
                e.preventDefault();
                alert("ضع رابط التحميل داخل href أولاً");
            }

        });
    });



    /* تغيير سنة الفوتر تلقائيًا */
    const footer = document.querySelector("footer p");

    if(footer){
        footer.innerHTML = "© " + new Date().getFullYear() + " Xenon New Tab";
    }

});