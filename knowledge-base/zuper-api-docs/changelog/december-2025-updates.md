---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# December 2025 Updates

🆕 **Activity & Audit Enhancements**

:point\_right: Added source tracking in Activity to identify actions from Mobile App, Web App, or API Key.\
:point\_right: Extended Activity logging for Job/Project status updates and Note creation with detailed metadata.
:point\_right: Prevented activity insertion in PATCH Custom Field API when no fields are updated.
:point\_right: Enhanced Activity support across Update Job APIs, Generic Notes, Job & Customer Notes, PATCH APIs, and Checklist field copy APIs

🆕 **Pricing & Profitability**

:point\_right: Included total purchase price, profit, and profit margin at line-item level for Jobs, Quotes, and Invoices.
:point\_right: Added APIs for actual vs budgeted calculations and profitability based on accepted Quotes.
:point\_right: Improved Proposal Template API to correctly roll up bundle pricing even when quantity is formula-driven.
:point\_right: Enabled Job and Project value via new company configuration keys (script enabled for Roofing, Pool, and HVAC industries).

🆕 **Proposal, CPQ & PDF Improvements**

:point\_right: Multiple CPQ fixes and functional enhancements.
:point\_right: Improved Proposal PDF generation with layout and rendering fixes.
:point\_right: Removed unnecessary headers from CPQ-created Proposals when no line items follow.

🆕 **Workflow, Notifications & Alerts**

:point\_right: Enabled notifications for assigned TL/FE during workflow requests.
:point\_right: Fixed customer notification handling when customer\_notifications config is missing.
:point\_right: Resolved SMTP blocking issue during bulk customer notifications caused by parallel email dispatch.
:point\_right: Fixed Job Delay Alert email configuration to respect selected Email Config UID instead of default.

🆕 **Integrations & External Services**

:point\_right: Introduced EagleView Integration for measurement data.

🆕 **Business Units & Product Enhancements**

:point\_right: Added Business Unit handling via APIs.
:point\_right: Introduced product group type support for Add-ons.
:point\_right: Added Formula Master reference support in Product Schema.

🆕 **Job, Project & Reporting Fixes**

:point\_right: Improved Estimate and Invoice stats with Project filter corrections.
:point\_right: Handled PS disassociation from Jobs correctly.
:point\_right: Relaxed facial authentication requirements for offline mode in Update Job Status API.

🆕 **Time Tracking & User Management**

:point\_right: Updated Timelog Summary calculation to exclude seconds and compute time directly in minutes.
:point\_right: Added base location support for users.

🐞 Multiple bug fixes, stability improvements, and backend optimizations to ensure a smoother and more reliable experience