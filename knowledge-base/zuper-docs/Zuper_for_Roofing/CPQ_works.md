---
title: "How Zuper CPQ Works"
source: https://docs.zuper.co/Zuper_for_Roofing/CPQ_works.md
fetched_at: 2026-10-06T13:30:40.966Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# How Zuper CPQ Works

> Turning your pricing logic into intelligent, automated proposals.

Zuper CPQ takes the complexity out of quoting by connecting your products, pricing, and job details into one smart workflow.\
It’s designed to think the way your business thinks; calculating, comparing, and presenting options automatically, so your sales team can focus on closing deals, not crunching numbers.

Let’s take a closer look at how it all comes together.

## The CPQ Flow briefly

Every CPQ process inside Zuper follows a clear flow: **Configure → 2. Price → 3. Quote**

Each step builds on the previous one to deliver consistent, accurate proposals every time.

### 1. Configure: Building the Framework

Configuration is where everything begins.\
You decide what options for your sales reps will be available to choose from: materials, labor, service bundles, or package tiers.

In Zuper, configuration happens through **Proposal Templates**.\
Each template defines what products or services are available for a specific job type (like roofing, HVAC, or solar).

Your configuration includes:

* **Packages:** Create tiered options like *Good / Better / Best* or *Option 1 / 2 / 3.*
* **Items:** Add individual **Materials**, **Services**, or **Bundles.**
* **Formulas:** Tell Zuper how to calculate quantities automatically (for example, “@Roof\_Area \* 1.1”).
* **Conditional Rules:** Define smart triggers that decide when items should be added, removed, or adjusted.

Once you configure it once, your setup becomes a reusable quoting engine that ensures consistent, logic-driven proposals every time. 

### 2. Price: Applying Logic and Formulas

Once your configuration is set, Zuper takes over the heavy lifting of pricing.\
It automatically pulls data from job fields, measurements, or inspection inputs and runs them through your **Formula Library**.

Here’s how pricing works under the hood:

* **Data Inputs:**\
  Zuper reads real-world values (like roof area, slope, or waste percentage) from your job or inspection forms.
* **Formula Execution:**\
  Your formulas calculate quantities and totals in real time.\
  Instantly, the system knows exactly how many bundles, rolls, or labor hours are needed.
* **Condition Rule:**\
  Your rule will determine when that item should appear, be hidden, replaced, removed, or have its markup adjusted automatically based on job data.

This automation ensures that every proposal, regardless of who creates it, adheres to the same pricing standards and logic.

### 3. Quote: Presenting to the Customer

Once configuration and pricing are complete, Zuper automatically builds a ready-to-send proposal.

Your sales representative or field officer can walk the customer through these options, explain the differences, and help them choose the one that best fits their needs.\
With just one click, the proposal can be created or shared with confidence that every calculation and rule is correct.


## Related topics

- [FieldNation](/Integrations/Workforce_and_Time_Tracking/FieldNation.md)
- [Zapier ](/Integrations/Work_Flow_Automation/Zapier.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.