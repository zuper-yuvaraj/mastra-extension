---
title: "Setting up an Online Booking widget"
source: https://docs.zuper.co/Setting-up-Online-Booking-Widget.md
fetched_at: 2026-10-06T13:30:44.913Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setting up an Online Booking widget

Let homeowners browse your services and book appointments directly on your website. Zuper shows available booking services based on the settings you configure, and each booking flows into Zuper as a scheduled job, helping your business grow 24/7.

An **Online Booking** widget turns your website into a self-service scheduling page. You decide which services homeowners can book, what information they provide, when appointments are available, and whether they can choose a technician. Zuper uses those settings to show the right booking services and creates the job when a homeowner books.

You can also share the booking experience through a public link, QR code, or embed it on your website, giving homeowners a way to schedule work without calling or emailing your team.<br />

<img src="https://mintcdn.com/zuperinc/3AYCS7eyL1b9HL8j/images/SCR-20260901-opsr.png?fit=max&auto=format&n=3AYCS7eyL1b9HL8j&q=85&s=ded2fbedea86cbbb80b0d3593f78c4c3" alt="SCR 20260901 Opsr" width="2814" height="1630" data-path="images/SCR-20260901-opsr.png" />

This article walks you through the four steps for setting up an Online Booking widget: **Appearance**, **Manage Questions**, **Service Configuration**, and **Advanced Settings**.

## Before you begin

Before you start, decide:

* Which roofing services you want homeowners to book online.
* How long each service usually takes.
* Whether homeowners should choose an exact time or only a date.
* Whether homeowners should be able to choose a technician.
* Which teams should be available for online bookings.

<Note>
  **Note:** For this widget, **Create a Job** is enabled by default. When a customer completes a booking, Zuper automatically creates a job with the booking details.
</Note>

## Step-1: Design the homeowner experience

The Appearance step controls how the booking widget looks on your website. The preview updates as you make changes, so you can see the experience homeowners will have.

1. Enter a **Welcome Message**. This appears at the top of the widget. Use a message that tells homeowners what they can do, such as Book Your Roofing Service!
2. Choose a **Brand Color**. This color is applied to the widget's buttons. Select a preset color or use the multicolor swatch to choose a custom color.
3. Choose a **Button Shape**: *Rounded*, *Pill*, or *Rectangle*.
4. Choose a **Button Text Color**: *Light* or *Dark*. Select the option that provides enough contrast with your brand color.
5. Select **Next** to continue to Manage Questions.<br />
   <Frame>
     <img src="https://mintcdn.com/zuperinc/R3mmikcFy31PJ6RR/images/apperancewidget.png?fit=max&auto=format&n=R3mmikcFy31PJ6RR&q=85&s=16ee5475a7c456c7c87d84bd215bd74b" alt="Apperancewidget" width="3318" height="1856" data-path="images/apperancewidget.png" />
   </Frame>

## Step-2: Decide what information to collect

Before a homeowner can book, you need to collect the information your team needs to work with the request.

Online Booking widgets include two default questions:

* **Property Address**
* **Contact Information**

You can rename these questions by selecting the pencil <Icon icon="pencil" /> icon, but you can't delete them.

### Add custom questions

Add questions when you need more information about the homeowner's request. For example, you might ask whether the homeowner needs an *inspection*, *repair*, or *replacement*.<br />

<img src="https://mintcdn.com/zuperinc/TauGlYfBQfc2loym/images/addcustom.png?fit=max&auto=format&n=TauGlYfBQfc2loym&q=85&s=f37ed27538133c2a270942896ad866df" alt="Addcustom" width="2022" height="1022" data-path="images/addcustom.png" />

1. Select **+ Add custom question**.
2. Select a question type:
   * **Short Answer**
   * **Long Answer**
   * **Single Choice**
   * **Multiple Choice**
   * **Dropdown**
   * **Date**
3. Select the pencil <Icon icon="pencil-alt" /> icon next to **Untitled question** and enter your question.
4. For **Single Choice**, **Multiple Choice**, and **Dropdown**, add at least two answer options.

You can manage each question using the controls on its question card:

