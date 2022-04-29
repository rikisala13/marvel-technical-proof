const { connect } = require('mongoose');
// const debug = require('debug');

connect(
  process.env.DDBB_URLL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => console.log('Database connection stablished'))
  .catch(({ message }) => console.log(message));
