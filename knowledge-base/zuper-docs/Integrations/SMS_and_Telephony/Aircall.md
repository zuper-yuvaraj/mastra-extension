---
title: "Aircall"
source: https://docs.zuper.co/Integrations/SMS_and_Telephony/Aircall.md
fetched_at: 2026-10-06T13:30:33.490Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Aircall 

**Aircall** is a leading cloud-based phone system designed for businesses, especially sales and customer support teams. Based in Europe, it provides VoIP (Voice over Internet Protocol) services and supports communication across more than **160 countries**, including the USA, Canada, New Zealand, and Singapore.

The **Zuper–Aircall integration** enables your back-office teams to connect their Aircall account with Zuper, allowing them to make and receive calls, as well and send outbound text messages, directly from the Zuper web app. This integration enhances communication efficiency by bringing calling and messaging functions into a single platform.

## Field Mapping

When you integrate Aircall with Zuper, the following data sync occurs automatically:

| **Zuper Field** | **Aircall Field** |
| :- | :- |
| **Users** | **Users** |
| First Name | First Name |
| Last Name | Last Name |
| Email | Email |
| **Teams** | **Teams** |
| Team Name | Team Name |
| **Customers** | **Customers** |
| First Name | First Name |
| Last Name | Last Name |
| Email | Email |
| Mobile Number, Home Number, Work Number | Phone Numbers |
| Organization | Company Name |

***

## A. Setting up your Aircall account

1. Log in to your **Aircall** account using your registered **Email ID** and **Password**.

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/aircall3.jpg?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=7cc95e022e4d5d9ebc5d205bd0d9ae88" alt="Aircall3 Jp" width="1917" height="868" data-path="images/aircall3.jpg" />

2. Click **"Create" or "Port a Number"** to add a new number to your Aircall account.

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/aircall4.jpg?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=53e0df774eab9152ad59d3d78fa44c44" alt="Aircall4 Jp" width="1909" height="858" data-path="images/aircall4.jpg" />

## B. Connecting Aircall with Zuper

The **Zuper–Aircall integration** lets you connect your Aircall account with Zuper to make and receive calls, as well as send outbound text messages through your Aircall number.

#### **Step 1: Access the App Store**

1. Log in to your **Zuper web app**. Click your **Profile Picture** in the top-right corner. Select **App Store** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/BtFhL02L3y4jrsWw/images/slack1.png?fit=max&auto=format&n=BtFhL02L3y4jrsWw&q=85&s=50f255373e44fdf9261d39fb0768da79" alt="Slack1 Pn" width="1903" height="872" data-path="images/slack1.png" />

2. Under **Browse by Category**, select **Telephony, Video & SMS**, and choose **Aircall**.

<img src="https://mintcdn.com/zuperinc/aJOYAsLlfNoXXl0e/images/Aircall1.png?fit=max&auto=format&n=aJOYAsLlfNoXXl0e&q=85&s=d44102fc145f2abb3a3fedd21f718867" alt="Aircall1 Pn" width="1920" height="878" data-path="images/Aircall1.png" />

<Note>
  Note: Ensure that the Phone Call option is enabled for your contacts.

  Navigation: Contacts → Edit Contact → Notification Preferences
</Note>

#### **Step 2: Authorize and Configure Integration Settings**

1. Click "**Install Aircall**" to allow Zuper to access information from your Aircall account.

<img src="https://mintcdn.com/zuperinc/aJOYAsLlfNoXXl0e/images/Aircall2.png?fit=max&auto=format&n=aJOYAsLlfNoXXl0e&q=85&s=2af2bda8f69ee3ca19769e52c03658e9" alt="Aircall2 Pn" width="1920" height="878" data-path="images/Aircall2.png" />

2. Configure the following fields:

| **Field** | **Description** | **Where to Find** |
| :-: | :-: | :-: |
| **Zuper API Key (Mandatory)** | Enter your Zuper API Key to authenticate the integration. | \[Refer: [How to generate a Zuper API Key](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)] |
| **Sync Customers (Mandatory)** | Choose **Yes** to sync customer data from Zuper to Aircall; choose **No** to disable syncing. | Available in Aircall Integration Settings in Zuper |
| **Sync Teams (Mandatory)** | Choose **Yes** to sync team data from Zuper to Aircall; choose **No** to disable syncing. | Available in Aircall Integration Settings in Zuper |
| **Sync Users (Mandatory)** | Choose **Yes** to sync user details from Zuper to Aircall; choose **No** to disable syncing. | Available in Aircall Integration Settings in Zuper |
| **Aircall From Number (Mandatory)** | Enter your registered 10-digit Aircall number. This number must be SMS-enabled and compliant with regional regulations (e.g., A2P10DLC in the USA). | Aircall → Numbers → Active Numbers |

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/aircall10.jpg?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=f577e4fe2ff14710a25a95319152e921" alt="Aircall10 Jp" width="1914" height="859" data-path="images/aircall10.jpg" />

