---
title: "Setup the integration"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Zuper_QuickBooks_Desktop.md
fetched_at: 2026-10-06T13:30:26.315Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup the integration

QuickBooks Desktop integration helps us push data from Zuper, such as Customers, Parts and services, Quotes, Invoices, and Payments, to QuickBooks Desktop.

The records pushed from Zuper will be reflected in the web connector. and if you have enabled auto sync, the records will be synced automatically; if not, you should update them manually.

## Install QuickBooks Desktop

1. Once logged in to your Zuper account, open a new tab in your browser. Click on your Profile Picture at the top right corner of the screen and select the "**App Store**."

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QBD1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=97ac899359b277162eb7f20a12048bc2" alt="" width="1903" height="855" data-path="Integrations/Accounting_and_payments/QBD1.png" />

2. Under the "**Browse by Category**," select the "**Private Apps**" option and choose "**QuickBooks Desktop**."

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD18.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=500e397b0a4314c841a1462f79aadb72" alt="QD18" width="1920" height="827" data-path="images/QD18.png" />

3. Click on the "**Connect to QuickBooks**" button.

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD22.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=3c90e956719a59af7291458674548672" alt="QD22" width="1920" height="827" data-path="images/QD22.png" />

4. Update Zuper Settings by configuring the following fields:

a. Zuper API Key (**Mandatory**) – Refer to the steps below to create the Zuper API. To create the Zuper API, refer to the below steps:

<Accordion title=" API Key Creation" defaultOpen="false">
  If you are trying to integrate Zuper with any external systems, you will need an API key to access the Zuper APIs. To generate API (Application Programming Interface) Key, please follow the below steps.

  1. Log in to Zuper with an admin account.
  2. Scroll down the menu bar on the left and select the "**Settings**" icon key.
  3. Under the "**General Settings**" category, select "**Account Settings.**"

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=a527a974f60fa2d2ab4576c7a6fc3cf7" alt="" width="1882" height="879" data-path="Integrations/API1.png" />

  4. On the account settings page, select **"API Keys."**

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API2.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=8bbd950683db330523b40ee4267114ae" alt="" width="1888" height="861" data-path="Integrations/API2.png" />

  5. Click on "**New API Key**" and enter the name of the API key in the pop-up windows.

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API3.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=f78ab7d03ebfd419b93654e064679930" alt="" width="1891" height="880" data-path="Integrations/API3.png" />

  6. Click on "**Create**" to generate the API key. (Once created, the API key can be viewed by clicking on the "**View API Key**" hyperlink.)

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API4.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=c16b227ad38b8432695bc0fcec75c789" alt="" width="1892" height="871" data-path="Integrations/API4.png" />

  5. To delete/deactivate an existing API, click on the "**Delete API Key**" (x) next to the respective API.

  <img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/API5.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=0530249aab942ef9652ddb90e7b49968" alt="" width="888" height="168" data-path="Integrations/API5.png" />

  <Note>
    Note: The API key generated will provide full permission & access to the user who

    created this key. Please ensure to store this key securely.
  </Note>
</Accordion>

<Note>
  **Note:** It is mandatory to enter the Zuper API Key for Integration to perform smoothly.
</Note>

b. QuickBooks Desktop Data File Location (**Mandatory**) – Enter the exact QuickBooks Desktop Data file location. The data file should be taken from QuickBooks. In QuickBooks Desktop, Press **Fn+F2** to get the data file location.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QD4.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=a47121accafdec8982ce1f07632b1c83" alt="" width="1039" height="865" data-path="images/QD4.jpg" />

c. QuickBooks Desktop Connector Username (**Mandatory**) - Enter the QuickBooks Desktop Connector Username.

d. QuickBooks Desktop Connector Password (**Mandatory**) - Enter the QuickBooks Desktop Connector Password.

e. Push Customers (**Mandatory**)- If you select the option "**Yes**," the customer will be pushed one way from Zuper to QuickBooks Desktop. If you choose "**Yes**," we will sync the creation from the master itself. If you choose "**No**," the customer will be created only while pushing an invoice, quote, or any other transaction.

