---
title: "Rebates"
source: https://docs.zuper.co/Accounting/Rebates.md
fetched_at: 2026-10-06T13:29:50.415Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Rebates

A rebate is an incentive offered to your customer by a manufacturer, utility provider, or another third-party organization.

In Zuper, your team can add rebate amounts directly to quotes and proposals to show customers their potential savings. Zuper displays each rebate separately and calculates the customer's estimated cost after rebates.

This helps your team communicate available incentives during the sales process while giving customers a clearer understanding of their potential out-of-pocket cost.

<Info>
  **Info**: Rebates are for informational purposes only. They do not reduce the quote or proposal total, taxes, deposit, amount due, or the amount your business charges or collects from the customer.
</Info>

## How rebates work

When a rebate is added to a quote or proposal option, Zuper displays the rebate separately below the **Total** and calculates the value shown as **Net Investment**.

```nushell theme={null}
Net Investment = Total − Total rebate amount
```

For example, if the Total is \$10,000 and the customer receives a \$1,000 manufacturer rebate, Zuper displays:

**Total**: \$10,000.00<br />**Manufacturer Rebate**: \$1,000.00<br />**Net Investment:** \$9,000.00

You can also add more than one rebate when multiple incentives apply. Zuper combines all rebate amounts and subtracts the total from the quote or proposal Total.

<Note>
  **Note**: Rebates are available as fixed amounts only, and the combined value of all rebates cannot exceed the Total.
</Note>

<Accordion title="**Rebate rules and limitations**" icon="award-simple" iconType="solid">
  Before you start using rebates, keep these points in mind:

  * Rebates are available as fixed amounts only. Percentage-based rebates are not supported.
  * You can add up to 10 rebates to a quote or proposal option.
  * The combined rebate amount cannot exceed the Total.
  * Rebates affect only the Net Investment value. They do not change the Total, taxes, deposit, Amount Due, or the amount your business collects.
  * Rebates are available only on quotes and proposals. They are not supported on invoices.
  * Rebates on a quote apply to the entire quote. Each proposal option can have its own rebates and Net Investment.
  * When you convert a quote containing rebates to a proposal, Zuper adds those rebates to the first proposal option.
  * Updating a rebate template does not change rebates that have already been added to existing quotes or proposals.
  * You can select a saved rebate template or add a one-time rebate directly to a quote or proposal option.
</Accordion>

## Enable rebates

<Frame>
  **Navigation**: Settings → Modules → Quotes and Invoices → Quotes and Invoices General Settings
</Frame>

1. Open the **Quote** tab.
2. Turn on **Enable Rebates?**.
3. *(Optional)* In **Show Total After Rebates As**, enter a custom label for the net investment value. If you leave blank, Zuper displays **Net Investment** by default.
4. Click **Save**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/tnVJfzXmXdFtgJ4g/Accounting/images/SCR-20261001-ntal.png?fit=max&auto=format&n=tnVJfzXmXdFtgJ4g&q=85&s=46a1f08821fef272d048680c0dba8c56" alt="SCR 20261001 Ntal" width="3412" height="1952" data-path="Accounting/images/SCR-20261001-ntal.png" />
   </Frame>

When **Enable Rebates?** is turned off, users cannot add or manage rebates. Any existing rebates are retained and become available again if you re-enable the setting.

<Tip>
  **Tips:** You can choose to hide rebates from customer-facing proposals. To do this, first turn off the "**Show Rebates**" option in the applicable Proposal Layout before disabling "Enable Rebates."
</Tip>

## Create a rebate template

Create rebate templates for rebates your team applies frequently. Templates help users quickly apply a predefined rebate name and default amount when creating quotes or proposal options.

<Frame>
  **Navigation**: Settings → Modules → Quotes and Invoices → Discount & Fees
</Frame>

1. Click **+ New Discount/Fee**.
2. In **Type**, select **Rebate**.
3. Enter a **Name** (up to 26 characters). This name appears on the quote or proposal.
4. Enter the **Amount**.
5. *(Optional)* In **Restrict to Custom Roles**, select the custom roles that can use the rebate. If your company uses business units, you can also limit the rebate to specific business units.
6. Click **Create**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/tnVJfzXmXdFtgJ4g/Accounting/images/SCR-20261001-nxah.png?fit=max&auto=format&n=tnVJfzXmXdFtgJ4g&q=85&s=7baa72240ddd16e5ad7be993f0435cc0" alt="SCR 20261001 Nxah" width="3408" height="1924" data-path="Accounting/images/SCR-20261001-nxah.png" />
   </Frame>

