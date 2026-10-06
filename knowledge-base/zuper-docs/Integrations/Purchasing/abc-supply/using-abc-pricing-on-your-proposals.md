---
title: "Using ABC Pricing on Your Proposals"
source: https://docs.zuper.co/Integrations/Purchasing/abc-supply/using-abc-pricing-on-your-proposals.md
fetched_at: 2026-10-06T13:30:37.854Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Using ABC Pricing on Your Proposals

## Overview

A CPQ (Configure, Price, Quote) proposal lets you present multiple pricing options in a single document, for example, a **Basic** package and an **Intermediate** package side by side. The customer reviews both, selects the one that suits them, and Zuper converts the accepted option into a quote.

When your **Parts and Services** catalog is linked to ABC Supply, Zuper takes this a step further by populating every line item with live branch pricing automatically. The numbers your customer sees reflect what your branch charges today, without any manual price entry.

The following sections show you how to create, review, and send a CPQ proposal with ABC Supply pricing from a job record.

## Before you begin

Two things must be in place before you create a CPQ proposal with ABC Supply pricing.

* Your ABC Supply integration must be installed, and at least one branch must be active. See [Connecting ABC Supply](#).
* The parts and products you plan to include must be linked to your ABC Supply catalog. See [Linking catalog products to ABC Supply](#).

The job record must also exist in Zuper before you can create a proposal from it.

## Create a CPQ proposal from a job

CPQ proposals in Zuper are generated in one of two ways: automatically when a job reaches a configured status, or manually from the job record.

When a job reaches the category and status configured in your CPQ template, Zuper automatically generates the proposal, and it appears in the **Proposals** panel on the job record, ready to review. Your admin sets the trigger in **Quote Settings**. See Setting up a CPQ proposal template for details. Open the proposal from the **Proposals** panel, and continue to **Review and edit the proposal** below.

### Create a proposal manually

If you need to create a proposal before the status trigger is reached, or if automatic generation is not configured, you can create one manually.

1. Go to **Jobs** from the left navigation menu.
2. Open the job record you want to create a proposal for.
3. Select **+** in the left panel of the job record.
4. Select **New Proposal** from the menu.
5. Choose the CPQ template for this job type in the template selector, and select **Choose Template**. The proposal opens on the **Edit Proposal** screen. Continue to **Review and edit the proposal** to complete it.

## Review and edit the proposal

The proposal opens on the **Edit Proposal** screen. Before you add line items, review the following fields to confirm the proposal is set up correctly.

### Confirm proposal details

The top of the screen shows three areas to review before you add line items.

* **Association(s)** — confirms the job and customer linked to this proposal. Verify these are correct before you proceed.
* **Address** — the service address pulled automatically from the job record.
* **Proposal Details** — expiry date, proposal template, and other fields. Update the expiry date if the default does not match your quoting window.

### Confirm the branch and pricelist

Confirm the connected ABC Supply branch shown at the top right of the **Options** section. This is the branch whose pricing Zuper uses for all line items in this proposal.

If you need to use a different branch, update your preferred branch in **Supplier Settings** before you add line items.

## ABC Supply pricing on mobile

If you are working from the Zuper mobile app, you can access ABC Supply branch pricing for your quotes and proposals, though the way Zuper determines the branch price differs depending on where you created the quote.

For quotes created in the Zuper mobile app, you cannot select an ABC Supply branch directly, so Zuper uses the preferred branch set in your **Supplier Settings** to derive branch pricing. For quotes created on the web, pricing is derived from the supplier assigned to the quote.

## Add line items to each option

A CPQ proposal contains one or more option cards, for example, **Basic** and **Intermediate**. Each option is a separate pricing package, and you add line items to each option independently.

1. Scroll to an option card in the **Options** section.
2. Select **+ Add** within the option card to add a part or service from your catalog.
3. Search for and select the item. Zuper pulls the unit cost from the ABC Supply branch pricing linked to that product.
4. If the product has multiple ABC Supply options, for example, different colors or sizes, select the correct option from the dropdown next to the line item.
5. Enter a markup amount if applicable.
6. Repeat steps 2–5 for each line item in that option.
7. Repeat the process for every other option in the proposal.

<Note>
  For items linked to your ABC Supply catalog, the unit cost reflects ABC Supply branch pricing at the time you create the proposal. If no ABC Supply catalog mapping exists for an item, Zuper uses the **Master Cost** set in your Parts and Services catalog instead.
</Note>

## Save and send the proposal

Once you have finished adding line items to all options, you have two choices.

* Select **Save and Send** at the top right to save the proposal and send it to the customer immediately.
* Select **Save as Draft** to save without sending. You can open the proposal later by going to **Accounting** and selecting **Quotes**, and send it from the proposal detail page.

## What happens after the customer responds

When the customer accepts the proposal, Zuper converts the accepted option into a quote. The unit cost for each line item is determined by whether the item has an ABC Supply catalog mapping.

* Items linked to your ABC Supply catalog use the unit cost from your ABC Supply branch catalog at the time you created the proposal.
* Items without a catalog in the selected ABC Supply branch use the **Master Cost** from the product catalog.

This means the two types of items can coexist in the same quote without any manual adjustment.

<Warning>
  Unit costs on the converted quote reflect ABC Supply branch pricing at proposal creation time, not at quote conversion time. If branch prices have changed since you created the proposal, the converted quote shows the original proposal prices.
</Warning>

<iframe src="https://player.vimeo.com/video/1217578364?title=0&byline=0&portrait=0" title="Create a CPQ proposal with ABC Supply pricing" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

## How pricing stays current

Zuper updates pricing for all ABC Supply-connected parts and products automatically, so you do not need to maintain prices manually.

* **Daily update** — every day, Zuper refreshes the unit cost for each product option and UOM across all your active ABC Supply supplier branches.
* **On-use update** — when you add an ABC Supply-connected part to an estimate or purchase order, Zuper fetches the latest price from the associated branch at that moment.

## FAQs

<AccordionGroup>
  <Accordion title="Can I create a CPQ proposal without ABC Supply set up?">
    Yes, but line items do not automatically populate with branch pricing, so you need to enter unit costs manually. To use live ABC Supply pricing, install the ABC Supply integration and link your products to the catalog before you create the proposal.
  </Accordion>

  <Accordion title="What happens if I add a product that is not linked to my ABC Supply catalog?">
    Zuper uses the **Master Cost** from your Parts and Services catalog instead, and both linked and unlinked items can coexist in the same proposal without any manual adjustment.
  </Accordion>

  <Accordion title="Can I change the ABC Supply branch after I start adding line items?">
    Yes, the purchase cost updates to the new branch pricing for products linked to that branch. For products without a catalog in the newly selected branch, pricing is pulled from the product master.
  </Accordion>

  <Accordion title="Can I save a proposal without sending it to the customer?">
    Yes, select **Save as Draft** to save without sending. You can open the proposal later by going to **Accounting** and selecting **Quotes**, and send it from the proposal detail page.
  </Accordion>

  <Accordion title="How does ABC Supply pricing work when I create a proposal from the mobile app?">
    When you create a proposal from the Zuper mobile app, you cannot select an ABC Supply branch directly, so Zuper uses the preferred branch set in your **Supplier Settings** to derive branch pricing. For proposals created on the web, pricing is derived from the supplier assigned to the quote.
  </Accordion>
</AccordionGroup>

## Related articles

* [Connecting ABC Supply](https://docs.zuper.co/Integrations/Purchasing/abc-supply/connecting-abc-supply)
* [Linking catalog products to ABC Supply](https://docs.zuper.co/Integrations/Purchasing/abc-supply/setup-your-abc-catalog)
* [Creating a CPQ proposal with SRS Distribution pricing](https://docs.zuper.co/Integrations/Purchasing/Creating%20a%20CPQ%20proposal%20with%20SRS%20pricing)
* [Creating a purchase order from a quote with ABC Supply items](https://docs.zuper.co/Integrations/Purchasing/abc-supply/placing-material-order-to-abc)


## Related topics

- [Using SRS Pricing on Your Proposals](/Integrations/Purchasing/Creating a CPQ proposal with SRS pricing.md)
- [Connecting ABC Supply](/Integrations/Purchasing/abc-supply/Integrations/Purchasing/abc-supply/connecting-abc-supply.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.