---
title: "Configuring General Job Settings"
source: https://docs.zuper.co/Settings/Modules/Jobs/Configuring_General_Job_settings.md
fetched_at: 2026-10-06T13:30:09.193Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring General Job Settings

The general job settings page in Zuper allows administrators to define key job-related configurations to streamline operations, improve access control, and enhance communication. These settings help customize how jobs are assigned, managed, and tracked based on business needs.

Within the General Job Settings page, you can configure the following:

1. **General** – Define core job settings such as prefixes, recurring jobs, job card email templates, and timelog tracking.
2. **Access/Permissions** – Set the level of access field technicians and team leaders have for job visibility, editing, and rescheduling.
3. **Assignment** – Control how jobs are assigned, unassigned, and managed across teams.
4. **Route** – Configure routing options, including rescheduling and route optimization.
5. **Chat** – Manage job channel–related configurations, including automatically adding job creators and key users (such as managers or dispatchers) to job chat channels for streamlined communication and visibility.

<Frame>
  **Navigation**: Settings -> Modules -> Jobs -> General Job Settings 
</Frame>

## Job general settings 

To configure general settings related to jobs: 

* Select the "**Settings**" module from the left navigation menu. 

<img src="https://mintcdn.com/zuperinc/jg6Low63SzFJkzs4/images/v3set.png?fit=max&auto=format&n=jg6Low63SzFJkzs4&q=85&s=2dddfa4578953982479464ba3e14eeb7" alt="V3set Pn" width="1904" height="877" data-path="images/v3set.png" />

* Click "**Modules"** and choose "**Jobs**" to open the Job Settings page. 
* Select "**General Job Settings**." By default, you will land on the **General** tab. 

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/job14.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=6d8b04b5258620675be98896bc61332a" alt="Job14 Pn" width="1920" height="878" data-path="images/job14.png" />

* Configure job-related preferences to streamline workflows, improve tracking, and enhance customer communication. 

### General settings options 

* **Job Prefix** Define a custom identifier prefixed to all work order numbers. A job prefix helps categorize jobs systematically, making them easily identifiable. 

* **Enable Recurring Jobs** Enabling this option allows jobs to be scheduled on a recurring basis, useful for routine maintenance tasks or service agreements requiring periodic visits. 

* **Enable Secondary Contacts**  When enabled, additional contacts can be added for a job. Secondary contacts receive job-related notifications, ensuring all relevant stakeholders stay informed. 

* **Allow managing tasks in completed jobs** When enabled, you can create, edit, assign, and manage tasks even after a job status is marked as *Completed*. When disabled, the system requires all tasks to be completed before the job can be marked as Completed.

* **Enable Job Gallery** When enabled, users can upload and view images related to a job. The job gallery serves as a centralized visual reference, helping teams document job progress, capture on-site issues, and maintain visual records for quality assurance.

