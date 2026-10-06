---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# March 2026 Updates

**🆕 Commissions Module**
A full commissions tracking system is now available. <Anchor label="Create" target="_blank" href="https://developers.zuper.co/reference/create-commission">Create</Anchor>, manage, and <Anchor label="delete" target="_blank" href="https://developers.zuper.co/reference/delete-commission">delete</Anchor> commissions tied to jobs and projects. Includes a dedicated commissions report with commission values reflected in profitability calculations.

**🆕 Measurement Upload API**
A new endpoint - <Anchor label="Upload Measurement" target="_blank" href="https://developers.zuper.co/reference/upload-measurement">Upload Measurement</Anchor>  allows uploading measurement files (from Roofr or RoofSnap) with support for custom categories, token mappings, and address validation.

**🆕 Dealer Fee & Markup**
Dealer fee and markup values are now returned and applied across the Public Page, <Anchor label="Invoice" target="_blank" href="https://developers.zuper.co/reference/get-invoice-details">Invoice</Anchor>, and <Anchor label="Job" target="_blank" href="https://developers.zuper.co/reference/get-job-details">Job</Anchor>. Includes financing provider validation and pre-dealer markup calculations.

**🆕 Preferred Bundle Quantity**
Roll-up bundles now support a configurable preferred quantity display. When creating a roll-up bundle in Inventory, you can designate which Part or Product's quantity should be used as the displayed bundle quantity on all customer-facing documents — including the Layout Builder, Present Proposal screen, and Quote & Invoice templates.

***

**⭐ File Proxy URL in Estimate & Invoice Card APIs**
`proxy_url` values are now included for job checklist attachments in Estimate and Invoice card API.

**⭐ Timesheet API — Night Shift Support**
The Get <Anchor label="Timesheet" target="_blank" href="https://developers.zuper.co/reference/get-all-timesheet">Timesheet</Anchor> History API now correctly handles night shift scenarios (shifts that span midnight).

**⭐ Assets Array Support in Estimates**
The <Anchor label="Estimate Create" target="_blank" href="https://developers.zuper.co/reference/create-a-quote">Estimate Create</Anchor> and <Anchor label="Estimate Update" target="_blank" href="https://developers.zuper.co/reference/update-quote-details">Estimate Update</Anchor>  API now accepts an `assets` array, normalizing single and multi-asset inputs into a unified code path.

**⭐ TL Access to All Business Unit Jobs**
A new company config allows Team Leaders to access all Jobs of a Business Unit if the Team Leader has access to that Business Unit.

**⭐ Org / Property / Asset Summary Endpoints**\
New summary APIs added for <Anchor label="Organization" target="_blank" href="https://developers.zuper.co/reference/get-organization-summary">Organization</Anchor>, <Anchor label="Asset" target="_blank" href="https://developers.zuper.co/reference/get-asset-summary">Asset</Anchor>, and <Anchor label="Property" target="_blank" href="https://developers.zuper.co/reference/get-property-summary">Property</Anchor>

**⭐ A New Config to allow auto assignment from Task to Jobs & Projects**
A new `auto_add_task_assignee` key in job and project config controls automatic assignment of task assignee's when a service task is created (default - true).

**⭐ time\_on\_status Tracking for Jobs & Projects** <Anchor label="Job" target="_blank" href="https://developers.zuper.co/reference/get-job-details">Job</Anchor> and <Anchor label="Project" target="_blank" href="https://developers.zuper.co/reference/get-project-details">Project</Anchor> status arrays now include a `time_on_status` field to track duration spent (in minutes) in each status.

**⭐ A New Config to allow FEs to Create Non-Job Events**
A new `allow_fe_create_non_job_event` field in company config controls whether Field Executives can create non-job events (default - false) .

**⭐ Stream Chat Notification Preferences API**
A new API allows setting notification preferences for Stream Chat.

***

**🐞 status\_history\_uid & updated\_at in Job Create / Bulk Update**\
These fields are now included in the status array, in the Create Job and Bulk Update Job Status APIs

<br />