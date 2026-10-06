---
title: "Avalara"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Avalara.md
fetched_at: 2026-10-06T13:30:25.673Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Avalara

## Overview

Avalara AvaTax is a cloud-based solution that automates transaction tax calculations and tax filing. It provides real-time tax calculations using tax content from over 12,000 U.S. taxing jurisdictions and 200+ countries, ensuring compliance with current tax rules. By integrating AvaTax with Zuper, businesses can eliminate manual tax calculations, automatically retrieve accurate tax rates, and apply exemption rules for transactions.

## Prerequisites

* **Active Account**: An active Avalara AvaTax account is required.
* **Geographic Restriction**: Avalara integration is available only for organizations in the U.S.

## Installing AvaTax in Zuper

To enable the AvaTax integration, contact Zuper’s support team at [**support@zuper.co**](mailto:support@zuper.co) for initial configuration. Once configured, follow these steps:

1. Go to **Settings** > **Configuration Settings** > **Quotes and Invoices** > **Taxes**.
2. Click **Use Avalara** on the Taxes configuration page.
3. **Enter AvaTax Credentials**:
   * **Account Number**: Provided during AvaTax account activation.
   * **License Key**: Provided during AvaTax account activation.
   * **Company Code/ID**: Your company identifier in the AvaTax Admin Console.
   * **Environment**: Select either "Sandbox" or "Production."

     <Note>
       **Note**: Zuper’s sandbox environment can only connect to Avalara’s Sandbox account.
     </Note>
   * **Commit Documents**: Enable to submit tax documents to AvaTax for record-keeping. If disabled, sales tax is retrieved but not recorded in AvaTax for compliance reporting.
4. Click **Continue** to proceed further.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava4.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=5656e630a8a48bc9e093b8c3e0f24991" alt="Ava4 Pn" width="1397" height="588" data-path="images/ava4.png" />

5. In the **Avalara Connection** dialog box, select the exact address using the **Pick from Map** button.

<Note>
  **Note**: The address, country, and AvaTax credentials will be shared with Avalara during setup.
</Note>

6. Click the “**Submit**” button to complete the settings. 

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava2.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=dcace9a7e24a717dd0fc2ebdebe53edf" alt="Ava2 Pn" width="1260" height="685" data-path="images/ava2.png" />

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava6.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=b5a95e803bd610cecebecb1f65fe6cef" alt="Ava6 Pn" width="1348" height="592" data-path="images/ava6.png" />

## Configuring Organizations, Customers, and Properties

To ensure accurate tax calculations, configure the following modules with valid addresses and tax exemption details:

### Organizations

1. Navigate to **Organizations** > **+ New Organization**.
2. Enter customer details for the organization.
3. Add valid **service** and **billing addresses** using the address picker to ensure accurate geolocation data for Avalara.
4. For tax-exempt organizations:
   * Mark as **Tax-Exempt**.
   * Select the appropriate **Entity Code** (e.g., for religious or charitable organizations) or provide an **Exemption Number** issued by the government.
5. Click **Save**.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava14.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=79ffad9e1e275dcd57566b6f47c88b65" alt="Ava14 Pn" width="1920" height="890" data-path="images/ava14.png" />

### Customers

1. Navigate to **Customers** > **+ New Customer**.
2. Enter customer details.
3. Add valid **service** and **billing addresses** using the address picker.
4. For tax-exempt customers:
   * Mark as **Tax-Exempt**.
   * Select the appropriate **Entity Code** or provide an **Exemption Number**.
5. Click **Save**.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava13.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=219d50fd774465f5c12ba0b6bf708491" alt="Ava13 Pn" width="1339" height="649" data-path="images/ava13.png" />

### Properties

1. Navigate to **Properties** > **+ New Property**.
2. Enter property details.
3. Add valid **service** and **billing addresses** using the address picker.
4. For tax-exempt properties:
   * Mark as **Tax-Exempt**.
   * Select the appropriate **Entity Code** or provide an **Exemption Number**.
5. Click **Save**.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava12.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=d85743fa2aec819d1bbf68ed3496c200" alt="Ava12 Pn" width="1920" height="890" data-path="images/ava12.png" />

<Note>
  **Notes**:

  * Taxes are calculated based on the property’s address if the organization, customer, and property are taxable.
  * Accurate geolocation data from the address picker is critical for Avalara to fetch the correct tax details.
</Note>

## Configuring Parts and Services

To apply the correct tax codes for items:

1. Navigate to **Parts and Services** from the left menu.
2. Select a product to open its details.
3. Click **More Actions** > **Edit Parts/Services**.
4. Enter the applicable **AvaTax System Tax Code** in the **Tax Code** field.
   * **Note**: View available tax codes at [taxcode.avatax.avalara.com](https://taxcode.avatax.avalara.com/).
5. Click **Save**.
6. **Tax Calculation**: Avalara combines the tax code and the customer’s address to determine taxability (exempt, partially taxable, or fully taxable).the submission of
7. **Optional**: Add or edit tax codes for items directly in the **Tax Code** field when creating a transaction.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava11.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=5fb50b744bf2680e7ad235d70b86a609" alt="Ava11 Pn" width="1078" height="524" data-path="images/ava11.png" />

## Managing Transactions (Quotes and Invoices)

When creating quotes or invoices, AvaTax automates tax calculations:

1. Navigate to **Quotes** > **+ New Quote** or **Invoices** > **+ New Invoice**.
2. Fill in the required details.
3. Add discounts or fees via:
   * **Settings** > **Configuration Settings** > **Parts and Services** > **Discounts and Fees**, or
   * Directly on the parts and services in the transaction.
4. Save the transaction as a draft to trigger AvaTax to:
   * Identify tax applicability for parts and services in the customer’s geographic area.
   * Assess the customer’s taxability.
   * Retrieve accurate tax rates based on local governing authorities.
5. **Note**: Taxes are applied based on the billing or service address configured in **Organization Settings** > **Misc Settings** > **Tax Settings**.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava11.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=5fb50b744bf2680e7ad235d70b86a609" alt="Ava11 Pn" width="1078" height="524" data-path="images/ava11.png" />

6. **Discounts**:
   * Transaction-level discounts are applied proportionately to all items.
   * Line-item discounts are applied only to specific items.
7. **Errors**: Any errors returned by Avalara will be displayed on the transaction details page.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava16.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=b8e86043230afe2171144a3edeb8f9ed" alt="Ava16 Pn" width="1051" height="443" data-path="images/ava16.png" />

## Disabling AvaTax Integration

To disable the AvaTax integration:

1. Navigate to **Settings** > **Configuration Settings** > **Quotes and Invoices** > **Taxes**.
2. Select the **Deactivate** option.
3. Confirm the deactivation to disable the integration.

<img src="https://mintcdn.com/zuperinc/Jo5PvMcHbbWJwY9H/images/ava17.png?fit=max&auto=format&n=Jo5PvMcHbbWJwY9H&q=85&s=e87ccbd64a6b2b2f7b7f0d58ae9d3781" alt="Ava17 Pn" width="4284" height="1000" data-path="images/ava17.png" />

Integrating Avalara AvaTax with Zuper enables automated, accurate, and compliant tax calculations, reducing manual effort and ensuring seamless tax management.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.