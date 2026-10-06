---
title: "Trade Types"
source: https://docs.zuper.co/Trade_Types/Trades.md
fetched_at: 2026-10-06T13:29:55.755Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Trade Types

## **Feature enablement & creation of Trade Types**

Trade types will help you segment and manage businesses that cut across multiple trades with unique branding, contacts/addresses. It will also help with better **reporting, grouped by trades.** Additionally, it will help improve operational efficiency through **exclusivity to users** **to** **access** *jobs, quotes, invoices, etc.*, pertaining to their specific trade type(s).

* Customer Action Required: Contact [support@zuper.co](mailto:support@zuper.co) to enable the Trade Type feature.
* Limits: Up to 25 active Trade Types per organization.
* Post-Enablement: Create Master Trade Types via 

<Frame>
  - **Navigation**:*Settings --> Miscellaneous --> Trade Type --> + New Trade Type*
</Frame>

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR28.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=77dfc3f1710268a4baab1f23ec92e3b9" alt="TTR28" width="1920" height="878" data-path="images/TTR28.png" />

* Click the “**Create**” button to create the new master trade type.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TT18.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=8707b86bfc12632d5b2d5cfedc90e925" alt="TT18" width="1920" height="878" data-path="images/TT18.png" />

## **Entity relationships and mapping use cases**

| Entity | What It Is (Mapping) | App Path | Business Impact |
| :- | :- | :- | :- |
| **Users (Technicians)** | **1:N** – A technician can belong to one or multiple trade types (e.g., John: HVAC + Electrical). | Settings → Users & Teams → User Mgmt. → + New / Edit → Pick Trade Types | **Scope of visibility.** Users can view and create only jobs, quotes, invoices, and products that belong to their assigned trade type(s). |
| **Teams** | **1:N** – Teams can belong to one or multiple trade types (cross-trade or functional teams). | Settings → Users & Teams → Team Mgmt. → + New / Edit → Pick Trade Types | **Ease of dispatching.** Jobs and teams are auto-filtered on the Dispatch Board based on trade type associations. |
| **Product Categories** | **1:N** – Product categories are mapped to relevant trade type(s). | Settings → Modules → Parts & Services → + New / Edit → Pick Trade Types | **Ease of organizing.** Parts and services are grouped under product categories that are further grouped by trade type. During part/service creation, available categories are controlled by the selected trade type. |
| **Parts / Services** | **1:N** – Parts and services can be shared across trades or restricted to specific trades (e.g., Nails: HVAC + Electrical; Breaker: Electrical only). | Inherits trade type via Product Categories | **Speed of operation.** When adding line items to jobs, quotes, or invoices, parts and services are pre-filtered by the job’s trade type—reducing search effort and errors. |
| **Job Categories** | **1:N** – Job categories are mapped to applicable trade type(s) (e.g., *Maintenance*: HVAC + Electrical; *AC Installation*: HVAC only). | Settings → Modules → Jobs → Job Category Hub → + New / Edit | **Ease of organizing.** Enables structured organization of jobs, service tasks, and skills by trade type. Job categories can be linked to Skills and Service Tasks via Job Category Hub. |
| **Jobs** | **1:1** – Each job belongs to a single trade type. | Job creation / edit | **Operational clarity.** Trade type selection controls available job categories and filters parts/services. Users see only jobs for their trade type(s). Jobs inherit trade type when created from a quote or invoice. Jobs without a trade type are visible to all users. |
| **Quotes** | **1:1** – Each quote belongs to a single trade type. | Quote creation / edit | **Focused quoting.** Trade type filters available parts/services and controls user visibility. Quotes inherit trade type when created from a job or invoice. Quotes without a trade type are visible to all users. |
| **Invoices** | **1:1** – Each invoice belongs to a single trade type. | Invoice creation / edit | **Clean billing & visibility.** Trade type filters parts/services and determines invoice visibility. Invoices inherit trade type from the job or quote. Invoices without a trade type are visible to all users. |

## **Onboard to Zuper Trade Types**

### **a. Job Categories & Jobs**

