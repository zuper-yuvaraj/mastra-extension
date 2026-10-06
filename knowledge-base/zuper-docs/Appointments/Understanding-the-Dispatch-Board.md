---
title: "Managing your appointments from the Dispatch Board"
source: https://docs.zuper.co/Appointments/Understanding-the-Dispatch-Board.md
fetched_at: 2026-10-06T13:30:42.536Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing your appointments from the Dispatch Board

Use the **Dispatch Board** to efficiently manage your users’ schedules and job appointments. You can quickly find appointments that need attention, assign the right technicians, schedule or reschedule visits, and review job and appointment details from one workspace.

Each appointment can have its own date, time, assignees, trade type, tasks, and linked dependencies while remaining connected to the same parent job. This makes it easier to coordinate multi-day, multi-trade, and multi-crew work without creating separate jobs.

For example, a roofing job can include separate appointments for inspection, material delivery, installation, and final verification. Each visit can be scheduled independently and assigned to the most suitable technician.

From the Dispatch Board, you can now:

* View all, unscheduled, assigned, or unassigned appointments.
* Drag and drop appointments into technician time slots.
* Add or change assignees.
* Reschedule appointments.
* Clear a schedule while keeping the appointment available for later planning.
* Open the parent job or the selected appointment for more details.
* Create another appointment when the job requires an additional visit.
  <Note>
    **Note**: Once your organization uses Appointments, the Dispatch Board always dispatches by appointment. You can't switch back to dispatching by job.
  </Note>

## Understanding the Dispatch Board

The Dispatch Board contains four primary areas.<br />

<iframe
  srcDoc={`
<div class="ep-product-container" id="product1" data-theme="blue">
<img src="https://cdn.expertpal.io/hotspots/img/hudbzrygtmri.png" class="ep-responsive-image" alt="" />
</div>
<script type="application/json" class="ep-hotspots-data">
{
"product1": [
{ "id": "5o4tg2", "left": 30.003053260309525, "top": 20.962426932057163, "name": "Users", "description": "The Users panel lists each technician alongside their day in the scheduler, giving you a clear view of availability and assignments, key to allocating appointments efficiently." },
{ "id": "v1l19i", "left": 17.601091540560653, "top": 14.33622017254798, "name": "Appointment Queue", "description": "The queue is your starting point. It contains appointments that need attention, whether they need scheduling, assignment, or review." },
{ "id": "apj49y", "left": 48.84357765776768, "top": 22.18864362715064, "name": "Scheduler", "description": "This is the central scheduling board. It provides a visual overview of which technician is assigned to which, and when. You can drag and drop appointments onto an FE's timeline." },
{ "id": "grx3o9", "left": 86.11529874243841, "top": 15.085528821474108, "name": "Map", "description": "The map provides a geographical context for all job locations. This is crucial for route planning and optimization. You can use this view to group jobs in the same area for FEs." }
],
"settings": { "showAttribution": true, "attributionAlign": "right", "version": "v1" }
}
</script>
<script async src="https://cdn.expertpal.io/hotspots/js/hotspots.v1.1779459199.min.js"></script>
`}
  width="100%"
  style={{ aspectRatio: "13 / 8", border: "none" }}
/>

* Appointment Queue
* Users
* Scheduler
* Map

Together, these views help you match the right technician with the right appointment at the right time.

## Find appointments that need attention

The appointment queue helps you identify work that still requires action.

Depending on your workflow, you may need to schedule appointments, assign technicians, or review appointments that have already been allocated.

1. Click the **Scheduling and Dispatching** module and select **Dispatch Board**.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/9yxwoq2lp0l62RFQ/images/navidispatchboard.png?fit=max&auto=format&n=9yxwoq2lp0l62RFQ&q=85&s=d98d3f062328813350cc332912404545" alt="Navidispatchboard" width="1425" height="1420" data-path="images/navidispatchboard.png" />
   </Frame>
2. Select the required time zone.
3. Select a **Trade Type** when applicable.
4. (Optional) Select a Service Territory.
5. Select the required team.
6. Select the date you want to manage.
7. Open the appointment queue in the upper-left corner.
8. Select one of the following options:
   * **All Appointments** - Displays all the appointments available to you.
   * **Unscheduled Appointments** - Displays appointments without a confirmed start and end date and time. You can use this queue to schedule appointments.
   * **Assigned Appointments** - Displays appointments assigned to one or more users. You can use this queue to review work that has already been allocated.
   * **Unassigned Appointments** - Displays appointments that do not currently have an assigned user or team. You can use this queue when appointments need technicians.<br />
     <Frame>
       <img src="https://mintcdn.com/zuperinc/f6sFQRHvQqyOEO4z/images/appointments-04.png?fit=max&auto=format&n=f6sFQRHvQqyOEO4z&q=85&s=c821678b9dde543d40a9d123d190ce34" alt="Appointments 04" width="3408" height="1964" data-path="images/appointments-04.png" />
     </Frame>

Use **Search**, **Filter**, and **Sort** to quickly locate the appointments you need.

<div class="iactiveImg" data-ii="71697" />

## View job and appointment details

Before scheduling or assigning work, you may need additional information about the job or appointment.

The Dispatch Board allows you to review details without leaving your current view.

