---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# September 2026 Updates

<br />

🆕 **QXO Supplier Integration** – Zuper now integrates with QXO as a supplier.

🆕 **Rebates** – Rebates now work across <Anchor target="_blank" href="https://developers.zuper.co/reference/get-quote-details">Estimates</Anchor>, <Anchor target="_blank" href="https://developers.zuper.co/reference/get-quote-details">Proposals</Anchor>, <Anchor target="_blank" href="https://developers.zuper.co/reference/get-job-details">Jobs</Anchor> and <Anchor target="_blank" href="https://developers.zuper.co/reference/get-invoice-details">Invoices</Anchor>. They carry through from Estimate to Job to Invoice and show in the Estimate, Proposal and Invoice PDF layouts.

🆕 **Multi-Structure CPQ** – CPQ proposals can now cover multiple structures on one <Anchor target="_blank" href="https://developers.zuper.co/reference/get-job-details">job</Anchor>, including split measurements.

🆕 **Zuper Pay**: More Payment Methods – Zuper Pay now supports Paper Check, Amazon Pay and Cash App.

🆕 **Hover ESX&#x20;**<Anchor target="_blank" href="https://developers.zuper.co/reference/create-measurement">**Measurement**</Anchor>**&#x20;Sync** – ESX files from Hover measurements now sync into Zuper automatically.

🆕 **Hover JSON Upload** – Hover <Anchor target="_blank" href="https://developers.zuper.co/reference/create-measurement">measurements</Anchor> can now be uploaded as JSON files.

🆕 **Send Signed Documents** – The Send Document API can now email a document after it has been signed.

🆕 **Policy-Based Inbox Limits** – Personal and shared inbox limits are now set and enforced by policy.

🆕 **Discount Breakup in Layout PDF&#x20;**– Layout PDFs now show a detailed breakdown of discounts.

🆕 **Sold-By User in Multi-Signer** – Multi-signer <Anchor target="_blank" href="https://developers.zuper.co/reference/get-quote-details">proposals</Anchor> now support a sold-by user when an internal user signs.

🆕 **Subscription One-Time Charges** – Subscription billing now supports one-time charges alongside recurring charges.

🆕 **Call Recording Policy** – Zuper Connect now enforces a customer call recording policy.

🆕 **Workflow Builder V2**: New Actions & Testing

* Create Appointment action: workflows can now create <Anchor target="_blank" href="https://developers.zuper.co/reference/get-appointment-details">appointments</Anchor>.
* Push notifications: the internal notification node can now send push notifications to selected users.
* Recent workflows: a new endpoint lists recent workflows for the AI Workflow Builder.
* Test Until This Node: testing runs step by step up to a chosen node, and validation only checks the node being tested.

<br />

⭐ <Anchor target="_blank" href="https://developers.zuper.co/reference/get-all-invoices">**Invoice**</Anchor>**&#x20;Listing Amount Keys** – amount\_due and amount\_paid are now returned in invoice listing responses when filtering by job, customer, contract, project, property or organization.

⭐ **Financing Promo Message** – <Anchor target="_blank" href="https://developers.zuper.co/reference/get-quote-details">Proposals</Anchor> can now show customers a configurable financing promotional message.

⭐ **Sense & Agent Studio for Roofing&#x20;**– Sense and Agent Studio are now turned on automatically for companies in the Roofing industry.

⭐ **New Settings Page by Default** – Newly created companies now start on the new Settings page.

⭐ **Idempotency Key in&#x20;**<Anchor target="_blank" href="https://developers.zuper.co/reference/create-job">**Create Job**</Anchor> – now accepts an idempotency key, so retried requests don't create duplicate jobs.

⭐ <Anchor target="_blank" href="https://developers.zuper.co/reference/get-job-details">**Job Details**</Anchor>**&#x20;API Performance** – The Job Details API now responds faster.

⭐ <Anchor target="_blank" href="https://developers.zuper.co/reference/get-call-stats">**Call Insights**</Anchor>**&#x20;Dashboard Widget** – The dashboard widgets API now includes a Connect Call Insights widget.

