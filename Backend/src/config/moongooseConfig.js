const { connect } = require('mongoose');
const debug = require('debug');

connect(
  process.env.DDBB_URL_MARVEL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => debug('Database connection stablished'))
  .catch(({ message }) => debug(message));
