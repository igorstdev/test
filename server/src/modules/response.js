class Response {

  static messages = {
    400:[],
    401: [
      {
        id: 2,
        message: 'The user was created successfully',
      },
    ],
    404: [
      {
        id: 1,
        message: 'The resource not found.',
      },
      {
        id: 2,
        message: 'The user not found.',
      },
    ],
    500: 'Internal server error',
  };
  
   static ok(response, data) {
   response.writeHead(200, {"Content-Type": "application/json"});
   response.writeHead(200, {"Access-Control-Allow-Origin": "*"});
   const body = JSON.stringify(data);
   return response.end(body);
  }
  
  static created(response, data) {
    response.writeHead(201, {"Content-Type": "application/json", });
    const body = JSON.stringify(data);
    return response.end(body);
  }
  
  static responseError(response, data){
    response.statusCode = 400;
    const body = JSON.stringify(data);
    return response.end(body);
  }
  
  static notFound(response, id){
    response.statusCode = 404;
  
    const errData = JSON.stringify({
      message: Response.messages[404][id - 1].message
    });
    return  response.end(errData);
  }
  
  static internalError(response) {
    response.statusCode = 500;
    return  response.end(Response.messages[500]);
  }
}

module.exports = Response;