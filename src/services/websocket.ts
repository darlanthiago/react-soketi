import Echo from "laravel-echo";
import pusher from "pusher-js";

declare global {
  interface Window {
    Pusher: any;
  }
}

window.Pusher = pusher;

export const laravelEcho = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  wsHost: import.meta.env.VITE_PUSHER_HOST,
  wsPort: import.meta.env.VITE_PUSHER_PORT,
  wssPort: import.meta.env.VITE_PUSHER_PORT,
  forceTLS: import.meta.env.VITE_PUSHER_TSL,
  encrypted: true,
  disableStats: true,
  enabledTransports: ['ws', 'wss']
});
