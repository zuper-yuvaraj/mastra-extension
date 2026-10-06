---
title: "Configuring Quotes and Invoices"
source: https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Quotes-Invoices-Settings.md
fetched_at: 2026-10-06T13:30:13.005Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Quotes and Invoices

The "**Quote & Invoice Settings**" allows you to configure and customize features related to quotes and invoices.

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices - > Quotes and Invoices General Settings*
</Frame>

## Quotes and invoices general settings

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Quote and Invoice General Settings**.”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI1.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=082e19bcd883dc9fd7c8872e7be3932d" alt="QI1 Pn" width="1906" height="867" data-path="images/QI1.png" />

### General tab

The General tab allows you to configure settings for quotes and invoices.

* Maximum Digits for Round-off: Set the number of decimal places for rounding off amounts.

**Discount Options:**

* Discount Type: Choose the default discount type (Fixed Amount or Percentage).
* Apply Discount at: Select the level at which discounts are applied (Transaction Level or Line-Item Level).

<Note>
  The **Transaction Level** option is only available when every part, product, and service on the quote is either fully taxable (without custom tax) or fully non-taxable. If any line item carries a custom tax, **Transaction Level** will not be selectable until that line item's tax is changed or removed. See [Create a new quotation](/Accounting/Create_New_Quote) for details.
</Note>

**Tax Settings:**

* Choose Address Type for Adding Taxes: Specify which address type to use for tax calculations (Billing Address or Service Address).

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI10.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=1f47f0ee5488e72edf800b6d3dddab79" alt="QI10 Pn" width="1919" height="870" data-path="images/QI10.png" />

### Quote tab

The Quote tab lets you customize settings specific to quotes.

* Quote Prefix: Define a prefix for quote numbers.
* Default Remarks for Quote: Add default remarks that will appear on all quotes.
* Allow Contact to Accept Quote?: Enable or disable the option for contacts to accept quotes directly (Yes/No).
* Auto-convert Quote to Invoice?: Choose whether to automatically convert a quote to an invoice upon acceptance (**Yes, Save as Draft | Yes, Save and Send, or No**).
* Choose Invoice Payment Term: Set the default payment term for invoices generated from quotes (e.g., 10-day term).
* Choose Invoice Template: Select a default invoice template for quotes converted to invoices.
* Default Expiry Period (in days): Specify the default validity period for quotes.
* Get Contact Sign on Approval?: Decide if a contact’s signature is required upon quote approval.
* Can Field Executive Create Quote?: Allow field executives to create quotes. (Yes/No).
* Can Field Executive Access All Quotes?: Allow field executives to access all quotes (Yes/No).
* Allow FE to View Quotes Only in Job?: Restrict field executives to view only quotes associated with their assigned jobs (Yes/No).
* Allow Payment Collection?: Enable payment collection for quotes (Yes/No).
* Allow Sending Payment Link to Contact?: Allow sending payment links to contacts for quotes (Yes/No).
* Mandate Contact to Pay Deposit on Quote Approval?: Require contacts to pay a deposit upon approving a quote (Yes/No).
* Payment Mode Facilitating the Payment: Select the default payment mode.
* Allow Field Executive to Collect Payment?: Allow field executives to collect payments for quotes (Yes/No).
* Notify Created User on Status Updates?: Notify the user who created the quote about status updates (e.g., Accepted/Rejected/Requested for Changes) (Yes/No).
* Default Quote PDF Filename: Set the default filename format for quote PDFs.
* Choose Quote Component: Select components to include in quotes.

### Receipt settings

* Auto Send Receipt to Customer / Contact?: Enable automatically sending receipts to contacts after payment (Yes/No).
* Default Deposit Payment Receipt Template: Select a template for deposit payment receipts.
* Default Quote Email Template: Choose a default email template for sending quotes.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI11.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=722632c242b39e07834b5127294030be" alt="QI11 Pn" width="1919" height="873" data-path="images/QI11.png" />

### Add-ons

Settings → Quotes & Invoices → Quote and Invoice General Settings → Quote tab

**Step 1: Enable Add-ons**

1. Locate **Enable Add-ons?**
2. Toggle the setting to **Yes**

Once enabled, add-ons become available in the Proposal (Quote) module.

**Step 2: Set Add-ons Display Label**

1. In the **Add-ons Display Label**, enter the label you want customers to see
   * Example: Add-ons, Optional Services.
