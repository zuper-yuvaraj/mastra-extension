---
title: "Work Order Status"
source: https://docs.zuper.co/Purchasing/Work%20Orders/Work%20order%20status.md
fetched_at: 2026-10-06T13:29:56.791Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Work Order Status

A work order tracks every step of work you send to a subcontractor — from the moment you create it to the moment you close it. Each status tells you exactly where the work stands and what action to take next. Use this article to understand every status in the lifecycle, the actions available at each stage, and how to read the full status history.

<Frame>
  **Navigation**: *Purchasing → Purchase Orders → \[Work order name]*
</Frame>

## The work order lifecycle

A work order moves through the following stages in order:

**Draft → Submitted → Accepted / Rejected (Internally)→ Sent to Subcontractor → Subcontractor Accepted / Rejected → Work Completed → Paid → Closed / Canceled**

<Note>
  The **Approved** and **Subcontractor Accepted** statuses appear only when specific settings are enabled in your Purchasing configuration. See [How Purchasing settings affect work orders](#how-purchasing-settings-affect-service-orders) below for details.
</Note>

***

## Navigating to a work order

1. Select **Purchasing** from the left navigation menu and choose **Purchase Orders**.
2. Select any work order from the listing page to open its detail page.
3. The status badge appears at the top left of the detail page, below the WO number.

The left panel on the detail page shows two tabs — **Navigation** and **Status History**. Select **Status History** at any time to see a complete audit trail of every status change, including who made the change and any attachments or remarks recorded at that stage.

<Frame>
  <img src="https://mintcdn.com/zuperinc/G7_I6DjL-__EMqM2/images/soc16.png?fit=max&auto=format&n=G7_I6DjL-__EMqM2&q=85&s=5c67c91dd38692f2069a766ee192fbed" alt="Soc16" width="1920" height="878" data-path="images/soc16.png" />
</Frame>

<Note>
  When a work order moves to **Send to Subcontractor** status, Zuper sends the subcontractor a PDF of the work order by email. This PDF includes the full work order details — line items, measurements, and any reference photos you chose to include.
</Note>

***

## How Purchasing settings affect work orders

Two settings in your Purchasing configuration control how a work order moves through the workflow. Your administrator can find them at **Settings → Purchasing → General Settings → Purchase Orders**.

| Setting | Enabled | Disabled |
| - | - | - |
| **Require Vendor Approval?** | The subcontractor receives an email with **Accept** and **Reject** buttons. The WO moves automatically to Subcontractor Accepted or Subcontractor Rejected based on their response. | The email is sent without **Accept** or **Reject** buttons. The Subcontractor Accepted step is skipped. The WO moves directly to Work Completed when you are ready to record completion. |
| **Automatically Send PO to Vendor after Approval?** | Zuper sends the work order to the subcontractor automatically as soon as it reaches Approved status. The **Send to Subcontractor** button does not appear — no manual action is needed. | You must send the work order manually. Select **Send to Subcontractor** on the detail page to open the send dialog and dispatch the WO. |

<Note>
  If you are unsure which settings your organization uses, check with your administrator before sending a work order. To update these settings, go to **Settings → Purchasing → General Settings** and select the **Purchase Orders** tab.
</Note>

***

## Status 1: Draft

When a work order is in Draft, you have created it but have not yet submitted it for review. The subcontractor cannot see it at this stage — it stays internal until you are ready to move it forward.

**Available actions**

* **Mark as Submitted** — Moves the WO to the next stage. This button appears in the top-right corner of the detail page.
* **More Actions → Clone** — Creates a duplicate of the work order.
* **More Actions → Canceled** — Cancels the work order without deleting it, keeping the record for your audit trail.
* **More Actions → Delete WO** — Permanently removes the work order. This action cannot be undone.

<Frame>
  <img src="https://mintcdn.com/zuperinc/ERa7lra-_k8iKeFl/images/crwork6-1.png?fit=max&auto=format&n=ERa7lra-_k8iKeFl&q=85&s=27f8e443526ebff1e7d39bbe84ae67ff" alt="Crwork6 1" width="1920" height="878" data-path="images/crwork6-1.png" />
</Frame>

<Warning>
  **Delete WO** is permanent. If you might need to reference this work order later, use **More Actions → Canceled** instead to keep the record.
</Warning>

***

## Status 2: Submitted

Once you submit the work order, it enters the approval stage. What happens next depends on whether your organization has an approval hierarchy configured.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder25submit.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=825e39ab8d83565edd076b401c22e448" alt="Workorder25submit" width="1920" height="878" data-path="images/Workorder25submit.png" />
</Frame>

* **If an approval hierarchy is configured** — The WO waits for sign-off from the designated approver. A banner on the detail page shows whose approval is pending. The approver selects **Mark as Approved** to move the WO forward.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder4-1.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=dbd9f7873f23f91b9596dac614076697" alt="Workorder4 1" width="1897" height="736" data-path="images/Workorder4-1.png" />
</Frame>

* **If no approval hierarchy is configured** — The **Mark as Approved** step does not appear. The next available action is to send the WO directly to the subcontractor.

<Note>
  If your organization does not use an approval hierarchy, the **Mark as Approved** button does not appear. The WO moves directly from Submitted to the sending workflow.
</Note>

***

## Status 3: Approved

Your approver has reviewed and signed off on the work order. You can now send it to the subcontractor.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder04.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=153c5d5789222f4fae3b83cd6dd580fa" alt="Workorder04" width="1897" height="736" data-path="images/Workorder04.png" />
</Frame>

<Note>
  If the **Automatically Send PO to Vendor after Approval?** toggle is enabled in your Purchasing settings, Zuper sends the work order to the subcontractor automatically when it reaches Approved status. The **Send to Subcontractor** button does not appear — the WO moves to Sent to Subcontractor without any action from you.
</Note>

<Note>
  The **WO Sent Date** field on the detail page records the date the WO was dispatched. Zuper populates this automatically when the WO reaches Sent to Subcontractor status.
</Note>

***

## Status 4: Send to subcontractor

Once Zuper sends the work order, the **WO Sent Date** appears on the details panel. Check the **Awaiting Approval From** field to confirm which subcontractor is expected to respond.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder5.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=e49699a5a7e4bd6cdd7e2aad3e77cab6" alt="Workorder5" width="1901" height="740" data-path="images/Workorder5.png" />
</Frame>

### Send the work order to the subcontractor

1. Select **Send to Subcontractor**. The send dialog opens.
2. Confirm or enter the subcontractor's email address in the **To** field.
3. Select the items to include: **Measurements**, **Job site photos**, and **Parts and products**.
4. Confirm **Send as PDF** is selected.
5. Select **Send**. The WO moves to Sent to Subcontractor and the subcontractor receives the PDF by email.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorderemailsend.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=492b1cd5546bce80fa18a67f868fe176" alt="Workorderemailsend" width="1920" height="878" data-path="images/Workorderemailsend.png" />
</Frame>

What happens next depends on your **Require Vendor Approval**? setting:

* If **Require Vendor Approval is enabled** — The subcontractor receives an email with an Accept or Reject button. When they respond, the WO moves automatically to Subcontractor Accepted or Subcontractor Rejected.
* If **Require Vendor Approval is disabled** — The email is sent but does not include Accept or Reject buttons. The WO moves directly to Work Completed when you are ready to record completion. The Subcontractor Accepted step is skipped.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder18.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=b8650b0847a98f2bf63e0956f5444ce8" alt="Workorder18" width="1920" height="878" data-path="images/Workorder18.png" />
</Frame>

***

## Status 5a: Subcontractor accepted

The subcontractor has accepted the work order through the email link. Zuper updates this status automatically when the subcontractor selects **Accept** and signs the work order on the subcontractor portal — no action is needed from you.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder04.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=153c5d5789222f4fae3b83cd6dd580fa" alt="Workorder04" width="1897" height="736" data-path="images/Workorder04.png" />
</Frame>

<Note>
  If the **Automatically Send PO to Vendor after Approval?** toggle is enabled in your Purchasing settings, Zuper sends the work order to the subcontractor automatically when it reaches Approved status. The **Send to Subcontractor** button does not appear — the WO moves to Sent to Subcontractor without any action from you.
</Note>

<Note>
  The **WO Sent Date** field on the detail page records the date the WO was dispatched. Zuper populates this automatically when the WO reaches Sent to Subcontractor status.
</Note>

***

## Status 5b: Subcontractor rejected

The subcontractor has declined the work order. The WO returns to your team for review.

**Available actions**

* **Edit the WO** — Update the work order details and resend it to the subcontractor.
* **More Actions → Clone** — Create a new work order based on this one and assign it to a different subcontractor.
* **More Actions → Canceled** — Cancel the WO if the work is no longer needed.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder17.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=2ae31c96808fb59bdbc8509ebe491019" alt="Workorder17" width="1920" height="878" data-path="images/Workorder17.png" />
</Frame>

***

## Status 6: Work completed

The subcontractor has finished the work and you are ready to record completion. A dialog opens where you can attach the subcontractor's invoice before confirming.

### Record work completion

1. Select **Mark as Work Completed** in the top-right corner of the detail page. A dialog opens.
2. Select **Click to upload file** to attach the subcontractor's invoice (optional). Supported formats: JPEG, PNG, PDF. Maximum file size: 20 MB.
3. Select **Mark as Work Completed** in the dialog to confirm.

The WO moves to Work Completed status. Any invoice you attached is recorded in the **Status History** tab. The **Mark as Paid** button appears in the top-right corner.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder19.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=5d8e0bcb9767989bfaafbf3f7b601635" alt="Workorder19" width="1920" height="878" data-path="images/Workorder19.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder20.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=f280a4b43e3035be3755881fbf9d63d4" alt="Workorder20" width="1920" height="878" data-path="images/Workorder20.png" />
</Frame>

***

## Status 7: Paid

Once you mark the work order as paid, the record is locked and no further changes are permitted.

### Record payment

1. Select **Click to upload file** to attach a copy of the payment confirmation or invoice (optional). Supported formats: JPEG, PNG, PDF. Maximum file size: 20 MB.
2. Enter any payment notes or reference details in the **Remarks** field.
3. Select **Mark as Paid** to confirm payment.

<Warning>
  Once you mark a work order as paid, the record is locked and no further changes are permitted. Review all details carefully before selecting **Mark as Paid**.
</Warning>

The WO status updates to Paid. The **Close WO** button appears in the top-right corner. All invoices and payment remarks are visible in the **Status History** tab.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder21.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=91c0087e7bc2cc9ada756fbd5238292f" alt="Workorder21" width="1920" height="878" data-path="images/Workorder21.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder22.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=28f3768310b79ae4d76945ec020f2549" alt="Workorder22" width="1920" height="878" data-path="images/Workorder22.png" />
</Frame>

## Status 8: Closed

With payment recorded, the work order has reached its final step. Closing it removes the WO from your active workload and permanently locks the record.

### Close a work order

1. Select **Close WO** in the top-right corner of the detail page.
2. Confirm the action when prompted.

The WO status updates to Closed. No further actions are available.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder23.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=6b43edc1262923c76c7104b822d3e51d" alt="Workorder23" width="1920" height="878" data-path="images/Workorder23.png" />
</Frame>

<Note>
  Closing is final. If you need to revisit the work or engage the same subcontractor again, use **More Actions → Clone** to create a new work order based on this one before closing it.
</Note>

***

## Status history

Zuper records every status change automatically. To view the full audit trail:

1. Open the work order detail page.
2. Select the **Status History** tab in the left panel.

Each entry shows the status name, the date and time of the change, and the name of the user who made the change. It also includes any remarks entered at that stage and any attached invoice or document, with a download link.

<Frame>
  <img src="https://mintcdn.com/zuperinc/1quziviSU9unsgMo/images/Workorder24st.png?fit=max&auto=format&n=1quziviSU9unsgMo&q=85&s=428c4b51e74d49f4b458deda77de355a" alt="Workorder24st" width="1920" height="878" data-path="images/Workorder24st.png" />
</Frame>

***

## Work order status at a glance

| Status | What it means | Primary action |
| - | - | - |
| Draft | Created but not yet submitted | Mark as Submitted |
| Submitted | Awaiting internal approval (if configured) | Mark as Approved or Send to Subcontractor |
| Approved | Approved internally | Send to Subcontractor |
| Sent to subcontractor | Dispatched to subcontractor | Awaiting subcontractor response |
| Subcontractor accepted | Subcontractor confirmed via portal | Mark as Work Completed |
| Subcontractor rejected | Subcontractor declined | Edit, clone, or cancel |
| Work completed | Work finished | Mark as Paid |
| Paid | Payment recorded | Close WO |
| Closed | Lifecycle complete | None |
| Canceled | Canceled before completion | None |

***

## FAQs

<AccordionGroup>
  <Accordion title="What happens if I skip the Approved status?">
    If your organization does not have an approval hierarchy configured, the Approved status does not appear in the workflow. The SO moves directly from Submitted to the sending workflow without requiring a separate approval step. To set up an approval hierarchy, go to **Settings → Modules → Purchasing → General Settings**.
  </Accordion>

  <Accordion title="Can I edit a work order after it has been submitted?">
    Yes. You can edit a work order from Draft through Subcontractor Accepted or Subcontractor Rejected. Once the WO moves to Work Completed, the record is locked — only existing line items can be edited at that stage, and no other changes are allowed.
  </Accordion>

  <Accordion title="Can I undo the Mark as Paid action?">
    No. Once you confirm **Mark as Paid**, the record is locked, and no further changes are permitted. Review all details carefully before confirming payment.
  </Accordion>

  <Accordion title="Where can I find invoices attached during the workflow?">
    All attachments — including invoices added at the Work Completed and Paid stages — are available in the **Status History** tab on the work order detail page. Select the file name to download the attachment.
  </Accordion>

  <Accordion title="What if the subcontractor does not respond or rejects the work order?">
    If the subcontractor rejects the WO, select **More Actions → Mark as Subcontractor Rejected** to record the rejection and preserve the audit trail.\
    \
    To reassign the work, select **More Actions → Clone** and assign the new WO to a different subcontractor.\
    \
    To address the subcontractor's concerns, edit the existing WO and resend it.\
    \
    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

***

## Related articles

* [Creating work orders](/Purchasing/Work%20Orders/Creating%20work%20orders)
* [Subcontractors](/Purchasing/Work%20Orders/Sub-Contractors/Sub-Contractors)
* [Creating a purchase order](/Purchasing/Purchase-Orders/Creating-purchase-order)
* [Understanding purchase order status](/Purchasing/Purchase-Orders/Purchase-order-status)


## Related topics

- [Creating Work Orders](/Purchasing/Work Orders/Creating work orders.md)
- [Accept or Reject a Work Order](/Purchasing/Work Orders/Accept reject work order.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.