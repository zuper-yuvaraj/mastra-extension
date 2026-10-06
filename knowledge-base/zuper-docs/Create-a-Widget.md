---
title: "Create a Widget"
source: https://docs.zuper.co/Create-a-Widget.md
fetched_at: 2026-10-06T13:30:44.644Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a Widget

Creating a widget takes only a few minutes. Start by choosing the widget type that best matches your customer journey: **instant estimate**, **online booking**, **estimate & book**, or **lead capture**, and then configure how submissions should be handled in Zuper.

Every new widget begins in **Draft** status. You can complete the setup, test the experience, and make changes without exposing it to homeowners until you're ready to activate it.

## Create a new widget

1. Go to **Settings** from the left navigation menu.
2. Under **Customer Experience**, select **Website Widget**.
3. Select **+ New Widget** at the top right.
4. Enter a **Widget** **Name**. This name is for internal reference and isn't shown to homeowners. Zuper also uses the widget name as a tag to help identify and manage submissions created through the widget.
5. Optionally, add a **Description** for your team's reference.
6. Select a **Widget** **Type**: *Online Booking, Instant Estimate, Estimate & Book, or Lead Capture*.
7. Turn on **Create a Job** if you want Zuper to automatically create a job for every submission. When enabled, a **Job Category** field appears, allowing you to select the category assigned to those jobs.
   Leave this setting turned off if you prefer to review submissions before creating jobs manually.
8. Select **Next**. Zuper saves the widget as a draft and opens the next step, Appearance.

<Frame>
  <img src="https://mintcdn.com/zuperinc/flqFOakcrzRP6Z1Y/images/SCR-20260901-pqxj.png?fit=max&auto=format&n=flqFOakcrzRP6Z1Y&q=85&s=b219b0abdddd54ad566a8d10010f016e" alt="SCR 20260901 Pqxj" width="2882" height="1748" data-path="images/SCR-20260901-pqxj.png" />
</Frame>

## What's next

Continue through the setup to configure the experience for homeowners. The remaining steps depend on the widget type and may include appearance, questions, roofing options/service, and other settings.

Choose the setup guide for your widget:

<CardGroup cols={2}>
  <Card title="Online Booking" href="/Setting-up-Online-Booking-Widget">
    Let homeowners choose a service and book directly.
  </Card>

  <Card title="Instant Estimate" href="/Zuper_for_Roofing/Website_Widget/Instant_Estimate">
    Show or share pricing options before a homeowner calls.
  </Card>

  <Card title="Estimate & Book" href="/Zuper_for_Roofing/Estimate_and_Book_widget">
    Combine a price estimate with scheduling a visit.
  </Card>

  <Card title="Lead Capture" href="/Zuper_for_Roofing/Setting-up-Lead-Capture-widget">
    Collect project details for your team to follow up.
  </Card>
</CardGroup>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="How many widgets can I create?">
    You can create up to **20 widgets**. Each widget is independent, with its own type, branding, questions, and settings, allowing you to tailor widgets for different customer journeys and campaigns.
  </Accordion>

  <Accordion title="Should I turn on Create a Job?">
    Turn it on if you want every submission to become a job automatically, ready for your team to schedule without an extra step. Leave it off if you'd rather review each submission first, for example, to confirm scope or filter out low-quality leads, before it becomes a job.

    <Note>
      **Note**: For Estimate & Book widgets, Zuper creates a job once a homeowner books a visit, regardless of this setting.
    </Note>
  </Accordion>

  <Accordion title="Will Zuper create a contact and property from a submission?">
    Yes. When a homeowner submits a response, Zuper checks your account for a matching contact and property. If a match already exists, Zuper links the submission to those existing records instead of creating duplicates. If no match exists, Zuper creates a new contact and property as a lead intake.
  </Accordion>
</AccordionGroup>


## Related topics

- [Overview](/Zuper_for_Roofing/Website_widget.md)
- [Sharing and embedding your widget](/Zuper_for_Roofing/Sharing-and-embedding-widget.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.