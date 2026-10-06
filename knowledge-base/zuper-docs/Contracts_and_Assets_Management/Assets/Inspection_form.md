---
title: "Managing inspection forms"
source: https://docs.zuper.co/Contracts_and_Assets_Management/Assets/Inspection_form.md
fetched_at: 2026-10-06T13:29:53.952Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing inspection forms

Asset inspection forms are essential tools that field technicians use to perform thorough asset inspections and document maintenance activities. These checklists streamline the inspection process, ensuring that asset conditions and maintenance needs are accurately recorded.

In this guide, we'll walk you through the steps to configure, associate, and complete an asset inspection form within a job, helping you maintain high standards of asset management and job completion.

<Frame>
  **Navigation**:

  * *Settings-> Modules -> Assets -> Inspection Forms*
  * *Assets -> Asset Listing page -> + New Asset -> Asset Inspection Form*
  * *Jobs -> Job Listing page -> + New Job -> Asset Inspection Form*
</Frame>

## **Configure an Asset Inspection Form**

To efficiently associate an asset inspection form with Jobs, it is important to configure the inspection form in settings. Follow these steps:

* Select Settings from the left navigation menu.
* Click **Modules** and choose **Asset** to open the Asset Settings page.
* Select **Inspection Forms**. The inspection forms listing page will appear.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=e6c867e28a9ec9bbc845fdc33ac6b920" alt="Assetsettings Pn" width="1899" height="761" data-path="images/assetsettings.png" />

* Click **+ New Form** to create a new inspection form.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings2.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=882fc094cfa0e89ed13c77427e3403b6" alt="Assetsettings2 Pn" width="1899" height="817" data-path="images/assetsettings2.png" />

* Enter the following details and click **Proceed** to begin customizing the inspection form.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetsettings3.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=86c33e362bae029a0c3c1180c5c89282" alt="Assetsettings3 Pn" width="1908" height="872" data-path="images/assetsettings3.png" />

* **Inspection Form Name** (*Mandatory*) – Enter a name for the inspection form.
* **Description** – Provide a brief description of the inspection form.

**Customizing the inspection form**

To customize the inspection form, simply drag and drop fields from the right panel into the form layout. Arrange them as needed to suit your inspection requirements.

You can also **edit, clone, or delete** fields using the action menu available next to each field.

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
  5. Misc

  * Look up: This allows you to create a file input field to look up the products from the parts and services module.
  * Data Table: This allows you to create a dynamic table field to input structured data in rows and columns.
  * Signature: This allows you to sign directly within the form using touch or a mouse input.

  <Note>
    Note: You can also control the behavior and visibility of each field using the following options:

    * Mark as Required Field-  Makes the field mandatory to fill out before submitting the form.
    * Mark as Read Only- Displays the field as non-editable; users can view the value but cannot modify it.
    * Mark as hidden field- Hides the field from all users; it will not appear in the form interface.
    * Hide to FE/Technician- Makes the field invisible specifically to technicians or front-end users during form access.
  </Note>
</Accordion>

## **Associate an Inspection Form with an Asset**

After you have successfully configured and created a new inspection form, you can associate an inspection form with an asset in any of the following ways:

<AccordionGroup>
  <Accordion title="Create a new asset with an Inspection Form" defaultOpen="false">
    * In the left navigation menu, select **Contracts and Assets Management** and choose **Assets**.

    * On the asset listing page, select **+ New Asset**. The new asset creation page will appear.

          <img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/99.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=471bc67361e011dfbc6890733db80917" alt="" width="1868" height="850" data-path="Contracts_and_Assets_Management/Assets/99.png" />

    * In the **Primary Details** section, fill in the following information:

      1. **Product** (*Mandatory*) – Select the product to be assigned as an asset.
      2. **Asset Code** – Auto-generated based on the selected product.
      3. **Asset Name** – Auto-filled based on the selected product.
      4. **Asset Serial Number** – Enter a unique identifier (letters, numbers, or dashes).
      5. **Asset Category** (*Mandatory*) – Select the asset category.
      6. **Asset Image** – Upload an optional image.
      7. **Asset Status** – Select the asset’s current status.
      8. **Asset Ownership** – Choose **Customer-owned** or **Company-owned**.
      9. **Purchase Date** – Select the date of purchase.
      10. **Purchase Price** – Enter the asset’s purchase cost.
      11. **Warranty Expiry Date** – Select the warranty expiration date.
      12. **Placed in Service** – Enter the asset’s service start date.
      13. **Residual Price** – Enter the estimated residual value.
      14. **Useful Life** – Define the asset’s lifespan (days, months, or years).
      15. **Asset Description** – Enter optional details about the asset.
      16. **Asset Inspection Form** – Select an inspection form from the dropdown.

          <img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/100.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=73143136b7fea51372a6786ead81b776" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/100.png" />

    * Enter additional details such as **Customer Information**, **Service Address**, and **Attachments**.

    * Select **Save Asset** to create the asset with the associated inspection form.
  </Accordion>

  <Accordion title="Edit an existing asset to add an Inspection Form" defaultOpen="false">
    * Navigate to the Assets listing page.

    * On the **Asset Listing** page, locate the asset you want to edit.

    * Select the ellipsis icon (<Icon icon="ellipsis" color="#0b0a0a" />) next to the asset and choose **Edit Asset**.

          <img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/102.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=90971f490ed90af5d83c76a6322c9ea6" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/102.png" />

    * Update the asset details, including adding an **Inspection Form**.

    * Select **Update Asset** to save the changes.
  </Accordion>
</AccordionGroup>

## **Associate an Inspection Form with a Job**

After linking an inspection form to an asset, you can associate the asset with jobs. This ensures that field technicians complete the inspection form before marking the job as complete.

### **Create a Job with an Inspection Form**

* Navigate to the **Jobs** module in the left navigation menu. You will land on the jobs listing page.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/105.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=5a2eec5935d343cc5defddf796b893fe" alt="" width="1865" height="851" data-path="Contracts_and_Assets_Management/Assets/105.png" />

* On the **Job Listing** page, select **+ New Job**.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/106.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=04a2fab91319e8f9fca9b3d0b193852b" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/106.png" />

* Enter job details such as **Job Title, Job Category, Due Date, Service Address**, and **Customer Information**.
* Under **Assets**, select **+ Add Asset**.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/107.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=0f0208ffa4fcf86e549f3e2f1f4cd9e7" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/107.png" />

* Choose an asset that has an **Inspection Form.** The Asset with an inspection form will be added to the job.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/109.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=69b8287ae8213fcb0c170f1323a7424f" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/109.png" />

* Select **Create Job** to save the job.

### **Complete an Asset Inspection Form in a Job**

After creating a job with an asset inspection form, here's how you can complete the asset inspection form in a Job.

* Open the job details page.
* In the **Assets Associated** section, select the <Icon icon="ellipsis-vertical" color="black" />icon next to the asset.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/112.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=c656e3d9959d5afca8ba2611f4869ceb" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/112.png" />

* Select **Fill Inspection Form**.
* Complete the form based on asset requirements and observations.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/113.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=f2d7980ad84e8f7630b81c0911a00775" alt="" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/113.png" />

* Select **Submit**.

By following the steps outlined in this guide, you can efficiently configure, associate, and complete asset inspection forms within your jobs. This ensures that field technicians are equipped with the necessary tools to conduct comprehensive inspections and complete jobs accurately. With streamlined documentation and a more efficient inspection process, you can maintain better oversight of asset conditions and improve overall service delivery.


## Related topics

- [Configuring Inspection Forms](/Settings/Modules/Jobs/Configuring_inspection_form.md)
- [Managing Tasks](/Zuper_Dashboard/Tasks.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.