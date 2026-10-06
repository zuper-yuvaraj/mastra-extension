---
title: "Creating and managing recurring routes"
source: https://docs.zuper.co/Dispatch/Create_manage_recurring_route.md
fetched_at: 2026-10-06T13:29:43.529Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating and managing recurring routes

***

The **Recurring Routes** feature in Zuper enables dispatchers to create multiple instances of routes with predefined frequencies and associate them with recurring jobs of the same cadence.

This means you may have repeated jobs that need to be done at the same route regularly, such as daily, weekly, or monthly. These recurring routes ensure efficient route planning and management, leading to improved productivity and consistent service delivery.

<Frame>
  **Navigation**: ***Dispatch Board -> Routes***
</Frame>

## **Creating a recurring route**

The creation of a recurring route carefully considers multiple aspects automatically, including:

* Technician availability

* Route's available duration

* Frequency of job recurrences

* Geographical proximity of jobs to the route

This enables you to create routes that not only optimize travel time and efficiency but also ensure that frequent jobs are completed on time and to a high standard by the assigned technician. The assigned technician benefits from familiarity with both customers and routes.

## **Creating a recurring route series**

Creating a recurring route series involves specifying the start and end locations and the frequency of repetition. This can include:

* Daily, weekly, or monthly schedules
* Specific hours of the day, days of the week, or dates of the month

Based on the chosen frequency (recurrence), multiple route instances will be created within the *Recurring Route Series*.

Once the recurring route series is created, you can add an eligible recurring job series containing multiple job instances and assign it to a technician. This allows the assigned technician to efficiently manage their schedule and ensure consistent job completion on the assigned route at the designated time and frequency.

<iframe src="https://drive.google.com/file/d/1E9WFyTog4lJy8qmHi-g5DCVf88gHmLFp/preview" width="720" height="480" allow="autoplay" />

## To create a recurring route

1. From the **Dispatch Board**, select the **“Routes”** stream.
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-1.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=1303dd32d7b2a711df0b7ce00739dc19" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-1.png" />
2. Click the “**Create**” button at the top right of the page and choose "**Route**' from the drop-down menu.

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-2.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=14c138ae518943cb6ba463d4e7272c33" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-2.png" />

1. A quick sidebar appears. Specify the following details in each of these sections:

#### **Primary Details:**

* **Route Title (Mandatory)**: Provide an identifiable name for the route.
* **Route Description**: Provide additional details or instructions related to the route.
* **Assigned to**: Specify the individual for this route. 

<Note>
  **Note**: Since you’re creating a recurring route, the selected technician will be assigned to all the route instances (and the jobs within them).
</Note>

* **Start Location (Mandatory):** Provide the starting point or address from where the route begins its journey using the map.
* **End Location**: Provide the final destination or address where the route concludes (this is optional). If it’s not provided, the last job will be considered as the last location of the route.

  <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-3.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=b8b1db7a381095ea2c5d7aac1fb26b58" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-3.png" />

#### **Schedule:**

* **Duration (Mandatory):** Set the Planned duration (total duration of travels + total duration of accomplishing jobs) for every instance of the route.  
* **Date & Time (Mandatory):** Set the start date and time for the route.
* **Recurrence:** Choose how often this route will occur, whether it's a one-time event (does not repeat) or repeats daily, weekly, monthly, or on a custom schedule.

<Note>
  **Note**: Since we are creating a recurring route series, you need to select every day, every week, every month, or every year from the chosen date or day. Alternatively, you can provide custom dates.
</Note>

* **Ends (Mandatory):** Set either the specific end date and time or specify after how many occurrences the route should end. Based on your input, the route will take place with the total number of route instances determined.

  <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-4.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=82211dc607ae2513c882e1b7f5463f1f" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-4.png" />

#### **Additional Details:**

* **Route Color**: Choose a unique color for this route to make it easily identifiable on the map.
* **Mode of Transport**: Choose the method of transportation used for this route, such as car / semi-truck, truck, or pedestrian.
* **Route Type**: Choose an ideal route type: Fastest Travel Time, Shortest Distance.
* Once you have filled in all of these details, click the “**Create**” button to create a route. 

