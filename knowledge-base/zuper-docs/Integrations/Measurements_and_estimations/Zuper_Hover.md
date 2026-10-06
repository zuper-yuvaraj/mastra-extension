---
title: "Hover Web"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/Zuper_Hover.md
fetched_at: 2026-10-06T13:30:36.843Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Hover Web

## Overview

The Zuper and Hover integration enables roofing service teams to manage property measurements seamlessly, all within the Zuper platform. With this integration, you can:

✅ Order a new measurement directly from a Zuper job.

✅ Sync existing Hover projects to Zuper jobs.

✅ View, edit, and download measurement data.

✅ Access 3D model via Hover.

✅ Track all measurements in Zuper’s job activity.  

This integration enhances accuracy, visibility, and efficiency across your roofing workflow — from measurement to execution.

## Plan Requirements for Hover Integration

To use the Hover integration with Zuper, ensure that your subscriptions on both platforms support integrations.

| **Section** | **Details** |
| :- | :- |
| **Zuper** | The Hover integration is available only on **Core** and **Premium** plans.<br />If you are on the **Starter** plan, you must upgrade to Core or Premium to access Hover. |
| **Hover** | The **“Pay as You Go”** plan does not support software integrations.<br />You must be on a Hover plan that includes marketplace integration to connect with Zuper. |
| **Next Steps** | If you are unsure about your plan:<br />- Contact **Zuper Support** at [*support@zuper.co*](mailto:support@zuper.co) to confirm or upgrade your Zuper plan.<br />- Contact your **Hover representative** to verify your Hover subscription. |

## **Custom Roles**

You need to enable the permission in a custom role to allow users to order measurements from Hover.

<Note>
  **Note**: By default, only admins or users with the “**Order Measurement from External Provider**” custom role permission can place orders for measurements.
</Note>

1. Navigate to **Users & Teams > Custom Roles**.
2. Click **New Role** or edit an existing one.
3. Enter a **Role Name** (e.g., "Roofing Technician") and **Description**.
4. Select the Jobs module from the List of Modules under Permissions.
5. Search for **Order Measurements from External Provider** in the Jobs Permissions section.
6. Toggle the switch to **On**.
7. Review and enable other related permissions: Click **Save Role** to apply changes.
8. Assign this role to relevant users or teams.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=73223b74504827ba3e485aef0958f6d8" alt="ZHS1 Pn" width="1914" height="905" data-path="images/ZHS1.png" />

Once set, users with this role can initiate measurement orders from job details.

## **Managing Measurement Tokens**

Measurement tokens define the specific data points (e.g., lengths, areas) that Zuper pulls from external providers. You can enable or disable these to tailor what appears in your job details page.

Read more from [here](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements)

## **Connecting to Measurement Providers**

Zuper supports integrations with leading roof measurement services to fetch data like aerial-derived roof specs, 3D visualisations, and high-precision reports.

