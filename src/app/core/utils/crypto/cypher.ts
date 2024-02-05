import * as CryptoJS from 'crypto-js';

const key = '204812730425442A472D2F423F452847';
export const encryptText = (password: string) => {
  const iv = crypto.getRandomValues(new Uint8Array(16));
  return CryptoJS.AES.encrypt(password, key, {
    // @ts-ignore
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

export const decryptText = (password: string) => {
  const bytes  = CryptoJS.AES.decrypt(password, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
