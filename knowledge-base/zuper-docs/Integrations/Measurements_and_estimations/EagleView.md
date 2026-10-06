---
title: "EagleView"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/EagleView.md
fetched_at: 2026-10-06T13:30:34.524Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# EagleView

## Overview

The Zuper-EagleView integration lets roofing teams handle property measurements easily—all in Zuper.

Key features:

✅ Initiate new measurements seamlessly from within a Zuper job.

✅ Integrate pre-existing EagleView projects with Zuper jobs effortlessly.

✅ Easily access, modify, and export measurement information.

✅ Monitor all measurements centrally in Zuper’s Measurements Tab.

This seamless integration boosts precision, transparency, and productivity throughout your roofing operations—from initial assessments to project completion.

## Plan availability

* **Zuper**: The EagleView integration is available only on **Core** and **Premium** plans.

## **Zuper Prerequisites**

* You must have admin access or permissions to edit custom roles and job settings.
* Ensure your settings workspace is set up with the Jobs module enabled.
* For integrations, you'll need credentials from the external provider.
* The customers with Core and Premium plans on Zuper will have access to EagleView.

## **Custom roles**

You need to enable the relevant permission in a custom role to allow users to order measurements from external providers.

1. Navigate to **Users & Teams > Custom Roles**.
2. Click **New Role** or edit an existing one.
3. Enter a **Role Name** (e.g., "Roofing Technician") and **Description**.
4. Select the Jobs module from the List of Modules under Permissions.
5. Search for Order Measurements from External Provider in the Jobs Permissions section.
6. Toggle the switch to **On** (it will turn blue).
7. Review and enable other related permissions: Click **Save Role** to apply changes.
8. Assign this role to relevant users or teams.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=73223b74504827ba3e485aef0958f6d8" alt="ZHS1 Pn" width="1914" height="905" data-path="images/ZHS1.png" />

Once set, users with this role can initiate measurement orders from job details.

## **Managing measurement tokens**

Measurement tokens define the specific data points (e.g., lengths, areas) that Zuper pulls from external providers. You can enable or disable these to tailor what appears in your Measurement object in the job details page.

Read more from [**here**](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements)

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZHS2.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=a8ae48b00836cffe8c24b7964b5dcdb7" alt="ZHS2 Pn" width="1911" height="899" data-path="images/ZHS2.png" />

## **Connecting to measurement providers**

Zuper supports integrations with leading roof measurement services to fetch data, including aerial-derived roof specs, and high-precision reports.

