class VideoPlayerBasic {
    constructor(settings) {
        // "сольем" наши дефолтные сетинги с теми, что пришли
        this.settings = Object.assign(VideoPlayerBasic.getDefaultSettings(), settings);
    };

    init() {
        // сделаем проверку на то, что пришли в настройках непустые строки
        if (!this.settings.videoUrl) return console.error('NOT videoUrl');
        if (!this.settings.videoPlayerContainer) return console.error('NOT videoPlayerContainer');

        // создадим разметку на странице
        this.addTemplate();
        // найдем эл-ты для управления видосиком
        this.setElements();
        // обработчики
        this.setEvents();
    };

    addTemplate() {
        const template = this.createTemplate();
        const container = document.querySelector(this.settings.videoPlayerContainer);

        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('NOT videoPlayerContainer');
    };

    setElements() {
        this.container = document.querySelector(this.settings.videoPlayerContainer);
        this.video = this.container.querySelector('video');
        this.toggleBtn = this.container.querySelector('.toggle');
        this.progress = this.container.querySelector('.progress__filled');
        this.progressContainer = this.container.querySelector('.progress');
        this.volumeSlider = this.container.querySelector('.volume');
        this.playbackRateSlider = this.container.querySelector('.playbackRate');
        this.skipBtn = this.container.querySelectorAll('.skip');
        this.videoPlayer = this.container.querySelector('.viewer');
    };

    setEvents() {
        this.video.addEventListener('click', this.toggleVideo);
        this.toggleBtn.addEventListener('click', this.toggleVideo);
        this.progressContainer.addEventListener('click', (e) => this.scrub(e));
        this.progressContainer.addEventListener('mousedown', () => this.isMouseDown = true);
        this.progressContainer.addEventListener('mouseup', () => this.isMouseDown = false);
        this.progressContainer.addEventListener('mousemove', (e) => {
            this.isMouseDown && this.scrub(e)
        });
        this.video.addEventListener('timeupdate', this.handleProgress);
        this.volumeSlider.addEventListener('change', (e) => this.changeVolume(e));
        this.playbackRateSlider.addEventListener('change', (e) => this.changePlaybackRate(e));
        this.skipBtn.forEach((el) => {el.addEventListener('click', (e) => this.changeProgress(e))});
        this.videoPlayer.addEventListener('dblclick', (e) => this.changeProgressByDblClick(e));
    };

    toggleVideo = () => {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggleBtn.textContent = this.video.paused ? ' || ' : ' ► ';
        this.video[method]();
    };

    scrub(e) {
        this.video.currentTime = (e.offsetX / this.progressContainer.offsetWidth) * this.video.duration;
    };

    handleProgress = () => {
        const {
            currentTime,
            duration
        } = this.video;
        const percent = (currentTime / duration) * 100;
        this.progress.style.flexBasis = `${percent}%`;
    };

    changeVolume = (e) => {
        this.video.volume = e.target.valueAsNumber;
    };

    changePlaybackRate = (e) => {
        this.video.playbackRate = e.target.valueAsNumber;
    };

    changeProgressByDblClick(e) {
        console.log(e);
        if (e.offsetX > e.x/2) {
            this.video.currentTime += this.settings.data_skip;
        } else {
            this.video.currentTime -= this.settings.data_skip;
        };
    };

    changeProgress(e) {
        this.video.currentTime += Number(e.currentTarget.getAttribute('data-skip'));   
    };

    createTemplate() {
        const {
            videoUrl,
            volume,
            data_skip
        } = this.settings;

        return `
        <div class="player">
            <video class="player__video viewer" src="${videoUrl}"> </video>
            <div class="player__controls">
                <div class="progress">
                    <div class="progress__filled"></div>
            </div>
            <button class="player__button toggle" title="Toggle Play">►</button>
            <input type="range" name="volume" class="player__slider volume" min=0 max="1" step="0.05" value="${volume}">
            <input type="range" name="playbackRate" class="player__slider playbackRate" min="0.5" max="2" step="0.1" value="1">
            <button data-skip="-${data_skip}" class="player__button skip">« ${data_skip}s</button>
            <button data-skip="${data_skip}" class="player__button skip">${data_skip}s »</button>
            </div>
        </div>
        `
    };

    static getDefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: '',
            volume: 1,
            data_skip: 1
        };
    };
};

const myPlayer = new VideoPlayerBasic({
    videoUrl: 'video/mov_bbb.mp4',
    videoPlayerContainer: 'body',
    volume: 2,
    data_skip: 2
});

myPlayer.init();