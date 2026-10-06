---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# February 2026 Updates

🆕 **Addons Feature Released**
We have officially released Addons functionality. This update includes GAF measurement updates for addon products, rollup bundle quantity enhancements (preferred quantity can now be set), and dealer fee & markup support for custom financing providers.

🆕 **Sold By User Support in Estimates**
[Estimates](https://developers.zuper.co/reference/create-a-quote) now support a `sold_by_user` field, enabling better sales tracking and attribution.

🆕 **Asset Serial Number Mandate Configuration**
A new company-level configuration allows you to mandate serial numbers for assets. Validation is now enforced in both [Create Asset](https://developers.zuper.co/reference/create-asset) and [Update Asset](https://developers.zuper.co/reference/update-asset) APIs.

🆕 **Bulk Product Update Enhancements**
Bulk product updates now support markup and formula updates, improving efficiency in managing large product catalogs.

🆕 **CPQ Template Safeguards & Auto Updates**
CPQ templates are now automatically updated when:

* A product is deleted
* Bundle sub-items are updated
* Pricing levels are updated

Additionally, CPQ templates are restricted from being saved with:

* Addons
* No line items

🆕 **Sub-Item Images in Bundle PDFs**
Bundle PDFs now display sub-item images for better visual clarity in customer-facing documents.

🆕 **Inspection Form Multi-Dependency Support**
[Inspection Forms](https://developers.zuper.co/reference/asset-inspection-forms) now support multi-dependency logic similar to Checklists, including:

* Custom field-based dependencies
* AND / OR logic
  Currently available in API.

🆕 **Checklist Enhancements**

* Copy to Default & Custom Fields support added in both [CREATE checklist](https://developers.zuper.co/reference/create-job-checklist) and [UPDATE checklist](https://developers.zuper.co/reference/update-job-checklist-1)
* Custom field details now populated in Mobile
* Job & Customer Notes migrated to Generic Notes (v2 web app sync supported)

🆕 **Photo Feed Visibility Controls & Mobile API**

* TL users can view photos uploaded by them and their team
* FE users can view only their uploads
* New mobile-specific Photo Feed API introduced

***

⭐ **Quote & Line Item Profitability Improvements**

* Line item discount updates now included in profitability
* Custom tax excluded from profitability calculations

⭐ **Pricelist Support Within Proposal Options**
Pricelist is now supported at the proposal option level. If an option-level pricelist is applied, the root-level pricelist will automatically be removed.

⭐ **Service Task Delete Permissions Updated**
Field Executives can now [Delete service tasks](https://developers.zuper.co/reference/delete-service-task) created by or assigned to them (including bulk delete).

⭐ **Broadcast Notification Enhancement**
Push notifications are now sent based on schedule rather than immediately.

⭐ **Recurring Route Updates Deployed**
Enhancements to recurring route workflows has been implemented.

***

🐞 **Bug Fixes & Stability Improvements**

* Multiple Multi Signer fixes and enhancements
* Customer bulk action fix (customer\_uid added in events)
* General performance improvements and stability fixes