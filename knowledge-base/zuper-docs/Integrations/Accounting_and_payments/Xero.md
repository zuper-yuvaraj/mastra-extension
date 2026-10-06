---
title: "Xero"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Xero.md
fetched_at: 2026-10-06T13:30:29.407Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Xero

**Xero** is a cloud-based accounting software platform designed to help businesses manage invoicing, bank reconciliation, bookkeeping, and reporting.

The **Zuper–Xero Integration** is a **uni-directional** connection that pushes **estimates and invoices** from Zuper to Xero—streamlining financial operations between your service and accounting teams.

The following sections explain how to:

A. Connect Xero with Zuper\
B. Zuper–Xero Integration Works\
C. Uninstall Xero from Zuper

### **Pre-requisites**

Before you begin, ensure you have the following:

* **Zuper API Key**
* **Xero OAuth Access**

> When you click **Install** in the App Store, a permission screen will appear to authorize your Xero account. This process is known as **OAuth**.

### A. How to Connect Xero with Zuper

1. **Log in** to your Zuper account.
2. Click your **Profile Picture** (top-right corner) → select **App Store**.

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

3. Under **Browse by Category**, select **Accounting and Payments**, and choose **Xero**.

<img src="https://mintcdn.com/zuperinc/ouvATM1A8byb4RK2/images/Xero.png?fit=max&auto=format&n=ouvATM1A8byb4RK2&q=85&s=f88b8a901631e413bd5a7e5b679e6b24" alt="Xero Pn" width="1875" height="782" data-path="images/Xero.png" />

4. Click **Install Xero**.

<img src="https://mintcdn.com/zuperinc/ouvATM1A8byb4RK2/images/Xero1.png?fit=max&auto=format&n=ouvATM1A8byb4RK2&q=85&s=239c3c775cfc7adf6eac0f3ec533f45f" alt="Xero1 Pn" width="1867" height="746" data-path="images/Xero1.png" />

<Note>
  Note: Keep both the Zuper and Xero tabs open for a smooth setup process.
</Note>

5. A pop-up will appear. Review the data access permissions and click **Allow Access**.

<img src="https://mintcdn.com/zuperinc/ouvATM1A8byb4RK2/images/Xero2.png?fit=max&auto=format&n=ouvATM1A8byb4RK2&q=85&s=8888fe86fe8f74cd795d070bdc2d6575" alt="Xero2 Pn" width="1920" height="929" data-path="images/Xero2.png" />

6. Update **Xero Settings** by configuring the following fields:

| **Field** | **Description** |
| :-: | :-: |
| **Zuper API Key (Mandatory)** | Enter your Zuper API key. [Learn how to generate it.](#) |
| **Tenant Name (Mandatory)** | Enter the instance name of your Xero account (visible in the top-left corner). |
| **Estimate Sync (Mandatory)** | Select **Yes** or **No** to push quotations from Zuper to Xero. |
| **Invoice Sync (Mandatory)** | Select **Yes** or **No** to push invoices from Zuper to Xero. |
| **Use Zuper Estimate Number (Mandatory)** | Select **Yes** or **No** to use Zuper’s prefix quote number in Xero. |
| **Use Zuper Invoice Number (Mandatory)** | Select **Yes** or **No** to use Zuper’s prefix invoice number in Xero. |
| **Delete Cancelled Invoice/Estimate (Mandatory)** | Select **Yes** or **No** to automatically delete canceled invoices or quotes in Xero. |
| **Sync Tax Master (Mandatory)** | Select **Yes** or **No** to sync tax master data from Zuper to Xero. |
| **Line-Item Account Code (Mandatory)** | Enter the account code from Xero’s **Chart of Accounts** for product syncing. |
| **Payment Account Code (Mandatory)** | Enter the account code from Xero’s **Chart of Accounts** for payment syncing. |

<Note>
  Note: If the same account code is used for both product and payment, ensure the Enable Payments on this account checkbox is selected in Xero.
</Note>

<img src="https://mintcdn.com/zuperinc/NrlK0XNpebh7MCuv/images/xero3.png?fit=max&auto=format&n=NrlK0XNpebh7MCuv&q=85&s=159e01746b32535c444b049d715418aa" alt="Xero3 Pn" width="1920" height="1209" data-path="images/xero3.png" />

7. Click **Update** to complete the integration setup.

<Info>
  Important: Use a dedicated account with a valid Zuper API Key to ensure smooth synchronization between Zuper and Xero.
</Info>

### B. How the Zuper–Xero Integration Works

Once connected, Zuper automatically pushes data from your **Estimates** and **Invoices** modules to Xero, based on your configuration.

#### 1. Estimate Sync

* When a **Quotation** is created in Zuper, it automatically syncs to Xero.
* Any changes or deletions in Zuper will be reflected in Xero based on integration settings.

**Example:**

* **Zuper:** New quotation created
* **Xero:** Quote reflected under the same customer account

#### 2. Invoice Sync (Partial Payment)

* A partially paid invoice in Zuper will appear in Xero as **Awaiting Payment**.

**Example:**

* **Zuper:** Invoice status = *Partially Paid*
* **Xero:** Invoice status = *Awaiting Payment*

<img src="https://mintcdn.com/zuperinc/NrlK0XNpebh7MCuv/images/xero4.png?fit=max&auto=format&n=NrlK0XNpebh7MCuv&q=85&s=beae01200918e70573ba336e477a3d3c" alt="Xero4 Pn" width="1920" height="1060" data-path="images/xero4.png" />

#### 3. Invoice Sync (Full Payment)

* A fully paid invoice in Zuper will appear in Xero as **Paid**.

**Example:**

* **Zuper:** Invoice status = *Paid*
* **Xero:** Invoice status = *Paid*

<img src="https://mintcdn.com/zuperinc/NrlK0XNpebh7MCuv/images/xero5.png?fit=max&auto=format&n=NrlK0XNpebh7MCuv&q=85&s=c883dd99f7366b8b10e9c7822736a1ce" alt="Xero5 Pn" width="1920" height="1076" data-path="images/xero5.png" />

#### 4. Cancelled Quotations

* When a quotation is cancelled in Zuper, it will automatically appear as **Deleted** in Xero.

**Example:**

* **Zuper:** Quote status = *Cancelled*
* **Xero:** Quote status = *Deleted*

<img src="https://mintcdn.com/zuperinc/NrlK0XNpebh7MCuv/images/xero6.png?fit=max&auto=format&n=NrlK0XNpebh7MCuv&q=85&s=28efe06623e694d8cde96ef1aa99d71c" alt="Xero6 Pn" width="1920" height="872" data-path="images/xero6.png" />

#### 5. Declined Quotations

* Declined quotations in Zuper will reflect as **Declined** in Xero, maintaining consistency across both systems.

<img src="https://mintcdn.com/zuperinc/NrlK0XNpebh7MCuv/images/xero8.png?fit=max&auto=format&n=NrlK0XNpebh7MCuv&q=85&s=9de811c18bd9fe2e1a35d8ce44bfeedd" alt="Xero8 Pn" width="1920" height="872" data-path="images/xero8.png" />

#### 6. Status Mapping Between Zuper and Xero

Field Equivalent Table- Quotation

| **Zuper Status** | **Xero Status** |
| :-: | :-: |
| Draft | Draft |
| Sent | Sent |
| Accepted | Approved |
| Declined | Declined |
| Converted | Converted |

Field Equivalent Table- Invoice

| **Zuper Status** | **Xero Status** |
| :-: | :-: |
| Draft | Draft |
| Sent | Awaiting Approval |
| Partially Paid | Awaiting Payment |
| Paid | Paid |

This mapping ensures real-time data consistency between both platforms.

### C. How to Uninstall Xero from Zuper

1. Log in to your **Zuper account**. Click your **Profile Picture** (top-right corner) → select **App Store**.

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

2. Under **Browse by Category**, select **Accounting and Payments**, then choose **Xero**. Click **Uninstall**.

<img src="https://mintcdn.com/zuperinc/yt0yR_pRp2COG3b-/images/Xero232.avif?fit=max&auto=format&n=yt0yR_pRp2COG3b-&q=85&s=d77b301db76c7e0731ff69eb34a2e27d" alt="Xero232 Avi" width="1875" height="782" data-path="images/Xero232.avif" />

3. The Xero integration will be successfully uninstalled from your account.

<img src="https://mintcdn.com/zuperinc/M9OOoxBCNQuqTWhp/images/xero33.png?fit=max&auto=format&n=M9OOoxBCNQuqTWhp&q=85&s=0671aa97351ad3e53cf23080842ff64e" alt="Xero33 Pn" width="1920" height="986" data-path="images/xero33.png" />

The **Zuper–Xero Integration** enables seamless data flow between your field service operations and accounting platform by:

* Automatically syncing estimates and invoices from Zuper to Xero.
* Maintaining real-time payment status updates.
* Reducing manual data entry and financial errors.

This integration simplifies your financial management workflow, allowing your back-office team to work more efficiently within Zuper.

## Frequently Asked Questions

<AccordionGroup>
  <Accordion title="Does the Xero integration automatically map product descriptions to product names or SKUs in Zuper's Quote/Invoice screen?">
    No. Mapping product descriptions to product names or SKUs automatically via Xero is not supported. The integration does not perform this mapping, and descriptions will not auto-populate based on SKU changes made in the accounting system.
  </Accordion>

  <Accordion title="What does the integration sync, and in which direction?">
    The Xero integration pushes Zuper records (such as invoices and customer data) to the accounting system. This is a **one-way sync** for most record types. Changes made in Xero do not automatically reflect back into Zuper's Parts & Services catalog or line item descriptions.
  </Accordion>

  <Accordion title="If I update a product SKU or name in Xero, will it update in Zuper automatically?">
    No. SKU or product name changes made in Xero are not pushed back into Zuper. You will need to manually update the relevant items in Zuper's **Parts & Services** master list, or contact your onboarding team or support team for bulk update assistance.
  </Accordion>

  <Accordion title="Is the Description field on a Quote or Invoice line item editable in Zuper?">
    Yes. The **Description field** on each line item in the Quote/Invoice screen remains fully editable within Zuper at the transaction level. The integration sync does not overwrite this field. You can manually update the description for each line item as needed directly on the quote or invoice.
  </Accordion>

  <Accordion title="What should I do if I need to update descriptions or SKUs across many products at once?">
    For bulk updates to product names, SKUs, or descriptions in Zuper, contact [Zuper Support](mailto:support@zuper.co) or reach out to your onboarding team for assistance with a bulk import or catalog update.
  </Accordion>

  <Accordion title="Why did one invoice fail to sync to Xero while others synced successfully?">
    When a single invoice does not reach Xero but others created at the same time do, the cause is usually the **linked customer record** rather than the invoice itself. Xero requires certain contact fields to be populated before it will accept the associated invoice.

    Check the customer record in Zuper under **Customers → \[Customer Name] → Edit** and confirm the following fields are populated:

    | Field | Requirement |
    | :- | :- |
    | \[FIELD LABEL — PENDING H3] | \[PENDING H1 CONFIRMATION] |
    | Email ID | \[PENDING H4 — precedence vs. above] |

    After updating the customer record, reinitiate the sync for the affected invoice. If the invoice still does not appear in Xero, reach out to [Zuper Support](mailto:support@zuper.co) with the invoice number and the customer record ID.
  </Accordion>
</AccordionGroup>


## Related topics

- [Calculating Job Profitability for Time and Material Jobs](/Job_Costing/Time_and_Material.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.