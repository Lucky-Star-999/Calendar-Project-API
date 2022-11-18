// Delete an user
exports.deleteUser = (email) => {
    let query = 
        `DELETE FROM userinformation WHERE email = '${email}';`;
    return query;
}