---
title: "Non-Job Events"
source: https://docs.zuper.co/Zuper_Mobile_Apps/Non-job-event-on-mobile.md
fetched_at: 2026-10-06T13:30:18.959Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Non-Job Events

<Frame>
  **Navigation**:  *Dashboard → quick create (+ icon) → New Non-Job Events*
</Frame>

<Warning>
  **Warning: This feature requires the Zuper Field Service app.**

  Non-Job Events are not available in the legacy **Zuper Pro** mobile app. If non-job events are not appearing in your schedule or you are not receiving notifications, check which app you are using.

  Download the current **Zuper Field Service App**:

  * [Google Play Store](https://play.google.com/store/search?q=zuper+field+service)
  * [Apple App Store](https://apps.apple.com/search?term=zuper+field+service)

  The Zuper Pro app is the older version and no longer receives feature updates. See [Installing Zuper](/Getting_Started/Installing_Zuper) for details on switching.
</Warning>

\[existing intro text continues here]

## **Overview**

Not every part of your workday is tied to a job. When you have a team meeting, a training session, or an administrative task to log, you can create a non-job event directly from your Zuper mobile app.

## Before you start

* Ensure that ‘**Can Field Technicians create new non-job events**?‘ is enabled under Job General Settings -> Access/Permissions by the admin.
* Creating recurring non-job events is not supported on the mobile app.

## Create the event

1. Go to your **Dashboard**.
2. Tap the **+** button in the **Quick Links** section.
3. Select **New Non-Job Events** from the list.
4. The **New Non-Job Event** screen opens.
5. Fill in the required fields in the **Non-Job Event Details** section:
   * **Event Name** — Type a short and clear name.
   * **Category** — From the **Category** list, select the category that matches the type of event.
   * **Event Description** — Specify any additional context about the event. By default, Zuper fills this field automatically based on the category you selected. You can modify it or add a new description.
   * **Attendees** — Assign one or more FEs who will participate in this event. (As a field executive, you can add only yourself as an attendee.)
6. Specify the location:
   * **Event Address** — Provide the location of the event by picking it from the map. Set the schedule:
   * To schedule the event for the full day, turn on the **All-day** toggle. Zuper hides the **Start time** and **End time** fields.
7. To schedule the event for a specific time:
   * In the **Schedule On** field, select the event date.
   * In the **Start time** field, set the event start time.
   * In the **End time** field, set the event end time. If your organization uses multiple time zones, select a **Preferred time zone**. This option is available only if time zone switching is enabled.
8. Complete the **Additional Settings** section: **Availability** — This applies to all event attendees.\
   Tap **Busy** if attendees are unavailable during this event, or **Free** if attendees are available. When you set availability to **Busy**, Zuper blocks this time slot in Assisted Scheduling.
9. **Notify attendees** — Mark this checkbox to send a push notification to all attendees regarding the event. Tap **Create** to save the non-job event.

Tap **Create** to save the non-job event.

<video src="https://mintcdn.com/zuperinc/EHcTPcnhk_MxkOSl/videos/Non_Job_Event.mp4?fit=max&auto=format&n=EHcTPcnhk_MxkOSl&q=85&s=d2f36308f003c30b5317fac5bf43f465" controls data-path="videos/Non_Job_Event.mp4" />

Tap the context menu on the event details to edit or delete it.

<Note>
  Note: If you or other attendees (if you are a Team Lead or Admin) have an event, job, or time off scheduled at the same time, Zuper displays a **Confirm schedule** warning. You can still create the event if needed or modify the schedule timings
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/3L-gF0UxIqPzkBJO/images/njob32-1.png?fit=max&auto=format&n=3L-gF0UxIqPzkBJO&q=85&s=1513e94c9817ababde85b55499b27efd" alt="Njob32 1" width="320" height="631" data-path="images/njob32-1.png" />
</Frame>

## FAQs

1. **What should I do if I see a conflict warning after creating an event?** \
   You see a conflict warning when the event overlaps with a busy event, a time-off request, or an existing job on your schedule. Open your schedule in **Day View** to identify the overlap. Adjust the start or end time of the event to resolve the conflict. \
   A TL and Admin can view all employees with conflicts, while FE, when scheduling non-job events, can see their conflict alerts and adjust their schedule accordingly.
2. **Why did attendees not receive a notification for my event?** \
   Confirm that the **Notify Attendees** checkbox was selected before you created the event. The Zuper mobile app sends push notifications to attendees' devices. Ask attendees to confirm that push notifications are enabled on their devices.
3. **Can I assign additional attendees to a non-job event?** \
   As a field executive, you can create a non-job event for yourself only. Zuper automatically adds you as the sole attendee. You cannot assign other attendees to the event. Your team lead can assign themselves or any member of your team. Your admin can assign any user. \
   If the issue continues, contact [Support](mailto:support@zuper.co).

***

## Related articles

* [Calendar & schedule](https://docs.zuper.co/Scheduling_and_Dispatching/Calendar)
* [Non-job event settings](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_non_job_events)
* [Non-job events on the web](https://docs.zuper.co/Dispatch/Create_manage_non_job_event)


## Related topics

- [Configuring Non Job Event](/Settings/Modules/Jobs/Configuring_non_job_events.md)
- [Creating and managing a non-job event](/Dispatch/Create_manage_non_job_event.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.