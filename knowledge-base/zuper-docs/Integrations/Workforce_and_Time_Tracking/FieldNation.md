---
title: "FieldNation"
source: https://docs.zuper.co/Integrations/Workforce_and_Time_Tracking/FieldNation.md
fetched_at: 2026-10-06T13:30:34.202Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# FieldNation

FieldNation is an on-demand field workforce platform that connects businesses with skilled technicians. This guide outlines how to integrate FieldNation with Zuper, a work order management platform, to enable seamless bi-directional synchronization of job-related information.

The integration allows users to:

* Push work order details from Zuper to FieldNation.
* Sync status updates, notes, and attachments from FieldNation to Zuper.
* Track FieldNation job details directly from Zuper.

## Installing FieldNation in Zuper

Follow these steps to install and configure the FieldNation app in Zuper:

1. Once you are logged in to your Zuper Account, click on your profile picture in the top right corner of the screen and click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Select the "**Workforce and Time Tracking**" option and choose “**FieldNation**.” Select the “****Install App” button.****

<img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-02.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=bb4e299bbc4bf4abdb0e0a657b715f57" alt="Fn N 02 Pn" width="1898" height="874" data-path="Integrations/Miscellaneous/Images/FnN-02.png" />

* Fill in the following fields to connect Zuper and Fieldnation.

  * **Zuper API Key** (Mandatory Field) - Enter the Zuper API key. Refer to [How to Generate a Zuper API Key](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys) for guidance.
  * **Environment** (Mandatory Field) – Enter Zuper’s Environment name. This can be either "**Sandbox**" or " **Production**."
  * **Field Nation OAuth Client ID** (Mandatory Field)  - Enter the OAuth Client ID from the Field Nation account. 
  *  **Field Nation OAuth Client Secret** (Mandatory Field)  - Enter the OAuth Client Secret from the Field Nation account.

  <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-03.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=6b0c491b3950d2812c629778af29a92c" alt="Fn N 02 Pn" width="1921" height="924" data-path="Integrations/Miscellaneous/Images/FnN-03.png" />

  <Note>
    **Note**: You must have a FieldNation account with REST API and Webhooks enabled to obtain the OAuth Client ID and Client Secret.
  </Note>

  <Info>
    **Important**: Click **Generate New Secret** in FieldNation to obtain a new Client ID and Client Secret. Copy these from the pop-up and update them in Zuper, replacing any existing credentials. The "**Copy link**" button in the FieldNation REST API will not work.
  </Info>

  <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-04.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=36d7b45c224e5b362b635d05677bf815" alt="Fn N 04 Pn" width="1922" height="925" data-path="Integrations/Miscellaneous/Images/FnN-04.png" />

  <Warning>
    **Warning**: The old "**Client ID and Client Secret**" should be replaced with the existing copied Client ID and client secret, respectively. 
  </Warning>

  * **Field Nation User Name** (Mandatory Field) – Enter the user name of the Field Nation.
  * **Field Nation Password** (Mandatory Field) – Enter the password of the Field Nation.
  * **Push to Field Nation on** (Mandatory Field)  – The action to push data to Field Nation whenever "**Status Update**," "Assignment," or "**Status Update and Assignment**."

  <Note>
    **Note**: If selecting "Status Update" or "Status Update and Assignment," ensure an active "Status" is configured for the job category in Zuper.
  </Note>

  * **Work Order Creation Status** – Enter the status of the work order from Field Nation.
  * **Work Order Creation User and Team** – Enter the user and team responsible for work order creation. The recommended format for the input: User and Team should have "**:**" Colon separator, followed by "**;**" semi-colon, and select "**No**" to avoid syncing the next set.  (A sample format: Alex: Team California; Peter: Team NewYork). 
  * **Category Mapping**– Map FieldNation categories to Zuper categories, separated by the “**Semi-Colon**”(;).
  * **Sync Notes from Field Nation to Zuper** – Select "**Yes**" to sync notes from Field Nation to Zuper, and select "No" to avoid syncing notes from Field Nation to Zuper. 
  * **Sync attachments from Field Nation to Zuper**– Select "**Yes**" to sync attachments from Field Nation to Zuper, and select "**No**" to avoid syncing attachments from Field Nation to Zuper.
