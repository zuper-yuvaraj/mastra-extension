---
title: "Custom financing configuration"
source: https://docs.zuper.co/Settings/Modules/Quotes-Invoices/Financing.md
fetched_at: 2026-10-06T13:30:13.429Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Custom financing configuration

Zuper allows you to add and manage your own financing plans based on the providers with which your business is registered. Once these plans are configured in Zuper, they can be included in proposal templates, allowing customers to compare upfront payments with available financing options directly during the quoting process.

<iframe className="w-full aspect-video rounded-xl" src="https://drive.google.com/file/d/1056e6gmp5bnr2uoqjXNPfuiYOL63wxZ_/preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**Prerequisite**: Ensure that the **Financing** feature is enabled for your organization. If it is not enabled, contact our support team at [support@zuper.co](mailto:support@zuper.co) to have it enabled.

## Adding a Financing Plan

1. Navigate to the **Settings** module from the left navigation menu and select **Module** → **Quotes & Invoice** → **Proposal Templates and Service Packages** → **Financing Options**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Finan-01.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=0bc064beffb8149ffb2a561ed3d698b4" alt="Finan 01 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/Finan-01.png" />
   </Frame>
2. On the **Financing Options** page, click **New Provider**.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Finan-02.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=a8822f3df019339d2aab6ba14fb19293" alt="Finan 02 Pn" width="1605" height="523" data-path="Settings/Modules/Quotes-Invoices/images/Finan-02.png" />
   </Frame>
3. Enter the provider details, including:
   1. **Provider Name**
   2. **Logo** (optional, recommended for branded display)
   3. **Plans** you are approved to offer through that provider
   4. <Badge color="green" iconType="solid">New</Badge> (Optional) Check **Additional Charges** if your business needs to apply an extra charge on top of the financed amount.
      Once enabled, select a **Charge Type** from the dropdown:
      * **Dealer Fee**: A separate, taxable charge that appears below the Sub-Total on the transaction. Customers can see this amount.
      * **Dealer Markup**: A financing margin that is embedded into the Unit Selling Price of every line item. Customers see only the final adjusted price, not the dealer markup charge.
4. Add multiple plans per provider by clicking the **+Add Plan** button.
5. Click the **copy** icon to duplicate a plan and make minor changes.
6. Click the **red trash can** icon to delete a plan from this provider.
7. Once your plans are added, click **Create**.
   <img src="https://mintcdn.com/zuperinc/nGKFx4xKaI-2XHmQ/images/additionalcharge.png?fit=max&auto=format&n=nGKFx4xKaI-2XHmQ&q=85&s=a3d09ad5aec43c095ece82ece67ee29c" alt="Additionalcharge" width="1920" height="912" data-path="images/additionalcharge.png" />

<Accordion title="How Each Charge Type Works">
  #### Dealer Fee

  A Dealer Fee appears as a separate line item below the Sub-Total on the  transaction. It is taxable. Customers can see this charge clearly on the document.

  **Example:** If your Sub-Total is \$1,000 and you apply a \$50 Dealer Fee, the taxable amount becomes \$1,050.

  #### Dealer Markup

  A Dealer Markup embeds a financing markup directly into the Unit Selling Price of every line item. Zuper calculates the margin on top of each line item's unit cost to arrive at the final selling price. Customers see only the adjusted selling price; the dealer markup charge is not shown to them.

  **Example:** If the unit cost of a line item is \$500 and the Dealer Markup is 5%, the Unit Selling Price shown to the customer is \$525.

  **Important behaviors to know:**

  If you update the **Unit Purchase Price / Unit Cost** of a line item, Zuper automatically recalculates the selling price using the new cost and the original Dealer Markup percentage. The Dealer Markup percentage remains unchanged.
</Accordion>

### Editing and Managing Providers

You can update or manage financing plans at any time by hovering over the plan:

* **Edit** – Change provider name, logo, or financing terms.
* **Delete** – Remove inactive or expired plans.
  <Note>
    **Note**: Changes apply only to newly created proposals. Existing proposals will not be updated retroactively.
  </Note>

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Finan-04.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=13ac41b48fdf0ec85926cbd060607d9e" alt="Finan 04 Pn" width="1321" height="449" data-path="Settings/Modules/Quotes-Invoices/images/Finan-04.png" />

## Enabling Financing in Proposal Templates

Once financing providers are configured, you can enable financing for individual package options. This allows customers to compare cash and financed payment options directly within the proposal.

1. Open the **Proposal Template** you want to edit.
2. Navigate to **Package Configuration**.
3. Select a package options tab, such as **Good**, **Better**, or **Best**.
4. Scroll to the bottom of the page to locate the **Financing** section for the selected option.
5. Toggle **Enable Financing** to **ON**.
6. Click **Select Financing** to choose which provider and plan to display for this option.
   <img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/CPQ-07.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=9785690fd933d2c79c411ec454c8c220" alt="CPQ 07" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/CPQ-07.png" />

When your team creates a new proposal, these plans appear automatically, allowing customers to compare payment options during the quoting process easily.

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Q: How is the Financing Markup applied?">
    When a customer selects a financing plan where the fee is configured, Zuper automatically adds the financing margin at the line-item level. The margin is calculated on top of each line item’s unit cost to determine the final selling price. *Example:* If the unit cost is \$500 and a 5% financing margin is configured, the selling price becomes \$525.
  </Accordion>

  <Accordion title="What happens if I change the unit cost of a line item after selecting a financing plan?">
    Zuper will automatically recalculate the sell price using the new unit cost and the original financing margin percentage or multiplier. The margin value itself remains unchanged.
  </Accordion>

  <Accordion title="Where does the Dealer Fee appear in a transaction? ">
    The Dealer Fee is shown as a separate line item below the Sub-Total. It is taxable, meaning applicable taxes are calculated on the total that includes the Dealer Fee.
  </Accordion>

  <Accordion title="Is the Additional Charge applied if the customer chooses to pay cash?">
    No. Additional charges (Markup or Dealer Fee) are applied **only** when the customer selects a financing option.
  </Accordion>

  <Accordion title="How can an Admin or Team Lead view the Dealer Markup after a proposal is accepted?">
    Once the customer accepts a financing plan and the proposal or quote is converted to an invoice or Job, you can see the Dealer Markup field on the right side of the **Edit Line Item dialog**.
  </Accordion>
</AccordionGroup>

\\

\
\\


## Related topics

- [Custom financing configuration](/Zuper_for_Roofing/Financing.md)
- [Wisetack](/Integrations/Accounting_and_payments/Zuper_Wisetack.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.