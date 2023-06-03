const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebarItems = document.querySelector('.sidebar-items');

sidebarBtn.addEventListener('click', function () {
    sidebarItems.classList.toggle('active-sidebar');
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;

    console.log(targetElement)

    if (!sidebarItems.contains(targetElement) && !sidebarBtn.contains(targetElement)) {
        sidebarItems.classList.remove('active-sidebar');
    }
});