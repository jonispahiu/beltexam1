var users = [9,12,9]
var userDisplay = [
    document.querySelector('user1'),
    document.querySelector('user2'),
    document.querySelector('user3')
]

function addLike(userNumber){
    users[userNumber]++
    userDisplay[userNumber].innerText = users[userNumber] + 'like(s)'
}