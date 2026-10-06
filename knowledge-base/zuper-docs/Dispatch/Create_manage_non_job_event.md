---
title: "Creating and managing a non-job event"
source: https://docs.zuper.co/Dispatch/Create_manage_non_job_event.md
fetched_at: 2026-10-06T13:29:43.825Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Creating and managing a non-job event

A non-job event refers to any activity that a field technician or other employees engage in that is not directly related to a specific job or work order. Creating these event(s) informs dispatchers that the technician is unavailable for job assignments during this period, enabling better scheduling and resource management.
You can create a non-job event from either the **Dispatch Board** or the **Calendar**.

**Navigation:** *Dispatch Board  -> <Icon icon="angle-down" /> -> Non-Job Event*

## Create a non-job event

1. Select the **Scheduling and Dispatching** module from the left navigation menu and choose either *Calendar* or *Dispatch Board*.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-1.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=d1a5c4a1f94750c1564661ddd01242a2" alt="" width="1919" height="882" data-path="Dispatch/images/nonjob-1.png" />

2. Click the **drop-down** menu next to the "**Create Job**" button located at the top-right corner of the page and select “**New Non Job Event**”.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-2.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=65148dec49a86bf4856186887b5b4424" alt="" width="1917" height="881" data-path="Dispatch/images/nonjob-2.png" />

3. A **Create Non Job Event** sidebar will appear.

<Note>
  **Note**: You can create a non-job event for a specific time period on the **Dispatch Board** by clicking and dragging the cursor across the desired time range in the scheduler. Once selected, choose "**Create a Non-Job Event**" from the available options.
</Note>

<video controls className="w-full aspect-video" src="https://drive.google.com/file/d/1fKn-O12yIlVnyjgvR7PJLuV1vqLADUj6/view?pli=1" />

4. Fill in the Primary Details section:

* **Event Name (mandatory)**: Provide a name for the event, with a maximum limit of 200 characters.
* **Category (mandatory)**: Choose the category for the event from the list. If needed, you can also create a new category directly from here. 

<Accordion title="To create a new category" defaultOpen="false">
  1. Click "**Create New Category**".

  <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-3.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=30f010d53bcb350f43f47b403aa144b7" alt="" width="1918" height="878" data-path="Dispatch/images/nonjob-3.png" />

  2. Provide the category name, color, and description.

  3. If you want to set the default availability for the event to busy, check the “**Mark Attendees as busy**” checkbox. This will set the availability to ‘Busy’ for any event in the category by default and can be changed at the event level.

  <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-4.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=4c65e27bf35688900733d5868c852fbf" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-4.png" />

  4. Click the "**Save**" button. The new category will be created and added to the existing list.

  <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-5.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=a1a6d22936582e205e094bbf5722a8a6" alt="" width="1915" height="882" data-path="Dispatch/images/nonjob-5.png" />
</Accordion>

* **Event Description**: Provide a description of the event, with a maximum limit of 8000 characters.
* **Attendees**: Select the user(s) who will be engaged in this non-job event.
* **Event Address**: Select and add the event address using the map.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-6.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=f9591e3af6b973a75d0c1c0baff83b46" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-6.png" />

5. Fill in the **Schedule** section:<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-7.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=9aed1d700077f070f6d0506177abce50" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-7.png" />

* **Schedule On (mandatory)**: Set the **start** and **end times** for the selected date, along with the preferred time zone.
* Optionally, toggle '**All Day**' on or off at the top right. When enabled, the **start** and **end** **times** default to business hours in the selected time zone, which can be adjusted as needed.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-8.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=6a1b727afbdb3b778512136bbe45e928" alt="" width="3840" height="878" data-path="Dispatch/images/nonjob-8.png" />

<Note>
  **Note**: Non-job events can only be scheduled for a single day, not multiple days.
</Note>

6. **Availability**: Choose whether the attendees will be marked as "**Busy**" or "**Free**" for the event.

<AccordionGroup>
  <Accordion title="Busy" defaultOpen="false">
    The scheduled time will be blocked for the attendees in Assisted Scheduling. If there is a conflict between a job and the non-job event, the dispatcher will be notified
  </Accordion>

  <Accordion title="Free" defaultOpen="false">
    The scheduled time will remain open, allowing the dispatcher to schedule jobs for the attendees during the non-job event. In this case, the dispatcher will not be notified of any conflicts with the non-job event.
  </Accordion>
</AccordionGroup>

7. **Notify Attendees**: If this checkbox is selected, attendees will receive notifications via push messages on both mobile and desktop devices.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-9.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=df83e758c2e64890420815ea79f23cef" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-9.png" />

<Note>
  **Note**: Notifications will also be sent to attendees when there are changes to the event's schedule, assignment, or address.
</Note>

8. **Repeat**: Select how often this non-job event will occur:

