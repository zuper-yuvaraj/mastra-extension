---
title: "Create, edit, and delete a pricelist"
source: https://docs.zuper.co/Inventory_Management/Pricelists/Create_Pricelist.md
fetched_at: 2026-10-06T13:29:48.748Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create, edit, and delete a pricelist

The Pricelist feature in Zuper streamlines pricing processes, boosts customer satisfaction, and drives revenue growth by allowing businesses to update pricing efficiently and maintain consistency.

<Frame>
  **Navigation**: *Inventory & Pricebook* *-> Pricelists* -> *+ Create Pricelist*
</Frame>

## Create new pricelist

To create a new pricelist, follow these steps:

1. Select the **"Inventory & Pricebook**” module from the left navigation menu and choose "**Pricelists.**"

<img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-1.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=bf1f6a1177db3d0d51a9049ed8dd3f08" alt="" width="1836" height="829" data-path="Inventory_Management/Pricelists/Price-1.png" />

2. The Pricelists listing page opens. 
3. Click the “**+ Create Pricelist**” button in the top-right corner of the page.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-3.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=c2781459274039db500a08dec0add46d" alt="" width="1849" height="383" data-path="Inventory_Management/Pricelists/Price-3.png" />

4. A new Pricelist creation page appears. Fill in the following sections:

#### **1. Primary Details section:**

1. **Name** (Mandatory): Enter a unique name for the pricelist.
2. **Description**: Add a brief description explaining the purpose or scope of the pricelist. <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-4.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=ca4f5f8a6cdce9c60fbe23885d62cf06" width="1845" height="899" data-path="Inventory_Management/Pricelists/Price-4.png" />

#### **2. Pricelist Details section:**

Choose the type of item, either “**All items**” or “**Individual items.**”

<AccordionGroup>
  <Accordion title="All Items" defaultOpen="false">
    Enter the following details:

    * **Type** (Mandatory): Select either the “**Discount**” or “**Margin**” option.

    <Note>
      **Note:** This selection applies to all parts and services when configured for all items.
    </Note>

    * **Amount** (Mandatory): Enter the value.
    * Choose “**USD**” or “**%**” from the drop-down menu.

          <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-5.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=ef64a0720b032bd1f68d69e596a40b3b" alt="" width="1845" height="899" data-path="Inventory_Management/Pricelists/Price-5.png" />
  </Accordion>

  <Accordion title=" Individual Items" defaultOpen="false">
    Enable the checkboxes to “**Enable Discount**” and/or “**Margin**”.

    <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-6.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=e40f02d4a9dda436363d6d3eac5281ea" alt="" width="1844" height="903" data-path="Inventory_Management/Pricelists/Price-6.png" />

    <Note>
      **Note:** You must activate the respective checkboxes during pricelist creation or editing to include a margin or discount in your pricing.
    </Note>
  </Accordion>
</AccordionGroup>

#### **3. Parts / Services section:**

1. Add the relevant parts and products by clicking the “**+ Add**” button.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-7.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=d8ac4e61a822f9e99a2671af30711732" alt="" width="1845" height="900" data-path="Inventory_Management/Pricelists/Price-7.png" />

2. A dialog box with the existing parts and products will appear.
3. Select the part/product(s) and click the “**Add**” button.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-8.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=69dec0050e3d176ee6e6bd169bf55f83" alt="" width="1866" height="955" data-path="Inventory_Management/Pricelists/Price-8.png" />

4. You can specify either “*Margin*”, “*Discount*”, or “*Custom Rate*” for each item.

* **Margin**: An additional percentage or fixed amount added to the cost price of items to determine the unit selling price.
* **Discount**: A flat or percentage amount subtracted from the selling price you set in the master list for a part or service. The updated selling price, reflecting the applied discount, will be displayed accordingly in the Updated Price field.
* **Custom Rate**: A fixed rate or percentage applied to the item or service.

<Note>
  **Note:** Only one of these options, “*Margin*”, “*Discount*”, or “*Custom Rate*” can be selected for each item.
</Note>

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-9.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=b6632970e1241e2769a367480b301202" alt="" width="1862" height="954" data-path="Inventory_Management/Pricelists/Price-9.png" />

After providing all the required details, click the “**Save**” button at the top right corner. A new Pricelist will be created successfully. You can add the newly created pricelist to specific customers, organizations, or individual transactions, such as Quotes, Invoices, Jobs, or Contracts.

### Edit a Pricelist

You can edit a pricelist from any one of the following pages:

1.  From the Pricelists listing page
2. From the Pricelist details page

**From the Pricelists listing page**

To edit a pricelist from the Pricelists listing page, follow these steps:

1. Select the pricelist you want to edit on the listing page.
2. Click the “**Ellipsis**” icon under the “**Action**” column and select “**Edit Pricelist**”. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-10.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=1e85cc50ffb04ce06d7fcf2b831f9f3b" width="1850" height="897" data-path="Inventory_Management/Pricelists/Price-10.png" />
3. Modify the necessary fields.
4. Click the “**Save**” button to update the pricelist. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-11.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=f5f81f3f1f2a1b44b374aeda03a84161" width="1837" height="900" data-path="Inventory_Management/Pricelists/Price-11.png" />

**From the Pricelist details page**

You can view the pricelist details page directly after saving a pricelist or from the Pricelists listing page. To edit a pricelist from the Pricelist details page, follow these steps:

1. Select the pricelist you want to edit.
2. On the **Pricelist details** page, under “**More Actions,**” select “**Edit Details.**” <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-12.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=2e3ce1e6b472d7cb6adb7fc3df70c032" width="1411" height="674" data-path="Inventory_Management/Pricelists/Price-12.png" />
3. Modify the necessary fields.
4. Click the “**Save**” button to update the pricelist. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-13.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=bb3742ae5d2d4ddc67d3f3ac31890528" width="1837" height="900" data-path="Inventory_Management/Pricelists/Price-13.png" />

