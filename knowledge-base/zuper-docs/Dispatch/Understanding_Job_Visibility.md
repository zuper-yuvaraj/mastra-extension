---
title: "Understanding job visibility on the Dispatch Board"
source: https://docs.zuper.co/Dispatch/Understanding_Job_Visibility.md
fetched_at: 2026-10-06T13:29:43.781Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Understanding job visibility on the Dispatch Board

Managing and overseeing jobs effectively is crucial, and understanding why certain jobs appear on your Dispatch Board can be challenging. This article clarifies how specific settings influence job visibility, helping you understand what you see and why. 

### Key settings for job visibility 

Job visibility on your Dispatch Board depends on the two important configurations in the **Organizations Settings** on the **Settings** page: 

1. **Can Team Leader access all jobs of FEs across teams?** 

   * **True**: You can view all jobs assigned to Field Executives (FEs), regardless of their team.

   * **False:** You can see only jobs assigned to FEs within your team.

2. **Can Team Leader access jobs based on service territory ownership?** 

   * **True:** You can view all jobs within your owned Service Territories, even if these jobs are assigned to different teams.  

   * **False:** You cannot view jobs based on Service Territories ownership. The visibility of jobs under the Dispatch Board will be primarily governed by the Team Leader’s job access set in the “**Can Team Leader Access All Jobs of FEs Across Teams?**” field. 

### Job visibility on the Dispatch Board 

Here's how the settings impact the jobs you can view: 

| **Can Team leader access all jobs of FEs across teams?**  | **Can Team Leader access jobs based on Service Territory ownership?**  | **Jobs You Can View on the Dispatch Board**  |
| - | - | - |
| **True**   | **True**   | <ul><li>All jobs assigned to your team where you’re a team lead. </li><li> Jobs assigned to technicians on your team.</li><li> Jobs assigned to technicians from other teams.</li><li> Jobs in your owned Service Territories, even if assigned to other teams. </li></ul>  |
| **True**   | **False** | <ul><li>All jobs assigned to your team where you’re a team lead. </li><li> Jobs assigned to technicians on your team. </li><li> Jobs assigned to technicians from other teams.  </li><li>Jobs are in your owned service territories, but only if they are within your team.  </li></ul> |
| **False** | **True**   | <ul><li> Jobs assigned to technicians on your team. </li><li> Jobs are in your owned service territories, but only if they are within your team. </li><li> Jobs in owned Service Territories from other teams are not visible. </li></ul>  |
| **False** | **False** | <ul><li> Jobs assigned to technicians on your team. </li><li> Jobs are in your owned service territories, but only if they are within your team. </li><li> Jobs in owned Service Territories from other teams are not visible. </li><li> Limited to view jobs based on direct team assignment only. </li></ul> |

**Viewing jobs on the Dispatch Board** 

The **Service Territory** filter on the Dispatch Board refines job visibility based on service territory ownership. This feature also allows Dispatchers (Team Leaders) to manage jobs and teams more effectively without needing to be part of a specific team. The real-world example below illustrates how service territory ownership influences the Team Leader to control job and team visibility. 

It also shows how the "**Can Team Leader access jobs based on Service Territory ownership?**" setting interacts with the "**Can Team Leader access all jobs of FEs across teams?**" setting to determine if a Team Leader can view jobs across different teams. 

 

**Teams and Jobs Overview:** 

| **Team**  | **Field Executives (FEs)**  | **Jobs in North Zone-ST1**  | **Jobs in West Zone-ST2**  |
| - | - | - | - |
| Team Titans | FE1, FE2  | Job 1 (FE1), Job 2 (FE2) | |
| Team Alpha  | FE3, FE4  | Job 21 (FE1), Job 22 (FE2)  | Job 41 (FE3), Job 42 (FE4)  |
| Team Beta  | FE5, FE6 | Job 31 (FE5), Job 32 (FE6)  | |

### ***Scenarios*** 

To further illustrate, here are some scenarios that show how these settings affect what you see on the Dispatch Board: 

**Scenario 1**: *Both settings **True**, "**North Zone-ST1**" selected* 

* **Visible Jobs:** Job 1, Job 2 (Team Titans), Job 21, Job 22 (Team Alpha), Job 31, Job 32 (Team Beta).

* **Not Visible:** Job 41, Job 42 (These are in West Zone-ST2, which you do not own). 

**Reason:** All jobs in the selected Service Territory (North Zone-ST1) are displayed, including those from other teams. 

**Scenario 2:** *Access All Jobs **True**, Service Territory Access **False**, "**North Zone-ST1**" selected* 

* **Visible Jobs:** Job 1, Job 2 (Team Titans), Job 21, Job 22 (Team Alpha), Job 31, Job 32 (Team Beta), Job 41, Job 42 (Team Alpha). 

* **Not Visible:** None. 

**Reason:** You can view all jobs assigned to technicians from any team, including those in the Service Territories you own, but the filter consists of jobs from all territories. 

**Scenario 3:** *Access All Jobs **False**, Service Territory Access **True**, "**North Zone-ST1**" selected* 

* Visible Jobs: Job 1, Job 2 (Team Titans).

* Not Visible: Job 21, Job 22 (Team Alpha), Job 31, Job 32 (Team Beta), Job 41, Job 42 (Team Alpha). 

**Reason:** You can only view jobs in the Service Territories you own and only those within your own team. 

**Scenario 4:** *Both settings **False**, "**North Zone-ST1**" selected* 

* **Visible Jobs:** Job 1, Job 2 (Team Titans).

* **Not Visible:** Job 21, Job 22 (Team Alpha), Job 31, Job 32 (Team Beta), Job 41, Job 42 (Team Alpha). 

**Reason:** You can view jobs assigned to technicians in your team and those in the Service Territories you own, but only if they are within your own team. 

We recommend using the Dispatch Board for a comprehensive view of all jobs based on your Organization settings and the selected Service Territory. However, please note that the jobs on the Dispatch Board may differ from those on the Jobs listing page. The Jobs listing page will display only the jobs that you and your team are directly associated with, providing a more focused view tailored to your team's specific assignments. 

By understanding these settings and how to use the Service Territory filter, you can effectively manage and oversee jobs on your Dispatch Board.


## Related topics

- [ Users, Scheduler, and Map layouts](/Dispatch/Detailed_Overview.md)
- [Managing your appointments from the Dispatch Board](/Appointments/Understanding-the-Dispatch-Board.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.