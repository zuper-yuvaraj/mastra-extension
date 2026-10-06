---
title: "Multi Trade Groups in CPQ Proposals"
source: https://docs.zuper.co/Zuper_for_Roofing/Multi-trade%20groups%20in%20CPQ%20proposals.md
fetched_at: 2026-10-06T13:30:40.587Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Multi Trade Groups in CPQ Proposals

When your business covers multiple trades — roofing, siding, gutters, and more — a standard proposal allows your customer to choose only one option. Multi-trade groups solve this by organizing your proposal into separate groups, one for each trade, so the customer can select an option from each group in a single proposal.

<Frame>
  **Navigation**: *Settings → Quotes & Invoices → Zuper IQ – Intelligent Quoting → Proposal Templates*
</Frame>

<Note>
  Multi-trade groups are available on CPQ-based templates only. Standard templates do not support this feature.
</Note>

***

## Before you begin

Before you configure trade groups, confirm the following:

* **CPQ-based template required.** Select **CPQ Based Template** when creating your template. Standard templates do not support the **Enable Multi Trade** toggle or the **Trade Groups** section.
* **Primary group.** The first group you create is automatically marked as **Primary**. Taxes, fees, and deposits are configured in the primary group's option and apply to all other groups in the proposal.
* **Financing.** Financing is configured at the option level within the primary group. The financing terms for the selected option in the primary group apply to all selected options across the proposal, including those chosen from other groups.

***

## Create or open a CPQ template

To use trade groups, you must work with a CPQ-based template.

* If you have not yet created one, see [Create a CPQ proposal template](/Zuper_for_Roofing/Proposal_Template_with_CPQ) for setup steps.
* To edit an existing CPQ template, select the edit icon next to it in the **Proposal Templates** list, then continue below.

***

## Enable multi-trade and add groups

The **Trade Groups** section appears below the **Trigger Configuration** on Step 1 of the template.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade2.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=a4c5b1a240efaa37535d7614422528b1" alt="Cpqtrade2" width="1905" height="862" data-path="images/cpqtrade2.png" />
</Frame>

1. Select the **Enable Multi Trade** toggle. The toggle turns orange when active.
2. Select **+ Add Group**. A new row appears with an **Enter group name** field.
3. Enter a name for the group — for example, *Roofing* or *Gutters*.
4. Repeat steps 2 and 3 for each additional trade you want to include.

***

## Mark a group as required

When a group is marked **Required**, the customer must select one option from that group before they can accept the proposal. This ensures that the primary trade your company is responsible for is always selected at acceptance.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade3.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=d7fd1c2fe51231dd5eac2ceb4d9afcd6" alt="Cpqtrade3" width="1920" height="878" data-path="images/cpqtrade3.png" />
</Frame>

* Locate the **Required** toggle on the right side of the group row.
* Select the toggle to turn it on. It turns orange when active.

<Note>
  The primary group is set to **Required** by default. You can independently turn the **Required** toggle on or off for any additional group.
</Note>

***

## Add options to each group

Select a group first, then choose a template or preset from the left panel to populate its options.

1. Select the group you want to configure.
2. In the **Templates** panel on the left, select a manufacturer template. The group populates with that template's options.
3. Alternatively, select a **Preset** from the panel to build options without a manufacturer template.
4. Repeat for each group in your proposal.

<Tip>
  You can customize option names, images, and descriptions during proposal creation. The template stores the structure; the proposal stores the final content.
</Tip>

***

## Configure line items and financing per option

Select **Next: Option Configuration** at the top right to move to Step 2. Here, you add line items to each option within each group.

1. Select a group from the **Group** dropdown on the left.
2. Select an option tab to open its line item menu.
3. Add line items using the available item types: **Bundle**, **Item Group**, **Material**, **Service**, **Section**, **Service Package**, **Checklist Lookup**, **Discount & Margin**, or **Deposit**.
4. Repeat for each option across all groups.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade4.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=591338692dfc972569ddb2bbd4607eb1" alt="Cpqtrade4" width="1911" height="833" data-path="images/cpqtrade4.png" />
</Frame>

### Enable financing for an option

If you want to offer a financing plan for a specific option, enable it at the bottom of that option's line-item area.

