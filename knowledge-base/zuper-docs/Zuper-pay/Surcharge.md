---
title: "Surcharge Fee"
source: https://docs.zuper.co/Zuper-pay/Surcharge.md
fetched_at: 2026-10-06T13:29:58.846Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Surcharge Fee

> Pass credit card processing fees to customers

Every credit card payment comes with a processing fee, which is typically absorbed by your business. The **Surcharge Fee Pass-Through** feature in Zuper allows you to pass that fee on to the customer instead.

Configure your surcharge rate once in Settings, and Zuper automatically applies the surcharge to eligible credit card payments for invoices and quote deposits. At checkout, Zuper calculates the surcharge amount and displays it as a separate line item so customers can see the additional charge before completing their payment. If needed, you can disable the surcharge for an individual invoice or quote without affecting other transactions.

Zuper has partnered with **Yeeld**, a surcharge compliance service, to ensure surcharges are calculated accurately and applied in accordance with card brand rules and state regulations.

<Frame>
  <img src="https://mintcdn.com/zuperinc/wkTpYEGKONH5ZQ_e/images/surcharge-04.jpeg?fit=max&auto=format&n=wkTpYEGKONH5ZQ_e&q=85&s=9177466a3d3584765f10daaedd980b04" alt="Surcharge 04" width="1760" height="1414" data-path="images/surcharge-04.jpeg" />
</Frame>

<Note>
  This feature is available for payments processed through **Zuper Pay** only.
</Note>

## Before You Begin