* **Set Job Gallery as public by default** When **enabled**, every new photo uploaded to any job gallery becomes Public automatically. Your customers can then see it as soon as you share a Gallery or Timeline link. When **disabled**, new uploads default to Internal instead. They stay hidden from customers until the photo’s visibility is manually altered. Turning this setting off later does not change photos that are already Public, and it does not affect links you already shared. Those links continue to show only the photos that were Public when you shared them, even though new photos uploaded afterward still appear in the job gallery. To make a specific photo public again, open it in the gallery and update its **Visibility**, as described in \[[Jobs gallery](https://docs.zuper.co/Work_Order_Management/Jobs/Jobs_gallery)]

* **Enable Job Total**: Enabling this option displays the '*Job Value*' field on each job. Once enabled, an option to choose the "***Job’s Total Calculation Method***" is available, directly below it. This controls the method Zuper uses to calculate the Job Value.<br /><br />**Job’s Total Calculation Methods**:<br />• Sum of Accepted Quote Values Associated with the Job: *Uses the total value of accepted quotes linked to the job as its value.*<br />• Sum of Selling Price of Job Line Items: *Uses the sum of selling price of parts, products, and services that are part of the job line-items.*<br /><br />**<u>Note</u>**: The above calculation method is also used to calculate the total job revenue while calculating the[ job profitability](https://docs.zuper.co/Zuper_for_Roofing/Job_Costing).

<Frame>
  <img src="https://mintcdn.com/zuperinc/gWJia2j1j4s_GVKa/images/Jbcost1.png?fit=max&auto=format&n=gWJia2j1j4s_GVKa&q=85&s=f0f1375b3579dd2ca6198d1b8ee46a17" alt="Jbcost1" width="1920" height="878" data-path="images/Jbcost1.png" />
</Frame>

* **Auto-stamp images with geo-coordinates** Enabling this will automatically add GPS coordinates to images uploaded in the job gallery. This helps verify the location of work performed and improves accountability and record-keeping.
* **Auto stamp images with date & time** When enabled, automatically add date and time stamps to images uploaded in the job gallery. This ensures accurate documentation of job progress and timelines.
* **Enable Service Territories** Activating this option allows you to assign jobs based on predefined geographic territories. This helps optimize resource allocation, reduce travel time, and improve service delivery by routing jobs to technicians in the relevant area.
* **Enable Switching Timezones** When enabled, users can view and manage job details across different time zones. This is particularly useful for businesses operating in multiple regions, ensuring accurate scheduling and coordination regardless of location.
* **Enable Job Visibility for Technicians** Enabling this option ensures that technicians only see jobs assigned to them or within their access permissions, maintaining data privacy and clarity.
* **Enable Kanban View** Enable the Kanban view for jobs, allowing teams to visualize work progress across different stages. This improves task tracking, prioritization, and workflow management.
* **Default Job Card Email Template**  Define a standard email template for job cards sent to customers. A predefined template ensures consistent communication and includes necessary job details. 

<img src="https://mintcdn.com/zuperinc/JIoNofYYD4S_d65V/images/general.png?fit=max&auto=format&n=JIoNofYYD4S_d65V&q=85&s=560caf74c88c0ecc4df76c05e2d27037" alt="General Pn" width="1661" height="813" data-path="images/general.png" />

* **Type of View for FE** 

Determines how jobs are displayed for field technicians within the mobile app. Available options: 

1. **List View** – Displays jobs in a simple list format.
2. **Route View** – Displays jobs based on location, optimizing route planning.
3. **Both Views** – Allows users to toggle between list and route views. 

* **Allow sending public link to Customer** When enabled, customers receive a public link to track job details and updates, enhancing transparency and reducing manual status inquiries. 
* **Status for public link to be sent** Select the job status at which the public link will be sent to the customer. This ensures customers are notified at the appropriate stage of job completion.
* **Enable Timelog for Job**  When enabled, it activates timelog tracking for jobs.  

1. **Choose Status for Automated Clock-In** 

Define a job status that automatically triggers a clock-in for field technicians, reducing manual time entry errors and ensuring accurate job start tracking. 

2. **Choose Status for Automated Clock-Out** 

Define job statuses that will automatically trigger a clock-out when a job reaches the selected statuses. Clock-out also occurs when a job is marked **Closed** or **Completed**, ensuring accurate work-hour tracking. 

* **Default Job PDF Filename** 

Define the standard naming convention for job-related PDF files to ensure consistency and easy identification when generating and sharing job documents. 

<Accordion title="Unifying Timestamp and GPS Co-ordinates" icon="sparkles">
  Zuper now allows admins to control how timestamps and geo-coordinates are applied to images across the entire platform. This unified configuration provides a single point of control for metadata stamping, ensuring consistency in image evidence across various modules.

  This feature simplifies management by enforcing a company-wide rule for when and how images display location and time data, helping teams maintain auditability and compliance standards.

  **Who can use this feature:**

  * Available for **Admin** users with access to **Company Settings**.

   **Prerequisites:**

  * The user’s device must have granted **location permissions** for GPS stamping to work.
  * The **Zuper Camera** component must be used to capture images (Images uploaded from the device gallery are excluded from stamping).

  ### **Settings Configuration**

  1. Go to **Settings > Jobs > General > Enable Image Geo Stamping and Enable Stamp Image with Date and Time**.
  2. Toggle the following options:
     * **Enable Image Geo-Stamping:** Adds GPS coordinates to all captured images.
     * **Enable Stamp Image with Date/Time:** Displays the date and time directly on the image as a visual overlay.
  3. Click the **Save** button to save the settings.

  <img src="https://mintcdn.com/zuperinc/jg6Low63SzFJkzs4/images/unif9.png?fit=max&auto=format&n=jg6Low63SzFJkzs4&q=85&s=f69f46095ca4d88de741ea7d6e03129f" alt="Unif9 Pn" width="1914" height="863" data-path="images/unif9.png" />

  4. Once enabled, image stamping applies to:
     * Checklists
     * Notes Attachments + Images taken in walkthrough notes
     * Attachments (Job and Project)
     * Inspection Forms (Job)
     * Gallery Upload (camera)

  ### Mobile App

  Once enabled, these settings will automatically apply to all the image applicable areas.

  When you add a new image as an attachment, you can view the timestamp and geo-coordinates under the gallery.

  <img src="https://mintcdn.com/zuperinc/jg6Low63SzFJkzs4/images/unif8.png?fit=max&auto=format&n=jg6Low63SzFJkzs4&q=85&s=319fa25e89dc0f531f415997672eb612" alt="Unif8 Pn" width="1419" height="2796" data-path="images/unif8.png" />

  **Checklist Fallback Logic:**

  * **When Company Configuration is ON:**
    * GPS and Date/Time are always stamped, regardless of checklist-level settings.
    * Checklist-level toggles appear **greyed out** (disabled).
    * Existing checklists automatically apply stamping.
    * New checklist questions default to enabled stamping in the company settings applied.
  * **When Company Configuration is OFF:**
    * Individual checklist toggles remain available and can independently control watermarking only in the checklists.

  **Precedence Rule:**<br />Company-level configuration always overrides checklist-level settings.

  **Edge Cases and Behavior:**

  * **Retroactive Stamping:** Not supported — only applies to new images captured after enabling.
  * **Location Permission Denied:** The user will be prompted to enable location permissions before capturing an image.

   **Best Practices:**

  * Keep both settings enabled for complete audit visibility on field data.
  * Inform field users when stamping is enforced to avoid confusion about overlays.
  * Encourage enabling location services on mobile devices before the job starts.

   **Troubleshooting:**

  | **Issue** | **Possible Cause** | **Solution** |
  | :- | :- | :- |
  | Image not showing GPS data | Location permission denied | Enable GPS/location access on the device and retake the photo. |
  | Checklist toggle is greyed out | Company-level setting is ON | This is expected behavior; the company configuration takes precedence. |
  | Timestamp missing | “Stamp Image with Date/Time” is disabled at the company level | Re-enable this toggle under Company Settings. |

  **Frequently Asked Questions (FAQs)**

  **1. What does the “Enable Image Geo-Stamping” option do?**<br />When this option is enabled, Zuper automatically captures the GPS coordinates of where an image was taken and stores them as part of the image metadata.

  **2. What does the “Enable Stamp Image with Date/Time” option do?**<br />This setting adds a visible overlay showing the date and time on every image captured using the Zuper Camera. It ensures that image evidence includes a precise timestamp.

  **3. Which Zuper modules support image stamping?**<br />Once enabled, image stamping applies to:

  * Checklists
  * Notes Attachments + Images taken in walkthrough notes
  * Attachments (Job and Project)
  * Inspection Forms (Job)
  * Gallery Upload (camera)
</Accordion>

* **Default From Email**

This setting lets you choose which email address appears as the sender when Zuper sends job-related emails to your customers.

The dropdown lists all SMTP-configured email addresses you have configured in [Outbound Email Settings](/Settings/Miscellaneous/Outbound_email_templates). You can select the address you want customers to see in their inbox.

Choose which email address appears as the sender when Zuper sends job-related emails to your customers. The dropdown lists all SMTP-configured email addresses you have added in Outbound Email Settings. The address you select here automatically appears as the **From ID** when you share a **job**, **quote**, or **invoice** by email.

<Note>
  **Note**: This setting works only with SMTP-configured emails. If you haven't configured any outbound email addresses yet, the dropdown will show no options. Set up your SMTP addresses first, then return here to make your selection.
</Note>

## Configure Access/Permission settings 

To configure access and permission settings: 

* On the **General Job Settings** page, go to the **Access/Permissions** tab. 

<img src="https://mintcdn.com/zuperinc/JIoNofYYD4S_d65V/images/general1.png?fit=max&auto=format&n=JIoNofYYD4S_d65V&q=85&s=f5825a21ce8eabf40cbbee1270c0773d" alt="General1 Pn" width="1906" height="777" data-path="images/general1.png" />

* Control the level of access field technicians and team leaders have over jobs. 

### Access/Permission options 

* **Team Leader Access to All Field Techs' Jobs Across Teams**  **Yes**: A team leader can view and manage jobs assigned to all field technicians, including those outside their team.  **No**: A team leader can only view jobs assigned within their own team. 
* **Field Technician Access to All Jobs for a Customer**  **Yes**: A field technician can view all jobs associated with a specific customer.  **No**: The technician can only view their assigned jobs. 
* **Field Technician Access to All Jobs of an Organization**  **Yes**: A field technician can view all jobs linked to an organization.  **No**: The technician is restricted to only their assigned jobs. 
* **Field Technician Access to All Jobs of a Property**  **Yes**: A field technician can access all jobs related to a specific property.  **No**: Access is limited to assigned jobs only. 
* **Field Technician Access to All Jobs of an Asset**  **Yes**: A field technician can view all jobs performed on a specific asset.  **No**: The technician can only view assigned jobs. 
* **Allow field techs to access their past unassigned jobs?**  **Yes**: A field technician can view and access their previously unassigned jobs, even if they are no longer assigned to them.  **No**: Once a job is unassigned from the technician, they will no longer have access to it. 
* **Can field technician create new jobs?**  **Yes**: A field technician can create new jobs directly from the mobile app or web platform.  **No**: Only authorized users, such as team leaders or managers, can create jobs.  
* **Can field technician view jobs without punch-in?**  **Yes**: A field technician can access job details even if they haven’t punched in for their shift.  **No**: The technician must be punched in to view job details. 
* **Require facial authentication to view jobs?**  **Yes**: The field technician must complete facial authentication before accessing job details.  **No**: The technician can view jobs without additional authentication. 
* **Can field technician reschedule a job?**  **Yes**: The technician can modify job schedules based on availability or customer requests.  **No**: Only authorized users, such as dispatchers or team leaders, can reschedule jobs. 
* **Can field technician edit a job?**  **Yes**: The technician can update job details such as notes, status, or additional information.  **No**: Job details can only be modified by a manager or team leader. 
* **Can field technician view other assigned users?**  **Yes**: The technician can see other team members assigned to the same job for better collaboration.  **No**: The technician can only view their own assignments. 
* **Can field technician accept/decline the job?**  **Yes**: The technician has the option to accept or decline assigned jobs based on availability.  **No**: Jobs are automatically assigned, and the technician must follow the schedule. 
* **Can Team Leader access jobs based on Service Territory ownership?** **Yes**: The team leader can view and manage jobs that fall within the service territories they own or are assigned to, ensuring focused supervision and efficient territory-based management. **No**: The team leader can access all jobs regardless of service territory ownership, allowing broader visibility across regions.

## Configure Assignment settings 

To configure assignment-related settings: 

* On the **General Job Settings** page, navigate to the **Assignment** tab. 
* Control how field technicians are assigned, unassigned, and notified when handling job allocations. <img src="https://mintcdn.com/zuperinc/t5Ge0uu1AhBFQ2ss/images/tasksettings-01.png?fit=max&auto=format&n=t5Ge0uu1AhBFQ2ss&q=85&s=7d88810ecfc58a3f451b676a815e47a2" alt="Tasksettings 01" width="1920" height="869" data-path="images/tasksettings-01.png" />

### Assignment options 

* **Unassign Other Field Techs When One Accepts the Job?**  **Yes**: The system automatically unassigns other technicians once one accepts the job.  **No**: All assigned technicians remain on the job. 
* **Unassign Field Technician Upon Rejection?**  **Yes**: The users will automatically be unassigned upon rejection.  **No**: The job remains assigned until manually reassigned. 
* **Alert Job/Time-Off Conflict Upon Assignment?**  **Yes**: The system alerts managers if a job is assigned to a technician with a time-off request.  **No**: Job assignments proceed without conflict alerts. 
* **Automatically add task assignees to the job** (This setting is enabled by default.) **Yes**: Assigning a user to a task automatically adds them as an assignee on the job as well. **No**: The user is assigned to the task only and is not added to the job.
* **Retain team when users are unassigned from the job?**  **Yes**: When users are unassigned from a job, the assigned team remains on the job without changes. The job continues with the existing team structure.   **No**: If users are unassigned, the entire team is removed from the job, requiring reassignment if needed.  
* **Notify users upon assignment** **Yes**: Automatically sends notifications to users whenever they are assigned to a job, ensuring timely awareness of new assignments. **No**: Users will not receive notifications upon assignment and must manually check for new jobs.

## Configure Route settings 

To configure route-related settings: 

* On the **General Job Settings** page, navigate to the **Route** tab. 

<img src="https://mintcdn.com/zuperinc/JIoNofYYD4S_d65V/images/general3.png?fit=max&auto=format&n=JIoNofYYD4S_d65V&q=85&s=2b9bb721a9780c666009477af97d6ee8" alt="General3 Pn" width="1908" height="580" data-path="images/general3.png" />

* Configure route optimization and rescheduling permissions for field technicians. 

### Route Settings options 

* **Enforce sequential execution of jobs in route?**

**Yes**: Field technicians must complete jobs in the specified route sequence, ensuring planned travel efficiency and order compliance.

**No**: Technicians can complete jobs in any order, allowing greater flexibility in managing their routes.

* **Allow Route Rescheduling to Past?** 

**Yes**: Field technicians can reschedule routes to past dates. 

* **Can Field Technician Optimize Routes?** 

**Yes**: Field technicians can optimize their assigned routes

**No**: Route optimization is restricted to managers. 

* **Choose Distance metric**: Select the preferred unit of measurement for distance tracking—**Miles** or **Kilometers**—based on regional or organizational preferences.

## Configure Chat settings 

To configure chat-related settings: 

* On the **General Job Settings** page, navigate to the **Chat** tab. 

<img src="https://mintcdn.com/zuperinc/2D6CdIoqtEgbTlBl/images/General4.png?fit=max&auto=format&n=2D6CdIoqtEgbTlBl&q=85&s=900eefd2f7c74e765ee7d2daaae16b2b" alt="General4 Pn" width="1162" height="448" data-path="images/General4.png" />

* Define how job notifications are sent to relevant users. 

### Chat options 

* **Add Job Creator to Job Channel** – Toggle **Yes** to automatically include the job creator in the associated job chat channel.
* **Add These Users to All Job Channels** – Enter the names of users who should be added by default to every job channel (for example, managers or dispatchers).


## Related topics

- [Configuring Project Settings](/Settings/Modules/Projects/Project_Settings.md)
- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.