class UserUtils {
   makePhoneQuery(userData){
    let phoneQuery = '';
    userData.phone_numbers.forEach( (phone, index) => {
      let queryItem = ` (DEFAULT, '${phone.slice(1)}', ${userData.id})`;
      if (index !== userData.phone_numbers.length - 1){
        queryItem += ',';
      }
      phoneQuery += queryItem;
    });
    return phoneQuery;
  }
}

module.exports = new UserUtils();