// 🌍 Global variables
const row = document.querySelector('.row')
let usersArray = []

const fetchUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')

	const jsonArray = await response.json()
    usersArray = jsonArray

	const display = await displayUsers(jsonArray)
	// console.log(jsonArray)

	// const names = await extractNames(jsonArray)
	// const usernames = extractUsernames(jsonArray)
	// const emails = extractEmails(jsonArray)

	//displayUsers(jsonArray)
}

const displayUsers = (usersArray) => {
    row.innerHTML = ''
	usersArray.forEach((person) => {
		row.innerHTML += `
        <div class="card m-2 shadow">
        <div class="card-body">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text">${person.username}</p>
        <p class="card-text">${person.email}</p>
        <a href="#" class="btn btn-primary">Click</a>
        </div> 
        </div>`
	})
}

const filterUsers = (ev) => {
    // console.log(ev)
    row.innerHTML = ''
    if(ev.key === 'Enter' && ev.target.value.length > 1) {
        const filteredUser = usersArray.filter(
            user => {
                if(user.name.toLowerCase().includes(ev.target.value.toLowerCase())){
                    console.log(user.name)
                    row.innerHTML = `
                    <div class="card m-2 shadow">
                    <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.username}</p>
                    <p class="card-text">${user.email}</p>
                    <a href="#" class="btn btn-primary">Click</a>
                    </div> 
                    </div>`
                }

            }
        )
        return filteredUser   
    }
}

// const extractNames = (usersArray) => {
// 	const names = usersArray
//     .map((user) => user.name)
//     .filter((user) => {
//         if(user === user.name){
//             console.log('heeel yeah')
//         }
//     })
// 	// console.log(names)
    
//     return names
// }

// const displayFilteredUsers = (value) => {
//     // array.filter(name => {
//     //     if(ev.target.value === user.name) {
//     //         console.log(name)
//     //     }
//     // })
//     console.log('heeeey' + value)
// }

// const extractUsernames = (usersArray) => {
// 	const usernames = usersArray.map((user) => user['username'])
// 	console.log(usernames)
// 	//return usernames
// }

// const extractEmails = (usersArray) => {
// 	const emails = usersArray.map((user) => user['email'])
// 	console.log(emails)
// 	//return emails
// }

// const displayFilteredUsers = (ev) => {

// }

window.onload = () => {
	fetchUsers()
}