⭐ <Anchor target="_blank" href="https://developers.zuper.co/reference/get-quote-details">**Proposal**</Anchor>**&#x20;View Event Visibility** – Proposal view events are now easier to see and track.

⭐ **View Mode in Quick Filters** – Quick filters now support a view mode.

⭐ **Custom HTML Pages in Layouts** – Estimate and proposal layouts now support a Custom page type, so estimate options can be shown using custom HTML and rendered in the PDF.

⭐ **Zuper Pay Enhancements&#x20;**– Failed payment transactions now store the reason they failed. Abandoned or explicitly cancelled transactions are now marked CANCELED.

⭐ **Job Kanban API Field Selection** – The Job Kanban API now supports fields\_to\_select, so you can request only the fields you need.

⭐ **Task Count Assigned Filter** – The  task count API now supports an assigned filter.

⭐ <Anchor target="_blank" href="https://developers.zuper.co/reference/get-notes">**Notes**</Anchor>**&#x20;is\_edited Flag** – Notes responses now include an is\_edited flag.

⭐ **Note Mention Redirection** – Mention notifications now include note\_uid in their meta, so a mention can link straight to the exact note inside the module.

⭐ **Image Proxy fit Support** – Image proxy URLs in fetch attachments, <Anchor target="_blank" href="https://developers.zuper.co/reference/get-notes">notes</Anchor> and similar APIs now accept a fit parameter.

⭐ **Surcharge on Payment Receipts** – Payment receipts now include the surcharge amount.

⭐ **Estimate Financing Kept on Update** – If a <Anchor target="_blank" href="https://developers.zuper.co/reference/update-quote-details">Update Estimate</Anchor> request doesn't include financing, the proposal option's existing financing is kept.

⭐ **Job** **Document Template Limit Raised** – The Job Document Master Template limit has increased from 50 to 100. Teams can now create, view, and search up to 100 job master templates while retaining clear guidance when the new limit is reached.

⭐ **Customer Address & Merge Improvements**

* When the primary address changes and it matches the billing address, the billing address now updates too.
* Merging <Anchor target="_blank" href="https://developers.zuper.co/reference/merge-customers">customers</Anchor> now also merges their phone numbers.

⭐ **Appointments Dispatchable Handling**

* Deleting an <Anchor target="_blank" href="https://developers.zuper.co/reference/delete-appointment">appointment</Anchor> now reads is\_dispatchable from the master category, not from the job.
* Fetch <Anchor target="_blank" href="https://developers.zuper.co/reference/get-appointments">Appointments</Anchor> no longer applies the dispatchable condition when job\_uid is passed.

⭐ **Bi-directional Email Improvements**

* Each module's send API now handles attachments.
* Moving an email to Bin now removes its thread associations.
* Conversations are now created under the user who triggered the email, not the user who created the mailbox.

⭐ **Activity Updates -&#x20;**&#x46;ixed consistency issues in activity `meta_data`, updated attachment activity `meta_data` entries, and added activity creation when a workflow sends an internal SMS.

⭐ **Workflow Builder V2: Validation & Reliability**

* Workflows now have loop rules and stricter backend validation.
* Trigger events now have better error handling and message retry.
* The fetch workflows API returns additional keys to support improvements in the Workflow tab.

⭐ **Performance Improvements**

* Optimized scheduled date range, analytics, and job filter queries to improve query performance.

⭐ **Supplier Integration Updates (ABC / SRS)**

* The supplier bulk link Recommend API has been improved.
* SRS APIs now store branch availability for each product variant.
* Vendor catalogs can no longer be created through the API for supplier-integrated vendors.
* ABC units of measure are now combined across product variants, which fixes missing or zero price quotes.
* Fixed SRS products mapping to more than one Zuper <Anchor target="_blank" href="https://developers.zuper.co/reference/get-all-products">product</Anchor> and SRS products not showing under the <Anchor target="_blank" href="https://developers.zuper.co/reference/get-vendor-details">vendor</Anchor>.