* **Change type**: Switch the question to another question type.
* **Duplicate**: Create a copy of the question, including its answer options.
* **Required**: Require the homeowner to answer the question before they can continue.
* **Update Field**: Save the homeowner's response to a Contact or Job custom field.
* **Dependent Field**: Show the question only when the homeowner selects a specific answer to another Single Choice, Multiple Choice, or Dropdown question.
* **Delete**: Remove a custom question.<br />
  <Frame>
    <img src="https://mintcdn.com/zuperinc/8EjhxJbaT_Wu9UNw/images/manageservice.png?fit=max&auto=format&n=8EjhxJbaT_Wu9UNw&q=85&s=cac7985fcf57708987c284ec7764f3dd" alt="Manageservice" width="3256" height="1872" data-path="images/manageservice.png" />
  </Frame>

<Tip>
  **Tip**: Drag a question using its handle to change the order in which homeowners see it.<br />

  <Frame>
    <img src="https://mintcdn.com/zuperinc/djQgjwlRvro3P0IR/images/reordingwidget.png?fit=max&auto=format&n=djQgjwlRvro3P0IR&q=85&s=6bf03b34ab25fe446117c91f83f3fedb" alt="Reordingwidget" width="3420" height="2214" data-path="images/reordingwidget.png" />
  </Frame>
</Tip>

5. Select **Next** to continue to Service Configuration.

## Step-3: Decide what homeowners can book

The Service Configuration step defines what appears on your booking page. Each service becomes a card that homeowners can browse, with its own description, image, price, duration, and scheduling rules.

Sample services may be available to help you get started, such as *Roof Inspection*, *Roof Repair & Replacement*, and *Emergency Tarping*. Replace these with the services your business actually offers before activating the widget.

### Add or edit a service

Select the pencil icon on an existing service to edit it, or select **+ Add a new service** to create one.

**Add service details**

Configure the information homeowners see when they browse your services:

* **Service Image**: Upload an image for the service card.
* **Service Name**: Enter the name of the service. This field is required.
* **Service Description**: Explain what the service includes so homeowners can choose the right service.
* **Starting At**: Enter the starting price to display for the service. Leave this blank if you don't want to show a price.
* **Job Category**: Select the job category to use when Zuper creates a job from a booking. This field is required.<br /> <img src="https://mintcdn.com/zuperinc/Hpo5rCrKeRVbPNbM/images/service-details-widget.png?fit=max&auto=format&n=Hpo5rCrKeRVbPNbM&q=85&s=14cc6b9ef84e4d5b4b4ae609d85736af" alt="Service Details Widget" title="Service Details Widget" width="3244" height="1742" data-path="images/service-details-widget.png" />

### Set the appointment duration and buffer

The duration you configure determines how much time a homeowner books on your calendar.

1. Set the **Slot Duration**. Zuper pre-fills this based on the selected job category. Change it if the service takes more or less time than the default.
2. Set the **Buffer Time**:
   * **No buffer**: Allows appointments to be scheduled back-to-back.
   * **Fixed buffer time**: Adds a set amount of time between appointments, such as 30 minutes or 1 hour. This gives your team time between appointments.

### Control when homeowners can book

Use Booking Constraints to control how far in advance homeowners can make appointments.

* **Minimum Lead Time**: Prevents bookings within a specified period from the current time. For example, a 24-hour lead time prevents same-day bookings.
* **Maximum Booking Window**: Limits how far into the future homeowners can book. For example, a 60-day window allows bookings only within the next 60 days.

<Info>
  Set either value to **0** to remove the restriction.
</Info>

<Frame>
  <img src="https://mintcdn.com/zuperinc/lqrjEQnUNwL1eOC3/images/widgetscheduling.png?fit=max&auto=format&n=lqrjEQnUNwL1eOC3&q=85&s=760e03c0c99451f0dcd59f3a7307286a" alt="Widgetscheduling" width="3212" height="1848" data-path="images/widgetscheduling.png" />
</Frame>

### Choose how homeowners select an appointment

Under Customer Booking Preference, decide how much control homeowners have over scheduling.

