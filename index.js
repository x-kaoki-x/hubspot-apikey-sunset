const hubspot = require('@hubspot/api-client');

const accessToken = process.env.ACCESS_TOKEN;
const hubspotClient = new hubspot.Client({ accessToken });

// Example call
hubspotClient.crm.contacts.basicApi
  .getPage()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
