---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# June 2026 Updates

🆕 **SRS Integration** – Added native integration with SRS to provide seamless access to product catalogs, real-time pricing, inventory availability, and ordering workflows, reducing manual effort and improving purchasing efficiency for field teams.

🆕 **Instant Estimate** – Introduced Instant Estimate capability for quick quote generation.

🆕 **Surcharge Support** – Added configurable surcharge support for Estimates and Invoices, enabling automatic surcharge calculations based on payment methods and other criteria.

🆕 **Documents** – Introduced a new Documents module for document creation, management, and digital signatures.

🆕 **Appointments** – Added a new Appointments module for managing customer appointments.

🆕 **Job Tags Widget** – Introduced a dedicated Job Tags widget for quick tagging and filtering of jobs directly from the job view.

🆕 **CPQ Bulk Add Rule** – Added bulk rule creation support in CPQ, allowing multiple pricing rules to be added simultaneously.

🆕 **Proposal Deposit Redirection** – Customers are now automatically redirected to the deposit payment page upon accepting a proposal, streamlining payment collection.

🆕 **Bulk Formula Support in CPQ** – Added bulk formula processing support for applying complex pricing formulas across multiple line items.

🆕 **Job Gallery & Timeline Public Page** – Added public page support for Job Gallery and Timeline, allowing customers to track job progress and view photos through shared links.

🆕 **Inspection Form to Custom Field&#x20;**– Added support to copy inspection form data directly into custom fields for improved data reusability.

🆕 **Commission Payouts&#x20;**– Enhanced commission payout processing with improved tracking and status management.

🆕 **Latest Transaction Status in Invoices** – Invoice listings now display the latest transaction status for improved payment visibility.

⭐ **Bulk Delete & Recover Enhancements** – Updated is\_deleted handling for attachments and notes during bulk delete and recover operations to ensure consistent soft-delete behavior.

⭐ **Push Notifications for Mentions** – Push notifications are now always sent to mentioned users, ensuring important mentions are not missed.

⭐ **Purchase Order & Service Order Enhancements** – Improved linkage and synchronization between Purchase Orders and Service/Work Orders.

⭐ J**ob & Invoice Listing Improvements** – Added sorting support for current job status, invoice amount\_due, and amount\_paid in V3 listing APIs.

⭐ **Bulk Image & Video Visibility Updates** – Added bulk actions to update images and videos to PUBLIC or INTERNAL visibility.

⭐ **Out-of-Stock Product Filter** – Added support for filtering out-of-stock products in product listings and search.

⭐ **deleted\_at Support in Listing APIs** – Listing APIs now return the deleted\_at timestamp to improve soft-delete tracking and filtering.

⭐ **Estimate Accepted Date Updates** – The PUT Estimate API now supports updating accepted\_date after proposal acceptance, enabling backdated acceptance scenarios.