---
title: "Configuring Job Notifications"
source: https://docs.zuper.co/Settings/Modules/Jobs/configuring_job_notifications.md
fetched_at: 2026-10-06T13:30:09.750Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Job Notifications 

Job notifications in Zuper help ensure seamless communication and timely updates regarding job schedules, delays, and status changes. By configuring job notifications, users can set up reminders, alerts, and status updates to keep field technicians, team leaders, and other stakeholders informed in real-time.

This guide provides a detailed walkthrough on how to configure and manage job notifications effectively.

<Frame>
  **Navigation**: Settings -> Modules ->  Jobs -> Job Notifications 
</Frame>

<Warning>
  **Note:** Templates in Job Reminders, Job Delay Alerts, and Job Status Alerts only recognize dynamic expressions from the **Jobs module**. If a template includes an expression from a different module (for example, Quotes), that field will not populate, it renders as raw template syntax instead of the expected value, with no error shown. When building these templates, use only Jobs-module fields via the **Available Components** dropdown.
</Warning>

## Navigating to job notifications  

* Select the "**Settings"** module from the left navigation menu. 

<img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/job1.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=ab9ece2566f50f07b5fb8812f62ca75d" alt="Job1 Pn" width="1920" height="878" data-path="images/job1.png" />

* Click **Modules** and select **Jobs** to open the **Job Settings** page. 
* Choose **Job Notifications**. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job38.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=a750a489b02f915376371d4d6d979ff7" alt="Job38 Pn" width="1920" height="878" data-path="images/job38.png" />

* The **Job Notifications Page** will appear, displaying all existing notifications, including **Job Reminders**, **Job Delay Alerts**, and **Job Status Alerts**. 

## Job Reminders 

## Creating a new job reminder   

To create a job reminder: 

* On the job notifications listing page, click **+ New Job Reminder** next to the **Job Reminder** section. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job39.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=ad991d4fab4b5f22058bf432b6a9e6dd" alt="Job39 Pn" width="1892" height="806" data-path="images/job39.png" />

* A **New Job Reminder** dialog box appears. 
* Fill in the following details: 
  1. **Reminder Name** (*Required*): Enter a name for the reminder.
  2. **Job Category**: Select job categories from the dropdown menu.
  3. **Notification Type** (*Required*): Choose from Push Notification, SMS, or Email.
  4. **Send Reminder To** (*Required*): Select the recipients from options such as: 
     * All assigned users
     * Only assigned team members
     * Only assigned field technicians
     * Assigned field technician’s team leaders
     * Selected users
     * Selected teams 
  5. **Remind Type** (*Required*): Choose from options like: 
     * Scheduled Start Time
     * Relative to Start Time
     * Relative to End Time
     * Relative to Due Date 
  6. **Remind Before/Remind At**: Enter the timing or days for the reminder.
  7. **Alert Template/SMS Body/Email Body** (*Required*): Compose the message using available components.
  8. Click **Save Reminder** to finalize. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job40.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=62fa7c7ecae780f0fc039c0e171a3622" alt="Job40 Pn" width="1920" height="878" data-path="images/job40.png" />

The job reminder will be listed with details such as Reminder Name, Remind At, Remind To, and Status (Active/Inactive). 

### Editing a job reminder  

After creating a job reminder, you can edit, delete, or deactivate it. To update a job reminder's details, follow these steps:

* On the job reminders listing page, click the <Icon icon="ellipsis-vertical" color="#060606" />icon under **Actions** and select **Edit Job Reminder** next to the specific reminder. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job41.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=db5faf1d2002815771f2e7fa35108b34" alt="Job41 Pn" width="1878" height="818" data-path="images/job41.png" />

* Modify the necessary details. 
* Click **Update Reminder** to save changes. 

### Clone job reminder 

If you'd like to create a new job reminder based on an existing one, you can quickly do so using the **Clone Job Reminder** option. Follow these steps:

