import { useEffect } from 'react';
export default function RedirectToLogin() {
  const clearAllCookie = () => {
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  };
  useEffect(() => {
    clearAllCookie();
    window.location.href = '/Auth?ReturnUrl=%2F';
  }, []);
  return null;
}
