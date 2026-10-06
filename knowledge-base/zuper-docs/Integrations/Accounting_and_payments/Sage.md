---
title: "Sage Intacct"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Sage.md
fetched_at: 2026-10-06T13:30:27.903Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Sage Intacct

The bi-directional integration between **Zuper** and **Sage Intacct** allows seamless synchronization of data between the two systems.

You can transfer **invoices and customer information** from Zuper to Sage Intacct and import **inventory and payment details** from Sage Intacct to Zuper.

This integration enhances accuracy, reduces manual effort, and ensures your accounting and field operations stay in sync.

The following sections explain how to:\
A. Connect Sage Intacct with Zuper\
B. Understand how the integration works\
C. Uninstall Sage Intacct from Zuper

### **A. How to Connect Sage Intacct with Zuper**

1. **Open Zuper App Store**
   * Log in to your Zuper account.
   * Click your **Profile Picture** in the top-right corner and select **App Store**.

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

2. **Select the Sage Intacct App**
   * Under **Browse by Category**, choose **Accounting and Payments**.
   * Locate **Sage Intacct**.

<img src="https://mintcdn.com/zuperinc/2q-abhmOZ-jDG499/images/Sage.png?fit=max&auto=format&n=2q-abhmOZ-jDG499&q=85&s=9767bbbddce3a049b682516c690ed4fc" alt="Sage Pn" width="1875" height="782" data-path="images/Sage.png" />

* Click **Configure Settings**.

<img src="https://mintcdn.com/zuperinc/2q-abhmOZ-jDG499/images/Sage1.png?fit=max&auto=format&n=2q-abhmOZ-jDG499&q=85&s=f011c5df06fc1957ed0a9f1c9c2fdddb" alt="Sage1 Pn" width="1869" height="741" data-path="images/Sage1.png" />

<Note>
  Note: Keep both the Zuper and Sage Intacct tabs open during setup for quick switching between

  systems.
</Note>

3. **Update Zuper Settings**\
   Configure the following fields under Sage Intacct settings:

   | Field | Description |
   | :-: | :-: |
   | **Sage Sender ID** *(Mandatory)* | Enter the Sender ID from Sage Intacct. |
   | **Sage Sender Password** *(Mandatory)* | Enter the corresponding sender password. |
   | **Sage Company ID** *(Mandatory)* | Enter the Company ID from Sage’s login page. |
   | **Sage User ID** | Enter the User ID from Sage’s login page. |
   | **Sage User Password** *(Mandatory)* | Enter the user password. |
   | **Sync Customers** | Select **Yes** or **No** to sync customers from Zuper. |
   | **Sync Organizations** | Select **Yes** or **No** to sync organizations from Zuper. |
   | **Sync Products** | Select **Yes** or **No** to sync products from Sage. |
   | **Identify Customer By** | Choose **None**, **Name**, or **Email** to identify customers. |
   | **Invoice Custom Field for Location** | Enter the Invoice Custom Field from Sage’s Accounts Receivable module. |
   | **Default Payment Mode UID in Zuper** | Contact Zuper Support to obtain this UID. |
   | **Default Product Category UID in Zuper** | Contact Zuper Support to obtain this UID. |
   | **Zuper API Key** | Enter your Zuper API key. [Learn how to generate an API key.](#) |
   | **Sync Failure Emails** | Enter email addresses to receive sync failure notifications. |
4. Click **Update** to complete the connection between Zuper and Sage Intacct.

<img src="https://mintcdn.com/zuperinc/2q-abhmOZ-jDG499/images/Sage2.png?fit=max&auto=format&n=2q-abhmOZ-jDG499&q=85&s=f4959efcc75838e09f6eb52cb2b0301a" alt="Sage2 Pn" width="1791" height="838" data-path="images/Sage2.png" />

### **B. How the Zuper – Sage Intacct Integration Works**

Once connected, data synchronization between Zuper and Sage Intacct works in both directions — based on the configured modules.

#### **i. Zuper as a Source**

Data flows from Zuper to Sage Intacct.

* **Organizations → Customers**\
  Any new or updated organization in Zuper automatically syncs with the **Customers** module in Sage.\
  The synced record includes a **Sage Customer ID** visible in the organization’s details in Zuper.
* **Customers → Contacts**\
  Customer information from Zuper syncs with the **Contacts** module in Sage Intacct, keeping customer details consistent across both systems.
* **Invoices → Sales Invoices**\
  Invoice creation or updates in Zuper automatically sync with the **Sage Invoices** module in Sage.\
  You can view the **Sage Invoice ID** under the Zuper Invoice details.

#### **ii. Sage as a Source**

Data flows from Sage Intacct to Zuper.

* **Items → Products**\
  Any new or updated item in Sage Intacct syncs automatically with the **Products** module in Zuper.
* **Payments → Payments**\
  Payments recorded or updated in Sage Intacct sync seamlessly with the **Payments** module in Zuper.

<Note>
  Note: This two-way integration ensures that accounting and operational data remain synchronized, reducing manual entries and improving accuracy.
</Note>

### **C. How to Uninstall Sage Intacct from Zuper**

1. **Open Zuper App Store**
   * Log in to your Zuper account.
   * Click your **Profile Picture** → **App Store**.
2. **Locate the App**
   * Under **Browse by Category**, select **Accounting and Payments**.
   * Choose **Sage Intacct** from the list.
3. **Uninstall the App**
   * Click **Deactivate**.

<img src="https://mintcdn.com/zuperinc/2q-abhmOZ-jDG499/images/Sage3.png?fit=max&auto=format&n=2q-abhmOZ-jDG499&q=85&s=6641101946f7a3a1a0e978d60978914a" alt="Sage3 Pn" width="1791" height="838" data-path="images/Sage3.png" />

The Sage Intacct integration will be deactivated from your account.

The **Zuper–Sage Intacct Integration** provides a unified workflow between your field operations and financial system.\
By syncing customers, invoices, payments, and inventory in real time, this integration eliminates duplicate data entry, enhances visibility, and enables your back-office team to manage all accounting processes directly from Zuper.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.