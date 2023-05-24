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

  const result = await res.json();
  return result;
}

export async function apiInitCertificate(): Promise<Certificate[]> {
  const res = await fetch("/api/certificate");
  // console.log(res);

  return res.json();
}

export async function apiFindCertificate(
  inputVal: string
): Promise<Certificate> {
  const res = await fetch("/api/findeCertificate", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ inputVal }),
  });

  return res.json();
}

export async function apiUpdateCertificate(
  certificate: Certificate
): Promise<Certificate> {
  console.log(certificate.id);
  const res = await fetch(`/api/certificate/${certificate.id}`, {
    method: "PUT",
    body: JSON.stringify(certificate),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