* **Job Category Creation & Edits**: Once trade types are created, the next critical step is to map your job categories to the right trade type(s). As mentioned in the [mapping table above](https://docs.zuper.co/Trade_Types/Trades#entity-relationships-and-mapping-use-cases), a job category can be mapped to one or more trade type(s) based on your specific business needs. For e.g., A job category ‘***Maintenance***’ shall be associated with both HVAC & Electrical, (or) a job category ‘AC Installation’ shall be associated with only HVAC. The screen below helps you understand how to map trade type(s) to a job category.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR2.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=ad1b88fddec2f392cc82f15f5b61fa7f" alt="TTR2" width="1920" height="878" data-path="images/TTR2.png" />

Since Zuper enables mapping job categories to skills and service tasks, associating trade type(s) with job categories virtually establishes traceability to those skills and service tasks.

* **Job Creation & Edits**: Once this is done, when creating a job, you’ll be able to **map a job to only one of the trade types**. During job creation, selecting a trade type for the job automatically shortlists the **job categories mapped** to it. This will eliminate the need to endlessly scroll through all job categories when creating a job.
  * Pick Job Trade (e.g., HVAC) → Locks in the trade type.
  * Pick Job Category (e.g., "AC Repair") → Only shows categories for that trade.
  * Add Products/Parts → Only see parts linked to that trade (*like HVAC filters*).

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR30.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=42a87e4df3e3efce477c503a94dbe332" alt="TTR30" width="1920" height="878" data-path="images/TTR30.png" />

Additionally, mapping a job to a trade type ensures it's visible only to users who belong to that trade type (we will see how users can be mapped to a trade type below).

<Note>
  **Note**: When a job is not mapped to any trade type, it will be visible to ALL users.
</Note>

* **Line-Item/Product Selection Within Job**: Additionally, when adding line items to a job, they’ll be automatically shortlisted/filtered based on the job trade type (we’ll see how to map products to trade types soon, below ). This again helps users find the right parts/services for a job rather than weeding through an infinite list of parts/services available within your organization.
  * Parts belonging to job trade type: Auto-filters (*e.g., thermostats for HVAC job*).
  * When users are associated with more than one trade type, selecting the "**Any**" option lists parts across all their trade types. This shall be handy when a job must encompass parts cutting across multiple trades.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR8.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=e1747a35efcbbe7caf641eae5c75ebcb" alt="TTR8" width="1920" height="878" data-path="images/TTR8.png" />

<Note>
  **Note**: Avoid using the '***Any***' filter unless your job is not going to need materials across various trades. Picking the ‘wrong’ part (via "Any") could impact your job operations, e.g., plumbing pipes counted in an HVAC job!
</Note>

### b. Tasks

[Tasks](https://docs.zuper.co/Zuper_Dashboard/Tasks) in Zuper represent the discrete activities a field technician must complete to fulfill a job. They provide a structured way to standardize job execution, improve service efficiency, and track progress at a granular level.

Organizations typically adopt one of two approaches: some associate job categories with a predefined set of tasks that are automatically applied to every job of that type, while others allow technicians to select from a library of standardized task templates in the field. In either case, tasks serve as the operational definition of what it means for a job to be considered complete.

When your business operates across multiple trades, task assignment becomes more nuanced in either of the scenarios described above. Regardless of which approach you follow, technicians should only see tasks relevant to their trade - which makes mapping tasks to trade types essential.

Consider an organization that services both HVAC and Plumbing. Without trade-based mapping, an HVAC technician may see Plumbing tasks in their list, and a plumber may see HVAC tasks. Beyond the operational noise, this forces technicians to scroll through or manually filter tasks that have no bearing on the job in front of them, leading to wasted time and a higher chance of selecting the wrong task.

Mapping tasks to trade types eliminates this friction by giving each technician a focused, role-appropriate view. The sections below walk you through how to associate tasks with trade types for both business scenarios introduced earlier:

1. Job categories linked to a predefined set of tasks
2. Technicians selecting tasks from a pool of standardized templates

<Note>
  **Note: Enabling trade type-based data restrictions** at the organization level will **automatically control task visibility**. Learn more about this from [here](https://docs.zuper.co/Trade_Types/Trades#d-users)
</Note>

<Frame>
  **Navigation**: *Settings —> Users & Teams —> User General Settings —> Restrict access to only Trade Type data?*
</Frame>

1. **Job Categories Linked to a Predefined Set of Tasks**:

If your business runs a well-defined set of tasks within specific job categories, Zuper lets you map those tasks to job categories directly from the Job Category [Hub](https://docs.zuper.co/Settings/Modules/Jobs/configuring_Job_categories#adding-service-tasks-to-a-job-category).

When a task is associated with a job category, it automatically inherits that category's trade types. This delivers two benefits:

* The associated tasks are automatically added to any job, the moment its job category is selected (*during job creation or edit*).
* When technicians add tasks to a job themselves, they see only the tasks tied to their trade type(s).

Together, these behaviors preserve traceability across the full chain - from technician to job categories, to task - ensuring that trade-level relevance is maintained end-to-end.

*Example:* In an organization that handles both HVAC and Plumbing, suppose the job category *AC Maintenance* is associated with the task *Check refrigerant levels*. Through this association, the task automatically inherits the HVAC trade type. As a result, only HVAC technicians will see it in their task list — plumbers will not.

When you associate a task with a job category, here is what happens: Tasks inherit their trade types.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra8.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=8d7bcfe4e607b495c043e8cf871c4e8a" alt="Task Tra8" width="1920" height="878" data-path="images/Task_Tra8.png" />
</Frame>

Additionally, you can see that the service task master reflects the service task's associated inherited trade type.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra9.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=423bb8a8f7b5e3302b9355af6f41ea6a" alt="Task Tra9" width="1920" height="878" data-path="images/Task_Tra9.png" />
</Frame>

Now, any editing to trade type of the service task master will **only append** on top of the inherited values (*trade types*) from the job category.

2. **Technicians picking tasks from a pool of standardized templates**

When a business maintains a standard library of tasks that technicians draw from across jobs, those tasks are typically configured in Zuper as [service tasks (or)](https://docs.zuper.co/Settings/Modules/Jobs/configuring-service-tasks#configuring-service-tasks) [task templates](https://docs.zuper.co/Settings/Modules/Jobs/configuring-service-tasks#configuring-service-tasks). The intent in this model is to let technicians pick the right task for each job based on the work at hand.

To keep this selection relevant, Zuper allows you to pre-associate one or more trade types with each master service task or task template. Once configured, a technician sees only the tasks that match their own trade type(s) when adding tasks to a job. For example, a technician in the Plumbing trade will see only Plumbing-tagged tasks — HVAC tasks will not appear in their list.

<Note>
  **Note:** Zuper offers two types of task functionalities: Service Tasks and Tasks. The trade type filter works across both options.
</Note>

The screen below demonstrates how a trade type can be associated with a service task under the [**master service task**](https://docs.zuper.co/Settings/Modules/Jobs/configuring-service-tasks).

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra4-1.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=e449d8baf6919694d17e95786415459f" alt="Task Tra4 1" width="1920" height="878" data-path="images/Task_Tra4-1.png" />
</Frame>

The screen below demonstrates how a trade type can be associated with a service task under the [**task templates**](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_task_templates).

<Note>
  **Note**: This will be applicable for organizations leveraging Zuper’s new tasking capability.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra16.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=290f5cd72bfa4a5fc862adf1d2c80b2b" alt="Task Tra16" width="1920" height="878" data-path="images/Task_Tra16.png" />
</Frame>

Below is a sample screen demonstrating the association of tasks to varied trade types as part of the service task master/task template.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra10.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=5e5557edb2b47d9c0ee9a8ef34ed95c2" alt="Task Tra10" width="1907" height="873" data-path="images/Task_Tra10.png" />
</Frame>

<Note>
  **Note**: Any task without a trade type association will be visible to ALL users irrespective of the trade they belong to.
</Note>

**Mobile – Impact on Field Technicians**

As covered in the above sections, technicians always view [tasks](https://docs.zuper.co/Zuper_Dashboard/Tasks) for their trade type (*or those without a trade type*). The screen below highlights the same.

Add/update tasks to the existing job in **Jobs -> Job -> Tasks -> + icon -> context menu (Displays the trade-specific tasks + tasks without any trade type)**

The screenshots below explain the service task/task addition to the job.

**Add Service Tasks to the job**:

<div className="flex flex-row justify-between">
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra13-portrait-1.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=9fda6e9ea680e6b422b304450a3207fe" style={{width:"48%"}} className="rounded-lg" alt="Task Tra13 Portrait 1" title="Task Tra13 Portrait 1" width="1419" height="2796" data-path="images/Task_Tra13-portrait-1.png" />

  <img src="https://mintcdn.com/zuperinc/7OCPxVlqwuMHtGCG/images/st-task-trad-portrait.png?fit=max&auto=format&n=7OCPxVlqwuMHtGCG&q=85&s=ec35e1ecba3f93c5f6c78c50ee14b1d8" style={{width:"48%"}} className="rounded-lg" alt="st-task-trad-portrait" title="st-task-trad-portrait1" width="1419" height="2796" data-path="images/st-task-trad-portrait.png" />
</div>

**Add tasks to the job**:

<div className="flex flex-row justify-between">
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra5-portrait-1.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=faecbeafdcf48529b18ac227d6df21f2" style={{width:"30%"}} className="rounded-lg" alt="Task Task_Tra5-portrait-1" title="Task_Tra5-portrait-1" width="1419" height="2796" data-path="images/Task_Tra5-portrait-1.png" />

  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra14-portrait-1.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=250783642c3b2d02c62c437c14609e22" style={{width:"30%"}} className="rounded-lg" alt="Task_Tra14-portrait-1" title="Task_Tra14-portrait-1" width="1419" height="2796" data-path="images/Task_Tra14-portrait-1.png" />

  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra15-portrait.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=8f45724ec71f99d010ce812200e9ea9a" style={{width:"30%"}} className="rounded-lg" alt="Task_Tra15-portrait.png" title="Task_Tra15-portrait.png" width="1419" height="2796" data-path="images/Task_Tra15-portrait.png" />
</div>

Additionally, for customers who have Zuper’s new ‘**Tasking’** capability enabled, they can create standalone tasks that do not necessarily belong to a job. It’s possible to link those standalone tasks to a trade type as well. This will ensure only other technicians in the same trade can reuse them, e.g., for tasks such as following up on payment or sending maintenance reminders.

Create a new task directly from: **Dashboard -> + icon -> context menu (Displays the trade-specific tasks + + tasks without any trade type).**

The screenshots below show **task creation** and **filtering by trade type.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra11.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=7db6600cb8fd1764113b241efa290871" alt="Task Tra11" width="1920" height="878" data-path="images/Task_Tra11.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/Jd2NA7l3HRx4dmcu/images/Task_Tra12.png?fit=max&auto=format&n=Jd2NA7l3HRx4dmcu&q=85&s=eadbb8af16c492f84b3ca39759cb8bbd" alt="Task Tra12" width="1920" height="878" data-path="images/Task_Tra12.png" />
</Frame>

In Summary, regardless of how your business is structured, Zuper gives you the flexibility to break jobs down into manageable tasks - and to sharpen execution by ensuring those tasks are visible only to the technicians equipped to handle them, through trade-type associations.

### c.  **Product Categories & Products**

**Product Category Creation & Edits**: Once job categories are mapped to trade types, the next logical step is to map your product categories to those trade types. As mentioned in the [mapping table above](https://docs.zuper.co/Trade_Types/Trades#entity-relationships-and-mapping-use-cases), a product category can be mapped to one or more trade type(s) based on your specific business needs. For example, A product category, Pumps, HWT, shall be mapped to ‘Plumbing’ trade type, while Air Conditioners, Furnaces shall be mapped to HVAC trade type, and finally, Consumables shall be associated with both.

The screen below shows how to map trade type(s) to a product category.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR31.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=5fe3089f744342e6424ce5fb06a4ae19" alt="TTR31" width="1920" height="878" data-path="images/TTR31.png" />

***Illustration***: A company has HVAC and Plumbing trades. They can create trade-specific catalogs, so each trade-focused user(s) sees only their items. Some items are shared.

Go to:

<Frame>
  **Navigation**: *Settings --> Modules --> Parts & Services -->+ New/Edit Category.*
</Frame>

* **Category**: "Air Filters".\
  **Assign to**: HVAC only.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR32.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=b6dc99cc50ceecd1019b164e3e30f865" alt="TTR32" width="1920" height="878" data-path="images/TTR32.png" />

* Category: "Sealants".\
  Assign to: HVAC and Plumbing.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR4.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=4cc6bdfccdba34dd40bd2e6d1f48e019" alt="TTR4" width="1920" height="878" data-path="images/TTR4.png" />

Once done, the product category visibility across users will be displayed when selecting trade type(s).

* HVAC User(s): Air Filters, Sealants.
* Plumbing User(s): Sealants.

<u>Parts/Services Creation & Edits</u>: Once this is done, when creating a product, you’ll be able to map a product to a trade type. When creating a part or service, selecting a trade type automatically shortlists the **product categories mapped** to it. This will eliminate the need to scroll through all product categories when creating a part/service. As mentioned in the [job section above](https://docs.zuper.co/Trade_Types/Trades#a-job-categories-%26-jobs), this will also enable auto-filtering of line items within a job by trade type.

Go to:

<Frame>
  **Navigation**: *Parts & Services --> + New/Edit Product*
</Frame>

* Product: "**HEPA Air Filter**"
  * Trade Type: HVAC
  * Product Category: Air Filters (*auto-filtered* based on product category mapping).
* Product: "**Universal Thread Sealant**"
  * Trade Type: Plumbing
  * Product Category: Sealants (*auto-filtered* based on product category mapping).

<img src="https://mintcdn.com/zuperinc/w8zGxfBbyGVoAaB8/images/TTR5.png?fit=max&auto=format&n=w8zGxfBbyGVoAaB8&q=85&s=2828acb2a7d7e4e10b919812483138d0" alt="TTR5" width="1920" height="878" data-path="images/TTR5.png" />

Once done, the visibility of product(s) across users will be shown below.

* **HVAC User(s)**: HEPA Air Filters.
* **Plumbing User(s)**: Universal Thread Sealants.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR7.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=a87efbf7fbd79bc5c42fa58ed525d7bc" alt="TTR7" width="1920" height="878" data-path="images/TTR7.png" />

### **d. Team & Dispatch Board**

**Teams Creation & Edits**: After completing the job & product category mapping, we need to map teams into trade types. This will help sharpen the dispatching experience. Dispatchers will see only the team(s) filtered by trade type on the dispatch board. While a team can belong to a trade, Zuper allows it to be mapped to more than one trade type IF your business requires cross-functional/trade teams.

Follow the steps below to associate trade type(s) with a team:

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR29.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=28db88ed2d0c76a2e11ab13637615834" alt="TTR29" width="1920" height="878" data-path="images/TTR29.png" />

**Dispatch Board**: Under the dispatch board, there’s a new multi-select filter that allows dispatchers to filter team(s) and job(s) based on the trade type(s). The filter will only show-up trade types that the user has access to.

On selection of trade type(s):

* Dispatchers’ queues will only display jobs that belong to the selected trade type(s), along with jobs with no trade type at all.
* Similarly, Teams will also be restricted based on their trade type for the user to select. This will ensure dispatchers dispatch to the right team without worrying about dispatching across trade type(s), which could jeopardize the necessary skills, the right team, and availability.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR33.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=373074ccfedf0d6e27c205b152c50686" alt="TTR33" width="1920" height="878" data-path="images/TTR33.png" />

### e. **Users**:

This is the last and most important part of the setup. This is the **first step towards ensuring that users working on specific trades will see details specific to them and do not tread into/tamper other trade specific data even by mistake**.

**User Creation & Edits**: Mapping the correct trade types to user(s) is crucial while creating a user (or) editing it for existing user(s). As mentioned in the [mapping table above](https://docs.zuper.co/Trade_Types/Trades#entity-relationships-and-mapping-use-cases), each user can be associated with one or more trade type(s) based on their scope of responsibilities within your business.

***Illustration***: Assume an organization is part of both HVAC and Plumbing trades. They can assign users to specific trade types while creating/editing an existing user.

Go to:

<Frame>
  **Navigation**: *Settings --> Users --> + New/Edit User.*
</Frame>

For example, John Doe is part of the HVAC busines only.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR11.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=b6e8d719dc472af02287ca308c90d3f5" alt="TTR11" width="1920" height="878" data-path="images/TTR11.png" />

And Jane Smith is part of both the HVAC and Plumbing businesses.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR21.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=c4c6afce346a28ee0a5ff3ab52b4fd87" alt="TTR21" width="1920" height="878" data-path="images/TTR21.png" />

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR34.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=22e9dbe4649ff8175ddbb766ea387d61" alt="TTR34" width="1920" height="878" data-path="images/TTR34.png" />

Enable Data Restriction: This is the **company-level flag that imposes users’ data exclusivity** (*Restrict access to only Trade Type data?*) – What jobs/job categories, invoices, quotes, products/product categories & teams that they can view and manage within Zuper.

**Without enabling this, trade types will just be an additional field** across jobs, invoices, quotes, etc., **with no control on user visibility**. So, make sure you enable/disable this based on your business needs (*for businesses using trade type “just” for reporting/organization jobs, this can be switched off*).

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR13.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=a4130312e3f28a17846ae3a48b76d28a" alt="TTR13" width="1920" height="878" data-path="images/TTR13.png" />

Once switched on, user visibility and access will be controlled based on their assigned trade type(s).

* HVAC User(s): Accesses HVAC *jobs, invoices, quotes, products, etc.*
* Plumbing User(s): Accesses Plumbing *jobs, invoices, quotes, products, etc.*
* Multi-Trade User(s): Accesses both HVAC & Plumbing *jobs, invoices, quotes, products, etc.*

<Note>
  **Note**: Visibility of all entities will also take into consideration the role/custom role of the user. For e.g., an admin will have visibility to all jobs, but TLs will be able to view only jobs belonging to them or their teams. **Trade type filters will be applied on top of role-based restrictions**.
</Note>

## Automatic flow of trade types between Jobs, Quotes & Invoices:

After a quote is accepted by a customer, when job(s) are created from the quote, the job automatically inherits to trade type of the quote from which it is created. Subsequently, when invoices(s) are generated for the job, they too automatically inherit the trade type from the job. The **traceability and flow of trade type between jobs, quotes, and invoices are automatically maintained by Zuper**. The same applies irrespective of the order of their creation. For example, if a job precedes the quote (or) invoice precedes a job, the downstream entity automatically inherits the trade type from its predecessor.

**As with a job, both invoices and quotes shall be mapped to only one trade type**. Trade types of quotes and invoices are available in their respective details sections. Sample screens are presented below for reference.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR14.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=dd8885f9854517fd62a7d9cdcb9d434f" alt="TTR14" style={{ width:"100%" }} width="1920" height="878" data-path="images/TTR14.png" />

<Note>
  **Note**: Manually disturbing the traceability of trade type between a job and its quote/invoice will impact business reporting. Hence, it’s recommended to maintain the same.
</Note>

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR15.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=1f5373c8958ea66dd7bf5b738c115f46" alt="TTR15" width="1920" height="878" data-path="images/TTR15.png" />

## **Filters, Views & Reports:**

**<u>Filters & Views: With the introduction of trade types, it’ll be possible for you to create filters and views across all the listing pages based on trade types. This includes jobs, quotes, and invoice listing pages.</u>**

**Filter:**

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR20.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=fd4fabb92fb87f35a3fa7812b72b48ea" alt="TTR20" width="1920" height="878" data-path="images/TTR20.png" />

<Note>
  **Note**: Filtered will only be applied based on trade type association of individual users. Meaning – A user belonging to the plumbing trade can filter only plumbing jobs, invoices, quotes, etc.
</Note>

The sample screen below will help you include the trade type as part of your views.

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR23.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=c3fda3c4aa1dfcbb20240e090d43053d" alt="TTR23" width="1920" height="878" data-path="images/TTR23.png" />

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR24.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=90da99924a22de8bdcf88b54f8c37057" alt="TTR24" width="1920" height="878" data-path="images/TTR24.png" />

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR22.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=606c0fe2181d0fa0dabd101b7ad0b1f7" alt="TTR22" width="1920" height="878" data-path="images/TTR22.png" />

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR22.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=606c0fe2181d0fa0dabd101b7ad0b1f7" alt="TTR22" width="1920" height="878" data-path="images/TTR22.png" />

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR25-2.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=5294e81d28fd3d0e46f107750c3e55e3" alt="TTR25 2" width="1920" height="878" data-path="images/TTR25-2.png" />

**Reports**: To make the most out of the induction of trade types, it’s critical that they find their place in the major reports of Zuper. Hence, you’ll be able to find trade types as part of all the reports below.

1.     Job master

2.    Invoice master

3.    Product master

4.    Product group master

5.    Quote master

6.    User master

7.    Payment transaction

<img src="https://mintcdn.com/zuperinc/YqnCgJeCApN3H-HW/images/TTR26.png?fit=max&auto=format&n=YqnCgJeCApN3H-HW&q=85&s=237edc45164c73ce3927d0e91c613abd" alt="TTR26" width="1895" height="661" data-path="images/TTR26.png" />

***

In summary, trade types in Zuper serve as the foundation for organizing operations across multiple business lines/trades, or specialties. By carefully setting up trade types and aligning them with jobs, users, teams, products, and categories, you define the right boundaries for each business area/function, while enabling access to all the critical capabilities of Zuper.

## FAQs 

1. **What will happen to existing jobs, quotes, and invoices that do not have trade types associated?**

All the above entities will be visible to ALL the users as they are in the current state. If you want any of them to be restricted to certain business users, please edit them and update the trade types, individually (*remember to enable the data restriction flag!*).

 

2. **What if a pricelist associated with a certain trade type gets linked to a job from a different trade type (due to the customer being associated with that pricelist)?**

The customer takes precedence. Hence, the pricelist will get applied on the job line-items. To avoid unintended pricelist impact, make sure you model pricelist on specific products/services. *For example, if you want your HVAC VIP customers to get a ‘10%’ reduction on their maintenance services, create a pricelist with HVAC specific maintenance services alone. Hence, when a pricelist of HVAC trade types gets applied to Plumbing job through customer addition, Plumbing parts/services will be immune to HVAC pricelist impact*.

 

3. **What will happen to my existing/saved filters & views?**

Your saved filters/views remain intact. However, the results from those filters may look different depending on your trade type association and the data restriction flag.

* Data Restriction Flag is OFF → Behavior will remain largely unchanged.
* Data Restriction Flag is ON → User will only see records inside their trade type. Hence, a saved filter/view might show up “*lesser data*” for few users based on their trade type.

 

4. **Is it possible to add a part/service belonging to a trade type to a job, invoice, quote from a different trade?**

This is technically possible when a user is associated with more than one trade type.

Just that they must choose a different trade type while adding line-items. While this helps cross-functional jobs involving items from multiple trades & businesses, users must be careful not to overstep this flexibility by skipping the mapping of products/product categories to right trade types. This will have a direct impact on trade type level reporting.

 

5. **Can I create a quote belonging to a trade type and then edit the association of its job/invoice to a different trade?**

Yes. However, this is **not recommended** by Zuper. This again will have an impact on your reporting. We suggest updating the trade type of ALL traceable entities if you happen to update the trade type of one of them.

 

6. **Does Zuper synchronize with QuickBooks Online (QBO) based on trade types?**

No. We do not support that yet. However, it is part of our future roadmap.

 

7. **When the visibility flag is on, will users be able to view ALL jobs, invoices and quotes belonging to their trade types?** 

No. The visibility will also take into consideration their individual roles/custom roles. For e.g.,

* Admin view all the jobs, invoices & quotes belonging to the trades that they’re mapped to
* TLs will view only jobs, invoices & quotes that belong to their teams/team members filtered by trade types that they’re associated with
* FEs will view only job, invoices & quotes that belong to them filtered by trade types that they’re associated wit


## Related topics

- [Using Trade Types for Multi-Trade Roofing Businesses](/Zuper_for_Roofing/Trade.md)
- [Appointments](/Appointments/Appointments.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.