---
title: "Setup Your ABC Catalog"
source: https://docs.zuper.co/Integrations/Purchasing/abc-supply/setup-your-abc-catalog.md
fetched_at: 2026-10-06T13:30:37.021Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setup Your ABC Catalog

## Overview

Linking your **Parts and Services** catalog to ABC Supply tells Zuper which ABC Supply product to use when pulling live pricing, placing orders, and generating material orders for each item. Once a product is linked, Zuper fetches the current branch price automatically, priced against the **Ship-To Account** assigned to your preferred branch, so your estimates and material orders always reflect what your branch charges without manual price updates.

ABC Supply maintains a live, nationally curated product catalog, and Zuper searches the full catalog directly when you link a product. Because the catalog covers thousands of SKUs across hundreds of branch locations, searching by manufacturer part number or ABC Supply SKU returns the most precise results. You can link products one at a time from the product records, or connect multiple products at once from the listing page.

## Before you begin

The ABC Supply integration must be installed, and at least one branch must be connected, before you can link catalog items. If you have not completed setup, see [Connecting ABC Supply](#).

## Link a single product

Use this method when you want to connect one product and review the mapping in detail.

### Select the ABC Supply match

1. Go to **Parts and Services** from the left navigation menu.
2. Select the product you want to link.
3. Select **Suppliers** in the left panel of the product record. If no suppliers are linked yet, the panel shows a prompt to start adding suppliers.
4. Select **+ Add** at the top right of the **Suppliers** panel.
5. Select the **Connected Suppliers** tab in the **Add Suppliers** dialog.
6. Select **ABC Supply** from the list. The status shows **Connected**, with the number of branches linked to your account.
7. Select **Next**. The **Connect to ABC Supply** dialog opens, showing your product name at the top with a row of **Recommended Match** suggestions below it, based on product name matching. If none of the suggestions are accurate, you can search by manufacturer part number or ABC Supply SKU in the next step for more precise results from the full catalog.

<Tip>
  If you cannot find an exact match, select the closest available ABC Supply product. You can refine the mapping later from the **Suppliers** tab.
</Tip>

### Map units and options

8. Select **Next**. The **Map ABC Catalog** screen opens, showing the selected ABC Supply product on the left and your Zuper product on the right.
9. Choose the unit of measurement that matches your product under **Select UOM**.

<Note>
  The unit of measurement you select must match the Master Product UOM exactly. A mismatch causes incorrect pricing to appear on material orders.
</Note>

10. Review each option listed in the **ABC Product Option** column, and for each one, open the **Zuper Product Option** dropdown and select the matching option, or select **N/A** if no option applies.
11. Select **Add**.

Zuper saves the mapping and returns to the **Suppliers** tab. The branch name appears as the supplier, and each mapped option shows the **Supplier SKU**, **ABC Product Option**, **Zuper Product Option**, and **Unit Purchase Cost**.

<Note>
  Catalog creation runs in the background for all branches, and a banner at the top of the screen confirms this. Pricing data for some branches might take a few minutes to appear, so wait for the catalog to fully populate before you select **Manage Catalog**.
</Note>

<iframe src="https://player.vimeo.com/video/1217577630?title=0&byline=0&portrait=0" title="Link a single product to ABC Supply" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

## Link multiple products at once

Use this method to connect multiple products in a single step from the **Parts and Services** listing page.

1. Go to **Parts and Services** from the left navigation menu.
2. Select the checkboxes next to the products you want to connect.
3. Select **Connect to Supplier** in the action bar at the bottom of the page.
4. Select **ABC Supply**, shown as **Connected**, in the **Select Supplier** step.
5. Select **Next**. The **Connect items to ABC Supply catalog** screen opens, and Zuper pre-selects the best match for each product in a mapping table.
6. Review the pre-selected ABC Supply product in the left dropdown for each product, and change it if the match is not correct.
7. Open the **Zuper Product Option** dropdown for each ABC Supply product option listed, and select the matching option. Leave unmapped options blank if they do not apply.
8. Select **Confirm and Save**. Zuper saves the mappings for all selected products.

<iframe src="https://player.vimeo.com/video/1217578362?title=0&byline=0&portrait=0" title="Link multiple products to ABC Supply" className="w-full aspect-video" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

## Manage an existing ABC Supply supplier mapping

Use this method when you want to update or remove a mapping you have already saved.

### Access supplier actions

1. Go to the product record, and select **Suppliers** in the left panel.
2. Locate the ABC Supply branch row.
3. Select the **three-dot menu** on the right of the branch row.

The following actions are available:

* **Add Option** — add a new product option mapping for this branch.
* **Manage Catalog** — reopen the **Map ABC Catalog** screen to update the UOM or option mappings.
* **Remove** — remove the ABC Supply supplier link for this product from this branch.

### Remove a product option mapping

1. Select the **delete icon** next to the option row you want to remove.
2. In the **Delete Supplier Catalog** dialog, choose one of the following:
   * **Delete \[option name] from all ABC Supply branches** — removes this option mapping across every branch linked to this product.
   * **Delete only this particular option** — removes the mapping from this branch only.
3. Select **Delete**.

<Note>
  Deleting a supplier catalog mapping removes the pricing link for that option, but the product itself remains in your Parts and Services catalog.
</Note>

## Understanding the supplier record

After you link a product to ABC Supply, the **Suppliers** tab on the product record shows one row per branch. Each row displays the following information:

* **Supplier SKU** — the ABC Supply product identifier for this item at the linked branch.
* **ABC Product Option** — the option from the ABC Supply catalog mapped to this product, for example, shingle color or size.
* **Zuper Product Option** — the corresponding option from your catalog.
* **Unit Purchase Cost** — the current price from your linked ABC Supply branch, refreshed daily.

Pricing in ABC Supply is tied to both the branch and the **Ship-To Account** assigned to it, so if your account has multiple Ship-To Accounts at the same branch, each account might have different pricing for the same product. Zuper uses the Ship-To Account you selected when you set up the branch. To change the Ship-To Account, go to **Supplier Settings** and update the branch configuration, and pricing reflects the new account on the next scheduled daily refresh.

## FAQs

<AccordionGroup>
  <Accordion title="What happens if Zuper cannot find a match in the ABC Supply catalog?">
    Zuper shows the closest results it can find based on your product name, and if none are correct, you can select the **Search ABC Catalog** field to search by manufacturer part number or ABC Supply SKU instead, since these return more precise results than product name alone. If the item does not exist in the ABC Supply catalog, you cannot link it.
  </Accordion>

  <Accordion title="Can I link one Zuper product to more than one ABC Supply branch?">
    Yes, when you link a product, Zuper creates the mapping across all connected branches automatically, and each branch appears as a separate row in the **Suppliers** tab with its own pricing, reflecting the **Ship-To Account** assigned to that branch.
  </Accordion>

  <Accordion title="Why is pricing not showing after I link a product?">
    Catalog creation runs in the background and might take a few minutes to complete, and a banner at the top of the screen appears while the catalog populates. Wait until the banner disappears before you select **Manage Catalog** to review pricing.
  </Accordion>

  <Accordion title="Can I update the UOM or option mapping after saving?">
    Yes, go to the product record, select **Suppliers**, open the **three-dot menu** next to the ABC Supply branch row, and select **Manage Catalog** to update the UOM or option mappings and save. If the unit cost looks incorrect after saving, confirm the **Ship-To Account** on the branch is set correctly in **Supplier Settings**.
  </Accordion>

  <Accordion title="What does deleting a supplier catalog mapping do?">
    Deleting a mapping removes the pricing link for that option, and the product remains in your **Parts and Services** catalog, though it no longer pulls ABC Supply pricing for the deleted option. Other mapped options on the same product stay unaffected.
  </Accordion>

  <Accordion title="The ABC Supply option is not appearing in the Connected Suppliers tab. What should I check?">
    Confirm that the ABC Supply integration is installed and that at least one branch is connected. If the integration was recently uninstalled, you must reinstall it and sign in again before you link products. If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

## Related articles

* [Connecting ABC Supply](https://docs.zuper.co/Integrations/Purchasing/abc-supply/connecting-abc-supply)
* [Creating a material order with ABC Supply pricing](https://docs.zuper.co/Integrations/Purchasing/abc-supply/placing-material-order-to-abc)
* [Linking catalog products to SRS Distribution](https://docs.zuper.co/Integrations/Purchasing/Link%20Catalog%20Products%20to%20SRS)


## Related topics

- [Setup Your Catalog](/Integrations/Purchasing/Link Catalog Products to SRS.md)
- [Using ABC Pricing on Your Proposals](/Integrations/Purchasing/abc-supply/using-abc-pricing-on-your-proposals.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.