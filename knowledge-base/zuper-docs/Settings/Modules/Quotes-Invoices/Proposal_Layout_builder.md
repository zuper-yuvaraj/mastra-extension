---
title: "Proposal Layouts"
source: https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Proposal_Layout_builder.md
fetched_at: 2026-10-06T13:30:13.735Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Proposal Layouts 

## Overview

Zuper’s Proposal Layouts enables you to create professional, fully customizable proposal PDFs tailored to your customers. You can start from scratch or use templates and combine editable text pages with uploaded PDFs to build multi-page proposals. This feature enables teams to present quotes, inspection data, and terms in a professional format, facilitating faster approvals.

<Note>
  **Note: Proposal Layouts** is currently in Private Beta. To request access, please email our support team at [**support@zuper.co**](mailto:support@zuper.co).
</Note>

## **Prerequisites**

* Ensure you have admin access to the Zuper workspace.
* Prepare any supporting files, such as company logos, cover images, or PDF sections (e.g., terms PDFs limited to 5MB each).
* Familiarize yourself with Zuper's Quotes & Invoices module.

### **Step 1: Access Proposal Layouts Management**

Before building a proposal, manage your layouts to create or edit reusable layouts.

1. Log in to your Zuper. Click **Settings** (gear icon) at the top.

Under Quote & Invoice Settings, select **Proposal Layouts**.

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf1.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=0de05ca92198bb8da735c9366ce54e20" alt="Ppdf1 Pn" width="1917" height="814" data-path="images/Ppdf1.png" />

This opens the Proposal Layouts library, displaying existing layouts with details such as name, status (e.g., Active), created by, created on, and available actions.

### **Step 2: Create a New Proposal Layout**

1. In the Proposal Layouts screen, click **+ New Proposal Layout** (top right).
2. Choose your starting point:
   * **Start from Scratch**: Begins with a blank canvas for full customization.
   * **Choose from Template**: Select a pre-built template from the library.

<img src="https://mintcdn.com/zuperinc/dqA0vFk-OHKoFp_x/images/Ppdf27.png?fit=max&auto=format&n=dqA0vFk-OHKoFp_x&q=85&s=96ecad3bcc4a0ced5921e998d2b0c878" alt="Ppdf27 Pn" width="1920" height="878" data-path="images/Ppdf27.png" />

3. Enter a name for your layout (e.g., "Standard Roofing Proposal").
4. Click **Create** to open the editor.

By default, the new proposal layout includes seven pages:

**1.     Cover Page**

**2.    About Us**

**3.    Scope of Work**

**4.    Estimate Options**

**5.    Terms & Conditions**

**6.    Signature**

* You can add, rename, or reorder pages as needed (Cover page reordering is not possible).
* If you prefer not to use the default pages, you can hide the page, which will skip rendering it in the final PDF.

You can also add the custom pages:

 **Add Pages**: Click **+ Add Page** and select a type (e.g., New Text Page or PDF Upload).

Types of pages supported:

* **Text Page:** Create and edit content using rich text formatting.
* **Upload PDF:** Upload and display pre-designed PDF documents from local storage or select an existing PDF from the [PDF Library](https://docs.zuper.co/Settings/Miscellaneous/pdf-library).
* **Job Checklist:** Pull associated checklists from the job.
* **Job Gallery:** Showcase images related to the job in a visual gallery.

### **Step 3: Customize Pages in the Proposal Layouts**

**Editing Tips**

* **Rename Pages**: Double-click the page name in the sidebar or use the More icon and select Rename.
* **Reorder Pages**: Drag pages up or down in the sidebar. Cover Page cannot be reordered.
* **Duplicate Pages**: Duplicating pages is allowed except for the Cover Page and Estimate Options.
* **Hide Pages**: Hiding pages is allowed for all pages.
* **Locked Pages**: In the Proposal Layouts section, you'll find a "**Lock**" page option. When enabled (locked), it locks the editing of the page's functionality both in the Master proposal layout and proposal-level edit. Preventing ad-hoc edits during the quoting process.

<img src="https://mintcdn.com/zuperinc/Szjb2n9O-DMWGE2W/images/lock1.png?fit=max&auto=format&n=Szjb2n9O-DMWGE2W&q=85&s=7915ace9317e3f2f47f1527a2d7943b7" alt="Lock1 Pn" width="1909" height="861" data-path="images/lock1.png" />

Lock and unlock options are only available under the settings and are not accessible in the proposal-level layout edit. To prevent Field Executives or Sales Representatives from making changes to the proposal pages while sending. The locked pages cannot be renamed, hidden, edited, or deleted.

Now, customize each default page:

### **Cover Page**

* We currently support only one cover page.
* On the cover page, you include branding (e.g., logo, company information) and proposal basics (e.g., title, client name, date).
* The page can be hidden or renamed, but it cannot be deleted or reordered.
* The cards will show company or sales rep information; it will be prefilled automatically, and it allows editing the same with the fixed content or dynamic content.
* The customer information can be hidden.
* If the cover page image is not added, the default image set by us will be displayed.

<Tip>
  We also support using a Cover image tailored to the proposal, so that you can set the customer's home as a cover image to personalize the proposal. You can add a cover image with the two options:

  **1. From the associated job's image gallery.**

  **2. Upload from local.**

  You can use any one of the options.
</Tip>

1. Click **Cover Page** in the sidebar.
2. Select a layout style from the right panel: **Classic**, **Executive**, **Split Screen**, or **Cinematic**.
3. Upload a cover image via the placeholder (click the image icon) or from the right panel.
4. Edit fields: **Proposal Title**: Enter a descriptive name for your proposal.<br />Example: `Proposal for {{ customer.customer_first_name }}` **Date**: Auto-fills with proposal date. **Company /Sales Rep Info**: Add logo, name (e.g., ACME Corporation), and contact details. The primary logo uses the company logo, and the secondary logo is used to upload a certificate or badge. You can use the place holders to fetch the information. **Customer Info**: Pulls from the service address (e.g., John Doe’s service address)

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf4.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=3e3d004df930870fe848637ecc3b28d0" alt="Ppdf4 Pn" width="1920" height="878" data-path="images/Ppdf4.png" />

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf13.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=2e6636b156c9e4e65ad0c46d01d61820" alt="Ppdf13 Pn" width="1920" height="878" data-path="images/Ppdf13.png" />

### **About Us**

Introduce your company with text, images, or uploaded PDFs.

1. Click **About Us**.
2. Use the text editor to add paragraphs about your services, history, or team (or) Toggle to **Upload PDF** for a pre-formatted section.

<img src="https://mintcdn.com/zuperinc/PzfsLQa5amIKPCGP/images/Ppdf5.png?fit=max&auto=format&n=PzfsLQa5amIKPCGP&q=85&s=2b24b9d64b0d52b5e719e1f781bc1357" alt="Ppdf5 Pn" width="1920" height="878" data-path="images/Ppdf5.png" />

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf15.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=72618faa13e1443b1ba9736803bfe74d" alt="Ppdf15 Pn" width="1920" height="878" data-path="images/Ppdf15.png" />

### **Scope of Work**

Outline project details, timelines, or requirements.

1. Click **Scope of Work**.
2. Add text descriptions, bullet points, or tables via the editor, or upload PDF for detailed specs.

<img src="https://mintcdn.com/zuperinc/PzfsLQa5amIKPCGP/images/Ppdf7.png?fit=max&auto=format&n=PzfsLQa5amIKPCGP&q=85&s=12ad52409ec3381a51264895f14da98d" alt="Ppdf7 Pn" width="1920" height="878" data-path="images/Ppdf7.png" />

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf16.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=f26116b3e1addc47b2b5a6bd17b3b564" alt="Ppdf16 Pn" width="1920" height="878" data-path="images/Ppdf16.png" />

### **Terms & Conditions**

Legal essentials: Use text or upload for compliance.

1. Click **Terms & Conditions**.
2. Edit standard terms in the text editor or upload a PDF (e.g., your master terms document).
3. Ensure key clauses, such as payment terms, warranties, and liabilities, are clearly defined.

<img src="https://mintcdn.com/zuperinc/PzfsLQa5amIKPCGP/images/Ppdf9.png?fit=max&auto=format&n=PzfsLQa5amIKPCGP&q=85&s=cb4200572ffebfa9722172c4d4d3aeb0" alt="Ppdf9 Pn" width="1920" height="878" data-path="images/Ppdf9.png" />

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf19.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=6439b9409e01a9862c06fbf069fd8532" alt="Ppdf19 Pn" width="1920" height="878" data-path="images/Ppdf19.png" />

For the **Scope of Work** and **Terms & Conditions**, users can edit them on the go by using the text editor to adjust each specific proposal before sharing it with the customer.

### **Estimate Options**

Show pricing breakdowns with line items, taxes, and totals (pulls from proposal estimate options).

1. Click **Estimate Options**.
2. View sample content (actual data populates on generation):
   * Line items (e.g., Roofing System: \$4,855.84).
   * Subtotals, taxes (10%), discounts, and grand total.
3. Toggle display options in the right panel:
   * Show/hide images, descriptions, quantities, and taxes.
   * Line Item vs. Transaction view.
   * Unit prices, subtotals, deposits, or financing totals.
4. Enable **Bundle Options** for grouping.
5. Enable **Add-Ons** to display add-ons for each available estimate option.

For each proposal option, it will be shown on a single page, one by one.

<Frame>
  <img src="https://mintcdn.com/zuperinc/tpAo5uCqLPFUDx8N/images/doctemps1.png?fit=max&auto=format&n=tpAo5uCqLPFUDx8N&q=85&s=5e6620dd100763c8e17da352990fd6e9" alt="Doctemps1" width="2255" height="1299" data-path="images/doctemps1.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/gJKZrUYPJUfrVIxn/images/addon-new.png?fit=max&auto=format&n=gJKZrUYPJUfrVIxn&q=85&s=4f145843a73e3808faf1ee75d04a9758" alt="Addon New" width="1920" height="878" data-path="images/addon-new.png" />
</Frame>

### Signature

Capture customer approval with e-signature fields.

1. Click Signature. You can edit the title from the right panel. Space below the signature in the center pane is a text editor that allows the user to add any additional content required
2. The Primary Signature block is displayed by default and static (includes date and signature).
3. Set layout: Stacked (vertical fields) or Side by Side (horizontal).
4. Customize display: Show company logo, address, phone (e.g., ACME Corporation, [Zuper@zuper.co](mailto:Zuper@zuper.co), 822-10380).

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf10.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=14cb2c7f3431e94a77ebf9f6903a149b" alt="Ppdf10 Pn" width="1920" height="878" data-path="images/Ppdf10.png" />

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf21.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=0ab30f39b93728a95d3d7ebac604128b" alt="Ppdf21 Pn" width="1920" height="878" data-path="images/Ppdf21.png" />

### **Multi-Signer (Co-Signer & Counter Signer)**

Zuper [Proposal Layout](https://docs.zuper.co/Accounting/Proposal#multi-signer) allows **multiple signers** on the proposal (primary customer + up to 3 co-signers + company authorization signer).

<Frame>
  **Navigation**: *Settings → Quotes & Invoices → Proposal Layouts → Signature*
</Frame>

1. **Primary Signer (Customer)**
   * Automatically set as the customer associated with the proposal.
   * This appears in the **Signature** section in the proposal details.
2. **Add Co-Signers (Additional Signers)**
   * Right sidebar → **Signer Details** section.
   * Click **+ Add Co-Signer**.
   * Repeat the click for every extra signer you need (**You can add up to 3 signers**).

<Note>
  **Note**: To templatize specific signers, such as manufacturers or warranty.
</Note>

3. **Fill Details for Each Co-Signer.** Each co-signer block has two required fields:
   * **Full Name.**
   * **Email address** (this is where the signature request will be sent).
4. **Company Authorization (Counter Signer)**
   * Toggle **Company Authorization** ON.
   * Choose:
     * **Created By** (The person who created the proposal) or
     * **Select User** (Pick any other specific user in your Zuper account).

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS2.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=5701d3dbb40f59ccc9cbf27023a53b03" alt="MS2" width="1920" height="878" data-path="images/MS2.png" />
</Frame>

### **Custom Pages**

The custom page allows you to add four different pages. **Text Page, Upload PDF, Job Checklist, and Job Gallery**.

**Text Page** – Add additional text pages, add your content, and modify the title. (It is a block editor.)

**PDF Upload** – You can upload the PDF within the **5 MB** limit.

<Tip>
  PDF and Text pages supports page-level acknowledgment. When you share a proposal with your customer, they must select the checkbox on each page to acknowledge it. After acknowledging, the customer selects the required estimate option and **Sign the Proposal to Accept**, and their signature is automatically applied to every acknowledged page.
</Tip>

<Note>
  **Note**: You can create up to 10 pages, combining both the Text editor and PDF.
</Note>

**Job Image Gallery**

* Here, you can set whether mandatory images should be enabled or not and configure the layout.
* If the Mandatory Images option is enabled, sending or generating the proposal PDF without images will be restricted.
* It is recommended to add at least one image while editing the proposal PDF layout within the Proposal details page.

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf18.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=67fe07db09518f68ebd91967aa6f0355" alt="Ppdf18 Pn" width="1920" height="878" data-path="images/Ppdf18.png" />

**Job Checklist**

* This settings option enables you to select multiple checklists, each mapped to a single job category per page.
* For each checklist page, you can select multiple checklist statuses from that specific job category and choose the various checklist questions to pick the ones you need.
* If you need to include statuses from another job category, add a new page.
* The selected checklists will automatically render when the proposal is sent.

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf23-cu.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=49cd26d7bcc12d396ef7ae01056bc144" alt="Ppdf23 Cu Pn" width="1920" height="878" data-path="images/Ppdf23-cu.png" />

## Present Proposal & Options

You can present or share the proposal with your customer and enable them to select the available options/attributes for each item within the chosen estimate option, as long as the item has options configured and **Customer Selection** is enabled in the Part/Product configuration.

Before signing and accepting the proposal, customers can choose their preferred [options](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service#3-options) for each applicable line item.

The selected options are recorded in the accepted quote and automatically carried forward to any Invoice or Purchase Order (PO) created from it, ensuring accurate tracking and reducing manual errors.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KNwbeG_nVnvoy0AB/images/optijob6.png?fit=max&auto=format&n=KNwbeG_nVnvoy0AB&q=85&s=b93fd99d594763172c29c394894b7bf9" alt="Optijob6" width="1591" height="884" data-path="images/optijob6.png" />
</Frame>

## Edit Proposal Layout

<Frame>
  **Navigation**: Quotes --> Proposal --> Edit Proposal Layout
</Frame>

* The edit proposal layout opens the proposal layout edit page. Here, you can edit the proposal layout specific to this current proposal and send it directly to the customer.
* While sending the proposal PDF, it will be sent as an attachment.
* The customer will accept the proposal, and you have the option to view the quote PDF or proposal PDF from the quote module.

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf25.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=2527eaa25dd3a1a18f67f8620e3b1471" alt="Ppdf25 Pn" width="1905" height="870" data-path="images/Ppdf25.png" />

**Send Email**

•	You will have the option to switch between the Quote and Proposal templates.

•	If the Proposal is chosen, the Proposal PDF will be sent with just the accepted estimate option.

<Note>
  **Note**: You can choose the “**Default Proposal Layout**” from Quote and Invoices General Settings.
</Note>

<img src="https://mintcdn.com/zuperinc/JoyjL3VTuDXB6Jk4/images/Ppdf26.png?fit=max&auto=format&n=JoyjL3VTuDXB6Jk4&q=85&s=08a4448d8268dfd61e5d6ea4d2db32c9" alt="Ppdf26 Pn" width="1920" height="878" data-path="images/Ppdf26.png" />

### **Add-ons**

**Add-ons** let you include optional products or services specific to each proposal option that are not part of the primary items. These are displayed under the **Additional Items** section of the proposal.

When the proposal is presented to the customer, they can select their preferred estimate option. Based on the selected option, the relevant Add-ons will be displayed. The customer can choose the Add-ons they would like to include, and the total proposal value will be recalculated in real time accordingly.

Once finalized, the customer can review the updated estimate and provide their approval by signing the proposal.

**When to Use Add-ons**

Use add-ons when you want to:

* Include optional or supplementary items.
* Add accessories or warranty or AMC packages.

<img src="https://mintcdn.com/zuperinc/iiHGH2bTOPeZq_2m/images/addon15.png?fit=max&auto=format&n=iiHGH2bTOPeZq_2m&q=85&s=67681d2563db403df999e35528cb7d1e" alt="Addon15" width="1532" height="792" data-path="images/addon15.png" />

## **Limitations**:

1. The PDF upload size should not exceed **5 MB**.
2. You can create up to **20** proposal layouts only.
3. For custom pages, text pages, or PDF pages, you can create up to 10 pages only as a combined limit.

## FAQs – Zuper Proposal Layouts

<AccordionGroup>
  <Accordion title="What are Proposal Layouts used for?">
    **Proposal Layouts** help you build professional, multi-page proposals for your clients. Each layout brings together editable text, uploaded PDFs, pricing details, inspection summaries, and electronic signatures in a single document.
  </Accordion>

  <Accordion title="What is the maximum size for uploaded PDF files?">
    Each PDF you upload must be 5 MB or smaller. If your file is larger, the upload fails. Compress the file or save it as a standard PDF, then try again.
  </Accordion>

  <Accordion title="How many proposal layouts can I create?">
    You can create up to 20 proposal layouts in your Zuper workspace.
  </Accordion>

  <Accordion title="How many custom pages can I add?">
    You can add up to 10 custom pages in total, and this limit applies per proposal layout. To add more pages, delete or merge existing pages first.
  </Accordion>

  <Accordion title="Can I reorder or rename pages in a proposal layout?">
    Yes, you can rename or reorder any page except the **Cover Page**. You can rename or hide the **Cover Page**, but you cannot delete or reorder it.
  </Accordion>

  <Accordion title="Why are my job-related pages or data not showing in the proposal?">
    This usually happens when the proposal is not linked to a job, or when required job fields are incomplete. Confirm that the proposal is linked to the correct job, and that all required job fields are complete. If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="Can I include inspection forms and job photos?">
    Yes, add job photos with a **Job Image Gallery** page. Add inspection forms or checklists with a **Job Checklist** page.
  </Accordion>

  <Accordion title="What happens if I do not add a cover image?">
    If you do not add a custom cover image, Zuper displays a default cover image automatically.
  </Accordion>

  <Accordion title="How can I edit a proposal layout for a specific proposal?">
    Go to **Quotes → Proposal → Edit Proposal Layout** to update the layout for that specific proposal without changing your master layout.
  </Accordion>

  <Accordion title="What file formats are supported for uploads?">
    PDF pages accept only standard PDF files, while the text editor also accepts image uploads.
  </Accordion>

  <Accordion title="Can I preview how the proposal looks on mobile devices?">
    Yes, use the **Preview** option to check formatting on both desktop and mobile views before you send the proposal.
  </Accordion>

  <Accordion title="Are e-signatures legally binding?">
    Yes, Zuper's e-signature feature complies with digital signature standards. Signed proposals become legally valid agreements once your clients accept them.
  </Accordion>

  <Accordion title="How can I reuse an existing layout for new proposals?">
    Open the layout you want to reuse in **Proposal Layouts**. Duplicate it, rename the copy for your new job, and make any edits you need. This keeps your original layout unchanged.
  </Accordion>
</AccordionGroup>

### Best Practices

1. **Keep PDFs Lightweight and Optimized**

* Compress uploaded PDFs before adding them (file size must be ≤ 5MB).
* Avoid embedding unnecessary images or scanned pages that inflate file size.
* When possible, use the text editor instead of uploading large sections of PDF.

2. **Use Merge Tags for Dynamic Content**

* Incorporate merge tags like `\{{ customer.customer_first_name }}` or `\{{ quote.quote_number }}` to automatically populate customer and quote details.
* This ensures data accuracy and reduces the time required for manual editing.

3. **Structure Information Logically**

* Follow the recommended sequence: Cover → About Us → Inspection → Scope → Estimate → Terms → Signature.
* Keep technical or detailed documents in uploadable PDF sections rather than long text blocks.
* Use bullet points and tables to improve readability.

4. **Test Before Sending**

* Use the Preview option to confirm layout, image quality, and text alignment across devices.
* Double-check for placeholder text (e.g., “No inspection forms imported”) and replace it with actual content.
* Validate that totals and taxes display correctly in the Estimate Options section.

5. **Maintain Legal and Compliance Standards**

* Keep your Terms & Conditions page updated with your latest legal clauses.
* Include payment terms, warranty details, and liability disclaimers clearly.
* Use e-signature fields appropriately, and only authorized signers should be listed.

6. **Optimize for Customer Experience**

* Keep proposals concise, limit to 8–10 pages for easy client review.
* Add visual elements such as inspection photos and job galleries to enhance inspection photos and job galleries for credibility.
* Use the Cinematic or Split Screen cover layout for modern, professional visuals.


## Related topics

- [Proposal Template with CPQ](/Zuper_for_Roofing/Proposal_Template_with_CPQ.md)
- [Create a new proposal](/Accounting/Proposal.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.