---
title: "Configuring Customer-Contact Settings"
source: https://docs.zuper.co/Settings/Modules/Customers-Contacts/Customers-Contacts-Settings.md
fetched_at: 2026-10-06T13:30:11.740Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Customer-Contact Settings

Customer and contact settings control how Zuper stores, displays, and manages the people and businesses you work with. From here, you decide which fields are required, who on your team can create or edit records, how billing cycles work, and when automated reminders go out. Getting these settings right saves your team time every day and keeps your customer data consistent across jobs, invoices, and reports.

<Frame>
  **Navigation**: *Settings -> Modules -> Customers-Contacts - > Customers-Contacts General Settings*
</Frame>

## **Customer-contact General settings**

General settings control the core behavior of every customer and contact record in Zuper. Use these toggles to set up unique identifiers, debt alerts, payment options, and portal access before your team starts adding records.

Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Customer/Contact**.” Select the “**Customer/Contact General Settings**.”

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu8.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=0343267a7f8820f811ece2b2ac1f24ed" alt="Configjcu8" width="1920" height="878" data-path="images/configjcu8.png" />

**Select a unique field for customer/contact**<br />Choose the field Zuper uses to identify each customer or contact record uniquely. This prevents duplicate records and helps your team find the right customer quickly.

**Show a bad debt alert upon choosing a customer/contact**<br />Toggle to **Yes** to display a warning when a customer with an outstanding bad debt balance is selected on a job or invoice. Toggle to **No** to turn off this alert.

<Note>
  Enable this setting if your team regularly works with customers who have overdue balances. The alert appears at the point of selection, so your team can take action before work begins.
</Note>

**Allow payment card on file**<br />Toggle to **Yes** to let your team store a customer's payment card against their record. Toggle to **No** to turn off this option.

**Enable billing cycle**<br />Toggle to **Yes** to activate billing cycle functionality for customers and contacts. Toggle to **No** to turn it off.

**Does customer/contact need an account manager**<br />Toggle to **Yes** to allow an account manager to be assigned to each customer or contact record. Toggle to **No** to remove this option.

**Enforce geo-location in address**<br />Toggle to **Yes** to require a verified geo-location when an address is entered on a customer or contact record. Toggle to **No** to allow addresses without location verification.

**Enable portal access by default** Toggle to **Yes** to automatically grant new customers and contacts access to your customer portal when their record is created — this also triggers an automatic portal invitation (welcome) email to the customer. Toggle to **No** to require manual setup of portal access and skip the welcome email by default.

<Note>
  This setting controls the default for all new records. To control portal access and the welcome email for a single contact instead, use the **Portal Access** field on that contact's creation form — see [Adding new contact](/Client/Contact/Create_contact#portal-details).
</Note>

