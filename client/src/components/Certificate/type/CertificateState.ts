import { Certificate } from "./Certificate";

export type CertificateState = {
  certificateList: Certificate[];
  currentCertificate: number | undefined;
};
