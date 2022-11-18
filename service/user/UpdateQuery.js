// Update an user
exports.updateUser = (email, password, fullname) => {
    let query = 
        `UPDATE userinformation SET password = '${password}', fullname = '${fullname}' WHERE email = '${email}';`;
    return query;
}