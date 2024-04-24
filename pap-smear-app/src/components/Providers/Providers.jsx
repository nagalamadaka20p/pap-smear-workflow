import React from 'react';
import './Providers.css';

const Providers = () => {
    const providers = [
        {
          provider: "Lifespan Ob/Gyn",
          locations: "Providence, East Greenwich, North Attelboro, East Providence",
          phoneNumber: "401-606-3000"
        },
        {
          provider: "Planned Parenthood of RI",
          locations: "Providence",
          phoneNumber: "401-421-9620"
        },
        {
          provider: "Obstetrics and Gynecolgy Care Center (Women and Infants)",
          locations: "Providence",
          phoneNumber: "(401) 274-1122, ext. 42735"
        },
        {
          provider: "Center for OB/GYN",
          locations: "Providence, East Greewich",
          phoneNumber: "401-490-6464"
        },
        {
          provider: "Partners in Obstetrics and Gynecology",
          locations: "Pawtucket, East Providence, East Greenwich",
          phoneNumber: "401-724-0600"
        },
        {
          provider: "Bayside OB/Gyn",
          locations: "Providence",
          phoneNumber: "401-421-1710"
        },
        {
          provider: "Family Care Clinic (FM)",
          locations: "Pawtucket",
          phoneNumber: "(401) 729-2304"
        },
        {
          provider: "CNEMG Family Medicine Group",
          locations: "Pawtucket",
          phoneNumber: "(401) 727-4800"
        },
        {
          provider: "CNEMG Family Medicine Group",
          locations: "Lincoln",
          phoneNumber: "(401) 921-7900"
        },
        {
          provider: "CNEMG Family Medicine Group",
          locations: "Providence",
          phoneNumber: "(401) 347-2550"
        },
        {
          provider: "CNEMG Family Medicine Group",
          locations: "Providence",
          phoneNumber: "(401) 459-0230"
        },
        {
          provider: "CNEMG Family Medicine Group",
          locations: "Coventry",
          phoneNumber: "(401) 822-2772"
        },
        {
          provider: "Thundermist",
          locations: "West Warwick",
          phoneNumber: "401-615-2800"
        },
        {
          provider: "Thundermist",
          locations: "South County",
          phoneNumber: "401-783-0523"
        },
        {
          provider: "Thundermist",
          locations: "Woonsocket",
          phoneNumber: "401-767-4100"
        }
      ];
    return (
        <div className="medical-providers-table">
            <h1>Medical Providers</h1>
            <table>
                <thead>
                <tr>
                    <th>Provider</th>
                    <th>Location(s)</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {providers.map((provider, index) => (
                    <tr key={index}>
                    <td>{provider.provider}</td>
                    <td>{provider.locations}</td>
                    <td>{provider.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Providers;