const offcanvas = document.querySelector('#offcanvas')
const btnOffcanvas = document.querySelector('#btnOffcanvas')
const btnFecharOffcanvas = document.querySelector('#fecharOffcanvas')


btnOffcanvas.addEventListener('click', (e) => {
    e.preventDefault()
    if (!btnOffcanvas.classList.contains('active')) {
        btnOffcanvas.classList.add('active')
        offcanvas.setAttribute('style', 'display: grid; left: 20%; transition: .6s ease;')
    }
})

btnFecharOffcanvas.addEventListener('click', (e) => {
    e.preventDefault()
    btnOffcanvas.classList.remove('active')
    offcanvas.setAttribute('style', 'left: 100%; transition: .6s ease; display: none;')
})

// expandir / retrair link
const listaDelinksOffcanvas = document.querySelectorAll('.offcanvas-menu-item p')

listaDelinksOffcanvas.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const submenu = link.parentElement.querySelector('.submenu')
        console.log(submenu)
        if(link.classList.contains('active')){
            link.classList.remove('active')
            submenu.setAttribute('style', 'display: none;')
        }else{
            link.classList.add('active')
            submenu.setAttribute('style', 'display: flex;')
        }
    })
})