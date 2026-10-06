---
title: "Setting up an Instant Estimate Widget"
source: https://docs.zuper.co/Zuper_for_Roofing/Website_Widget/Instant_Estimate.md
fetched_at: 2026-10-06T13:30:45.274Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Setting up an Instant Estimate Widget

<Frame>
  Navigation: **Settings → Website Widget → Instant Estimate → + New Widget**
</Frame>

Give homeowners a roof price before they pick up the phone - and give your team a qualified lead when they do. 

An **Instant Estimate** widget lets homeowners enter their property address, answer a few questions, and see roofing services with pricing based on the rules you configure. Zuper uses the property's roof information and your pricing setup to calculate the estimate, while you decide what homeowners see, which options are available, and how much information you want to collect. 

The result is more than a price on a webpage. A homeowner can understand their options and submit their details when they're ready, while your team gets the lead in Zuper instead of waiting for a form submission or phone call. <br />

<img src="https://mintcdn.com/zuperinc/3AYCS7eyL1b9HL8j/images/SCR-20260902-mgcd.png?fit=max&auto=format&n=3AYCS7eyL1b9HL8j&q=85&s=1dd1ec098698d301cc81bfd3ff2f4f5b" alt="SCR 20260902 Mgcd" width="3390" height="1756" data-path="images/SCR-20260902-mgcd.png" />

You can share the same widget on your **website**, through a **public link**, or with a **QR code**, so homeowners can reach for an estimate wherever they find your business. 

## Before you begin

A few things need to be in place in Zuper before you start. You do not need all of them. It depends on how you want the widget to work.

* At least one job category is set up under **Settings → Jobs**: needed only if you want Zuper to automatically create a job each time a homeowner submits an estimate request.
* Financing providers and plans are set up under **Settings → Quotes & Invoicing**: needed only if you want to display financing options on the widget.
* An email template is set up under **Settings → Email Templates**: Zuper uses it to automatically send homeowners their estimate.

Before homeowners see a price, decide what you want them to experience. You can customize the widget's appearance, choose the questions that matter to your business, build the roofing options you want to sell, and control what happens when someone submits an estimate. Let's get started!

## Step-1: Design the homeowner experience

Start with the look and feel homeowners see when they open the widget. The live preview updates as you make changes, so you can see the experience as you build it. 

1. Enter a **Welcome Message**. Use it to tell homeowners what they can do, such as *Get Your Roof Estimate* or *See What Your New Roof Could Cost*.  
2. Choose a **Brand Color**. This color is applied to the widget's buttons.  
3. Choose a **Button Shape**: **Rounded**, **Pill**, or **Rectangle**.  
4. Choose a **Button Text Color**: **Light** or **Dark**. Choose the option that provides enough contrast against your brand color.  
5. Select **Next** to continue to **Manage Questions**. 

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid4.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=c790abc21c36e76644902ae083524f61" alt="Crwid4" width="1920" height="878" data-path="images/Crwid4.png" />
</Frame>

<Tip>
  Choose a brand color with enough contrast for the button text you select. Light text works well on dark colors; dark text works better on lighter or brighter colors.
</Tip>

## Step-2: Decide what information to collect 

The **Manage Questions** step lets you control what homeowners are asked before they see their estimate. Their answers help Zuper calculate pricing and filter which roofing options to show.

### Default questions

Three questions are included by default and cannot be deleted or changed to a different type. You can rename the label text by selecting the pencil icon next to each question.

* **What's your property address?** : Zuper uses this address to calculate the approximate roof area for pricing. This is the foundation of every estimate.
* **Where should we send your estimate?** : Collects the homeowner's first name, last name, email address, and phone number. Zuper saves this immediately, so even if a homeowner drops off before completing the estimate, you still have their contact details.
* **Select your roof type**: Captures the roof slope. Zuper uses this answer to apply steep-slope pricing automatically if you have configured it.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid5.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=48e0ab098de990f3e78ad9b28dc386f3" alt="Crwid5" width="1920" height="878" data-path="images/Crwid5.png" />
</Frame>

<Note>
  **Note**: You cannot delete or change the type of a default question. You can only rename the label text.
</Note>

### Add Custom questions

Add custom questions when you need information that affects which options you show or how you price the job. For example, a question about the type of service needed full replacement versus repair lets you use visibility conditions to show only the options relevant to that answer. Keep the list short; every extra question is another moment where a homeowner might drop off.

