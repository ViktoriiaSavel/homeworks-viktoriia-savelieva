// Styles
import './../css/style.css';
// Libs
import 'jquery';

import {
    NewsService
} from './services/news.service';

import {
    NewsUI
} from './view/newsUI.service';

import {
    countrySelect,
    categorySelect,
    searchInput
} from './view/uiElements.config';

import {
    LoaderUI
} from './view/loaderUI.service';

import {
    NotificationUI
} from './view/notificationUI.service';

import { debounce } from 'lodash';

const newsService = new NewsService();
const newsUI = new NewsUI();
const loaderUI = new LoaderUI('.news-wrap .row');
const notificationUI = new NotificationUI('.news-wrap .row');

const onSearchChangeWithDebounce = debounce(onSearchChange, 500);

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('keyup', onSearchChangeWithDebounce);

// Handlers for events -- пишем функции-обработчики, которые нужны для addEventListener
function onSelectChange() {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.log('Choose the category and country')

    loaderUI.setLoader()
    newsService.getNewsByCountryAndCatigory(({
        articles
    }) => {
        loaderUI.removeLoader()
        if (articles.length) {
            newsUI.addNewsToView(articles)
        } else {
            notificationUI.showNotification('Not results')
        }
    }, country, category)
}

function onSearchChange() {
    if (searchInput.value.length > 2) {
        loaderUI.setLoader()

        newsService.getNewsBySearchQuery(({
            articles
        }) => {
            loaderUI.removeLoader()
            if (articles.length) {
                newsUI.addNewsToView(articles)
            } else {
                notificationUI.showNotification('Not results')
            }
        }, searchInput.value)
    };

    if (!searchInput.value.length) {
        onSelectChange()
    };
};