---
title: "Dispatcher Queue"
source: https://docs.zuper.co/Dispatch/Deep_dive_into_dispatcher_queue.md
fetched_at: 2026-10-06T13:29:42.699Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Dispatcher Queue

A dispatcher queue is one of the important layouts on the dispatch board that helps you (*dispatchers*) identify and prioritize pending jobs/routes, assign them efficiently, and monitor their progress.

<Frame>
  **Navigation:** ***Dispatch Board  --> Settings***
</Frame>

In Zuper, the dispatcher queue has been broadly categorized into two dispatching streams: “***Jobs***” and “***Routes***”. This provides the flexibility to choose the stream that best suits your business needs.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/queue-1.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=7354c64924700ffc6ddca792ea9786f5" alt="Queue 1 Pn" width="1920" height="827" data-path="Dispatch/images/queue-1.png" />

The key guiding factors are:

1. **Jobs Stream**: Ideal for businesses primarily driven by the availability of technicians, rather than technician travel. The objective here is to directly assign/schedule jobs to technicians based on their availability (drag & drop to the schedule) and geographical location of the jobs e.g., proximity of a new job to the existing ones.

2. **Routes Stream**: Suited for businesses where technician travels is extensive. The objective here is to directly assign the routes to technicians based on their availability (drag & drop to the schedule), followed by assigning jobs to the scheduled route based on the route capability and proximity of a job to an existing route (drag & drop to an existing route within the schedule).

<Note>
  **Note**: When businesses decide on the “**Routes**” stream, scheduling or assigning a job cannot commence without first assigning a route to the technician.
</Note>

As a business user, it is essential to identify your specific needs and select either the “**Jobs**” or “**Routes**” stream before delving into the dispatching features of Zuper.

## Assigning/Scheduling a job to an available technician

Assign jobs to technicians by balancing not only the technician's schedule but also the geographical proximity of the job to other jobs, enabling you to cluster job assignments. 

However, to assign the job to an available technician, you first need to identify the pending jobs. Here's how:

To view pending jobs and assign/schedule them to the available technician, choose the **“Jobs”** dispatching stream.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-2.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=5618a8b644547030a96b319abbef06ac" alt="" width="1920" height="827" data-path="Dispatch/images/queue-2.png" />

You can view the list of jobs on the dispatcher queue based on the selected job type from the dropdown menu. The job type includes:

| **Job Type** | **Description** |
| - | - |
| Unscheduled Jobs | These are the jobs that have not yet been scheduled, i.e., there is no start and end time for the technician to perform the job. |
| Assigned Jobs | These are the jobs assigned to a specific technician at a given time. This contains jobs of all statuses, such as on my way, started, completed, and so on. |
| Unassigned Jobs | These are the jobs that have not yet been assigned to any technician. |
| Overdue Jobs | These are the jobs that have passed their due date and still need to be completed. |

Once you filter and identify the required job, you can assign or schedule it to an available technician.\
In Zuper, you can assign and schedule a job in **two ways**:

1. **Manually (Drag and Drop)**
2. **Using Dispatch Assistant**

### Manually assisging or Scheduling a Job

1. Select the "**Team**" and "**Date**" when you need to schedule the job. Based on the team selected, you can view the technicians within the team and their availability for the selected date in the scheduler.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-3.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=472e8a971e8ac5e3d295a83c7e2feac2" alt="" width="1920" height="827" data-path="Dispatch/images/queue-3.png" />

2. Depending on the technician's availability, simply drag and drop the job from the dispatcher queue onto an available technician (from a selected team) in the scheduler, where you’ll be asked to provide the start and end date and time to schedule/reschedule the pending jobs.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-4.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=915d5aec1fd60574e0ec68079221b2e5" alt="" width="1920" height="1654" data-path="Dispatch/images/queue-4.png" />

3. Once the job has been assigned, the field technician gets notified to get the job done on the set date and time. You can also view the job location on the map by right-clicking the job in the scheduler and selecting the **'Show on Map**' option.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-5.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=4363efa76d01506ac15db3e7e667400f" alt="" width="1917" height="822" data-path="Dispatch/images/queue-5.png" />

<Note>
  **Note**: You can simultaneously view locations of shortlisted jobs from the Dispatcher Queue and jobs assigned to technicians in the Scheduler on the map. You can also assign technicians to jobs directly from the map.