<Tabs>
  <Tab title="Customer picks a date & time slot">
    Choose this option when you want homeowners to select a specific appointment time. You can also let them choose a technician.

    Set *Time Slot Availability* to decide how Zuper determines the time slots homeowners can book.

    <AccordionGroup>
      <Accordion title="Choose from available time slots" icon="times-to-slot" iconType="regular">
        Use your teams' actual calendars to show homeowners when your technicians are available.

        <Tip>
          Best for: Businesses that want online bookings to follow their team's current schedule.
        </Tip>

        * Choose whether homeowners can select a technician. Turn on **Allow customers to choose a specific technician for their appointment** to let homeowners see available technicians with their name, role, and open time slots. Leave it off to let Zuper assign the technician automatically.
        * Set **Assignment**. Select the teams whose calendars Zuper should use to determine availability. You must select at least one team. You can select multiple teams, and bookings can draw from technicians across all selected teams.
        * Set your **weekly availability**. Turn on each day when you accept bookings for this service, then set the start and end time for that day. Leave a day turned off to show it as **Closed**. Zuper offers time slots only within these hours and when the assigned teams have availability.

        <Frame>
          <img src="https://mintcdn.com/zuperinc/Wt3Kk-obIkTROGb6/images/Customerbookflow.png?fit=max&auto=format&n=Wt3Kk-obIkTROGb6&q=85&s=0da5b9004fe1b2468fc570e4d61ba295" alt="Customerbookflow" width="3412" height="1973" data-path="images/Customerbookflow.png" />
        </Frame>
      </Accordion>

      <Accordion title="Define your preferred time slots" icon="calendar-alt" iconType="regular">
        Create fixed booking windows instead of using your teams' calendars.

        <Tip>
          Best for: Businesses that want to control exactly when homeowners can request appointments, regardless of individual technician calendars.
        </Tip>

        1. Select **+ Add time slot**.
        2. Set the **From** and **To** times for the booking window.
        3. Optionally set **Max Slots** to limit the number of bookings allowed during that time range.
        4. Select the days when the time slot should be available.

        Add additional time slots when you need different booking windows for different days or booking limits. Select the **trash** icon to remove a time slot.

        <Frame>
          <img src="https://mintcdn.com/zuperinc/Wt3Kk-obIkTROGb6/images/SCR-20260901-pghm.png?fit=max&auto=format&n=Wt3Kk-obIkTROGb6&q=85&s=e645a20a94b91e10db8922a0308efb81" alt="SCR 20260901 Pghm" width="3292" height="1852" data-path="images/SCR-20260901-pghm.png" />
        </Frame>
      </Accordion>
    </AccordionGroup>
  </Tab>

  <Tab title="Customer picks a date">
    Choose this option when you want homeowners to request a day, but want your team to decide the exact appointment time and technician afterwards.

    Set your **weekly availability** to define when homeowners can request this service. Turn on each day when you accept bookings, then set the start and end time for that day. Leave a day turned off to show it as **Closed**.

    This option doesn't show time slots or technician selection because homeowners choose only a date. Your team schedules the exact time and assigns the technician after the booking is submitted.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/flqFOakcrzRP6Z1Y/images/SCR-20260901-pfes.png?fit=max&auto=format&n=flqFOakcrzRP6Z1Y&q=85&s=1be74c7ccc110f7f27a899ca4453484a" alt="SCR 20260901 Pfes" width="3222" height="1854" data-path="images/SCR-20260901-pfes.png" />
    </Frame>
  </Tab>
</Tabs>

Select **Save Service** to save the service.

### Manage your services

After adding your services, you can manage them from the service list.

* <Icon icon="toggle-off" /> Turn off  a service to temporarily remove it from the booking widget. Existing bookings aren't affected.
* <Icon icon="grip-dots-vertical" /> Drag  a service using its handle to change the order in which homeowners see it.
* <Icon icon="pencil-alt" /> Select the pencil  icon to edit a service.<br />
  <Frame>
    <img src="https://mintcdn.com/zuperinc/3AYCS7eyL1b9HL8j/images/SCR-20260901-pemi.png?fit=max&auto=format&n=3AYCS7eyL1b9HL8j&q=85&s=e9462d961832bb69cff695a8b7a2bb8e" alt="SCR 20260901 Pemi" width="3380" height="1862" data-path="images/SCR-20260901-pemi.png" />
  </Frame>

