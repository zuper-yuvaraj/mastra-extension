---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# April 2026 Updates

**🆕Dispatchable Teams** Introduced an is\_dispatchable flag that can be set through the create <Anchor label="Create Team" target="_blank" href="https://developers.zuper.co/reference/create-team">Create Team</Anchor> and update <Anchor label="Update Team" target="_blank" href="https://developers.zuper.co/reference/update-team-details">Update Team</Anchor> team APIs. This flag is also supported as a filter in the GET teams summary <Anchor label="Get Teams" target="_blank" href="https://developers.zuper.co/reference/get-all-teams">Get Teams</Anchor> endpoint, allowing you to retrieve only teams that are eligible for dispatch assignments.

**🆕 Sync Measurement** A new endpoint <Anchor label="Sync Measurement" target="_blank" href="https://developers.zuper.co/reference/sync-measurement">Sync Measurement</Anchor> to manually trigger a re-sync for orders placed from measurement providers.

**🆕Partial Payments** You can create and send partial payment links to customers by email or SMS for advance or part payments.Each payment request includes a PDF invoice, along with optional notes and CC/BCC recipients if needed. Businesses can also cancel a payment link before the customer completes the payment. [Payment Request](https://developers.zuper.co/reference/create-payment-request)

**🆕Job Total Calculation**  You can now choose how job total(job\_total) are calculated: either from job line items (default) or from accepted quote line items, configurable via the 'Job Total Calculation Method' setting in the Jobs module.

**🆕Sections** Invoice and estimate line items and job products can now be organized into named sections for a clearer and more structured presentation.

**🆕Trade Type in Service Task** Trade type support has been added to service tasks <Anchor label="Create Tasks" target="_blank" href="https://developers.zuper.co/reference/create-service-tasks">Create Tasks</Anchor>, allowing businesses to categorize work by trade.

**🆕Project Financing KPI** A new endpoint <Anchor label="Project KPI" target="_blank" href="https://developers.zuper.co/reference/get-project-finance-stats">Project KPI</Anchor> now enables businesses to track all payment activity amounts, dates, and statuses.

***

<br />

**⭐Email Attachment Size Limits** When the combined size of the PDF and attachments exceeds 10MB on send invoice or estimate, the PDF is sent as downloadable links in the email body.

**⭐Jobs Bulk Update** The jobs bulk update action API now supports updating the Hide to FE (hide\_to\_fe) flag across multiple jobs at once.

**⭐Notes Pagination**Pagination support has been added to the Get Notes API [Get Notes](https://developers.zuper.co/reference/get-notes). When the count and page query parameters are provided, the response will be paginated accordingly.

***

🐞 Multiple bug fixes, stability improvements, and backend optimizations to ensure a smoother and more reliable experience

<br />