f. Push Estimates (**Mandatory**)- If you select "**Yes**," estimates will be pushed one way from Zuper to QuickBooks Desktop. If you choose "**No**," Estimates items won't be pushed from Zuper to QuickBooks Desktop.

g. Push Services & Products (**Mandatory**)- If you select "**Yes**," services and products will be pushed one way from Zuper to QuickBooks Desktop. If you choose "**No**," services and products will be pushed when we push Invoice/Quote to the Quick Books Desktop.

h. Invoice Status to Trigger Push (**Mandatory**) - You must choose the invoice's status from the drop-down menu. Based on the invoice status selected here, the push will happen.

i. Estimate / Invoice ID (**Mandatory**) - If you select Zuper ID, Zuper Estimate / Invoice ID will appear on QuickBooks Desktop. If you select QuickBooks Desktop ID, whatever sequence you have in QuickBooks Desktop will be taken as an Invoice ID.

j. Identify the customer in Zuper-QuickBooks (**Mandatory**) - You must choose the applicable customer format displayed on QuickBooks Desktop.

k. Use QuickBooks as Tax Master (**Mandatory**) – Upon selecting "**Yes**," QuickBooks Desktop will be the primary source for tax-related information such as tax rates and codes. If "**No**" is selected, Zuper will be the primary source for tax.

l. Default QuickBooks Payment Account (**Mandatory**) - You must enter the default QuickBooks Payment chart of accounts for which the default account will be impacted.

m. Use Different Discount Accounts in QuickBooks (**Mandatory**)- If you select "**Yes**," the different discount accounts will be used in QuickBooks Desktop. The discount account is specified in the Discount Name. If you select "**No**," we will create a default discount account in QuickBooks Desktop. Select the "**Update**" button to connect QuickBooks Desktop with Zuper.

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD24.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=94e0c0436fb52c17bc32409c0d069c12" alt="QD24" width="1920" height="1873" data-path="images/QD24.png" />

## Link QuickBooks Desktop with Zuper

1. Once you have completed the configuration settings in Zuper, as shown above, click the "**Install QuickBooks Desktop**" button. Once you have done the configuration settings in Zuper.
2. Zuper provides the option to Download the QWC authentication file. Click "**Download QWC File**."

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD20.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=5b3b8160bb730ef33ab7d35ae330e220" alt="QD20" width="1920" height="827" data-path="images/QD20.png" />

3. Open QuickBooks web connector, click "**File**," and then "**Update Web Services**." You will see the following dialog box: Click "**Add an Application**."

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QD10.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=685fca1837206ca8c06edc517a25efd2" alt="" width="1089" height="728" data-path="images/QD10.jpg" />

4. You will then be asked to select whether you want to allow the application to read and modify this company file. Select "**Yes, always; allow access even if QuickBooks is not running**." Login as "**Admin** ." Click "**Continue**" to set up the web connector.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QD11.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=6b72582570aa1e08c674ab7f6d1dc7fb" alt="" width="873" height="864" data-path="images/QD11.jpg" />

5. Open Web Connector and click the checkbox next to Zuper Pro at the far left of your screen. Click the "**Auto-Run**" checkbox.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QD12.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=15ba3220f03c1f3b4266fa2ae91adb5b" alt="" width="934" height="576" data-path="images/QD12.jpg" />

6. Enter your Zuper Pro password and press "**Ok**." Then, it will ask if you want to save the password; select yes to save your web connector password.

When both progress bars reach 100%, we have successfully downloaded your data from QuickBooks Desktop. Next, we'll upload it to our servers and then put it into your account.

This process can take some time, depending on how much data you have. You must maintain a stable internet connection until this process is complete.

<img src="https://mintcdn.com/zuperinc/soDTkUPUm1xdb89y/images/QD13.jpg?fit=max&auto=format&n=soDTkUPUm1xdb89y&q=85&s=b71e132288f198d6117fa1e41d6119b2" alt="" width="1114" height="734" data-path="images/QD13.jpg" />

