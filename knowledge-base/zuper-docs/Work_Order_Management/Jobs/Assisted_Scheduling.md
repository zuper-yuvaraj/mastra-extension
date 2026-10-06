---
title: "Assisted Scheduling"
source: https://docs.zuper.co/Work_Order_Management/Jobs/Assisted_Scheduling.md
fetched_at: 2026-10-06T13:29:39.376Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Assisted Scheduling

Assisted Scheduling in Zuper takes the guesswork out of workforce management. It combines real-time data on availability, skills, shifts, and territories into a single interface, so you can assign the right technician to the right job at the right time. Whether you're juggling multiple jobs or making sure a technician's day isn't overbooked, Assisted Scheduling helps you make informed decisions quickly.

**In this article, you'll learn how to:**

* Open Assisted Scheduling while creating a job.
* Read the **Slot View** and **Resource View**.
* Understand how business hours, work hours, and shifts determine the slots you see.
* Apply filters to narrow down the best available slots.

## Pre-requisites

Before you begin, make sure the following are set up:

* **Business hours** and **work hours** are configured correctly for your organization and your users.
* For teams that work across multiple time zones, set “**Enable Switching Timezones**” to "**Yes**" under **Organization settings > General settings**, and assign each team to the appropriate time zone.

<Frame>
  **Navigation:** *Jobs -> New Job -> Assisted Scheduling*
</Frame>

## Access assisted scheduling

1. Click the “**+ New Job**” button at the top right corner of the page to create a new job.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nSgNrV1GBLSdYutZ/images/assjobsch1.png?fit=max&auto=format&n=nSgNrV1GBLSdYutZ&q=85&s=a4458c95489fd016d53e00f151880740" alt="Assjobsch1" width="1920" height="878" data-path="images/assjobsch1.png" />
</Frame>

2. Click the “**Check Availability**” button to open the dialog box.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nSgNrV1GBLSdYutZ/images/assjobsch2.png?fit=max&auto=format&n=nSgNrV1GBLSdYutZ&q=85&s=7525c4a740b3ca491defb96744c66477" alt="Assjobsch2" width="1920" height="878" data-path="images/assjobsch2.png" />
</Frame>

3. Select a preferred date from the calendar on the left-hand side of the interface, then choose how you want to view availability — “**Resource View**” or “**Slot View**.”

**Slot View**: Displays all available time slots for the selected date.

**Resource View**: Displays available slots for each individual user in the chosen time zone, grouped by team.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched3.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=88654432efee8b7fc7af23095912d259" alt="Sched3 Pn" width="1147" height="802" data-path="images/sched3.png" />

## Slot Availability

When Assisted Scheduling decides which slots to display, it takes several factors into account:

* Business hours
* Work hours
* Shift hours
* Whether a user is already assigned to another job or a non-job event
* User time off
* Holidays