* Your account is enabled for **Zuper Pay.**
* You have **Admin** permissions to access Surcharge Settings.
* You have reviewed the [Prohibited States](#prohibited-states) section below. Surcharging is not allowed in every U.S. state. Check with your legal team before enabling this feature.
* Surcharges apply to **credit card payments** only. Debit and prepaid cards are not eligible.
* The surcharge you configure does not exceed the lower of **3%** or your total average cost of credit card acceptance.

<Check>
  **Important**: The ZIP code in the customer's or organization's billing address, the card information, and your business's operating state are all used to determine surcharge eligibility and the applicable rate. Confirm these are entered accurately before processing a payment.
</Check>

## How your surcharge rate is determined

Zuper does not always apply the surcharge rate you configure. For each credit card transaction, Zuper compares the following rates and applies the lower one:

* The surcharge rate you configured for the [transaction amount](/Zuper-pay/Surcharge#setting-up-surcharge-rules).
* The maximum surcharge rate permitted by Yeeld's compliance service for the card and billing location.

To determine the permitted rate, Zuper sends the card type, your business's operating state, and the customer's billing ZIP code to Yeeld. Yeeld then returns whether a surcharge can be applied and, if so, the maximum surcharge rate allowed for that transaction.

As a result, the surcharge applied to a transaction may be lower than your configured rate and may not fully offset your actual credit card processing costs.

## Setting up Surcharge Rules

Start by setting up your surcharge rules in Settings. This is a one-time configuration that tells Zuper how much to charge based on the invoice or quote total. You can define tiered ranges so smaller invoices carry a lower fee than larger ones.

1. Navigate to the **Settings** module from the left navigation menu.
2. Select **Zuper Pay.**
3. Select **Surcharge Settings.**
   <Frame>
     <img src="https://mintcdn.com/zuperinc/wkTpYEGKONH5ZQ_e/images/surcharge-01.png?fit=max&auto=format&n=wkTpYEGKONH5ZQ_e&q=85&s=2b85afceb5742bdcf73afd833db24235" alt="Surcharge 01" width="3392" height="1774" data-path="images/surcharge-01.png" />
   </Frame>
4. Toggle **Enable Surcharge Fee** to **On.** This is the organization-wide setting. Once it's on, surcharging is enabled by default on every invoice and quote deposit. See "**Turning off the surcharge for one invoice or quote**" below to override this on a single transaction.
5. Read and accept the consent form to activate the feature.
6. In the **Select a State** field, choose the state of your business operation.

<Warning>
  **Warning**: Some states prohibit or restrict credit card surcharging.
</Warning>

7. Under **Define Surcharge Fee Range**, set up your tiers:
   1. Enter the **Minimum Amount.**
   2. Enter the **Maximum Amount.**
   3. Enter the **Surcharge Percentage** for that range.
   4. Click **+ Add New Range** to add additional tiers and repeat.
      <Frame>
        <img src="https://mintcdn.com/zuperinc/wkTpYEGKONH5ZQ_e/images/surcharge-02.png?fit=max&auto=format&n=wkTpYEGKONH5ZQ_e&q=85&s=f60c1bbea7eebfc572d490aa3395564a" alt="Surcharge 02" width="3398" height="1558" data-path="images/surcharge-02.png" />
      </Frame>
8. Click **Save.**

<Warning>
  **Warning**: If a transaction total falls outside your configured ranges, no surcharge will be applied even if the feature is enabled. Ensure your tiers cover the invoice and quote amounts you expect to process.
</Warning>

## Turning off the surcharge for one invoice or quote

Once you turn on the organization-level setting above, the surcharge applies automatically to every invoice and quote deposit. You do not need to turn it on per transaction.

If you want to waive the surcharge for a specific transaction, open the invoice or quote, scroll to the bottom of the page, and uncheck **Enable Surcharge Fee.** This affects only that transaction. Your organization-wide setting stays unchanged, and the surcharge still applies to every other invoice and quote.<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/lYLhDhyjmHwwhvkn/images/ienablesurcharge.png?fit=max&auto=format&n=lYLhDhyjmHwwhvkn&q=85&s=07dfe23e9b651ac30ec86e774327a1e9" alt="Ienablesurcharge" width="2321" height="1312" data-path="images/ienablesurcharge.png" />
</Frame>

<Note>
  **Note**: When a surcharge is configured in Settings, it applies automatically to all automatic payments. See the [Automatic Payments](#automatic-payments) section below for compliance requirements.
</Note>

## How the surcharge appears on a payment

When a customer pays an invoice or quote by credit card, Zuper calculates the surcharge using the rules described above and adds it to the payment total.

For example, suppose you have configured a **3% surcharge** for transactions between **\$1,001 and \$2,000**, and Yeeld determines that the full **3%** can be applied. If a customer pays a **\$2,000 invoice** by credit card, Zuper adds a **\$60.00 surcharge**, displays it as a separate line item, and presents a total payment amount of **\$2,060.00** for customer approval.

If Yeeld determines that the maximum allowable surcharge for the transaction is **2%**, Zuper applies a **\$40.00 surcharge** instead of **\$60.00**, even though your configured surcharge tier is **3%**.

### Payment Method Considerations

Surcharges apply to credit card payments only. If the customer pays with a debit or prepaid card, the surcharge is automatically removed, and the customer is charged the original invoice amount only.

Zuper supports surcharge collection for both card-present and card-not-present credit card transactions.

* **Card Present**
* **Card Not Present**

While the customer sees the surcharge added to their payment total, Zuper Pay calculates its own processing fee separately based on the payment method used and applies it to the full amount collected, including the surcharge. In the example above, the customer pays \$2,060.00, and Zuper Pay calculates its processing fee on that full \$2,060.00 before settling the remaining funds to your account.

<Tip>
  Contact our support team at [support@zuper.co](mailto:support@zuper.co) to find out the processing fee that applies to your account.
</Tip>

## Automatic Payments

Once you configure a surcharge in **Settings**, Zuper automatically applies it to eligible automatic credit card payments. You don't need to configure the surcharge separately for each transaction.

<Warning>
  **Warning**: Before enabling surcharges for automatic payments, notify your customers at least **30 days in advance** that a surcharge will apply to their payments. This advance notice is required for compliance with card brand rules.
</Warning>

If a customer chooses not to continue with automatic payments, you can remove their saved card from the auto-charge setup. Zuper does not automatically remove saved cards based on customer responses.

## Processing Refunds

When you refund a transaction that included a surcharge, the surcharge is refunded in proportion to the refund amount.

* **Full refund:** The customer receives the full amount back, including the surcharge.
* **Partial refund:** The surcharge is partially refunded in proportion to the amount refunded.

## Prohibited States

Surcharging is governed at the federal, card network, and U.S. state levels. Visa, Mastercard, AMEX, and Discover impose their own requirements, including a cap of the lower of 3% or the merchant's cost of acceptance. At the state level, some states prohibit or restrict surcharging entirely, while most allow it with conditions such as caps and disclosure requirements. Rules vary and may change.

Zuper automatically detects the service address ZIP code and disables the surcharge for restricted locations.

| State | Status |
| - | - |
| Maine | Prohibited |
| Massachusetts | Prohibited |
| Connecticut | Prohibited |
| California | Restrictions may apply |
| Mississippi | Restrictions may apply |
| New York | Restrictions may apply |

<Warning>
  This list is subject to change. Rules vary by state and may change; for example, Oklahoma updated its surcharging rules in 2025. Always verify current state laws with your legal team before enabling surcharges.
</Warning>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can the surcharge go above 3%?">
    No. The surcharge is capped at the lower of 3% or your total average cost of credit card acceptance. Zuper's surcharge compliance service calculates the maximum allowable rate for each transaction based on card brand rules and state regulations. Whichever rate is lower applies.
  </Accordion>

  <Accordion title="If I update my surcharge settings, will existing invoices be affected?">
    No. Your changes only apply to transactions processed after you save. To apply a new surcharge to an older invoice, void or delete it, and create a new one.
  </Accordion>

  <Accordion title="Will the customer be prompted to confirm the surcharge before paying?">
    Yes. Regardless of the payment method, the customer sees a **Surcharge Notice** before the transaction is finalised. They must confirm before the payment is processed.
  </Accordion>

  <Accordion title="Will the customer see the surcharge before they pay in the transaction?">
    Yes. The surcharge appears as a separate line item on the payment.
  </Accordion>

  <Accordion title="What happens to the surcharge if I issue a full refund?">
    The full amount is refunded to the customer, including the surcharge.
  </Accordion>

  <Accordion title="What happens to the surcharge on a partial refund?">
    Zuper refunds the surcharge in proportion to the total amount refunded, not just the invoice portion. For example, if you refund 50% of the invoice, 50% of the surcharge is also refunded.
  </Accordion>

  <Accordion title="Can I waive the surcharge for one customer without changing my settings?">
    Yes. Open the invoice or quote, scroll to the bottom, and uncheck **Enable Surcharge Fee.** The surcharge will not apply to that transaction, and your settings remain unchanged for all other transactions.
  </Accordion>

  <Accordion title="Do I need to notify my customers who make automatic payments?">
    Yes. You must notify your customers at least 30 days in advance before surcharges are applied to their automatic payments. This is a card brand compliance requirement.
  </Accordion>

  <Accordion title="Will the surcharge I collect always cover my processing fee?">
    Not always. The surcharge is capped independently of your actual processing cost, so the rate allowed for a transaction can be lower than what you configured, and the amount collected may not fully offset your processing fee for that transaction.
  </Accordion>
</AccordionGroup>


## Related topics

- [Setup Zuper Pay](/Zuper-pay/Settings.md)
- [Setup the integration](/Integrations/Accounting_and_payments/Zuper_QuickBooks_Online.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.