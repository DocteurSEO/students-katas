function startKata (titre, code){
    return `<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO</title>
<style>
body{
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-size: 18px;
    font-family: "Apercu",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif
}
header{
    transition: all 0.5s;
    width: 100%;
    background-color: #141c3a;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;

}

.btn:hover{

color:green;
background-color: #f7f7f7e2;
}
.btn{
    background-color: white;
    border: none;
    font-size: 20px;
    padding: 11px 15px;
    margin-top:20px;
    transition: all 0.5s;
    align-self: flex-end;
    cursor: pointer;
   

}

.flex{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sq{
    width: 250px;
    height: 250px;
    background-color: black;
}

span{
    position: absolute;
    transition: all 0.9s;
    top: 0px;
    left: -40px;
    width: 30px;
    height: 60px;
    background-color:#141c3a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}
    </style></head>

<body class="vsc-initialized" cz-shortcut-listen="true">
    <header>
        <p>${titre}  </p>
        <a href="../2"><button class="btn">Suivant </button></a>
    </header>
     ${code}

<script>
const header = document.querySelector('header')
header.addEventListener('click', (e)=> {
    e.preventDefault();
    if(e.target.classList.contains('btn')){ 
        window.location.href = './2'
    }
    //header.style.position = 'absolute';
    header.style.marginTop = '-100px';
    document.querySelector('span').style.left='0px'

 
})


document.querySelector('span').addEventListener('click', (e)=> {
    e.preventDefault();
    //header.style.position = 'absolute';
    header.style.marginTop = '0px';
    document.querySelector('span').style.left='-40px'

 
})


</script>
</body></html>`
} 

module.exports = startKata