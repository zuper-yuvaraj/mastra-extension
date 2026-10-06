---
title: "Creating a new job"
source: https://docs.zuper.co/Work_Order_Management/Jobs/creating_a_new_job.md
fetched_at: 2026-10-06T13:29:37.634Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating a new job

Creating a job in Zuper streamlines your business workflow for managing work orders. Zuper also lets you customize the jobs with additional properties tailored to your business. Once created, the job will appear on your schedule board and be visible to assigned technicians through their mobile app.

Let’s get started with creating a new job in Zuper!

<Frame>
  **Navigation:** *Jobs* *->* *+ New Job*
</Frame>

## To create a new job

* On the jobs listing page, you will see an overview of existing jobs, including work order numbers, categories, statuses, and more.
* Click the “**+ New Job**” button at the top right corner of the page to begin creating a new job.

<img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/newjob.jpg?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=b546be78072bfd0d78f9d20af99f2a0f" alt="" width="1905" height="875" data-path="Work_Order_Management/Jobs/newjob.jpg" />

The new job page has a three-panel layout to facilitate keying in the relevant data.

1. The **left panel** lets you enter the job title, schedule, and address.
2. The **center panel** lets you enter other necessary information about the job.
3. The **right panel** enables you to associate related records, such as customers, properties, assets, and more.

### A. Job details

* **Job Title** (*Mandatory*) – Enter the title of the job.

### B. Primary details

* **Job Category (Mandatory):** Select the appropriate job category from the drop-down menu. Once selected, the **Check Availability** option becomes available in the **Job Schedule** section, and the **default description and service tasks associated with the chosen category** will be automatically displayed.
* ***Other Fields (optional)***: Choose/enter in the Job Priority, Job Type, Parent Job (in the case of a revisit job), Job Tags, Lead Source (identify how the job was created or where the request originated, e.g., Customer Portal, Website, Phone Call, or Ad), job skills, and Job Description.

<img src="https://mintcdn.com/zuperinc/BwFh6YR9QnC_E4FU/images/Job.png?fit=max&auto=format&n=BwFh6YR9QnC_E4FU&q=85&s=a2ec124f363b697543aa30c595a0800d" alt="Job Pn" width="907" height="504" data-path="images/Job.png" />

### C. Job schedule

Choose the start and end dates to schedule the job based on the contact's preferences. Either the due date or the start and end dates are mandatory to create a job.

If the job is a one-off, choose "**Non-Recurrence**"; if it has recurring schedules, choose "**Recurrence**."

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/j25.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=fad1fdbc0883613c5d819269f6e9f12b" alt="" width="1913" height="861" data-path="images/j25.png" />

<Accordion title="Recurring Jobs" icon="sparkles">
  If the job is a **recurring job**, select **Recurring Job** from the **Job Recurrence** dropdown. A **Choose Job Recurrence** dialog box will appear where you can configure the recurrence pattern using the following fields:

  ### **Recurrence Schedule**

  **• Recurrence Start From (Mandatory):**<br />Select the start date for the recurrence using the date picker.

  **• Recurrence Duration (Mandatory):**<br />Enter the duration and choose the unit from the dropdown (Days, Weeks, Months, or Years). This defines how long the recurrence should continue.

  **• Job Start Time (Mandatory):**<br />Enter the start time for each occurrence of the job.

  **• Job End Time (Mandatory):**<br />Enter the end time for each occurrence of the job.

  **• Choose Frequency:**<br />Select the recurrence frequency—Daily, Weekly, Monthly, or Yearly.<br />(As shown in the UI, **Weekly** is selected.)

  **• Repeat Every:**<br />Enter how often the job should repeat based on the chosen frequency (e.g., every 2 weeks).

  **• Choose days of the week to repeat:**<br />For weekly recurrence, select the specific days on which the job should repeat (e.g., Sunday and Monday).

  ### **Future Recurring Jobs**

  Based on your selections, the **Future Recurring Jobs** section displays a preview of upcoming job entries, including the **Job Date**, **Job Start Time**, and **Job End Time**. These entries are auto-generated according to the recurrence pattern.

  <img src="https://mintcdn.com/zuperinc/OTKEr7h7gBrChRr8/images/job2.png?fit=max&auto=format&n=OTKEr7h7gBrChRr8&q=85&s=7f6af7418ec4981d904c52b75dea74f4" alt="Job2 Pn" width="1916" height="879" data-path="images/job2.png" />
