---
title: "Configuring Asset Settings"
source: https://docs.zuper.co/Settings/Modules/Assets/Assets-Settings.md
fetched_at: 2026-10-06T13:30:13.832Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Asset Settings

The "**Asset Settings**" allows you to manage Asset Settings in Zuper, including categories, templates, custom fields, inspection forms, and general settings.

## General asset settings

General settings allow you to define default behaviors for the Asset.

<Frame>
  **Navigation**: *Settings -> Modules -> Assets - > Assets General Settings*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**,"choose the "**Assets**." Select the "**Asset General Settings**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST1.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=c629f810ffe78acb928ba7cbbc285832" alt="AST1 Pn" width="1901" height="861" data-path="images/AST1.png" />
</Frame>

* **Allow Field Executive to view all Assets?**: Toggle "**Yes**" or "**No**" to allow/disallow the field executive to view all assets.
* **Allow Team Leader to view all Assets?:** Toggle "**Yes**" or "**No**" to allow/disallow the team leader to view all assets.
* **Mandate Serial No?**: Toggle “**Yes**” or “**No**” to enable or disable mandatory serial number entry for asset-linked parts or services in transactions.
* **Mandate asset association to line items?**: Toggle “**Yes**” or “**No**” to enforce asset association for each line item in a quote. If this is enabled and the quote has one or more associated assets, users must assign an asset to each line item; otherwise, an error occurs when saving
* Click **Save** to apply changes.
  <Frame>
    <img src="https://mintcdn.com/zuperinc/xELcIciaF_aO_fB7/Settings/Modules/Jobs/Find/images/Commissions-20.png?fit=max&auto=format&n=xELcIciaF_aO_fB7&q=85&s=02726427b59379fd2769e45158c567a0" alt="Commissions 20" width="1920" height="869" data-path="Settings/Modules/Jobs/Find/images/Commissions-20.png" />
  </Frame>

## Asset category

Asset Categories help classify the assets.

<Frame>
  **Navigation**: Settings -> Modules -> Assets - > Assets Category
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Assets**." Select the "**Assets Category**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST2.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=c75691c6bbdeac0a4833c1087af50de3" alt="AST2 Pn" width="1901" height="861" data-path="images/AST2.png" />
</Frame>

2. Under the asset category, click "**+ New Category** " to create the asset category.

<Frame>
  <img src="https://mintcdn.com/zuperinc/foY4ItPnEcbwC0iC/images/AST7.png?fit=max&auto=format&n=foY4ItPnEcbwC0iC&q=85&s=4e2928b6602767e285c590e1eac0d1c2" alt="AST7 Pn" width="1912" height="875" data-path="images/AST7.png" />
</Frame>

3. Enter the category name and description.

<Frame>
  <img src="https://mintcdn.com/zuperinc/foY4ItPnEcbwC0iC/images/AST8.png?fit=max&auto=format&n=foY4ItPnEcbwC0iC&q=85&s=6ad671d889479121855f3d1c324f4878" alt="AST8 Pn" width="1891" height="889" data-path="images/AST8.png" />
</Frame>

4. Click "**Create**."

## **Asset custom fields**

<Frame>
  **Navigation**: *Settings -> Modules -> Assets - > Assets Custom Fields*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Contracts**." Select the "**Assets Custom Fields**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST3.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=0a01213df03249fae2e24e45280cf8b0" alt="AST3 Pn" width="1901" height="861" data-path="images/AST3.png" />
</Frame>

2. Drag and drop the fields from the right panel.\\

   <AccordionGroup>
     <Accordion title="Text">
       * Single-Line Input: This allows you to create a field to enter a single line of free text.
       * Multi-Line Input: This allows you to create a field to enter multiple lines of free text.
     </Accordion>

     <Accordion title="Date">
       * Date Input: This allows you to create a field to select a specific date from a calendar.
       * Time Input: This allows you to create a field where you can select a specific time.
       * Date Time Input: This allows you to create a field where both date and time can be selected.
     </Accordion>

     <Accordion title="Selection">
       * Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
       * Multi-Selection: This allows you to create check boxes where the provided options can be checked.
       * Drop-Down: This allows you to create a drop-down field with the required list of options.
     </Accordion>

     <Accordion title="Media">
       * Upload: This allows you to create a file input field to upload files.
     </Accordion>

     <Accordion title="Misc">
       * Look up: This allows you to create a file input field to look up the products from the parts and services module.
     </Accordion>
   </AccordionGroup>

<Note>
  **Note**: You can also control the behavior and visibility of each field using the following options:

  * Mark as Required Field -  Makes the field mandatory to fill out before submitting the form.
  * Mark as Read Only—This option makes the field non-editable; users can view the value but cannot modify it.
  * Mark as hidden field- This hides the field from all users; it will not appear in the form interface.
  * Hide to FE/Technician- This option makes the field invisible to technicians or front-end users during form access.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST15.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=794e49c5c2fc245ff9c4aa6a2c35e971" alt="AST15 Pn" width="1908" height="859" data-path="images/AST15.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST16.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=2b6cc8e64f8fd05ccc84446cbc6a8d5a" alt="AST16 Pn" width="1916" height="861" data-path="images/AST16.png" />
</Frame>

3. Click “**Create New**” to create the “**Custom Field**” group.

## **Asset inspection forms**

<Frame>
  **Navigation**: *Settings -> Modules -> Assets - > Asset Inspection Forms*
</Frame>

An asset inspection form is a checklist for the field technician to conduct asset inspections and record maintenance activities. These forms also play a crucial role in streamlining the inspection process and improving overall efficiency.

1. **Inspection Form Name** – Enter the inspection form name.
2. **Description** – Enter the form description.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST10.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=56c7720ceee50328cfb673afabfe9c7e" alt="AST10 Pn" width="1900" height="874" data-path="images/AST10.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST17.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=ba3bcfc1db632dba1871a186813488bc" alt="AST17 Pn" width="1918" height="867" data-path="images/AST17.png" />
</Frame>

## **Asset templates**

Asset templates allow you to standardize asset formats for consistency.

<Frame>
  **Navigation**: Settings -> Modules -> Assets - > Assets Templates\_
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Assets**." Select the "**Asset Templates**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST5.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=9fda8828099cead51eb3990376a0235b" alt="AST5 Pn" width="1901" height="861" data-path="images/AST5.png" />
</Frame>

2. Click "**+ New Template**" to create the new template.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST11.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=139d5a4cd21e0477cd0e7aa2ab6ef5ac" alt="AST11 Pn" width="1907" height="869" data-path="images/AST11.png" />
</Frame>

3. Fill in the template details and click "**Save Template**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/images/AST13.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=0e666feb54c9a0e6dbce9605acb54aa4" alt="AST13 Pn" width="1896" height="869" data-path="images/AST13.png" />
</Frame>

4. Click "**Proceed**" to create the template.

By following the outlined steps, you can easily manage the asset categories, templates and permissions.


## Related topics

- [Configuring General Job Settings](/Settings/Modules/Jobs/Configuring_General_Job_settings.md)
- [Configuring Project Settings](/Settings/Modules/Projects/Project_Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.