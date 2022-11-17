// Create an user
exports.createUser = (email, password, fullname) => {
    let query = 
        `INSERT INTO userinformation (email, password, fullname) VALUES ('${email}', '${password}', '${fullname}');`;
    return query;
}

exports.isEmailExists = (email) => {
    let query = 
        `SELECT email FROM userinformation WHERE email = '${email}';`;
    return query;
}