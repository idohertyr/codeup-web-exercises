const wait = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};

const lastPush = (user) => {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': 'token 54cdcdbb1053ed03bbcd531143a474e4d9109d2c'}})
            .then(response => response.json()
                .then(event => {
                    for (let item of event)
                        if (item.type === 'PushEvent') {
                            return item.created_at;
                        }
                }));
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

console.log(lastPush('xaviersalazar'));