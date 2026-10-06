---
title: "Create a new quotation"
source: https://docs.zuper.co/Accounting/Create_New_Quote.md
fetched_at: 2026-10-06T13:29:50.210Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a new quotation

A quotation, also known as an estimate, is a formal document provided to a customer that details the expected costs for a specific service or project. It includes a breakdown of services, materials, labor, and any additional expenses. As a preliminary agreement, a quotation helps set clear expectations for the scope of work and associated costs.

<Frame>
  **Navigation**: *Accounting* *->* *Quotes* -> *+ New (Quote)*
</Frame>

1. Click the “**Accounting**” module from the left navigation menu and select "**Quotes.**"

<Frame>
  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/Quotes-10.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=76d2c8d74aea8ff367b9df05fc126223" alt="" width="1892" height="797" data-path="Accounting/images/Quotes-10.png" />
</Frame>

2. Click “**+ New Quote**” to create a new quote.

<Frame>
  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-3.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=9287258c2f9da8edca98dec5c689f593" alt="" width="1943" height="617" data-path="Accounting/images/quotes-3.png" />
</Frame>

3. Select either "**Customer** ", " **Organization**", or "**Property**" to associate with the quotation.
4. Click "**+ Add**" to associate the various modules.
   <Info>
     You can now associate multiple assets with a quote.
   </Info>
5. A side panel will appear. Select the required module and click the "**Proceed**" button.
6. The billing and service contact details are automatically populated based on the selected customer or organization.
7. Fill in the mandatory fields in the **Quote Details** section:

* **Quote Date**
* **Expiry Date**
* **Quote Template**
  <Note>
    The **Created By** field is automatically set to the user who creates the quote and cannot be changed after the quote is saved. If a different team member takes over the quote, the **Created By** field will continue to display the original creator's name. To reflect updated ownership, use the **Quote Sold By** field to assign the team member actively handling the quote. This field can be updated at any time and is used for ownership tracking, filtering, and sales performance reporting. **Important:** If a specific user needs to appear as the creator of a quote, they must create it themselves from their own login. The **Created By** field cannot be reassigned after creation.
  </Note>

<Note>
  **Note: Remarks field and PDF templates**<br />The **Remarks** field on a quote lets you add custom notes that appear on the quote record. However, whether these remarks appear in the generated PDF depends on how the quote template is configured.<br /><br />If the Remarks section in the PDF template is **hard-coded** (contains static text set during template creation), any changes made to the Remarks field on the quote will not be reflected in the PDF — the template's fixed text will display instead.<br /><br />To have the Remarks field value appear dynamically in the PDF, the template must be updated to use the dynamic Remarks field variable. Contact [**support@zuper.co**](mailto:support@zuper.co) to request this change.<br /><br />**Note:** Custom template changes affect all quotes using that template. Before requesting a change, confirm that updating the Remarks behavior will not affect other quotes currently relying on the static text.
</Note>

