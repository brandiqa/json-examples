module.exports = {
  services: [
    {
      path: '/customers',
      count: 25,
      template: {
        first_name: '{{name.firstName}}',
        last_name: '{{name.lastName}}',
        address: '{{address.streetAddress}}',
        phone: '{{phone.phoneNumber}}',
        email: '{{internet.email}}'
      }
    }
  ]
};