2. This label will appear in the proposal PDF presentation.

<img src="https://mintcdn.com/zuperinc/8_goo6XRrYpGqfJg/images/addon1.png?fit=max&auto=format&n=8_goo6XRrYpGqfJg&q=85&s=3201de951ee20f4ecfdb756e1f93921b" alt="Addon1" width="1920" height="878" data-path="images/addon1.png" />

### Invoice tab

The Invoice tab allows you to configure settings specific to invoices.

* Invoice Prefix: Define a prefix for invoice numbers.
* Default Remarks for Invoice: Add default remarks that will appear on all invoices.
* Can Field Executive Create Invoice?: Allow field executives to create invoices (Yes/No).
* Can Field Executive Access All Invoices?: Allow field executives to access all invoices (Yes/No).
* Allow FE to View Invoices Only in Job?: Restrict field executives to view only invoices associated with their assigned jobs (Yes/No).
* Allow Sending Public Link to Customers?: Allow sending public invoice links to customers (Yes/No).
* Allow Payment Collection?: Enable payment collection for invoices (Yes/No).
* Allow Sending Payment Link to Contact?: Allow sending payment links to contacts for invoices (Yes/No).
* Payment Mode Facilitating the Payment: Select the default payment mode.
* Allow Field Executive to Collect Payment?: Allow field executives to collect invoice payments (Yes/No).
* Default Invoice PDF Filename: Set the default filename format for invoice PDFs.
* Choose Invoice Component: Select components to include in invoices.
* Enable Automatic Payments?: Enable automatic payment processing for invoices (Yes/No).

<Note>
  **Note:** The invoice template controls PDF layout, including where totals appear. Invoices with many line items may display the total close to the page header on the last page. Contact [support@zuper.co](mailto:support@zuper.co) for template changes. Changes apply to all invoices using that template.
</Note>

### Receipt settings

* Auto Send Receipt to Customer / Contact?: Enable automatically sending receipts to contacts after payment (Yes/No).
* Default Deposit Payment Receipt Template: Select a template for deposit payment receipts.
* Default Invoice Email Template: Choose a default email template for sending invoices.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI13.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=d0f9aed9afe1e110d9ac4558dd33ce1d" alt="QI13 Pn" width="1920" height="868" data-path="images/QI13.png" />

**Tip Settings:**

* Allow Tipping?: Enable invoice tipping (Yes/No).
* Tip Amount Percentages (%): Set predefined tip percentage options (e.g., 10%, 15%, 20%).
* Allow Custom Tip Amount?: Customers can enter a custom tip amount (Yes/No).

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI14.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=1603448b933fd5b38aaed87c005e3911" alt="QI14 Pn" width="1910" height="875" data-path="images/QI14.png" />

### Financing tab

The Financing tab lets you set up financing options for quotes and invoices.

* Enable Financing?: Turn financing options on or off (Yes/No).
* Payment Mode: Facilitating the Payment: Select the payment mode for financing.
* Amount Range to Facilitate Financing Option (in USD): Define the amount range for financing.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI15.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=ad5f238549ceebc7fb50d5724fc34c1e" alt="QI15 Pn" width="1919" height="873" data-path="images/QI15.png" />

Click the “**Save**” button to save the quote and invoice general settings.

## **Service packages**

Before providing an official price quote or estimate, a business or service provider may send a preliminary document or communication to a potential client. This is called a "Proposal." It is usually used when the project or service scope needs clarification or definition before determining a specific price.

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Service Packages*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Service Packages**.”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI2.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=4f0e85ccabe0bd31f61b588b512f3a1e" alt="QI2 Pn" width="1906" height="867" data-path="images/QI2.png" />

2. Select the “**Service Package**s” and click the “**+ New Package**.”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI17.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=59b153df417b3c853abe0535009f2ab2" alt="QI17 Pn" width="1916" height="877" data-path="images/QI17.png" />

3. Under the “**Service Package Details**” section:

* Name – Enter the name of the service package.
* Description – Enter the description of the service package.
* Remarks - Enter the remarks.
* Click the "**+ Add**" button to add individual parts, products, and services.
* Alternatively, use the dropdown menu next to the "**+ Add**" button to: o Add from Group: Select a predefined group of items to add to the package.
* **Bundle**: Add a product or service bundle. Note that bundles added here will not appear as a product type in the filter menu.
* Adjust the [margin percentage](/Accounting/Profit_Margin) to instantly recalculate markup % and the total sell price for all line items.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI19.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=dcaedd8fbcdb7dc9055e369eadb6c879" alt="QI19 Pn" width="1914" height="829" data-path="images/QI19.png" />

