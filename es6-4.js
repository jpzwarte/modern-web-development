function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        fetch('/api.json')
            .then(response => {
                resolve(response.json());
            })
            .catch(err => {
                reject(err);
            });
    });
}

doSomethingAsync().then(data => {
    console.log(data);
});