* On the job reminders listing page, click the <Icon icon="ellipsis-vertical" color="#090909" />icon under **Actions** and select **Clone Job Reminder**. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job42.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=249d0be47ee72e48c80fc527842a9db4" alt="Job42 Pn" width="1878" height="818" data-path="images/job42.png" />

* The **Clone Job Reminder** dialog appears with existing details. 
* Update the necessary fields and click **Clone Reminder**. 

### Deactivate/Activate job reminder 

To deactivate or activate an existing job reminder: 

* On the job reminders listing page, click the <Icon icon="ellipsis-vertical" color="#141313" />icon under **Actions** and select **Deactivate/Activate Job Reminder**  

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job43.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=4b83725cb6936f5c7f5b375513ede1ce" alt="Job43 Pn" width="1878" height="818" data-path="images/job43.png" />

* A confirmation dialog box will appear.  
*  Click **Deactivate** or **Activate** to confirm your changes. 

### Delete job reminder 

To delete an existing job reminder: 

* On the job reminders listing page, click the <Icon icon="ellipsis-vertical" color="#030303" />icon under **Actions** and select **Delete Job Reminder** next to the specific reminder that you want to delete. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job44.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=4d3eb745703f6f371c0e0a3f1fc3c2c5" alt="Job44 Pn" width="1895" height="821" data-path="images/job44.png" />

* A confirmation dialog box will appear.  
* Click **Delete** to permanently remove the job reminder. 

## Job Delay Alerts 

### Creating a new job delay alert 

To create a new job delay alert:  

* On the job notifications listing page, click **+ New Delay Alert** next to the **Job Delay Alerts** section. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job45.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=719cf7765f5d16437535d83d3aea15f6" alt="Job45 Pn" width="1920" height="878" data-path="images/job45.png" />

* A **New Job Delay Alert** dialog appears. 
* Fill in the following details: 
* **Alert Name** (*Required*): Enter a name for the alert. 
* **Notification Type** (*Required*): Choose from Push Notification, SMS, or Email. 
* **Delay Alert Type** (*Required*): Select from: 
  1. Based on Job Start Time
  2. Based on Job End Time
  3. Based on Job Due Date
  4. Based on Status (Requires selecting "From Job Status" and "To Job Status") 
* **Alert If Job Delayed By**: Specify time or days. 
* **Send Reminder To** (*Required*): Select recipients as described in job reminders. 
* **Flag Job as Delayed?**: Check/uncheck the box as needed. 

<Note>
  **Note**: <Icon icon="timer" /> icon will indicate the delay in the jobs modules.
</Note>

* **Alert Template/SMS Body/Email Body** (*Required*): Compose the message. 
* Click **Save Alert**. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job46.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=4b0a4f6739ed8f86b0dc597d010e3f2b" alt="Job46 Pn" width="1920" height="878" data-path="images/job46.png" />

The job delay alert is added with details such as Alert Name, Job Category, Alert If Delayed By, Remind To, and Status (Active/Inactive). 

### Editing a Job Delay Alert 

* On the job delay alerts listing page, click the<Icon icon="ellipsis-vertical" color="#0f0e0e" />icon under **Actions** and select **Edit Delay Alert**. 
* Modify necessary details. 
* Click **Update Alert** to save changes. 

### Clone Job Delay Alert 

* On the job delay alerts listing page, click the <Icon icon="ellipsis-vertical" color="#010101" />**icon** under **Actions** and select **Clone Delay Alert**. 
* The **Clone Job Delay Alert** dialog appears with existing details. 
* Update the necessary fields as needed. 
* Click **Clone Alert** to clone the alert.  

### Deactivate/Activate Job Delay Alert  

To deactivate or activate an existing job delay alert: 

* On the job delay alerts listing page, click the <Icon icon="ellipsis-vertical" color="#060606" />icon under **Actions** and select **Deactivate/Activate Delay Alert**  next to the specific alert that you want to deactivate or activate. 
* A confirmation dialog box will appear.  
*  Click **Deactivate** or **Activate** to confirm your changes. 

### Delete Job Delay Alert 

To delete an existing job delay alert: 