Click “**+ Save Package**” to save the service package.

## **Tax settings**

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices - > Tax Settings*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Tax Settings**.”

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI5.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=d7f396cf79e250e82eac72be9af7557e" alt="QI5 Pn" width="1906" height="867" data-path="images/QI5.png" />

2. Click “**+ New Tax.**”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI24.1.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=2e7807548fe1f3c0d71fc35ffafa2cbe" alt="QI24 1 Pn" width="1888" height="863" data-path="images/QI24.1.png" />

a. To add the Tax details:

* Tax Name – Enter the tax name.
* Tax Rate – Enter the %
* Is this a Regional tax – You can choose either “**Yes**” or “**No**” to enable/disable regional tax.
* Associate tax to tax group – Add a checkmark to link tax to the tax groups.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI25.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=123f6d3710f1495f3d1adb614cc065ee" alt="QI25 Pn" width="1910" height="861" data-path="images/QI25.png" />

Click “**Create**” to create the new tax.

b. To add the Tax group

Click the "**+ New Tax Group**" option to add the appropriate tax options under a single category.

* Tax Group Name – Enter the tax group name.
* Taxes – Toggle on the required taxes.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI26.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=3e72317637d240145233619b6362ea3a" alt="QI26 Pn" width="1918" height="874" data-path="images/QI26.png" />

Click “**Create**” to create the new tax group.

## Discount and fees

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Discount & Fees*
</Frame>

Zuper makes it easy to manage discounts, fees, and rebate templates, helping you configure pricing adjustments and customer incentives in one place.

<Badge color="green" stroke>New</Badge>For complete information about enabling rebates, adding them to quotes or proposals, and how Net Investment is calculated, see [**Rebates**](/Accounting/Rebates).

**Adding a new discount/fee**

Use this setting to create reusable templates for discounts, fees, and rebates that your team can apply to supported transactions.

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Discount & Fees Settings**.”
   <Frame>
     <img src="https://mintcdn.com/zuperinc/DqOAnnfaXs-NZgy_/images/SCR-20261005-mnbp.png?fit=max&auto=format&n=DqOAnnfaXs-NZgy_&q=85&s=ab23ea7008632eedad6ff8cbaa3c5d46" alt="SCR 20261005 Mnbp" width="3400" height="1958" data-path="images/SCR-20261005-mnbp.png" />
   </Frame>
2. Click the **+ New Discount/Fee**.
3. Select the appropriate **Type**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/DqOAnnfaXs-NZgy_/images/SCR-20261005-mnjw.png?fit=max&auto=format&n=DqOAnnfaXs-NZgy_&q=85&s=976b850ea9b6912c16403f5c2fb4d382" alt="SCR 20261005 Mnjw" width="2892" height="1630" data-path="images/SCR-20261005-mnjw.png" />
   </Frame>
4. Enter a **Name**.
5. Configure the value:

   * For discounts and fees, use the supported percentage or fixed amount options.
   * For rebates, enter a fixed **Amount**.
6. Optional: Select the applicable **Trade Types**.
7. Optional: In **Restrict to Custom Roles**, select the roles that can use the item.
8. Click **Create**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/tnVJfzXmXdFtgJ4g/Accounting/images/SCR-20261001-nxah.png?fit=max&auto=format&n=tnVJfzXmXdFtgJ4g&q=85&s=7baa72240ddd16e5ad7be993f0435cc0" alt="SCR 20261001 Nxah" width="3408" height="1924" data-path="Accounting/images/SCR-20261001-nxah.png" />
   </Frame>

<br />The item is now available to eligible users wherever that type is supported in Zuper.

<Info>
  For details about rebate-specific setup and behavior, see [**Rebates**](/Accounting/Rebates).
</Info>

## **Payment modes & terms**

Zuper allows you to create multiple payment modes that users can select when collecting invoice payments or quote deposits. You can also control the visibility of each payment mode by assigning access roles. Only users with the assigned role can view and select that payment mode.

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices - > Payment Modes & Terms*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Payment Modes & Terms**.”

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI5.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=d7f396cf79e250e82eac72be9af7557e" alt="QI5 Pn" width="1906" height="867" data-path="images/QI5.png" />

