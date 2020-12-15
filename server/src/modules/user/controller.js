const {
  ok,
  created,
  notFound,
  responseError,
  internalError,
} = require("../response");
const Model = require("./model");
const validate = require("../validator");
const { userSchema } = require("../validator/ValidationSchemas");

class UserModel {
  static getUsers = async (request, response) => {
    try {
      const users = await Model.getAll();
      ok(response, users);
    } catch (e) {
      internalError(response);
    }
  };

  static getUser = async (request, response) => {
    const id = request.url.split("/")[2];
    try {
      const user = await Model.get(id);
      user.length ? ok(response, user[0]) : notFound(response, 2);
    } catch (e) {
      internalError(response);
    }
  };

  static postUser = (request, response) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", async () => {
      body = JSON.parse(body);

      const isValid = validate.customValidator(body, userSchema);
      const errData = [];

      if (Array.isArray(isValid)) {
        isValid.forEach((err) => {
          const { field, message } = err;
          errData.push({ field, message });
        });
        return responseError(response, errData);
      }

      try {
        const user = await Model.post(body);
        user.phone_numbers = user.phone_numbers.map( phone => phone.phone_number);
        created(response, user);
      } catch (e) {
        internalError(response);
      }
    });
  };

  static updateUser = async (request, response) => {
    let body = "";
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", async () => {
      body = JSON.parse(body);
      try {
        const user = await Model.update(body, id);
        created(response, user[1]);
      } catch (e) {
        internalError(response);
      }
    });
  };

  static delete = async (request, response,) => {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    try {
      const row = await Model.delete(id);
      console.log(row);
      !row.length? notFound(response, 2): ok(response, { success: true });
    } catch (e) {
      internalError(response);
    }
  };
  
}

module.exports = UserModel;
