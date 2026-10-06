---
title: "Mailchimp"
source: https://docs.zuper.co/Integrations/Marketing/Mailchimp.md
fetched_at: 2026-10-06T13:30:28.793Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Mailchimp

The Mailchimp integration with Zuper enables users to automatically build and update a customer mailing list in Mailchimp using customer information from the Zuper platform. This integration streamlines marketing campaign execution by syncing customer data uni-directionally from Zuper to Mailchimp.

## **Prerequisites**

* Ensure you have API keys from Stripe App and Zuper app.

## Installing Mailchimp in Zuper

Follow these steps to connect your Mailchimp account with Zuper:

1. Log in to your Zuper account. Click your profile picture in the top-right corner and select **App Store**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Marketing & Survey**” option and choose “**Mailchimp**.”

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail2.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=1e3f82e011d9a813435e14c4aacd7da6" alt="Mail2 Pn" width="1920" height="878" data-path="images/Mail2.png" />

3. Click the “**Install Mailchimp**” button.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail3.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=9e93a5911e90416f618dc57422ccfe0b" alt="Mail3 Pn" width="1920" height="878" data-path="images/Mail3.png" />

4. Open a new browser tab and log in to your Mailchimp account.

   Collect the following information:

* **Mailchimp API Key**:
  * Navigate to **Account & Billing** > **Extras** > **API Keys**.
  * Copy your API key. If none exists, click **Create A Key** to generate one.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail4.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=fe6fd7ee0d56a81b903ada211f12fb8b" alt="Mail4 Pn" width="1919" height="928" data-path="images/Mail4.png" />

* **Audience ID**:
  * Navigate to **Audience** > **Settings**.
  * Copy the **Audience ID** from the settings page.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail5.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=bcd39109be9d4a173e2fa0e9032acf52" alt="Mail5 Pn" width="1919" height="919" data-path="images/Mail5.png" />

* **Server Prefix**:
  * From your Mailchimp browser URL (e.g., [https://us87.admin.mailchimp.com/](https://us87.admin.mailchimp.com/)), copy the server prefix (Here us87 is the prefix).

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail6.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=91adc0e038ccd2306da98ba93c286d8d" alt="Mail6 Pn" width="943" height="54" data-path="images/Mail6.png" />

**Note**: Keep both Zuper and Mailchimp tabs open to switch between them during setup.

5. In Zuper’s Mailchimp integration settings, enter the following:

* **Mailchimp API Key** (Mandatory): Paste the API key from step 4.
* **Audience List** (Mandatory): Paste the Audience ID from step 4.
* **Server Prefix** (Mandatory): Paste the server prefix from step 4.
* **Zuper API Key** (Mandatory): Enter your Zuper API key. Refer to [How to Generate a Zuper API Key](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys) for guidance.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail7.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=adf3c66167912589488c25778a791563" alt="Mail7 Pn" width="1921" height="924" data-path="images/Mail7.png" />

Click **Update** to complete the integration.

## How the Zuper-Mailchimp Integration Works

The integration automatically syncs customer data from Zuper to Mailchimp, creating or updating audience records for marketing campaigns.

1. **Customer Data Sync**:

* When a new customer is created or an existing customer is edited in Zuper, their information is synced to Mailchimp as an audience member.

<Frame>
  - **Navigation in Zuper**: *Customers > New Customer or Edit Customer.*
</Frame>

<Warning>
  **Important**: The customer’s email address is mandatory in Zuper for syncing to Mailchimp. If the email is missing during customer creation, it must be added later. Editing an email in Zuper creates a new audience member in Mailchimp, rather than updating the existing one.
</Warning>

2. **Viewing Synced Data in Mailchimp**:

* In Mailchimp, navigate to **Audience** > **Manage Contacts**.
* View the synced customer data (from Zuper) listed as an audience member in Mailchimp.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail10.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=a7188d553dfa117b0a4c620f994b2955" alt="Mail10 Pn" width="1917" height="924" data-path="images/Mail10.png" />

* Click an email address to view detailed profile information under **Profile Information**.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail11.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=9ab05a257cda10ac2ba2efb607e5b2cb" alt="Mail11 Pn" width="1918" height="926" data-path="images/Mail11.png" />

## Uninstalling Mailchimp for Zuper

1. Log in to your Zuper account. Click your profile picture in the top-right corner and select **App Store**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Marketing & Survey**” option and choose “**Mailchimp**.”

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail2.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=1e3f82e011d9a813435e14c4aacd7da6" alt="Mail2 Pn" width="1920" height="878" data-path="images/Mail2.png" />

3. Click "**Uninstall App**."

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail12.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=80020353f8b6cd8ea5b646fcfa99ff64" alt="Mail12 Pn" width="1920" height="878" data-path="images/Mail12.png" />

4. The Mailchimp app will be uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/zKnZIFX4J0Gcvd3h/images/Mail13.png?fit=max&auto=format&n=zKnZIFX4J0Gcvd3h&q=85&s=77a4e1c3adfed946df9f11784b926b9d" alt="Mail13 Pn" width="1920" height="878" data-path="images/Mail13.png" />

For marketing campaigns, email IDs and customer details are essential. With the unidirectional Zuper to Mailchimp data flow, you can add your audience list to Mailchimp. The database will sync and get automatically updated every time new customers are created on Zuper. 


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.