* On the job delay alerts listing page, click the <Icon icon="ellipsis-vertical" color="#0f0f0f" />icon under Actions and select **Delete Delay Alert** next to the specific delay alert that you want to delete. 
* A confirmation dialog box will appear.  
* Click **Delete** to permanently remove the job delay alert. 

## Job Status Alerts 

### Creating a new Job Status Alert 

* On the job notifications listing page, click **+ New Status Alert** next to the **Job Status Alerts** section. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job51.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=e6ce5e7023141e10b07b1dbf32c8c03a" alt="Job51 Pn" width="1920" height="878" data-path="images/job51.png" />

* A **New Job Status Alert** dialog box appears. 
* Fill in the following details: 
  1. **Alert Name**(*Required*): Enter a name for the alert.
  2. **Notification Type**(*Required*): Choose from Push Notification, SMS, or Email.
  3. **Send Reminder To**(*Required*): Select recipients as described in job reminders.
  4. **Job Category**: Choose from the dropdown menu.
  5. **Job Status**: Select a status.
  6. **Alert Template/SMS Body/Email Body**(*Required*): Compose the message. 
* Click **Save Notification**. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job52.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=c5b93bb372c5e7e8cd75f8fe3236a447" alt="Job52 Pn" width="1920" height="878" data-path="images/job52.png" />

The job status alert is added with details such as Alert Name, Job Category, Job Status, and Status (Active/Inactive). 

### Editing a Job Status Alert 

* On the job status alerts listing page, click the <Icon icon="ellipsis-vertical" color="#070707" />icon under **Actions** and select "**Edit Status Alert**" next to the specific job status alert. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job53.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=a7557f6a8c6d80193cd140a9f79b82e7" alt="Job53 Pn" width="1897" height="871" data-path="images/job53.png" />

* The Edit Job Status Alert will open. 
* Make the necessary changes.  
* Click **Update Notification** to save the changes.  

### Clone Job Status Alert 

To clone an existing job status alert: 

* On the job status alerts listing page, click the <Icon icon="ellipsis-vertical" color="#040404" />icon under **Actions** and select "**Clone Status Alert"** next to the specific alert that you want to clone.  

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job54.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=c533eab37d6785a5d1e6563f82509839" alt="Job54 Pn" width="1897" height="871" data-path="images/job54.png" />

* The Clone Job Status Alert dialog box will open with existing alert details.   
* Update the necessary changes as needed 
* Click **Clone Notification** to clone the alert.  

### Deactivate/Activate Job Status Alert  

To deactivate or activate an existing job status alert: 

* On the job status alerts listing page, click the <Icon icon="ellipsis-vertical" color="#0b0a0a" />icon under **Actions** and select **Deactivate/Activate Status Alert** next to the specific alert that you want to deactivate or activate. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job55.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=3c35062a839b71d44a8314491f7efb55" alt="Job55 Pn" width="1897" height="871" data-path="images/job55.png" />

* A confirmation dialog box will appear.  
* Click **Deactivate** or **Activate** to confirm your changes. 

### Delete Job Status Alert 

To delete an existing job status alert: 

* On the job status alerts listing page, click the <Icon icon="ellipsis-vertical" color="#090808" />icon under **Actions** and select "**Delete Status Alert**" next to the specific status alert that you want to delete. 

<img src="https://mintcdn.com/zuperinc/p87sruICm1mYfxS7/images/job56.png?fit=max&auto=format&n=p87sruICm1mYfxS7&q=85&s=3c3a77f2537311b5041dfa4e8391e898" alt="Job56 Pn" width="1893" height="767" data-path="images/job56.png" />

* A confirmation dialog box will appear.  
* Click **Delete** to permanently remove the job status alert. 

<Note>
  When manually sharing a job card via email, the template must be selected manually each time — Zuper does not auto-select based on job category or customer type. To send automated job completion emails, set up a Job Status Alert in Settings → Modules → Jobs → Job Notifications.

  This means:

  If you have created a '**Maintenance Visit Completed**' email template, it will not be pre-selected when you click '**Share via Email**' on a maintenance job — you must choose it manually from the dropdown.

  Only the default Job Completion Email template is pre-populated by default
