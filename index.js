const hubspot = require('@hubspot/api-client');

const apiKey = process.env.API_KEY;
const hubspotClient = new hubspot.Client({ apiKey });

// Example call
hubspotClient.crm.contacts.basicApi
  .getPage()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
