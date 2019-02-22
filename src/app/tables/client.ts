export interface IClient {
    "name": string;
    "phone": string;
    "email": string;
    "company": string;
    "date_entry": string; // "2018-06-06 10:48:48", 
    "org_num": number; // "635919 3221",
    "address_1": string; // "Ap #790-6675 Convallis Rd.",
    "city": string;
    "zip": number;
    "geo": string; // "46.41423, 51.06231", ~TS array datatype?
    "pan": number; // "455 63163 60465 405",
    "pin": number; // "1703",
    "id": number; // 10,
    "status": string; // "expired",
    "fee": number;  // "$27.94", ~ is their a TS decimal datatype?
    "guid": string; // "5D34DC45-805C-14CC-75E5-B8A94BFE5D80",
    "date_exit": string; // "2017-07-12 08:26:08", ~ TS Date datatype?
    "date_first": string; // "2018-11-05 04:49:30", ~ TS Date datatype?
    "date_recent": string; // "2018-08-21 21:19:48", ~ TS Date datatype?
    "url": string; // "https://capco.com/"
  }