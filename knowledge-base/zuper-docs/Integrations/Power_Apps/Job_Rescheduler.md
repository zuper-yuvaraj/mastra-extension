---
title: "Job Rescheduler"
source: https://docs.zuper.co/Integrations/Power_Apps/Job_Rescheduler.md
fetched_at: 2026-10-06T13:30:39.665Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Job Rescheduler

The **Job Rescheduler** Power App in Zuper is designed to streamline job scheduling within routes by ensuring that when performing key features, such as manual reordering, route optimization, and so on, the corresponding job dates/times are automatically rescheduled within the route. This capability enhances operational efficiency and accuracy for field service businesses. 

## Connect Job Reschedule with Zuper

Follow these steps to enable the Job Rescheduler app on Zuper: 

1. Log in to your Zuper Account. Click your **Profile picture** in the top right corner and select “**App Store**”.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under “**Browser By Category**”, choose “**Power App**” and then select “**Job Rescheduler**”.  

<img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule1.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=ed05f10488a6b61166cb202ac6b78059" alt="Reschedule1 Pn" width="1544" height="758" data-path="images/reschedule1.png" />

3. Click the “**Install Job Rescheduler**” button.

<img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule2.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=d8a1928b1fd889162be5aa9b54cd8439" alt="Reschedule2 Pn" width="1920" height="878" data-path="images/reschedule2.png" />

4. On the “**Update Job Rescheduler Settings**”, enter the following details to enable the Job Rescheduler in Zuper. 

* **Zuper API Key**(Mandatory)– Enter the Zuper API key. To learn more, see [how I create an API key for my Zuper account](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys).
* **Round-Off Key** - Specify the number of minutes to which the job start date/time must be rounded off, considering travel duration. This field ensures that job start times are adjusted to the nearest specified interval. The available options are: 
  1. **NA**: Schedules the job to start precisely at the calculated arrival time (e.g., 10:02 hours). 
  2. **10-minute Round-off**: This rounds off the job start time to the next 10-minute interval (e.g., arrival at 10:02 will round off to 10:10 hours). 
  3. **15-minute Round-off**: This rounds off the job start time to the next 15-minute interval (e.g., arrival at 10:02 will round off to 10:15 hours). 
  4. **30-minute Round-off**: This rounds off the job start time to the next 30-minute interval (e.g., arrival at 10:02 will round off to 10:30 hours). 

     <Note>
       When jobs are rescheduled within a route, subsequent jobs will be adjusted based on the value specified in the **Round-Off Key** setting. 
     </Note>
* Click the "**Update**" button to connect the Job Re-Scheduler app with Zuper. 

  <img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule3.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=242610b1c27e4538bb101194e87e78fd" alt="Reschedule3 Pn" width="1739" height="829" data-path="images/reschedule3.png" />

Once the app is connected, go to the Zuper “**Dispatch Board—Routes**” module to use its features. 

## Using the Job Rescheduler

### Manual Reordering of Jobs

When you adjust job sequences within routes, the **Job Rescheduler** Zuper Power App automatically updates the scheduled date/times of each job within the route based on the new sequence, and subsequent job times are adjusted based on the value configured in the **Round-Off** field. 

Here’s how to reorder the jobs within the route: 

1. Select the route containing the jobs you wish to reorder in the “**Route**” section.
2. Click the “**Reorder Jobs**” under the “**Kebab**” menu. 
3. Drag-and-drop jobs to adjust the job sequence within the route. 
4. Click the “**Reorder Jobs**” button to save. 
5. After re-ordering the jobs, ensure that the system is refreshed. 

Now, the job date and times are updated to reflect the new sequence of job orders. 

### Rescheduling Route Departure 

When you adjust the departure time of a route to accommodate scheduling or operational needs, the **Job Rescheduler** Zuper Power App automatically adjusts the scheduled dates/times of each job within the route based on the new departure time and any round-off settings configured. 

Here’s how to reschedule a route departure: 

