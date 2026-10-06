---
title: "Connect Your SRS Account"
source: https://docs.zuper.co/Integrations/Purchasing/SRS-setup.md
fetched_at: 2026-10-06T13:30:36.057Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Connect Your SRS Account

<Info>
  This feature is currently in beta. To enable it for your account, contact your Account Manager or reach out to [support@zuper.co](mailto:support@zuper.co).
</Info>

<Frame>
  **Navigation**: *Settings → Parts and Services → Supplier Integrations → SRS Distribution*
</Frame>

The SRS Distribution integration connects Zuper directly to your SRS RoofHub account, so your team can order roofing materials without switching between systems. Once connected, Zuper pulls live branch pricing into every estimate and material order you create, refreshing prices automatically every day. When an order ships, delivery updates, proof of delivery, and the supplier invoice appear directly on the material order in Zuper — giving everyone on your team a single place to track materials from quote to delivery.

To get started, you install the app, verify your SRS account, and choose the branches you order from. Each branch connects to a job account, and you set one branch as your preferred branch for daily pricing updates. The sections below walk you through each step in order.

***

## Before you begin

Have the following ready before you install the integration. Gathering these in advance prevents interruptions during the setup steps:

* Your **SRS Customer Code** (also called your account number). You will find it in the account details section of any SRS invoice.
* A recent SRS invoice issued more than two days ago. You will need the **Invoice Number** and **Invoice Date** to verify your account.
* Alternatively, your **SRS Integration Key**. Go to **Integrations → Integration Key** in your RoofHub account to find it.
* Your **Zuper API Key**. Your Zuper administrator can provide this.

***

## Install the SRS Distribution app

1. From the **Settings**, under the **Parts and Services**, navigate to **Supplier Integrations**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/653CR7ubiJ25cH7e/images/supintegr1.png?fit=max&auto=format&n=653CR7ubiJ25cH7e&q=85&s=dbc64b47943c50a2d925ecdf86fc91e6" alt="Supintegr1" width="1918" height="770" data-path="images/supintegr1.png" />
</Frame>

2. On **SRS Distribution,** Click **Connect.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/653CR7ubiJ25cH7e/images/supintegr3.png?fit=max&auto=format&n=653CR7ubiJ25cH7e&q=85&s=fb4c250d1c1be9d11434e17dd886cb21" alt="Supintegr3" width="1918" height="774" data-path="images/supintegr3.png" />
</Frame>

3. On the app detail page, select **Install App**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/NL3nORL28ZYUlUzc/images/SRS2.png?fit=max&auto=format&n=NL3nORL28ZYUlUzc&q=85&s=c3daa2f2869e4cc426696e874dc504ef" alt="SRS2" width="1920" height="828" data-path="images/SRS2.png" />
</Frame>

The **Account Validation** screen opens. Continue to the next section to verify your account.

***

## Validate your SRS account

Zuper offers two ways to verify your account. Use whichever method you have credentials for.

### Method 1: Verify with invoice details

Use this method if you have a recent SRS invoice that is more than two days old.

1. In the **Customer Code** field, enter your SRS account number.
2. In the **Invoice Number** field, enter the invoice number from your SRS invoice.
3. In the **Invoice Date** field, enter the invoice date.
4. In the **Zuper API Key** field, enter your Zuper API key.
5. Select **Update**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/NL3nORL28ZYUlUzc/images/SRS4-1.png?fit=max&auto=format&n=NL3nORL28ZYUlUzc&q=85&s=f310655e8a6f1c92039830c7432d862e" alt="SRS4 1" width="1920" height="827" data-path="images/SRS4-1.png" />
</Frame>

Zuper verifies your credentials with SRS. When the connection succeeds, the status badge changes to **Connected**.

<Note>
  The invoice date must be more than two days in the past. A same-day or next-day invoice will cause validation to fail.
</Note>

### Method 2: Verify with an integration key

Use this method if you do not have a recent invoice available.

1. Select **Try Another Way** on the **Account Validation** screen.
2. In the **Customer Code** field, enter your SRS account number.
3. In the **Integration Key** field, enter the key from your RoofHub account. To find it, go to  **Integrations → Integration Key** in RoofHub.
4. In the **Zuper API Key** field, enter your Zuper API key.
5. Select **Update**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/NL3nORL28ZYUlUzc/images/SRS5.png?fit=max&auto=format&n=NL3nORL28ZYUlUzc&q=85&s=038b18af2572de901ce84236d260c3e9" alt="SRS5" width="1920" height="878" data-path="images/SRS5.png" />
</Frame>

When the connection succeeds, the status badge changes to **Connected**.

<Note>
  If validation fails, confirm that your **Customer Code** is correct and that your invoice details match your SRS account exactly. Select **Update** again after correcting your details. If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
</Note>

***

## Choose your branches

After your account is validated, Zuper loads the SRS branches linked to your account. You select the branches you order from and assign a job account to each one.

1. From the app detail page, select **Supplier Settings**. The branch setup screen opens.
2. On the **Choose Branches** step, review the list of SRS branches near your location. A map shows their positions alongside the list.
3. Select the checkbox next to each branch you want to use in Zuper.
4. For each selected branch, open the **Select Job Account** dropdown and select the job account to use for orders at that branch.
5. To set one branch as your preferred branch, select the star icon next to it. Zuper uses the preferred branch for daily pricing updates across your catalog.

<Note>
  You must assign a job account to every branch you select. Zuper uses this account when placing orders at that branch. You can change job accounts and update your preferred branch at any time from **Supplier Settings**.
</Note>

***

## Import product templates from SRS

Zuper imports your product catalog from the order templates you have already built in SRS RoofHub. Each template groups products you order regularly — for example, by manufacturer or shingle type. Importing from templates rather than the full SRS catalog keeps your Zuper product list focused on what you actually use.