* Select the “**Update**” button to integrate Zuper with Field Nation.

<img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-05.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=c401f489074c8c1b59dea3bde32a5a30" alt="Fn N 05 Pn" width="1921" height="1497" data-path="Integrations/Miscellaneous/Images/FnN-05.png" />

#### Field Nation and FieldNation and Zuper Status Mapping

The following table maps equivalent statuses between FieldNation and Zuper:

| **Field Nation** | **Zuper** |
| - | - |
| On My Way | On My Way |
| Work Done | Completed |
| Postponed | On Hold |
| Canceled | Canceled |
| Checked-In | Started |

## How the Zuper-FieldNation Integration Works

The integration enables bi-directional synchronization between Zuper and FieldNation, ensuring seamless data flow for work orders.

 **Sync Work orders from the Zuper to FieldNation:**

1. The type of work and the payment details are updated in Zuper and synced with FieldNation based on the category mapping.

   <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-06.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=e2191a20f28f299b98c7a7131b5f747d" alt="Fn N 06 Pn" width="979" height="383" data-path="Integrations/Miscellaneous/Images/FnN-06.png" />
2. The schedule details and attachments on FieldNation are updated on Zuper.

   <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-07.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=9c5ac3de8795999c326d3a86972475fa" alt="Fn N 07 Pn" width="979" height="420" data-path="Integrations/Miscellaneous/Images/FnN-07.png" />
3. FieldNation job details can be tracked from the Zuper Job module in a single click. Under the **Other Details** section, locate the FieldNation ID and click **Open Link** to view the work order in FieldNation.

   <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-08.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=667bac1a037308de386817c5867145fa" alt="Fn N 08 Pn" width="979" height="648" data-path="Integrations/Miscellaneous/Images/FnN-08.png" />
4. Track scheduled job times directly within Zuper.

   <img src="https://mintcdn.com/zuperinc/4syE6sZE5Tp-bxMF/Integrations/Miscellaneous/Images/FnN-09.png?fit=max&auto=format&n=4syE6sZE5Tp-bxMF&q=85&s=5bcf53b157aba52eed95abcd63671e6f" alt="Fn N 09 Pn" width="1918" height="793" data-path="Integrations/Miscellaneous/Images/FnN-09.png" />

## Uninstalling FieldNation from Zuper

To remove the FieldNation integration from Zuper:

1. Once you are logged in to your Zuper Account, click on your Profile Picture on the top right corner of the screen & click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Select the "**Workforce and Time Tracking**" option and choose “**FieldNation**.” Select the “****Install App” button.****

<img src="https://mintcdn.com/zuperinc/XVC01XBCdr1xSb37/Integrations/Miscellaneous/Images/FnN-11.png?fit=max&auto=format&n=XVC01XBCdr1xSb37&q=85&s=6b5affb5c1609464fec8896db9e9cdaa" alt="Fn N 11 Pn" width="1898" height="874" data-path="Integrations/Miscellaneous/Images/FnN-11.png" />

3. Click on the “**Uninstall App**” button.

<img src="https://mintcdn.com/zuperinc/XVC01XBCdr1xSb37/Integrations/Miscellaneous/Images/FnN-12.png?fit=max&auto=format&n=XVC01XBCdr1xSb37&q=85&s=a0bfa1d71bd3372b44196ac8bbfd3ef4" alt="Fn N 12 Pn" width="1921" height="1497" data-path="Integrations/Miscellaneous/Images/FnN-12.png" />

4. The FieldNation app will be uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/XVC01XBCdr1xSb37/Integrations/Miscellaneous/Images/FnN-13.png?fit=max&auto=format&n=XVC01XBCdr1xSb37&q=85&s=8c01010e706bf4f5d4a69c30f3f0c960" alt="Fn N 13 Pn" width="1903" height="917" data-path="Integrations/Miscellaneous/Images/FnN-13.png" />

The business can easily ensure that the work order gets updated on Zuper in sync with FieldNation. In addition, with the bi-directional data flow, job details get updated on both apps (FieldNation & Zuper). 


## Related topics

- [AI Field Agent](/Zuper_Mobile_Apps/complete-checklist-with-field-agent.md)
- [Configuring Job Custom Fields](/Settings/Modules/Jobs/Configuring_job_custom_fields.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.