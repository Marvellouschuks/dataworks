let crypto = require('crypto'),
    { scrypt, randomBytes, timingSafeEqual } = crypto;

const keyLength = 32;
/**
 * Has a password or a secret with a password hashing algorithm (scrypt)
 * @param {string} password
 * @returns {string} The salt+hash
 */

const hash = async (password) => {
    return new Promise((resolve, reject) => {
        // generate random 16 bytes long salt - recommended by NodeJS Docs
        const salt = randomBytes(16).toString("hex");

        scrypt(password, salt, keyLength, (err, derivedKey) => {
            if (err) reject(err);
            // derivedKey is of type Buffer
            resolve(`${salt}.${derivedKey.toString("hex")}`);
        });
    });
};

/**
 * Compare a plain text password with a salt+hash password
 * @param {string} password The plain text password
 * @param {string} hash The hash+salt to check against
 * @returns {boolean}
 */
const compare = async (password, hash) => {
    return new Promise((resolve, reject) => {
        const [salt, hashKey] = hash.split(".");
        // we need to pass buffer values to timingSafeEqual
        const hashKeyBuff = Buffer.from(hashKey, "hex");
        scrypt(password, salt, keyLength, (err, derivedKey) => {
            if (err) reject(err);
            // compare the new supplied password with the hashed password using timeSafeEqual
            resolve(timingSafeEqual(hashKeyBuff, derivedKey));
        });
    });
};


function urlParts(url, params, query, is_html) {
    params = {}, query='',
    url.replace(/\?[^]*/, e=>((query=e.replace('?', '')).split(/\&|\s/).filter(e=>e).forEach(e=>params[(e=e.split('='))[0]]=decodeURIComponent(e[1])), '')),
    query &&= '?'+query,
    is_html = !/\.[^]+$/.test(is_html = (url = url.replace(query, '')).split('/').pop())||/\.html$/.test(is_html);
    return {
        params, query: decodeURIComponent(query), url, is_html
    }
}

function parseMultipart(req, data, bound, split) {
  /** not re-inventing the wheel or anything but popular packages like
   * formidable, multer and multiparty didn't work for my use case of sending
   * large text encoded as multipart/form-data hence the custom solution below
   */
  let body = {};
  req.headers['content-type'].replace(/=-+[^]+$/, match=>bound = match.replace(/=-+/, ''));
  split = new RegExp(`\\s*-*${bound}[^;]+(;|-+)\\s*`), data = data.split(split).filter(e=>e.length>1),
  data.forEach(e=>{
    let rgx = /^name="[^"]+"/ , value = e.split(rgx).filter(e=>e);
    e.replace(rgx, match=>body[match.replace(/name=|"/g, '')] = value.length ? value.shift().trim() : '')
  });
  return body;
}



module.exports = { urlParts, parseMultipart, hash, compare }