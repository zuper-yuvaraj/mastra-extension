---
title: "Kanban Views"
source: https://docs.zuper.co/Work_Order_Management/Jobs/Kanban_View.md
fetched_at: 2026-10-06T13:29:39.164Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Kanban Views

**Kanban View** enables you to visualize records as cards that move through different stages of your workflow. Each stage of a status attribute is displayed as a column, and each record appears as a card. You can drag and drop cards between columns, customize the details shown on each card, and apply filters to tailor the view to your needs.

Below is an instance where the jobs are listed based on their current state, along with their probable revenues. The information is displayed in two ways: **List View** and **Kanban View**.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-3.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=86f6398ee7ccf87972d99b630d8c217d" alt="Kanban 3 Pn" width="1366" height="723" data-path="Work_Order_Management/Jobs/Kanban-3.png" />

In comparison to List View, where all the records are listed one after the other in a table format, a Kanban view segregates your records based on the job status, giving a clearer picture. You can also view the aggregate revenue under each status.

<Note>
  **Note**: Currently, the Kanban view is supported for the Job module.
</Note>

**Prerequisite**: Ensure that the "**Enable Kanban View**" setting is toggled *On* in the **Job Settings** under the **General** tab. You can access this by navigating to **Settings** from the left navigation menu, then selecting **Modules** > **Jobs** > **General Job Settings**.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-2.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=ae7c9d81629b65327dacf9157ecb1157" alt="Kanban 2 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-2.png" />

## **Creating a Kanban View**

You can create multiple Kanban views tailored to different needs. For example, you can view jobs by statuses such as *New Booking*, *On My Way*, *Started*, or *Completed*. Within each view, you can also sort jobs by attributes like *Job Value* or *Scheduled Date* to prioritize work effectively. Let’s see how to create and save personalized Kanban views for your workflow.

1. Navigate to the Job module from the left navigation and select “**Job**”. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-1.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=aabe5378946fe8506884191059c20988" alt="Kanban 1 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-1.png" />
2. Click **View Picker** in the top left corner of the Job listing page and select **“+ Create New View**”. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-4.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=d41602b1d7d9adcf1314c62fba6ceee9" alt="Kanban 4 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-4.png" />
3. Enter the **View** name and choose the **View Type**. In our case, you need to select “*Kanban*”. If you wish to create a list view, choose “*List*”.
4. Click **Next** to proceed. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-5.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=31a88c5e5b345451309ba7851f58f8db" alt="Kanban 5 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-5.png" />
5. In the **Create View** dialog box, choose which *users* or *teams* can access this view (optional).
   * If you assign, set their permissions accordingly: **View** or **Edit**.
   * To give your entire company view-only access, simply toggle **Visibility to all users**.
6. Click **Create** to save your initial configuration. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-6.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=5a9e6201e46e47b2a22614ccae67b467" alt="Kanban 6 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-6.png" />
7. The customization panel will open on the right-hand side, where you can tailor the board to your needs.
   * Choose whether each job card displays the **Job Name** (e.g., "#**Gutter Cleaning and Realignment**") or **Customer Name** (e.g., "George Miller") as the title. To further enhance the *Card Details*, click on '**Customize**' on your chosen card style. You can search and select up to three fields to display on the card (e.g., **Priority**, **Scheduled Date**), hover over the fields to reveal the “**+**” icon, and click to add those fields. You can also reorder fields by dragging and dropping them into your preferred order.
   * In the **Group** Options, select the statuses to display (e.g., *Started*, *New*, *On My Way*, *Completed*, *Job Closed*) by toggling the eye icons; only selected statuses will appear as columns in your view.
   * You can activate the **Hide** **groups** with no jobs toggle to conceal empty columns, ensuring a streamlined view of active tasks.
   * Then, click **Continue** to proceed to the filters.
8. Now, refine your view by adding filters. You can apply up to three filters to your view. For instance, if you are adding ‘**Scheduled Date Range**’ (choose a condition and date).
9. Click **Save** View, and your Kanban view is complete, presenting jobs in columns by job status. Your new view will appear in the **View Picker** dropdown for easy access.
   <iframe width="650" height="350" src="https://drive.google.com/file/d/1omT10R9AxUwIwJTl-CXbiqguY3bupukR/preview" />

Below is a Kanban view for the **Jobs** module, where the records are arranged into columns, and each job displays a few related information. The jobs are categorized based on different statuses: *Started*, *New Task*, *Completed*, and *Job Closed*. <br />Additionally, you can view fields such as scheduled date, due date, chat, service address, title, contact, and job value for each job. The aggregated revenue from the jobs is displayed at the top of the respective columns.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-7.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=a611d778ff4d2f4b9716cb10c2643e4b" alt="Kanban 7 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-7.png" />

 You can choose to hide the column by clicking the context menu and selecting **Hide**.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-8.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=cf8b3519d27b87623666d98bb7c13de6" alt="Kanban 8 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-8.png" />