2. In the **Payment Mode** section, click “**+ New Payment Mode** .”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI27.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=c507e9f28a2083ee18a85ba211993e4d" alt="QI27 Pn" width="1877" height="872" data-path="images/QI27.png" />

3. Select the **Type** of payment. 
4. In the **Choose Access Role** field, select one or more roles that should have access to this payment mode. This prevents payment type from appearing for users without a matching role. 
5. Enter a **Description** to help your team understand when to use this payment mode.  
6. When finished, click **Create**. <br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/O4_SNzdFqvmxpDs2/images/paymentaccess.png?fit=max&auto=format&n=O4_SNzdFqvmxpDs2&q=85&s=e579f272540e0d6cb2cb144c06cc2f22" alt="Paymentaccess" width="3368" height="1830" data-path="images/paymentaccess.png" />
   </Frame>

### Payment term

Zuper also lets you create multiple payment terms that define when an invoice payment is due. Each term has a set number of days, which Zuper adds to the invoice date to calculate the due date. You can select the appropriate payment term while creating an invoice or quote.

1. Under “ **Payment Term**,” Click “**+ New Payment Term**.”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI28.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=dbe2be1ed5aa6b3294fba9a6c1ffb9fd" alt="QI28 Pn" width="1877" height="872" data-path="images/QI28.png" />

2. Enter the name of the payment term and the number of days.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI31.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=bc1a7abdcb4f68eb470d1fb85d048c78" alt="QI31 Pn" width="1893" height="871" data-path="images/QI31.png" />

3. Click “**Create**” to create the payment term.

## **Follow up reminders**

The users can instantly send follow-up reminders before or after a particular date via SMS or Email.

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Follow up reminders*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Follow-up Reminders** .”

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI6.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=2406f9182334e2b42adb23da95848432" alt="QI6 Pn" width="1906" height="867" data-path="images/QI6.png" />

2. Click “**+ New Reminder**” to create the follow-up reminder.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI32.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=0ded01a5a42513dcb9a4eaa449e4ad33" alt="QI32 Pn" width="1916" height="871" data-path="images/QI32.png" />

3. a) Under Choose Module - Select the Module: Quotes or Invoice.

b) Under “**Remind To**”- The user can send a follow-up reminder to the back office and the customer. The dropdown box list: “**Customer**,” “**Selected Users**,” and “**Selected Teams**.”

c) Under “**Reminder Name**” - Type the name for the reminder.

d) Under “**Remind After / Remind Before**” - The reminder can be sent “**Befor**e” or “**After**.”

e) Under “**Reminder Type**” -The reminder type can be either “**SMS**” or “**Email**.”

f) **SMS Body** & **Available Components** – Choose the available components and create the SMS body.

Click “**Create**” to create the follow-up reminder.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI33.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=9dc96847c772e10c400bc232167cfaa2" alt="QI33 Pn" width="1915" height="877" data-path="images/QI33.png" />

## **Quotes & invoices templates**

The users can instantly send follow-up reminders before or after a particular date via SMS or Email.

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Quotes & Invoices Templates*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” choose the “**Quotes & Invoices**.” Select the “**Quotes & Invoice Templates**.”

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI7.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=ef9b03ae39556ca5bb6e7e0d84c7bf2a" alt="QI7 Pn" width="1906" height="867" data-path="images/QI7.png" />

2. Click “**+New Template**” and you can choose either “**Quote**” or “**Invoice** .”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI35.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=1e19d3282a253a460e13d0da9815ed98" alt="QI35 Pn" width="1913" height="873" data-path="images/QI35.png" />

3. Fill in the template details and click “**Save Template** .”

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI37.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=56ec3b7530225b58ddf517e4054c60bc" alt="QI37 Pn" width="1914" height="870" data-path="images/QI37.png" />

