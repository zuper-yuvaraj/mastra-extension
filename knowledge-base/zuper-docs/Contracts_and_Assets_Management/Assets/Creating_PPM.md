---
title: "Creating and managing PPM"
source: https://docs.zuper.co/Contracts_and_Assets_Management/Assets/Creating_PPM.md
fetched_at: 2026-10-06T13:29:53.828Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating and managing PPM

Planned Preventive Maintenance (PPM) is a proactive approach to maintaining equipment, machinery, or systems by scheduling regular inspections, servicing, and repairs before any issues arise. The goal of PPM is to minimize the risk of unexpected failures, reduce downtime, and extend asset lifespans.

Let’s get started with creating and managing a new PPM for an asset in Zuper!

<Note>
  **Common terms for this feature**

  Customers may refer to assets using different terms depending on their industry. In Zuper, the following are all equivalent:

  | What customers call it | Zuper term |
  | - | - |
  | Station / stations | Asset / assets |
  | Unit / units | Asset / assets |
  | Service location | Asset / property |
  | Multiple stations | Multiple assets |
  | One job per station | One job per asset |
  | Contract covers stations | Contract covering multiple assets |
  | Multi-site PPM | PPM across multiple assets or locations |

  When this article refers to **assets**, it includes stations, units, and service locations.
</Note>

<Frame>
  **Navigation:** Contracts and Assets Management module -> Assets->  Assets listing page -> Asset detail page
</Frame>

## To create a PPM

* Select the **Contracts and Assets Management** module from the left navigation menu and choose “**Assets**." You will view the list of assets (both active and inactive) on the asset listing page. 

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/assetnew.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=9619d0ee56553137473f0f0e96423fc9" alt="Assetnew Pn" width="1910" height="754" data-path="images/assetnew.png" />

* Choose the asset for which you want to add a new PPM from the asset listing page. The selected asset details page appears. 
* On the asset details page, scroll down to the PPM section in the right pane and click the\*\* "+\*\*" icon. A side pane will appear, and you can create a new PPM.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/asset20.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=b2e98a6a24f6eaae6ff747c91eadb4ea" alt="Asset20 Pn" width="1920" height="878" data-path="images/asset20.png" />

<Note>
  Note: To add PPM for an asset, it must be linked to an organization or customer. Unlinked assets (referred to as "Orphan" assets) will not display the + (Plus) button. You can associate the asset with an organization or customer first, then go ahead and add PPM.
</Note>

<Note>
  **Keeping future maintenance out of your active jobs list**

  Scheduling a PPM does not create jobs for every future service date. Jobs are  created only when the **Generate Job in Advance** lead time is reached — so a PPM  recurring every 6 or 12 months produces a job shortly before each service, not a  backlog of future-dated jobs in your active list.

  To see the full forward schedule, use **Manage PPM** on the asset listing page,  which lists each PPM with its last and next service dates.
</Note>

### Primary Details

Fill in the following primary details:

* **PPM Name:** Enter a name for the PPM.
* **PPM Description:** Provide a brief description of the PPM.
* **Choose Property**: Select a property of an org/customer to associate with the PPM.
* **Choose Asset**(*Mandatory*): Select one or more assets for which you want to create a new PPM. You can choose assets currently associated with the contract or any other existing assets, as needed.
* *Example: A service contract covers 3 water pump stations. You select all 3 assets in the Choose Asset field and enable Auto-Generate Job. Zuper creates a PPM for each asset. On the scheduled date, 3 separate jobs are auto-generated — one per station — and each appears individually in the Jobs listing."*

<Note>
  **Note**: When you select multiple assets, Zuper creates one separate PPM entry per asset. If Auto-Generate Job is enabled, each asset generates its own independent job on the scheduled date not one combined job for all assets.
</Note>

<img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/asset21.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=4404ba2b821ed818cb117c996938987a" alt="" width="1920" height="878" data-path="Contracts_and_Assets_Management/Assets/asset21.png" />

* **Choose Part/Service**: Select a part or service associated with the contract to include in the PPM.
* **Priority** (*Mandatory*): Select the priority from the drop-down list. Options include Low, Medium, and High.
* **Auto-Generate Job**: By default, it will be set to "**No**." If you want to auto-generate a job based on the PPM, select "**Yes**." 

