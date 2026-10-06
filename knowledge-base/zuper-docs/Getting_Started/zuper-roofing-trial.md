---
title: "Zuper for Roofing Trial Walkthrough"
source: https://docs.zuper.co/Getting_Started/zuper-roofing-trial.md
fetched_at: 2026-10-06T13:29:33.463Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Zuper for Roofing Trial Walkthrough

This guide takes you through a typical roofing job — lead to payment — so you can see exactly how Zuper would fit into your current process. You need the Zuper web app and the Zuper mobile app. Expect about 15–30 minutes to complete the full flow.

If you have not logged in to the Web app yet, this short video will walk you through the process.

<iframe src="https://www.loom.com/embed/972a414b8f8d42adb5e2dc3f915bf21c" title="Loom video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

***

## Before you start

When setting up your test customer, use your own email address as the customer's email. This lets you receive the same notifications your customers would — inspection confirmations, proposals, invoices, and updates — so you can see the full customer experience alongside the back-office view.

<Info>
  **Mobile app — trial outside sales login**

  * **Email:** Your email ID.
  * **Password:** \<your company login name>@123

  In place of \<your company login name>, use the company login name shared in the welcome email. You can use this pre-built login or create your own outside sales user in the account.

  **John's role in this trial:** Outside sales — handles inspections and proposals on site. This persona can also be used to view the production lifecycle from the field.
</Info>

***

## Step 1: Qualifying the lead

<Frame>
  **Where:** Web app · **Time:** 2–5 min
</Frame>

Watch the video walkthrough or follow the step-by-step guide below:

<iframe src="https://www.loom.com/embed/1f6500fb49c94de08ec4bdf0ddbea38f" title="Loom video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

**<u>Create the test customer</u>**

<Steps>
  <Step title="Go to Customers">
    In the sidebar, go to **Customers** → **Add New Customer**.
  </Step>

  <Step title="Enter customer details">
    Enter the customer name and your email address — this is your test customer for the trial.
  </Step>

  <Step title="Add an address">
    Add any address using **Pick from a Map**. Choose something local to you.
  </Step>

  <Step title="Save">
    Select **Save**.
  </Step>
</Steps>

**<u>Find the auto-created job</u>**

A **Lead Qualification** job is created the moment you save a new customer. Watch for workflow activity at the bottom right — it might take up to 45 seconds.

<Tip>
  The fastest way to see updates is to refresh your browser, or swipe down to refresh on the mobile app.
</Tip>

**<u>Find the job in the pipeline</u>**

<Steps>
  <Step title="Go to Jobs">
    Go to **Jobs** in the sidebar.
  </Step>

  <Step title="Select the Prospects pipeline">
    Select the **Prospects** pipeline at the top left. This switches to Kanban view, filtered by leads only.
  </Step>

  <Step title="Locate your job">
    Your job appears in the **Prospects / Lead** pipeline, ready to advance.
  </Step>
</Steps>

**<u>Run the qualification</u>**

<Steps>
  <Step title="Drag the pipeline card">
    Drag the pipeline card for your lead and drop it into **Qualifying** on the Kanban board.
  </Step>

  <Step title="Complete the intake form">
    Work through the lead intake form — communication preferences, what the customer is looking for. These are all customizable fields you can configure in the back end.
  </Step>

  <Step title="Confirm the lead">
    When asked **"Is this a genuine lead?"**, select **Yes** and submit.
  </Step>
</Steps>

The lead advances into a qualified opportunity. Go to the **Opportunities / Inspections** pipeline — your job now appears in the **New-Inspection** stage. Open it by selecting the arrow at the top left of the pipeline card.

<Check>
  **What just happened:** The job moved from Lead to Inspection automatically, with the status updated at each step. The job is now ready to be booked as an inspection appointment.
</Check>

***

## Step 2: Running the inspection

<Frame>
  **Where:** Web app + mobile app · **Time:** 5–10 min
</Frame>

Follow the step-by-step guide below, or watch the video walkthrough instead.

<iframe src="https://www.loom.com/embed/1b92d414c0a84467879c0cf862761ec5" title="Loom video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

**<u>Schedule and assign a salesperson</u>**

<Steps>
  <Step title="Assign a user">
    At the top right of the job, select **+** under **Users/Teams Assigned** to assign the pre-built **John Wayne** mobile app user.
  </Step>

  <Step title="Schedule the inspection">
    Select the **Schedule** calendar icon at the top left, under the job title. Schedule for right now.
  </Step>

  <Step title="Enter measurements">
    Go to the **Measurements** tab on the left side and manually enter measurements.

    <Note>
      Measurements populate automatically once you integrate your measurement provider. You can also upload a measurement file instead of entering values manually. Intelligent quoting relies on measurements to calculate — if you do not enter them, the proposal will not populate.
    </Note>
  </Step>