<Note>
  **Note**: If you want to add more details to the route, click the "**Detailed Route Creation**" button at the top right corner.   This will expand the route creation with additional surfaces that enable provision not only to add jobs but also to view the route on the map as shown below.
</Note>

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-6.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=60d47aacc384f5d34f521406e3ae3966" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-6.png" />

## Add recurring jobs to recurring routes

If you haven't leveraged the **Detailed Route Creation** option to add the jobs during the initial route creation, consider doing so. This option allows for a more comprehensive setup by adding jobs at the outset, ensuring all relevant factors are considered from the beginning. 

<iframe src="https://drive.google.com/file/d/1kHOqVkN_aC3VTuV1dFzn9tUlxDGolBej/preview" width="720" height="480" allow="autoplay" />

So, once the recurring route has been created, our system's intelligent matching technology makes it easy for you to identify the right set of recurring jobs by considering multiple attributes such as route capacity, job schedule and cadence, required skillsets, and technician availability. By associating these jobs with the appropriate recurring routes, our system ensures that the recurring job instances are efficiently allocated.

<Note>
  **Note**: To add a recurring job, make sure while creating a route, you’ve selected an option from the dropdown menu under **recurrence**: every day, every week, every month, or every year.   
</Note>

**To add a recurring job series to a recurring route series, follow these steps:**

1. Click the “**+ Add Job**” button under the Route itinerary. A sidebar will appear, displaying the right set of recurring job series that:

* Has the overall time span that is less than that of the route (route span must be > job's) 
* Has the number of job instances less than the number of route instances. (route's count must be > job's) 
* Has job cadence less than the route's (e.g., a daily route can be associated with a weekly job, but not vice versa)
* Has valid Geo Coordinates

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-7.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=420623b3e4d1afba41b0f31171fdf18f" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-7.png" />

Additionally, you can view any conflicts associated with the existing Recurring Route Series.  To view the associated conflicts, click the dropdown menu next to <Icon icon="angle-up" color="#000" /> icon.

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-8.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=542438fa801425793dc9c01eb9ae8869" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-8.png" />

The conflicts that may occur include User Conflict, Frequency Conflict, Date Conflict, Duration Conflict, and Skill Conflict.

<Info>
  **Info:** Conflicts are the list of potential exceptions while associating recurring jobs to routes. While you can always override them, the intent is to enable you to take informed business decisions while planning the routes.
</Info>

| **Conflict Type** | **Description** |
| - | - |
| User Conflict | This conflict occurs when the job is assigned to a technician different from that of the recurring route series/instance.    For example, you have a recurring maintenance route scheduled every Monday and assigned to Technician A. In such a case, a job on this route that is scheduled and assigned to Technician B instead of Technician A will be highlighted as a user conflict. However, you can override this conflict. By doing so, the route technician will be assigned to all the job instances. |
| Frequency Conflict | This conflict occurs if both the recurring route & job series do not have synchronized frequency.    For example, if a recurring route is scheduled every Tuesday, but a job meant for this route recurs every alternate Tuesday, this conflict will occur. If you override this conflict, the job will be assigned to the route instance based on the job frequency. |
| Date Conflict | A date conflict occurs when the job's date differs from any of the route instances under the recurring route series.    For example, if a route is scheduled for every Monday, and a job is scheduled for every Wednesday, this difference in scheduling days causes a date conflict. This type of conflict typically arises when recurring jobs are scheduled on a different day of the week compared to the recurring route instances. In such cases, we will auto-align the schedules of all future job instances with the recurring route instances. This means that when you select jobs that do not exactly match the route's schedule/dates, they will be automatically adjusted to match. |
| Duration Conflict | This conflict occurs when the total number of hours spent by a technician on jobs and travel overshoots the overall allocated ‘Duration’ of the route instance.   For example, A technician is allocated 8 hours for a day's route, but the combined time for the jobs and travel amounts to 10 hours, exceeding the allocated duration causes this conflict. However, you can supersede this conflict, doing so, the route duration exceeds based on the job duration. |
| Skill Conflict | This conflict occurs when there is a mismatch between the skill set of the assigned route technician and the skill set required to complete the job.   For example: A job requiring advanced electrical skills is assigned to a route technician specializing in plumbing, leading to a skill conflict. However, you can override this conflict. Doing so, the route technician will be assigned to all the job instances. |

1. Select the recurring job(s) series that you want to this recurring route series. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-9.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=57d188eb1de7bf5d3229006b5d8a406b" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-9.png" />
2. Once chosen, click the “**Choose Job**” button. The recurring job series (master job) will be added to the recurring route series. 
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-10.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=63b96da4f1ad525091ce3c2b22281d61" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-10.png" />
3. From here, you can also perform actions such as viewing the added job location on the map or removing the job by clicking the "**kebab**" (three-dot) icon next to it. Additionally, you can add more jobs to this route using the "**+ Add Job**" button and to reorder the jobs within the route so as to achieve the optimal route, avoiding unnecessary travel.
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-11.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=4649427b42b346d939249b1e57d314af" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-11.png" />

5. Once added, click the "**Create**" button. The recurring route series and the recurring job series will be created successfully. This means that each future job instance within the recurring job series (master job) will be associated with the corresponding recurring route instances, as shown below:
![](https://care.zuper.co/galleryDocuments/edbsn7761c018a7b6b4bd105a44741ba805417884a2a7b63991da35892c9541b6031535a89c51b389b7f320d9f7d82c5edb01?inline=true)

From the above image, you can see that the first job instance within a recurring job series is associated with the start of the route instance. Subsequently, based on the job frequency, it continues to associate with the route instances accordingly.
Certainly! Here's an example that showcases the associations between jobs and route:

**Example:**

Suppose you have a biweekly job that starts on 2024/08/15 (Thursday) and weekly routes that start on 2024/08/09 (Friday). The job is scheduled to occur every two weeks, while the route follows a weekly schedule. In this case, here's how the association would be:

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-13.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=3c31e2345bc8c778e83ee0dc05998d5f" alt="" width="1151" height="182" data-path="Dispatch/images/rroutes-13.png" />

**Associations:**

* The job on 2024/08/15 will be associated with the route on 2024/08/09.
* The job on 2024/08/29 will be associated with the route on 2024/08/23.

From this example, you can understand that each job instance within the biweekly job series is directly associated with the start of the weekly route instance and continue to align correctly to the route based on their respective frequencies.  In other words, job scheduled on 15th of Aug is rescheduled to 09th Aug and the job scheduled 29th of Aug is automatically rescheduled to 23rd Aug. 

## To manage recurring routes

Beyond typical functions such as *List, Edit, Delete, Lock*, etc., you can manage movement of jobs between routes by delicately balancing the intricacies of target route’s capacity (Scheduler View) and geographical proximity of a job to the target route (Map View).

<iframe src="https://drive.google.com/file/d/1kwpNqISdYIUthimGoTauwxKcbMTdWGtk/preview" width="720" height="480" allow="autoplay" />

1. To manage recurring routes, choose the “**Planning**” section in the dispatch board from the "**Routes"** Stream as shown below:  
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-14.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=dd8b6090d376ac2d4114058303e07fe9" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-14.png" />
2. Once navigated to the “**Planning**” section, choose the “**Recurring Routes**” option from the dropdown menu under the **Routes** section. You can view the list of recurring route series with details such as the number of route instances and jobs within each series, travel time, distance, and assigned users.
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-15.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=73ec050ce3e9a1224f7942876dbee9f2" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-15.png" />
3. Choose any of the recurring route series. On the next page, you can view the following details on the left.

* Recurring route series name.
* Recurring route description (if added).
* Assigned users to the route.

If users are not assigned, you can also assign a user by clicking the “**Assign User**” button. Once assigned, you can **assign/unassign** the user directly from here. To do so, click the user profile icon in the recurring route series card.  A scrolling pop-up appears with the list of users. You can either choose to assign or unassign the user from the route.

<Note>
  **Note**: Any changes made to the recurring route series will apply to all route instances within it.
</Note>

* Route frequency
* Jobs within the recurring route series (if added).  This includes the master job, which is linked to all recurring route instances at the right. If you remove any of the job instances within recurring route series, all the job instances will be removed.

<Note>
  **Note**: Any One-Off jobs (non-recurring) added to individual route instances will not be visible here.
</Note>

<img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-16.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=a79857f3d5d8ed8319f3a70a1c5d6f09" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-16.png" />

1. You can also add or remove a master job from the left. To add a job, click the “**Add Job**” button at the bottom left.  To remove the job from the route series, click the “**Kebab**” icon under “**Jobs**” at the left and select “**Remove Job**.” 
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-17.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=6de6527dc67756294113bd5dcbbc6c96" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-17.png" />

<Note>
  **Note**: When you remove the master job, it will be removed from all the route instances.
</Note>

5. On the right, you can view and manage all upcoming and past route instances. This includes actions such as adding or removing users, viewing conflicts, locking or deleting route instances, adding one-off jobs to the recurring route instance, viewing or removing jobs, and moving jobs from the route instance. 

This in turn helps you handle the day-to-day details at the route instance level rather than at the master level, ensuring each route instance is managed with precision, enhancing overall scheduling efficiency and operational flexibility.

<iframe src="https://drive.google.com/file/d/1eO20m_cZCX_5iEAOpYseD9L55kL5RiBK/preview" width="720" height="480" allow="autoplay" />

1. To view and manage any of the route instances within a route series, click the specific route instance.
2. You can view details such as route instance name, occurrence date and time, associated user, jobs and conflicts (if any). 
   <img src="https://mintcdn.com/zuperinc/1tqjE749b12mhEw2/Dispatch/images/rroutes-18.png?fit=max&auto=format&n=1tqjE749b12mhEw2&q=85&s=9aced90df292fb33ad9df1ddfd99c3b3" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-18.png" />

### Add/Remove users

You can directly add or remove a user from any route instance to manage assignments effectively. Here’s how:

1. Click the **user profile** icon in the recurring route instance. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-19.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=ecba8beafe4f212e660027fd80c4a4b8" alt="" width="1915" height="821" data-path="Dispatch/images/rroutes-19.png" />
2. A scrolling pop-up will appear with the list of users. You can then choose to assign or unassign the user from the route instance. Once done, click the “**Save**” button.
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-20.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=3ca649f7fadc5c0907a9e184c4c2ed12" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-20.png" />
3. The selected user will be successfully added to the instance. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-21.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=f7a82eac3affd0ea2fd73d94531f996c" alt="" width="1917" height="826" data-path="Dispatch/images/rroutes-21.png" />

<Note>
  **Note**: Any action taken will affect this specific route instance only and not the complete recurring route instances within a recurring route series.  This feature is handy for managing ad-hoc situations, such as when the designated technician for the recurring route is unavailable and it's necessary to allocate a particular recurring route instance to a different technician.
</Note>

### View conflicts

Identify and resolve conflicts associated with the route instance (if any). 

1. To view the associated conflicts, click the “**View**” button next to “**Conflicts in this Instance**.” 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-22.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=c419b387f46476eaae73e3dd32ea1328" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-22.png" />
2. A pop-up appears listing the conflicts associated with the specific route instance. Based on the conflicts, you can choose to continue with them (or) make necessary changes to the route instance, such as assigning a different user, rescheduling jobs from the instance, moving jobs, and so on. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-23.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=165eca37d9ce36361a4aa81ce5039ea7" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-23.png" />

### Lock/Delete route instances

You can also lock or delete any of the route instances within the recurring route series. When you lock a route instance, you won't be able to update it. This means you cannot assign or unassign users, edit jobs within it, move jobs, add jobs to the route, or reorder them until it is unlocked.   

1. To lock or delete a route instance, click the “**kebab**” icon next to the route instance.
2. From there, you can choose either “**Lock Route**” or “**Delete Route Instance.”**
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-24.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=59243e16a28ee372696e88c855fe6845" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-24.png" />

<Note>
  **Note**: Deleting the route will only remove the route, but the jobs will be there with the schedule (without assignment though).
</Note>

### Add One-off jobs to the recurring route instance

For a recurring route instance, you can add one-off jobs, but not recurring jobs, since the instance is part of a recurring route series. One-off jobs are jobs that occur only once, rather than being part of a regular schedule.

You can add one-off jobs by considering factors such as route instance duration, technician availability, geographical proximity of these jobs to the route, and the current job schedule. Here’s how:

1. Click the "**Edit Route**" button under the route instance. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-25.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=1772d0d2b64298010c99376c4c502ffa" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-25.png" />
2. An "**Edit Route**" sidebar will appear where you can make necessary changes to the route, such as adding one-off jobs, assigning or unassigning users, changing the route start and end locations, adjusting the route schedule, and more.
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-26.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=aab35598b1e43a19322de618df6b5ea9" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-26.png" />
3. After making the necessary changes, click the "**Update**" button to save them.
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-27.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=9c0e40b6c30570d53bdab8493f5a4cc6" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-27.png" />

<Note>
  **Note**: Any changes made here will affect this route instance only and not the entire recurring route series containing multiple instances. 
</Note>

### View/Remove job

1. Based on the conflicts, if you need to make necessary changes to a job in this instance, click the “**kebab**” icon under Jobs and select either “**View Job**” or “**Remove Job**.” 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-28.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=a3742382f44b8e11f9198fd93239cc54" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-28.png" />
2. When you click "**View Job**," a sidebar appears with job details, allowing for quick field edits. From this sidebar, you can also view full details, clone the job, or delete it using the "**ellipsis**" icon at the top right.   
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-29.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=20b6a6289557ffe2d088f8e13e5b619d" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-29.png" />

### Move route jobs

There will be situations when a job must be off-loaded from one of the instances of a recurring route to another due to unforeseen circumstances such as technician unavailability, customer preference, equipment failure, or urgent high-priority tasks arising unexpectedly.

In such cases, you can move jobs efficiently and seamlessly between routes by carefully considering various aspects such as proximity and travel time to the job location, current workload of the destination route, along with technician's skills and availability. This ensures that the movement of the job is done with minimal disruption and maximum efficiency.

You can move route jobs from the source to the destination using any of the following options:

* Directly choosing the destination route
* Using the Map view
* Using the Scheduler view

<Note>
  **Note**: When moving one of the job instances from a recurring job series that [satisfies the condition](/Dispatch/Create_manage_recurring_route#add-recurring-jobs-to-recurring-routes), you will have an additional option to move not just the current instance but all future instances of the recurring job series to the target route. Whereas if you move one-off jobs or recurring jobs whose schedule range exceeds that of the target route, only the selected job instances will be moved to the target route.
</Note>

### **Directly choosing the destination route**

Use this option only if you are quite sure about the destination route to which you want to move the job(s) to, and the user assigned to the destination route has the same skill set to complete the job.

<iframe src="https://drive.google.com/file/d/1jXfsh9LVlJAhwsQK6rviN-mrbRw6KS82/preview" width="720" height="480" allow="autoplay" />

To move route jobs, follow these steps:

1. Click the “**Move Jobs**” button under the route instance. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-30.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=a71ad3d6ddcb1c4e97296ffec38a052a" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-30.png" />

2. The **Move Route Jobs screen appears**, displaying the source route, its date and time, and the associated jobs on the left.

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-31.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=895d30ea6c8310ae8aadd93976dffe24" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-31.png" />

3. To move the job from the existing route (source) to another (target or destination), on the right, under “**Destination route,**” click the dropdown menu and choose either a "**one-off route**" or a "**recurring route**."  

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-32.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=3786f972e23e8793389564c94d4c25db" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-32.png" />

4. Based on your selection, you can view the available routes. Choose the destination route that is near the source route. 

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-33.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=5588e9a28e127013495693c9095cdd54" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-33.png" />

1. Once the destination route has been chosen, simply drag and drop the job from the source route to the destination route and click the "**Save**" button to update the changes. 

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-34.jpg?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=08603041a040f6ac3bdc71c756767898" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-34.jpg" />

### Use the map view

If you're unsure which destination route to move the job to, switch to the Map view. The Map view also helps you find a destination route that is proximate to the current route (source). Here's how:

<iframe src="https://drive.google.com/file/d/1FIsIS0g772qpp5dFhekWgvdi0V_9ggDb/preview" width="720" height="480" allow="autoplay" />

1. Select "**Map**” on the right and click “**Show all routes**” at the top. This will display all created routes on the map for the selected date, including recurring and one-off routes.  
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-35.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=533f4a08fdfda5ad8235cf9020153e3d" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-35.png" />

2. You can also use "**Filter**" to refine the routes displayed on the map based on skill sets, date, and users. After setting the filters, click the  “**Apply**” button.

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-36.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=be121b15ff1533fda7047dfe9c19626c" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-36.png" />

1. From the filtered routes, choose the closest route to the source route of your choice by considering the overall route duration, jobs already assigned to the route, and travel time necessary between jobs, and choose it as the destination route by clicking the “**Set as Destination Route**” button. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-37.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=b89a44d9c7a03e0683fc33d0c86806ef" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-37.png" />

4. After choosing the destination route, simply drag and drop the job that you want to move from the source route to the destination route and click the "**Save**" button to update the changes. 

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-38.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=7ed1797df2f809b20bf9a61bbfd0339d" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-38.png" />

### **Use the scheduler view**

If you need to move a route job to another route based on the customer's preferred date and time, the “**Scheduler**” view is your best choice. Here, you can simultaneously view both the technician availability and capacity of each route on a selected date.  Based on this data, you can choose the destination route. Here's how:

<iframe src="https://drive.google.com/file/d/1hOYaxNIgrDHi_Ykt6jKqTuAg8CiXaPuj/preview" width="720" height="480" allow="autoplay" />

1. Click "**Scheduler**" on the right. You will see all available routes with their duration based on the source route date by default.
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-39.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=df5feab106ca27a303b497b882a1af60" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-39.png" />
2. You can also change the date according to the customer’s preference using the "**date picker**" on the top right. This allows you to view the selected date's routes along with their duration and associated jobs on the scheduler.
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-40.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=6a52b9ef9d7970986f288ba352600c8a" alt="" width="1920" height="1654" data-path="Dispatch/images/rroutes-40.png" />

<Note>
  **Note**: You can also apply other filters such as skill sets, and users to refine the routes displayed on the scheduler. After setting the filters, click the “**Apply**” button.
</Note>

<img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-41.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=a4a20013d589d14ac7166df33f19ed77" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-41.png" />

**Set as Destination Route**

1. Based on the routes available, choose the right destination route by considering the overall route duration, jobs already assigned to the route, technician availability at the customer's preferred time, and proximity and travel time to the job location, and “**Set as Destination Route**” by right clicking the route on the scheduler. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-42.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=bf4b3a44ff5e42d869a1a361e5a4139d" alt="" width="1917" height="762" data-path="Dispatch/images/rroutes-42.png" />
2. Once the route is set as the destination route, you can then simply drag and drop the jobs that you want to move from the source route to the destination route and click the "**Save**" button. The job will be moved from the source route to the destination route successfully. 
   <img src="https://mintcdn.com/zuperinc/IzxyT5w7Zqz7vhsC/Dispatch/images/rroutes-43.png?fit=max&auto=format&n=IzxyT5w7Zqz7vhsC&q=85&s=c69f341bb16119c2a9ee4acab75f7a66" alt="" width="1920" height="827" data-path="Dispatch/images/rroutes-43.png" />

So, that's a comprehensive overview of the "Recurring Routes" feature within the dispatcher module. With these step-by-step instructions, you can now leverage the recurring route feature completely to create recurring routes with predefined frequencies and associate them with recurring jobs, and ensure all recurring jobs are managed regularly within the recurring routes.


## Related topics

- [Creating and managing a non-job event](/Dispatch/Create_manage_non_job_event.md)
- [Creating and managing PPM](/Contracts_and_Assets_Management/Assets/Creating_PPM.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.