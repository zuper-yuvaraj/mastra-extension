---
title: "Accessing sync history"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/QBO_Sync_History.md
fetched_at: 2026-10-06T13:30:24.965Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Accessing sync history

Customers who use the QuickBooks integration to send invoice and quote data from Zuper to QuickBooks sometimes encounter errors. The Sync history feature allows you to troubleshoot these issues.

To help troubleshoot Zuper-QuickBooks Online sync issues, Zuper provides a sync history log that tracks data transfers between the two systems. This allows you to determine the root cause of errors, resolve them, and resync for smooth integration.

## Sync History

1. Select the “**Settings**” module from the left navigation menu. Under the "**Other Settings**," select the "**Sync Activity**."

<img src="https://mintcdn.com/zuperinc/1ybcKHjP3e199b2V/Integrations/Accounting_and_payments/QBOS1.png?fit=max&auto=format&n=1ybcKHjP3e199b2V&q=85&s=77a004ddddefe05b8aad993d2e6f34a2" alt="" width="1907" height="867" data-path="Integrations/Accounting_and_payments/QBOS1.png" />

2. The "Sync History" list page appears.

2.1. Sync UID - The unique ID identifying the sync between Zuper and QuickBooks.

2.2. Module Name - The name of the module where the sync happened.

2.3. Record ID/Name - The exact module record ID or Name with the hyperlink.

2.4. Application Name - The name of the integrated application.

2.5. Type of Sync - The sync type of the integration which can be the actions such as Create, Update, and Delete.

2.6. Status - The sync current status is shown - Started, Success, or Error status is displayed.

<img src="https://mintcdn.com/zuperinc/RiNBQ-y5E4J7v_BL/images/QBO11.png?fit=max&auto=format&n=RiNBQ-y5E4J7v_BL&q=85&s=6e88a87d10ee15fed368c8e9e856af11" alt="QBO11 Pn" width="1920" height="827" data-path="images/QBO11.png" />

3. Click a record id/name to view details.

You can view the current sync status of the QuickBooks integration along with the destination record ID.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO12.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=a077692aeb8fd855c247774f9b3e0a22" alt="QBO12 Pn" width="1920" height="827" data-path="images/QBO12.png" />

4. Click the clock <Icon icon="timer" /> icon to view the Sync History.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO13.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=ed24e403071d39630c7bb48abb4068a2" alt="QBO13 Pn" width="1920" height="827" data-path="images/QBO13.png" />

5. A dialog box will appear to display the list of recent syncs for the record.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO14.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=ead0175ff60dce803fcc9f1d25f9549b" alt="QBO14 Pn" width="1920" height="827" data-path="images/QBO14.png" />

## How to Retry Sync?

1. Whenever an error occurs during the sync, an alert will appear on the Invoice / Quote's details page.

Take corrective actions and click the "**Retry Sync**" to reysnc the record.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO15.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=e8c13854161e500f90591b5b02612e74" alt="QBO15 Pn" width="1920" height="827" data-path="images/QBO15.png" />

2. The sync will happen and it will be completed in few seconds.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO16.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=505131f705e6e88a9e62c41c18ad6b7d" alt="QBO16 Pn" width="1920" height="827" data-path="images/QBO16.png" />

3. The sync is successfully done.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO17.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=3e7e87052eabc0fe3d490285ebc30411" alt="QBO17 Pn" width="1920" height="827" data-path="images/QBO17.png" />

4. If you wish to acknowledge and dismiss the error, click the "**Acknowledge**" button.

<img src="https://mintcdn.com/zuperinc/RiNBQ-y5E4J7v_BL/images/QB018.png?fit=max&auto=format&n=RiNBQ-y5E4J7v_BL&q=85&s=c1354772b2ff6f47f40d489e5756ed2d" alt="QB018 Pn" width="1920" height="827" data-path="images/QB018.png" />

## How To Resolve Errors?

1. When the error alert appears, click the "**Learn How to Fix**" button. You will be redirected to the relevant section of this article, which contains information on resolving errors.

We created this feature to provide visibility into sync errors for our customer to identify issues, allowing for corrective actions and manual resync when necessary.

<img src="https://mintcdn.com/zuperinc/lAA24uv2gKvhT6QX/images/QBO18.png?fit=max&auto=format&n=lAA24uv2gKvhT6QX&q=85&s=f52cf3d88381b48f840805890fd993f0" alt="QBO18 Pn" width="1920" height="827" data-path="images/QBO18.png" />


## Related topics

- [Wisetack](/Integrations/Accounting_and_payments/Zuper_Wisetack.md)
- [HubSpot SalesHub & Service Hub](/Integrations/CRM/Zuper_HubSpot_Integration.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.