QuickBooks Desktop– Zuper integration is completed.

## Uninstall QuickBooks Desktop

1. Once logged in to your Zuper account, open a new tab in your browser. Click on your Profile Picture at the top right corner of the screen and select the "**App Store.**"

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QBD1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=97ac899359b277162eb7f20a12048bc2" alt="" width="1903" height="855" data-path="Integrations/Accounting_and_payments/QBD1.png" />

2. Under the "**Browse by Category**," select the "**Private Apps**" option and choose "**QuickBooks** **Desktop**."

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD2.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=d143b3c64eeb0d1f2d2afef4315b4d12" alt="QD2" width="1920" height="890" data-path="images/QD2.png" />

3. Click the "**Disconnect from QuickBooks**" button.

<img src="https://mintcdn.com/zuperinc/2nBtddD_mqEuB4QK/images/QD24.png?fit=max&auto=format&n=2nBtddD_mqEuB4QK&q=85&s=94e0c0436fb52c17bc32409c0d069c12" alt="QD24" width="1920" height="1873" data-path="images/QD24.png" />

3. QuickBooks Desktop App is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/H22NtqrjH2JNRVd3/images/QD23.png?fit=max&auto=format&n=H22NtqrjH2JNRVd3&q=85&s=408fdf0be266ba4cd49b493b43d9a277" alt="QD23" width="1919" height="653" data-path="images/QD23.png" />

Integrating QuickBooks Desktop with Zuper can enrich and enhance operations by ensuring seamless data transfer between your accounting software and field service management system.

## Frequently Asked Questions

<AccordionGroup>
  <Accordion title="Does the QuickBooks Desktop integration automatically map product descriptions to product names or SKUs in Zuper's Quote/Invoice screen?">
    No. Mapping product descriptions to product names or SKUs automatically via QuickBooks Desktop is not supported. The integration does not perform this mapping, and descriptions will not auto-populate based on SKU changes made in the accounting system.
  </Accordion>

  <Accordion title="What does the integration sync, and in which direction?">
    The QuickBooks Desktop integration pushes Zuper records (such as invoices and customer data) to the accounting system. This is a **one-way sync** for most record types. Changes made in QuickBooks Desktop do not automatically reflect back into Zuper's Parts & Services catalog or line item descriptions.
  </Accordion>

  <Accordion title="If I update a product SKU or name in QuickBooks Desktop, will it update in Zuper automatically?">
    No. SKU or product name changes made in QuickBooks Desktop are not pushed back into Zuper. You will need to manually update the relevant items in Zuper's **Parts & Services** master list, or contact your onboarding team or support team for bulk update assistance.
  </Accordion>

  <Accordion title="Is the Description field on a Quote or Invoice line item editable in Zuper?">
    Yes. The **Description field** on each line item in the Quote/Invoice screen remains fully editable within Zuper at the transaction level. The integration sync does not overwrite this field. You can manually update the description for each line item as needed directly on the quote or invoice.
  </Accordion>

  <Accordion title="What should I do if I need to update descriptions or SKUs across many products at once?">
    For bulk updates to product names, SKUs, or descriptions in Zuper, contact [Zuper Support](mailto:support@zuper.co) or reach out to your onboarding team for assistance with a bulk import or catalog update.
  </Accordion>

  <Accordion title="What does the integration sync, and in which direction? ">
    The Zuper–QBO integration pushes records from Zuper (customers, products, estimates, invoices, and payments) to QuickBooks Online. This is a one-way sync for most record types. Invoice payment status syncs bidirectionally. Invoices or estimates created in QBO do not sync back into Zuper — all records must originate in Zuper to appear in both systems.
  </Accordion>
</AccordionGroup>


## Related topics

- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)
- [Setup Your Catalog](/Integrations/Purchasing/Link Catalog Products to SRS.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.