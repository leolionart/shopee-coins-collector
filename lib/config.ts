import * as path from 'path';
import winston = require('winston')
import { logger } from './logger';

function getEnv (key: string): string | undefined {
  const envKey = process.env[key];
  if (!envKey) {
    logger.error(`Missing env: \`${key}\``, winston.error);
  };
  return envKey;
}

export function getCookies (): string | undefined {
  const cookie = process.env.COOKIE || 'env.cookie';
  return cookie && path.resolve(cookie);
}

export const login = getEnv('SHOPEE_USR');
export const pwd = getEnv('SHOPEE_PWD');
export const aesKey = getEnv('AES_KEY');

// Add settings for shopee site
export const HOME_PAGE = 'https://shopee.vn/'
export const LOGIN_PAGE = `${HOME_PAGE}buyer/login?next=`+ encodeURIComponent(HOME_PAGE) + 'shopee-coins'
export const COIN_URL = `${HOME_PAGE}shopee-coins`
export const TXT = {
  LOGIN_BTN: 'ĐĂNG NHẬP',
  // Login message
  USE_LINK: '使用連結驗證',
  REWARD: '蝦幣獎勵',
  WRONG_PASSWORDS: [
    '你的帳號或密碼不正確，請再試一次',
    '登入失敗，請稍後再試或使用其他登入方法',
    '您輸入的帳號或密碼不正確，若遇到困難，請重設您的密碼。'
  ],
  PKAY_PUZZLE: '點擊以重新載入頁面',
  EMAIL_AUTH: '透過電子郵件連結驗證',
  FAILURE: '很抱歉，您的身份驗證已遭到拒絕。',
  ON_CELLPHONE: '請在您的手機上回覆',
  TOO_MUCH_TRY: '您已達到今日驗證次數上限。',
  RECEIVE_COIN: '完成簽到',
  COIN_RECEIVED: '明天再回來',
}