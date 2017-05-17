export function events(){
    return fetch('https://api.github.com/events').then(ret=>ret.json())
}