import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { sortIsChildren } from "./modules/sortIsChildren";
import { searchUsers } from "./modules/searchUsers";


window.userService = new UserService("http://localhost:4545/users");

userService.getUsers().then(data => render(data));
addUsers();
removeUsers();
changePermissions();
editUsers();
filterUsers();
sortIsChildren();
searchUsers();