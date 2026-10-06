---
title: "RoofScope"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/RoofScope.md
fetched_at: 2026-10-06T13:30:34.928Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# RoofScope

## Overview

The Zuper and RoofScope integration enables roofing service teams to manage property measurements seamlessly, all within the Zuper platform. With this integration, you can:

* Order a new measurement directly from a Zuper job.
* Sync existing RoofScope projects to Zuper jobs.
* View, edit, and download measurement data.
* Track all measurements in Zuper’s Measurements Tab.

This integration enhances accuracy, visibility, and efficiency across your roofing workflow from measurement to execution.

## **Plans Applicable**

* You need to have a valid **Growth**, **Advantage**, or **Scale** plan in RoofScope to enable measurements in Zuper.
* The customers with **Core** or **Premium** plans on Zuper will have access to the RoofScope integration.

## **Zuper Prerequisites**

* Users must have the “**Order Measurements from External Provider**” role permission enabled to place measurement orders with RoofScope.
* Ensure your settings workspace is set up with the Jobs module enabled.
* For integrations, you will need an API Key and a Scope Token from RoofScope.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=73223b74504827ba3e485aef0958f6d8" alt="ZHS1" width="1914" height="905" data-path="images/ZHS1.png" />

 Once set, users with this role can initiate measurement orders from job details.

### **Managing Measurement Tokens**

Measurement tokens define the specific data points (e.g., lengths, areas) that Zuper pulls from external providers. You can enable or disable these to tailor what appears in your Measurement object in the job details page.

Read more  [**here**](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements)

## How to connect the RoofScope Integration?

1. Log in to your Zuper app, click the **User** icon, and tap on the **App Store**.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope11.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=2f786d9b9cef1b0305752b2e5f08530c" alt="Roofscope11" width="1920" height="878" data-path="images/Roofscope11.png" />

2. Under the **Browse by Category**, select the **Measurements & Estimations** option and choose **RoofScope**.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope25.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=ef247c01e0336dfd9028cac0c399359d" alt="Roofscope25" width="1920" height="878" data-path="images/Roofscope25.png" />

3. On the RoofScope app page, click “**Configure Settings**.”

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope26.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=1fdb9c8f3ca6959847d50f71482599c4" alt="Roofscope26" width="1920" height="878" data-path="images/Roofscope26.png" />

