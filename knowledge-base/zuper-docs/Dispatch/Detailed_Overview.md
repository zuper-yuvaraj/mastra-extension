---
title: "Users, Scheduler, and Map layouts"
source: https://docs.zuper.co/Dispatch/Detailed_Overview.md
fetched_at: 2026-10-06T13:29:43.378Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

#  Users, Scheduler, and Map layouts

In addition to the dispatcher queue, the dispatch board includes several other interconnected layouts: **Users, Scheduler,** and **Map**. These layouts work together seamlessly to provide a comprehensive view of operations and enhance the efficiency of task management.

<Frame>
  **Navigation**: ***Dispatch Board -> Users | Scheduler | Maps***
</Frame>

Here's how each layout contributes to the overall functionality of the dispatch board:

## Users

The user layout on the Dispatch Board enables you to shortlist technicians based on teams and schedule dates. This helps you track and plan routes/jobs more effectively by focusing on specific teams and daily schedules.\
\
To select a team, view the technicians in that team (along with their assigned jobs/routes on the selected date in the **Scheduler** view), and optimize your planning, follow these steps:

1. Select the *team* *name* from the drop-down menu. All technicians in the selected team will appear in the Scheduler, along with any assigned jobs or routes for the chosen date. If jobs are assigned on that date, their locations are also visible on the Map.
   <Note>
     **Note**: The team picker on the Dispatch Board only shows dispatchable teams. If you cannot find a team in the list, it may have been marked as non-dispatchable in **Settings -> Users & Teams -> Team Management**. To make the team available again, uncheck the **Non-Dispatchable** checkbox for that team.
   </Note>

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-1.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=d732372e45cdb70bf52e05b3eddc9938" alt="" width="1920" height="878" data-path="Dispatch/images/board-1.png" />

2. Change the *date* using the date picker. This lets you quickly view a technician’s schedule for any specific date and plan assignments accordingly.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-2.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=aa5be0abaca0298f61344d188bc0c8d7" alt="" width="1920" height="878" data-path="Dispatch/images/board-2.png" />

3. You can also refine the only available technicians using the new quick filter:
   * Toggle on the “**Only Available Technicians**” in the Users filters area.
   * When enabled, the Users panel automatically hides technicians who are unavailable for the entire selected day due to:
     1. An **All-Day Time-Off** entry, or
     2. An **All-Day Non-Job Event** marked as **Busy**.
   * Partial-day time-offs or non-job events do **not** hide technicians; they remain visible with their open time slots shown. This reduces clutter, prevents accidental assignments to fully unavailable technicians, and helps you focus faster on those with real availability.

<img src="https://mintcdn.com/zuperinc/5IslZpnfWo5NH__c/images/usersfilter.png?fit=max&auto=format&n=5IslZpnfWo5NH__c&q=85&s=461b2e9e46366ca891aeb914dd11fe97" alt="Usersfilter" width="1920" height="869" data-path="images/usersfilter.png" />

4. Once the team, date, and filtered list are set, review each technician’s load and availability:
   * Hover over a technician to see their current job count (load).
   * Check the Scheduler slots for any planned time blocks on the selected date. Based on this, drag and drop the job or route from the Dispatcher Queue directly onto an available technician in the Scheduler. You’ll be prompted to confirm the start and end times.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-2.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=aa5be0abaca0298f61344d188bc0c8d7" alt="" width="1920" height="878" data-path="Dispatch/images/board-2.png" />

## Scheduler

As dispatcher queue, the Scheduler is also one of the essential layouts in the dispatch board that helps you perform the following activities.

1. Schedule a job/route for the user at a specific date/time and view the scheduled/assigned jobs/routes to the user. 
2. Create a Job and New Time-Off.

### Schedule/View Assigned Jobs/Routes in the Scheduler

In the scheduler, you can schedule and view all the jobs and routes that have been assigned to technicians. This view provides a detailed overview of each technician’s schedule and helps you manage and optimize technicians' workload effectively. 