</Note>

### Using Dispatch Assistant

Select [**Dispatch Assistant**](/Dispatch/Assistant-Dispatch) from the job’s right-click menu to launch Zuper’s intelligent technician recommendation panel.

<img src="https://mintcdn.com/zuperinc/CPwX6NlUtNruC9sq/images/Assistant-1.png?fit=max&auto=format&n=CPwX6NlUtNruC9sq&q=85&s=a02a34804bc6fdc494f2f10f48478bd7" alt="Assistant 2" width="1870" height="943" data-path="images/Assistant-1.png" />

Dispatch Assistant evaluates job requirements such as:

* Job duration
* Required skills and skill levels
* Service territory
* Technician availability and workload

Based on these factors, Dispatch Assistant shortlists the most suitable technicians, helping you assign the job quickly while minimizing travel time and scheduling conflicts.

### **Actions from the Dispatcher Queue**

From the **Dispatcher Queue**, dispatchers can take quick actions on any job using the right-click menu. These actions help you view job details, find the right technician, or use intelligent assistance to dispatch jobs faster.

To access these options, right-click any job card in the Dispatcher Queue.

#### View Details

Select **View Details** to open the **Job Side Sheet**.

<img src="https://mintcdn.com/zuperinc/xa1eNcRwNXAj1QlG/Dispatch/images/viewdetails.png?fit=max&auto=format&n=xa1eNcRwNXAj1QlG&q=85&s=b5955651171ed8348968d5ae4f9afa98" alt="Viewdetails" width="1920" height="869" data-path="Dispatch/images/viewdetails.png" />

\
The Job Side Sheet displays complete job information, including schedule, service address, assigned users, and job metadata. From here, you can:

* Assign or update technicians
* Set a **Primary Technician** while assigning users
* Review job priority, dates, and service territory

This option is typically used when you need to review or update job information before dispatching.

#### Find Live Technician

Select [**Find Live Technician**](/Dispatch/Live_View) to locate technicians who are currently available and closest to the job location.

<img src="https://mintcdn.com/zuperinc/5ytAqNHPO0DiBo_7/Dispatch/images/Assistant-11.png?fit=max&auto=format&n=5ytAqNHPO0DiBo_7&q=85&s=a279b03811f657a59a3d2357c451eaee" alt="Assistant 11" width="1920" height="869" data-path="Dispatch/images/Assistant-11.png" />

\
This action switches the Dispatch Board to **Nearby mode**, where you can:

* View live technicians on the map
* Check distance and estimated travel time
* Assign the job directly to a suitable technician

This option is ideal for urgent or same-day jobs that need immediate assignment.

#### Dispatch Assistant

Select [**Dispatch Assistant**](/Dispatch/Assistant-Dispatch) to launch Zuper’s intelligent technician recommendation panel.

<img src="https://mintcdn.com/zuperinc/CPwX6NlUtNruC9sq/images/Assistant-2.png?fit=max&auto=format&n=CPwX6NlUtNruC9sq&q=85&s=358415a860d3d1e9a87646089748d2ee" alt="Assistant 2" width="1910" height="617" data-path="images/Assistant-2.png" />

#### Call Contact

Select **Call Customer** allows you to quickly contact the customer directly from the Dispatcher Queue without opening the customer profile. This helps dispatchers confirm schedules, clarify job details, or provide updates during dispatching.

The available phone numbers are pulled from the customer contact details associated with the job.

<img src="https://mintcdn.com/zuperinc/cch6Q9JLVDMVlbD3/images/DispatchConnect.png?fit=max&auto=format&n=cch6Q9JLVDMVlbD3&q=85&s=58344eead96427874f550f8008afd2de" alt="Dispatch Connect" width="1920" height="869" data-path="images/DispatchConnect.png" />

## Assign an unassigned route to the available technician (Tracking View)

Informed assignment of routes to the right technicians with consideration for their schedule, viz., shift/business hours, time-off, etc.

Unassigned Routes refer to predefined pathways that have not yet been allocated to a specific technician. From the dispatch board, you can assign an unassigned route to an available technician based on their availability and proximity to current jobs/routes for the selected date. 

