import { render } from "./render";

export const editUsers = () => { 
	const tbody = document.getElementById('table-body'),
	 form = document.querySelector('form'),
		nameInput=form.querySelector('#form-name'),
		emailInput = form.querySelector('#form-email'),
		childrenInput = form.querySelector('#form-children');

	tbody.addEventListener('click', (e) => { 
		e.preventDefault();
		if (e.target.closest('.btn-edit')) { 
			const tr = e.target.closest('tr');
			const id = tr.dataset.key;
			console.log(id);

			userService.getUser(id)
				.then((res) => { 
					console.log(res);
					nameInput.value = res.name;
					emailInput.value = res.email;
					childrenInput.checked = res.children;

					form.dataset.method = id;
				});
		}
	});
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (form.dataset.method) {
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenInput.checked,
				permissions: nameInput.checked,
			};
			console.log(user);
			console.log(form.dataset.method);
			
			userService.editUser(form.dataset.method,user)
				.then(() => { 
					userService.getUsers()
						.then(users => {
							render(users);
							form.reset();
							form.removeAttribute('data-method');
						});
				});
		 }
		
	 });
}