</Accordion>

<Accordion title="Assisted Scheduling" defaultOpen="false">
  Assisted Scheduling in Zuper is a game-changer for businesses looking to optimize their workforce management. Combining real-time data on availability, skills, shifts, and territories into an easy-to-use interface removes the guesswork of scheduling. Whether juggling multiple jobs or ensuring the right technician is assigned at the right time, this feature empowers you to make informed decisions quickly and efficiently.

  **Pre-Requisites:**

  Ensure Business hours and work hours are configured correctly.

  For teams working across multiple time zones, ensure “**Enable Switching Timezones**” is set to "**Yes**" under **Organization settings > General settings**. Additionally, ensure that teams are assigned to the appropriate time zones.

  **Slots and usage:**

  To use Assisted Scheduling, start by selecting a preferred date from the calendar on the left-hand side of the interface. You can use “**Resource View**” or “**Slot View**.”

  **Slot View**: Displays all available time slots for the selected date.

  **Resource View:** Displays available slots by individual users in the chosen time zone grouped by teams.

  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched3.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=5d3130e103dc45e659fef428cc90848b" alt="Sched3 Pn" width="1147" height="802" data-path="Work_Order_Management/Jobs/sched3.png" />

  **Slot Availability**

  When displaying slots, business hours, work hours, shift hours, user assignment to other jobs or non-job events, user time off, and holidays are considered. These slots can be further filtered, as discussed in the next section. Below is how the above factors are considered when displaying slots:

  **Business Hours vs. Work Hours vs User Shifts**

  Depending on whether “**Consider User Shifts**” is set to “**Yes**” or “**No**,” how business hours, work hours, and shift hours are considered varies.

  For instance,<br />Fire & Ice is an HVAC service company with business hours between 9 AM to 5 PM. John is a field technician at Fire & Ice, working from 8 AM to 4 PM on all days of the week. On November 20, 2024, John had to work a shift from 7 AM to 3 PM EST.

  <br />*When “**Consider User Shifts**” is toggled off:*<br />i. If the user has a shift created during this period, slots overlapping with business and shift hours are displayed. In the above scenario, John’s slots would be displayed from 9 AM to 3 PM PST on November 20 since these slots are within business hours, and John has a shift created till 3 PM on that date.

  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched6.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=5362bfc2c8d8c6213a26a3d3942926e4" alt="Sched6 Pn" width="940" height="198" data-path="Work_Order_Management/Jobs/sched6.png" />

  ii. If the user does not have a shift, slots overlapping with business and work hours are displayed. In the above scenario, if John did not have a shift, the slots would be displayed from 9 AM to 4 PM on November 20 since his work hours are until 4 PM.

  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched7.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=fc978933ebc01be5bc06132653acb726" alt="Sched7 Pn" width="940" height="198" data-path="Work_Order_Management/Jobs/sched7.png" />

  *iii. When "**Consider User Shifts**” is toggled on:*

  Business and work hours are ignored, and only the shift hours are considered. This means that only slots falling during shift hours will be displayed to a user. This also means that if no user shifts were created on a specific date, no slots would be displayed in the slot view for the date. In the above example, John’s slots would be displayed for the 7 AM to 3 PM EST shift on November 20, irrespective of his work and business hours.

  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched8.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=e4bdb2918a6c8d09c70e28c9693a1d52" alt="Sched8 Pn" width="940" height="198" data-path="Work_Order_Management/Jobs/sched8.png" />

  **User Assignment to Jobs and Non-Job Events**

  * When a user is assigned to a job or a non-job event (with availability set to ‘**Busy**’ for the non-job event), the corresponding time slot is blocked in the **Resource view**.
  * If all users are occupied at a specific time, that slot is also blocked in the **Slot view**.
  * However, a slot remains available if the assigned job is **‘Completed,’** **‘Closed,’** or **‘Cancelled.’**

  **User Time off:**

  * When users are on time off, their slots won’t be displayed in the **Resource view**.
  * If all users are on time off during a specific slot, it won’t be shown in the **Slot view**.

  **Holidays:**

  In **Zuper**, holidays can be assigned to all users or specific teams. Users also have the option to allow or restrict job scheduling on holidays. Below is how different types of holidays are represented in **Assisted Scheduling**:

  1. **Holiday for All Users – Jobs Allowed**
     * The holiday is marked in the **date picker**.
     * Users **can select** the date for scheduling jobs.
  2. **Holiday for All Users – Jobs Not Allowed**
     * The holiday is marked in the **date picker**.
     * Users **cannot select** the date for scheduling jobs.

  **Example:**

  * **June 3 (Wednesday)** can be selected, as jobs are allowed.
  * **June 2 (Tuesday)** cannot be selected, as job scheduling is restricted.
  * **Holiday for a Specific Team – Jobs Allowed**
    * The holiday is indicated **next to the team’s name**.
    * Users **can select** the team to schedule jobs.
  * **Holiday for a Specific Team – Jobs Not Allowed**

    * The holiday is indicated **next to the team’s name**.
    * Users **cannot select** the team to schedule jobs.

      <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched4.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=22b3b2653462d5e7a5dd49d764d100e3" alt="Sched4 Pn" width="1147" height="802" data-path="Work_Order_Management/Jobs/sched4.png" />

  **Applying Filters**

  To refine the list of available slots, you can apply these filters :

  * **Time Zone:**  Available slots are listed only for teams in the selected time zone. As mentioned, business and work hours are considered in the selected time zone.
  * **Duration:** Slots are displayed in the selected duration; the maximum duration allowed is 8 hours. If a category is selected, the category duration will be pre-filled (if the category duration exceeds 8 hours, 8 hours will be pre-filled). If no category is selected, the duration will be pre-filled to 1 hour.
  * **Consider User Shifts**: Adjust based on shift settings (as detailed above).
  * **Service Territory**: Limit slots to users in a specific geographic area.
  * **Skills**: Show slots for users with the required skills.

  **Team**: Selecting “**Any Team**” will list the slots for all the teams that satisfy the Time zone, Service territory, and Skill filters. Selecting “**Selected Teams**” will allow users to pick specific teams that fulfill the time zone, service territory, and skill filters.

  <img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/sched5.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=26abb68841d092bdacadf4d7f52166ac" alt="Sched5 Pn" width="1140" height="802" data-path="Work_Order_Management/Jobs/sched5.png" />

  **Best Practices**

  * Double-check the “**Consider User Shifts**” setting to ensure it aligns with your scheduling preferences.
  * Use filters to narrow down options when scheduling for specific teams, skills, or territories.
  * Adjust time zones carefully to match customer or operational needs.

  ![](https://mintlify.s3.us-west-1.amazonaws.com/zuperinc/J4.png)
</Accordion>

* Click the “**+ Add Organization/Contact**” button at the right of the page to add an organization or contact.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J6.0.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=ee577ec02beb958a5554c526f4dba007" alt="" width="1913" height="862" data-path="J6.0.png" />

* The “**Service Address**” will be automatically pre-filled based on the selected organization or customer. You can use the same or a different one for the billing address.

<Note>
  Note: To modify the service address, click the edit icon. Make sure you select either the address or the geo-coordinates.
</Note>

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J6.1.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=d6bd05c3412c6d6c75dcb82635eb36a2" alt="" width="1379" height="670" data-path="J6.1.png" />

<Accordion title="Service Territory" defaultOpen="false">
  The Service Territory is auto-populated if the selected organization or contact service address falls within the *geo-radius*, *geo-fence*, and zip Code defined for that service territory.

  <Warning>
    **Alert:** You may encounter the following Conflict(s) pop-up, indicating issues that need to be resolved for proper territory assignment.

    * **Multiple Territory:** The system will choose the first territory by default if the job address falls under more than one Service Territory. You can manually select the most suitable territory by clicking the ‘**Assign**’ button from the list of available territories on the job detail page.
    * **No Service Territory:** The job’s Service Address does not fall within any predefined service territory; you can manually assign the appropriate service territory on the respective **job’s** detail page.
    * **Assignment Mismatch:** If the team/user(s) assigned to the job does not belong to the selected service territory, you can reassign the job to the appropriate team or user(s) on the **job’s** details page.

    Remember, you can only assign and update service territories on the job detail page.
  </Warning>
</Accordion>

### D. Service tasks

Service tasks define the step-by-step actions, procedures, or checklists that field technicians must follow while completing a job or work order. These tasks help ensure consistency, accuracy, and compliance with your organization’s workflow standards.

By default, service tasks are pre-filled based on the selected job category. If not, add them manually.

1. Click the “**+ Add**” button from the Service Tasks tab. You can select existing service tasks or create a custom task.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J6.3.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=cd7fb67d70fa27ce19d6fe53d95fc91a" alt="" width="1904" height="854" data-path="J6.3.png" />

2. Select the tasks and click the **“Add”** button to include them in the job. Once added, the service tasks will appear in the **Service Tasks** section of the job, which the technician should follow while performing the job. <br />For step-by-step instructions on how to configure service tasks, refer to this [article](https://docs.zuper.co/Settings/Modules/Jobs/configuring-service-tasks).

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J6.4.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=f17d06931e76126872dd90babe85414e" alt="" width="1907" height="851" data-path="J6.4.png" />

### E. Part/Service details

This section displays the list of parts and services required to complete the job. It helps ensure that technicians have all the necessary materials and service items available before starting the work. You can add items directly from the inventory as needed.

<Note>
  **Note:** When adding a new group, if any parts within the group have already been added, the system will not create a new line item; instead, it will simply increase the quantity of the existing item.
</Note>

1. Click the “**+ Add**” button in the Part/Service Details section. A drop-down menu will appear, prompting you to choose the parts & services:
   * Add from “*Line Item*,” “*Bundle*,” “[*Section*](https://docs.zuper.co/Accounting/Sections),” “*Item Group*,” or “*Custom Line Item*.”

<Note>
  **Note**: Custom line items will only be added to the specific job, not to your inventory.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect37.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=0014399606469e406c93b03542112c35" alt="Sect37" width="1920" height="878" data-path="images/Sect37.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/sect20.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=c0cf174c9784fa6c88f6d3f9006144f2" alt="Sect20" width="1920" height="878" data-path="images/sect20.png" />
</Frame>

* Select the required part from the pop-up that appears, fill in the details, and click the “**+ Add Product**” button. For step-by-step instructions on how to create a new part/product or service, refer to this [article](https://docs.zuper.co/Inventory_Management/Parts_Services/Create_New_Part_Service).

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J7.1.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=dbac9f793228a5eac4f36ebd136791fe" alt="" width="1913" height="868" data-path="J7.1.png" />

* If **Track Serial Number** is enabled and **Mandate Serial No** is turned on in Settings, you must enter a serial number before proceeding.
* Once the product is added, click the “**Ellipsis**” icon next to the part and choose “**Edit**.”

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J7.1.1.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=5cf754fa1669ac4d2b827d41d106bd7d" alt="" width="1912" height="882" data-path="J7.1.1.png" />

* A dialog box will appear. Under the serial number section, select the required “**Serial Number**” from the drop-down list and click the “**Update Line Item**” button to save the changes.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J24.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=58d121ac2d2748dc779ec761edd197f9" alt="" width="1379" height="622" data-path="J24.png" />

### **Options**

When adding/editing a new part or product to a job, you can select the available **Options** configured for that specific item.

This allows you to quickly select the required attributes when adding the part/product, ensuring the job reflects the customer's selection.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KNwbeG_nVnvoy0AB/images/optijob4.png?fit=max&auto=format&n=KNwbeG_nVnvoy0AB&q=85&s=93c0e0cf0a997916a92d043afc3d77f8" alt="Optijob4" width="1920" height="878" data-path="images/optijob4.png" />
</Frame>

<Note>
  Add one product at a time to avoid duplicate service tasks.

  Adding multiple products in quick succession can cause duplicate service tasks to appear on the job. To prevent this, wait for each product to finish saving before you add the next one.

  If the same line item is added manually more than once, it will appear as separate entries in the list. Always verify the item list before saving the job to avoid unintentional duplicates. The system does not automatically merge duplicate standalone line items added at different times.
</Note>

### Sections

[Sections ](https://docs.zuper.co/Accounting/Sections#adding-sections-in-transactions)replace **Headers** across **Service Packages**, **Proposals**, **Quotes**, **Invoices**, and [**Job** ](https://docs.zuper.co/Accounting/Sections#adding-sections-in-transactions)line items. With [Sections](https://docs.zuper.co/Accounting/Sections#adding-sections-in-transactions), you can control what customers see, from individual line-item details to whether a section appears at all.

### F. Associations

When creating a job, you can associate various modules with the job as needed to streamline field service operations and maintain a centralized record of all relevant information related to the job. These associations help ensure seamless contract execution and tracking.

Click the “**+**” icon next to each section to associate the modules, further enhancing the contract management process and keeping all pertinent information in one easily accessible location.

<AccordionGroup>
  <Accordion title="Assign Users" defaultOpen="false">
    To complete the job, you need to assign it to users/field technicians. The available “**Teams**” and “**Users**” are listed based on the job address and associated Service Territory.

    <Note>
      **Note**: If you want to view all teams and users’ Service Territory, uncheck the “**Filter by Territory**” checkbox.
    </Note>

    <Note>
      Important: Teams and users are filtered and displayed based on the Service Territory only if you have enabled the “**Enable Service Territory**” option in *Settings > Modules> Jobs>>General Settings.*
    </Note>

    Follow the steps below to assign a user to the job:

    1. Click “**+ Assign Users**” under the “**Assign Users**” section on the right.

           <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/J13.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=b2d0d1187a593b243ded19dc221b5a44" alt="" width="1906" height="865" data-path="J13.png" />

    2. Choose user(s) from either the “**Teams**” or “**Users**” tab and click the “**Assign**” icon next to the user.

    Click the “**Save**” button to successfully assign the user to the job.

    <img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J14.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=dc2ee278cf1021e426aca20bc4ebedcd" alt="" width="1906" height="875" data-path="J14.png" />
  </Accordion>

  <Accordion title="Secondary Contacts" defaultOpen="false">
    Click the ***“+ Add Secondary Contacts”*** button at the right of the page to add secondary contacts who are part of that same organization. You can select up to 10 secondary contacts.

    <img src="https://mintcdn.com/zuperinc/IdPtzrOXOvBPmGba/Work_Order_Management/Jobs/J11.png?fit=max&auto=format&n=IdPtzrOXOvBPmGba&q=85&s=e8d933fe8a061f70576ac248999302e8" alt="" width="1911" height="855" data-path="Work_Order_Management/Jobs/J11.png" />

    <Note>
      **Note**: To add secondary contacts, make sure “**Enable Secondary Contacts**” is set to “Yes” in *Organization Settings > Job Settings*, as shown below.
    </Note>
  </Accordion>

  <Accordion title="Projects" defaultOpen="false">
    Associating a project allows field service providers to plan and manage undertakings that span over longer periods of time and involve multiple jobs, people, and materials
  </Accordion>

  <Accordion title="Property" defaultOpen="false">
    A property represents the customer's physical space where field technicians perform their services. Associating property with the job helps streamline scheduling and dispatching, ensuring technicians are assigned to the correct locations.
  </Accordion>

  <Accordion title="Request" defaultOpen="false">
    The request module enables administrators (back-office Admins) and customers to create and manage service requests. You can associate the existing request with the jobs module.
  </Accordion>

  <Accordion title="Contracts" defaultOpen="false">
    Service contracts are signed with customers to offer services for a continuous period. Therefore, the agreement can be constantly renewed or terminated after the period is over. Associating the contract with the job helps to manage the service period efficiently.
  </Accordion>

  <Accordion title="Assets" defaultOpen="false">
    Associating assets with the job enables you to track specific assets covered, ensuring that they receive the necessary maintenance and servicing. This helps manage the lifecycle of the assets and maintain optimal operational performance.
  </Accordion>

  <Accordion title="Contract" defaultOpen="false">
    Service contracts are signed with customers to offer services for a continuous period. Therefore, the agreement can be constantly renewed or terminated after the period is over. Associating the contract with the job helps to manage the service period and list down the services that are offered efficiently.
  </Accordion>

  <Accordion title="Adding attachments" defaultOpen="false">
    Adding attachments with the job allows you to store and manage important documents such as agreements, service reports, or manuals. This ensures easy access to vital information whenever needed, keeping all job-related documentation organized and readily available.
  </Accordion>
</AccordionGroup>

* Complete the “**Other Details**” section (any custom job fields configured by your organization will be displayed here).
* Once all the mandatory fields are complete, click the “**Create Job**” button at the top right corner of the job creation page to finalize the job.

<img src="https://mintcdn.com/zuperinc/dYAhGm6ZVv9gqwSX/J8.png?fit=max&auto=format&n=dYAhGm6ZVv9gqwSX&q=85&s=a15bd0941dd17fff339279d1e9b47930" alt="" width="1909" height="855" data-path="J8.png" />

* A new job is created successfully.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/J10.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=ebc6b3d32f6d8a9cbaac3ff7f9a41cde" alt="" width="1379" height="669" data-path="J10.png" />

<Note>
  **Note:** Once a job is marked as Completed, certain fields — including the associated property, cannot be edited.
</Note>

Complete the "Other Details" section (any custom job fields will be displayed here).

<Note>
  **How job custom fields are prefilled on creation**

  When creating a job from the Jobs module, custom fields are automatically prefilled from matching **Customer** or **Organization** custom fields only. Fields from other entities such as Assets are not used in this flow.

  To prefill job custom fields from an Asset, create the job directly from the **Asset record** instead. Alternatively, use the Workflow Builder's [Copy Custom Fields](/Workflow_builder/workflow_builder_nodes) node to copy matching field values automatically after job creation.

  Prefill applies only when the field **label matches exactly** across both entities.
</Note>

Creating a job in Zuper is a comprehensive process designed to enhance your workflow by integrating all essential job-related details in one place. By leveraging Zuper’s intuitive interface, you can efficiently create jobs and associate them with relevant modules such as contacts, assets, contracts, etc.

## FAQs

<AccordionGroup>
  <Accordion title="Why do existing jobs still show the old email after I updated the customer profile?">
    Zuper saves the new email to the customer or contact profile only. It does not apply the change to jobs that were created before the update. Each existing job stores its own copy of the service contact details from the time the job was created.

    To update the email on an existing job, open the job and edit the service contact details directly. You must do this for each affected job individually.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="The customer, organization, or property on a recurring job series has changed — what do I do?">
    There is no in-app way to update the customer, organization, or property on an existing recurring job series. For example, if a contact has moved to a new organization or a job needs to move to a different site, you need to delete the existing series and recreate it with the correct details.

    Before you delete, note the recurrence schedule, assigned technician, job category, and any other details you will need to recreate the series.

    To replace the series:

    1. Go to **Jobs**, then select **Recurring Jobs**, and locate the series you want to replace.
    2. Select the **Delete** icon on the series.
    3. Check **Delete Associated Recurring Jobs** if you want to remove all future unstarted occurrences. Jobs that are already completed are not affected.
    4. Create a new recurring job with the correct customer, organization, or property details. Reapply the same schedule and assignment configuration.

    Completed jobs from the old series keep their historical records and customer associations as they were at the time of completion. Deleting the recurring series does not remove completed job history.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>


## Related topics

- [Creating and managing service tasks](/Work_Order_Management/Jobs/Creating_and_managing_service_tasks.md)
- [Configuring Job Categories ](/Settings/Modules/Jobs/configuring_Job_categories.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.