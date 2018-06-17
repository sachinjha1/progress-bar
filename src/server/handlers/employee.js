
const Handlers = [{
  method: 'GET',
  path: '/api/employee/{id}',
  handler: (request, reply) => {
    return { id: request.params.id, name: 'Sachin Jha', area: 'Merchant' };
  },
},
  {
    method: 'POST',
    path: '/api/employee',
    handler: (request, reply) => {
      const { payload } = request;
      console.log(payload);
      return { id: 100, name: 'Sachin Jha', area: 'Merchant' };
    },
  }];

export default Handlers;
