---
title: "CloudTalk"
source: https://docs.zuper.co/Integrations/SMS_and_Telephony/CloudTalk.md
fetched_at: 2026-10-06T13:30:32.856Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# CloudTalk

CloudTalk is a leading cloud-based phone system based in the European region, trusted by global businesses for efficient communication across more than 160 countries.

The **Zuper–CloudTalk integration** enables seamless outbound communication by connecting your CloudTalk account with Zuper. Once integrated, you can automatically send outbound **Text Messages** directly through your CloudTalk number to keep your contacts informed about job updates, pending items, or service notifications in real time.

<Note>
  Note:

  * You must have an active CloudTalk Essentials plan or above to use this integration.
  * Ensure that Text Message/Text Notifications are enabled for your contacts.

    Navigation: Contacts → Contacts Listing page → Edit (via three-dot icon) → Edit Contact page → Notification Preferences
</Note>

## A. Connecting CloudTalk with Zuper

Follow the steps below to integrate your CloudTalk account with Zuper.

1. Log in to your **Zuper web app**. Click your **Profile Picture** in the top-right corner. Select **App Store** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk1.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=2bc9016867f229998cb6d6266d1787fd" alt="Cloudtalk1 Pn" width="1904" height="872" data-path="images/Cloudtalk1.png" />

1. Under **Browse by Category**, select **Telephony, Video & SMS**. Choose **CloudTalk** from the list of available integrations. Click **Install CloudTalk**.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk2.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=a78098c5f4aa5bb17364957afd189803" alt="Cloudtalk2 Pn" width="1905" height="871" data-path="images/Cloudtalk2.png" />

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk3.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=f42cc01533f90424d93efa56982dc52c" alt="Cloudtalk3 Pn" width="1911" height="871" data-path="images/Cloudtalk3.png" />

3. Update the following fields with details from your CloudTalk account:

| **Field** | **Description** | **Where to Find** |
| :-: | :-: | :-: |
| **Zuper API Key (Mandatory)** | Enter your Zuper API Key. | \[Refer: [How to generate a Zuper API Key](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)] |
| **CloudTalk Access Key ID (Mandatory)** | Enter your CloudTalk Access Key ID. | Go to *CloudTalk → Settings → API Keys → Access Key ID* |
| **CloudTalk Access Key Secret (Mandatory)** | Enter your CloudTalk Access Key Secret. | Go to *CloudTalk → Settings → API Keys → Access Key Secret → Show* |
| **Sender Number (Mandatory)** | Enter the CloudTalk phone number from which text messages will be sent. | Go to *CloudTalk → Settings → Numbers → Active Numbers* |
| **Sync Contacts (Yes/No)** | Choose **Yes** to sync contacts between Zuper and CloudTalk, or **No** to disable synchronization. | Configure within the **CloudTalk Integration Settings** panel in Zuper. |

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk5.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=5496da3f7138d4f4b59a806f9d35ae79" alt="Cloudtalk5 Pn" width="1910" height="853" data-path="images/Cloudtalk5.png" />

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk6.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=3317c8e31b8841d5011b2cf26559c2f2" alt="Cloudtalk6 Pn" width="1920" height="878" data-path="images/Cloudtalk6.png" />

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk7.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=eb363b3a4601ed1390b0758e1cd5f7d7" alt="Cloudtalk7 Pn" width="1920" height="878" data-path="images/Cloudtalk7.png" />

Click **Update** to complete the integration setup.

## B. Using the Zuper–CloudTalk Integration

Once the integration is configured, you can send **Text Messages** directly from Zuper using your CloudTalk number.

1. Navigate to the **Contacts** module from the left panel.

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk8.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=3e9af30bbfcf99af776514300b211217" alt="Cloudtalk8 Pn" width="1906" height="873" data-path="images/Cloudtalk8.png" />

2. Select a contact on the listing page to open its details. On the **Contact Details** page, click **More Actions** (top-right corner) and select **Email/Text Message** from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/sy0JlWjPI2ux23uI/images/Cloudtalk9.png?fit=max&auto=format&n=sy0JlWjPI2ux23uI&q=85&s=1f6b2a5ba7bd11ff6f6b5e9dc43eab0b" alt="Cloudtalk9 Pn" width="1916" height="842" data-path="images/Cloudtalk9.png" />

3. Fill in the following fields:

| **Field** | **Description** |
| :-: | :-: |
| **Contact Via (Mandatory)** | Select SMS to send a notification. |
| **Contact Number (Mandatory)** | Choose the contact’s phone number. |
| **Message Body (Mandatory)** | Enter the message content. |

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk10.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=c1a492f051436055b7758771b2e0a8af" alt="Cloudtalk10 Pn" width="1914" height="874" data-path="images/Cloudtalk10.png" />

Click **Send** to deliver the text message via CloudTalk.

<Note>
  Note: You can trigger messages via the Contacts module, Bulk Text Message action, or Workflow automation.
</Note>

## C. Uninstalling CloudTalk from Zuper

If you no longer need the integration, follow the steps below to uninstall the CloudTalk app.

1. Log in to your **Zuper web app**. Click your **Profile Picture** in the top-right corner. Select **App Store**.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk1.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=2bc9016867f229998cb6d6266d1787fd" alt="Cloudtalk1 Pn" width="1904" height="872" data-path="images/Cloudtalk1.png" />

2. Under **Browse by Category**, select **Telephony, Video & SMS**. Choose **CloudTalk**.

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk2.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=a78098c5f4aa5bb17364957afd189803" alt="Cloudtalk2 Pn" width="1905" height="871" data-path="images/Cloudtalk2.png" />

3. The **CloudTalk** is uninstalled successfully..

<img src="https://mintcdn.com/zuperinc/YpQ83C8aE_U-mgzA/images/Cloudtalk11.png?fit=max&auto=format&n=YpQ83C8aE_U-mgzA&q=85&s=8a0e65ce598cc74cc40f325219927afa" alt="Cloudtalk11 Pn" width="1913" height="578" data-path="images/Cloudtalk11.png" />

With the **Zuper–CloudTalk integration**, businesses can streamline communication and ensure instant notifications for their customers. This one-way integration enables data to flow from Zuper to CloudTalk, automatically sending Text Messages for updates, reminders, and notifications, enhancing efficiency and customer engagement.


## Related topics

- [AI Take and Talk](/Zuper_AI/AI_Take_and_Talk.md)
- [Pre-Requisites](/Integrations/Accounting_and_payments/QBD_Pre.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.