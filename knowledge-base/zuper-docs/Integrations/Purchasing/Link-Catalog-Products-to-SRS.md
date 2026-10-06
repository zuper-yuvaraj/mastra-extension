---
title: "Setup Your Catalog"
source: https://docs.zuper.co/Integrations/Purchasing/Link%20Catalog%20Products%20to%20SRS.md
fetched_at: 2026-10-06T13:30:36.244Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup Your Catalog

<Frame>
  **Navigation**: *Parts and Services → Product record → Suppliers*
</Frame>

## Overview

Linking your Parts and Services catalog to SRS Distribution tells Zuper which SRS product to use when pulling live pricing, placing orders, and generating material orders for each item. Once a product is linked, Zuper fetches the current branch price automatically — so your estimates and material orders always reflect what your branch charges, without any manual price updates.

You can link products one at a time from the product record, or connect multiple products at once from the listing page. Either way, Zuper automatically suggests the closest matches from the SRS catalog, and you review and confirm them before saving.

***

## Before you begin

The SRS Distribution integration must be installed, and at least one branch must be connected before you can link catalog items. If you have not completed setup, see [SRS Distribution integration — setup and branch management](/integrations/purchasing/srs-distribution-setup).

***

## Link a single product to SRS

<iframe src="https://player.vimeo.com/video/1201363531?h=4fbbc82006&title=0&byline=0&portrait=0" title="Single Product Connection" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen={true} />

Use this method when you want to connect one product and review the mapping in detail.

1. Go to **Parts and Services** from the left navigation menu.
2. Select the product you want to link.
3. In the left panel of the product record, select **Suppliers**. If no suppliers are linked yet, the panel shows a prompt to start adding suppliers.
4. Select **+ Add** at the top right of the **Suppliers** panel.
5. In the **Add Suppliers** dialog, select the **Connected Suppliers** tab.
6. Select **SRS Distribution** from the list. The status shows **Connected** with the number of branches linked to your account.
7. Select **Next**. The **Connect to SRS** dialog opens. Zuper shows your product name at the top and a row of **Recommended Match** suggestions below it. These are the closest items Zuper found in the SRS catalog based on your product name.
8. Select a recommended match if one is correct. If none fit, use the **Search SRS Catalog** field to search by product name and select the correct item from the results.
   <Note>
     If you cannot find an exact match, select the closest available SRS product. You can refine the mapping later from the **Suppliers** tab.
   </Note>
9. Select **Next**. The **Map SRS Catalog** screen opens. It shows the selected SRS product on the left and your Zuper product on the right.
10. Under **Select UOM**, choose the unit of measurement that matches your product.
    <Warning>
      The unit of measurement you select must match the supplier UOM exactly. A mismatch will cause incorrect pricing to appear on material orders.
    </Warning>
11. In the **SRS Product Option** column, review each option listed. For each one, open the **Zuper Product Option** dropdown and select the matching option in your catalog. If no option applies, select **N/A**.
12. Select **Add**.

Zuper saves the mapping and returns to the **Suppliers** tab. The branch name appears as the supplier, with each mapped option showing the **Supplier SKU**, **SRS Product Option**, **Zuper Product Option**, and **Unit Purchase Cost**.

<Note>
  Catalog creation runs in the background for all branches. A banner at the top of the screen confirms this. Pricing data for some branches might take a few minutes to appear. Wait for the catalog to fully populate before selecting **Manage Catalog** — opening it before population is complete might show incomplete or missing product options.
</Note>

***

## Link multiple products to SRS at once

<iframe src="https://player.vimeo.com/video/1201717491?badge=0&autopause=0&player_id=0&app_id=58479" title="Bulk Product Connection" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

Use this method to connect multiple products in a single step from the Parts and Services listing page.

1. Go to **Parts and Services** from the left navigation menu.
2. Select the checkboxes next to the products you want to connect.
3. In the action bar that appears at the bottom of the page, select **Connect to Supplier**.
4. In the **Select supplier** step, select **SRS Distribution** (shown as **Connected**).
5. Select **Next**.

The **Connect items to SRS Distribution catalog** screen opens. Zuper pre-selects the best match from the SRS catalog for each product and shows a mapping table.

6. For each product, review the pre-selected SRS product in the left dropdown. Change it if the match is not correct.
7. For each SRS product option listed, open the **Zuper Product Option** dropdown and select the matching option. Leave unmapped options blank if they do not apply.
8. Select **Confirm and Save**.

Zuper saves the mappings for all selected products.

***

## Manage an existing SRS supplier mapping