<Accordion title="How to create and customize a document template">
  ## Step 1 — Set template properties

  Template properties control the global appearance of the PDF: its name, page size, orientation, margins, and font.

  1. Go to **Settings**, then select **Accounting**, then select **Document Templates**.
  2. Select **+ New Template**. The **Create Template** dialog opens with the **Template** tab selected.
  3. Enter a name in the **Template Name** field. This field is required.
  4. Enter an optional description in the **Description** field to help you identify the template later.
  5. Under **Page Size**, select **A4**, **Legal**, or **Letter**.
  6. Under **Orientation**, select **Portrait** or **Landscape**.
  7. Under **Margin (in mm)**, enter values for **Top**, **Bottom**, **Left**, and **Right**. The default is 10 mm on all sides.
  8. Under **PDF Font**, select a font from the dropdown. The default is **Inter**.

  <Tip>
    Use the **Preview** pane on the right to see how your page size and margins affect the layout. Select the refresh icon in the preview header after making changes to reload the preview.
  </Tip>

  ***

  ## Step 2 — Configure the header

  The header appears at the top of every page of your PDF. Use it to display your logo, company name, and address.

  1. Select **Header** in the left sidebar.
  2. Select the **Show Organization Logo** checkbox to display your logo.
  3. Select **Upload Your Logo** to add or replace the logo image.
  4. Select the **Show Organization Name** checkbox to display your company name in the header.
  5. Select the **Show Organization Address** checkbox to display your organization's address in the header.
  6. Under **Logo Position**, select **Left**, **Center**, or **Right** to control where the logo appears.

  <Note>
    The customer's "Quote To" address always appears on the left side of the PDF. When you enable **Show Organization Address**, your organization's address appears alongside the customer's address on the same document.
  </Note>

  ***

  ## Step 3 — Customize the item table

  The **Item Table** section controls which columns appear in the line items table, what each column is called, how wide it is, and what order the columns appear in.

  1. Select **Items** in the left sidebar. The **Label** sub-tab is shown by default.
  2. For each column row, select the checkbox to show that column in the PDF, or clear it to hide it.
  3. Enter a number in the **Width (%)** field for each visible column. The widths of all visible columns should total 100%.
  4. Edit the **Label** field to rename a column heading appears on the PDF.
  5. Select and drag the handle (≡) on the left of any row to change the column order.

  The available columns are:

  | Column | Default label | Width (%) | Shown by default |
  | - | - | - | - |
  | Line Item Number | ID | 10 | No |
  | Item | Item | 35 | Yes |
  | Rate | Price | 25 | Yes |
  | Quantity | Qty | 20 | Yes |
  | Discount | Discount | 20 | No |
  | Amount | Total | 20 | Yes |

  <Tip>
    If you want to hide pricing from the customer, clear the **Rate** checkbox. See [Creating a no-pricing variant](#creating-a-no-pricing-variant) below for the full process.
  </Tip>

  ***

  ## Step 4 — Set up the totals section

  The **Total** section controls what appears in the summary block below the line items table — the subtotal, discounts, taxes, grand total, currency symbol position, and payment history.

  1. Select **Total** in the left sidebar.
  2. Select the **Show Total Section** checkbox to include the totals block on the PDF. Clear it to hide the totals block entirely, which is useful for internal job cards.
  3. Select the **Discount** checkbox to show the discount line. Clear it to hide it.
  4. Select the **Show Tax Details** checkbox to show individual tax lines.
  5. Edit the **Sub Total** label field to rename the subtotal line as it appears on the PDF.
  6. Edit the **Total** label field to rename the grand total line.
  7. Under **Currency Symbol**, select **Before Amount** or **After Amount** to control where the currency symbol appears.
  8. Select the **Show Payment History** checkbox to include a payment history block on the PDF.

  ***

  ## Step 5 — Add footer content

  The footer appears below the totals section. Use it to include remarks, payment instructions, terms and conditions, and a signature block.

  ### Remarks

  1. Select **Footer** in the left sidebar.
  2. Select the **Remarks** checkbox to enable the remarks section.
  3. Edit the **Label** field to set the heading for the remarks section. The default label is "Important Note".
  4. Enter a font size in the **Font Size** field.

  <Note>
    The remarks text that appears on the PDF comes from the **Remarks** field on the individual quote or invoice record — not from the template itself. If the PDF shows static text instead of the remarks you entered on the quote, the template might be using a fixed text variable. Contact [support@zuper.co](mailto:support@zuper.co) to switch the template to a dynamic remarks variable.
  </Note>

  ### Payment options

  1. Under **Payment Options**, select the **Payment Options** checkbox to enable this section.
  2. From the **Online Payment Link** dropdown, select **Yes** to include an online payment link on the PDF, or **No** to hide it.
  3. In the **Add your bank details** field, enter offline payment instructions.

  ### Terms and conditions

  1. Select the **Terms and Conditions** checkbox to enable the terms section.
  2. Edit the **Label** field to set the section heading. The default label is "Terms and Conditions".
  3. Enter a font size in the **Font Size** field.
  4. Use the rich text editor in the **Message** field to enter your terms and conditions content. The editor supports bold, italic, and bullet lists.

  ### Signature

  1. Scroll to the bottom of the **Footer** tab.
  2. Select the **Signature** checkbox to include a signature block on the PDF.

  ***

  ## Save your template and set it as the default

  1. Select **Save Template** in the top right corner of the builder.
  2. To make this the default template for all new quotes and invoices, go back to the **Document Templates** listing page.
  3. Find your template in the list, select the three-dot context menu icon next to it, and select **Set as Default**.

  Once a template is set as the default, Zuper pre-fills the **Document Template** field each time you create or send a quote. You can still select a different template at the time of sending.

  <Tip>
    Setting a default template does not lock you in. You can always choose a different template from the **Document Template** field in the send dialog before you send.
  </Tip>
</Accordion>

<Accordion title="Troubleshooting Invoice PDF Formatting Issues">
  ## Common causes at a glance

  | Cause | Symptom | Fix |
  | - | - | - |
  | **Footer / header HTML** | Text overflows, overlaps, or disappears at page edges | Simplify or remove custom HTML from the template footer/header |
  | **Copy-paste from Word** | Random fonts, odd spacing, invisible characters | Re-type content directly in the Zuper template editor |
  | **Oversized or broken images** | Image stretches across columns or pushes content off-page | Re-upload images within Zuper; keep width under 600 px |
  | **Non-web-safe fonts** | Characters replaced by boxes or question marks | Use Arial, Helvetica, or Times New Roman only |
  | **Custom CSS / inline styles** | Layout shifts unpredictably between browsers and PDF | Remove all inline style attributes from template HTML |
  | **Platform rendering bug** | Issue persists after all above steps | Escalate to Zuper Support with reproduction steps |

  ***

  ## Step-by-step troubleshooting tree

  Work through each step in order. Stop at the step that resolves the issue.

  #### Step 1 — Confirm the issue is reproducible

  1. Open the affected invoice in **Accounting → Invoices**.
  2. Click the **PDF** button (top right) to download.
  3. Open the downloaded file in a standard PDF viewer (Adobe Acrobat or a browser).
  4. Note exactly what is wrong: overlapping text, missing sections, images out of place, blank pages.

  <Note>
    If the issue appears only in a specific PDF viewer, try another viewer before proceeding. Some viewers render PDFs differently.
  </Note>

  ***

  #### Step 2 — Try a different invoice template

  1. Open the invoice and click **Edit**.
  2. In the **Invoice Template** field, switch to the **Default Invoice Template** (or any other template).
  3. Save the invoice.
  4. Download the PDF again and check if the layout is correct.

  * If the PDF renders correctly with a different template → the problem is in the original template. Continue to **Step 3**.
  * If the PDF is still jumbled with any template → skip to **Step 6** (platform bug).

  ***

  #### Step 3 — Inspect and simplify footer and header HTML

  <Frame>
    **Navigation**: *Settings → Modules → Quotes & Invoices → Document Templates*
  </Frame>

  1. Locate the Default Invoice Template (or the template in use) and open it for editing.
  2. Navigate to the **Footer** section.
  3. Switch to the HTML / source view if available.
  4. Look for and remove:
     * Nested `<table>` tags inside the footer
     * Inline `style=` attributes with fixed widths, floats, or `position: absolute`
     * Empty `<div>` or `<span>` tags with no content
     * `<style>` blocks embedded in the footer HTML
  5. Replace the footer with plain text only — no HTML tags.
  6. Save the template and re-download the invoice PDF.

  * If resolved → reintroduce formatting elements one at a time to isolate the offending code.
  * If not resolved → continue to **Step 4**.

  ***

  #### Step 4 — Remove copy-paste content from Word or other editors

  Content pasted from Microsoft Word, Google Docs, or Outlook carries hidden formatting (spans, font-family declarations, and non-breaking spaces) that breaks the PDF renderer.

  1. In the template editor, select all text in the footer, header, and any custom fields.
  2. Delete it entirely.
  3. Re-type the content directly using the Zuper text editor (do not paste).
  4. If you need to paste, paste into a plain-text editor (Notepad on Windows, TextEdit in plain-text mode on Mac) first, then copy from there and paste into Zuper.
  5. Save and re-download the PDF.

  * If resolved → done. Document this in your internal process to prevent recurrence.
  * If not resolved → continue to **Step 5**.

  ***

  #### Step 5 — Check images in the template

  1. Open the template editor.
  2. For each image (logo, signature, watermark):
     * Remove the image entirely and save.
     * Download the PDF and check if the issue is gone.
     * If yes — the image is the cause.
  3. Re-upload the image following these guidelines:
     * **Width:** 600 px or less
     * **File size:** under 500 KB
     * **Format:** PNG or JPEG (avoid SVG and WebP in templates)
     * Do not reference images hosted on external URLs — upload them directly into Zuper
  4. Save the template and re-download the PDF.

  * If resolved → done.
  * If not resolved → continue to **Step 6**.

  ***

  #### Step 6 — Check fonts

  The Zuper PDF renderer supports a limited set of fonts. Custom or system-installed fonts may render as boxes or question marks.

  1. In the template editor, select all text.
  2. Change the font to **Arial** or **Helvetica**.
  3. Remove any `font-family` declarations from custom HTML.
  4. Save and re-download the PDF.

  <Note>
    **Supported fonts:** Arial, Helvetica, Times New Roman, Courier New, Georgia.
  </Note>

  * If resolved → done.
  * If not resolved → continue to **Step 7**.

  ***

  #### Step 7 — Escalate to Zuper Support (platform rendering bug)

  If the PDF is still jumbled after completing Steps 1–6, the issue is likely a platform-level rendering bug in Zuper's invoice PDF generation engine. This requires investigation by the product team.

  Before contacting Support, collect the following:

  * The exact name of the invoice template in use
  * A screenshot or screen recording of the jumbled PDF
  * The invoice number and the customer's account name
  * Confirmation of which steps above were completed
  * The browser and operating system used when downloading Contact Zuper Support at [support@zuper.co](mailto:support@zuper.co) with the above details.

  ***

  ## What to avoid in invoice templates

  <Warning>
    **Do not use in template footer or header HTML:**

    * `<table>` tags inside footers (causes overflow and overlap)
    * `position: absolute` or `position: fixed` CSS
    * Inline width values in pixels exceeding the page width (`>700 px`)
    * Pasted content from Microsoft Word, Outlook, or Google Docs
    * External image URLs (images must be uploaded into Zuper)
    * Custom or non-web-safe fonts
    * Nested `<style>` blocks inside the template body
  </Warning>

  <Check>
    **Safe practices for invoice templates:**

    * Use plain text for footer content where possible
    * Limit HTML to basic tags: `<p>`, `<strong>`, `<em>`, `<br>`
    * Use Arial or Helvetica as the font family
    * Keep logo images under 600 px wide and 500 KB
    * Test the PDF after every template change before sending to customers
    * Use the Default Invoice Template as a baseline when troubleshooting
  </Check>

  ***

  ## Frequently asked questions

  <AccordionGroup>
    <Accordion title="The footer looks correct on screen but is jumbled in the PDF. Why?">
      The Zuper web editor renders HTML using a browser engine, while the PDF generator uses a separate rendering library with more limited HTML and CSS support. Elements that display correctly in the browser may break in the PDF. Always download and review the PDF after any template change.
    </Accordion>

    <Accordion title="The customer received a jumbled PDF by email. How do I send them a corrected version?">
      Once the template is fixed, open the invoice, click **Send**, confirm the correct template is selected in the **Document Template** field, and resend. The customer will receive a freshly generated PDF.
    </Accordion>

    <Accordion title="My template was working before. What changed?">
      Template rendering can be affected by recent updates to the Zuper PDF generation engine. If your template was unchanged but the output has degraded, escalate to Zuper Support (Step 7 above) and reference the approximate date the issue began.
    </Accordion>

    <Accordion title="Can I use a custom PDF template built outside Zuper?">
      Not directly. Zuper does not support importing externally-built PDF templates. However, you can upload a static PDF file as an attachment to the invoice, or contact Zuper Support to request a custom template build for your account.
    </Accordion>
  </AccordionGroup>

  ***
</Accordion>

<Note>
  **Note:** This template controls PDF documents generated from the **Quotes** module (Accounting → Quotes) — for example, when you send a quote or print/save it directly from its quote record. It does not apply to documents printed or saved from within a **Job** record. Job-related documents use a separate **Job Card Template**, configured under Settings → Modules → Jobs → Job Card Templates. If a quote PDF generated from the Jobs section isn't reflecting your quote template changes, check the Job Card Template assigned to that job's category instead.
</Note>

## **Quote custom fields**

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Quotes Custom Fields*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the " **Quotes and Invoices.**" Select the "**Quotes Custom Fields**."

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI8.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=0992762994448127500c02df3d7d6453" alt="QI8 Pn" width="1906" height="867" data-path="images/QI8.png" />

Text

* Single-Line Input: This allows you to create a field to enter a single line of free text.
* Multi-Line Input: This allows you to create a field to enter multiple lines of free text.

Date

* Date Input: This allows you to create a field to select a specific date from a calendar.
* Time Input: This allows you to create a field where you can select a specific time.
* Date Time Input: This allows you to create a field where both date and time can be selected.

Selection

* Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
* Multi-Selection: This allows you to create check boxes where the provided options can be checked.
* Drop-Down: This allows you to create a drop-down field with the required list of options.

Media

* Upload: This allows you to create a file input field to upload files.

Misc

* **Look up** : This allows you to create a file input field to look up the products from the parts and services module.

<Note>
  Note: You can also control the behavior and visibility of each field using the following options:

  * Mark as Required Field -  Makes the field mandatory to fill out before submitting the form.
  * Mark as Read Only—This option makes the field non-editable; users can view the value but cannot modify it.
  * Mark as hidden field- This hides the field from all users; it will not appear in the form interface.
  * Hide to FE/Technician- This option makes the field invisible to technicians or front-end users during form access.
</Note>

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI41.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=fcdfae2bf6d0db24adb3bdd1aae98a05" alt="QI41 Pn" width="1914" height="867" data-path="images/QI41.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI42.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=956d994f74a98d0006190b3eb1f11bdc" alt="QI42 Pn" width="1914" height="876" data-path="images/QI42.png" />

Click “**Create New**” to create the “**Custom Field**” group.

## **Invoice custom fields**

<Frame>
  **Navigation**: *Settings -> Modules -> Quotes and Invoices -> Invoices Custom Fields*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Quotes and Invoices.**" Select the "**Invoices Custom Fields**."

<img src="https://mintcdn.com/zuperinc/xykriCG8yCRPW26t/images/QI9.png?fit=max&auto=format&n=xykriCG8yCRPW26t&q=85&s=cdc40566deb4f3a2160d809d549472c3" alt="QI9 Pn" width="1906" height="867" data-path="images/QI9.png" />

Text

* Single-Line Input: This allows you to create a field to enter a single line of free text.
* Multi-Line Input: This allows you to create a field to enter multiple lines of free text.

Date

* Date Input: This allows you to create a field to select a specific date from a calendar.
* Time Input: This allows you to create a field where you can select a specific time.
* Date Time Input: This allows you to create a field where both date and time can be selected.

Selection

* Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
* Multi-Selection: This allows you to create check boxes where the provided options can be checked.
* Drop-Down: This allows you to create a drop-down field with the required list of options.

Media

* Upload: This allows you to create a file input field to upload files.

Misc

* **Look up** : This allows you to create a file input field to look up the products from the parts and services module.

<Note>
  Note: You can also control the behavior and visibility of each field using the following options:

  * Mark as Required Field -  Makes the field mandatory to fill out before submitting the form.
  * Mark as Read Only—This option makes the field non-editable; users can view the value but cannot modify it.
  * Mark as hidden field- This hides the field from all users; it will not appear in the form interface.
  * Hide to FE/Technician- This option makes the field invisible to technicians or front-end users during form access.
</Note>

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI44.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=1e5b0c6526e0c9b974c6816e401f8566" alt="QI44 Pn" width="1917" height="867" data-path="images/QI44.png" />

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI45.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=1f3f8b8aa2132c6dbfe98dccb52f6369" alt="QI45 Pn" width="1916" height="871" data-path="images/QI45.png" />

Click “**Create New**” to create the “**Custom Field**” group.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QI43.png?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=bf7995367f42d5eb66873162a1fad512" alt="QI43 Pn" width="1917" height="867" data-path="images/QI43.png" />

With the "**Quote & Invoice Settings** ," you can tailor every aspect of your quotes and invoices to suit your business needs.i


## Related topics

- [Xero](/Integrations/Accounting_and_payments/Xero.md)
- [Using Trade Types for Multi-Trade Roofing Businesses](/Zuper_for_Roofing/Trade.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.