## Add rebates to a quote or proposal

Once rebates are enabled, your team can add them from the pricing summary of a quote or proposal option.

<Tabs>
  <Tab title="Web">
    1. Open or create the quote or proposal.
    2. For a proposal, open the option you want to update.
    3. Below **Total**, click **Add rebate?**.
    4. Click **Add rebate?**.
    5. Select an existing rebate template or enter a name for a one-time rebate.
    6. Enter or update the rebate amount.
    7. To add another rebate, click **Add rebate?** again and repeat the steps.
           <img src="https://mintcdn.com/zuperinc/tnVJfzXmXdFtgJ4g/Accounting/images/SCR-20261001-ocmm.png?fit=max&auto=format&n=tnVJfzXmXdFtgJ4g&q=85&s=06d2b2c6964eb8ab2ef1d1be1e486afe" alt="SCR 20261001 Ocmm" width="3386" height="1928" data-path="Accounting/images/SCR-20261001-ocmm.png" />
    8. Save the quote or update the proposal option.

    <Note>
      **Info**: To edit a rebate, hover over it and click the pencil icon. To remove a rebate, click the trash icon and confirm **Delete**.
    </Note>
  </Tab>

  <Tab title="Mobile">
    You can also add and manage rebates from the Zuper mobile app.

    1. Open the quote or proposal.
    2. Go to the pricing summary.
    3. Next to **Rebate**, tap Add.
    4. Select a rebate template or add a custom rebate with a name and amount.
    5. Tap **Add**.
    6. Save your changes.

           <img src="https://mintcdn.com/zuperinc/wKfzfZMNFOKBw0ZR/images/Rebatemobile.png?fit=max&auto=format&n=wKfzfZMNFOKBw0ZR&q=85&s=670392de97c22071847b29a81ed89020" alt="Rebatemobile" title="Rebatemobile" style={{ width:"39%" }} width="887" height="1774" data-path="images/Rebatemobile.png" />

           <Note>
             **Info**: To edit or remove a rebate: → On **Android**, tap the rebate or its pencil icon. → On **iPhone**, press and hold the rebate, or swipe it in the line item editor.
           </Note>
  </Tab>
</Tabs>

Zuper displays each rebate separately and automatically recalculates the **Net Investment**.

<Note>
  **Note**: On a quote, rebates apply to the entire document. On a proposal, each option can have its own rebates and Net Investment.
</Note>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Does a rebate reduce the amount the customer owes my business?">
    No. Rebates affect only the customer's **Net Investment**. They do not reduce the **Total**, taxes, deposit, **Amount Due**, or the amount your business collects.
  </Accordion>

  <Accordion title="Can I add more than one rebate?">
    Yes. You can add up to 10 rebates to a quote or proposal option. Zuper combines all rebate amounts when calculating **Net Investment**.
  </Accordion>

  <Accordion title="Can the combined rebate amount exceed the Total?">
    No. The combined value of all rebates cannot exceed the **Total**.
  </Accordion>

  <Accordion title="Can I add a percentage-based rebate?">
    No. Rebates support fixed amounts only.
  </Accordion>

  <Accordion title="Can I change the amount of a saved rebate template?">
    Yes. You can change the amount after adding the template to a quote or proposal option. The change applies only to that document and does not update the original template.
  </Accordion>

  <Accordion title="Does updating a rebate template change existing quotes or proposals?">
    No. Each quote and proposal keeps its own copy of the rebate after it is added.
  </Accordion>

  <Accordion title="Can I rename Net Investment?">
    Yes. In **Quotes and Invoices General Settings**, enter a custom label in **Show Total After Rebates As**. Leave the field blank to use **Net Investment**.
  </Accordion>

  <Accordion title="Why can my team see rebates but the customer cannot?">
    Customer-facing visibility is controlled separately. Turn on **Show Rebates** in the applicable Proposal Layout to display rebates and **Net Investment** on the customer proposal page and PDF.
  </Accordion>
</AccordionGroup>


## Related topics

- [Create a new proposal](/Accounting/Proposal.md)
- [Create a new quotation](/Accounting/Create_New_Quote.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.