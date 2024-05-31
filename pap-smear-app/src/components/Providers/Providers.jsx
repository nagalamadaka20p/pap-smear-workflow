import React from 'react';
import './Providers.css';

const Providers = () => {
  const providers = [
    {
      provider: "Lifespan Ob/Gyn",
      locations: "Providence, East Greenwich, North Attelboro, East Providence",
      phoneNumber: "401-606-3000",
      addresses: [
        "148 W River St Suite 8, Providence, RI 02904",
        "1377 South County Trail Unit 2A, East Greenwich, RI 02818",
        "6 Whipple Street, North Attleboro, MA 02760",
        "900 Warren Avenue Suite 101, East Providence, RI 02914"
      ]
    },
    {
      provider: "Planned Parenthood of RI",
      locations: "Providence",
      phoneNumber: "401-421-9620",
      addresses: ["175 Broad St, Providence, RI 02903"]
    },
    {
      provider: "Obstetrics and Gynecolgy Care Center (Women and Infants)",
      locations: "Providence",
      phoneNumber: "(401) 274-1122, ext. 42735",
      addresses: ["101 Dudley St, Providence, RI 02905"]
    },
    {
      provider: "Center for OB/GYN",
      locations: "Providence, East Greewich",
      phoneNumber: "401-490-6464",
      addresses: [
        "297 Promenade St, Providence, RI 02908",
        "1050 Main Street, East Greenwich, RI, 02818"
      ]
    },
    {
      provider: "Partners in Obstetrics and Gynecology",
      locations: "Pawtucket, East Providence, East Greenwich",
      phoneNumber: "401-724-0600",
      addresses: [
        "333 SCHOOL STREET SUITE 205, Pawtucket, RI 02860",
        "1525 WAMPANOAG TRAIL SUITE 201, East Providence, RI 02915",
        "1050 MAIN STREET, East Greenwich, RI 02818"
      ]
    },
    {
      provider: "Bayside OB/Gyn",
      locations: "Providence",
      phoneNumber: "401-421-1710",
      addresses: ["235 Plain St 401, Suite 401, Providence, RI 02905"]
    },
    {
      provider: "Family Care Clinic (FM)",
      locations: "Pawtucket",
      phoneNumber: "(401) 729-2304",
      addresses: ["111 Brewster Street, Pawtucket, RI 02860"]
    },
    {
      provider: "CNEMG Family Medicine Group",
      locations: "Pawtucket",
      phoneNumber: "(401) 727-4800",
      addresses: ["21 Division Street, Pawtucket, RI 02860"]
    },
    {
      provider: "CNEMG Family Medicine Group",
      locations: "Lincoln",
      phoneNumber: "(401) 921-7900",
      addresses: ["640 George Washington Highway, Building A, Suite 102, Lincoln, RI 02865"]
    },
    {
      provider: "CNEMG Family Medicine Group",
      locations: "Providence",
      phoneNumber: "(401) 459-0230",
      addresses: ["118 Dudley Street, Suite 22, Providence, RI 02905"]
    },
    {
      provider: "CNEMG Family Medicine Group",
      locations: "Coventry",
      phoneNumber: "(401) 822-2772",
      addresses: ["595 Washington Street, Coventry, RI 02816"]
    },
    {
      provider: "Thundermist",
      locations: "West Warwick",
      phoneNumber: "401-615-2800",
      addresses: ["186 Providence Street, West Warwick, RI 02893"]
    },
    {
      provider: "Thundermist",
      locations: "South County",
      phoneNumber: "401-783-0523",
      addresses: ["1 River Street, Wakefield, RI 02879"]
    },
    {
      provider: "Thundermist",
      locations: "Woonsocket",
      phoneNumber: "401-767-4100",
      addresses: ["450 Clinton Street, Woonsocket, RI 02895"]
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
            <th>Address(es)</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider, index) => (
            <tr key={index}>
              <td>{provider.provider}</td>
              <td>{provider.locations}</td>
              <td>{provider.phoneNumber}</td>
              <td>
                <ul>
                  {provider.addresses.map((address, idx) => (
                    <li key={idx}>{address}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Providers;
