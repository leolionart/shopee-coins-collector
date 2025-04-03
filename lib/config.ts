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
  USE_LINK: 'Sử dụng liên kết để xác minh',
  REWARD: 'Phần thưởng Shopee Xu',
  WRONG_PASSWORDS: [
    'Tài khoản hoặc mật khẩu của bạn không chính xác, vui lòng thử lại',
    'Đăng nhập thất bại, vui lòng thử lại sau hoặc sử dụng phương thức đăng nhập khác',
    'Tài khoản hoặc mật khẩu bạn nhập không chính xác. Nếu gặp khó khăn, vui lòng đặt lại mật khẩu.'
  ],
  PKAY_PUZZLE: 'Nhấp để tải lại trang',
  EMAIL_AUTH: 'Xác minh qua liên kết email',
  FAILURE: 'Xin lỗi, xác minh danh tính của bạn đã bị từ chối.',
  ON_CELLPHONE: 'Vui lòng trả lời trên điện thoại của bạn',
  TOO_MUCH_TRY: 'Bạn đã đạt đến giới hạn số lần xác minh tối đa trong ngày hôm nay.',
  RECEIVE_COIN: 'Nhận Xu',
  COIN_RECEIVED: 'Ngày mai quay lại',
}