1. Scroll to the bottom of the option's line-item area.
2. Locate the **Financing for "\[Option Name]"** section.
3. Select the **Enable Financing** toggle to turn it on.
4. Select **Select Financing** to choose a financing provider.

<Note>
  Financing is configured at the option level within the primary group. When a customer selects options across multiple groups and chooses to finance, the financing calculation applies at the proposal level using the primary group's settings.
</Note>

***

## Review and publish the template

1. Select **Next: Review & Publish** at the top right.
2. Select a **Proposal Layout** from the dropdown. The layout determines which sections appear in the proposal and how they are ordered.
3. In the **Options Preview** section, confirm that all groups display correctly — each with the **Primary** and **Required** badges where applicable and the correct set of options.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade5.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=229b8f597693e9814ee85449defa590d" alt="Cpqtrade5" width="1920" height="878" data-path="images/cpqtrade5.png" />
</Frame>

4. Select **Publish Template** to make the template available for proposal creation. Select **Save as Draft** if you want to continue editing later.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade6.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=36ce8fbb224a4c69bf8fc04f1fefd869" alt="Cpqtrade6" width="1920" height="878" data-path="images/cpqtrade6.png" />
</Frame>

***

## Create a proposal from a multi-trade CPQ template

Once your template is published, you can create a proposal in two ways: automatically via the trigger, or manually from the **Quotes** list.

### Automatic creation via trigger

When a job is created or updated with a matching category and status, Zuper automatically starts a CPQ proposal using your template. After you confirm the auto-creation, the proposal opens with the job already associated, and all formulas, pricing, and conditions are calculated based on the job data.

### Manual creation

1. Go to **Accounting** and select **Quotes**.
2. Select **+ New** at the top right, then select **Proposal** from the dropdown.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade7.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=cb37cb75feadf9e0a730731c134da24c" alt="Cpqtrade7" width="1920" height="878" data-path="images/cpqtrade7.png" />
</Frame>

3. On the **Select Proposal Template** panel, select the **CPQ** tab.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade8.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=25497ace7d982b8715ebb593b780aa6e" alt="Cpqtrade8" width="1920" height="878" data-path="images/cpqtrade8.png" />
</Frame>

4. Select your multi-trade CPQ template from the list. The preview on the right shows all trade groups, badges, and options.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade9.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=b8d599792eefded7da23327423c89630" alt="Cpqtrade9" width="1920" height="878" data-path="images/cpqtrade9.png" />
</Frame>

5. Select **Choose Template**.
6. On the proposal creation screen, fill in **Primary Information** — organization, contact, and property.
7. Associate a job by selecting it in the **Job** field. When all required job data is present, a green **All Required Data Available** banner confirms that pricing, formulas, and conditions are ready.

***

## Edit options in the proposal

The **Options** section displays a tab for each trade group. Select a group tab to view and edit its options.

* Select a group tab.
* For each option card, you can update the name, description, image, and line items.
* Repeat for each group tab.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade10.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=7cc069a7a435cfbe81bfc43643f75666" alt="Cpqtrade10" width="1920" height="878" data-path="images/cpqtrade10.png" />
</Frame>

<Info>
  All taxes, fees, and deposits configured in the primary group apply across all groups in the proposal.
</Info>

***

## What the customer sees

The customer receives an email with a PDF attachment and a link to view and approve the proposal.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade11.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=d7c746e8dabc7add5f98ff8c82ecef91" alt="Cpqtrade11" width="932" height="270" data-path="images/cpqtrade11.png" />
</Frame>

The customer selects **View to Approve Proposal** in the email and moves through a five-step acceptance flow: **Review → Choose Package → Configure → Payment → Sign**.

### Review

The customer reviews the proposal cover page and selects **Continue** to proceed.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade12.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=ca1998f80b4decb26640a2cc065df67e" alt="Cpqtrade12" width="1907" height="864" data-path="images/cpqtrade12.png" />
</Frame>

### Choose package and configure

All trade groups appear in sequence. A summary bar at the top of the page shows all groups and their current selection state. Groups marked **Required** must have an option selected before the customer can continue.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade13.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=5c8fab2b720a7387b1828b177eadefdc" alt="Cpqtrade13" width="1906" height="764" data-path="images/cpqtrade13.png" />
</Frame>

