class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText);
            callback(resp);
        });
    };
};