<AccordionGroup>
  <Accordion title="Enable lead source">
    Lead source tracking lets you record where each new customer or job originates — for example, a website form, a phone call, or a referral. When this setting is on, the **Lead Source** field appears on customer, contact, and job records, and becomes available in filters, reports, and dashboards.

    <Frame>
      **Navigation**: *Settings → Modules → Customer/Contact → Customer/Contact General Settings*
    </Frame>

    **Track lead source**<br />Toggle to **Yes** to enable lead source tracking for new and existing customers and contacts. Toggle to **No** to turn off this field across all records.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/4wTLPR-NlfdalbHh/images/lesource3.png?fit=max&auto=format&n=4wTLPR-NlfdalbHh&q=85&s=b610e76c1906775c5e99bd611dc21dc8" alt="Lesource3" width="1920" height="878" data-path="images/lesource3.png" />
    </Frame>

    <Note>
      You must also create individual lead sources before your team can select them on records. See [Lead sources](#lead-sources) below for steps to add sources.
    </Note>

    Select **Save** at the top right of the page to apply your changes.
  </Accordion>

  <Accordion title="Auto-create property">
    [**Automatically create property upon customer/contact creation**](https://docs.zuper.co/Client/Contact/Create_contact#auto-create-property)<br />Toggle to **Yes** to have Zuper automatically create a linked property record each time a new contact is created. Toggle to **No** to turn off automatic property creation.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/zPFSMPwA21WlsNQ-/images/autpr6.png?fit=max&auto=format&n=zPFSMPwA21WlsNQ-&q=85&s=7ec8f12938e157a8cc16c12cea0d61c7" alt="Autpr6" width="1920" height="878" data-path="images/autpr6.png" />
    </Frame>

    <Note>
      This setting must be enabled by your administrator. When it is on, every new contact generates a corresponding property record without any additional steps from your team — useful if your business always associates a service address with each contact.
    </Note>
  </Accordion>
</AccordionGroup>

Click **Save** in the top-right corner.

## **Access / Permissions**

Access and permissions settings control what team leaders and field executives can see and do within the Customers/Contacts module. Review these settings carefully — they affect what your field team can access on the mobile app.

<Frame>
  **Navigation**: *Settings → Modules → Customer/Contact → Customer/Contact General Settings*
</Frame>

Configure the following options:

**Can team leader view all customers/contacts**<br />Toggle to **Yes** to give team leaders visibility of all customer and contact records. Toggle to **No** to restrict their view.

**Can field executive create new customer/contact**<br />Toggle to **Yes** to allow field executives to add new customer and contact records from the mobile app. Toggle to **No** to prevent this.

**Can field executive edit customer/contact details**<br />Toggle to **Yes** to allow field executives to update existing customer and contact records. Toggle to **No** to make records read-only for field executives.

**Can field executive view all customers/contacts**<br />Toggle to **Yes** to give field executives access to all customer and contact records. Toggle to **No** to limit their visibility.

**Does field executive require facial authentication to view customers/contacts**<br />Toggle to **Yes** to require field executives to complete facial authentication before viewing customer or contact records. Toggle to **No** to remove this requirement.

**Can field executive view customers/contacts without punching in**<br />Toggle to **Yes** to allow field executives to view records before they punch in to a shift. Toggle to **No** to require a punch-in before access is granted.

Select **Save** at the top right of the page to apply your changes.

<Accordion title="Create lead sources">
  Lead sources are the specific channels you want to track —  Website, Phone Call, Instagram, or Referral. Once you create a lead source here, your team can select it on customer, contact, and job records. Lead sources feed into your filters, dashboards, and reports, giving you a clear view of which channels bring in the most business.

  <Frame>
    **Navigation**: *Settings → Modules → Customer/Contact → Lead Sources*
  </Frame>

  ### Add a lead source

  1. Select **Settings** from the left navigation panel.
  2. Under **Modules**, select **Customer/Contact**.
  3. Select **Lead Sources**.

  <Frame>
    <img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu9.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=89c5a186da91bde1c765c3d7df172f0e" alt="Configjcu9" width="1920" height="878" data-path="images/configjcu9.png" />
  </Frame>

  4. Select + New Source.

  <Frame>
    <img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu14.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=141f35e81ba4240097661225ec132fbc" alt="Configjcu14" width="1920" height="878" data-path="images/configjcu14.png" />
  </Frame>

  5. Enter the source name in the field provided.

  <Frame>
    <img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu15.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=d773c6f0c1cec824940ec15b7e10fb75" alt="Configjcu15" width="1920" height="878" data-path="images/configjcu15.png" />
  </Frame>

  Select Create. The new lead source appears in the list and is immediately available for selection on customer, contact, and job records.
</Accordion>

## **Customer/contact category**

Categories let you group customers and contacts by type — for example, Residential, Commercial, or VIP. Each category can carry its own service level agreement (SLA) duration, so Zuper can track whether jobs for that group are completed on time.

<Frame>
  **Navigation**: *Settings → Modules → Customer/Contact → Customer/Contact Category*
</Frame>

1. Select **Settings** from the left navigation panel.
2. Under **Modules**, select **Customer/Contact**.
3. Select **Customer/Contact Category**.

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu10.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=90aaa72eaa1d29c1549319dfde7fec77" alt="Configjcu10" width="1920" height="878" data-path="images/configjcu10.png" />

4. Select **+ New Category**.

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Co9.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=244e9b4bbf7b453cd48016d03333bdcc" alt="Co9 Pn" width="1912" height="871" data-path="images/Co9.png" />

A dialog box appears. Enter the following details:

* **Category name** *(required)*: Enter a name for the category.
* **SLA duration**: Set the expected time to complete service for customers in this category. Enter a value in days, hours, and minutes.
* **Category description**: Enter a brief description of the type of customers or contacts that belong to this category.

6. Select **Create**. The new category appears in the list and is available for selection on customer and contact records.

<Note>
  Fields marked with an asterisk (\*) are required. You cannot create a category without entering a category name.
</Note>

## **Billing frequency**

1. Select **Settings** from the left navigation panel.
2. Under **Modules**, select **Customer/Contact**.
3. Select **Billing Frequency**.

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Co3.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=2d9405ba07ab3969cc4e1c3efcb58308" alt="Co3.png" width="1914" height="877" data-path="images/Co3.png" />

4. Select **+ New Billing Frequency**.

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Co10.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=086cbc02073c1b243ee68761672ac585" alt="Co10 Pn" width="1910" height="874" data-path="images/Co10.png" />

5. Enter the following details:

* **Billing frequency name**: Enter a name for this frequency — for example, Monthly or Quarterly.
* **Frequency type**: Select the type that applies.
* **Billing frequency period**: Enter the number of days in the billing period.

3. Enter the billing frequency, choose the frequency type, and the billing frequency period (in days).

Click “**Create**” to create the billing frequency.

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Co11.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=9904af3bac9f31e778c11d1a41c76d5f" alt="Co11 Pn" width="1903" height="871" data-path="images/Co11.png" />

<Note>
  The **Enable Billing Cycle** toggle in [General Settings](#customer-contact-general-settings) must be turned on before billing frequencies appear on customer and contact records.
</Note>

## **Customers-contacts custom fields**

<Frame>
  **Navigation**: Settings -> Modules -> Customer-Contact -> Customer-Contact Custom Fields
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the " **Customer-Contact.**" Select the "**Customer-Contact Custom Fields**."

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Co4.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=53c35f80994710ef8791ec0c7f9d41ff" alt="Co4 Pn" width="1914" height="877" data-path="images/Co4.png" />

Custom fields let you capture information about customers and contacts that Zuper does not collect by default — for example, a preferred contact time, a contract reference number, or a property type. You build custom fields by dragging field types from the right panel onto the form layout.

<Frame>
  **Navigation**: *Settings → Modules → Customer/Contact → Customer/Contact Custom Fields*
</Frame>

### Add custom fields

1. Select **Settings** from the left navigation panel.
2. Under **Modules**, select **Customer/Contact**.
3. Select **Customer/Contact Custom Fields**.
4. Drag a field type from the right panel onto the form layout. The following field types are available:

**Text**

* **Single-line input**: Captures a single line of free text.
* **Multi-line input**: Captures multiple lines of free text — useful for notes or descriptions. **Date**
* **Date input**: Lets the user select a date from a calendar.
* **Time input**: Lets the user select a specific time.
* **Date and time input**: Lets the user select both a date and a time together. **Selection**
* **Single-selection**: Displays radio buttons where only one option can be chosen.
* **Multi-selection**: Displays checkboxes where one or more options can be chosen.
* **Drop-down**: Displays a drop-down list of options. **Media**
* **Upload**: Allows a file to be attached to the record. **Miscellaneous**
* **Look up**: Lets the user search for and select a product from the Parts and Services module.

### Control field behavior

After you add a field, you can adjust how it behaves using the following options:

| Option | What it does |
| - | - |
| **Mark as required field** | Makes the field mandatory before a record can be saved. |
| **Mark as read only** | Displays the field value but prevents users from editing it. |
| **Mark as hidden field** | Hides the field from all users. It does not appear on the form. |
| **Hide to field executive/technician** | Hides the field from field executives and technicians on the mobile app. |

5. Select **Create New** to save the custom field group.

<Tip>
  Use the **Mark as required field** option for any information your team must collect on every new record. This keeps your data complete from the start.
</Tip>

## **Customer/contact reminder**

Reminders are automated messages sent to customers or your team at a set time before or after a job event. Use them to reduce no-shows, prompt action, or keep customers informed without manual follow-up.

<Frame>
  **Navigation**: *Settings -> Modules -> Customer-Contact -> Customer-Contact Custom Notifications*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” click “**Customer/Contact Notifications**.”

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu1.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=1ed3f862b819b6426ec2393fb5f0405e" alt="Configjcu1" width="1903" height="876" data-path="images/configjcu1.png" />

2. Click “**+ New Reminder**.”

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu2.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=1d17474e43967a8364440bf367a12b71" alt="Configjcu2" width="1920" height="878" data-path="images/configjcu2.png" />

3. Fill in the reminder details

* Reminder Name: Enter a name for the reminder.
* Job Category: Select the job category.
* Notification Type: Choose the type of notification.
* Remind Type: Select the reminder type.
* Remind At / Before: Set a specific time for the reminder.
* SMS / Email Body: Enter the message content. Use the Available  Components dropdown to insert dynamic fields, such as customer fields or job details (e.g., "The scheduled job starts at...").
* Notify for Unassigned Jobs: Check this box to receive a reminder to apply.

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu3.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=edba1cf10d041ef38366e5d289124770" alt="Configjcu3" width="1920" height="878" data-path="images/configjcu3.png" />

 Click “**Save Reminder**” to save the reminder.

## **Customer/contact alerts**

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” click “**Customer/Contact Notifications**.”

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu1-1.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=9c98e8c8e0c77b8842fc7eacd912298e" alt="Configjcu1 1" width="1903" height="876" data-path="images/configjcu1-1.png" />

2. Click “**+ New Notification**.”

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu5.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=ea631f19e767bb83918e06761c920ba4" alt="Configjcu5" width="1920" height="878" data-path="images/configjcu5.png" />

3. Enter the following details:

* **Notification name**: Enter a clear, descriptive name for the alert — for example, "Job completed notification."
  * **Notification type**: Select whether the alert is sent by SMS, email, or both.
  * **Job category**: Select the job category this alert applies to.
  * **Job status**: Select the job status that triggers this alert — for example, Completed or On My Way.
  * **SMS/email body**: Enter the message to be sent. Select the **Available components** drop-down to insert dynamic fields and personalize the message automatically.

Click “**Save Notification**” to set the notification.

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu6.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=337d6444c43361157b876ef0167de4b0" alt="Configjcu6" width="1920" height="878" data-path="images/configjcu6.png" />

Click “**Save Reminder**” to save the alert.


## Related topics

- [Configuring Contract Settings](/Settings/Modules/Contracts/contracts-settings.md)
- [Configuring Job Notifications ](/Settings/Modules/Jobs/configuring_job_notifications.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.