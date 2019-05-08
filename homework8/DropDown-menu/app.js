let menuItem = document.querySelector('.menu');
let arrayOfDivInMenu = Array.from(menuItem.querySelectorAll('.dropdown-menu'));

menuItem.addEventListener('click', function ({target}) {
    //console.log(target.tagName);
    let targetedDiv = '';

    function manageDropdown(targetedDiv) {
        if (!targetedDiv.classList.contains('d-none')) {
            targetedDiv.classList.add('d-none');
        } else {
            arrayOfDivInMenu.forEach((el) => {
                el.classList.add('d-none');
            });

            targetedDiv.classList.remove('d-none');
        };
    };

    if (target.tagName === 'LI') {
        if (target.classList.contains("dropdown-item")) {
            targetedDiv = target.querySelector('div');
            manageDropdown(targetedDiv);
        };
    };

    if (target.tagName === 'SPAN') {
        if (target.closest('li').classList.contains("dropdown-item")) {
            targetedDiv = target.closest('li').querySelector('div');
            manageDropdown(targetedDiv);
        };
    };
});