The sections below explain how each factor affects the slots you see. You can narrow the results further using the [filters](#applying-filters) described later in this article.

### How business hours, work hours, and shifts work together

This is the part most people ask about, so let's break it down.

Three kinds of hours can influence a technician's availability:

* **Business hours** — your company's operating hours (for example, 9 AM–5 PM).
* **Work hours** — the standard hours an individual technician works (for example, 8 AM–4 PM).
* **Shift hours** — a specific shift assigned to a technician on a particular date (for example, 7 AM–3 PM on November 20).

The “**Consider User Shifts**” setting decides which of these hours Assisted Scheduling uses:

* **When “Consider User Shifts” is off**, Zuper starts with **business hours** and then narrows them by the technician's **shift** for that date (if one exists) or by their **work hours** (if no shift exists).
* **When “Consider User Shifts” is on**, Zuper ignores business and work hours entirely and shows **only the technician's shift hours**. If the technician has no shift on that date, no slots appear.

**Worked example**

Fire & Ice is an HVAC company with business hours of **9 AM–5 PM**. John, a field technician, works **8 AM–4 PM** every day. On **November 20, 2024**, John is assigned a shift from **7 AM–3 PM EST**.

Here is how John's available slots change depending on the setting:

| “Consider User Shifts” | Does John have a shift that day? | Hours Zuper uses | Slots shown |
| :- | :- | :- | :- |
| Off | Yes | Business hours, limited by the shift | **9 AM – 3 PM** |
| Off | No | Business hours, limited by work hours | **9 AM – 4 PM** |
| On | Yes | Shift hours only | **7 AM – 3 PM** |
| On | No | Shift hours only (none exists) | **No slots shown** |

<Note>
  **Tip:** If a technician's slots aren't appearing as you expect, check the “**Consider User Shifts**” setting first. When it's on, a technician with no shift for the selected date will have no available slots.
</Note>

Here is the same logic explained step by step, with the matching screenshots:

*When “Consider User Shifts” is toggled off:*

i. If the technician has a shift for that date, Zuper shows the slots that fall within **both** business hours and shift hours. In the example above, John's slots appear from **9 AM–3 PM** on November 20 — inside business hours, and only up to the end of his 3 PM shift.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched6.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=5e84d102c14de40f2426c14e5b33afe1" alt="Sched6 Pn" width="940" height="198" data-path="images/sched6.png" />

ii. If the technician has no shift, Zuper shows the slots that fall within **both** business hours and work hours. In the example above, John's slots appear from **9 AM–4 PM** — inside business hours, and only up to the end of his 4 PM work day.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched7.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=078a37dfa8ede5b037838902bbcd8948" alt="Sched7 Pn" width="940" height="198" data-path="images/sched7.png" />

*When “Consider User Shifts” is toggled on:*

Business and work hours are ignored, and only shift hours are considered. Zuper shows only the slots that fall within a technician's shift, and if no shift exists for that date, no slots appear. In the example above, John's slots appear for his **7 AM–3 PM EST** shift, regardless of his business or work hours.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched8.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=4255501e174affdffba5c1e901f528a2" alt="Sched8 Pn" width="940" height="198" data-path="images/sched8.png" />

### User assignment to jobs and non-job events

* When a user is assigned to a job or a non-job event (with availability set to ‘**Busy**’ for the non-job event), the corresponding time slot is blocked in the **Resource View**.
* If all users are occupied at a specific time, that slot is also blocked in the **Slot View**.
* A slot becomes available again if the assigned job is **‘Completed,’** **‘Closed,’** or **‘Cancelled.’**

### User time off

* When a user is on time off, their slots are hidden in the **Resource View**.
* If all users are on time off during a specific slot, that slot is hidden in the **Slot View**.

### Holidays

In **Zuper**, holidays can apply to all users or to specific teams, and each holiday can either allow or restrict job scheduling. Here is how the different holiday types appear in Assisted Scheduling:

| Holiday type | Where it appears | Can you schedule? |
| :- | :- | :- |
| All users – jobs allowed | Marked in the **date picker** | Yes — the date can be selected |
| All users – jobs not allowed | Marked in the **date picker** | No — the date cannot be selected |
| Specific team – jobs allowed | Marked **next to the team's name** | Yes — the team can be selected |
| Specific team – jobs not allowed | Marked **next to the team's name** | No — the team cannot be selected |

**Example:** If April 2 (Wednesday) is a holiday with jobs allowed, you can still select it for scheduling. If April 1 (Tuesday) is a holiday with jobs restricted, you cannot select it.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched4.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=7d13464840d3c0fb8c9414f3879fcb79" alt="Sched4 Pn" width="1147" height="802" data-path="images/sched4.png" />

## Applying Filters

To refine the list of available slots, you can apply these filters:

* **Time Zone:** Available slots are listed only for teams in the selected time zone. As mentioned, business and work hours are considered in the selected time zone.
* **Duration:** Slots are displayed in the selected duration; the maximum duration allowed is 8 hours. If a category is selected, the category duration is pre-filled (if the category duration exceeds 8 hours, 8 hours is pre-filled). If no category is selected, the duration is pre-filled to 1 hour.
* **Consider User Shifts:** Adjust based on shift settings (as detailed above).
* **Service Territory:** Limit slots to users in a specific geographic area.
* **Skills:** Show slots for users with the required skills.
* **Team:** Selecting “Any Team” lists slots for every team that satisfies the Time Zone, Service Territory, and Skill filters. Selecting “Selected Teams” lets you pick specific teams that satisfy those same filters.

<img src="https://mintcdn.com/zuperinc/noPgwpKDoZrQKHPY/images/sched5.png?fit=max&auto=format&n=noPgwpKDoZrQKHPY&q=85&s=fc4c88b233aefb4f9fd141cb11e4f49c" alt="Sched5 Pn" width="1140" height="802" data-path="images/sched5.png" />

## Best Practices

* Use filters to narrow down options when scheduling for specific teams, skills, or territories.
* Double-check the “**Consider User Shifts**” setting to ensure it aligns with your scheduling preferences.
* Adjust time zones carefully to match customer or operational needs.

## Related articles

* [Creating a new job](/Work_Order_Management/Jobs/creating_a_new_job)
* [Managing Job Details](/Work_Order_Management/Job-detail-page)
* [Dispatch Board overview](/Dispatch/Overview)
* [Accessing the Calendar/Schedule board](/Scheduling_and_Dispatching/Calendar)


## Related topics

- [Zendesk Support](/Integrations/CRM/Zendesk/Zendesk.md)
- [Creating a new job](/Work_Order_Management/Jobs/creating_a_new_job.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.