import axios from 'axios';
import { TELEGRAM_TOKEN } from '../configs.ts';

export const sendMessage = async (channel: string, message: string) => {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: channel,
      text: message,
    }, {
      timeout: 10000  // 타임아웃을 10,000ms (10초)로 설정
    });
    console.log(`Message sent to channel ${channel}`);
  } catch (error) {
    console.error(`Failed to send message to channel ${channel}:`, error);
  }
};



