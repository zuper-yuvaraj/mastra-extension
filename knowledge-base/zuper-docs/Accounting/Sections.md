---
title: "Sections"
source: https://docs.zuper.co/Accounting/Sections.md
fetched_at: 2026-10-06T13:29:51.222Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Sections 

## Overview

Sections replace **Headers** across **Service Packages**, **Proposals**, **Quotes**, **Invoices**, and **Job** line items.

With Sections, you can control what customers see, from individual line-item details to whether a section appears at all.

## How sections work?

* When you add a section to a quote, invoice, or proposal, all line items inside it are treated as a group. Reordering a section moves every item in it together — you do not need to reorder each item individually.
* Each section has its own configuration settings that control what your customer sees in PDFs, public links, previews, and presentation mode.
* You can add line items directly to a section.

<Note>
  **Note**: To ensure Sections configuration works correctly, make sure the ‘**Price**’ toggle is enabled under Estimate Options in the Proposal layout, and ‘Show Selling Price in Transaction’ is enabled for the relevant custom role.
</Note>

## **Adding sections in transactions**

<Tabs>
  <Tab title="Web">
    The web app supports Jobs, Quotes, Invoices, Proposals, and CPQ.

    1. Use the “**+ Add**” button to add the Section:

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Brg5bx4L60utYeYx/images/Sect40-2.png?fit=max&auto=format&n=Brg5bx4L60utYeYx&q=85&s=a0f4f7c3f014a5c0dc5cfeca48d60888" alt="Sect40 2" width="1907" height="851" data-path="images/Sect40-2.png" />
    </Frame>

    2. Enter the section name and select the “**Add Section**” button.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/Brg5bx4L60utYeYx/images/Sect41-1.png?fit=max&auto=format&n=Brg5bx4L60utYeYx&q=85&s=10be6ef592e99ad7197efd94d1d56741" alt="Sect41 1" width="1905" height="853" data-path="images/Sect41-1.png" />
    </Frame>

    3. Under “**Actions**,” select the context menu. Choose “[**Configure**](https://docs.zuper.co/Accounting/Sections#section-configuration)” to access the section settings.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/wFeWSFHyk7thEFT_/images/Sect38-1.png?fit=max&auto=format&n=wFeWSFHyk7thEFT_&q=85&s=b93f90ff2979bb8e4eb38e1b8f88ab26" alt="Sect38 1" width="1907" height="845" data-path="images/Sect38-1.png" />
    </Frame>

    Similarly, you can edit sections as well after creation.
  </Tab>

  <Tab title="Mobile">
    The Mobile app supports Quotes, Invoices, and Proposals.

    1. Tap the “**+**” button to add the Section.

    <img src="https://mintcdn.com/zuperinc/no9fPPJbLw2alY0I/images/Sect44-portrait.png?fit=max&auto=format&n=no9fPPJbLw2alY0I&q=85&s=9247b05a207632aa62702842d2381fbb" style={{ height: "690px", width: "350px" }} className="rounded-lg" width="1419" height="2796" data-path="images/Sect44-portrait.png" />

    2. Type the section title and tap the "**Add**" button.

    <img src="https://mintcdn.com/zuperinc/no9fPPJbLw2alY0I/images/Sect45-portrait.png?fit=max&auto=format&n=no9fPPJbLw2alY0I&q=85&s=938cadad0be2c753e6f4331c4c704b96" style={{ height: "690px", width: "350px" }} className="rounded-lg" width="1419" height="2796" data-path="images/Sect45-portrait.png" />

    3. Under “**Actions**,” select the context menu. Choose “[**Configure**](https://docs.zuper.co/Accounting/Sections#section-configuration)” to access the section settings.

    <img src="https://mintcdn.com/zuperinc/no9fPPJbLw2alY0I/images/Sect-47-1.png?fit=max&auto=format&n=no9fPPJbLw2alY0I&q=85&s=3ed1d345ee28bef7334e30adc9f7afbf" style={{ height:"690px",width:"350px" }} className="rounded-lg" alt="Sect 47 1" title="Sect 47 1" width="1419" height="2796" data-path="images/Sect-47-1.png" />
  </Tab>
</Tabs>

<Note>
  **Note**: A line item added using the generic “**Add**” button, rather than being added to a specific section, is placed in the last section.
</Note>

## Section configuration

Each section has four settings that control how it appears to the customer, in the PDFs, Public links, previews, and presentation mode.

When a new section is added, it inherits the configuration of the previous section.

| Setting | What it does | Default |
| - | - | - |
| **Show Line Items** | Displays individual line items to the customer within the section. | On |
| **Show Line-Item Prices** | Shows the unit cost, markup, and price for each individual line item in a section. | On |
| **Show Section Total** | Displays the sum of the section total. | Off |
| **Hide Section** | Completely hides the section and all its items from the customer. | Off |

<Frame>
  <img src="https://mintcdn.com/zuperinc/0eAQG0oHAKNuEfVf/images/sect_custom-1.png?fit=max&auto=format&n=0eAQG0oHAKNuEfVf&q=85&s=5784c6130077c79b6c94cc1037e3dbcd" alt="Sect Custom 1" width="1920" height="878" data-path="images/sect_custom-1.png" />
</Frame>

Zuper carries over the section configuration when:

* You create a quote from a proposal option.
* You generate an invoice from a quote or job.
* You create a job from a quote or invoice.

## Key points to note on hiding a Section

* Customers cannot see hidden sections or their line items in PDFs, public links, or presentation mode.
* Hidden line items still count toward the overall estimated total.
* You can hide multiple sections at once.
* The section total and all line-item prices are hidden from the customer throughout the quote/invoice/proposal.
* When you enable Hide Section, Zuper turns off the Price toggle in **Proposal Layout** → **Estimate Options**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/7NIZfJ4IPBAP8dXw/images/Sect43-1.png?fit=max&auto=format&n=7NIZfJ4IPBAP8dXw&q=85&s=43b428b249c226af011ae270e0d58e0e" alt="Sect43 1" width="1920" height="878" data-path="images/Sect43-1.png" />
</Frame>

## Section actions

* Configure — Controls how line items and prices appear within the section.
* Rename — Changes the section name.
* Clone — Duplicates the section and all its line items.
* Remove — Deletes the section. Select one of the following options:
  * Remove header only — Deletes the section but keeps the line items.
  * Remove section and all items — Deletes the section and all line items within it.

<Frame>
  <img src="https://mintcdn.com/zuperinc/DbHPDw4vALALNIJc/images/Sect38-2.png?fit=max&auto=format&n=DbHPDw4vALALNIJc&q=85&s=614ece54a210025192cef83021a30648" alt="Sect38 2" width="1907" height="845" data-path="images/Sect38-2.png" />
</Frame>

### Moving line items between sections:

You can move any line item out of a section or into a section.

* **Move out of Section** — Removes the item from its current section and places it at the top above all sections, ungrouped.
* **Move to Section** — Move a line item from a section or an ungrouped item to a preferred section.

<Frame>
  <img src="https://mintcdn.com/zuperinc/wFeWSFHyk7thEFT_/images/Sect39.png?fit=max&auto=format&n=wFeWSFHyk7thEFT_&q=85&s=97ac189f15b6e12e74b55ff542051ab9" alt="Sect39" width="1906" height="852" data-path="images/Sect39.png" />
</Frame>

### To move a line item

 Locate the line item in the section.

* In the line item actions, select [**Move out of section**](https://docs.zuper.co/Accounting/Sections#moving-line-items-between-the-sections) or [**Move to section**](https://docs.zuper.co/Accounting/Sections#moving-line-items-between-the-sections) from the line-item actions, depending on the item's current position.
* If moving to a section, select the destination section from the list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/7NIZfJ4IPBAP8dXw/images/Sect42.png?fit=max&auto=format&n=7NIZfJ4IPBAP8dXw&q=85&s=6c141d3ddc87fd4fda7621d4a0dd276e" alt="Sect42" width="1912" height="857" data-path="images/Sect42.png" />
</Frame>

## Customer view

* When only **Show Section Total** is enabled, the customer sees only the section total. Individual line items and their prices stay hidden.

<Frame>
  <img src="https://mintcdn.com/zuperinc/F9l9_jLr41Y3cFXj/images/section_display_all.gif?s=830b39571074fb7b18c2e7f37fdce704" alt="Section Display All" width="1920" height="878" data-path="images/section_display_all.gif" />
</Frame>

* When **Show Line Items**, **Show Line-Item Prices**, and **Show Section Total** are all enabled, the customer sees each line item, its unit cost, markup, and price. The section total also appears against the sections.

<Frame>
  <img src="https://mintcdn.com/zuperinc/F9l9_jLr41Y3cFXj/images/section_display_all-1.gif?s=55e86a2f5e36f1d7ab12fc29030ab708" alt="Section Display All 1" width="1920" height="878" data-path="images/section_display_all-1.gif" />
</Frame>

* When **Hide Section** is enabled, the customer does not see the section or any of its line items. Additionally, the prices for all the other line items are hidden from the customer as well.

<Frame>
  <img src="https://mintcdn.com/zuperinc/F9l9_jLr41Y3cFXj/images/section_hide.gif?s=995ed94041bbb7a9c94ac88acf6271f0" alt="Section Hide" width="1920" height="878" data-path="images/section_hide.gif" />
</Frame>

## **Important note on templates**

**No changes required if:**

* You continue using the default configuration (where line items and prices are visible and section totals are hidden), your existing templates — both native and custom — will continue to work as expected.

If you use **new Section visibility options** (for example, hiding line items, prices, or entire sections)**:**

* **Proposals:** No impact. Sections are supported by default.
* **Quotes & Invoices (Native Templates):** You will need to create new templates to use these capabilities. Check out how to create [quote & invoice templates](https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Quotes-Invoices-Settings#quotes-%26-invoices-templates).
* **Quotes & Invoices (Custom Templates):** Updates are required to support these capabilities. Please reach out to [**support@zuper.co**](mailto:support@zuper.co) for assistance. 

<Note>
  **Note:** Custom template changes affect all documents using that template. Before requesting changes, confirm the update won't impact other quotes or invoices. For document-specific formatting, request a separate template from [support@zuper.co](mailto:support@zuper.co).
</Note>


## Related topics

- [Creating a new job](/Work_Order_Management/Jobs/creating_a_new_job.md)
- [Using Conditional Rules ](/Zuper_for_Roofing/Conditional_Rule.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.