To schedule and view jobs/routes in the scheduler, you need to go to the dispatcher queue and select either the “**Jobs**” or “**Routes**” stream. Once selected, you can assign/schedule Jobs/Routes in the Scheduler.

For example, if you have selected the Jobs stream and shortlisted "**Unassigned Jobs**" from the dropdown menu, you can view all the unassigned jobs that have not been assigned to any user (field technician) in the dispatcher queue. 

**To assign/schedule the shortlisted job in the scheduler, follow these steps:**

1. Select the “**team name**” and “**date**” when you need to schedule the job. Based on the team selected, you can review user's availability and proximity to current jobs for the selected date in the scheduler.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-3.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=52bb47cb7844101e2962ba1eccaf682f" alt="" width="1920" height="878" data-path="Dispatch/images/board-3.png" />

2. Depending on the user availability, simply drag and drop the shortlisted job from the dispatcher queue onto an available technician (from a selected team) in the scheduler, where you’ll be asked to provide the start and end date and time to schedule/reschedule the pending jobs.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-4.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=fd29b961d6b116925456132e3336fa76" alt="" width="1920" height="878" data-path="Dispatch/images/board-4.png" />

From the image above, you can see that the shortlisted unassigned job "**#384 AC repair**” is assigned to the user “**Richard Mathew**,” who belongs to the “**Beta Team**” team from **12:03 PM to 12:58 PM on 04/30/2024**. Once the job has been assigned to the user, the field technician gets notified to get the job done on the set date and time.

### Create a New Job or Time-Off

You can create a new job or time-off for a user directly from the scheduler. This quickly enables you to manage the technician’s workload and availability efficiently, ensuring seamless operations and optimal resource utilization.

#### Scheduler – Creating New Job

To create a new job from the scheduler, follow these steps:

1. Simply click & swipe the cursor from left to right next to the user at a specific date/time in the scheduler.
2. A pop-up appears, prompting you to choose an action: “**New Time-Off**” or “**New Job.**”

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-5.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=1ce359468b1556a4eea16a85620db6eb" alt="" width="1379" height="1342" data-path="Dispatch/images/board-5.png" />

3. In the pop-up, click “**New Job.**"  A sidebar will appear with the prefilled details such as user's name and scheduled date/time to create a new job. 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-6.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=005e4dadc3215aeb8739f3ccf4efda34" alt="" width="1379" height="1345" data-path="Dispatch/images/board-6.png" />

4. Provide other job details such as *Job title*, *org/customer name*, *property name*, *category*, *tags*, *priority*, *due date*, and *service/billing address*, and click the “**Save**” button. A new job will be created and assigned to the user successfully on a specific date and time. 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-7.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=14fc2953d4b27b2debe2194928143ae5" alt="" width="1379" height="678" data-path="Dispatch/images/board-7.png" />

5. If you want to add more details to the job, click "**Create Detailed Job**" at the top right corner of the new job creation sidebar. This will redirect you to the **Job** Creation page.  

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-8.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=ea27c69eb43aaf640f3da4e80e243ba9" alt="" width="1379" height="672" data-path="Dispatch/images/board-8.png" />

6. On the Job page, add information, such as service tasks, parts/services, assets, contracts, and any attachments to the job, and click "**Create Job**". The job will be created successfully. For detailed step-by-step instructions on how to create a job, click [here](/Work_Order_Management/Jobs/creating_a_new_job) 7. After creating the job, you can reschedule, unassign, add notes, view it on the map, or delete it by right-clicking the job on the scheduler. 

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-10.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=7a68458e790f92f48e2165bf362ca01f" alt="" width="1379" height="675" data-path="Dispatch/images/board-10.png" />

<Note>
  **Note**: You can also create a new job by clicking the "**+Create Job**" button at the top right corner. You will then need to follow the same steps as mentioned above, but keep in mind that the details won't be prefilled since you are creating a new job from scratch. 