## **Working with Kanban Views**

In addition to viewing the record details in an organized manner, you can perform several other operations from the Kanban view. Let us take a look at each of them:

* **Drag and Drop**: You can drag and drop a record from one column to another based on the requirement. For instance, if a customer declines an offer but you want to keep them in the pipeline, you need to drag their job card from **'New' to 'Pending'**. The status updates automatically, and the column’s aggregated revenue adjusts in real-time.
  <iframe width="600" height="275" src="https://drive.google.com/file/d/1jjLgH7BAkg1V1dUJYm85AmfI7alWsPh_/preview" />

<Note>
  **Note**: When you move a card to a status with an associated checklist, Zuper will prompt you to complete the checklist before updating the status.
</Note>

* **Expand and Scroll**: You can expand each status column to view more details or scroll to see all jobs within that stage. You need to click “**Load** **More**” on the column to expand it. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-9.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=4d8750a7f7954553635f65b984e4e420" alt="Kanban 9 Pn" width="857" height="834" data-path="Work_Order_Management/Jobs/Kanban-9.png" />
* **Hide Columns**: You need to click the context menu (three dots) at the top of a column and select **Hide** if you don’t need to see a particular status, helping you declutter your view. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-8.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=cf8b3519d27b87623666d98bb7c13de6" alt="Kanban 8 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-8.png" />
* **View Key Details**: Each job card displays essential information, such as:
  * Job Title
  * Customer Name
  * Scheduled Date
  * Due Date
  * Job Site
  * Job Value
  * Duration (displays how long the job has been in its current status. If the **Track Time in Status** setting is enabled and the job exceeds the estimated duration, the timer turns **red** to indicate a delay)
  * Notes (for adding comments or updates)<br />You can also customize the card details that appear. To know more, see [Customization](https://docs.zuper.co/Work_Order_Management/Jobs/Kanban_View#customizing-a-kanban-view). <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-10.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=cf3b45117eb33f3fc90247089cea80dd" alt="Kanban 10 Pn" width="374" height="214" data-path="Work_Order_Management/Jobs/Kanban-10.png" />
* **View Job Details**: You can click on a job card to view its details directly.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-11.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=2dd7a707b6d895c9d741d800572bf96d" alt="Kanban 11 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-11.png" />

## **Managing Kanban Views**

Given that you can create multiple views, you can also manage and delete views based on your requirements. Managing views would mean that you can customize the Kanban views based on your individual preference. 

### **Customizing a Kanban View**

You can adjust your Kanban view to suit your needs with these steps:

1. Click the **Customize** button at the top of the Kanban View to access the panel. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-12.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=c870cfb3c788514a68e145d6d496586d" alt="Kanban 12 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-12.png" />
2. You can decide whether to display **Job Name** or **Customer Name** as the card’s title. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-13.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=e5abfa2cb1b11172556c8fe365e5af11" alt="Kanban 13 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-13.png" />
3. If you want to show more details, you need to click **Customize** on the card style, then select up to three fields (e.g., Priority, Scheduled Date) to display on each card. You can search for fields, hover over them, and click the **+** icon to add them.
4. You can reorder fields by dragging and dropping them into your preferred order. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-14.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=706a5329906194e0819a287afbb0995a" alt="Kanban 14 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-14.png" />
5. You can use the **eye icon** to toggle which statuses (e.g., New, Started, Completed) appear in your view.
6. You can enable the **Hide groups with no jobs** toggle to remove columns without any jobs, keeping your view clean and focused. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-16.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=65676ca625681c3d74d0c5a1a84daa5a" alt="Kanban 16 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-16.png" />

## **Quick Actions in Kanban View**

You can streamline your workflow with these actions available on the view.

1. **View Picker**: You can switch between your saved Kanban and List Views. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-17.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=5f0fb993c5cbecb1d3d945a532bc00b4" alt="Kanban 17 Pn" width="491" height="692" data-path="Work_Order_Management/Jobs/Kanban-17.png" />
2. **Job Category**: You can view jobs based on job category (e.g., Roofing) to organize your view by specific types of work. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-18.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=7bcbb104ec6cf37a3c3998a165ad8be3" alt="Kanban 18 Pn" width="856" height="566" data-path="Work_Order_Management/Jobs/Kanban-18.png" />
3. **Sort**: You can arrange jobs within columns by fields such as **Work Order Number**, **Job Title**, **Priority**, **Scheduled Date**, **Job Value**, and more, in either ascending or descending order. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-20.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=dc6934ef1050079f6abbe68ef47114c4" alt="Kanban 20 Pn" width="920" height="695" data-path="Work_Order_Management/Jobs/Kanban-20.png" />
4. **Filters**: You can narrow down jobs by criteria like **Scheduled Date Range** or **Job Priority**. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-19.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=d2de992340e1ac890c9435729fe9fdb6" alt="Kanban 19 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-19.png" />
5. **Search**: You need to type keywords in the search bar to quickly find specific jobs.
6. **Customize**: You can access the customization panel to adjust card details, group options, and filters, tailoring the Kanban View to your preferences. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-21.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=6478cd489c2a623a92fdb1636fab4ac5" alt="Kanban 21 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-21.png" />
7. **Context Menu Actions**: You can manage your view with these options:
   * **Rename**: You can update the name of your view for better identification.
   * **Visibility**: You need to adjust who can access the view (e.g., Only Me, Everyone, or Selected Users) to control sharing.
   * **Delete**: You can remove a view you no longer need to keep your workspace tidy. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-22.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=a1928eadbbb06b24b335df7d9120ed6a" alt="Kanban 22 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-22.png" />
8. **Reset View**: You can revert to the default settings by selecting **Reset View** from the context menu, undoing all customizations if desired. <br />You need to confirm the reset to proceed, ensuring no accidental changes. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-23.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=486d42339abcbba1ff3320b55c95f185" alt="Kanban 23 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-23.png" />
9. **Update** or **Save as New**: You need to save changes to the current view or create a new one with your customizations by selecting **Update** or **Save as New** from the context menu. <img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-25.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=2c3a6973a451c51a74ecd6a82fd2d97d" alt="Kanban 25 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-25.png" />

### **Sharing Kanban Views**

Kanban Views are designed for collaboration. When creating or editing a view, you can set its visibility to:

* **Selected Users/Teams**: You need to grant access to specific individuals or teams, with either **View** or **Edit** permissions.
* **Everyone**: You can share it with all users in your company for team-wide access.

This flexibility ensures the right people have access to the right information, whether it’s a manager tracking team progress or a technician focusing on their assigned jobs.

<iframe width="600" height="275" src="https://drive.google.com/file/d/1J1Zg5d_Sak7zenDK-ob8SnYpSa_9hK4F/preview" />

## **FAQs**

**Q: Can I create multiple Kanban Views for different purposes?**

A: Yes, you can create multiple Kanban Views tailored to your needs. For example, you can set up one view to track high-priority jobs and another for monitoring cancelled tasks.

**Q: How do I switch between Kanban and List Views?**

A: You can switch between views using the **View Picker** dropdown at the top of the Job listing page. You need to select either **Kanban** or **List** from the available options to change the display format.

**Q: Can I hide columns that don’t have any jobs?**

A: Yes, you can activate the **Hide groups with no jobs** toggle in the **Customize** panel to conceal empty columns, keeping your view focused on active tasks. You need to save your changes by clicking **Save View** for this to take effect.

**Q: How do I share a Kanban View with my team?**

A: You can set the visibility during the creation or editing process in the **Share View** dialog box. You need to choose **Everyone** for company-wide access or **Selected Users/Teams** to grant specific permissions (e.g., View or Edit).

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-26.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=69ea89c2fd81142355e63eefe07a56ac" alt="Kanban 26 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-26.png" />

**Q: What fields can I display on a job card?**

A: You can customize job cards to display up to three fields, such as **Priority**, **Scheduled Date**, or **Revenue**. You need to click **Customize** in the Card Style section, search for the desired fields, and add them using the **+** icon, then reorder as needed.

**Q: How many filters can I apply to a Kanban View?**

A: You can apply up to three filters, such as **Scheduled Date Range** or **Job Priority**, during the customization process. You need to configure these in the filters section and save your view to apply them.

**Q: What does “Track Time in Status” do on a Kanban card?**

A: The *time counter* appears on the job card in your Kanban view, helping you monitor progress in real-time.

When you enable **“Track Time in Status”** in the *Edit Job Status* settings (under **Job Settings** > particular **Job Category** > specific **Job Status** ) and set an **estimated duration** for that status, the system uses it as a benchmark. Once a job exceeds the defined time limit, the time counter is **highlighted in red**, signaling that it’s overdue.<br />This visual cue helps you and managers quickly identify bottlenecks and take timely action to keep operations on track.

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-27.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=11e0a44ad14e1d29742a6a526661428b" alt="Kanban 27 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/Kanban-27.png" />

<img src="https://mintcdn.com/zuperinc/H4fV2jJ8WOWtjNIG/Work_Order_Management/Jobs/Kanban-29.png?fit=max&auto=format&n=H4fV2jJ8WOWtjNIG&q=85&s=337927aec0ded5ed33f610c893087bb1" alt="Kanban 29 Pn" width="371" height="221" data-path="Work_Order_Management/Jobs/Kanban-29.png" />


## Related topics

- [Overview of Job](/Work_Order_Management/Jobs/Overview_of_jobs.md)
- [Getting started with your Zuper roofing trial](/Zuper_for_Roofing/Getting-started-with-your-Zuper-roofing-trial.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.