To view unassigned routes and assign to the available technician, choose the “**Routes**” dispatching stream.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-6.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=b60fe41b4566862d49f1e878033ef506" alt="" width="1920" height="827" data-path="Dispatch/images/queue-6.png" />

This stream is divided into two sections: **Jobs** and **Routes** in the dispatcher queue. Additionally, you have dedicated options such as **Tracking** and **Planning** (available next to the Routes).\\

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-7.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=ae93b8853a1d0749a550533074d367b2" alt="" width="1920" height="827" data-path="Dispatch/images/queue-7.png" />

| **Tracking** | **Planning** |
| - | - |
| This is the default view when switched to “Routes” stream that enables you to track all the jobs & unassigned routes for a specific day, leveraging the powers of both scheduler and maps in parallel.    **Note**: In tracking view, you cannot select dates beyond tomorrow; you can choose and track until the next day, today, and previous dates scheduled routes and jobs within a route. | This allows you to plan routes well in advance. You can create a route for the future and assign jobs for multiple weeks/months in advance.    **Note**: In planning view, you will have the flexibility to change the dates and months as needed. This allows you to plan and create routes well in advance. |

To assign unassigned routes, follow these steps:

1. Select the “**Routes**” section under the “**Routes**” stream in the dispatcher queue.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-8.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=d94d7e4cbbaca29c9ddbf4ac3d613b6f" alt="" width="1920" height="827" data-path="Dispatch/images/queue-8.png" />

2. You can view all the unassigned routes in the dispatcher queue and track their location on the map as well. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-9.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=2df6f023a594f0d68705d021b3f8cdb7" alt="" width="1920" height="827" data-path="Dispatch/images/queue-9.png" />

In addition to this, you can also track the following on the map:

* Location of the job type selected in the dispatcher queue. 
* Location of routes (if any) scheduled for the technician on the selected date.

3. Select the "**Team"** and "**Date**" to schedule the route. Based on the team selected, you can view the technicians within the team and their availability for the selected date in the scheduler.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/queue-10.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=6901ae7eed17684a840f79625dc46ffa" alt="" width="1920" height="827" data-path="Dispatch/images/queue-10.png" />

4. Depending on technician availability, you can assign any unassigned route from the "**Unassigned Routes**" section by either clicking "**Assign User**" in the dispatcher queue or dragging and dropping the route next to the technician in the scheduler with the right consideration of their availability and proximity to current jobs/routes for the selected date.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/queue-11.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=72f7cd85a0170c8c60c8ee53522c6497" alt="" width="1920" height="1654" data-path="Dispatch/images/queue-11.png" />

5. The Route will be assigned successfully to the technician for the selected date.  <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-12.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=fd98be5b3f664df7e21bc64050b8fb1c" width="1920" height="827" data-path="Dispatch/images/queue-12.png" /> 6/. After assigning a route to the technician, you can reschedule the route, view the location of the route on the map , and more by right-clicking the assigned route in the scheduler. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-13.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=e6225d470cb9872b7a2fc3429c11bdab" alt="" width="1918" height="826" data-path="Dispatch/images/queue-13.png" />

7/. You can also access various details by clicking on the route, such as:

* **Primary Details:** This includes the route color, mode of transport, route type, and no. of. Jobs were assigned to that route, technicians were assigned, and so on. 
* **Jobs:** This includes the jobs that are added to that route. You can also choose to add/remove a job from this route and assign to another route. 

In addition to viewing this information, you can also easily perform several actions by using the quick action icons located at the top right corner of this page. These actions include locking a route, assigning a user, editing, deleting, and cloning routes. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-14.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=45a78ef868914face401ee6147b59117" alt="" width="1920" height="827" data-path="Dispatch/images/queue-14.png" />

<Note>
  **Note**: When you lock the route, you won't be able to update it. This means you can't change the route location, reschedule, add more jobs to the route, or reorder them until they are unlocked.
</Note>

## Assigning job to the technician route

Efficiently assign multiple jobs to a route by balancing key factors such as overall route duration, job schedules, and total travel time between jobs based on the mode of transport (e.g., car, truck, semi-truck). This can be done using either the scheduler or the map.

#### Using the Scheduler:

Once a route has been assigned to an available technician, you can add jobs to the route by dragging and dropping them. Prioritize jobs that are geographically close to minimize travel time.

To assign a job to a technician's route using the Scheduler view, follow these steps:

1. Under the Routes stream, click the "**Jobs**" section on the dispatcher queue and shortlist any of the jobs from the dropdown menu.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-15.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=eed98574362ac3212704964d2303528e" alt="" width="1920" height="1654" data-path="Dispatch/images/queue-15.png" />

2. Once shortlisted, choose an appropriate job that aligns with the route duration and **drag and drop** it onto the technician assigned route for the selected date.  <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-16.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=7ebe5a2ae1b417a5d91e4f9d00c257c0" width="1920" height="1654" data-path="Dispatch/images/queue-16.png" />

<Note>
  **Note**: You can also reschedule the job duration while assigning it to the technician's route. 
</Note>

3. The job will be assigned to the technician route successfully. The field technician will then receive a notification to complete the job on the scheduled date and time on that route. <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-17.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=4bec0620f0f65c577769db41e71c6761" width="1920" height="827" data-path="Dispatch/images/queue-17.png" /> .
4. Upon successfully assigning a job to the technician's route, you can perform certain quick actions such as rescheduling the job, assigning the job to another route, removing the job from the route, and so on, by right-clicking on it.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-18.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=0f6078f6a17607e73321619bd4f71ba8" alt="" width="1913" height="825" data-path="Dispatch/images/queue-18.png" />

#### Using the Map:

The map view allows you to directly see the locations of jobs and routes, making it easier to assign jobs efficiently by considering geographical proximity, overall route duration, and existing jobs on the route.

You can assign jobs to the nearest route by drawing shapes around job locations or using the arrow pointer. Here's how:

1. Go to the Maps layout on the Dispatch Board.
2. On the right side of the map, you’ll find tools that help you select job(s). These tools include:

<Note>
  **Note**: The tools will be visible only when you select the "**Route**" layer from the map.
</Note>

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-19.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=00a643197d0800766031151404acd90e" alt="" width="1917" height="871" data-path="Dispatch/images/queue-19.png" />

**Arrow Pointer**

The intent of this option is to selectively choose a few jobs amidst a cluster, considering various attributes such as status, schedule, technician assignment, etc. 

A classic example is an attempt to associate one of a recurring job instances (repeating at the same address) to a nearby route, (or) a case where jobs of various schedules and statuses are in the location, and you want to assign only a selected few to a nearby route

1. Select the arrow pointer located on the right-hand side.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-20.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=8a6a4555a4f94d04f194fcdb996f26f9" alt="" width="1916" height="870" data-path="Dispatch/images/queue-20.png" />

2. During the arrow select mode, job details are displayed on hovering over the job cards. This will help choose jobs based on their schedule, status, technician assignment, etc.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-21.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=9033569e0a5de577659ea84b4e4618de" alt="" width="1919" height="878" data-path="Dispatch/images/queue-21.png" />

3. Manually select individual job(s) on the map by clicking on them. <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-22.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=4c1f4f92d20181828b03c2ed8df92af1" width="1920" height="878" data-path="Dispatch/images/queue-22.png" /> 4. The order in which you select jobs using the pointer will determine the sequence in which they are added to the destination route.     

<Note>
  **Note**: To unselect jobs, click "**Clear selection**" at the top of the map.
</Note>

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-23.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=fc4d3089a75c94bcf86364567b49b4c1" alt="" width="1920" height="878" data-path="Dispatch/images/queue-23.png" />

**Shapes** 

The intent of this option is to select multiple jobs at once and assign them to a nearby, existing route. It’s useful when you have several open jobs clustered in a specific location and want to optimize technician travel.

1. Choose a shape from the available options (Pentagon, Rectangle, Circle) on the right of the map.  <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-24.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=4c15c000237a2a5e10b8813a92fff129" width="1916" height="843" data-path="Dispatch/images/queue-24.png" />
2. Click and drag on the map to draw the shape around multiple jobs at once. All jobs within the shape will be selected. <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-25.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=70554d25ca45b8fd087e64d10d785d7a" width="1920" height="883" data-path="Dispatch/images/queue-25.png" />

<Note>
   **Note**: To switch to a different shape and clear the current selection, click "**Clear selection**" at the top of the map.
</Note>

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-26.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=10cb3242724cf81a7c14ddc112a1a401" alt="" width="1920" height="883" data-path="Dispatch/images/queue-26.png" />

