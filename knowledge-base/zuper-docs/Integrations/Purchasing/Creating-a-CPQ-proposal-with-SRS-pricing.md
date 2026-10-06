---
title: "Using SRS Pricing on Your Proposals"
source: https://docs.zuper.co/Integrations/Purchasing/Creating%20a%20CPQ%20proposal%20with%20SRS%20pricing.md
fetched_at: 2026-10-06T13:30:36.237Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Using SRS Pricing on Your Proposals

<Frame>
  **Navigation**: *Jobs → Job record → More Actions → Create CPQ Proposal*
</Frame>

## Overview

A CPQ (Configure, Price, Quote) proposal lets you present multiple pricing options in a single document — for example, a Basic package and an Intermediate package side by side. The customer reviews both, selects the one that suits them, and Zuper converts the accepted option into a quote, so the job moves forward with agreed costs already in place.

When your Parts and Services catalog is linked to SRS Distribution, Zuper takes this a step further by populating every line item with live branch pricing automatically. The numbers your customer sees reflect what your branch charges today, without any manual price entry.

This article covers how to create, review, and send a CPQ proposal with SRS pricing from a job record.

***

## Before you begin

Two things must be in place before you create a CPQ proposal with SRS pricing:

* Your SRS Distribution integration must be installed and at least one branch must be active. See [SRS Distribution integration — setup and branch management](/integrations/purchasing/srs-distribution-setup).
* The parts and products you plan to include must be linked to your SRS Distribution catalog. See [Linking SRS products to your Parts and Services catalog](/integrations/purchasing/srs-catalog-linking).

The job record must also exist in Zuper before you can create a proposal from it.

***

<iframe src="https://player.vimeo.com/video/1201735014?badge=0&autopause=0&player_id=0&app_id=58479" title="CPQ with Supplier Pricing" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## Create a CPQ proposal from a job

1. Go to **Jobs** from the left navigation menu.
2. Open the job record you want to create a proposal for.
3. Select **More Actions** at the top right of the job record.
4. Select **Create CPQ Proposal**.

A dialog appears confirming that Zuper is generating your proposal in the background using the SRS branch pricing linked to your catalog.

<Note>
  Select **View Proposal** in the dialog to open the proposal while it is still generating, or wait for the **New CPQ Proposal Created** notification to appear at the top right of the screen before you open it.
</Note>

***

## Review and edit the proposal

The proposal opens on the **Edit Proposal** screen. Before you add line items, review the following fields to confirm the proposal is set up correctly.

### Confirm proposal details

The top of the screen shows three areas to review before adding line items:

* **Association(s)** — confirms the job and customer linked to this proposal. Verify these are correct before proceeding.
* **Address** — the service address pulled automatically from the job record.
* **Proposal Details** — expiry date, proposal template, and other fields. Update the expiry date if the default does not match your quoting window.

### Confirm the branch and pricelist

At the top right of the **Options** section, confirm the connected SRS branch shown. This is the branch whose pricing Zuper will use for all line items in this proposal. If you need to use a different branch, update your preferred branch in **Supplier Settings** before adding line items.

## SRS pricing on mobile

If you are working from the Zuper mobile app, you can access SRS branch pricing for your quotes and proposals. However, the way Zuper determines the branch price differs depending on where the quote was created.

<Note>
  For quotes created in the Zuper mobile app, you cannot select an SRS branch directly. Zuper uses the preferred branch set in your supplier settings to derive branch pricing. For quotes created on the web, pricing is derived from the supplier assigned to the quote.
</Note>

## Add line items to each option

A CPQ proposal contains one or more option cards — for example, **Basic** and **Intermediate**. Each option is a separate pricing package. You add line items to each option independently.

1. Scroll to an option card in the **Options** section.
2. Select **+ Add** inside the option card to add a part or service from your catalog.
3. Search for and select the item. Zuper pulls the unit cost from the SRS branch pricing linked to that product.
4. If the product has multiple SRS options — for example, different colors or sizes — select the correct option from the dropdown next to the line item.
5. Enter a markup amount if applicable.
6. Repeat steps 2–5 for each line item in that option.
7. Repeat the process for every other option in the proposal.

<Note>
  For items linked to your SRS catalog, the unit cost reflects SRS branch pricing at the time the proposal is created. If no SRS catalog mapping exists for an item, Zuper uses the master cost set in your Parts and Services catalog instead.
</Note>

***

## Save and send the proposal

Once you have finished adding line items to all options, you have two choices:

* Select **Save and Send** at the top right to save the proposal and send it to the customer immediately.
* Select **Save as Draft** to save without sending. You can open the proposal later from **Accounting → Quotes** and send it from the proposal detail page.

***

## What happens after the customer responds

When the customer accepts the proposal, Zuper converts the accepted option into a quote. The unit cost for each line item is determined by whether the item has an SRS catalog mapping:

* Items linked to your SRS catalog use the unit cost from your SRS branch catalog at the time the proposal was created.
* Items without a catalog in the selected SRS branch will use the Master Cost from Product Catalog.

This means the two types of items can coexist in the same quote without any manual adjustment.

<Note>
  Unit costs on the converted quote reflect SRS branch pricing at proposal creation time, not at quote conversion time. If branch prices have changed since you created the proposal, the converted quote will show the original proposal prices.
</Note>

## How pricing stays current

Zuper updates pricing for all SRS-connected parts and products automatically, so you do not need to maintain prices manually.

* **Daily update:** Every day at midnight Central Standard Time, Zuper refreshes the unit cost for each product option and UOM across all your active SRS supplier branches.
* **On-use update:** When you add an SRS-connected part to an estimate or material order, Zuper fetches the latest price from the associated branch at that moment.

## FAQs

<AccordionGroup>
  <Accordion title="Can I create a CPQ proposal without SRS Distribution set up?">
    Yes, but line items will not automatically populate with branch pricing. You will need to enter unit costs manually. To use live SRS pricing, install the SRS Distribution integration and link your products to the catalog before creating the proposal.
  </Accordion>

  <Accordion title="What happens if I add a product that is not linked to my SRS catalog?">
    Zuper uses the master cost from your Parts and Services catalog instead. Both linked and unlinked items can coexist in the same proposal without any manual adjustment.
  </Accordion>

  <Accordion title="Can I change the SRS branch after I start adding line items?">
    Yes, the purchase cost will update to the branch's pricing for those products linked to the newly selected branch. For others, the pricing will be pulled from the product master. 
  </Accordion>

  <Accordion title="Can I save a proposal without sending it to the customer?">
    Yes. Select **Save as Draft** to save without sending. You can open the proposal later from **Accounting → Quotes** and send it from the proposal detail page.
  </Accordion>

  <Accordion title="How does SRS pricing work when I create a proposal from the mobile app?">
    On mobile, you cannot select an SRS branch directly. Zuper uses the preferred branch set in your supplier settings to derive branch pricing. On the web, pricing is derived from the vendor assigned to the proposal.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Connect your SRS account](/Integrations/Purchasing/SRS-setup)
* [Setup your catalog with SRS products](/Integrations/Purchasing/Link%20Catalog%20Products%20to%20SRS)
* [Placing a material order with SRS](/Integrations/Purchasing/Creating%20a%20Purchase%20Order%20from%20a%20Quote%20with%20SRS%20Items)
* [Difference between proposals and quotes](/Accounting/Difference_Between_Proposals_and_Quotes)


## Related topics

- [Connect Your SRS Account](/Integrations/Purchasing/SRS-setup.md)
- [Placing Material Order to SRS](/Integrations/Purchasing/Creating a Purchase Order from a Quote with SRS Items.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.