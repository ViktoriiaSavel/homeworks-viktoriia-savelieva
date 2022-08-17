import {
    WinnersService
} from './../services/winners.service'

export class WinnersComponent {
    constructor() {
        this.winnersService = new WinnersService();
        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
        this.loadWinners = this.loadWinners.bind(this);
    }

    template(url) {
        return `
        <div class="card">
            <img class="card-img-top" src="${url}" alt="Card image cap">
         </div>
        `
    }
    // <div class="card-body">
    //    <h6 class="card-title">${owner.full_name}</h6>
    // </div>

    async loadWinners() {
        const {
            winners
        } = await this.winnersService.getWinners(this.part, 15);

        const winnersArrayByPart = winners.map((el) => { 
            const imagesArray = el.member_id.images;
                
            if (imagesArray[0]) {
                return this.template(imagesArray[0].image_basic.url);
            };
            return '';
        });
        return winnersArrayByPart;
    };
    
    addWinners(winnersArrayByPart) {
        return this.winnersList = this.winnersList + winnersArrayByPart.join('');
    }
        
    async beforeRender() {
        this.part = 1;
        this.winnersList = '';

        const winnersArrayByPart = await this.loadWinners();
        this.addWinners(winnersArrayByPart);
    }

    render() {
        return `
            <div>
                Here is the list of winners:   
            </div>
            <div id="winners-list-div" class="card-columns">
                ${this.winnersList}
            </div>
            <button id="load-more-btn" class="btn-primary">Load more</button>`
    }

    afterRender() {
        const loadMoreBtn = document.getElementById('load-more-btn');

        loadMoreBtn.addEventListener("click", async () => {
            this.part += 1;

            const winnersArrayByPart = await this.loadWinners(this.part);
            this.addWinners(winnersArrayByPart);

            const loadMoreDiv = document.getElementById('winners-list-div');
            loadMoreDiv.innerHTML += this.winnersList;
        })
    }
}