8. Click "**+ Add**" in the **Parts & Services** section and select an option to add parts, products, or services to the quotation, such as *Line Item*, *Bundle*, [*Section*](https://docs.zuper.co/Accounting/Sections), *Item Group*, or *Custom Line Item*.

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/sect4-1.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=52ee8986438ad6fff168b55a0c7ca7e0" alt="Sect4 1" width="1920" height="878" data-path="images/sect4-1.png" />
</Frame>

<Check>
  If **Mandate asset association to line items** is enabled in the **Settings** and your quote includes one or more assets, ensure every line item has an asset selected. Otherwise, you won’t be able to save the quote.
</Check>

<Note>
  When you add a non-billable item directly to a quote, its cost is included in the total, ensuring proper tracking. However, if a non-billable item is part of a transaction (such as a job or contract) and that document is later converted into a quote, the item will not appear on the invoice. This is because non-billable items are excluded from the billable total.
</Note>

<Accordion title="Updating markup and discount for Parts, Products, and Services" defaultOpen="false">
  After adding parts, products, and services, you can edit or update the Markup value and its discount by following these steps:

  1. Locate the line item in the list of added parts, products, or services.
  2. Click the **context menu** (three-dot ellipsis) next to the item you want to update.
  3. Choose the **Edit** option. An **Edit Line Item** pop-up will open.

  <Frame>
    <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-5.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=26b0806f71245f20bdb230eda4389b33" alt="Quotes 5" width="1910" height="809" data-path="Accounting/images/quotes-5.png" />
  </Frame>

  * Adjust the markup type to **Flat (+)**, **Percentage (%)**, or **Multiplier (x)** based on your requirement and enter the desired value for the selected markup condition.
  * Edit the discount as either a **percentage (%)** or a **fixed amount (USD)** and enter the desired value in the **Discount** field.

  4. Click **Update** Line Item to apply the changes.

  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-6.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=22a9195613a5f1799f0da7d987018d1f" alt="" width="1903" height="824" data-path="Accounting/images/quotes-6.png" />
</Accordion>

9. If **Track Serial Number** is enabled and **Mandate Serial No** is turned on in Settings, you must need to enter a serial number before proceeding.
10. You can [add rebates](/Accounting/Rebates) to show your customer the potential savings available to them. Zuper uses the rebate amount to calculate and display the customer’s Net Investment without changing the quote Total or Amount Due.
11. After adding parts and services to the quote, transactional discounts and global taxes will be applied.

<Note>
  **Notes:**

  * If a line item includes a custom tax, transactional discounts, and global taxes cannot be applied.
  * Transactional-level discounts apply only when all parts and services in the quote are either fully taxable or fully non-taxable.
  * If a line item includes a custom tax, transactional discounts, and global taxes cannot be applied.
    * Transactional-level discounts apply only when all parts and services in the quote are either fully taxable or fully non-taxable.
    * When any line item on the quote has a custom tax applied, the **Transaction Level** option will not appear in the discount type selector. Removing the custom-tax line item, or updating it to be non-taxable or taxable without a custom tax, restores the **Transaction Level** option.
</Note>

<Note>
  **Tax display in templates**

  The way taxes appear on your quote PDF — for example, whether tax is shown separately per line item or as a single total — is controlled by your document template settings. Some regional billing standards, such as Canadian invoicing requirements, require taxes to be displayed separately from each line item on the document. If you need to change how taxes appear on your quote or proposal templates, contact [Support ](mailto:support@zuper.co)

  Your administrator cannot change this setting directly.
</Note>

11. Adjust the [margin percentage](/Accounting/Profit_Margin) to instantly recalculate markup % and the total selling price for all line items.

12. **Payment Methods:** Select the [payment methods](/Zuper-pay/Settings#configure-the-payment-methods-your-customers-can-see) you want to offer the customer for this quote. You can turn individual payment methods on or off as needed.

13. Enter the details for any custom fields configured in the settings.

14. Click "**+ Add Attachments"** to upload any quotation-related files.

15. Click " **Save as Draft"** to temporarily save the quotation. In the confirmation pop-up, click " **Save as Draft"** again to confirm.

<Frame>
  <img src="https://mintcdn.com/zuperinc/5Qye55qfJoVt0EGz/Accounting/images/quotes-4.png?fit=max&auto=format&n=5Qye55qfJoVt0EGz&q=85&s=3f362f2648b5d383dec9b7a5ba026ecc" alt="" width="1899" height="836" data-path="Accounting/images/quotes-4.png" />
</Frame>

15. The quotation is created successfully.

## Send a quotation

After you save a quotation, you can send it to the customer for review and acceptance.

1. Open the quotation from the **Quotes** listing page.
2. Select **Send** at the top right of the details page.
3. A send dialog appears. Before you send, review the **Document Template** field in the dialog.
   <Warning>
     The **Document Template** field in the send dialog controls which template is used to generate the PDF the customer receives. This is separate from the template you selected when you created the quote. If you change the template here, the PDF layout and content will reflect the newly selected template — not your original selection. Always confirm that the correct template is selected before sending.
   </Warning>
   <Note>
     **Email attachment size limit** When sending a quote by email, attachments are included directly in the email up to a combined size of **20MB**. If the total attachment size exceeds 20MB, Zuper automatically converts attachments to inline download links in the email body rather than sending them as attachments. Recipients can still access the files by clicking the links, but the files will not appear as standard email attachments. **Workaround:** If you need attachments to be delivered as standard email attachments, ensure the total size of all attached files is under 20MB before sending. Consider compressing large files or splitting them across multiple sends if needed.
   </Note>
4. Make any other adjustments to the email details, then select **Send**.

The customer receives the quotation as a PDF based on the template selected at send time.

<Note>
  **Note:** If you have recently edited a quote, wait at least one minute before sending the email. Sending immediately after making changes may result in the PDF attachment showing outdated values. The electronic signing link will always reflect the latest version.

  If you have edited the **Remarks** field, ensure the quote is explicitly saved (via **Save as Draft**) before exporting or sending the PDF. Remarks edits that are not saved prior to PDF generation may revert to the previously saved version.
</Note>

### Set a default document template

To avoid selecting the wrong template each time you send, you can configure a default document template in your settings. The default template pre-populates the **Document Template** field whenever you send a quotation.

1. Go to **Settings**.
2. Go to **Accounting**, then select **Document Templates**.
3. Locate the template you want to set as the default.
4. Select the context menu (three-dot ellipsis) next to the template.
5. Select **Set as Default**.

The selected template now pre-populates the **Document Template** field each time you send a quotation.

<Note>
  **Note**: Setting a default template does not prevent you from selecting a different template at send time. Always review the **Document Template** field before sending to confirm that the correct template is selected.
</Note>

<Note>
  **Note:** Setting a default template here only affects quotes sent or printed from the **Quotes** module. If you print or save a quote-related document from within a **Job** record, that document uses the **Job Card Template** assigned to the job instead — see [Configuring Job Card Templates](/Settings/Modules/Jobs/Configuring-job-card-template).
</Note>

<Warning>
  **Reversing an accepted quote:** A quote cannot be moved backward from  **Accepted** to **Sent**, and it cannot be returned to **Draft** from the  Quote Details page. Status transitions on quotes move forward only.

  If a customer changes their mind after approving a quote, you have two  options:

  * **Clone the quote** and send the copy, keeping the original accepted record    intact for audit purposes.
  * **Contact [Zuper Support](mailto:support@zuper.co)** with the quote number    if the original record itself must be reverted.
</Warning>

Quotations are sent to customers for their review and acceptance before the job begins. Once the customer accepts the quotation, technicians can proceed with the services or replacement of parts listed in the document.

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Does adding a rebate reduce the quote Total or Amount Due?">
    No. The rebate is shown separately and is used only to calculate the customer's **Net Investment**.
  </Accordion>

  <Accordion title="Can I add multiple rebates to a quote?">
    Yes. You can add multiple rebates to a quote, up to the supported limit. Zuper combines them when calculating **Net Investment**.
  </Accordion>

  <Accordion title="What happens if I edit a rebate template after adding it to a quote?">
    The rebate already added to the quote does not change. Edit the rebate directly on the quote if you need to update it.
  </Accordion>
</AccordionGroup>


## Related topics

- [Zapier ](/Integrations/Work_Flow_Automation/Zapier.md)
- [Multi Trade Groups in CPQ Proposals](/Zuper_for_Roofing/Multi-trade groups in CPQ proposals.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.