<Note>
  If the customer changes their selection in the primary group after selecting options in other groups, all other group selections are automatically reset. This happens because taxes, fees, deposits, and financing all originate from the primary group. A change to the primary selection requires the other groups to recalculate from the beginning.
</Note>

### Payment

On the **Choose Payment Method** step, the customer sees:

* **Pay in Full** — the combined total for all selected options across all groups.
* **Finance** — a monthly payment plan from the financing provider configured in the primary group's options.

The combined selection summary is shown at the bottom of the screen.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade14.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=3a954bf42649f9272ab2b424f2d2961e" alt="Cpqtrade14" width="1920" height="878" data-path="images/cpqtrade14.png" />
</Frame>

### Sign and accept

The customer signs and selects **Accept Proposal** to complete the acceptance.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade15.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=df35eab606b9706e0519e8ac221fe774" alt="Cpqtrade15" width="1920" height="878" data-path="images/cpqtrade15.png" />
</Frame>

A confirmation screen appears showing the **Signature Summary** with the selected options, total amount, and proposal number.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade16.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=3c86543f78dab3f3f7e7a2c93515558e" alt="Cpqtrade16" width="1920" height="878" data-path="images/cpqtrade16.png" />
</Frame>

***

## What happens after acceptance

When the customer accepts the proposal, Zuper automatically converts it to an accepted quote. You do not need to convert the proposal manually.

If your settings require a deposit before acceptance, Zuper redirects the customer to the payment page after they sign. The customer can close the payment page without completing the payment, and the proposal still converts to an accepted quote.

* The quote record shows the **Accepted** status and a **Quote Status** timeline with the **Sent** and **Accepted** timestamps, including the customer's signature thumbnail.
* The quote line items are grouped by trade group, so each group's selected option appears as a labeled section.
* All applicable taxes and fees are calculated across all selected options and displayed in the quote totals.

<Frame>
  <img src="https://mintcdn.com/zuperinc/b1FSOJYB0NWa6WVc/images/cpqtrade17.png?fit=max&auto=format&n=b1FSOJYB0NWa6WVc&q=85&s=4713de945999501a9cfd2b9599f1754d" alt="Cpqtrade17" width="1920" height="878" data-path="images/cpqtrade17.png" />
</Frame>

<Note>
  The quote is created automatically based on the customer's accepted selections. Manual conversion is not required for multi-trade proposals.
</Note>

***

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can I use trade groups with a standard proposal template?">
    No. Trade groups are available on CPQ-based templates only. Standard templates do not support the **Enable Multi Trade** toggle or the **Trade Groups** section.

    To use trade groups, select **CPQ Based Template** when creating your template.
  </Accordion>

  <Accordion title="What happens if a customer does not select an option from a required group?">
    The customer cannot proceed past the **Choose Package** step without selecting an option from each **Required** group. The acceptance flow blocks the next step until the required selection is made.
  </Accordion>

  <Accordion title="How does financing work when a customer picks options from multiple groups?">
    Financing is configured at the option level within the primary group. When the customer selects options across multiple groups and chooses to finance, the financing plan applies at the proposal level.

    The monthly payment is calculated on the combined total of all selected options across all groups, using the financing provider and rate configured in the primary group's option.
  </Accordion>

  <Accordion title="Can I reorder or rename trade groups after creating the template?">
    Yes. You can rename any group by editing the group name field in the **Template Selection** step. You can reorder groups using the drag handle on the left side of each group row.

    The primary group designation stays with the first group you created. You cannot reassign the **Primary** status to a different group.
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Create a CPQ proposal](/Zuper_for_Roofing/Proposal_Template_with_CPQ)
* [Difference between proposals and quotes](/Accounting/Difference_Between_Proposals_and_Quotes)
* [Create a new quotation](/Accounting/Create_New_Quote)
* [Creating a new invoice](/Accounting/Invoices/Create_new_invoice)


## Related topics

- [Using Trade Types for Multi-Trade Roofing Businesses](/Zuper_for_Roofing/Trade.md)
- [Proposal Template with CPQ](/Zuper_for_Roofing/Proposal_Template_with_CPQ.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.