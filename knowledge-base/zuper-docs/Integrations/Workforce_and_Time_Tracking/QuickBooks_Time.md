---
title: "QuickBooks Time"
source: https://docs.zuper.co/Integrations/Workforce_and_Time_Tracking/QuickBooks_Time.md
fetched_at: 2026-10-06T13:30:33.935Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# QuickBooks Time 

QuickBooks Time, formerly known as tsheets, is an application that provides Employee Time Tracking, Scheduling, and Payroll Management features.

Zuper’s integration with QuickBooks Time syncs entries from the Timesheets module on Zuper to the Time entries module on QuickBooks Time.

The integration offers a unidirectional sync between the modules:

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt1.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=047c1b168aacfb678dd6acc2312f9bf7" alt="Qbt1 Pn" width="946" height="424" data-path="images/Qbt1.png" />

<Note>
  Note: We currently sync time entries from all Zuper users to QuickBooks Time. There are no restrictions based on role.
</Note>

## Installation

1. Open a new tab in your browser once logged in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and select the “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt2.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=89b22c9c178b209aa9609f023e1482d2" alt="Qbt2 Pn" width="1162" height="524" data-path="images/Qbt2.png" />

2. Under the “**Browse by Category**,” select the “**Workforce & Time Tracking**” option and choose “**QuickBooks Time**.”

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt3.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=cdda2493897df984dc0fec0a724ab153" alt="Qbt3 Pn" width="1920" height="827" data-path="images/Qbt3.png" />

3. Click on the “**Install QuickBooks Time**” button.

<img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt4.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=48d5c6d9beaf5a4185983928d47590de" alt="Qbt4 Pn" width="1920" height="827" data-path="images/Qbt4.png" />

2. Update Zuper Settings by configuring the following fields:

   * **Zuper API Key** (Mandatory) – To create the **Zuper API,** refer to the article ([How do I create an API Key for my Zuper account?](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)).
   * **QuickBooks Time Token** (Mandatory) – Enter the QuickBooks Time Token. The token should be taken from QuickBooks Time.

   <Accordion title="To retrieve the token from QuickBooks Time" icon="sparkles">
     1. Under "**QuickBooks Time**" Choose the "**Feature Add-ons**" and select the "**Manage Add-ons.**"

     <img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt5.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=88e3f8861f5fecbc956990b8707cdc78" alt="Qbt5 Pn" width="673" height="836" data-path="images/Qbt5.png" /> 2. Install the "API".

     <img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt6.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=3941b4e34ee640b799b0d9aee8a09d94" alt="Qbt6 Pn" width="939" height="721" data-path="images/Qbt6.png" /> 3. After installing the "**API,**" click the "**Add a new application.**"

     <img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt7.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=53ee748a901c0627be1f5573d98a1b66" alt="Qbt7 Pn" width="663" height="769" data-path="images/Qbt7.png" /> 4. Add the "**Name**", "**Description**","**Technical Contact**", and "**OAuth Redirect URL**".

     <img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt8.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=d4adfcfa491fc5b4d640b6063f4f633f" alt="Qbt8 Pn" width="985" height="865" data-path="images/Qbt8.png" /> 5. Kindly use the OAuth Redirect URL in QuickBooks Time - [https://apps.zuperpro.com/app/quickbooks\_time/oauth/callback](https://apps.zuperpro.com/app/quickbooks_time/oauth/callback) 4. Click "**Add Token**" and enter the "**User Name**" and "**Expiry Date**."

     <img src="https://mintcdn.com/zuperinc/a4vUPwadZ4NSB9ol/images/Qbt9.png?fit=max&auto=format&n=a4vUPwadZ4NSB9ol&q=85&s=0998fbb2f091f43d518a4cb5eb7ab755" alt="Qbt9 Pn" width="997" height="532" data-path="images/Qbt9.png" />

     The token is added successfully. Copy the token from QuickBooks Time and add it to the "**QuickBooks Time Token**" in Zuper.

     <img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt10.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=28f5a5a212e5ad069f8676eb20bf28b6" alt="Qbt10 Pn" width="1167" height="655" data-path="images/Qbt10.png" />
   </Accordion>

   * **Sync Users**(Mandatory)—Enter the QuickBooks Desktop Connector Username. If you select "**Yes**," Users will be pushed one-way from Zuper to QuickBooks Time. If you choose “**No**,” then the User sync will not happen from Zuper to QuickBooks Time.
   * Click the “**Update**” button to save the settings.

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt11.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=05ede53676a72ba8b37d88fd4c96c919" alt="Qbt11 Pn" width="1919" height="865" data-path="images/Qbt11.png" />

## **Uninstallation**

1. Open a new tab in your browser once logged in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and select the “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt2.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=89b22c9c178b209aa9609f023e1482d2" alt="Qbt2 Pn" width="1162" height="524" data-path="images/Qbt2.png" />

2. Under the “**Browse by Category**,” select the “**Workforce & Time Tracking**” option and choose “**QuickBooks Time**.”

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt3.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=cdda2493897df984dc0fec0a724ab153" alt="Qbt3 Pn" width="1920" height="827" data-path="images/Qbt3.png" />

3. Click the “**Uninstall App**” button.

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt12.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=40801cf6e5d462ebb0898e2fb482e850" alt="Qbt12 Pn" width="1920" height="827" data-path="images/Qbt12.png" />

4. The App is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/ohRpzdS-X8kBBJs_/images/Qbt13.png?fit=max&auto=format&n=ohRpzdS-X8kBBJs_&q=85&s=0227395b0270b3074f5a2767b3639911" alt="Qbt13 Pn" width="1920" height="827" data-path="images/Qbt13.png" />

<Info>
  **Important Points:**

  1. The integration doesn’t support the syncing of job codes or customers associated with Time Entries.
  2. Locations are currently not supported and will always be tagged as ‘**Zuper**. '
</Info>


## Related topics

- [QuickBooks Online Data Import](/Integrations/Accounting_and_payments/QuickBooks_data_import.md)
- [Payments sync](/Integrations/Accounting_and_payments/QDP_Payments.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.