<Accordion title="If selected &#x22;Yes&#x22; for Autogenerate job. Follow these steps:" defaultOpen="false">
  Job Settings

  * **Generate Job in Advance** (*Mandatory*): Set how many days before the scheduled date the job should be created automatically.

  * **Job Category**: Choose the job category from the drop-down list.

      <img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/asset22.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=5769813b9210ab3dadea2d72c4b83040" alt="" width="1920" height="878" data-path="Contracts_and_Assets_Management/Assets/asset22.png" />

  * **Street Address**: Click "**Pick from Map**" to fill in the street address information.

  After completing the primary details, click the "**Next**" button to proceed to the scheduling step for the PPM.
</Accordion>

### PPM Schedule

Provide the following details to schedule:

* **PPM Start Date**: Select the start date of the PPM.
* **PPM End Date**: Select the end date of the PPM.

<img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/asset23.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=9751701b4593a1d3af5946c97837877a" alt="" width="1920" height="878" data-path="Contracts_and_Assets_Management/Assets/asset23.png" />

* **Recurrence**: Select how often this PPM should occur - Daily, Weekly, Monthly, Yearly, or Custom.
* **Schedule Dates**: These dates are **automatically populated** for upcoming schedules (service dates) based on the chosen recurrence.

After filling in all of these details, click the “**Create PPM**” button.  A new PPM will be created and successfully added to the asset.

## Manage PPM

Once a PPM has been created for an asset, you can also edit or delete the PPM as needed. To manage PPM, follow these steps:

* Click "**Manage PPM**" at the top right of the asset listing page. 

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/asset30.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=8d4beff2abe55dfcb86a97ce28bc0d36" alt="Asset30 Pn" width="1920" height="878" data-path="images/asset30.png" />

* You can access all PPMs for assets, including PPM ID, name, last service date, next service date, and more. You can also use the **search bar** to search and view specific asset's PPM details. 
* From there, you can view, edit, or delete PPM by using the <Icon icon="ellipsis" color="black" /> icon under **Actions**.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/asset31.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=9a1b736810836eb52656642685000713" alt="Asset31 Pn" width="1920" height="878" data-path="images/asset31.png" />

<Note>
  **Note**: The job icon next to the PPM ID indicates that a **job will be auto-generated** for this PPM on the scheduled dates. This is because you've chosen "**Yes**" to "Auto Generate Job" while creating a PPM. 
</Note>

## Scheduling PPM

In Zuper, PPM tasks can be automatically converted into jobs for field technicians to complete on scheduled dates.

However, if the **autogenerate jobs** option was not enabled during PPM creation, you can still manually issue PPMs as jobs. Here's how:

* On the PPM listing page, identify the PPMs that do not have autogenerate jobs enabled.

<img src="https://mintcdn.com/zuperinc/REyxl-NZWG7jHng2/Contracts_and_Assets_Management/Assets/85.png?fit=max&auto=format&n=REyxl-NZWG7jHng2&q=85&s=67f717063b0588ef1aa223c8ccd4b660" alt="/Contracts_and_Assets_Management/Assets/85.png+_existingInIndexedDbMintlify" width="1858" height="906" data-path="Contracts_and_Assets_Management/Assets/85.png" />

* Select the PPM(s) that need job creation. An action bar will appear at the bottom.

<Note>
  **Note**: The checkbox is enabled only for PPMs that do not have autogenerate jobs configured.
</Note>

* Click "**Issue Chosen PPMs**". A Preview PPMs pop-up will appear.

<img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/87.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=a442b21a71539f6ee704e0fbe6285990" alt="/Contracts_and_Assets_Management/Assets/87.png+_existingInIndexedDbMintlify" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/87.png" />

* Select the **Job Category** from the dropdown menu and set the **Start Time** and **End Time** for each PPM.

<img src="https://mintcdn.com/zuperinc/7Bu7cWfxGOT6fS3e/Contracts_and_Assets_Management/Assets/88.png?fit=max&auto=format&n=7Bu7cWfxGOT6fS3e&q=85&s=f20e4fe4bd7ef6c4bc7e5ff45a7553eb" alt="/Contracts_and_Assets_Management/Assets/88.png+_existingInIndexedDbMintlify" width="1848" height="897" data-path="Contracts_and_Assets_Management/Assets/88.png" />

* Click "**Submit**" to create PPM jobs successfully.

So, that's the process of creating and managing PPM in the Zuper Web App. By following these step-by-step instructions, you can efficiently create and manage these maintenance schedules, ensuring optimal performance and longevity of assets.


## Related topics

- [Managing your assets](/Contracts_and_Assets_Management/Assets/managing_assets.md)
- [Overview](/Contracts_and_Assets_Management/Contract/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.