</Note>

##  **Customer / contact reminder**

<Frame>
  **Navigation**: *Settings -> Modules -> Customer-Contact -> Customer-Contact Custom Notifications*
</Frame>

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” click “**Customer/Contact Notifications**.”

<img src="https://mintcdn.com/zuperinc/pxTptnlvzAxUHNcI/images/configjcu1-2.png?fit=max&auto=format&n=pxTptnlvzAxUHNcI&q=85&s=2adc626184d21a4cf6d0a4357ae35879" alt="Configjcu1 2" width="1903" height="876" data-path="images/configjcu1-2.png" />

2. Click “**+ New Reminder**.”

<img src="https://mintcdn.com/zuperinc/pxTptnlvzAxUHNcI/images/configjcu2-1.png?fit=max&auto=format&n=pxTptnlvzAxUHNcI&q=85&s=00d00c7c91cf66afa2c5619b805a8f56" alt="Configjcu2 1" width="1920" height="878" data-path="images/configjcu2-1.png" />

3. Fill in the reminder details

* Reminder Name: Enter a name for the reminder.
* Job Category: Select the job category.
* Notification Type: Choose the type of notification.
* Remind Type: Select the reminder type.
* Remind At / Before: Set a specific time for the reminder.
* SMS / Email Body: Enter the message content. Use the Available  Components dropdown to insert dynamic fields, such as customer fields or job details (e.g., "The scheduled job starts at...").
* Notify for Unassigned Jobs: Check this box to receive a reminder to apply.

<img src="https://mintcdn.com/zuperinc/IENTwGQ4j1wAvk7t/images/configjcu3.png?fit=max&auto=format&n=IENTwGQ4j1wAvk7t&q=85&s=edba1cf10d041ef38366e5d289124770" alt="Configjcu3" width="1920" height="878" data-path="images/configjcu3.png" />

 Click “**Save Reminder**” to save the reminder.

## **Customer /Contact Status Alerts**

1. Select the “**Settings**” module from the left panel. Under the “**Modules**,” click “**Customer/Contact Notifications**.”
2. Click “**+ New Notification**.”
3. Enter/Select the details:
   * Notification Name: Enter a descriptive name for the alert.
   * Notification Type: Select the type of notification. Choose the type of notification.
   * Job Category: Select the relevant job category.
   * Job Status: Choose the status that will trigger the notification.
   * SMS /Email Body: Enter the message to be sent. You can use dynamic components to personalize the message.
   * Use the Available Components dropdown to insert dynamic fields, such as customer fields or job details.

Click “**Save Notification**” to set the notification.

<Note>
  **One job category per alert:** Each customer/contact status alert applies to a single job category. Selecting multiple job categories within one alert is not supported. To notify customers across multiple job categories for the same status change (for example, an SMS when the status changes to "**On My Way**"), create a separate status alert for each job category.

  To speed this up, use the **Clone Status Alert** option: create the alert once, then clone it and change only the Job Category field for each additional category. This ensures the trigger works correctly for every category while keeping the message content consistent.
</Note>

### FAQs

<AccordionGroup>
  <Accordion title="Why do older job notes appear in new notifications?">
    When a new note is added to a job, the Zuper mobile app notification    banner displays **all unread job notes collectively** — not just the    newest one. This means if previous note notifications have not been    opened or cleared, they will reappear alongside the new note in the    banner.

    This is expected behaviour based on how mobile operating systems group    app notifications, and is not a bug.

    **To resolve this:**

    * Open the Zuper app to mark all pending notifications as read, or
    * Clear the notification banner on your device manually.

    Once existing notifications are cleared, only new notes will appear    going forward.
  </Accordion>
</AccordionGroup>

 


## Related topics

- [Configuring General Job Settings](/Settings/Modules/Jobs/Configuring_General_Job_settings.md)
- [Configuring Job Costing ](/Job_Costing/Configuring_Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.