1. Select **+ Add custom question**. A question-type menu appears.
2. Select a question type:
   * **Short answer**: A single line of free text
   * **Long answer**: A multiline text field
   * **Single choice**: Homeowner selects one option from a list
   * **Multiple choice**: Homeowner selects one or more options
   * **Dropdown**: Homeowner selects one option from a dropdown list
3. Enter the question label text.
4. For **Single choice**, **Multiple choice**, and **Dropdown** types, add at least two answer options.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid6.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=4dc681824ab85b7f76db48676c1c392d" alt="Crwid6" width="1920" height="878" data-path="images/Crwid6.png" />
</Frame>

<Note>
  **Note**: To make a custom question mandatory, turn on the **Required** toggle before saving. Homeowners cannot proceed past that step without answering a required question.
</Note>

You can manage each question using the controls on its question card: 

* **Change type**: Switch the question to another question type. 
* **Duplicate**: Create a copy of the question, including its answer options. 
* **Required**: Require customers to answer before they can continue. 
* **Update Field**: Save the customer's response to a Contact or Job custom field. 
* **Dependent Field**: Show the question only when a customer selects a specific answer to another Single Choice, Multiple Choice, or Dropdown question. 
* **Delete**: Remove a custom question. 

<Tip>
  Tip: Drag any question up or down to change the order customers see them.
</Tip>

Once your questions are set, select **Next** to save and proceed to **Roofing Options**. 

### Step-3: Decide your pricing and options 

The **Roofing Options** step is where you define the products you offer homeowners. Each option becomes a card on the homeowner results page, showing a price, a photo, and a financing summary.

The step loads with three default placeholder options. Edit any of them to match your actual products, or select **+ Add Option** to start fresh.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid7.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=02acf498b202bf06a0feb34883571a3a" alt="Crwid7" width="1920" height="878" data-path="images/Crwid7.png" />
</Frame>

<Note>
  **Note**: Default options are placeholders. If you activate without updating them, homeowners see placeholder names and pricing on the results page.
</Note>

**Identity**

1. Enter a name in the **Name** field. This field is required. Use the product name your team uses.
2. Select a label from the **Label** dropdown. Choose from **Good**, **Better**, **Best**, or enter a custom label. The label appears as a badge on the homeowner estimate card and helps homeowners compare options at a glance.
3. Optionally, select **Upload images** to add a reference photo. The first image you upload becomes the thumbnail on the homeowner estimate card.

### Pricing

Pricing tells Zuper how to calculate the cost for this option based on the homeowner's roof size. Choose the model that matches how your business prices jobs.

1. Enter a value in the **Base pricing** field.
2. Select a pricing model from the dropdown:

| Model | When to use it |
| - | - |
| **Per SQ** | You price by the roofing square (100 sq ft). Zuper multiplies your rate by the calculated roof area. |
| **Per SQFT** | You price by the square foot. Zuper multiplies your rate by the calculated roof area. |
| **Fixed** | You charge a flat price regardless of roof size. Selecting **Fixed** disables the **Add Wastage** and **Steep slope pricing** fields automatically. |
| **Percentage** | A percentage price regardless of roof size. This does not apply to base pricing. |

3. To account for material waste, enter a percentage in the **Add Wastage** field. Zuper adds this to the calculated roof area before applying your unit price. A wastage factor of 10–15% is typical for most roofing jobs.

<Note>
  **Note**: Leaving the base price empty affects what homeowners see on the results page:

  * If **Hide options without pricing** is off: The option still appears, but shows a **Contact for pricing** button instead of a price.
  * If **Hide options without pricing** is on: The option is removed from the results page entirely.

  You can find this setting under **Advanced Settings → Pricing settings**.
</Note>

### Steep slope pricing

If your pricing changes for steep roofs, turn on the **Steep slope pricing** toggle and enter the additional amount. Zuper applies this surcharge automatically when a homeowner selects a steep roof type; you do not need a separate option for steep roofs.

Select a unit of measure for the surcharge from the dropdown:

| Unit of measure | How it works |
| - | - |
| **Per SQ** | Additional charge per roofing square, added on top of the base price. |
| **Per SQFT** | Additional charge per square foot, added on top of the base price. |
| **Fixed** | A flat dollar amount added on top of the base price, regardless of roof size. |
| **Percentage** | A percentage of the calculated base price, added on top of it. |

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid19-1.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=b9f569df2e23f33b9e85d389163ff1fd" alt="Crwid19 1" width="1920" height="878" data-path="images/Crwid19-1.png" />
</Frame>

### Financing

If you offer financing, selecting a plan here shows homeowners a financing summary on their estimate card: For example, *Pay as low as \$350/mo with financing*. It gives homeowners a way to think about affordability before they speak to you.

