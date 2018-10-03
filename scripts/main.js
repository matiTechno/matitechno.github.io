var myHeading = document.querySelector('h1')

var flag = false
var original = myHeading.textContent
var tcontent = original

myHeading.onclick = function()
{
    flag = !flag

    if(flag)
    {
        myHeading.textContent = 'Hello world!'
    }
    else
        myHeading.textContent = tcontent

}

var button = document.querySelector('button')

function setUserName()
{
    var name = prompt('Please enter your name.')
    localStorage.setItem('name', name)
    tcontent = original + 'welcome ' + name
    myHeading.textContent = tcontent
}

button.onclick = setUserName

if(!localStorage.getItem('name'))
{
    setUserName()
}
else
{
    var storedName = localStorage.getItem('name')
    tcontent = original + 'welcome ' + storedName
    myHeading.textContent = tcontent
}
