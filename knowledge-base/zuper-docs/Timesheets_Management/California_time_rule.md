---
title: "California Time Rule"
source: https://docs.zuper.co/Timesheets_Management/California_time_rule.md
fetched_at: 2026-10-06T13:29:54.035Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# California Time Rule

Zuper’s break enforcement system ensures technicians take required meal and rest breaks, as mandated by California labor laws or company policies. It controls when technicians can resume work or clock into jobs after initiating a break, with configurable enforcement modes, mandatory remarks for early resumptions, and clear UI flagging for compliance tracking. The system applies to all job access points (job listing, detail, notification, dashboard, etc.) on both mobile and web apps.

<Note>
  **Note**: This feature does not enforce the California rule requiring a meal break every 5 hours of work. Enforcement is triggered only when a break is initiated.
</Note>

# Configuring Break Policies

Admins can configure break policies in the timesheet settings to align with company needs or California regulations.

## Settings & Zuper Web App

1. Select the “**Settings** ” icon from the left navigation menu. Under the modules, choose the

   "**Timesheets**.”

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Cal1.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=fa90851f71f87ae350dd14d3cce9ab61" alt="Cal1 Pn" width="1907" height="854" data-path="images/Cal1.png" />

2. Select the “**Timesheet General Settings** ”

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Cal2.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=17f4e29691fdbe640ed7b47216bdd99b" alt="Cal2 Pn" width="1902" height="872" data-path="images/Cal2.png" />

3. Under "**Timesheets,**" from the “**Break Options**,” select any options below from the drop-down list.

* **Early Resume Policy**

  * **Allow:** No restrictions on resuming work early. Break types and durations are not enforced, and breaks are recorded as a single category.
  * **Warn:** Warns technicians if they attempt to resume early, requiring mandatory remarks. Entries are flagged for manager review.
  * **Restrict:** Blocks technicians from resuming work or clocking into jobs until the break duration is complete.
  * **Default:** Restrict

  **Rest Break**

  * **Duration:** The duration of rest breaks is in minutes (For instance, California’s 10-minute rest break per 4 hours worked).
  * **Editable,** prefilled to 10 minutes. Can be set to 0 (disabled).
  * **Shown only if** *Warn* or *Restrict* is selected.

  **Meal Break Duration**

  * **Duration in minutes** for meal breaks (For instance, California’s 30-minute meal break for shifts over 5 hours).
  * **Editable,** prefilled to 30 minutes. Can be set to 0 (disabled).
  * **Shown only if** *Warn* or *Restrict* is selected.

  **Configuration Rules**

  **If Allow is selected:**

  * Break duration fields are hidden.
  * All breaks are generic with no enforcement or type selection.

  **If Warn or Restrict is selected:**

  * Rest and Meal Break duration fields are shown and prefilled (10 and 30 minutes, respectively).
  * If only one duration is >0, the system auto-assigns that break type without a selection dialog box.
  * If both durations are >0, technicians must select a break type when starting a break.
  * If both durations are set to 0, saving is blocked with an error:\
    *“At least one break type must have a duration greater than 0 when enforcement is enabled.”*

<img src="https://mintcdn.com/zuperinc/702WvYaFwwoofRCs/images/Cal3.png?fit=max&auto=format&n=702WvYaFwwoofRCs&q=85&s=ac5a3687e8671a37358a0c915e13142a" alt="Cal3 Pn" width="1909" height="869" data-path="images/Cal3.png" />

## Zuper Mobile App

## Starting a Break

### 1. Initiating a Break:

* Open the Zuper mobile app.
* Navigate to the “**Timesheets**” module.
* If both Rest and Meal Break durations are set (where 0 indicates not set), a dialog box prompts the technician to select the break type.
* If only one duration is set (where 0 indicates not set), the system auto-assigns that break type (no dialog box).
* If both durations are 0 (only under Allow), a generic break starts with no type selection or enforcement.
* If clocked into a job, the system auto-clocks out of a job.
* The Take a Break button changes to Resume.
* The Break start time and type are recorded and cannot be edited.

  <img width="250" height="200" src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/cal6.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=3645e0f77667d58c7d13175e384e3404" data-path="images/cal6.png" />

