// Read password from userinformation
exports.readPassword = (email) => {
    let query = 
        `SELECT password FROM userinformation WHERE email = '${email}';`;
    return query;
}