### Deactivate/Delete a Pricelist

You can deactivate/delete a pricelist from any one of the following pages:

1. From the Pricelists listing page
2. From the Pricelist details page

**To deactivate/delete a Pricelist:**

1. On the Pricelists listing page, select the pricelist you want to deactivate.
2. Click the “**Ellipsis**” icon under the “**Action**” column and select “**Deactivate**”. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-14.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=959a88dec93008298587499f4b7bd1ef" width="1852" height="899" data-path="Inventory_Management/Pricelists/Price-14.png" />
3. Alternatively, you can click the “**Ellipsis**” icon under the “**Action**” column and select “**View Details**”. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-15.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=f772e9bbc886dad248afd2efa954ff9e" width="1843" height="897" data-path="Inventory_Management/Pricelists/Price-15.png" />
4. On the **Pricelist details** page, under “**More Actions**”, select “**Deactivate**”. <img src="https://mintcdn.com/zuperinc/Neq3J3KwY5NYmAYp/Inventory_Management/Pricelists/Price-16.png?fit=max&auto=format&n=Neq3J3KwY5NYmAYp&q=85&s=ea098f8796f85b65090ceb55be18efd1" width="1840" height="894" data-path="Inventory_Management/Pricelists/Price-16.png" />
5. The pricelist will be deactivated successfully. To reactivate it, click “**Activate**”. <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-17.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=9334e6bc8a2359f0f27f8644ae28ed28" width="1848" height="897" data-path="Inventory_Management/Pricelists/Price-17.png" />

**Delete a Pricelist**

To delete a pricelist, you must first deactivate the specific pricelist. Only after deactivation can the pricelist be deleted.

1. On the **Pricelists listing** page, select “**Delete Pricelist**” under “**Action**” to delete the pricelist. <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-18.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=ff2eb6d14c5c02bed857b113aa9788da" width="1827" height="824" data-path="Inventory_Management/Pricelists/Price-18.png" />
2. Alternatively, you can delete the pricelist from the **Pricelist detail** page. <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-19.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=d7fbb168e69e34e3e8ef5b5272172892" width="1848" height="900" data-path="Inventory_Management/Pricelists/Price-19.png" />
3. A pop-up message will appear. Click the “**Delete**” button to delete the pricelist. <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/Pricelists/Price-20.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=2f76bad28d15702cbcda3f437b414b2f" width="1801" height="902" data-path="Inventory_Management/Pricelists/Price-20.png" /> So, that's it! Whether you're creating a pricelist, making updates, or deactivating and deleting a pricelist, these procedures facilitate streamlined pricelist management within the application, ultimately contributing to efficient operations and enhanced productivity.

## Listing Views

Customize the Transfer Orders listing by adding/removing or reordering columns, then Update View to overwrite or save it as a new view.

**Update View**

* Click Update View to modify the current view after changes.

**Save as a new view**

* Use the dropdown beside Update View → Save as new view.

**Create View dialog**

* Enter the View Name (mandatory), choose Share with (User/Team) and add users, toggle Visibility to all users, and click Create.

**Reset View**

* Click Reset View to restore the current view to the default.

**Permissions**

* Edit: Add/remove/reorder columns; save as new or overwrite existing views.
* View-only: Apply views but can’t edit; can Save as new view to copy without altering the original.
* Manage view: Rename, adjust Visibility (Only Me/User/Team or global toggle), Duplicate, or Delete (creator only; reverts to default/another saved view).

**Open transfer order details**

* After filtering, click a Transfer Order Number or Transfer Order ID to view and manage details.

<img src="https://mintcdn.com/zuperinc/GRsJ5D7STlHfKASu/images/PL1.png?fit=max&auto=format&n=GRsJ5D7STlHfKASu&q=85&s=165df58e1a9c4d66c531f63f24d993dc" alt="PL1 Pn" width="1920" height="878" data-path="images/PL1.png" />

## Pinned filters

Zuper's Pricelists module lets you use pinned filters to streamline your filter experience. Pinned filters keep your most-used criteria readily accessible for quick application.

<Frame>
  **Navigation**: *Pricelists ->Filters -> Pinned Filter*
</Frame>

Pin up to 3 filters in any module.

1. Select the **"Inventory & Pricebook**” module from the left navigation menu and choose "**Pricelists.**"

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-pl1.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=e06589b099d7056c76e74196b029c9cf" alt="Pin Pl1 Pn" width="1920" height="878" data-path="images/pin-pl1.png" />

2. **Pin Filters for Quick Access**

* Once your filters are set, click the **Pin Filters** button in the dialog box to save them as pinned.
* Pinned filters appear in the dialog box's "**Pinned Filters**" section, allowing you to apply them with one click in future sessions.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-pl2.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=ecde053095cce359ade13c7fef9abe4e" alt="Pin Pl2 Pn" width="1920" height="878" data-path="images/pin-pl2.png" />

3. To Unpin the filter:

* To unpin, select a pinned filter and click **Remove**.
* To apply pinned or default filters, open the dialog box and select them.
* Use **Clear All** to remove active filters.

<img src="https://mintcdn.com/zuperinc/uWJXnqMkUObW6Xs-/images/pin-pl3.png?fit=max&auto=format&n=uWJXnqMkUObW6Xs-&q=85&s=c743b8d9031f093ae85b15124b12b221" alt="Pin Pl3 Pn" width="1920" height="878" data-path="images/pin-pl3.png" />


## Related topics

- [Overview](/Inventory_Management/Pricelists/Overview.md)
- [Apply a pricelist to a transaction](/Inventory_Management/Pricelists/Apply_Pricelist.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.