1. Open the details of the route where departure adjustments are needed.
2. Update the departure date and time as required.
3. Save the changes and refresh the system to update job times within the route. For more information, see [Routes](https://care.zuper.co/portal/en/kb/articles/how-to-explore-the-maps-module-in-the-v3-zuper-web-app#Routes) (Edit Route). 

Now, the job date and times are updated to reflect the new sequence of jobs. 

### Moving Jobs Between Routes 

When jobs are transferred from one route to another, the **Job Rescheduler** Zuper Power App automatically adjusts each job's scheduled dates/times within the source and target routes based on the new sequence and any round-off settings configured. 

Here’s how to move jobs between routes: 

1. Choose the jobs you want to transfer from their current route.
2. Click the “**Assign to another Route**” under the "**Ellipsis**" menu.
3. Specify the target route and assign the job by clicking the “**Re-assign**” button.
4. Confirm the job transfer in both the source and target routes.
5. Refresh the system to update the job times in both routes. 

Now, the job date and time in both routes are updated to reflect the new sequence of jobs. 

### Cloning a Route 

Duplicate an existing route to replicate job schedules and operational plans efficiently. When routes are cloned, the **Job Rescheduler** Zuper Power App automatically replicates job schedules from the original route, adjusting job times based on any round-off settings configured. 

Here’s how to clone a route: 

1. Choose the route you want to duplicate.
2. Click the “**Clone Route**” button under the “**Kebab**” menu in the "**Route**" section.
3. Provide a new name for the cloned route and adjust any necessary details. 
4. Click the “**Clone**” button to save the cloned route. 
5. Optionally, you can customize job sequences within the cloned route. For more information, see [Routes](https://care.zuper.co/portal/en/kb/articles/how-to-explore-the-maps-module-in-the-v3-zuper-web-app#Routes). 

Now, the job date and time are updated to reflect the new sequence of jobs. 

### Creating a New Route 

When you create a new route and add jobs to it, the Job Rescheduler Zuper Power App automatically adjusts the scheduled times of each job within the route based on any round-off settings configured. 

Here’s how to create a new route: 

1. Click the “**+**” icon next to Routes.
2. Fill in the required details.
3. Click “**+ Add Job**” to add jobs to the new route by selecting them from the job list.
4. Arrange job sequences within the new route to optimize operational efficiency and refresh the system.  For more information, see [Create New Route](https://care.zuper.co/portal/en/kb/articles/how-to-explore-the-maps-module-in-the-v3-zuper-web-app#Create_New_Route). 

Now, the job date and time are updated to reflect the new sequence of jobs in the newly created route. 

### Best Practices 

1. **Avoid Terminal Status Jobs**: Do not include/reorder jobs in terminal statuses (Closed, Completed, Cancelled) when managing routes.
2. **Manage Unscheduled Jobs**: Consider unscheduled jobs as zero-duration events. Adding an unscheduled job to a route does not affect the route's overall duration; only the travel durations "To" and "From" the job location are factored into scheduling. 

## Uninstall Job Rescheduler from Zuper

1. Log in to your Zuper Account.  Click your Profile picture in the top right corner and select “**App Store**”.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under “**Browser By Category**”, choose “**Power App**” and then select “**Job Rescheduler**”.  

<img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule1.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=ed05f10488a6b61166cb202ac6b78059" alt="Reschedule1 Pn" width="1544" height="758" data-path="images/reschedule1.png" />

3. Click the “**Uninstall App**” button.

<img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule4.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=f19d1b5972144bbc7d7aaf07527f8990" alt="Reschedule4 Pn" width="1739" height="829" data-path="images/reschedule4.png" />

4. The **Job Rescheduler** app is uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/NIjSF2m6jTCTvPA1/images/reschedule6.png?fit=max&auto=format&n=NIjSF2m6jTCTvPA1&q=85&s=7ba84729f421fae256805cd3a8ebfb06" alt="Reschedule6 Pn" width="1920" height="878" data-path="images/reschedule6.png" />

This guide provides a comprehensive overview of effectively using the Job Re-Scheduler Power App in Zuper, highlighting its automated job scheduling capabilities. 


## Related topics

- [Overview of Job](/Work_Order_Management/Jobs/Overview_of_jobs.md)
- [Jobs Gallery](/Work_Order_Management/Jobs/Jobs_gallery.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.