Click **Update** to complete the integration setup.

## C. Using the Zuper–Aircall Integration

#### **1. Making and Receiving Calls**

1. Click the **Sign In** button on the **Aircall widget** (displayed at the bottom-right of the Zuper web app).
2. Select the preferred number from your available Aircall numbers.
3. Use the **Aircall Dial Pad** to make outgoing calls or receive incoming calls directly within Zuper.

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/ari11.png?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=d9225267d5203bd1bdd828d6d044f270" alt="Ari11 Pn" width="1920" height="827" data-path="images/ari11.png" />

<Note>
  Note: The Aircall widget remains active while navigating across Zuper pages. To enable the Aircall integration on your account, contact our Support Team at [support@zuper.co](mailto:support@zuper.co).
</Note>

#### **2. Sending Text Messages via Aircall**

1. Navigate to **Contacts** from the left navigation panel. Select the contact you want to notify from the listing page to open its details.

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/air12.png?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=d3e74434718d04c14fa1dabf9c164bbb" alt="Air12 Pn" width="1906" height="873" data-path="images/air12.png" />

2. On the **Contact Details** page, click **More Actions → Email/Text Message**.

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/air13.png?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=280026d15d13815402ebbf87556d71b7" alt="Air13 Pn" width="1916" height="842" data-path="images/air13.png" />

3. Configure the following fields:

| **Field** | **Description** |
| :-: | :-: |
| **Contact Via (Mandatory)** | Select **SMS** to send the notification. |
| **Contact Number (Mandatory)** | Choose the contact number for which the message should be sent. |
| **Message Body (Mandatory)** | Enter the text message content. |

<img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/air14.png?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=9949cf45140a04057d9edd22ae8c44f4" alt="Air14 Pn" width="1914" height="874" data-path="images/air14.png" />

Click **Send** to deliver the text message via Aircall.

## D. Uninstalling Aircall from Zuper

1. If you no longer need the integration, follow the steps below to uninstall the Aircall app.

   Log in to your **Zuper web app**. Click your **Profile Picture** in the top-right corner. Select **App Store**.

   <img src="https://mintcdn.com/zuperinc/r92h1Fvv34DZ61eG/images/Ringc1.jpg?fit=max&auto=format&n=r92h1Fvv34DZ61eG&q=85&s=c1bbafa929d1b3e3a5b6702cd5ba6618" alt="Ringc1 Jp" width="1918" height="869" data-path="images/Ringc1.jpg" />
2. Under **Browse by Category**, select **Telephony, Video & SMS**. Choose **Aircall**. Click **Uninstall**.

   <img src="https://mintcdn.com/zuperinc/aJOYAsLlfNoXXl0e/images/Aircall1.png?fit=max&auto=format&n=aJOYAsLlfNoXXl0e&q=85&s=d44102fc145f2abb3a3fedd21f718867" alt="Aircall1 Pn" width="1920" height="878" data-path="images/Aircall1.png" />
3. The Aircall is uninstalled successfully.

   <img src="https://mintcdn.com/zuperinc/FxpTf2OI69LqeGG3/images/air15.jpg?fit=max&auto=format&n=FxpTf2OI69LqeGG3&q=85&s=214d471e20e0d49edea86619a80d4aa1" alt="Air15 Jp" width="1917" height="824" data-path="images/air15.jpg" />

The **Zuper–Aircall integration** streamlines communication for customer-facing teams by enabling call management and SMS directly within Zuper.

\
With this cloud-based, one-way integration, data flows from Zuper to Aircall, allowing users to efficiently handle calls, respond to inquiries, and send real-time text notifications.

\
This integration ensures better customer engagement, faster service resolution, and an enhanced support experience.


## Related topics

- [Porting Phone Numbers to Zuper Connect](/Zuper_Connect/Port-Number.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.