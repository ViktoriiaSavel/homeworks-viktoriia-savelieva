// класс для реализации функционала по добавланию нотификаций на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашей нотификашки
// имея примеры LoaderUI и NewsUI
// нужно реализовать set.... и remove.... для управления этим эл-том
class NotificationUI {
    constructor() {
        this.container = document.querySelector('.news-wrap .row');
    };

    setNotificationNoSearchResults() {
        this.container.innerHTML = 'No Search Results';
    };

    // removeNotification() {
    //     this.container.innerHTML = '';
    // };
};