1. On the **Import Template** step, review the list of templates available in your RoofHub account. Each row shows the **Template ID**, **Template Name**, **Description**, and number of products.
2. Select the checkbox next to each template you want to import.
3. Select **Finish Setup** to begin the import. Zuper imports the selected templates in the background. Each product becomes a part in your **Parts and Services** catalog. Pricing updates automatically every day at 6:30 AM UTC.

<Note>
  Each template can only be imported once. If you add new products to a template in RoofHub after importing, those additions will not sync automatically. To bring in new templates created in RoofHub after the initial setup, use the **Import Templates** tab in **Supplier Settings** at any time.
</Note>

<Note>
  If no templates appear, your RoofHub account does not have any order templates set up. Create templates of your frequently ordered products in RoofHub first, then return to Zuper to import them.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/0r4gsvtGVdAzPjqk/images/srstempl.png?fit=max&auto=format&n=0r4gsvtGVdAzPjqk&q=85&s=40c1e92cc6b4dca4e80042f577f1eed7" alt="Srstempl" width="1655" height="538" data-path="images/srstempl.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/F0kOJn5OlyUbOjIs/images/image-(204).png?fit=max&auto=format&n=F0kOJn5OlyUbOjIs&q=85&s=97dcc353f20435402adde6886ce2ea34" alt="Image (204)" width="1918" height="825" data-path="images/image-(204).png" />
</Frame>

# Manage your branches

After setup, you can view and manage all connected SRS branches from the Branches listing page.

<iframe src="https://player.vimeo.com/video/1201369764?title=0&byline=0&portrait=0" title="Supplier Branch Selection SRS" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

<Frame>
  **Navigation**: *Settings → Parts and Services Settings → Supplier Integrations → SRS Distribution*
</Frame>

The **Branches** listing page shows each branch name, address, assigned SRS job account, and status.

### Add a branch

1. Go to **Settings → Parts and Services Settings → Supplier Integrations → SRS Distribution**.
2. Select **+ Add Branch** at the top right.
3. Select the new branch from the list and assign a job account to it.
4. Select **Save**.

Branches you have already added appear pre-selected and cannot be removed from this screen.

### Edit a branch

1. On the **Branches** listing page, hover over the branch you want to update.
2. Select the pencil icon that appears on the right.
3. Update the job account details.
4. Select **Save**.

### Set a preferred branch

1. On the **Branches** listing page, locate the branch you want to set as your preferred branch.
2. Select the star icon next to it. A filled star indicates the preferred branch.

Zuper uses the preferred branch for daily catalog pricing updates.

<Note>
  Only one branch can be set as preferred at a time. Selecting a new preferred branch removes the designation from the previous one.
</Note>

### Deactivate a branch

1. On the **Branches** listing page, hover over the branch you want to deactivate.
2. Select the deactivate icon that appears on the right.
3. In the confirmation dialog, select **Deactivate** to confirm.

<Warning>
  Deactivated branches remain in your account and continue to receive pricing updates. However, they are not available for selection when creating estimates or material orders.
</Warning>

***

## Disconnect the SRS Distribution integration

If you need to remove the SRS integration from your Zuper account, you can uninstall it from the App Store.

1. Go to your profile icon → **App Store → Purchasing → SRS Distribution**.
2. Select **Uninstall App** on the left panel.
3. In the confirmation dialog, select **Uninstall App** to confirm.

<Warning>
  Uninstalling removes your account connection and branch configuration. Your existing parts and supplier records in Zuper are not deleted, but they may no longer receive SRS pricing updates.
</Warning>

***

## FAQs

<AccordionGroup>
  <Accordion title="What credentials do I need to connect SRS Distribution?">
    You need your SRS Customer Code and either a recent invoice (more than two days old) or your SRS RoofHub Integration Key. You also need your Zuper API key, which your Zuper administrator can provide.
  </Accordion>

  <Accordion title="Can I connect more than one SRS branch?">
    Yes. You can connect as many branches as your SRS account supports. Each branch requires a job account assignment before it can be used for orders.
  </Accordion>

  <Accordion title="What does the preferred branch do?">
    Zuper uses the preferred branch as a fallback when no branch is selected during pricing. The preferred vendor is also pre-filled in Quotes and Proposals.
  </Accordion>

  <Accordion title="What happens to a deactivated branch?">
    A deactivated branch remains in your account and continues to receive daily pricing updates. It is not available for selection when creating estimates or material orders. You can reactivate it at any time.
  </Accordion>

  <Accordion title="Will uninstalling the app delete my parts catalog?">
    No. Your existing parts and vendor records in Zuper are not deleted when you uninstall the app. However, those records will no longer receive SRS pricing updates.
  </Accordion>

  <Accordion title="My validation keeps failing. What should I check?">
    Confirm that your Customer Code matches your SRS account exactly and that the invoice you are using is more than two days old. If you are using an Integration Key, verify that you copied the key correctly from your RoofHub account. If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Setup your catalog with SRS products](/Integrations/Purchasing/Link%20Catalog%20Products%20to%20SRS)
* [Using SRS pricing on your proposals](/Integrations/Purchasing/Creating%20a%20CPQ%20proposal%20with%20SRS%20pricing)
* [Placing a material order with SRS](/Integrations/Purchasing/Creating%20a%20Purchase%20Order%20from%20a%20Quote%20with%20SRS%20Items)
* [Configuring purchasing settings](/Settings/Modules/Purchasing/Configure-PO)


## Related topics

- [Placing Material Order to SRS](/Integrations/Purchasing/Creating a Purchase Order from a Quote with SRS Items.md)
- [Connect a Supplier](/zuper-for-roofing/connect-a-supplier.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.