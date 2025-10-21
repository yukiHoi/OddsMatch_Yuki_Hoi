// db_seeds/user_accounts.mongodb.js
use('odds_comparison');
 // or your DB name exactly as in the URI

db.getCollection('users').insertOne({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNo: '+353871234567',
  address: '123 Main Street, Limerick, Ireland',
  passwordHash: '$2b$10$z2o6i8sVq8oXxjN7QO3z7O7z8b0m9QyF6vQp8nM0pHk9yJfCm9V4a'
});

db.getCollection('users').find({ email: 'john.doe@example.com' });
