---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# May 2026 Updates

🆕 **Gallery Photo Comments** — Added the ability for users to post comments directly on gallery photos; the same comment thread now surfaces across gallery views, notes, and other modules.

🆕 **Gallery Bulk Delete & Recover** — Added bulk <Anchor label="delete" target="_blank" href="https://developers.zuper.co/update/reference/bulk-delete-attachments">delete</Anchor> and <Anchor label="recover" target="_blank" href="https://developers.zuper.co/update/reference/bulk-recover-attachments">recover</Anchor> endpoints for job attachments in Notes & Attachments, with soft-delete semantics and activity log entries that include each attachment's name for a complete audit trail.

🆕 **Gallery Checklist & Inspection Image Copy** — Added support for copying <Anchor label="checklist" target="_blank" href="https://developers.zuper.co/update/reference/checklists">checklist</Anchor> and <Anchor label="inspection" target="_blank" href="https://developers.zuper.co/update/reference/asset-inspection-forms">inspection</Anchor> form images to albums — a company\_default\_folder can now be configured per IMAGE/MULTI\_IMAGE field; on submission, matching attachments are automatically associated with the configured job gallery album.

🆕 **FE Access to All Customer Estimates & Invoices** — Added support for Field Executives to access all customer estimates and invoices via two new flags (can\_fe\_access\_all\_customer\_estimates, can\_fe\_access\_all\_customer\_invoices); when enabled and a customer filter is applied, FE-level BU and created-by restrictions are bypassed for that customer's records.

🆕 **Job Financial Summary** — Added a J<Anchor label="ob Financial Summary API" target="_blank" href="https://developers.zuper.co/update/reference/get-job-financial-summary">ob Financial Summary API</Anchor> that aggregates approved estimate amounts, invoiced totals, and collected payment transactions for a job into a single set of financial KPI metrics.

🆕 **Business Overhead:** Added support for configurable business overhead calculations. A `business_overhead` setting (`FIXED` or `PERCENTAGE`) can now be defined and is applied to post-discount job revenue. The calculated overhead cost is automatically included in total job cost and commissionable cost calculations across materials, labor, and expenses.

🆕 **Commission Payouts:** Enhanced commission payout tracking with a new `payout_status` field (`UNPAID`, `PARTIALLY_PAID`, `PAID`, `OVERPAID`) stored on each commission. Unpay operations now soft-delete payout records instead of reverting commission status, preserving payout history. Bulk processing has also been extended to support targeted unpay actions using `filter.commission_uid` and `unpay_payouts` arrays.

🆕 **Auto Geocoding:** Customer, Job, Organization, and Property addresses are now automatically geocoded during create and update operations. Valid addresses are enriched with geo-coordinates using a parallel geocoding lookup, enabling more accurate map pinning and improving the overall user experience.

🆕 **Job Custom Field Change Events:** Added granular event support for job custom field updates. Notifications now include `created_fields` and `updated_fields` arrays, allowing subscribers to identify exactly which custom fields were added or modified.

⭐ **Purchase & Service Order Delivery Method Sync:** Delivery methods are now automatically synchronized between linked Service Orders (SO) and Purchase Orders (PO) when updated. Additionally, the PATCH endpoint now enforces status-based update restrictions and prevents vendor changes once the order has progressed beyond specified states.

⭐**EV1 Subscription Product Codes** — Minor fix to the addSubscription handler to correctly apply subscription product codes for new EV1 subscription tiers.

⭐ **EagleView Products API**— Updated to support additional EV1 subscription product codes; new product-type constants are mapped in the measurement helper so all available EagleView report products can be ordered and tracked correctly.

⭐**Timesheet History for Team Leads** — Team Leads can now view timesheet history for their entire team, not just their own records.

🐞 **Time Off Availability** — User availability balances are now recalculated when a request type's no\_of\_days\_per\_year allotment is updated by an admin; a validation guard was also added for users with no existing availability record.

🐞 **Commission Profitability Calculation**— Non-billable line items now correctly contribute to commissionable\_bundle\_cost but are excluded from commissionable\_bundle\_price, ensuring profit-based commission amounts are not inflated by non-billable work.

🐞 **Gallery Attachment Download** — Improved error responses in downloadGalleryAttachment and cleaned up stale template references in the public gallery HTML.

🐞 **Proposal PDF Rollup Bundle Quantities** — Rollup bundle components are now pre-scaled by bundle quantity, so per-component prices and quantities in the PDF reflect the correct scaled values.

🐞 **Sales Order PDF** — Added a dedicated SO PDF template and generation handler, resolving blank/missing PDF output for Service Orders sent via email.

🐞 **Customer Account Initialization** — When the accounts field is included in an <Anchor label="update payload" target="_blank" href="https://developers.zuper.co/update/reference/get-all-customers-copy-2">update payload</Anchor>, existing LTV, receivables, and credits values are now preserved if not explicitly changed, preventing those fields from being silently reset to zero.