* **None** (one-time event).
* **Repeats**: Set the event to repeat daily, weekly, monthly, or yearly based on the scheduled date or day. If you choose to repeat the event, you will be prompted to specify when the recurrence should end.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-10.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=5277a50bb28f8642c68622ac8984dff5" alt="" width="1915" height="883" data-path="Dispatch/images/nonjob-10.png" />

* **Ends (mandatory)**: Choose either an end date or the number of occurrences after which the recurrence will stop.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-11.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=33df63d5f0c5f72099b40269a1063dcb" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-11.png" />

9. After entering the required details, click the **Create** button. The non-job event will be successfully created for the selected date and time and will appear on the **Dispatch Board** and the **Calendar** alongside the attendees.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-12.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=31f78e0f5f033cabfe13217e34e5ac5a" alt="" width="1920" height="1756" data-path="Dispatch/images/nonjob-12.png" />

## Managing non-job event

Once the non-job event is created, you can view, edit, or delete it as needed. The event will appear in gray, with a ribbon on the left side that may be striped or unstriped, depending on the attendees' availability:

* A **striped ribbon** indicates that the attendees are **available**.
* A **solid ribbon** (no stripes) indicates that the attendees are **busy**.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-13.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=577d0cd507ecf028abf2d9f5c9c186d6" alt="" width="1919" height="874" data-path="Dispatch/images/nonjob-13.png" />

### **Edit non-job event details**

To view and edit a non-job event, follow these steps:

1. Select the specific event on the calendar or dispatch board. This will open the non-job event details on the right, showing all relevant information.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-14.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=6e60b369264d0853daf34aa0130a2eb5" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-14.png" />

2. Click the ellipsis icon (three dots) at the top-right corner of the page to update the event details and select **Edit**. Alternatively, you can right-click on the event and choose the **Edit** option.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-15.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=7bf3c9700e3272bbec18135a427b1a0c" alt="" width="1920" height="1760" data-path="Dispatch/images/nonjob-15.png" />

<Note>
  Note: If the event is part of a recurring series, a pop-up will appear prompting you to choose one of the following options:

  * **Update this event only:** Changes will apply only to the selected instance of the event.
  * **Update this and upcoming events:** Changes will apply to the selected event and all subsequent events in the series.

      <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-16.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=b443177de593a25f2c165bab6074d7fa" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-16.png" />
</Note>

3. Once you’ve made the necessary changes, click the “**Update**” button to save the updated event details. The changes will also be notified to the relevant attendees.
   <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-18.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=afd6bbe041ec8dc4268d0328ac8a7db8" alt="" width="1916" height="880" data-path="Dispatch/images/nonjob-18.png" />

<Note>
  **Note**: When you update a single instance of a recurring event, that instance will no longer be part of the recurrence and will become a single event.
</Note>

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-19.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=b3ec14417160bd926a28658f30e452e7" alt="" width="1917" height="880" data-path="Dispatch/images/nonjob-19.png" />

### Delete non-job event

To delete a non-job event, follow these steps:

1. Select the specific event on the calendar or dispatch board. This will open the non-job event details on the right, showing all relevant information.

   <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-20.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=bae644da6be3f02582e8c8c49e828290" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-20.png" />

2. Click the ellipsis icon (three dots) at the top right of the page and select "**Delete**.”  A confirmation pop-up will appear. Click “**Delete**” to proceed. Alternatively, you can also right-click on an event and choose the “**Delete**” option.
   <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-21.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=98b7d7bc832fdfa339ed5e93878510a9" alt="" width="1920" height="1755" data-path="Dispatch/images/nonjob-21.png" />

<Note>
  **Note:** If the event is part of a recurring series, a pop-up will appear, prompting you to choose one of the following options:

  * **Delete this event only**: Deletes only this specific instance.
  * **Delete this and upcoming events**: Deletes this event and all future occurrences in the series.

      <img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-23.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=44d658cd8e052f886ba6437d6387cc23" alt="" width="1920" height="878" data-path="Dispatch/images/nonjob-23.png" />
</Note>

3. Click the “**Delete**” button to proceed with deleting the event.

<img src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-24.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=d875beef3eb4af75e01bb3d4394608e1" alt="" width="1920" height="1759" data-path="Dispatch/images/nonjob-24.png" />

## **Non-job events on mobile**

After creating a non-job event, attendees will receive a notification on their mobile device. From the mobile app, they can view the event details and delete the event as needed.  Recurring events are indicated with a ‘**recurring**’ icon.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/IrlKO33t1FrE3lZ2/Dispatch/images/nonjob-25.png?fit=max&auto=format&n=IrlKO33t1FrE3lZ2&q=85&s=7431b7f3eae69b57d4b5f23188d909e6" data-path="Dispatch/images/nonjob-25.png" />

<Note>
  **Note**: If the event is part of a recurring series, users can only delete a specific instance and cannot delete the entire series.
</Note>


## Related topics

- [Accessing the Calendar/Schedule board](/Scheduling_and_Dispatching/Calendar.md)
- [Non-Job Events](/Zuper_Mobile_Apps/Non-job-event-on-mobile.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.