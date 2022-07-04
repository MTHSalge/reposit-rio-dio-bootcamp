function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Bira', 'Admin');
usuarios.set('Salge', 'Admin');
usuarios.set('Michele', 'Admin');
usuarios.set('Gilberto', 'User');

console.log(getAdmins(usuarios));