4. Fill in the following details: a. **RoofScope API Key** -  To obtain an API key from RoofScope, email your request to [support@myscopetech.com](mailto:support@myscopetech.com).   b. **RoofScope Scope Token** – Login to RoofScope. From the top right corner, under “**My Details**,” copy the “**Scope API Token**.”
   <Note>
     Note: The RoofScope token is valid for only one year.
   </Note>
    c. **How to Generate a Zuper API Key** You need a Zuper API Key to complete RoofScope setup: Zuper API Keys are essential for securely authenticating and authorizing access to the Zuper API. These keys enable seamless integration with Zuper’s services, allowing developers to build robust applications that leverage real-time data and functionality. Click [**here**](https://docs.zuper.co/Settings/Developer_Hub/API_Keys) to know more.
   <Frame>
     4. **Navigation**: Settings -> Developer Hub -> API Keys
   </Frame>
   Enter your Zuper API Key.

Click “**Update**” to activate RoofScope.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope27.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=c6bed4dbef6b5f1b49a50863a128c38c" alt="Roofscope27" width="1920" height="878" data-path="images/Roofscope27.png" />

Your RoofScope integration is now active and ready to use!

## How to Order a New RoofScope Measurement?

* From any job in Zuper, you can request a new measurement:
* Open the Job Details page. Go to the Measurement tab.
* Click + New Measurement and select “**RoofScope**” from the context menu.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope17.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=ae4f1e829f616582c007bfdb245da67f" alt="Roofscope17" width="1920" height="878" data-path="images/Roofscope17.png" />

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope2.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=a275aaa28960d1d28ede3d76f3141c90" alt="Roofscope2" width="1920" height="878" data-path="images/Roofscope2.png" />

### **Order New Measurement**

Fill in the following details:

*  **Property Type (Mandatory) –** Choose the applicable property type from the dropdown - Residential or Commercial.
* **Measurement Type (Mandatory)** – Choose the type of measurement from the dropdown – **RoofscopeX**, **RoofScope**,**RoofScope +** , **GutterScope**, and **SidingScope**.
* **Deliverable Options (Mandatory)** – Select the delivery options from the dropdown: **Standard** and **Rush**.
* **Auxiliary Building (Mandatory)** – Enter the number of auxiliary buildings covered by this measurement.
* Additional Note for Technicians – Enter the additional information.

  Click “**Next.**”

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope3.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=a5e866aba6f5a580777564969f35f819" alt="Roofscope3" width="1920" height="878" data-path="images/Roofscope3.png" />

## Insurance Claim Details

* Claim / Reference Number – Enter the insurance claim number.
* Date of loss – Enter the date of damage.

After reviewing all fields, click **Place Order**.<br />The new measurement request will appear in the Measurement tab as '**In Progress**' and will be moved to the '**Completed**' status.

<img src="https://mintcdn.com/zuperinc/5CHTxATq5Zam64v6/images/Roofscope5-1.png?fit=max&auto=format&n=5CHTxATq5Zam64v6&q=85&s=6fa25b0f4fdcbff5059ea602b75dc443" alt="Roofscope5 1" width="1920" height="878" data-path="images/Roofscope5-1.png" />

<img src="https://mintcdn.com/zuperinc/5CHTxATq5Zam64v6/images/Roofscope6.png?fit=max&auto=format&n=5CHTxATq5Zam64v6&q=85&s=22f02c7711fc8b10e473414a5a63ef50" alt="Roofscope6" width="1920" height="878" data-path="images/Roofscope6.png" />

## **Select an Existing Project**

If you’ve already created a RoofScope project for the property, you can link it instead of starting fresh:

* The service address auto-fills in the search bar.
* RoofScope displays all matching measurements for that address.
* Select the desired measurement.
* It instantly syncs with the Zuper job.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope18.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=66b92b9d031aace8ac7374ade023274c" alt="Roofscope18" width="1908" height="872" data-path="images/Roofscope18.png" />

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope22.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=21cfdf8170691ce6c517f702ff15a3ad" alt="Roofscope22" width="1920" height="878" data-path="images/Roofscope22.png" />

## Viewing Synced Measurements

When RoofScope measurements are available, they automatically sync to Zuper.

Once measurements are synced back from RoofScope, you can view and manage them in Zuper.

**Viewing Synced Measurements**

* Go to the **Measurement** tab.
* Click the **Completed Measurement Card**.
* Review synced values mapped to Zuper’s standard measurement tokens.
* Click "**View In**" and choose "**PDF**."

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope20.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=235d5f49a5320602bcce37e7a4cd4122" alt="Roofscope20" width="1920" height="878" data-path="images/Roofscope20.png" />

 Click the “**Kebab**” menu to “**Edit**” or “**Remove**” the measurement tokens.

### **Edit the synced measurements.**

* Click the **✏️ Edit** icon or open the **⋮ menu → Edit**.
* Make your changes and save.
* Edited fields display an “Edited” label.
* All edits are logged in **Job Activity**.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope13-1.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=f145423a41211287e4aa9587935ffd43" alt="Roofscope13 1" width="1920" height="878" data-path="images/Roofscope13-1.png" />

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope14.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=28a43f65bb62c737c3b153557253c259" alt="Roofscope14" width="1920" height="878" data-path="images/Roofscope14.png" />

### **Manually sync measurement data**

When you place a measurement order, RoofScope processes the request and automatically sends the data back to Zuper. However, if your order status shows **Completed** in RoofScope but the measurement data has not yet synced in Zuper, you can trigger a manual sync to pull the measurement data.

1. Locate the RoofScope measurement card you want to sync.
2. Select the context menu icon (three-dot icon) on the right side of the measurement card.
3. Select **Sync from RoofScope** from the menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/gVuF8x8sTxUbM74i/images/GAFnew1-1.png?fit=max&auto=format&n=gVuF8x8sTxUbM74i&q=85&s=3c3f7787f51ca2838889b066ecc577d3" alt="GA Fnew1 1" width="1920" height="878" data-path="images/GAFnew1-1.png" />
</Frame>

### **Removing Measurements**

* Open the **⋮ Menu** → **Remove**.
* Confirm removal.
* Measurement is unlinked from the job, and the action is logged in **Job Activity**.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope21.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=8f544e7e565e53d28a9718a918610769" alt="Roofscope21" width="1920" height="878" data-path="images/Roofscope21.png" />

* Click the “**Activity**” tab to view all the measurement-related activities.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview25.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=8599d6e0301aefca24720ffc27254a6a" alt="Eagleview25" width="1920" height="878" data-path="images/Eagleview25.png" />

## How to Uninstall RoofScope from Zuper? 

1. Click on your Profile Picture in the top right corner of the screen and select the “**App Store."**

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope11.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=2f786d9b9cef1b0305752b2e5f08530c" alt="Roofscope11" width="1920" height="878" data-path="images/Roofscope11.png" />

2. Under the “**Browse by Category**,” select the “**Measurements and Estimations**” option and choose “**RoofScope**.”

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope25.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=ef247c01e0336dfd9028cac0c399359d" alt="Roofscope25" width="1920" height="878" data-path="images/Roofscope25.png" />

3. Click the “**Uninstall**” button. The uninstallation is successfully done.

<img src="https://mintcdn.com/zuperinc/osz7CqocwrZuWB17/images/Roofscope23.png?fit=max&auto=format&n=osz7CqocwrZuWB17&q=85&s=e9d0e6c43fa9def7cb3002e470bee753" alt="Roofscope23" width="1920" height="878" data-path="images/Roofscope23.png" />

### FAQs

<AccordionGroup>
  <Accordion title="Who can install and configure the RoofScope integration in Zuper?">
    Only Zuper users with **Admin** privileges can install apps from the App Store. The user must also have a valid **RoofScope API Key** and **RoofScope Scope Token** to authenticate during setup.
  </Accordion>

  <Accordion title="How do I get the RoofScope API key?">
    Email your request to [support@myscopetech.com](mailto:support@myscopetech.com). Once RoofScope provisions the key, add it in Zuper:

    **Navigation:** App Store → RoofScope → Configure Settings → RoofScope API Key
  </Accordion>

  <Accordion title="How do I get the RoofScope Scope Token?">
    1. Log in to your RoofScope account.
    2. Open **My Details** from the top-right menu.
    3. Copy the **Scope API Token**.
    4. Paste it in Zuper under **App Store → RoofScope → Configure Settings → RoofScope Scope Token**.
  </Accordion>

  <Accordion title="What is the validity of the RoofScope Scope Token?">
    The RoofScope Scope Token is valid for **one year**. After it expires, syncing and ordering measurements will fail until you update the token in Zuper.

    **Navigation:** App Store → RoofScope → Configure Settings → Update
  </Accordion>

  <Accordion title="Do I need a Zuper API key for this integration? How do I generate one?">
    Yes. A Zuper API key is required to complete the RoofScope integration setup.

    1. Navigate to **Settings → Developer Hub → API Keys**.
    2. Generate or copy your API key.
    3. Paste it into the RoofScope configuration screen in the Zuper App Store.

    For more details, see [API Keys](https://docs.zuper.co/Settings/Developer_Hub/API_Keys).
  </Accordion>

  <Accordion title="Which Zuper plans support the RoofScope integration?">
    The RoofScope integration is available on **Core** and **Premium** Zuper plans.
  </Accordion>

  <Accordion title="Which RoofScope plans are required to use RoofScope measurements inside Zuper?">
    You need an active **Growth**, **Advantage**, or **Scale** plan in RoofScope to enable measurements in Zuper.
  </Accordion>

  <Accordion title="Can I link multiple RoofScope orders to a single Zuper job?">
    Yes, you can link multiple RoofScope measurement projects to a single Zuper job.
  </Accordion>

  <Accordion title="Why don't I see my existing RoofScope project when searching?">
    Ensure the following:

    * The service address in Zuper matches the address in RoofScope exactly, including unit or apt number.
    * You are logged into RoofScope with an account that has access to that project.
  </Accordion>

  <Accordion title="Are edits made in Zuper synced back to RoofScope?">
    No. Edits made in Zuper are local only and do not update the original RoofScope project.
  </Accordion>

  <Accordion title="What if a measurement stays 'In Progress' for too long?">
    Reach out to **RoofScope Support** directly to follow up on the order status.
  </Accordion>

  <Accordion title="Can Field Executives order measurements, or only admins?">
    Admins and users with **custom role access** can order measurements. See [Custom Roles](#custom-roles) for steps to enable the required permission.
  </Accordion>

  <Accordion title="Will removing a measurement in Zuper remove it in RoofScope?">
    No. Removing a measurement in Zuper only unlinks it from the job. The project remains intact in RoofScope and can be re-linked later if needed.
  </Accordion>
</AccordionGroup>


## Related topics

- [Create a Widget](/Create-a-Widget.md)
- [Standard Proposal Template](/Zuper_for_Roofing/standard_proposal.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.