import { Admin } from './type/Admin';

export async function admin(): Promise<
  | {
      isLoggedIn: true;
      admin: Admin;
    }
  | {
      isLoggedIn: false;
    }
> {
  console.log('fetch api auth admin');
  const res = await fetch('/api/auth/admin');
  console.log(res);

  return res.json();
}

export async function apiLogin(adminAuth: Admin): Promise<Admin> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(adminAuth),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 332 реджектим промис если вернулся ошибочный статус
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
}

export async function apiAdminLogout(): Promise<void> {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });
}
