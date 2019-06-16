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
        this.template = this.template.bind(this);

        this._authUserToken = this._authService.token;
    }

    template({ pictures, owner }) {
        return `
            <div class="card" style="width: 30rem;">
                <img class="card-img-top" src="${pictures[0].url}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${owner.full_name}</h6>
                </div>
            </div>
            `
    };

    async beforeRender() {
        const { news } = await this._newsService.getNews(this._authUserToken);

        this.newsPicturesArray = news.reduce((sum, el) => { 
            return sum + this.template(el)
         }, '');
    };

    render() {
        return `
            <!-- Component html -->
            <div>
                Here is the list of news:   
            </div>
            <div class="card-group">
                ${this.newsPicturesArray}
            </div>
        `;
    };
};