</Steps>

**<u>Switch to the mobile app</u>**

<Steps>
  <Step title="Log in">
    Log in as your assigned salesperson.
  </Step>

  <Step title="Open the job">
    Open the job on the dashboard.
  </Step>

  <Step title="Update status to On My Way">
    Update the status to **On My Way** — this starts the travel timer and sends the customer a live-tracking notification.

    <Tip>
      An automated email goes to the customer email you entered. Open it and select the link to see live tracking of John Wayne en route to the inspection appointment.
    </Tip>
  </Step>
</Steps>

**<u>Arrive on site</u>**

Update the status to **Arrived On-Site**. Travel time stops. Update again to **Inspection Report** to begin the inspection.

***

**<u>Insurance claim — two paths to explore</u>**

This is a good point to try both flows. Each follows a different process in Zuper.

<Tabs>
  <Tab title="No — Standard quote flow">
    Select **No** to proceed with a standard proposal. The system moves into intelligent quoting and generates a **Good, Better, Best** proposal from your inspection findings. Follow the remaining steps in this phase.
  </Tab>

  <Tab title="Yes — Insurance claim flow">
    Select **Yes** to follow the claim process. The job category updates to **Claim** and a different process flow begins. You capture claim data in the claim inspection checklist, which automatically updates the job with those details.
  </Tab>
</Tabs>

<Note>
  We suggest selecting **No** first, then returning to explore the Claim flow later.
</Note>

***

**<u>Fill out the inspection checklist</u>**

Work through all items and upload photos. Your responses directly drive what appears in the proposal — Zuper uses the checklist to build the quote automatically using intelligent quoting.

Two fields are pre-configured to demonstrate this in the trial:

* **Ventilation:** Select **Box Vents** — this is enough to include it in the proposal.
* **Roof penetrations:** Select **Pipe Boots** — mark the condition as **Failed** and enter the quantity to include them.

This shows how different checklist responses control what does and does not appear in the quote.

***

**<u>Generate and send the proposal</u>**

<Steps>
  <Step title="Submit and update status">
    Submit the checklist and update the status to **Create Proposal**.
  </Step>

  <Step title="Choose a template">
    Choose a proposal template and select **Create Proposal**.
  </Step>

  <Step title="Find the quote on mobile">
    In the mobile app, go to the **Associated** tab. Swipe down to refresh — the quote is built and waiting toward the bottom.
  </Step>

  <Step title="Add a cover image">
    Select the quote, then choose a proposal cover image from the job gallery or your device.
  </Step>

  <Step title="Send to customer">
    Select **Send** to email it to your customer.
  </Step>

  <Step title="Review from email">
    Go to your email, open the notification, review the quote, sign off on an option, and select color choices and any optional add-on products.
  </Step>
</Steps>

***

**<u>Present on the mobile app (optional)</u>**

Select **Present** to walk through the proposal on your device. The good/better/best options, color picker, add-ons, and the inspection items you flagged — pipe boots and vents — are all reflected here.

**<u>Customer accepts and signs — deposit collected</u>**

Sign off on the proposal from the email or on the mobile app. When **Zuper Pay** is enabled, a deposit is collected automatically at the point of signature.

**<u>Approve the accepted quote — web app</u>**

Back on the web app, the quote status updates to **Accepted** and the job updates to **Won** automatically. Update the status to **Approved**.

<Note>
  This is an intentional manual step — it gives your team a chance to review before anything goes into production.
</Note>

<Check>
  **What just happened:** The quote line items were added to the job automatically. The job has moved into the Production pipeline — schedule and assignment cleared, ready for the crew.
</Check>

***

## Step 3: Managing production

<Frame>
  **Where:** Web app + mobile app · **Time:** 5–10 min
</Frame>

Watch the video walkthrough or follow the written guide below:

<iframe src="https://www.loom.com/embed/1e27026dabdc4d338fa1c261b1a0aa68" title="Loom video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

***

**<u>Manage production</u>**

The inspection job automatically updates to **Production** with a status of **New-Production**. Update the status to **Pre-Production** from the web app.

**Purchase order created**

A purchase order (PO) is generated automatically from the accepted quote line items when the job enters **New-Production** status. The PO starts in draft.

<Steps>
  <Step title="Open Purchase Orders">
    In the right-hand sidebar, select **Purchase Orders**.
  </Step>

  <Step title="Review the PO">
    Review the PO, then select **Send to Vendor**.
  </Step>

  <Step title="Choose a template and send">
    Choose the standard PO template and send.
  </Step>
</Steps>

***

