// export class Company {
//     name: string;
//     adress: string;
//     city: string;
//     country: string;
//     email: string;
//     web: string;
//     phone: string;
//     logo: string;
//     constructor(
//         name: string,
//         adress: string,
//         city: string,
//         country: string,
//         email: string,
//         web: string,
//         phone: string,
//         logo: string, ) {
//                 this.name = name;
//                 this.adress = adress;
//                 this.city = city;
//                 this.country = country;
//                 this.email = email;
//                 this.web = web;
//                 this.phone = phone;
//                 this.logo = logo;
//     }
// }

export interface ICompany {
    name: string;
    adress: string;
    city: string;
    country: string;
    email: string;
    web: string;
    phone: string;
    logo: string;
}