const userName=document.querySelector('#User') //input user name 
const submit=document.querySelector('#subt')
const card=document.querySelector('.card')
const image=document.querySelector('#image')
const des=document.querySelector('#discription')
const Followers=document.querySelector('#Followers')
const Following=document.querySelector('#Following')
const Name=document.querySelector('#Name') 
const Bio=document.querySelector('#Bio') 
const Repo=document.querySelector('#Repo') 
const Lacation=document.querySelector('#Location') 

submit.addEventListener('click',function(e){
    e.preventDefault();
    console.log(userName.value)
    const requestUrl=`https://api.github.com/users/${userName.value}`
    const xhr=new XMLHttpRequest();
    xhr.open('GET',requestUrl);
    xhr.onreadystatechange=function(){
        // console.log(xhr.readyState);
        if(xhr.readyState===4){
            // console.log(this.responseText)
            const data=JSON.parse(this.responseText);
            console.log(data)
            // console.log(data.name)
            // console.log(data.avatar_url)
            // console.log(data.followers)
            // console.log(data.following)
            image.innerHTML=`<img width=200px id="userImage" src="${data.avatar_url}" alt="userimage">`;
            Name.innerHTML=`Name: <span>${data.name}</span>`
            Followers.innerHTML=`Followers: <span>${data.followers}</span>`
            Following.innerHTML=`Following: <span>${data.following}</span>`
            Lacation.innerHTML=`Location: <span>${data.location}</span>`
            Repo.innerHTML=`Total Repo: <span>${data.public_repos}</span>`
            Bio.innerHTML=`About me: <span>${data.bio}</span>`
            // // console.log(name)
            // console.log(imageUrl)
            // console.log(followers)
            // console.log(following)

        }
    }
    xhr.send()
})

