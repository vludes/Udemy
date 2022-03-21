window.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabcontent = document.querySelectorAll('.tabcontent'),
        tabparent = document.querySelector('.tabheader__items');

    console.log(tabparent);

    function hideContent() {
        tabcontent.forEach(item => {
            item.style.display = 'none';
        });
    };

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    });

    function showContent(i = 1) {
        tabcontent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };

    hideContent();
    showContent();

    tabparent.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                };

            });

        };
    });
});

