export class UserService { 

	constructor(url) {
		this.url = url;
	 }

	sendData(url, data = {}, { method, contentType}) {
		return fetch(url, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				'Content-type': contentType,
			},
		}).then(datas=>datas.json())
			.catch(dataError => console.log("Ошибка", dataError))
			.finally(() => console.log("Операция закончена")
			);
	}
	
 getData(url) {
		return fetch(url)
			.then(data => data.json())
			.catch(errorData => console.log(errorData))
			.finally(() => console.log('Сессия завершена')
			);
	}
	
	getUsers() { 
		return this.getData(`${this.url}`);
	}

	addUser(user) {
		return this.sendData(this.url, user, { method:"POST",contentType:'application/json; charset=UTF-8'});
	}

	removeUser(id) { 
		return this.sendData(`${this.url}/${id}`, {}, { method:"DELETE",contentType:'application/json; charset=UTF-8'});
	}

	cangeUser(id,data) { 
		return this.sendData(`${this.url}/${id}`, data, { method:"PATCH",contentType:'application/json; charset=UTF-8'});
	}

	getUser(id) { 
		return this.getData(`${this.url}/${id}`);
	}

	editUser(id, user) {
		return this.sendData(`${this.url}/${id}`, user, { method:"PUT",contentType:'application/json; charset=UTF-8'});
	}

	filterUsers(filterOption) { 
		return this.getData(`${this.url}?${filterOption}=true`);
	}

	getSortUsers(sortOption) {
		return this.getData(`${this.url}?_sort=${sortOption.name}&_order=${sortOption.value}`);
	}
	
	getSearchUsers(str) { 
		return this.getData(`${this.url}?name_like=${str}`);
	}

}