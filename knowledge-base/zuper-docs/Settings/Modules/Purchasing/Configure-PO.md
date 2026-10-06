---
title: "Configuring Purchasing Settings"
source: https://docs.zuper.co/Settings/Modules/Purchasing/Configure-PO.md
fetched_at: 2026-10-06T13:30:13.924Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Purchasing Settings

Purchasing settings in Zuper allow you to configure and customize how purchase-related processes work across your organization. From approval hierarchies to custom fields and templates, these settings help standardize purchasing workflows, improve compliance, and ensure consistency in purchase orders and material requests.

You can use Purchasing settings to:\
• Define approval flows for purchase orders and material requests\
• Customize vendor, material request, and purchase order forms\
• Create reusable purchase order templates

<Frame>
  **Navigation**: *Settings → Modules → Purchasing*
</Frame>

## General Settings

General settings control approval workflows and default behaviors for purchase orders and material requests.

<Frame>
  **Navigation**: *Settings → Modules → Purchasing → General Settings*
</Frame>

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=cc3e10a3ddc6f88bd603b5027c231619" alt="Set PO" width="1920" height="821" data-path="images/SetPO.png" />

<Tabs>
  <Tab title="Purchase Orders">
    When you open General Settings, you'll land on the **Purchase Orders** tab by default. This allows you to configure general purchase order settings.

    1. **Choose Approval Hierarchy**: Select how purchase orders are approved within your organization. This defines the approval flow before a purchase order is finalized.

    For more information on creating and managing hierarchies, refer to this [article](https://docs.zuper.co/Purchasing/Material-Requests/Material-request-status#create-and-manage-hierarchies).

    2. **Default Email Template**: Choose the default email template that will be used when sending purchase orders to vendors.

    For more information on creating and managing Email Templates, refer to this [article](https://docs.zuper.co/Settings/Miscellaneous/Email_Templates).

    3. **Require Vendor Approval?**: Enable this option if vendor approval is required before a purchase order can proceed. This helps ensure vendor confirmation and accuracy.
  </Tab>

  <Tab title="Material Requests">
    This allows you to configure general material requests settings.

    1. **Choose Approval Hierarchy**: Select the approval hierarchy for material requests. This determines who must approve a request before materials can be purchased or allocated. The hierarchy you configure here applies automatically when a material request is submitted. To learn how material requests are created and submitted, see [Creating a Material Request](https://docs.zuper.co/Purchasing/Material-Requests/Creating-material-request).

           <img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO2.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=2dcd86b51ce77710681a12033cc57d73" alt="Set PO2" width="1910" height="822" data-path="images/SetPO2.png" />

    For more information on creating and managing hierarchies, refer to this [article](https://docs.zuper.co/Purchasing/Material-Requests/Material-request-status#create-and-manage-hierarchies).
  </Tab>
</Tabs>

4. **Automatically send PO to Vendor after Approval?**: When this option is enabled, Zuper automatically sends the purchase order to the vendor by email immediately after approval. If you disable this option, you must send the email to the vendor manually.
   <Note>
     By default, the **Automatically send PO to Vendor after Approval** toggle is set to on.
   </Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/aJLXxmcMfbCxmEf2/images/poset1.png?fit=max&auto=format&n=aJLXxmcMfbCxmEf2&q=85&s=584b9cfd3deb43b217b1150c747f8280" alt="Poset1" width="1920" height="878" data-path="images/poset1.png" />
</Frame>

## Vendor Custom Fields

Vendor custom fields allow you to capture additional information specific to vendors, beyond the standard fields.

<Frame>
  **Navigation**: *Settings → Modules → Purchasing → Vendor Custom Fields*
</Frame>

* Select the **Setting**s module from the left navigation menu.
* Under **Modules**, choose **Purchasing**.
* Select **Vendor Custom Fields**.

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO6.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=233bc0b4008c5963566af5dd2bdd6d62" alt="Set PO6" width="1910" height="826" data-path="images/SetPO6.png" />

* Drag and drop custom fields from the right panel into the form layout.
* Configure field properties as needed.
* Click **Create New** to create a Custom Field group.

## Material Request Custom Fields

Material request custom fields let you collect additional details when users create a material request. Any fields you configure here appear in the **Other Details** section of the material request form. See [Creating a Material Request — Other Details](https://docs.zuper.co/Purchasing/Material-Requests/Creating-material-request#other-details).

<Frame>
  **Navigation**: *Settings → Modules → Purchasing → Material Request Custom Fields*
</Frame>

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPo7.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=a2b21705aae309b6d51a3e795c29a889" alt="Set Po7" width="1910" height="826" data-path="images/SetPo7.png" />

Follow the same steps used for Vendor Custom Fields to add and configure fields for material requests.

## Purchase Order Custom Fields

Purchase order custom fields help you customize purchase order forms with additional information required by your business.

<Frame>
  **Navigation**: *Settings → Modules → Purchasing → Purchase Order Custom Fields*
</Frame>

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO8.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=bc1a37b3164899111d72ae93ca1f0bc1" alt="Set PO8" width="1910" height="826" data-path="images/SetPO8.png" />

Follow the same drag-and-drop process to add and configure fields for purchase orders.

### Custom Field Types Available

You can drag and drop the following types of custom fields across Vendor, Material Request, and Purchase Order forms.

**Text**

1. Single-Line Input: Allows users to enter a single line of free text.
2. Multi-Line Input: Allows users to enter multiple lines of free text.

**Date**

1. Date Input: Allows users to select a specific date from a calendar.
2. Time Input: Allows users to select a specific time.
3. Date Time Input: Allows users to select both date and time.

**Selection**

1. Single-Selection: Creates a radio button field where only one option can be selected.
2. Multi-Selection: Creates checkbox fields where multiple options can be selected.
3. Drop-Down: Creates a drop-down list with predefined options.

**Media**

1. Upload: Allows users to upload files as part of the form.

**Misc**

1. Look Up: Allows users to look up and select products, users, invoices, and quotes.

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO3.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=1728382722eaf48157b5e6cb120b0fd4" alt="Set PO3" width="1916" height="878" data-path="images/SetPO3.png" />

### Configuring Field Types

After dragging and dropping the custom fields from the right panel, fill in the following sections:

**Information**

* **Field Name:** Enter or update the name of the field.
* **Description:** Provide additional details about the field.
* **Placeholder:** Add placeholder text to guide users when filling the field.

**Configuration**

* **Mark as Required Field:** Toggle to make this field mandatory.
* **Mark as Read Only:** Toggle to prevent edits on this field.

**Visibility**

* **Mark as Hidden Field:** Hide the field from all users.
* **Hide to FE / Technician:** Hide the field from field technicians in the mobile app.
* **Restrict Access by Custom Role:** Limit access to users with specific roles. This means that only users with the specific role will have access to this field. Other users will not be able to see or interact with it based on the access level assigned. When toggled on, you can choose one or more roles from the dropdown using the “**Add Role Access**” button. For each role, you can set an **Access Level**:
  * Hidden → The field is completely hidden for this role.
  * View Only → The role can see the field but cannot make any changes.
  * View & Edit → The role can see and edit the field.

Once you’ve made the required changes, click **Save** to apply the updates.

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO4.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=2ded8f07814458aac1392409f8abc200" alt="Set PO4" width="1915" height="864" data-path="images/SetPO4.png" />

## Purchase Order Templates

Purchase order templates allow you to standardize purchase order formats for consistency and professionalism.

<Frame>
  **Navigation**: *Settings → Modules → Purchasing → Purchase Order Templates*
</Frame>

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO9.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=6f3958001fe158edb095e55a977562ea" alt="Set PO9" width="1910" height="826" data-path="images/SetPO9.png" />

1. Select the **Settings** module from the left navigation menu.
2. Under **Modules**, choose **Purchasing**.
3. Select **Purchase Order Templates**.
4. Click **+ New Template**.
5. Fill in the template details.
6. Click **Save Template**.

<img src="https://mintcdn.com/zuperinc/cy313Ukr5aESS7vT/images/SetPO5.png?fit=max&auto=format&n=cy313Ukr5aESS7vT&q=85&s=834e93039b78c89ec8474b0855808375" alt="Set PO5" width="1912" height="824" data-path="images/SetPO5.png" />

Templates help ensure that all purchase orders follow the same structure and include required information.

## Best Practices

* Define approval hierarchies carefully to avoid delays in purchasing
* Use required fields only when necessary to keep forms user-friendly
* Hide internal-only fields from technicians to reduce confusion
* Use templates to maintain consistent branding and information across purchase orders


## Related topics

- [Connect Your SRS Account](/Integrations/Purchasing/SRS-setup.md)
- [Creating a Material Request in Web](/Purchasing/Material-Requests/Creating-material-request.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.