⭐ **API Reference Updates** – Added docs for the <Anchor target="_blank" href="https://developers.zuper.co/reference/create-purchase-order">Purchase Order</Anchor> and <Anchor target="_blank" href="https://developers.zuper.co/reference/post_purchase_orders-1">Work Order endpoints</Anchor>, and reviewed and updated the Vendor and Subcontractor references.

<br />

🐞 <Anchor target="_blank" href="https://developers.zuper.co/reference/get-all-timesheet">**Timesheet**</Anchor>**&#x20;Calculation Fix** – Fixed incorrect day-wise totals in the <Anchor target="_blank" href="https://developers.zuper.co/reference/post_timesheet-master">Timesheet Master report</Anchor>.

🐞 <Anchor target="_blank" href="https://developers.zuper.co/reference/get-invoice-details">**Invoice**</Anchor>**&#x20;Reminder Fix** – Invoice and estimate reminders now update when only the date changes.

🐞 **Master&#x20;**<Anchor target="_blank" href="https://developers.zuper.co/reference/update-job-status-1">**Job Status**</Anchor>**&#x20;Fixes** – Fixed several issues with master job statuses.

🐞 **Deleted Teams in&#x20;**<Anchor target="_blank" href="https://developers.zuper.co/reference/get-product-locations">**Product Locations**</Anchor>**&#x20;**– When a <Anchor target="_blank" href="https://developers.zuper.co/reference/delete-team">team</Anchor> is deleted, it's now removed from product location access.

🐞 **Custom Field Fix&#x20;**– Fixed datatype issues with custom field min and max values.

🐞 **Bulk Delete Material Requests Fix** – Fixed bulk deletion of material requests.

🐞 **Surcharge Payment Intent Fix&#x20;**– Surcharge payment intents are now linked to the correct customer.

🐞 **Product QR Bulk Download Fix** – Fixed bulk download of product QR codes.

🐞 **Company Config Decimal Round-off Fix&#x20;**– Fetch company config now returns the decimal round-off value in the correct format.

🐞 <Anchor target="_blank" href="https://developers.zuper.co/reference/get-attachments">**Gallery**</Anchor>**&#x20;Fix&#x20;**– Attachments added while creating a <Anchor target="_blank" href="https://developers.zuper.co/reference/create-properties">property</Anchor> now show up in the Gallery.

🐞 **Workflow Activation Limit Fix&#x20;**– Workflows can no longer be activated beyond the configured limit.

🐞 **Lightning Search Fixes** – Fixed missing search results for field executives across modules, and Work Orders not showing in search.

🐞 **Bi-directional Mail Fixes** – Fixed conversation search, quote and invoice emails when bi-directional mail is on, and attachment issues. The AR balance column is now hidden when Quotes, Invoices or Payments are turned off.

🐞 **Connect / Telephony Fixes** – Fixed calls not disconnecting, call activity and status mismatches, duplicate message notifications, SMS visibility, pages not loading after login, and AI agent scheduling.

🐞 <Anchor target="_blank" href="https://developers.zuper.co/reference/post_invoice-master">**Report**</Anchor>**&#x20;& Dashboard Fixes&#x20;**– Fixed a server error in the <Anchor target="_blank" href="https://developers.zuper.co/reference/post_invoice-master">Invoice Master report</Anchor> and errors in custom dashboards.

🐞 **Notification Fixes** – Fixed duplicate mobile push notifications and <Anchor target="_blank" href="https://developers.zuper.co/reference/get-project-details">project</Anchor> comment notifications.

🐞 O**ffline Archive Fix** – The offline job archive now includes job\_priority on parent jobs.

🐞 <Anchor target="_blank" href="https://developers.zuper.co/reference/get-route-details">**Route API**</Anchor>**&#x20;Fix&#x20;**– Fixed overall\_duration being calculated from mixed time units.

🐞 **Jobs Fixes&#x20;**– Fixed old jobs not opening, a Kanban view error, customer search on the job form, and photo feed filtering.

🐞 **Import Fixes** – Fixed wrong <Anchor target="_blank" href="https://developers.zuper.co/reference/get-all-products">product</Anchor> quantities after import and vendors missing from imports.

🐞 **Check Deposit Fix** – Fixed an error when depositing checks.