**Assign Jobs to a Route** Once jobs are selected, either with the arrow pointer or a shape:

1. Hover over the nearest route, which will be bolded when hovered over.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-27.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=b889b29e7520d2981abe909d022f0e63" alt="" width="3836" height="879" data-path="Dispatch/images/queue-27.png" />

2. Click on the Route of your choice (based on its proximity to the selected jobs) to view its details – Name, Start Date & Time, Consumed Duration, etc.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-28.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=30c2a6fcc9cc905c4c4d6c262fe2b317" alt="" width="1915" height="883" data-path="Dispatch/images/queue-28.png" />

3. Based on the route details, select the route and click the "**Add 'n' job(s) to route**" button. A pop-up will appear.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-29.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=7f7fb54b7bc167c4360457265003ce3e" alt="" width="1915" height="883" data-path="Dispatch/images/queue-29.png" />

**Review and Finalize Job Assignment**

1. A pop-up window will appear displaying details about the selected jobs, including job name, status, assignee, and scheduled date and time.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-30.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=f99cf573ade24a293d0b20c923763aaa" alt="" width="1920" height="878" data-path="Dispatch/images/queue-30.png" />

2. Review the information, select the jobs you want to add to the route, and click the "**Add 'n' job(s) to route**" button to finalize the assignment.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-31.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=f1f24ad506d10a1713050600487a0816" alt="" width="1920" height="878" data-path="Dispatch/images/queue-31.png" />

<Note>
  **Note**: When you use an arrow pointer to select jobs, the job(s) will be added in the order they were selected. For example, if there are already 3 jobs in the route, the newly selected jobs will be added as the 4th, 5th, and 6th jobs in the sequence.
</Note>

### Plan and Schedule Route to the Available Technician (Planning View)

Enable advanced planning of routes and potential technicians ahead of weeks by leveraging these options - Offers early insights into schedules of teams and technicians viz., pre-planned route/jobs assignments, time-offs, shift/business hours, etc.

In addition to tracking past/ongoing routes and jobs within it, businesses can plan to schedule jobs/routes to future dates based on the requirement. To do so,

1. Switch to “Planning” view in the Routes dispatching stream.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-32.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=2484ca1787ce358a2000ccf0c5bfe217" alt="" width="1920" height="827" data-path="Dispatch/images/queue-32.png" />

2. Once you switched to planning, you have two dedicated views “**Scheduler**” and “**Map**.”

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-33.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=ee2a76ff8d45c2800553b6dbba919fdb" alt="" width="1920" height="827" data-path="Dispatch/images/queue-33.png" />

| **Scheduler** | **Map** |
| - | - |
| This view is intended to plan routes/jobs with the right consideration for schedule of various teams & technicians across a date range. Hence, the scheduler view takes precedence while leveraging this option. | This view is intended for dispatchers to plan routes/jobs with consideration for the location covered by existing routes. The idea is to enable adding jobs to routes that are proximate enough to existing routes. |

Using the scheduler view (dispatch board), you can plan and schedule routes/jobs based on the availability of technicians belonging to teams across a date range. To do so, follow these steps:

1. From the scheduler view, click the **"Date"** tab and choose the **future dates**. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-34.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=a348234c96b75fe07e3c4c71c82b523c" alt="" width="1920" height="827" data-path="Dispatch/images/queue-34.png" />

<Note>
  **Note**: Future dates can only be selected within a week in a month. 
</Note>

2. Once the date is set, you can easily/visually identify the technicians and their available schedules across the selected date range (including non-business hours & time-offs) in the scheduler view. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-35.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=3eff1c01d27fb689222f0e1752743503" alt="" width="1920" height="827" data-path="Dispatch/images/queue-35.png" />

3. Choose any of the unassigned routes under the “**Routes**” section and drag & drop it next to the available technician in the scheduler. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-36.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=d5efd1c166ae2ab1f493d168a863b714" alt="" width="1920" height="1654" data-path="Dispatch/images/queue-36.png" />

<Note>
  **Note**: When dragging and dropping the route from the dispatcher queue to the available technician in the scheduler, you can schedule/reschedule the route start & end date and time. 
</Note>

4. The route will be assigned successfully to the technician for the future date. <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-37.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=81dfadd9dee5ffdf0a541fd2a1672336" width="1915" height="826" data-path="Dispatch/images/queue-37.png" />