</Note>

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-11.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=02288fb628eaf25e012b337282379449" alt="" width="1379" height="674" data-path="Dispatch/images/board-11.png" />

#### Scheduler – Create New Time-Off

To create a new time off from the scheduler, follow these steps:

1. In the pop-up, click “**New Timeoff**”, and a dialog appears with prefilled details such as date/time and the user. 

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-12.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=e2fd8b16cef1d56b68bf266d2ea65a86" alt="" width="1379" height="666" data-path="Dispatch/images/board-12.png" />

2. Choose ‘**Reason**” for the time off and click the “**Submit**” button. 

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-13.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=9632f3342e51dd59070740a3d01acc54" alt="" width="1379" height="672" data-path="Dispatch/images/board-13.png" />

<Note>
  **Note**: You can also customize the time/dates from here.
</Note>

 3. A new time off will be created successfully for the user at the particular date/time. You can also view job and time off details on the scheduler by hovering over the respective card.

<img src="https://mintcdn.com/zuperinc/p4EudAsCjgsdYPLM/Dispatch/images/board-14.png?fit=max&auto=format&n=p4EudAsCjgsdYPLM&q=85&s=eb9bc4468249ba5cb55928556ad571b7" alt="" width="1379" height="671" data-path="Dispatch/images/board-14.png" />

### Scheduler Views

Based on your choice, you can view the scheduler on a daily, weekly, or monthly basis. To change the view, follow these steps:

1. Click the box above the scheduler and select either “*Day*,” “*Week*,” or “*Month*” from the drop-down menu.
2. Based on your choice, you can view the day and timings in the scheduler. You can also change the date by clicking the **date box** on the left, shown below.    <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-15.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=b6281fde33aff6b05d66394420bd6ab4" width="1920" height="878" data-path="Dispatch/images/board-15.png" />

Here’s a preview of how the scheduler looks if chosen as day, week, or month.    <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-16.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=42ad4a81a549555f0b83f4c3194f88a4" width="1379" height="669" data-path="Dispatch/images/board-16.png" />

## Map

Map is one of the critical layouts on the dispatch board, located on the right side, and it provides an overview of jobs, routes, users, customers, properties, assets, and service territory locations on the map. 

You can also choose which locations to display on the map by selecting a specific layer from the top of the map. Once chosen, click the “**Apply**” button. Based on the applied layer, you can view only the specific entities locations. For example, when you select both jobs and routes, you can view the locations of jobs and routes, as well as the jobs listed in the dispatcher queue and scheduler, all displayed on the map.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-17.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=c15d80751e00a0708e99215615252dad" alt="" width="1379" height="631" data-path="Dispatch/images/board-17.png" />

Additionally, there's a provision to set custom colors and icons for entities displayed on the map, such as Jobs, Customers, Assets, and Properties.  

These colors and icons are defined by the user based on a pre-configured rule set. This enables you to efficiently manage day-to-day operations by creating color profiles tailored to your preferences, helping you quickly identify and prioritize entities that require critical attention on the map.  

For example: 

1. **Jobs**: Use different colors/icons based on **status** (e.g., on-hold jobs in red, completed jobs in green, in-progress jobs in blue) or **category** (e.g., Installation job category in blue, Maintenance job category in Green, delivery job category in Red).  
2. **Customers**: Assign colors/icons by **category** (e.g., VIP customers in red, regular customers in blue, new customers in green) or by **organization** (e.g., customers under Organization A in orange, Organization B in purple, Organization C in red).
3. **Assets**: Assign colors/icons by **category** (e.g., HVAC equipment in green, plumbing tools in purple) or **status** (e.g., functional assets in blue, under-maintenance in orange, decommissioned in black).
4. **Properties**: Differentiate by **organization** (e.g., Organization A’s properties are orange, Organization B’s are red, and Organization C’s are blue). 

This customization allows you to visualize and prioritize critical tasks/entities without the need to dig deep into details of individual items on the map. 

