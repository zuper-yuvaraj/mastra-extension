---
title: "Sakari"
source: https://docs.zuper.co/Integrations/SMS_and_Telephony/Sakari_with_Zuper.md
fetched_at: 2026-10-06T13:30:31.556Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Sakari 

The **Zuper–Sakari Link SMS integration** allows you to connect your Sakari account with Zuper to automatically send outbound text messages through your Sakari number.

Sakari is a popular SMS application primarily used in the USA. However, if you have an active Sakari Link plan, you can use this integration regardless of your location.

<Note>
  **Note**: To use this integration, you must have a Sakari Developer Account and be subscribed to any Sakari SMS pricing plan.
</Note>

## A. Connecting Sakari with Zuper

Follow the steps below to integrate your Sakari account with Zuper.

1. Log in to your **Zuper web app**. Click on your **Profile Picture** in the top-right corner. Select **App Store** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk1.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=2bc9016867f229998cb6d6266d1787fd" alt="Cloudtalk1 Pn" width="1904" height="872" data-path="images/Cloudtalk1.png" />

2. Under **Browse by Category**, select **Telephony, Video & SMS**. Choose **Sakari** from the available apps.

<img src="https://mintcdn.com/zuperinc/r92h1Fvv34DZ61eG/images/Sakari1.png?fit=max&auto=format&n=r92h1Fvv34DZ61eG&q=85&s=b123f6072ceecdc8b09dd1e6674a926a" alt="Sakari1 Pn" width="1920" height="908" data-path="images/Sakari1.png" />

3. Click the **Configure Settings** button to open the integration page.

<Tip>
  Tip: Keep both Zuper and Sakari tabs open so you can easily switch between them during setup.
</Tip>

> **Important:**\
> Ensure that **Text Message/Text Notifications** are enabled for your end users.\
> **Navigation:** Contacts -> Contacts Listing page -> Edit (via three-dot icon)→ Notification Preferences.

Update the following fields in Zuper with the details from your Sakari account:

| Field Name | Description | Where to Find in Sakari |
| :-: | :-: | :-: |
| **Client ID** *(Mandatory)* | Enter your Sakari Client ID. | Go to **Settings → Account Settings → API Key → Client ID** |
| **Client Secret** *(Mandatory)* | Enter your Sakari Client Secret. | Go to **Settings → Account Settings → API Key → Client Secret** |
| **Account ID** *(Mandatory)* | Enter your Sakari Account ID. | Go to **Settings → Account Settings → API Key → Account ID** |

<Note>
  Note: After copying the Client Secret, it will be hidden when you refresh the Sakari page.

  Once all details are entered, click **Update** to complete the integration.
</Note>

<img src="https://mintcdn.com/zuperinc/r92h1Fvv34DZ61eG/images/Sakari3.png?fit=max&auto=format&n=r92h1Fvv34DZ61eG&q=85&s=8203497c00898c297b15791bf0220b16" alt="Sakari3 Pn" width="1920" height="910" data-path="images/Sakari3.png" />

## B. Using the Zuper–Sakari Integration

Once integrated, you can send SMS notifications directly from Zuper using your Sakari number.

1. Navigate to the **Contacts** module from the left navigation menu. Select a contact on the listing page to open its details.

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk8.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=3e9af30bbfcf99af776514300b211217" alt="Cloudtalk8 Pn" width="1906" height="873" data-path="images/Cloudtalk8.png" />

2. On the **Contact Details** page, click **More Actions → Email/Text Message**.

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk9.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=1f6b2a5ba7bd11ff6f6b5e9dc43eab0b" alt="Cloudtalk9 Pn" width="1916" height="842" data-path="images/Cloudtalk9.png" />

3. Configure Email/Text Message Details to Send

Fill in the following fields:

| Field | Description |
| :-: | :-: |
| **Contact Via** *(Mandatory)* | Select **SMS**. |
| **Contact Number** *(Mandatory)* | Choose the customer’s contact number. |
| **Text Message Body** *(Mandatory)* | Enter the message content. |

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk10.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=c1a492f051436055b7758771b2e0a8af" alt="Cloudtalk10 Pn" width="1914" height="874" data-path="images/Cloudtalk10.png" />

Click **Send** to deliver the message via Sakari.

> Once sent, the SMS is processed through Sakari and delivered to the customer.

## C. Uninstalling Sakari from Zuper

If you no longer need the integration, follow the steps below to uninstall the Sakari app.

1. Log in to your **Zuper web app**. Click your **Profile Picture** in the top-right corner. Select **App Store**.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk1.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=2bc9016867f229998cb6d6266d1787fd" alt="Cloudtalk1 Pn" width="1904" height="872" data-path="images/Cloudtalk1.png" />

2. Under **Browse by Category**, select **Telephony, Video & SMS**. Choose **Sakari**. You have the option to Uninstall **Sakari**.

<img src="https://mintcdn.com/zuperinc/r92h1Fvv34DZ61eG/images/Sakari1.png?fit=max&auto=format&n=r92h1Fvv34DZ61eG&q=85&s=b123f6072ceecdc8b09dd1e6674a926a" alt="Sakari1 Pn" width="1920" height="908" data-path="images/Sakari1.png" />

3. The Sakari is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/r92h1Fvv34DZ61eG/images/Sakari4.png?fit=max&auto=format&n=r92h1Fvv34DZ61eG&q=85&s=2014e30a74726a9e2d5b67c98b78f749" alt="Sakari4 Pn" width="1920" height="912" data-path="images/Sakari4.png" />

A confirmation message will appear once **Sakari** has been successfully uninstalled.

SMS notifications are an excellent way to keep customers informed about their latest job updates.\
This **one-way integration** allows data to flow from **Zuper to Sakari**, ensuring timely SMS delivery to customers.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.