1. Under **Financing**, select one or more providers and plans from the list.

<Note>
  **Note**: The financing options available here depend on how your account is configured:

  * **Standard accounts**: Financing providers and plans set up under **Settings → Quotes & Invoicing** appear here.
  * **CPQ-enabled accounts**: Custom financing options configured in your CPQ settings appear here instead. See [Configuring financing options](#) for setup instructions.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid20.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=7883506f72eec40ba01b753e0d60c9a4" alt="Crwid20" width="1920" height="878" data-path="images/Crwid20.png" />
</Frame>

### Details and specifications

Use the rich text editor to add product highlights, what is included, warranty and guarantee details, and any other specifications that matter. This is what homeowners read when they select **View details** on your option card. Your chance to tell the full story of the product and why it's worth choosing.

### Visibility conditions

Visibility conditions let you show or hide an option based on how a homeowner answers your questions. Used well, they make the results page feel tailored to the homeowner rather than a generic list.

Turn on the **Visibility conditions** toggle, then define your rules. Each rule takes the form: **Show this option when** \[question] \[operator] \[value], or **Hide this option when** \[question] \[operator] \[value]. Use **AND** when all conditions must be true, or **OR** when any one condition is enough.

<Tip>
  Use visibility conditions to keep the estimate relevant. For example, hide a metal roofing option when a homeowner selects a very small roof area, or show a premium option only when they indicate they want a full replacement.
</Tip>

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid22.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=aea838b362d3adb3e0963689ec865780" alt="Crwid22" width="1920" height="878" data-path="images/Crwid22.png" />
</Frame>

Select **Save changes** to save the option and return to the **Roofing Options** list.

### Manage existing options

Each option tile shows a toggle to activate or deactivate it without deleting it. Select the pencil icon to edit an option, or the three-dot menu to duplicate or delete it. The live preview on the right updates as you make changes. Select any card in the preview carousel to see the full detail view.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid9.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=443c30d0fc0ec60c5bc8512550d8bd95" alt="Crwid9" width="1920" height="878" data-path="images/Crwid9.png" />
</Frame>

When all your options are configured, select **Next** to proceed to **Advanced Settings**.

## Advanced settings

**Advanced Settings** is where you decide how prices appear to homeowners, what Zuper creates when someone submits, and how your team gets notified. Most of these are one-time choices you set once and rarely revisit.

### Price display

By default, the widget shows homeowners an exact calculated price. To show a range instead, to account for variables your team discovers on-site, turn on **Price Range** and set your buffers.

* **Lower range (−%)**: How far below the calculated price the range starts. For example, a 10% lower buffer on a \$10,000 estimate sets the lower bound at \$9,000.
* **Upper range (+%)**: How far above the calculated price the range ends. For example, a 20% upper buffer on a \$10,000 estimate sets the upper bound at \$12,000.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid10.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=6a6e536be0d661cd0c44a2441f6e5d7e" alt="Crwid10" width="1920" height="878" data-path="images/Crwid10.png" />
</Frame>

<Tip>
  **Tip**: Setting both buffers to 0% displays the exact calculated price with no range. Use price buffers to account for variables your team discovers during an on-site inspection.
</Tip>

### Text message opt-in

If you want homeowners to opt in to text message updates, turn on **Text Message Opt-In**. A consent message field appears where you write the opt-in text homeowners see at the contact details step. Checking it is optional: homeowners can submit without selecting it, but having it in place means you can legally send SMS follow-ups to those who do opt in.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid13.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=083d641491c75a5b3c1ac518b1199432" alt="Crwid13" width="1920" height="878" data-path="images/Crwid13.png" />
</Frame>

### Out-of-service territory message

If your business only covers certain areas, turn on **Out of Service Territory Message** and select your service territories from the **Include Locations** field. Homeowners outside your coverage area see your custom message instead of an estimate. This prevents leads you cannot convert and sets honest expectations upfront.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid14.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=c9c9a97eb7c6f5d12109b471cde8263f" alt="Crwid14" width="1920" height="878" data-path="images/Crwid14.png" />
</Frame>

### Customer notifications

Set up how Zuper communicates with homeowners and your team after every submission.

1. From the **Send From** dropdown, select the email address homeowners see as the sender when they receive their estimate. Only addresses configured under **Settings → Notifications** appear here.
2. In the **CC** field, enter any internal email addresses that should receive a copy of every homeowner estimate email.
3. From the **Select Email Template** dropdown, choose the template Zuper sends to homeowners after they submit. Select **Email preview** to review the template content before you activate.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid15.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=b979ac422224d13f082505a71ef9a678" alt="Crwid15" width="1920" height="878" data-path="images/Crwid15.png" />
</Frame>

<Note>
  Note: If your account uses a custom SMTP configuration, estimate emails are sent through your own mail server instead of Zuper's default. The **Send From** address must be verified in your SMTP settings before it appears here. See [Configuring SMTP for outbound email](#) for setup instructions.
</Note>

<Warning>
  If the email template you select here is later deleted, Zuper will not send any email to homeowners for future submissions. Remove the template association from the widget before deleting the template.
</Warning>

### Contact details

Turn on **Show contact details on estimate** to display a team member's name, photo, phone number, and email on the homeowner results page. The email address and phone number can be modified. Homeowners can reach out directly with questions before selecting an option.

* Select the team member from the list.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid16.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=812d381ec54b0e18721efbf1e6e2d9ac" alt="Crwid16" width="1920" height="878" data-path="images/Crwid16.png" />
</Frame>

<Note>
  If the selected team member is later removed from Zuper, the first active user in your account appears as a fallback on the homeowner results page. No action is needed on the job record.
</Note>

## Activate your widget

Before you go live, take a moment to preview the widget as a homeowner would see it. It is much easier to spot something that does not look right now than after you have shared the link.

<Frame>
  <img src="https://mintcdn.com/zuperinc/V8l8gEbj5ewigidg/images/Crwid17.png?fit=max&auto=format&n=V8l8gEbj5ewigidg&q=85&s=97425085f60be31162e1ec2d0d95add7" alt="Crwid17" width="1920" height="878" data-path="images/Crwid17.png" />
</Frame>

1. Review all settings across the four steps. Use the step indicators at the top to go back and make changes at any time.
2. Select **Activate** at the bottom of the page. A confirmation modal appears showing:
   * The public widget URL
   * A QR code you can download as a PNG
   * An embed code (**Script** or **iFrame**) you can copy and paste onto your website
3. Select **Preview Widget** to open the live widget in your browser. Check it on desktop and on your phone; most homeowners will find the widget on mobile.
4. Select **Go to home** to return to the **Instant Estimate** listing page.

<Note>
  **Note**: Your widget is now live. Any homeowner who visits the link, scans the QR code, or finds the embed on your website can complete an estimate request immediately.
</Note>

## FAQs

<AccordionGroup>
  <Accordion title="How long does setup take?">
    For most contractors, the first widget takes 15 to 30 minutes. Appearance and questions are quick. Roofing options take the most time because you are entering your actual products and pricing. Once you have done one widget, duplicating and adjusting it for a second takes a fraction of the time.
  </Accordion>

  <Accordion title="Can I duplicate an existing widget instead of building one from scratch?">
    Yes. On the Instant Estimate listing page, select the three-dot menu on any widget card and select **Duplicate**. Zuper creates a copy in Draft status, preserving all settings. Open the duplicate, make your changes, and activate when ready.
  </Accordion>

  <Accordion title="Can I edit the label text on the default questions?">
    Yes. Select the pencil icon next to any default question to edit the label text inline. You cannot change the question type or delete a default question, but you can rename it to match your terminology — for example, changing "Select your roof type" to "What type of roof do you currently have?"
  </Accordion>

  <Accordion title="Can I have more than one widget, and do they share settings?">
    Yes. You can create as many widgets as you need from the Instant Estimate listing page. Each widget is fully independent — it has its own branding, questions, roofing options, pricing, lead handling, and embed code. Changes to one widget do not affect any other.
  </Accordion>

  <Accordion title="How do I embed the widget on my website?">
    After activating, open the widget detail page and select the **Share** tab, then select **Embed code**. You see two tabs: **Script** and **iFrame**.

    Paste the Script snippet before the closing `</body>` tag on any page where you want the widget to appear. Paste the iFrame anywhere in the page body — this works with most website builders, including WordPress, Wix, and Squarespace, without extra configuration.

    If you need help placing the code, contact your web developer or the support team for your website platform.
  </Accordion>

  <Accordion title="What happens to homeowner submissions if I deactivate a widget?">
    Deactivating a widget takes it offline immediately. Homeowners who visit the link see a message that the widget is unavailable. Your existing records from previous submissions are not affected.

    If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>


## Related topics

- [Setting up an Estimate and Book widget](/Zuper_for_Roofing/Estimate_and_Book_widget.md)
- [Setting up a Lead Capture widget](/Zuper_for_Roofing/Setting-up-Lead-Capture-widget.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.