## Custom colors/icons

You can customize colors and icons in either of the following ways:  

1. **From the color profile icon on the map:** Select the color profile icon located at the bottom of the map. 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-18.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=fa0a2bbd616b6b8a9e055cf7c3f83277" alt="" width="1920" height="878" data-path="Dispatch/images/board-18.png" />

2. **From map settings:** Click the settings <Icon icon="gear" color="black" /> icon at the top right of the map and select “**Customise colours and icons**” next to Enable Map View. A sidebar will appear for you to configure your preferences.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-19.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=1d2107fcc6736fa9e979b842be26aa8c" alt="" width="1920" height="878" data-path="Dispatch/images/board-19.png" />

3. Choose the entity/legend that you like to set custom color/icon from the dropdown. 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-20.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=482ff11b825f3f49543e02a073ae91fd" alt="" width="1915" height="870" data-path="Dispatch/images/board-20.png" />

4. Click the icon to select a custom color or icon from the predefined options.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-21.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=fbc21142421265795cd85ad88d859463" alt="" width="1920" height="878" data-path="Dispatch/images/board-21.png" />

4. Once set, provide a name for the rule under the Name column.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-22.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=fb84f90185a89c967b7be1e80a3c6702" alt="" width="1920" height="878" data-path="Dispatch/images/board-22.png" />

**Add Condition**

1. Under the "**Apply When**" section, click "**Add Condition**". 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-23.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=49a85ff24f9c9fcf3e3ae13a171aa615" alt="" width="1920" height="878" data-path="Dispatch/images/board-23.png" />

2. Choose a filter from the available options and click the “**Add**” button to apply the condition.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-24.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=569b8c0c58f5981fcc71de6901f2c070" alt="" width="3835" height="878" data-path="Dispatch/images/board-24.png" />

<Note>
  **Note**: The filters displayed will depend on the entity/legend selected, such as Jobs, Customer, Property or Assets.
</Note>

3. Finally, click the "**Save**" button to save the custom color/icon for the selected entity. 

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-25.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=917fa954b3078ee952bfdba35a8d853d" alt="" width="1920" height="878" data-path="Dispatch/images/board-25.png" />

**Add multiple conditions**

1. You can also add multiple conditions under a single entity. When adding multiple conditions within a single entity, you will be prompted to specify how they should be applied, either using **AND** or **OR** conditions.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-26.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=e608d965d32e761655cd3db88c2d16c8" alt="" width="1920" height="878" data-path="Dispatch/images/board-26.png" />

2. **Use AND:** Apply rules when all selected conditions must be met. 

**Example**: If you choose the "Customer" entity, a specific color/icon can be applied to customers who are in the "VIP" category **AND** belong to "Organization A." 

3. **Use OR**: Apply rules when any one of the selected conditions is met. 

**Example**: A color/icon can apply to customers who are either in the "Exclusive" category **OR** the "Non-VIP" category. 

<Accordion title="Understanding Key Rule Behavior in Zuper's Custom Color/Icon Logic " defaultOpen="false">
  1.  Zuper evaluates rules sequentially, starting with Rule 1. 
  2. If a rule’s conditions are not fully met, Zuper continues to check subsequent rules. 
  3. Once the rule with the most conditions satisfied is identified, its associated custom color or icon is dynamically applied to the map. 

  <Note>
    **Note**: If there is more than one rule defined against an entity such as Job, Contacts, Property, etc., the rule satisfying the greatest number of conditions will be applied. When there is more than one rule with an equal number of conditions satisfied, the one at the top of the sequence will be applied on the map.
  </Note>
</Accordion>

**Here's a real-world scenario for your example**  Consider a **customer** named “**Alex**”, who is a regular client of **GPS Pvt. Ltd** with the *email XXX*. Alex's details are evaluated against four predefined rules, with the rule satisfying the most conditions taking precedence. If conditions are equally met, the first rule in sequence is applied, ensuring the most relevant custom color or icon is dynamically displayed on the map for Alex’s profile.

