---
title: "Create a new proposal"
source: https://docs.zuper.co/Accounting/Proposal.md
fetched_at: 2026-10-06T13:29:49.754Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a new proposal

In Zuper, a **Proposal** is a preliminary document that businesses can send to potential clients before providing an official quote or estimate. It helps define the project scope, outline service offerings, and align expectations before finalizing pricing. Zuper streamlines this process by enabling you to:

* Create structured **Service Packages** that bundle products and services.
* Use **Proposal Templates** to standardize and simplify proposal creation.
* Create, modify, and manage **Proposals** before converting them into quotes. This guide provides step-by-step instructions on configuring service packages, creating proposal templates, and generating proposals within the Zuper app. Let's get started!

<Frame>
  **Navigation**: *Accounting* -> *Payments*
</Frame>

## **Add-ons:**

Zuper **Add-ons** allows you to offer optional products or services within a proposal. Customers can choose these add-ons during proposal acceptance. This helps you upsell services and increase quote value without modifying the base scope of work.

Add-ons are configured at the **Proposal Template** level and appear directly in proposals once enabled.

Configuring Add-ons:

[**Service Package**](https://docs.zuper.co/Accounting/Proposal#add-ons-in-the-service-package)

[**Standard Template**](https://docs.zuper.co/Accounting/Proposal#add-ons-in-the-proposal-template)

[**<u>CPQ Template</u>**](https://docs.zuper.co/Zuper_for_Roofing/Proposal_Template_with_CPQ#add-ons)

[Presenting Proposal to the Customer](https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Proposal_Layout_builder#add-ons)

<Note>
  Note: The Add-ons are applicable only to those using [Proposal Layouts](https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Proposal_Layout_builder).
</Note>

## **Multi-Signer**

Once a proposal is created using a proposal layout, any [preconfigured co-signers and company authorization](https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Proposal_Layout_builder#multi-signer-co-signer-%26-counter-signer) are automatically prefilled. The customer associated with the proposal is set as the primary signer by default. You can add or remove additional signers as needed; however, the primary signer cannot be removed.

Signatures are collected sequentially. After the primary signer selects their preference and signs, the proposal moves to **Awaiting Signature** status and becomes non-editable until all required signers have completed signing. If the proposal includes only the primary signer, it will automatically be converted into an **Accepted Quote** as soon as the primary signer signs.

The Signers & Authorization section controls who must review and electronically sign a proposal.

*  Primary Signer (Pre-filled and non-editable).
* Co-Signers (Additional signers | up up toto 3 persons).
* Internal Signers (Your team members for company authorization).

**1. Managing Signers (Add / Delete)**

**Add a Signer**

* Go to Signers & Authorization section.
* Click the + button (top-right corner).

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS9.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=b13348d39fe73507a4e7b2f9fa827bb0" alt="MS9" width="1920" height="878" data-path="images/MS9.png" />
</Frame>

**Choose tab:**

**Co-Signer → Enter Full Name + Email.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS71.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=fc69d18b82f311b393fb44381c93098b" alt="MS71" width="1920" height="878" data-path="images/MS71.png" />
</Frame>

* Internal Signer → Select user from dropdown (company team member).

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS8.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=43dfe50c8ca40bd47210e32e2c2498de" alt="MS8" width="1920" height="878" data-path="images/MS8.png" />
</Frame>

* Click Add Signer.

**Delete a Signer**

* Click the 🗑 trash icon next to any Co-Signer or Internal Signer.

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS12.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=47902756250a61e13b8982dcabea3254" alt="MS12" width="1920" height="878" data-path="images/MS12.png" />
</Frame>

Confirm in the dialog box by clicking Delete.

<Note>
  **Note**: Primary Signer cannot be deleted.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/0qJ0iWc2ESMlSr-X/images/MS6.png?fit=max&auto=format&n=0qJ0iWc2ESMlSr-X&q=85&s=1c5e01d0c7675236096ea780fd7ff63f" alt="MS6" width="1920" height="878" data-path="images/MS6.png" />
</Frame>

## **Full Signing Workflow (After Sending)**

Here’s what happens step by step once the proposal is ready:

**1. Send the Proposal**

* Click the **Send** button at the top of the screen.
* The proposal status changes to **Sent**.

**2. Primary Signer Notification**

* The primary signer (customer) receives an email notification to review and sign the proposal.

**3. Primary Signer Signs**

* The customer reviews the proposal, selects their preferred option, and signs.

**4. If There Are Additional Signers**

* If co-signers or internal signers are included, the next signer in the sequence automatically receives an email notification.
* The proposal status has been updated to **Awaiting Signature**.
* Any pending signature remains visible in the signer list.

**5. Once Everyone Has Signed**

* After all required signers have completed signing, the quote is fully approved.

| Stage | Status Shown | What Happens |
| :- | :- | :- |
| Before sending | Draft | You can edit signers, pricing, and details. |
| After clicking **Send** | Sent | Email notifications are sent to all signers. |
| Only primary signer (no co-signers) | Accepted | Proposal converts to a live Quote immediately. |
| Co-signer(s) still pending | Awaiting Signature | Quote waits until remaining signers complete. |
| All signatures completed | Approved | Fully signed and ready for next steps. |

## **A. Service Packages**

A **Service Package** is a proposed structured offering of specific solutions or services for a customer/client. You must define the **Service Package** before proceeding.

**To create a service package:**

1. Select the **Settings menu** from the left navigation menu.
2. Under **Configuration Settings**, click **Quotes & Invoices**.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-17.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=3186000f51142d9d5444d519e31c134d" alt="" width="1785" height="786" data-path="Accounting/images/Quotes-17.png" />

3. Select **Service Packages** and click **+ New Package**.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-18.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=c4e9fd58159e4abf533fb979452de4b7" alt="" width="1890" height="659" data-path="Accounting/images/Quotes-18.png" />

4. Under **Service Package Details,** enter:

* **Name**: Enter the package name.
* **Description**: Enter a brief description.
* **Remarks**: Add any additional remarks.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-19.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=c1f8a6e2e5ff04dd0c2772be3c7fec63" alt="" width="1914" height="497" data-path="Accounting/images/Quotes-19.png" />

5. Click the "**+ Add Item**" button to add individual parts, products, and services. Alternatively, use the dropdown menu next to the "**+ Add Item**" button to:

* **Line Item**: Add a part, product, or service as an individual item.
* **Bundle**: Add a part, product, or service bundle. Note that bundles added here will not appear as a product type in the filter menu.
* [**Section**](https://docs.zuper.co/Accounting/Sections): Add a section to help organize line items within the package.
* **Item Group**: Select a predefined group of items to include in the package.

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect36.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=a411d9fbc5a4e58db489fc88fb6c239c" alt="Sect36" width="1920" height="878" data-path="images/Sect36.png" />
</Frame>

10. Adjust the [margin percentage](/Accounting/Profit_Margin) to instantly recalculate markup % and the total sell price for all line items.
11. You can **[add rebates](/Accounting/Rebates)** to individual proposal options to show your customer the potential savings for each option. Zuper calculates a separate Net Investment for each option based on the rebates applied.<br />For more information, see **Rebates and Net Investment**.
12. Click "**Create Package"** to successfully finalize and create the service package.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-21.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=2f4f8e1480a4f25f287985fc43c07efe" alt="" width="1913" height="546" data-path="Accounting/images/Quotes-21.png" />

<Accordion title="Managing service packages" defaultOpen="false">
  Once you have created a service package, you can manage it using the following functions available on the **Service Packages** listing page:

  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-36.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=1fb5deff4ebc5f69dbadf4ed70e506d1" alt="" width="1431" height="550" data-path="Accounting/images/Quotes-36.png" />

  * **Reorder**: Click the <Icon icon="list" color="black" /> **Reorder** button to rearrange items in the package.
  * **Clone**: Click the <Icon icon="files" color="black" />**Clone** icon to duplicate a package.
  * **Edit**: Click the <Icon icon="pencil" color="black" />**Edit** icon to modify the details of the package.
  * **Deactivate**: Click the <Icon icon="circle-x" color="black" />**Deactivate** icon to disable the package.
</Accordion>

## **Add-ons in the Service Package**

Once Add-ons are enabled in Quote settings, you can associate them with **Service Packages**. This allows you to configure optional Add-ons or services alongside a base package.

* In the service package editor, select the **Add-ons** tab.

<img src="https://mintcdn.com/zuperinc/iiHGH2bTOPeZq_2m/images/addon3.png?fit=max&auto=format&n=iiHGH2bTOPeZq_2m&q=85&s=8bb6287aa8f24b9e5983bf15d57cbb97" alt="Addon3" width="1920" height="878" data-path="images/addon3.png" />

* Add the necessary Add-ons and click save.

<img src="https://mintcdn.com/zuperinc/Ig8bDDGGWSV4RlLX/images/addon4.png?fit=max&auto=format&n=Ig8bDDGGWSV4RlLX&q=85&s=3c1407996a3cb2a67252f509fafd3f13" alt="Addon4" width="1920" height="878" data-path="images/addon4.png" />

## **B. Proposal Templates**

A **Proposal Template** is a predefined format for linking service packages in a proposal. It serves as a basic structure for quotations, which can be customized.

**To create a proposal template:**

1. Navigate to **Settings** -> **Configuration Settings** -> **Quotes & Invoices**.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-17.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=3186000f51142d9d5444d519e31c134d" alt="" width="1785" height="786" data-path="Accounting/images/Quotes-17.png" />

2. Select **Proposal Template** from the available options and click the **+ New Proposal Template** button to create a new template.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-22.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=043d386c8f8cf39cedc9b24bf1152925" alt="" width="1881" height="608" data-path="Accounting/images/Quotes-22.png" />

3. Enter a descriptive name and description for your proposal template and click **Create** to proceed.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-23.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=b5e6185e652c55d23448d4bcacdcb55a" alt="" width="797" height="424" data-path="Accounting/images/Quotes-23.png" />

4. Enter a **Label Name** and short description for the proposal template.
5. Add the Service Packages:

* Click the **+ Add Package** button to include a **Service Package** in your template.
* Choose the desired **Service Package** from the list and click **Save** to confirm.

<Note>
  Note: Recommended estimate options' image size: 720 × 240 px (3:1 ratio) — ensures the best fit in the proposal and proposal layout PDF.
</Note>

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-24.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=741859b532185444e3556896827d11c9" alt="" width="663" height="803" data-path="Accounting/images/Quotes-24.png" />

6. Once added, click **Save Template** to finalize the template creation process.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-25.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=8895e3bb08d3d4b240ae5bf1463b4083" alt="" width="1940" height="721" data-path="Accounting/images/Quotes-25.png" />

After creating the template, you can navigate to **Accounting > Quotes & Invoices > + New > Proposal** to use this template while drafting proposals for your customers.

## **Add-ons in the Proposal Template**

When Add-ons are configured and linked to service packages, they automatically appear within proposal templates as **optional Add-ons**.

**Where Add-ons Appear?**

* Add-ons are displayed within each **proposal option card**, under a dedicated **Add-ons** section.
* They are grouped separately from the base service charges to clearly indicate that they are optional.

<img src="https://mintcdn.com/zuperinc/8_goo6XRrYpGqfJg/images/addon8.png?fit=max&auto=format&n=8_goo6XRrYpGqfJg&q=85&s=b2ec8256519ada89b15b1bdae452e839" alt="Addon8" width="1920" height="878" data-path="images/addon8.png" />

## **C. Create a New Proposal**

A **Proposal** is created before sending an estimate to a customer. Once the **Service Package** and **Proposal Template** are set up, you can send a proposal.

<Frame>
  **Navigation** : *Accounting* --> *Quotes* --> *+ New (Proposal)*
</Frame>

**To create a proposal**

1. Click the “**Accounting**” module from the left navigation menu and select "**Quotes**".

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-10.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=76d2c8d74aea8ff367b9df05fc126223" alt="" width="1892" height="797" data-path="Accounting/images/Quotes-10.png" />

2. Click the **+ New button** and select **Proposal**.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-7.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=c670c533b37e05f22b209e96c6d21f4e" alt="" width="1919" height="725" data-path="Accounting/images/quotes-7.png" />

3. Select the appropriate template for your proposal and click the **“Choose Template”** button.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-8.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=2439d1b8e98820a34d41eb1d55301799" alt="" width="1908" height="824" data-path="Accounting/images/quotes-8.png" />

4. A new **Proposal Creation** page will appear.
5. Select either "**Customer**" or "**Organization**" to associate with the proposal.
6. Click "**+Add**" to associate the various modules.
7. A side panel will appear. Select the required module and click the "**Proceed**" button.
8. The billing and service contact details are automatically populated based on the selected customer or organization.
9. Fill in the mandatory fields in the **Proposal Details** section:

* **Proposal Title**
* **Proposal Date**
* **Expiry Date**
* **Quote Template**

10. You can **edit** or **delete** any selected packages as needed in the **Estimate Options** section.
11. The administrator can prefill the options by editing a product with predefined attributes.

<Frame>
  <img src="https://mintcdn.com/zuperinc/laQSbOu9vtacFVQJ/images/Optipro16.png?fit=max&auto=format&n=laQSbOu9vtacFVQJ&q=85&s=07a1bd8dd693fc705d009df014e3dbcc" alt="Optipro16" width="2255" height="1302" data-path="images/Optipro16.png" />
</Frame>

12. Click **+ Add Attachments** to upload any relevant quotation-related attachments to the proposal.
13. Click the **Save & Send** button to save the proposal and proceed with sending it.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-9.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=4d2d48c66f3e41445a3cbb1d15a05933" alt="" width="1904" height="826" data-path="Accounting/images/quotes-9.png" />

14. In the pop-up, confirm the **From ID**, **Email**, **Subject**, and **Body** of the email. Once confirmed, click **Send** again to send the proposal to the selected recipient.

<img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-1.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=aed0f3937fece6efcd44c359f8901206" alt="" width="1890" height="824" data-path="Accounting/images/quotes-1.png" />

<Accordion title="Functions on the Proposal Details page" defaultOpen="false">
  The following perform following functions in the Proposal Details page.

  * **Edit Proposal**: Click the **Edit** button to modify the proposal, including package details and any other changes.
  * **Save as Draft**: After making changes, click **Save as Draft** to save the updated proposal without sending it immediately.
  * **Mark as Accepted**: Once the customer agrees to the proposal, click **Mark as Accepted** to finalize the proposal. This marks the proposal as accepted and ready for the next steps. After marking the proposal as accepted, the proposal is automatically converted into a **Quote**, which means the proposal has been confirmed and the process is moving forward.

  ### **Add-ons in the Proposal - Create / Edit**

  **Add-ons** let you include optional products or services in the proposal that are not part of the primary items. These are displayed under the **Additional Items** section of the proposal option. 

  <Note>
    **Note:** If the Add-ons are enabled in the settings and configured in the standard or CPQ template, they are auto-fetched under the proposal options. Additionally, if any adjustments or changes are required before presenting to the customer, the items under the add-ons section can be updated in the proposal edit page. 
  </Note>
</Accordion>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can different proposal options have different rebates?">
    Yes. Each proposal option can have its own rebates and **Net Investment**.
  </Accordion>

  <Accordion title="What happens to rebates when the customer accepts a proposal option?">
    The proposal retains the rebates associated with the accepted option.
  </Accordion>

  <Accordion title="What happens to rebates when I convert a quote to a proposal?">
    Zuper adds the quote's rebates to the first proposal option.
  </Accordion>

  <Accordion title="Why can't the customer see the rebates on the proposal?">
    Make sure **Show Rebates** is enabled in the Proposal Layout used by the proposal.
  </Accordion>
</AccordionGroup>


## Related topics

- [Proposal Layouts ](/Settings/Modules/Quotes-Invoices/Proposal_Layout_builder.md)
- [Managing your proposals and quotes](/Accounting/Managing_Quotes.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.