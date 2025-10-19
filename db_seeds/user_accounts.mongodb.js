// user_accounts.mongodb.js

use('user_accounts');

// insert one user
db.getCollection('users').insertOne({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+353871234567',
  address: '123 Main Street, Limerick, Ireland',
  // Replace with a real bcrypt hash; never store plain text
  passwordHash: '12345678'
});

// quick sanity check (shows in the OUTPUT panel)
db.getCollection('users').find({ email: 'john.doe@example.com' });