## Step-4: Decide what happens around the booking

Use **Advanced Settings** to control customer consent, booking policies, notifications, and the contact information homeowners see.

<AccordionGroup>
  <Accordion title="Messaging preferences">
    **Text Message Opt-In** adds a consent checkbox to the contact step. Enter the message you want homeowners to see with the checkbox. Selecting the checkbox isn't required to complete a booking. It records whether the homeowner has opted in to receive text messages.

    <Info>
      The text editor supports **bold**, *italic*, and <u>underline</u> formatting, as well as links.
    </Info>

    **Out of Service Territory Message** lets you display a custom message when a homeowner enters an address outside your service area.
  </Accordion>

  <Accordion title="Booking policy">
    Turn on **Booking Policy** to display your booking policy during the booking process. You can use this for cancellation terms, deposit requirements, arrival windows, or other booking conditions.
  </Accordion>

  <Accordion title="Customer notifications">
    Choose how homeowners receive confirmation after they book:

    * **Text Message**: Sends a booking confirmation by SMS.
    * **Email**: Sends booking information by email.
  </Accordion>

  <Accordion title="Contact details">
    Enter the team member's **name**, **phone number**, and **email address** that you want homeowners to see.
  </Accordion>
</AccordionGroup>

<Frame>
  <img src="https://mintcdn.com/zuperinc/vfyccn4ejOFoKIpn/images/Advance-Settings.png?fit=max&auto=format&n=vfyccn4ejOFoKIpn&q=85&s=acff07ba32cea86af199bf581856d8a0" alt="Advance Settings" width="3394" height="1956" data-path="images/Advance-Settings.png" />
</Frame>

## Activate your widget

Once you've configured the booking experience, review it from the live preview before making it available to homeowners.

1. Review your settings across all four steps.
2. Check the live preview to make sure the booking experience looks and works as expected.
3. Select **Activate**.

After activation, Zuper generates a **public** link, **QR code**, and **embed** **code**. You can use these to add the booking experience to your website or share it directly with homeowners. See [Sharing and embedding your widget](/Zuper_for_Roofing/Sharing-and-embedding-widget).<br />

<Frame>
  <img src="https://mintcdn.com/zuperinc/flqFOakcrzRP6Z1Y/images/SCR-20260901-oxwh.png?fit=max&auto=format&n=flqFOakcrzRP6Z1Y&q=85&s=ae4e616b7db21ab74feb60bc1c359285" alt="SCR 20260901 Oxwh" width="3256" height="1892" data-path="images/SCR-20260901-oxwh.png" />
</Frame>

## What happens after a homeowner books?

When a homeowner completes a booking, Zuper automatically creates a job using the service and job category configured for the widget.

The booking is scheduled according to the homeowner's selected date and time, or according to the scheduling rules you've configured when the homeowner selects only a date.

The job then appears in Zuper for your team to manage, assign, and follow through your normal workflow.

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can homeowners book outside my working hours?">
    Homeowners can open the widget at any time, but they can only select dates and times that meet the availability and booking rules configured for the service.
  </Accordion>

  <Accordion title="Can I temporarily stop taking bookings for one service?">
    Yes. Turn off the service from the service list. The service is removed from the widget, while existing bookings remain unaffected.
  </Accordion>

  <Accordion title="Do homeowners see prices on an Online Booking widget?">
    If you enter a **Starting At** price for a service, the price is displayed on the service card. Leave the field blank if you don't want to display a price.
  </Accordion>

  <Accordion title="What happens if a homeowner's address is outside my service area?">
    If you configure an **Out of Service Territory Message**, the homeowner sees your custom message when their address is outside your service area.
  </Accordion>

  <Accordion title="Can I let homeowners choose their technician?">
    Yes. When **Customer picks a date & time slot** is selected, turn on **Allow customers to choose a specific technician for their appointment**. Homeowners can then choose from the technicians available for the selected appointment.
  </Accordion>
</AccordionGroup>


## Related topics

- [Setting up an Estimate and Book widget](/Zuper_for_Roofing/Estimate_and_Book_widget.md)
- [Sharing and embedding your widget](/Zuper_for_Roofing/Sharing-and-embedding-widget.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.