### 2. Resuming Work or Clocking Into a Job

The system enforces break rules when a technician attempts to resume work or clock into a job (via job listing, detail, notification, dashboard, etc.) before the break duration is complete.

If the break duration has passed

* Technicians can resume work or clock into a job without restrictions or dialog boxes.
* If previously clocked into a job, the system auto-clocks back into that job upon resuming.

  <img width="250" height="200" src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/cal7.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=84c8c898637a57fc3a03d16881e48e85" data-path="images/cal7.png" />

### 3. If Resuming Early

**Allow**

* No dialog box; action is permitted.

**Warn**

* A dialog box displays: “**You are trying to resume work before your break is over. \[X] minutes left in your break. Do you want to continue?**”
* Technicians must enter mandatory remarks to proceed.
* The timesheet entry is flagged with a warning-with-time icon, and remarks are visible when hovering/tapping.
* If the technician continues, the system resumes the timesheet and auto-clocks into the previously active job (if any).

<img width="250" height="200" src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/cal5.jpg?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=8b3f1ede59d78506aec1e1760d57bd94" data-path="images/cal5.jpg" />

**Restrict:**

* A blocking dialog box displays: “**You cannot continue this job until our break is complete**.”
* All job-related actions (**view, edit, clock-in, etc**.) are blocked until the break duration is satisfied.

## Notifications

* Break End Notification: When the break duration ends (based on rest or meal settings), technicians receive a notification: “**Your break has ended. You may resume work**.”
* Post-Break Reminder: If the technician has not resumed work 10 minutes after the break ends, a follow-up notification is sent: “**Your break ended 10 minutes ago. Please resume work if you’re ready**.”
* No notifications are sent during the break.

## Viewing Flagged Entries

* On the Timesheets page (web and mobile) and in timesheet reports:

  Early resumptions under the Warn policy are flagged with a warning-with-time icon. o Hovering or tapping the icon shows a tooltip with:

  **Resumed early**

  **Technician’s remarks**
* This allows managers to quickly identify and review compliance issues.

<img src="https://mintcdn.com/zuperinc/N0-kTgRb79_nCoAC/images/cal4.png?fit=max&auto=format&n=N0-kTgRb79_nCoAC&q=85&s=e5984237a38be71375b2653b6974cd21" alt="Cal4 Pn" width="2940" height="932" data-path="images/cal4.png" />

## Key Rules & Edge Cases

* **Mandatory Remarks**: Under the Warn policy, remarks are required for early resumption or clock-in.
* **Break Type Lock**: Break type cannot be edited after selection.
* **No Admin Override**: The Restrict policy is a hard block with no override.
* **Auto Clock-Out/In**: The system auto-clocks out from an active job when a break starts and auto-clocks into the same job (if any) when resuming.
* **Generic Breaks**: If both durations are 0 (under Allow), breaks are recorded as “**Generic Break**” in reports with no enforcement or type selection.
* **Cross-Platform Consistency**: All flows apply to both web and mobile interfaces.
* **Exclusion**: The system does not enforce a meal break every 5 hours; enforcement applies only when a break is initiated.

## Benefits

* **Compliance**: It aligns with California’s meal and rest break laws (for instance, 30-minute meal breaks for shifts over 5 hours, and 10-minute rest breaks per 4 hours).
* **Transparency**: Flagged entries and remarks provide clear visibility for managers and payroll teams.
* **Auditability**: Timesheet reports with flagged entries simplify compliance audits.
* **Flexibility**: Configurable policies (Allow, Warn, Restrict) adapt to company needs.


## Related topics

- [Surcharge Fee](/Zuper-pay/Surcharge.md)
- [Using Conditional Rules ](/Zuper_for_Roofing/Conditional_Rule.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.