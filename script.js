const usernamInput = document.querySelector('.username')
const passWorde = document.querySelector('.password')
const modal = document.querySelector('.modal')

function dataValidation(){
    let userNamVal=usernamInput.value
    let passWordVal=passWorde.value

    if(userNamVal.length < 12 || passWordVal.length < 8)
    {
        modal.style.background='rgb(223, 28, 28)'
        modal.innerHTML='لطفا اطلاعات خود را به درستی وارد کنید'
        modal.style.display='inline'
    }else
    {
        modal.style.background='green'
        modal.innerHTML='با موفقیت وارد شدید'
        modal.style.display='inline'
    }
    setTimeout(() => {
        modal.style.display='none'
    },3000)
}
function alert(){
    let aLeArt=document.querySelector(".hoshdar")
    aLeArt.classList.add("click")
}