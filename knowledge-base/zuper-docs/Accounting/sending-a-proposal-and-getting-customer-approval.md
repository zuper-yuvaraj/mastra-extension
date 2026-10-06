---
title: "Sending and Getting Customer Approval"
source: https://docs.zuper.co/Accounting/sending-a-proposal-and-getting-customer-approval.md
fetched_at: 2026-10-06T13:29:50.550Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Sending and Getting Customer Approval

Give your customers a simple, self-serve experience where they can review your proposal online, choose an option, and approve it with a digital signature. You'll be notified the moment they approve, decline, or request a change so you can move on to the next step.

<Warning>
  **Before you begin:**\
  The settings in **Settings → Modules → Quotes & Invoices → Quote and Invoice General Settings → Quote tab** control the proposal approval experience. Ensure those are configured correctly before sending. Refer to [Settings](/Settings/Modules/Quotes-Invoices/Quotes-Invoices-Settings#general-tab).
</Warning>

## Sending the proposal

The first step is to send the proposal by email to the customer. Sending moves the proposal status from **Draft** to **Sent**, and that is what activates the approval flow for your customer.

To send a proposal, open the **Proposal Details** page and click **Send** in the top right corner. If you are still building the proposal, you can click **Save & Send** instead. The **Send** dialog opens.

<Frame>
  <img src="https://mintcdn.com/zuperinc/pvpN-SUjenLs0go8/images/approval-01.png?fit=max&auto=format&n=pvpN-SUjenLs0go8&q=85&s=7e7ddd169828291c1d4934b589101b64" alt="Approval 01" width="1899" height="836" data-path="images/approval-01.png" />
</Frame>

Review the fields and click **Send**.

<Tip>
  **Pro Tip:** When emailing a proposal, you can add multiple recipients by separating each address with a comma in the CC and BCC fields. You can also customize the **subject line** and **message body** before sending.
</Tip>

<Frame>
  <img src="https://mintcdn.com/zuperinc/pvpN-SUjenLs0go8/images/approval-02.png?fit=max&auto=format&n=pvpN-SUjenLs0go8&q=85&s=7bfd4abf5d559dcf812b96edc5d4a1b6" alt="Approval 02" width="1920" height="869" data-path="images/approval-02.png" />
</Frame>

The proposal status changes from **Draft** to **Sent**.

Your customer receives an email with the proposal attached as a PDF and a **"View to Approve Proposal"** link that takes them to the interactive approval page.

## Sharing the proposal link

If you want to share the proposal through WhatsApp or any other channel outside Zuper's email system, you can use the **Share Links**. Click the **copy icon** to copy the URL to your clipboard, the **WhatsApp icon** to share the link directly via WhatsApp, or the **open in browser icon** to preview exactly what your customer will see.

Keep in mind that sharing the link does not change the proposal status. The customer approval flow is only active once you have sent the proposal by email and the status is **Sent**.

## What your customer sees

When your customer opens the **"View to Approve Proposal"** link from their email, they land on a branded proposal page with your company logo, the proposal title, their billing and contact details, and all package options with full pricing.

From here, your customer can take one of three actions: click **Review & Sign** to select a package and approve, click **Request Change** to send a change request back to your team, or click **Decline** to decline the proposal.

<Frame>
  <img src="https://mintcdn.com/zuperinc/pvpN-SUjenLs0go8/images/approval-03.png?fit=max&auto=format&n=pvpN-SUjenLs0go8&q=85&s=e99ea49bebb233b239fe13badf3c0b3a" alt="Approval 03" width="964" height="865" data-path="images/approval-03.png" />
</Frame>

If **Notify Created User on Status Updates?** is set to **Yes** in settings, you'll receive a notification as soon as your customer takes any of these actions.

### How does your customer approve the proposal

When your customer clicks **Review & Sign**, the **Complete Your Signature** panel opens on the right side of the screen. Here's what they do:

<Frame>
  <img src="https://mintcdn.com/zuperinc/pvpN-SUjenLs0go8/images/approval-04.png?fit=max&auto=format&n=pvpN-SUjenLs0go8&q=85&s=324fd842452ff9645a55c9134c9b32fb" alt="Approval 04" width="340" height="629" data-path="images/approval-04.png" />
</Frame>

#### Select a package

Your customer sees all available options; for example, **Basic**, **Advanced**, or **Installation Package** with pricing for each.

If you enabled financing for a package in the proposal template, that option shows a **monthly payment amount and term** (for example, "\$41.24/month for 10 years") alongside the cash price.

Once they pick an option, the **Item Summary** updates instantly with the line items, discounts, taxes, transaction fees, and total for that package.

#### Choose a payment method

Under **Payment Method**, your customer picks how they want to pay:

* **Cash Payment** - Pay the full amount upfront
* **Financing** - Monthly payments through your financing provider you configured, with the rate, term, and an "as low as" comparison shown.

<Note>
  **Note:** Financing only shows up if **Enable Financing?** is turned on in settings **and** financing is enabled for that package in your proposal template.
</Note>

Once the proposal is **Approved**: If **Auto-convert Quote to Invoice?** is set to *Yes, Save as Draft* or *Yes, Save and Send*. Zuper creates an invoice from the approved proposal automatically.


## Related topics

- [Dashboard 101: Getting started](/Zuper_Dashboard/Dashboard101-Gettingstarted.md)
- [Getting started with your Zuper roofing trial](/Zuper_for_Roofing/Getting-started-with-your-Zuper-roofing-trial.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.