Read more from [here](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements#connecting-to-measurement-providers)

## How to Enable the Hover Integration?

1. Log in to your Zuper app, click the “**User**” icon, and tap on the “**App Store**”.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Measurements & Estimations**” option and choose “**Hover**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH2.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=4d349f68fc153d5ddb433ef9f505af32" alt="ZH2 Pn" width="1913" height="904" data-path="images/ZH2.png" />

3. On the Hover app page, click “**Install Hover**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH3.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=d268051a1af0891b0d0f1285b5c4f411" alt="ZH3 Pn" width="1920" height="878" data-path="images/ZH3.png" />

4. You will be redirected to Hover for authentication. Click “**Allow**” to authenticate.
   <Note>
     Note: Only Hover Administrators can complete the authentication.
   </Note>
   <img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH4.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=029ff426eac39989a4020c6f7c49e779" alt="ZH4 Pn" width="1209" height="593" data-path="images/ZH4.png" />

## **How to Generate a Zuper API Key**

You need a Zuper API Key to complete Hover setup:

Zuper API Keys are essential for securely authenticating and authorising access to the Zuper API. These keys enable seamless integration with Zuper’s services, allowing developers to build robust applications that leverage real-time data and functionality.

<Frame>
  **Navigation**: *Settings -> Developer Hub -> API Keys*
</Frame>

1. From the settings, select “**Developer Hub**,” choose “**API Keys**,” and click “**+New API Key**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS5.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=4eaf2e9548c01a1c95be5805b187c6b9" alt="ZHS5 Pn" width="1920" height="878" data-path="images/ZHS5.png" />

2. A “**New API Key**” dialog box appears. Enter the “**API Key Name**.” Click the “**Create**” button to generate the API key.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH5.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=d3de959a5855d4c82fa03a0625b147e3" alt="ZH5 Pn" width="1920" height="878" data-path="images/ZH5.png" />

3. The API key is successfully created. Click the copy icon to copy the API key. Paste it into the Hover configuration settings in Zuper

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS6.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=82e364189ceb93cac70df538ffecf400" alt="ZHS6 Pn" width="1811" height="825" data-path="images/ZHS6.png" />

4. Under “**Actions**,” you can view or delete the API key.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH7.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=6173d5c72ce05128e86f99cf2653e4c4" alt="ZH7 Pn" width="1920" height="878" data-path="images/ZH7.png" />

5. Click Configure Settings in the left panel of the Hover app page. Enter your Zuper API Key. Click “**Update**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH13.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=1324a0682d5e362f7f227708f2a2ccda" alt="ZH13 Pn" width="1915" height="897" data-path="images/ZH13.png" />

✅ Your Hover integration is now active and ready to use!

## How to Order a New Hover Measurement?

* From any job in Zuper, you can request a new measurement:
* Open the Job Details page. Go to the **Measurement** tab.
* Click **+ New Measurement**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH14.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=3264692f1ff1df948510bb1f5ccea71b" alt="ZH14 Pn" width="1914" height="903" data-path="images/ZH14.png" />

### **Option 1: Create New Measurement**

Fill in the following details:

 **Project Name -** By default, this field is automatically populated with the **Zuper Job Title** (the name you assigned when creating the job, e.g., *“Smith Residence – Roof Replacement”*).

 **Capture By** – Choose who will capture the property images in Hover:

* **Field Rep**
  * Auto-fills with the assigned field rep’s name, email, and phone number.
  * Use this if your on-site crew will capture images through the Hover app.
* **Homeowner**
  * Auto-fills with the customer’s contact information stored in Zuper.
  * Helpful when you want the homeowner to take their own property photos through Hover.
* **Professional**
  * Manually enter the contact information of another professional (e.g., subcontractor or estimator).
  * Use this if someone outside your team will handle the image capture.

<Note>
  **Note**: The homeowner will receive an email/text invitation to capture images directly from their device.
</Note>

* **Deliverable Type** – Defaults to “**Roof** Only.” <img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH15.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=66f273d6620f96da6498b4faaa97ee8d" alt="ZH15 Pn" width="1911" height="899" data-path="images/ZH15.png" />
* **Service Address** - Pulled from the Zuper job. To make changes, the service address must be updated directly in the job.

✅ After reviewing all fields, click **Submit**.<br />The new measurement request will appear in the Measurement tab as **Pending**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH16.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=0640962cab4780de6496c22a4ceecd1a" alt="ZH16 Pn" width="1913" height="901" data-path="images/ZH16.png" />

### Option 2: Select an Existing Project

If you’ve already created a Hover project for the property, you can link it instead of starting fresh:

1.     The service address auto-fills in the search bar.

2.    Hover displays all matching projects for that address.

3.    Select the desired project.

4.     It instantly syncs with the Zuper job.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH10.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=8ca4b796fa2f7714d568e0214c21e6f7" alt="ZH10 Pn" width="894" height="538" data-path="images/ZH10.png" />

## Viewing Synced Measurements

When Hover measurements are available, it automatically syncs to Zuper:

Once measurements are synced back from Hover, you can view and manage them in Zuper.

**Viewing Synced Measurements**

* Go to the **Measurement** tab.
* Click the **Completed Measurement Card**.
* Review synced values mapped to Zuper’s standard measurement tokens.

**Viewing Visual Assets**

* **PDF Reports**: View inline within Zuper.
* **3D Models**: Click **View** → opens in Hover (login required).

<img src="https://mintcdn.com/zuperinc/bqLf29ESVmgoromR/images/HV1.png?fit=max&auto=format&n=bqLf29ESVmgoromR&q=85&s=63c660a6fdef0663123be83837b75988" alt="HV1 Pn" width="1913" height="851" data-path="images/HV1.png" />

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH18.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=12087f18b3f522388f3fe7391726850b" alt="ZH18 Pn" width="1898" height="900" data-path="images/ZH18.png" />

**Edit the synced measurements.**

* Click the **✏️ Edit** icon or open the **⋮ menu → Edit**.
* Make your changes and save.
* Edited fields display an “**Edited**” label.
* All edits are logged in **Job Activity**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH11.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=3a62b9c454853c3b40d319bd90637b3b" alt="ZH11 Pn" width="1074" height="829" data-path="images/ZH11.png" />

### **Viewing and Managing Measurements**

**Downloading Files**

* Open the **⋮ menu** on the Measurement Card and **Download**.
* Save the complete Hover measurement package locally.

<img src="https://mintcdn.com/zuperinc/VQDdgf-XU7fKrHtJ/images/ZHS14.png?fit=max&auto=format&n=VQDdgf-XU7fKrHtJ&q=85&s=d13fae4b136a02353b40a4222044806d" alt="ZHS14 Pn" width="1165" height="535" data-path="images/ZHS14.png" />

## Manually sync measurement data

When you place a measurement order, Hover processes the request and automatically sends the data back to Zuper. However, if your order status shows **Completed** in Hover but the measurement data has not yet synced in Zuper, you can trigger a manual sync to pull the measurement data.

1. Locate the Hover measurement card you want to sync.
2. Select the context menu icon (three-dot icon) on the right side of the measurement card.
3. Select **Sync from Hover** from the menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/gVuF8x8sTxUbM74i/images/Hovernew1.png?fit=max&auto=format&n=gVuF8x8sTxUbM74i&q=85&s=b3026aa81038a27e867a6ec781fe48ed" alt="Hovernew1" width="1920" height="878" data-path="images/Hovernew1.png" />
</Frame>

### **Removing Measurements**

* Open the **⋮ Menu** → **Remove**.
* Confirm removal.
* Measurement is unlinked from the job, and the action is logged in **Job Activity**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS9.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=2f903de664ba8f7785d7fb1c23f825a8" alt="ZHS9 Pn" width="1165" height="535" data-path="images/ZHS9.png" />

* Click the “**Gallery**” tab to view all the measurement pictures.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS11.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=749eb547de6b8f18961e5ee3b4049380" alt="ZHS11 Pn" width="1912" height="866" data-path="images/ZHS11.png" />

* Click the “**Activity**” tab to view all the measurement-related activities.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS12.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=49d6978fb5f992d9c2918df3c760e438" alt="ZHS12 Pn" width="1909" height="854" data-path="images/ZHS12.png" />

## How to Uninstall Hover from Zuper?

1. Click on your Profile Picture in the top right corner of the screen and select the “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Measurements and Estimations**” option and choose “**Hover**.” Click the “**Uninstall App**” button.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH21.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=cccd55c1a5cb2f554e5004f8aa8c7cea" alt="ZH21 Pn" width="1916" height="904" data-path="images/ZH21.png" />

3. Hover is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH22.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=48d535cac703edce2b6d575901f8a4ad" alt="ZH22 Pn" width="1919" height="902" data-path="images/ZH22.png" />

## FAQs

<AccordionGroup>
  <Accordion title="Who can install and configure the Hover integration in Zuper?">
    Only Zuper users with **Admin** privileges can install apps from the App Store. Additionally, the user must be an **Administrator** in Hover to authenticate during setup.
  </Accordion>

  <Accordion title="What happens if I enter the wrong API key or email during configuration?">
    The integration will fail to sync data. Correct your credentials by navigating to **Settings → App Store → Hover → Configure Settings**, updating the details, and clicking **Save**. You will receive an error prompting you to recapture the measurements.
  </Accordion>

  <Accordion title="Can I link multiple Hover projects to a single Zuper job?">
    Yes, you can link multiple Hover measurement projects to a single Zuper job.
  </Accordion>

  <Accordion title="Why don't I see my existing Hover project when searching?">
    Ensure the following:

    * The service address in Zuper matches the address in Hover exactly, including unit or apt number.
    * You are logged into Hover with an account that has access to that project.
  </Accordion>

  <Accordion title="Are edits made in Zuper synced back to Hover?">
    No. Edits made in Zuper are local only and do not update the original Hover project.
  </Accordion>

  <Accordion title="What if a measurement stays 'In Progress' for too long?">
    Reach out to **Hover Support** directly to follow up on the order status.
  </Accordion>

  <Accordion title="Can Field Executives order measurements, or only admins?">
    Admins and users with **custom role access** can order measurements. See [Custom Roles](#custom-roles) for steps to enable the required permission.
  </Accordion>

  <Accordion title="Will removing a measurement in Zuper remove it in Hover?">
    No. Removing a measurement in Zuper only unlinks it from the job. The project remains intact in Hover and can be re-linked later if needed.
  </Accordion>

  <Accordion title="Where can I view the 3D model of the roof?">
    Click **View** on the Measurement Card to open the full 3D model in your browser via the Hover platform.

    <Note>
      You must be logged into your Hover account to view the 3D model.
    </Note>
  </Accordion>
</AccordionGroup>

 

 


## Related topics

- [Create Your First Inspection Job](/Zuper_for_Roofing/create_inspection.md)
- [Hover Mobile](/Integrations/Measurements_and_estimations/Hover_mobile.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.