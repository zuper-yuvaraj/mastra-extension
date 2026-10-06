---
title: "Enabling Timelogs"
source: https://docs.zuper.co/Timesheets_Management/Timelogs/Settings.md
fetched_at: 2026-10-06T13:29:54.851Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Enabling Timelogs

To start using the Timelog feature in Zuper, you must first enable it at the organization level. This foundational step allows your entire organization to access and utilize the Timelog feature effectively. Once enabled, you can manage and track your field technicians' time on job-related activities such as labor, travel, and breaks.

Follow the steps below to enable Timelog for jobs in your organization settings.

1. Select the “**Settings**” module from the left navigation menu.
2. Select the “**Job Settings**” under “**Organization Settings**” and choose “**Yes**” for the “**Enable Time log for Job**” option.

   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-19.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=5fc162caa50a7fce4e2f44d0979a7c91" alt="Timelog 19 Pn" width="1897" height="866" data-path="Timesheets_Management/Timelogs/timelog-19.png" />
3. Click the **Save Settings** button to confirm the changes made.

Now, as you have enabled the option, you can view the job time log.

## Configure timelog at the Job Category level 

In field service businesses, not all jobs require the same level of time tracking. While capturing both travel and labor time is critical for field jobs, it may be unnecessary for internal tasks like administrative duties or material planning. To address this, Zuper provides the flexibility to configure Timelog settings at the job category level. This ensures that only relevant time data based on the specific requirements of each job type is captured.

<Note>
  **Note**: These Timelog configuration settings are available only if **Enable Time Log for Job** is set to **Yes** under **Settings >** **Organization Settings > Job Settings**. 
</Note>

Follow the steps below to configure timelogs at the job category level.

1. Go to **Settings** > **Job Settings** > **Job Categories**. 
2. Select a job category and click **Edit.** 
3. Or, create a new category by clicking **+ New Category** and filling in the required fields. 

   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-12.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=aeaa5f962cd836854c9add2d7ccdacde" alt="Timelog 12 Pn" width="702" height="674" data-path="Timesheets_Management/Timelogs/timelog-12.png" />

   * Set **Enable Labor Time** to **Yes** if you want to log the time technicians spend working on a job. 
   * Set **Enable Travel Time** to **Yes** if you want to log the time technicians spend traveling during any job-related activity. This includes travel to the job site, between job sites, or any other travel recorded during the job workflow. 

     <Note>
       **Note**: This option is only available if you have selected “**Yes**” in the **Enable Labor Time**. 
     </Note>
4. Click “**Save**/**Update Category**.” 

   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-13.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=9f787d1c1242f1702824ff59ba29149a" alt="Timelog 13 Pn" width="702" height="674" data-path="Timesheets_Management/Timelogs/timelog-13.png" />

Enabling labor time and travel time for this job category will activate options for technicians to log their travel and/or labor time while performing tasks within this category.  

### FAQs

1. **What is a Primary Technician?**

         The Primary Technician in Zuper acts as the Lead or Team Leader for a job. He/she oversees the job's progress, ensures that all technicians perform their tasks accurately, and records their time entries. Additionally, the Primary Technician controls job progression by managing job statuses and leading the workflow. While other team members can view and log their time, the Primary Technician ensures the job is completed efficiently and updates the job status accordingly.
2. **How do I assign a technician as the Primary Technician?**

* Navigate to **Settings** > **Users & Teams** > **Manage Teams**. 

  <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-14.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=b509370d8d01ad3c0bee8115e06d13e1" alt="Timelog 13 Pn" width="1600" height="711" data-path="Timesheets_Management/Timelogs/timelog-14.png" />
* Click the “**Update Assignment**” icon on the respective team.

  <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-15.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=1775b45e994820d27c79cd4ffaff902f" alt="Timelog 13 Pn" width="1600" height="419" data-path="Timesheets_Management/Timelogs/timelog-15.png" />
* On the **Assign/Unassign Team Members** page, click the **star** icon next to the technician's name to mark them as the Primary Technician. 

  <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/timelog-16.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=d09e2523c0571952b2cebffcae6fb7ab" alt="Timelog 13 Pn" width="1600" height="556" data-path="Timesheets_Management/Timelogs/timelog-16.png" />

<Note>
  **Note:** Only one Primary Technician can be assigned per team.  
</Note>

3. **Is it mandatory to assign a Primary Technician to the Job?**

         No, assigning a Primary Technician to the job is optional. However, doing so allows the designated technician to take charge of the workflow and manage job status updates effectively. 
4. **Can I reassign the Primary Technician?**

         Yes, the admin or team lead can reassign the primary technician to a job if the current technician has not yet clocked in. 
5. **What should I do if the Primary Technician is unable to clock out from a job?**

      If the Primary Technician has clocked in for a job but is unable to clock out due to an external challenge, the Primary Technician or an authorized user (such as an admin or team lead) can log in to the Zuper web app and manually clock out from the job.  

6. **Can I assign a primary technician on the User Job assignment step?**

      Yes, when assigning users to a job, you can designate one individual as the primary technician. By default, the primary technician will be displayed in the job assignment when you assign that person to the job. However, you can change the primary technician if needed.


## Related topics

- [Manage timelog summary  ](/Timesheets_Management/Timelogs/Manage_Timelogs.md)
- [Overview](/Timesheets_Management/Timelogs/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.