Read more from [**here**](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements#connecting-to-measurement-providers)

## How to install the EagleView integration?

1. Log in to your Zuper app, click the “**User**” icon, and tap on the “**App Store**”.

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

2. Under the “**Browse by Category**,” select the “**Measurements & Estimations**” option and choose “**EagleView**.”

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagle23.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=b81e28a84de587865b8171b3c3f9ec73" alt="Eagle23 Pn" width="1912" height="906" data-path="images/Eagle23.png" />

3. Authenticate to login to EagleView. Enter the User ID and Password. Click “**Sign in**”

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview3.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=38e383fd72b543f20d3bfa1fb86613ec" alt="Eagleview3 Pn" width="1920" height="878" data-path="images/Eagleview3.png" />

4. On the EagleView app page, click “**Install EagleView**.”

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview4.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=47c77d72a3fc0be72f0293fed856f1cb" alt="Eagleview4 Pn" width="1920" height="878" data-path="images/Eagleview4.png" />

4. You will be redirected to EagleView for authentication. Click “Allow” to authenticate.

⚠️ Note: Only EagleView Administrators can complete the authentication.

### **How to generate a Zuper API Key**

You need a Zuper API Key to complete EagleView setup:

Zuper API Keys are essential for securely authenticating and authorizing access to the Zuper API. These keys enable seamless integration with Zuper’s services, allowing developers to build robust applications that leverage real-time data and functionality. Click [here](https://docs.zuper.co/Settings/Developer_Hub/API_Keys) to know more.

<Frame>
  **Navigation**: *Settings -> Developer Hub -> API Keys*
</Frame>

Enter your Zuper API Key.

Click “**Update**.”

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview5.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=078ba969d556c93d87ac405baec34018" alt="Eagleview5 Pn" width="1920" height="878" data-path="images/Eagleview5.png" />

Your EagleView integration is now active and ready to use!

## How to Order a new EagleView measurement?

* From any job in Zuper, you can request a new measurement:
* Open the Job Details page. Go to the Measurement tab.
* Click + New Measurement (top-right) and select “**EagleView**” from the context menu.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview11.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=ffb8e8427c3ec5f359519133d562ec98" alt="Eagleview11 Pn" width="1920" height="878" data-path="images/Eagleview11.png" />

<Warning>
  **Alert: A credit card is required before placing an order**

  A valid credit card must be on file in your EagleView account to submit a measurement order.  To add a card, log in to EagleView and navigate to **Billing → Payment Methods**.
</Warning>

After reviewing all fields, click **Place Order**. The new measurement request will appear in the Measurement tab as **In Progress**.

### **Order new measurement**

Fill in the following details:

* **Property Type (Mandatory) –** The user must select whether the property is **Residential** or **Commercial**.
* **Measurement Type (Mandatory)** - The user must choose the type of measurement they want to order.
* **Deliverable Type (Mandatory)** –  The user must select a delivery option. The delivery types displayed are dependent on the **Measurement Type** selected.
* **Measurement Instruction (Mandatory)** – The user must select a measurement instruction. The available instructions shown will depend on the **Measurement Type** selected.
* **Special Instructions** – Enter the key instructions for EagleView and click **Next**.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview12.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=1505e0e4bbf8c4ea9f564ad901b2dde9" alt="Eagleview12 Pn" width="1920" height="878" data-path="images/Eagleview12.png" />

**Additional Information**

* Send a copy of the report to – Users can choose to receive a**copy of the report**  at additional email addresses.
* Promo Code –**If the user has a valid promo code** , it can be entered in the **Promo Code** field.
* If the job involves an insurance claim, the user can enable the **“This job involves an insurance claim”** toggle.<br />Enabling this will display additional fields where the user can enter **Claim Number, Claim Information, PO Number, Date of Loss, and CAT ID**.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview13.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=62430266ea05afed9da1c4fc0210929c" alt="Eagleview13 Pn" width="1920" height="878" data-path="images/Eagleview13.png" />

* After reviewing all fields, click **Place Order**. The new measurement request will appear in the Measurement tab as **In Progress**.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview16.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=5525c7616dd45f5993e8dbdfe5234c0b" alt="Eagleview16 Pn" width="1920" height="878" data-path="images/Eagleview16.png" />

## Select an existing project

If you’ve already created an EagleView project for the property, you can link it instead of starting fresh:

* The service address auto-fills in the search bar.
* EagleView displays all matching measurements for that address.
* Select the desired measurement.
* It instantly syncs with the Zuper job.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview14.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=fe7e4d3a2baa16cf6a2af5842893d430" alt="Eagleview14 Pn" width="1920" height="878" data-path="images/Eagleview14.png" />

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview16.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=5525c7616dd45f5993e8dbdfe5234c0b" alt="Eagleview16 Pn" width="1920" height="878" data-path="images/Eagleview16.png" />

### Viewing synced measurements

* When EagleView measurements are available, it automatically syncs to Zuper:
* Once measurements are synced back from EagleView, you can view and manage them in Zuper.

**Viewing synced measurements**

* Go to the **Measurement** tab.
* Click the **Completed Measurement Card**.
* Review synced values mapped to Zuper’s standard measurement tokens.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview26.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=1f9256d32b274641ded728e2ebbe7184" alt="Eagleview26" width="1920" height="878" data-path="images/Eagleview26.png" />

## Manually sync measurement data

When you place a measurement order, EagleView processes the request and automatically sends the data back to Zuper. However, if your order status shows **Completed** in EagleView but the measurement data has not yet synced in Zuper, you can trigger a manual sync to pull the measurement data.

1. Locate the EagleView measurement card you want to sync.
2. Select the context menu icon (three-dot icon) on the right side of the measurement card.
3. Select **Sync from EagleView** from the menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/ZotBCEnFCU_X4-lr/images/Egv1.png?fit=max&auto=format&n=ZotBCEnFCU_X4-lr&q=85&s=78358ded7ab1041768a06b379f553539" alt="Egv1" width="1920" height="878" data-path="images/Egv1.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/jdkjYWmpWdLe79-K/images/Egv2-1.png?fit=max&auto=format&n=jdkjYWmpWdLe79-K&q=85&s=564a997769b65cd40fe7bef58ac923ae" alt="Egv2 1" width="1920" height="878" data-path="images/Egv2-1.png" />
</Frame>

## **Removing measurements** 

* Click the **⋮ Menu** → **Remove**.
* Confirm removal.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview21.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=78e7fdadd1014c736859ed9e00c56c3c" alt="Eagleview21 Pn" width="1920" height="878" data-path="images/Eagleview21.png" />

* Measurement is unlinked from the job, and the action is logged in **Job Activity**.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview25.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=8599d6e0301aefca24720ffc27254a6a" alt="Eagleview25 Pn" width="1920" height="878" data-path="images/Eagleview25.png" />

* Click the “**Gallery**” tab to view all the measurement pictures.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview24.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=2dc24ce0afc363eafc715e3f6e208b44" alt="Eagleview24 Pn" width="1920" height="878" data-path="images/Eagleview24.png" />

## How to uninstall EagleView from Zuper? 

1. Click on your Profile Picture in the top right corner of the screen and select the “**App Store**.”

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

2. Under the “**Browse by Category**,” select the “**Measurements and Estimations**” option and choose “**EagleView**.”

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview1.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=57c8bc14e21607203c644f5e8b648f72" alt="Eagleview1 Pn" width="1920" height="878" data-path="images/Eagleview1.png" />

3. Click the “**Uninstall**” button.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview6.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=322e40a00624abd410ff55145e3d7f1e" alt="Eagleview6 Pn" width="1920" height="878" data-path="images/Eagleview6.png" />

4. EagleView is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/Upc8TAtzw21tq2Pp/images/Eagleview7.png?fit=max&auto=format&n=Upc8TAtzw21tq2Pp&q=85&s=fdd60d5aa39e8fcb57eacfa2a8a930a6" alt="Eagleview7 Pn" width="1920" height="878" data-path="images/Eagleview7.png" />

## FAQs

<AccordionGroup>
  <Accordion title="Who can install and configure the EagleView integration in Zuper?">
    Only Zuper users with **Admin** privileges can install apps from the App Store. Additionally, the user must be an **Administrator** in EagleView to authenticate during setup.
  </Accordion>

  <Accordion title="What happens if I enter the wrong API key or email during configuration?">
    The integration will fail to sync data. Go back to **Settings → App Store → EagleView → Configure Settings** to correct the details and click **Save**. You will receive an error to recapture the measurements.
  </Accordion>

  <Accordion title="Can I link multiple EagleView orders to a single Zuper job?">
    Yes, you can link multiple EagleView measurement projects to a single Zuper job.
  </Accordion>

  <Accordion title="Why don't I see my existing EagleView project when searching?">
    Ensure the following:

    * The service address in Zuper matches the address in EagleView (including unit/apt #).
    * You are logged into EagleView with an account that has access to that project.
  </Accordion>

  <Accordion title="Are edits made in Zuper synced back to EagleView?">
    No. Edits in Zuper are local only and do not update the original EagleView project.
  </Accordion>

  <Accordion title="What if a measurement stays 'In Progress' for too long?">
    Reach out to **EagleView Support** directly to follow up on the order status.
  </Accordion>

  <Accordion title="Can Field Executives order measurements, or only admins?">
    Admins and users with **custom role access** can order measurements. See [Custom Roles](#custom-roles) for steps to enable the required permission.
  </Accordion>

  <Accordion title="Will removing a measurement in Zuper remove it in EagleView?">
    No. Removing a measurement in Zuper only unlinks it from the job. The project remains intact in EagleView and can be re-linked later if needed.
  </Accordion>

  <Accordion title="Why is a credit card required, and how do I add one?">
    EagleView requires a valid credit card on file before a measurement order can be submitted.

    To add a card, log in to your EagleView account and navigate to **Billing → Payment Methods**.
  </Accordion>
</AccordionGroup>


## Related topics

- [Get roof insights with Property Intelligence](/Get-Roof-Property-Intelligence.md)
- [Kanban Views](/Work_Order_Management/Jobs/Kanban_View.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.