**Interpretation and result:** 

**1. Observation:** 

Rule 1 satisfies 3 conditions, while Rule 2 satisfies 2 conditions, Rule 3 satisfies 3 conditions, and Rule 4 satisfies 1 condition.  

**Precedence**: Although Rule 1 and Rule 3 both satisfy 3 conditions, Rule 1 takes precedence as it satisfies more conditions, and it appears earlier in the sequence. 

 **2. Custom Icon/Color Application:** 

Zuper applies the custom color/icon associated with Rule 1 to the customer “Alex” on the map.  

 By configuring these conditions, Zuper dynamically applies the designated colors or icons to entities, ensuring an intuitive and visually distinctive map layout based on your preferences. 

<Note>
  **Note**: These settings apply organization-wide and are not specific to individual users. You can apply up to 10 rules per entity/legend. 
</Note>

## Color profiles 

After creating color profiles for entity(s), you can: 

1. **Edit**: Modify the existing conditions or criteria within the color profile.
2. **Delete**: Permanently remove a color profile that is no longer needed.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-27.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=f2491bf967d60904ea3da5ff01d0ad4d" alt="" width="1920" height="878" data-path="Dispatch/images/board-27.png" />

3. **Enable/Disable**: Turn specific rules on or off without deleting them, allowing for flexible application as needed.
4. **Reorder**: Change the order of the color profiles. 

<Note>
  **Note**: Any changes made to color profiles will immediately reflect across the organization, ensuring consistency in visual representation.
</Note>

**Things to Remember:**  

When both routes and custom icons/colors are part of your landscape, the impact on routes and color profiles is as follows: 

1. **Routes with Assigned Jobs**: If jobs are assigned to routes, the color profiles will not apply. Instead, the route color will take precedence, ensuring that route-based assignments remain visually distinct. 
2. **Unassigned Jobs**: For jobs that are not assigned to any route but meet the conditions of the color profile, the custom color will be applied. This ensures that unassigned jobs are still visually categorized based on the defined rules. 

This distinction helps maintain clarity in job and route visualization while leveraging the benefits of both routes and custom color profiles. 

# Service Territory filter

The Service Territory filter on the Dispatch Board allows you to refine job visibility based on specific territories. It enables Dispatchers (Team Leaders) to manage jobs and teams more effectively without needing to be part of a specific team.

<Note>
  **Note:** The Service Territory filter will appear on the Dispatch Board once the “**Enable Service Territory**” option is activated in **Settings** > **Organization Settings** > **Service Territory**. The options available in the filter correspond to the ownership permissions configured in **Settings** > **Service Territory**.
</Note>

* **Dispatcher Queue**: The Dispatcher Queue will filter jobs based on the selected Service Territory, such as Assigned, Unassigned, Unscheduled, or Overdue.
* **Jobs:** The Jobs layout will display only the jobs in the selected Service Territories.
* **Users:** Only teams assigned to the selected Service Territory will be available for selection from the drop-down. For more details on how the '**Can Team Leader Access Jobs Based on Service Territory Ownership?**' setting and other configurations impact job visibility on the Dispatch Board, refer to the article [Understanding Job Visibility on the Dispatch Board](Dispatch/Understanding_Job_Visibility). This article will help you understand why specific jobs appear or do not appear on your Dispatch Board based on your selected Service Territories and organizational settings.
* **Maps:** The map will show jobs only from the selected Service Territories. <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/board-28.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=6b4904dd2925c717c4b551c500fea322" width="1843" height="894" data-path="Dispatch/images/board-28.png" /> With this comprehensive overview, you can effectively manage resources, plan schedules, and monitor operations, ensuring seamless and efficient task execution.


## Related topics

- [Tracking users’ real time location](/Timesheets_Management/Timelogs/Tracking_Users.md)
- [Overview](/Dispatch/Overview.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.