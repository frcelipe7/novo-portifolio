document.addEventListener("DOMContentLoaded", () => {
    const listaImagens = [
        'afma_01.png',
        'bg_04_tiny.jpg',
        'minha_foto.jpg',
    ];
    const listaLinks = [
        'https://filhasdomel.github.io/site/',
        'https://cursos.fluencyacademy.io/login',
        'https://play.hbomax.com/page/urn:hbo:page:home',
    ]
    const textsPortifolio = document.querySelectorAll("#portifolio .content .content_trabalho .text_desc_trabalho .content_description_portifolio");
    const imageContent = document.querySelector("#portifolio .content .img_content");
    const buttonsAnteriorProximo = document.querySelectorAll("#portifolio .content .mudar_buttons .button");
    const linkContentImage = document.querySelector("#portifolio .content .content_trabalho .link_image");
    let index = 0;

    function slideAnterior(index) {
        textsPortifolio.forEach(desativarText => {desativarText.style.display = 'none';});
        const image = listaImagens[index];
        const text = textsPortifolio[index];
        linkContentImage.href = listaLinks[index];
        text.style.display = 'block';
        imageContent.style.animation = '';
        imageContent.setAttribute("slidingAnterior", '');
        imageContent.addEventListener('animationend', () => {
            imageContent.removeAttribute('slidingAnterior');
            imageContent.style.backgroundImage = `url("images/portifolio/${image}")`;
            imageContent.style.animation = 'backgroundOpacity';
            imageContent.style.animationDalay = '.5s';
            imageContent.style.animationDuration = '.5s';
        });
    };
    
    function slideProximo(index) {
        textsPortifolio.forEach(desativarText => {desativarText.style.display = 'none';});
        const image = listaImagens[index];
        const text = textsPortifolio[index];
        linkContentImage.href = listaLinks[index];
        text.style.display = 'block';
        imageContent.style.animation = '';
        imageContent.setAttribute("slidingProximo", '');
        imageContent.addEventListener('animationend', () => {
            imageContent.removeAttribute('slidingProximo');
            imageContent.style.backgroundImage = `url("images/portifolio/${image}")`;
            imageContent.style.animation = 'backgroundOpacity';
            imageContent.style.animationDalay = '.5s';
            imageContent.style.animationDuration = '.5s';
        });
    };
    
    buttonsAnteriorProximo.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList[0] == "proximo" && index < listaImagens.length - 1) index++, slideProximo(index);
            if (button.classList[0] == "anterior" && index > 0) index--, slideAnterior(index);
        });
    });
});