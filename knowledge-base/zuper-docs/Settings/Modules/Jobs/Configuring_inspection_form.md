---
title: "Configuring Inspection Forms"
source: https://docs.zuper.co/Settings/Modules/Jobs/Configuring_inspection_form.md
fetched_at: 2026-10-06T13:30:11.514Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Inspection Forms

Inspection forms are essential tools that field technicians use to perform thorough inspections, ensure compliance, and document asset conditions or maintenance activities. These forms streamline the inspection process by standardizing the data collection method, improving accuracy, and ensuring nothing is overlooked during service visits.

In Zuper, administrators can configure job inspection forms by defining field types, organizing form layouts, and setting up rules for field behavior.

This guide walks you through how to create, customize, and manage inspection forms in Zuper.

<Frame>
  **Navigation**: *Settings -> Modules -> Jobs -> Inspection forms* 
</Frame>

## Navigating to job inspection forms

To configure inspection forms, follow these steps: 

* Select the "**Settings**" module from the left navigation menu.
* Click **Modules** and choose **Jobs** to open the Job Settings page.
* Click on **Inspection Forms**. The inspection forms listing page will appear.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings6.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=6f0b4bb1834da781aa7372bfca292f00" alt="Assetsettings6 Pn" width="1906" height="669" data-path="images/assetsettings6.png" />

* The inspection forms listing page will appear, displaying all existing inspection forms available for the job. 

## Creating a new inspection form 

To create a new inspection form: 

* Click **+ New Form** at the top right of the inspection forms listing page.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings2.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=882fc094cfa0e89ed13c77427e3403b6" alt="Assetsettings2 Pn" width="1899" height="817" data-path="images/assetsettings2.png" />

* Enter the following details and click **Proceed** to begin customizing the inspection form.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings3.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=86c33e362bae029a0c3c1180c5c89282" alt="Assetsettings3 Pn" width="1908" height="872" data-path="images/assetsettings3.png" />

* **Inspection Form Name** (*Mandatory*) – Enter a name for the inspection form.
* **Description** – Provide a brief description of the inspection form.

## **Customizing the inspection form**

To customize the inspection form, simply drag and drop fields from the right panel into the form layout. Arrange them as needed to suit your inspection requirements.

You can also **edit, clone, or delete** fields using the action menu available next to each field.

For more details on how to configure custom fields,  check out this [article](https://docs.zuper.co/Settings/Modules/Jobs/Configuring-job-checklist#configuring-a-field).

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings7.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=ae5d4f1a0e4e26409944811fc06c8eee" alt="Assetsettings7 Pn" width="1914" height="857" data-path="images/assetsettings7.png" />

<Accordion title="Available fields">
  1. Text
     * Single-Line Input: This allows you to create a field to enter a single line of free text.
     * Multi-Line Input: This allows you to create a field to enter multiple lines of free text.
     2. Date
     * Date: This allows you to create a field to select a specific date from a calendar.
     * Time: This allows you to create a field where you can select a specific time.
     * Date & Time: This allows you to create a field where both date and time can be selected.
     3. Selection
     * Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
     * Multi-Selection: This allows you to create check boxes where the provided options can be checked.
     * Drop-Down: This allows you to create a drop-down field with the required list of options.
     4. Media
     * Upload: This allows you to create a file input field to upload files.
     * Single Image:  This allows you to upload a single image as input.
     * Multi Images: This allows you to upload multiple images in one field.
     * Barcode Scan: This allows you to scan and capture barcodes using a device camera or scanner.
     * [AI Walkthrough Video](https://docs.zuper.co/Zuper_AI/Record-a-Walkthrough-Video-on-a-Checklist#adding-a-field-in-the-checklist): Lets technicians record a guided video walkthrough of the job site directly from the inspection form. Zuper AI transcribes the audio and produces a written summary alongside the video and any photos captured. Available on the mobile app only.
         <Frame>
           <img src="https://mintcdn.com/zuperinc/y91FwsWEGb2AObx_/images/Picture7.png?fit=max&auto=format&n=y91FwsWEGb2AObx_&q=85&s=de534d7dc3270a9c0ebee7058268bfe6" alt="Picture7" width="1920" height="878" data-path="images/Picture7.png" />
         </Frame>
     5. Misc

  * Look up: This allows you to create a file input field to look up the products, products added in job,  parts added in asset, users, and assets.
  * Data Table: This allows you to create a dynamic table field to input structured data in rows and columns.
  * Signature: This allows you to sign directly within the form using touch or a mouse input.
</Accordion>

## Editing an inspection form

To modify an existing inspection form, follow these steps:

* On the inspection forms listing page, click the pencil icon next to the inspection form you want to update.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/inspectionform.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=3056b914500cb886a7e24e6f06f8de5b" alt="Inspectionform Pn" width="1901" height="863" data-path="images/inspectionform.png" />

* Make the necessary changes and click **Save** to update the inspection form.

## Deleting an inspection form

To remove an inspection form permanently:

* On the inspection forms listing page, click the delete icon next to the inspection form you want to remove.

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/inspectionform1.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=a73e97617292978176afd94dfde686f7" alt="Inspectionform1 Pn" width="1901" height="863" data-path="images/inspectionform1.png" />

* A confirmation dialog box will appear.
* Click "**Delete**" to confirm and permanently remove the inspection form.


## Related topics

- [Record a Walkthrough Video on a Checklist & Inspection Form](/Zuper_AI/Record-a-Walkthrough-Video-on-a-Checklist.md)
- [Configuring Job Card Templates](/Settings/Modules/Jobs/Configuring-job-card-template.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.