1. Locate the appointment in the dispatcher queue and right-click on it.
2. Select one of the following options:
   1. **View Job Details**
   2. **View Appointment Details**<br />
      <Frame>
        <img src="https://mintcdn.com/zuperinc/f6sFQRHvQqyOEO4z/images/appointments-05.png?fit=max&auto=format&n=f6sFQRHvQqyOEO4z&q=85&s=2da895ae54cf780ab2411cef0c113ddd" alt="Appointments 05" width="3380" height="1234" data-path="images/appointments-05.png" />
      </Frame>

Zuper opens the selected record in a side panel without taking you away from the Dispatch Board.

## View all appointments associated with a job

1. Select **View Job Details**.
2. Click the **Appointments** tab.
3. Review all appointments associated with the job.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/f6sFQRHvQqyOEO4z/images/appointments-06.png?fit=max&auto=format&n=f6sFQRHvQqyOEO4z&q=85&s=33ea1a0a8b168ea4355c2e7287e8d9fe" alt="Appointments 06" width="3388" height="1942" data-path="images/appointments-06.png" />
   </Frame>
4. Select an appointment to view its details.

## Create a new appointment

When an existing job requires an additional appointment, you can create it from the Dispatch Board itself. To do so, click the **+ Create Appointment** on the View Detail page. See [Add Appointments](/Appointments/Appointments#add-appointments)<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/b4MitVWIKwieURlq/images/Dispatchappointments.png?fit=max&auto=format&n=b4MitVWIKwieURlq&q=85&s=5fbf163655228952eda4e176f2b8aa5f" alt="Dispatchappointments" width="3388" height="1942" data-path="images/Dispatchappointments.png" />
</Frame>

## Schedule an appointment

Unscheduled appointments appear in the appointment queue and are ready to be placed for a technician.

Scheduling an appointment reserves a time slot and assigns responsibility for the visit.

1. On the appointment queue, select **Unscheduled Appointments**.
2. Select the required team and date.
3. Review the appointment details, including the parent's job, trade type, and due date.
4. Locate an available technician in the **Users** section.
5. Drag the appointment from the queue to an available time slot in the technician's scheduler row. The **Schedule dialog** opens.
   1. Enter or review the Appointment Start Time.
   2. Enter or review the Appointment End Time.
   3. Turn on All Day when the appointment should cover the entire day.
   4. Click **Assign** to add technicians when required.
6. Click **Update**.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/dOKfVhBf-Ly86s38/images/1786011942803305.gif?s=8134c2f25b8a1322f88a20bbfffd93b5" alt="1786011942803305" width="400" height="230" data-path="images/1786011942803305.gif" />
   </Frame>

Zuper schedules the appointment, assigns it to the selected technician, and displays it in the technician's scheduler row.

## Assign or reassign technicians

As schedules change throughout the day, you may need to add technicians or move work between team members.

The Dispatch Board allows you to update assignments.

### Assign additional technicians

1. Drag the appointment to a technician's scheduler row.
2. In the **Schedule** or **Reschedule** dialog, click **Assign More**.
3. Select the additional users.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/4oWkErWZPXMhTcgT/images/user-assignment.png?fit=max&auto=format&n=4oWkErWZPXMhTcgT&q=85&s=593fc44819540859845abf0bee998c2f" alt="User Assignment" width="3390" height="1932" data-path="images/user-assignment.png" />
   </Frame>
4. Review the appointment start and end times.
5. Click **Update**.

Zuper adds the selected users to the appointment.

### Reassign an appointment

1. Locate the appointment in the scheduler.
2. Drag the appointment from the current technician's row to another technician's row. The **Reschedule dialog** opens.
3. Review the new technician assignment.
4. Confirm the appointment start and end times.
5. Click **Update**.

Zuper assigns the appointment to the selected technician.

## Reschedule an appointment

Schedules often change because of customer availability, technician workload, weather conditions, or project timelines.

You can reschedule an appointment without affecting any other appointments associated with the same job.

1. Select Assigned Appointments or locate the appointment in the scheduler.
2. Drag the appointment to a different time slot or technician. The Reschedule dialog opens.
   1. Update the Appointment Start Time.
   2. Update the Appointment End Time.
   3. Turn on All Day when required.
   4. Review the assigned users.
   5. Click **Assign More** to add additional users when needed.
3. Click **Update**.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/dOKfVhBf-Ly86s38/images/1786012116491435.gif?s=108ce6117e6bb383df7a617228a3767e" alt="1786012116491435" width="400" height="230" data-path="images/1786012116491435.gif" />
   </Frame>

Zuper updates only the selected appointment.

## Clear an appointment schedule

If an appointment is still required but the date and time are no longer confirmed, you can remove the schedule and return the appointment to the queue for future planning.

1. Open the Reschedule dialog for the appointment.
2. Click **Clear Schedule**.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/O9p2OPkSjvzQYGpw/images/clearschedule.png?fit=max&auto=format&n=O9p2OPkSjvzQYGpw&q=85&s=ec5a46f09d792be741702f1c0db184ac" alt="Clearschedule" width="3390" height="1932" data-path="images/clearschedule.png" />
   </Frame>
3. Confirm the action when prompted. The appointment returns to the Unscheduled Appointments queue.<br />Clearing the schedule removes only the scheduled date and time. The appointment remains associated with the job and can be scheduled again later.


## Related topics

- [Appointments](/Appointments/Appointments.md)
- [Understanding job visibility on the Dispatch Board](/Dispatch/Understanding_Job_Visibility.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.