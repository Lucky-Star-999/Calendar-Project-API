// Read password from userinformation
exports.readPassword = (email) => {
    let query = 
        `SELECT password FROM userinformation WHERE email = '${email}';`;
    return query;
}

// Read user from userinformation
exports.readUser = (email) => {
    let query = 
        `SELECT email, fullname FROM userinformation WHERE email = '${email}';`;
    return query;
}
