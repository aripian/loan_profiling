import { logger } from './utils/logger';
import encryption from './utils/encryption';
import options from '../config/options';
import db from './utils/db';
import Q from './queries';

const calculateProfile = (data, cb) => {
  const profileParams = [];
  const sentOptions = data.options;
  let score = 0;
  let profile = '';

  profileParams.push(data.name);
  profileParams.push(data.email);
  profileParams.push(encryption.encrypt(data.idNo));

  const insertData = () => {
    db.query(Q.insertProfile, profileParams, (err, res) => {
      if (err) {
        logger.error(err.stack);
        res.json({ error: 'Error inserting customer data' });
      }
      logger.warn(res);
      logger.warn(res.rows[0]);
      cb({
        profile: {
          name: data.name,
          score,
          profile,
        },
      });
    });
  };

  const getProfile = () => {
    Object.keys(sentOptions).forEach((key) => {
      score += options[key][sentOptions[key]];
    });

    if (score >= 8) {
      profile = 'A';
    } else if (score >= 6) {
      profile = 'B';
    } else if (score >= 4) {
      profile = 'C';
    } else if (score >= 2) {
      profile = 'D';
    } else {
      profile = 'E';
    }
    profileParams.push(profile);
    profileParams.push(score);
    insertData();
  };

  getProfile();
};

module.exports = {
  calculateProfile,
};
