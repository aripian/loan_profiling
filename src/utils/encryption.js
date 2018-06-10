import crypto from 'crypto';
import crypt from '../../config/crypt';
import { env } from '../../config/app';

const { cryptKey, cipher } = crypt(env);

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipherTool = crypto.createCipheriv(cipher, cryptKey, iv);
  let crypted = cipherTool.update(text, 'utf8', 'hex');
  crypted += cipherTool.final('hex');
  return iv.toString('hex') + crypted;
};

const decrypt = (text) => {
  const iv = Buffer.from(text.substring(0, 32), 'hex');
  const decipher = crypto.createDecipheriv(cipher, cryptKey, iv);
  let dec = decipher.update(text.substring(32), 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

module.exports = {
  encrypt,
  decrypt,
};