Use this method when you want to connect one product and review the mapping in detail.

### Access supplier actions

1. Go to the product record and select **Suppliers** in the left panel.
2. Locate the SRS branch row.
3. Select the three-dot menu on the right of the branch row.

The following actions are available:

* **Add Option** — add a new product option mapping for this branch.
* **Manage Catalog** — reopen the **Map SRS Catalog** screen to update the UOM or option mappings.
* **Remove** — remove the SRS supplier link for this product from this branch.

### Remove a product option mapping

1. Select the delete icon (red trash icon) next to the option row you want to remove.
2. In the **Delete Supplier Catalog** dialog, choose one of the following:
   * **Delete \[option name] from all SRS branches** — removes this option mapping across every branch linked to this product.
   * **Delete only this particular option** — removes the mapping from this branch only.
3. Select **Delete**.

<Note>
  Deleting a supplier catalog mapping removes the pricing link for that option. The product itself remains in your Parts and Services catalog.
</Note>

***

## Understanding the supplier record

After saving, the **Suppliers** tab displays a table with the following columns:

| Column | What it shows |
| - | - |
| **Supplier SKU** | The SRS identifier for this product option |
| **SRS Product Option** | The option name as it appears in the SRS catalog |
| **Zuper Product Option** | The matching option in your Zuper catalog |
| **Unit Purchase Cost** | The current branch price for this option |

If the **Unit Purchase Cost** shows **Cost not available**, the pricing for that option has not yet loaded from the branch. Check back after a few minutes or verify that the option is stocked at that branch.

***

## How pricing stays current

Once a product is linked, Zuper keeps prices up to date automatically in two ways, so you never need to update them manually:

* **Daily update** — every day at midnight Central Standard Time, Zuper refreshes the unit cost for each product option and unit of measurement across all your active SRS supplier branches.
* **On-use update** — when you add an SRS-connected part to an estimate or material order, Zuper fetches the latest price from the associated branch at that moment.

***

## FAQs

<AccordionGroup>
  <Accordion title="Can I link one Zuper product to more than one SRS branch?">
    Yes. When you link a product, Zuper creates a separate supplier mapping for each of your connected branches. Each branch mapping has its own pricing and SKU.
  </Accordion>

  <Accordion title="What happens if I cannot find an exact SRS match for my product?">
    Select **Manage Catalog** from the three-dot menu, then select **Unlink**. You can link the product to a different supplier catalog at any time. Unlinking a product removes all connected supplier catalogs for that product.
  </Accordion>

  <Accordion title="Why does my Unit Purchase Cost show 'Please contact branch for pricing'?">
    Pricing loads in the background after a mapping is saved. If the cost is still unavailable after a few minutes, verify that the product option is stocked at that branch in your SRS RoofHub account.
  </Accordion>

  <Accordion title="What does the UOM selection affect?">
    The unit of measurement controls how pricing is calculated on material orders. If the UOM in Zuper does not match the supplier UOM, the unit cost will be incorrect.
  </Accordion>

  <Accordion title="Can I remove an SRS supplier link without deleting the product?">
    Yes. Go to the product record, select **Suppliers**, open the three-dot menu on the SRS branch row, and select **Remove**. The product remains in your Parts and Services catalog. Only the SRS pricing link is removed.
  </Accordion>

  <Accordion title="Why were some products excluded from a bulk link?">
    Products are excluded from bulk linking if they are already linked to a supplier or are not eligible for supplier connection. The yellow banner at the top of the bulk mapping screen tells you how many products were excluded. If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="Why was no catalog created for a product after linking?">
    This happens when the SRS catalog does not exist for the branches selected in your supplier settings. Zuper can only build a catalog for a product if the matching SRS item is carried by the branch. Check your branch selection in **Settings → Parts and Services Settings → Supplier Integrations → SRS Distribution** and confirm that the product is available at those branches in your RoofHub account.
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Connect your SRS account](/Integrations/Purchasing/SRS-setup)
* [Using SRS pricing on your proposals](/Integrations/Purchasing/Creating%20a%20CPQ%20proposal%20with%20SRS%20pricing)
* [Placing a material order with SRS](/Integrations/Purchasing/Creating%20a%20Purchase%20Order%20from%20a%20Quote%20with%20SRS%20Items)
* [Parts and Services overview](/Inventory_Management/Overview)


## Related topics

- [Connect Your SRS Account](/Integrations/Purchasing/SRS-setup.md)
- [Using SRS Pricing on Your Proposals](/Integrations/Purchasing/Creating a CPQ proposal with SRS pricing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.