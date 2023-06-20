import { render } from "./render";

export const removeUsers = () => {
	const tbody = document.getElementById('table-body');

	tbody.addEventListener('click', (e) => { 
		e.preventDefault();
		if (e.target.closest('.btn-remove')) { 
			const tr = e.target.closest('tr');
			const id = tr.dataset.key;
			console.log(id);
			userService.removeUser(id)
				.then(() => { 
					userService.getUsers()
						.then(users => {
							console.log(users);
							render(users)
						});
				});
		}
	});
 };