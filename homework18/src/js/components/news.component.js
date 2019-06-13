import {
    AuthService
} from './../services/auth.service';
import {
    Routing
} from './../core/routing.service';
import {
    NewsService
} from './../services/news.service';

export class NewsComponent {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();
        this._newsService = new NewsService();

        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);

        this._authUserToken = this._authService.token;
    }

    template(element) {
        return `
            <div class="card" style="width: 30rem;">
                <img class="card-img-top" src="${element.pictures[0].url}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${element.owner.full_name}</h6>
                </div>
            </div>
            `
    }

    async beforeRender() {
        this.newsArray = await this._newsService.getNews(this._authUserToken);
        console.log(this.newsArray);

        this.newsPicturesArray = this.newsArray.forEach(element => {
            this.template(element);
        });
        console.log(this.newsPicturesArray);
        this.newsPicturesList = this.newsPicturesArray.join('');
        this.component = document.querySelector('.card-group');
        component.insertAdjacentHTML('beforeend', this.newsPicturesList);
    }

    render() {
        return `
            <!-- Component html -->
            <div>
                Here is the list of news:       
            </div>

            <div class="card-group">
                
            </div>
        `;

    }
}