### Plan and assign jobs to scheduled routes

Assign and schedule jobs into routes that're scheduled and pre-assigned to technicians by balancing - overall route duration, jobs already assigned to the route, and travel time necessary between jobs.

In addition to scheduling a route and individual jobs directly to a technician, you can also assign any of the jobs (be it assigned, unassigned, or unscheduled jobs) to a technician's route well in advance if the job is intended to be part of a route a technician is planned to carry out (this typically includes jobs that needs to be performed in the future or moved to future dates). This can be done using either the **dispatch board scheduler** or the **map**. 

<Info>
  For instructions on how to assign jobs to a scheduled route, [refer to the steps above](https://care.zuper.co/portal/en/kb/articles/dispatch-board-deep-dive-into-dispatcher-queue#Using_the_Map). Please note, in this case, you will need to select the "**Map**" section next to the Dispatch Board to complete the activity.
</Info>

#### **Using Scheduler**

1. Click "**Jobs**" on the dispatcher queue and shortlist any of the jobs from the drop-down menu. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-38.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=144fc24072f5d22d21a855a6712397a9" alt="" width="1920" height="827" data-path="Dispatch/images/queue-38.png" />

2. Once shortlisted, drag and drop the job (job should be within the route duration) onto the technician's scheduled route for the future.

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-39.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=81031d98bfae290e4584efe54947e869" alt="" width="1920" height="1654" data-path="Dispatch/images/queue-39.png" />

3. The job will be assigned to the route well in advance. 

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-40.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=443fb41fa27bd2fd3655b4694798efa6" alt="" width="1920" height="827" data-path="Dispatch/images/queue-40.png" />

## Plan and create a Route Using a Map 

Using a map, you can locate all unassigned routes and plan routes/jobs based on the location proximity of a job to an existing unassigned route or vice-versa.  There are multiple ways through which Maps helps a dispatcher plan. Here’s how:

<Note>
  **Note**: You cannot schedule from this view. To schedule, you must switch to the schedule option in the planning section.
</Note>

#### Map-based Route Planning:

The map-based route planning enables you (dispatcher) in more than one way:

1. **Create new routes by clustering jobs** that are geographically proximate to one other, leveraging simple polygons drawn on a map surface - A perfect means to create routes that are extremely efficient; reducing technicians' overall time on road.
2. **Plan and associate jobs to existing routes** that are nearest to it - Minimized travel & detour for a technician assigned to the route; thereby increasing the overall efficiency (no. of jobs per route/day) and customer experience.

   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-41.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=312c6e9c90598be486df3d10d90f2d84" alt="" width="1920" height="827" data-path="Dispatch/images/queue-41.png" />

<Tip>
  From the image above, it's evident that the "#JOB2024422 AC Service Task" job is located near the "Job Route 405" route. With this recognition, you can efficiently plan and create a route to complete the job. 
</Tip>

#### Map-based Route Creation:

As mentioned above, you can create new routes by clustering jobs that are geographically proximate to one other, leveraging simple polygons drawn on a map surface. here's how:

1. Choose any shape (**circle, rectangle, pentagon**) to plot an area on the map.  <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-42.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=deaaa381d492fb54db18f41e658b52cb" width="1920" height="827" data-path="Dispatch/images/queue-42.png" />
2. Once the shape has been chosen, drag and select the job(s). After selecting the job(s), click the “**Create Route**” button at the top right corner.  <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/queue-43.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=b40c43e5fb33d9ad391e3dd1adb3a45a" width="1920" height="827" data-path="Dispatch/images/queue-43.png" />
3. Provide route details such as route name, color, route type, star location, end location, etc., and click the "**Create**" button.  The route will be created successfully for the selected job on the map. 

<Note>
  **Note**: You can also delete the jobs or add more jobs to the route by clicking "**+ Add Job**" button. 
</Note>

By optimizing the scheduling and dispatching processes, this feature improves service delivery, reduces downtime, and ensures that technicians are deployed to the right locations with the right tools and information. Ultimately, the Dispatch Board in Zuper streamlines operations, leading to better customer satisfaction and increased productivity.


## Related topics

- [Customize Dispatch Board](/Dispatch/Settings.md)
- [Live View in Dispatch Board](/Dispatch/Live_View.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.