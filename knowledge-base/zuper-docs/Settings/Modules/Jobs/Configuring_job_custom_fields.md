---
title: "Configuring Job Custom Fields"
source: https://docs.zuper.co/Settings/Modules/Jobs/Configuring_job_custom_fields.md
fetched_at: 2026-10-06T13:30:09.777Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Job Custom Fields

**Custom fields** allow businesses to capture additional information specific to their jobs. These fields can be used to store details that are not part of the standard job form, helping teams collect and manage data tailored to their processes.

This guide provides a detailed walkthrough on how to **create, edit, and manage custom fields** to ensure jobs are accurately documented and all relevant information is captured.

<Frame>
  **Navigation**: Settings -> Modules -> Jobs -> Job Custom Fields
</Frame>

## Navigating to job custom fields

To configure job custom fields, follow these steps: 

* Select the “**Settings**” module from the left navigation menu.
* Click “**Modules”** and select “**Jobs”** to open the **Job Settings** page.
* Choose “**Job Custom Fields**.”

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/jcu1.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=6794c62905816264a70d4e894dce39df" alt="Jcu1 Pn" width="1907" height="870" data-path="images/jcu1.png" />

* The existing field groups will be displayed on the left of the screen.

## Creating a new custom field group

To create a new field group: 

* On the left side of the **Field Groups** listing, click **+ Create New**.

<img src="https://mintcdn.com/zuperinc/Z76RxmYf-VEv_vOb/images/custom.png?fit=max&auto=format&n=Z76RxmYf-VEv_vOb&q=85&s=2b7072b3c8ebf2fe3276b861363008ff" alt="Custom Pn" width="1917" height="872" data-path="images/custom.png" />

* In the right panel, enter the following details and click **Save** to create a new custom field group:
  * **Name:** Provide a name for the field group.
  * **Description:** Add a brief description of the group.
  * **Associated categories:** Click **Add Category** to select the category to associate with this custom field group. When this category is selected during job creation, the custom fields from this group will automatically appear for that job.

<img src="https://mintcdn.com/zuperinc/Z76RxmYf-VEv_vOb/images/custom1.png?fit=max&auto=format&n=Z76RxmYf-VEv_vOb&q=85&s=68fdef038337ad15574a0a3944e5efc7" alt="Custom1 Pn" width="1918" height="869" data-path="images/custom1.png" />

**Job Custom Fields Types**

Below are the custom field types you can **drag and drop from the right panel to the left** to create a custom field.

**Text**

* Single-Line Text: This allows you to create a field to enter a single line of free text.
* Multi-Line Text: This allows you to create a field to enter multiple lines of free text.

**Date**

* Date: This allows you to create a field to select a specific date from a calendar.
* Time: This allows you to create a field where you can select a specific time.
* Date & Time: This allows you to create a field where both date and time cn be selected.

**Selection**

* Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
* Multi-Selection: This allows you to create check boxes where the provided options can be checked.
* Drop-Down: This allows you to create a drop-down field with the required list of options.

**Media**

* Upload: This allows you to create a file input field to upload files.

**Misc**

* Look up: This allows you to create a file input field to look up products, users, and assets.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/jcu2.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=4d60e370e2ebcd5f921a5ae6bb28e04c" alt="Jcu2 Pn" width="1914" height="864" data-path="images/jcu2.png" />

When configuring a Lookup field, you can choose the **module** the field should reference:

1. **Products**
   * When selected, the lookup field in the associated job category will allow you to search and select from existing products in Parts and Services.
2. **Users**
   * When configuring Users, you may optionally select a Team and Role to filter the list of users.
   * Once configured, the lookup field in the associated job category will display only those users who match the selected team and role, ensuring accurate assignment.

<img src="https://mintcdn.com/zuperinc/Z76RxmYf-VEv_vOb/images/custom5.png?fit=max&auto=format&n=Z76RxmYf-VEv_vOb&q=85&s=4de82e54f784d70e0270fe67f98be12f" alt="Custom5 Pn" width="1914" height="872" data-path="images/custom5.png" />

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
* **Restrict Access by Custom Role:** Limit access to users with specific roles. This means that only users with the specific role will have access to this field. Other users will not be able to see or interact with it based on the access level assigned. When toggled on, you can choose one or more roles from the dropdown using the "**Add Role Access**" button. For each role, you can set an **Access Level**:
  * Hidden → The field is completely hidden for this role.
  * View Only → The role can see the field but cannot make any changes.
  * View & Edit → The role can see and edit the field.

Once you’ve made the required changes, click **Save** to apply the updates.

<img src="https://mintcdn.com/zuperinc/Z76RxmYf-VEv_vOb/images/custom3.png?fit=max&auto=format&n=Z76RxmYf-VEv_vOb&q=85&s=75c607aee66a7ee997a422151b27f363" alt="Custom3 Pn" width="1919" height="868" data-path="images/custom3.png" />

## Managing Custom Fields

You can **edit, duplicate, or delete custom fields** in Zuper to keep your forms and data structured and up-to-date. Follow these steps:

<Note>
  **How job custom fields are prefilled on creation**

  When creating a job from the Jobs module, custom fields are automatically prefilled from matching **Customer** or **Organization** custom fields only. Fields from other entities such as Assets are not used in this flow.

  To prefill job custom fields from an Asset, create the job directly from the **Asset record** instead. Alternatively, use the Workflow Builder's [Copy Custom Fields](/Workflow_builder/workflow_builder_nodes) node to copy matching field values automatically after job creation.

  Prefill applies only when the field **label matches exactly** across both entities.
</Note>

### Edit a Custom Field

To update the details of any custom field:

1. Click the \*\*Edit \*\* (<Icon icon="pencil" />) icon next to the field you want to modify.
2. The **Edit Field** panel appears on the right. Update the sections as needed.
3. Click **Save** to update the changes.

### Duplicate a Custom Field

Duplicating a field lets you quickly create a new field with the same settings:

1. Click the \*\*clone \*\*(<Icon icon="copy" />) icon next to the field you want to duplicate
2. Update the **Field Name** and other details as needed.
3. Click **Save**.

> Tip: Duplicating is useful when creating similar fields without starting from scratch.

### Delete a Custom Field

To remove fields that are no longer needed, click the Delete (<Icon icon="trash-can" />) icon next to the field.

<img src="https://mintcdn.com/zuperinc/Z76RxmYf-VEv_vOb/images/custom4.png?fit=max&auto=format&n=Z76RxmYf-VEv_vOb&q=85&s=67ef4ddc35ec5aa867c8db053cb6911d" alt="Custom4 Pn" width="1916" height="877" data-path="images/custom4.png" />


## Related topics

- [Configuring Job Card Templates](/Settings/Modules/Jobs/Configuring-job-card-template.md)
- [Configuring Job Checklist](/Settings/Modules/Jobs/Configuring-job-checklist.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.