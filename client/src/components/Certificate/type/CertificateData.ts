import { Certificate } from "./Certificate";

export type CertificateData = Omit<
  Certificate,
  "id" | "numberCertificates" | "status"
>;
