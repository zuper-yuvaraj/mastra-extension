---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# August 2026 Updates

🆕 **Payment Method Configuration** – Payment methods can now be configured at the estimate level, controlling which options customers see at checkout.

🆕 **[Refund](https://developers.zuper.co/reference/void-a-payment) to Original Payment Method** – Payments can now be refunded back to the customer's original payment method instead of only issuing account credit.

🆕 **Financing Total Shown Before Acceptance** – The financing total, including any dealer fee, is now shown to the customer before a quote or proposal is accepted.

🆕 **Multi-Customer Organizations** – Organizations can now be associated with, or disassociated from, multiple customers. See the [Organizations](https://developers.zuper.co/reference/get-all-organizations) reference.

🆕 **Quote Expiry Validation** – Quotes are now validated against their expiry date before they can be [accepted](https://developers.zuper.co/reference/update-quote-status).

🆕 **Assisted Scheduling for Online Booking** – [Assisted Scheduling](https://developers.zuper.co/reference/assisted-scheduling) now supports configurable buffer time and applicable business hours, giving more control over auto-scheduled online bookings.

🆕 **Job Profitability Impact** – Added profitability impact tracking for fixed-price and hourly services on [jobs](https://developers.zuper.co/reference/get-job-details).

🆕 **Plivo-to-Twilio Migration Support** – Added admin tooling to migrate existing telephony subaccounts from Plivo to Twilio.

⭐ **[Create](https://developers.zuper.co/reference/create-job) & [Update Job](https://developers.zuper.co/reference/update-job) API Improvements** – Enhanced the Create and Update Job APIs with clearer validation and response handling.

⭐ **[Conversations](https://developers.zuper.co/reference/get-conversations) & [Messaging](https://developers.zuper.co/reference/get-conversation-messages) API Enhancements** – Conversation and message APIs now expose additional fields, including a `conversation_type` on conversations, email details in message responses, mailbox creator details, and module-filtered thread listings.

⭐ **[Assets](https://developers.zuper.co/reference/get-all-assets) API Field Selection** – The Assets API now supports `fields_to_select`, letting integrators request only the fields they need.

⭐ **PDF Library Improvements** – Duplicate-name validation in the PDF Library now gives clearer, context-aware messages, uploaded PDFs retain their original page size and orientation, and PDF\_IMAGE pages from the library render correctly in layouts.

⭐ **[Proposal](https://developers.zuper.co/reference/update-a-proposal) Total Visibility Toggle** – Added a toggle to hide the proposal total amount independent of the existing deposit visibility toggle.

⭐ **SMS Failure Visibility** – SMS delivery failures now surface clearer, more actionable error detail.

⭐ **[Job Listing](https://developers.zuper.co/reference/get-all-jobs) Secondary Contact Filter** – The customer filter on job listings can now match against a job's secondary contact, not just the primary one.

⭐ **[Surcharge Checkout](https://developers.zuper.co/reference/create-payment-request) Improvements** – Updated checkout page behavior when surcharges are enabled, including fixing the surcharge checkbox not being on by default.

⭐ **[SRS Product Image Sync](https://developers.zuper.co/reference/update-vendor-catalog)** – SRS supplier product images now sync into the master product image.

⭐ **[Purchase Order](https://developers.zuper.co/reference/get-purchase-orders) Mobile Filters** – The Purchase Orders API now supports additional filters required by mobile clients.

⭐ **[Invoice Listing](https://developers.zuper.co/reference/get-all-invoices) Enhancement** – Improved invoice listing responses.

⭐ **CPQ Multiple Measurements** – CPQ proposals can now use multiple measurements within the same proposal.

⭐ **Purchase Tax Reporting Columns** – Added Pre-Tax and Purchase Tax columns to relevant listings.

🐞 **[Telephony](https://developers.zuper.co/reference/get-calls) / Connect Call Handling Fixes** – Resolved multiple Twilio call-routing and call-state issues, including IVR calls not connecting, fallback routing not triggering, calls disconnecting immediately under certain CSR routing configs, call-state desync during transfers, and call-activity status mismatches between agent and customer views.

🐞 **[Vendor Catalog](https://developers.zuper.co/reference/get-vendor-catalogs) (ABC/SRS) Fixes** – Fixed several supplier catalog import issues: request timeouts under high fan-out, item-level permission errors failing whole imports, catalog rebuilds losing branch-level variant data, vendor catalog rows created for unstocked variants, and pricing shown for options not available in the branch.

🐞 **Online Booking Widget Fixes** – Fixed multiple booking widget issues, including incorrect due-date handling, notes not being created for booked jobs, team assignment not applying, and widget creation/activation failures.

🐞 **[Proposal](https://developers.zuper.co/reference/get-proposal-details) & CPQ Rendering Fixes** – Fixed multi-trade CPQ proposal layout rendering inconsistencies and mobile-friendly display issues on the proposal public page.

🐞 **[Payments](https://developers.zuper.co/reference/get-payments) & [Invoice](https://developers.zuper.co/reference/get-invoice-details) Fixes** – Fixed incorrect payment values on V2 invoices, ACH payments incorrectly showing as cancelled, and quote deposit collection issues.

🐞 **Workflow Builder Fix** – Fixed an issue preventing loop node output from connecting to a merge node.

🐞 **[Asset](https://developers.zuper.co/reference/get-all-assets) & Search Fixes** – Fixed duplicate asset records appearing in Report Builder for deleted assets, asset counts not appearing in global search, and made asset name a required field.

🐞 **Notifications & Mail Fixes** – Fixed @mention edit notifications not firing, email delivery failures from certain sender addresses, and an empty-response bug in the email template preview API affecting several companies.

🐞 **Search & [Purchase Order](https://developers.zuper.co/reference/get-purchase-orders) Fixes** – Fixed work order search not matching by customer name or order number, and Lightning Search reliability issues affecting purchase order lookups.

🐞 **[Job Status](https://developers.zuper.co/reference/update-job-status) Transition Fix** – Fixed a status-dependency validation issue that could block job status transitions.

🐞 **Work Order Fixes** – Fixed Work Order email/PDF generation issues.