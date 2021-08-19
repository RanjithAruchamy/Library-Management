const welcome = document.getElementById('welcome')
console.log(welcome);
fetch(`https://library-82d9.restdb.io/rest/users/611e4dedd943be7d00057443`,{
    // mode: 'no-cors',
    // credentials: 'include',
    headers:{
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-apikey':'8140ca07206e6ab04702bb724dfe415687a91'
    }
})
    .then(res => res.json())
    .then(data => welcome.innerHTML=`Welcome ${data.name}`)