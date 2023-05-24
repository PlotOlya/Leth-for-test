import { CertificateData } from './type/CertificateData';
import { Certificate } from './type/Certificate';

export async function apiCertificate(
  certificate: CertificateData
): Promise<Certificate> {
  const res = await fetch('/api/certificate', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export async function apiInitCertificate(): Promise<Certificate[]> {
  const res = await fetch('/api/certificate');
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export async function apiFindCertificate(
  inputVal: string
): Promise<Certificate> {
  const res = await fetch('/api/findeCertificate', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ inputVal }),
  });
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export async function apiUpdateCertificate(
  certificate: Certificate
): Promise<Certificate> {
  console.log(certificate.id);
  const res = await fetch(`/api/certificate/${certificate.id}`, {
    method: 'PUT',
    body: JSON.stringify(certificate),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}