**<u>Receive materials</u>**

Once materials arrive, mark quantities received in the purchase order.

<Note>
  An "Accept All" one-click option is coming soon to streamline materials receipt.
</Note>

**<u>Assign crew and schedule</u>**

<Steps>
  <Step title="Assign the production team">
    In the upper-right **Users/Teams Assigned** section, select **+** to assign the production team.
  </Step>

  <Step title="Set the schedule">
    Select the **Schedule** calendar icon at the top left of the job to set the date and time. The customer receives a notification to confirm the schedule.

    <Note>
      Scheduling can also be done from the calendar or dispatch board. Follow these steps manually here to complete the flow.
    </Note>
  </Step>
</Steps>

***

**<u>On site — update statuses via mobile app</u>**

<Steps>
  <Step title="Confirm the schedule">
    Update the status to **Schedule Confirmed**.
  </Step>

  <Step title="Update job statuses on mobile">
    In the mobile app — make sure John Wayne is still assigned to the production job — update the job status through each stage:

    * **On My Way**
    * **Arrived**
    * **Site Preparation** (complete checklist)
    * **Roof Installation**

    Each status change is timestamped and logged for reporting, event logs, and activity tracking.
  </Step>
</Steps>

***

**<u>Complete tasks in order</u>**

Tasks must be completed sequentially. Select each task on the mobile app to reveal its checklist, complete it, then mark it as completed.

<Note>
  Tasks can be configured for parallel execution if sequential completion is not required.
</Note>

**<u>Change order — if scope changes on site</u>**

<Steps>
  <Step title="Update status to Change Order">
    Update the status to **Change Order** in the checklist.
  </Step>

  <Step title="Select item and enter quantity">
    Select the item needed, then enter the quantity in the respective field — for example, eight additional pieces of decking.
  </Step>
</Steps>

This triggers a change order proposal, pre-selected in intelligent quoting with the correct change order template. It is sent to the customer, signed electronically, and the new line items are added to the job automatically upon acceptance. No separate job or manual update is needed.

***

**<u>Complete the job</u>**

<Steps>
  <Step title="Update status to Job Complete">
    Update the job status to **Job Complete**.
  </Step>

  <Step title="Add completion photos">
    Add completion photos in the checklist.
  </Step>

  <Step title="Log unused materials">
    Log any unused materials — Zuper either returns them to inventory or generates a Return Material Authorization (RMA) for the supplier automatically.
  </Step>
</Steps>

***

**Multiple production phases — for example, gutters or siding**

If the job requires further production work after roofing, Zuper handles this within the same job — no new job needed. At the **Closed** status, a checklist prompts the team to select the next production category. The job cycles into that phase automatically, with the schedule and assignment cleared for the next crew. This continues until all production work is complete.

<Note>
  Multi-category production is not configured in this trial account.
</Note>

***

**Customer signs off on site**

The customer signs the completion form and rates the job using the three-tier feedback system.

<Check>
  **What just happened:** The production job is complete. Zuper moves it into the Revenue pipeline automatically and generates the invoice.
</Check>

***

## Step 4: Invoicing and payment

<Frame>
  **Where:** Web app · **Time:** 2–5 min
</Frame>

Follow the step-by-step guide below, or watch the video walkthrough instead:

<iframe src="https://www.loom.com/embed/966b59b5e8c6490c968fb7020fb4ff95" title="Loom video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

***

**<u>Invoice generated from production</u>**

The invoice includes everything from the original quote plus any approved change orders. It starts in draft.

**<u>Review and send</u>**

<Steps>
  <Step title="Open the invoice">
    In the right-hand sidebar, select the invoice under **Invoices**.
  </Step>

  <Step title="Send to customer">
    Review it, then select **Send**. The customer receives an email with the invoice and can pay directly from there.
  </Step>
</Steps>

***

**<u>Record payment</u>**

Once paid, Zuper automatically records the transaction based on the selected payment method. The job status updates to **Paid in Full** automatically. Partial payments and overdue invoice statuses are tracked and updated the same way.

***

## What Zuper handled automatically in this walkthrough

| Trigger | Automatic action |
| - | - |
| New customer saved | Job created |
| Lead qualified | Job moved to Inspection |
| Proposal accepted and signed | Deposit collected |
| Quote accepted in production | Purchase order built |
| Change order accepted | Items added to job |
| Job completed | Invoice generated and job moved to Revenue |


## Related topics

- [Getting started with your Zuper roofing trial](/Zuper_for_Roofing/Getting-started-with-your-Zuper-roofing-trial.md)
- [Record a Walkthrough Video on a Checklist & Inspection Form](/Zuper_AI/Record-a-Walkthrough-Video-on-a-Checklist.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.