---
title: "SMS Usage and Text Limitations for US Carriers"
source: https://docs.zuper.co/Zuper_Connect/sms-usage-and-text.md
fetched_at: 2026-10-06T13:30:03.218Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# SMS Usage and Text Limitations for US Carriers

SMS messages sent from Zuper Connect US numbers are subject to carrier requirements for registration, sending speed, daily volume, message length, content, and customer consent.

This article explains the limits that apply to Zuper Connect SMS on US 10DLC numbers and how to maintain reliable message delivery.

<Frame>
  **Applies to:** Zuper Connect SMS on US 10DLC numbers
</Frame>

## Before you can send SMS

SMS cannot be sent from a Zuper Connect number until the number's **10DLC brand and campaign** are approved.

US carriers require every application-to-person (A2P) sender to be registered and approved before messaging traffic is accepted. Until approval is complete, sending is not enabled on the number.

| Registration status | Can you send? | What it means |
| - | - | - |
| Brand not submitted | No | Nothing has been registered with the carriers yet. |
| Brand approved, campaign pending | No | The business is verified, but the messaging use case is not yet authorized. |
| Campaign rejected | No | Carriers declined the use case. Correct the campaign information and resubmit it. |
| Brand and campaign approved, number linked | Yes | Traffic is authorized, subject to the limits described in this article. |

<Warning>
  **Warning**: Your brand and campaign must both be approved, and the number must be linked to the approved campaign before you can send SMS.
</Warning>

### Why approval is required

Unregistered A2P traffic can be blocked or silently filtered by carriers. This can cause messages to appear as sent even though the recipient never receives them, with no reliable delivery error available for diagnosis.

Sending unregistered traffic can also:

* Result in carrier surcharges or penalties.
* Damage the reputation of the sending number.
* Affect the brand's ability to complete registration successfully later.

All throughput, daily-volume, and message-segment limits in this article apply **after approval**. Before approval, the effective SMS sending limit is **zero**.

Approval typically takes a few business days after a complete and compliant submission is filed. A common cause of delay is an incomplete or non-compliant customer opt-in and consent flow on the business website.

## How SMS approval works

Approval happens at two levels: **Brand** and **Campaign**. Both are required before sending SMS.

<CardGroup cols={2}>
  <Card title="Brand" icon="building">
    The brand represents your legal business entity. Registration includes your legal business name, EIN, address, and website.

    Brand vetting produces a **Trust Score from 0–100**, which affects messaging capacity.
  </Card>

  <Card title="Campaign" icon="bullhorn">
    The campaign represents the messaging use case, such as customer care, marketing and so on.

    Campaign registration includes information such as: messaging use case, sample messages, consent language, and customer opt-in process.
  </Card>
</CardGroup>

<Note>
  **Note**: A phone number can belong to only one campaign at a time.
</Note>

The number can only send the type of content approved for that campaign. For example, sending marketing messages through a customer-care campaign is a compliance violation even if the number itself is approved for messaging.

## SMS throughput limits

Carriers measure sending speed in **messages per second (MPS)**. One MPS limit applies per approved campaign and is shared across all long-code numbers linked to that campaign.

### SMS throughput by Trust Score

| Trust Score | Total SMS MPS | AT\&T | T-Mobile | Verizon |
| - | -: | -: | -: | -: |
| **75–100** | 225 | 75 | 75 | 75 |
| **50–74** | 120 | 40 | 40 | 40 |
| **1–49** | 12 | 4 | 4 | 4 |
| **0 (Low Volume Standard brand)** | 12 | 4 | 4 | 4 |

### Other throughput cases

<AccordionGroup>
  <Accordion title="Sole Proprietor brands">
    Sole Proprietor brands have an approximate ceiling of **1 MPS**.

    Carrier limits include:

    * **AT\&T:** 0.25 MPS
    * **T-Mobile:** 1 MPS per number
    * **Verizon:** 1 MPS per number

    AT\&T also limits Sole Proprietor brands to **15 messages per minute**.
  </Accordion>

  <Accordion title="Low Volume Mixed and Marketing campaigns">
    Low Volume Mixed and Marketing campaigns have a fixed throughput of:

    **3.75 MPS total**

    This applies regardless of Trust Score.
  </Accordion>

  <Accordion title="Minor carriers">
    Minor carriers representing less than approximately 5% of the market generally support **1 MPS per number**. US Cellular supports up to **8 MPS**.
  </Accordion>

  <Accordion title="Special-use campaigns">
    Some campaign types have fixed allocations that do not depend on Trust Score, including charity, political, K-12 education, emergency services, and franchise or agent use cases.

    See [Special-use-case limits](#special-use-case-limits) for details.
  </Accordion>
</AccordionGroup>

## MMS throughput limits

Following the March 2026 carrier update, MMS throughput is also based on Trust Score. Previously, MMS used a flat 1 MPS limit per account.

| Trust Score | MMS MPS per major carrier |
| - | -: |
| **75 or higher** | 40 |
| **50–74** | 20 |
| **Below 50** | 5 |
| **Sole Proprietor** | 0.5 per number |

## What happens when you exceed the sending rate

Messages sent faster than the approved throughput are **queued**, not immediately rejected. Queued messages are processed at the allowed sending rate.

If a message remains queued for more than **10 hours**, it is dropped as a queue-overflow failure.

<Warning>
  **Error 30001 — Queue overflow**
</Warning>

### Recommended practice

A large bulk send can still be delivered, but delivery may be slow. Avoid placing large bulk sends ahead of time-sensitive traffic such as:

* Appointment reminders
* Technician en-route alerts
* Service notifications

Bulk traffic can delay these messages while the queue is being processed.

## T-Mobile daily messaging limits

T-Mobile is the only major carrier that also applies a daily volume limit. This is one of the carrier limits approved senders are most likely to reach.

The limit counts:

* SMS segments
* MMS messages

Only traffic sent to T-Mobile recipients counts toward the T-Mobile daily allowance.

| Brand Trust Score | Daily T-Mobile limit |
| - | -: |
| **75–100** | 200,000 |
| **50–74** | 40,000 |
| **25–49** | 10,000 |
| **1–24** | 2,000 |
| **Sole Proprietor** | 1,000 |

### How the T-Mobile daily limit works

<Steps>
  <Step title="The limit applies per brand">
    The limit applies to the **brand or EIN**.<br />It does not apply separately to individual campaigns or phone numbers.<br />Every approved campaign and number under the same legal business entity draws from the same daily pool.
  </Step>

  <Step title="The limit is shared across messaging providers">
    If the same EIN is registered with another messaging provider, messages sent through that platform also count toward the same T-Mobile daily allowance.
  </Step>

  <Step title="The limit resets at midnight Pacific Time">
    The daily allowance resets at **12:00 AM US Pacific Time**, not according to the customer's local timezone.
  </Step>
</Steps>

### Russell 3000 businesses

Businesses listed in the Russell 3000 Index receive a default T-Mobile allowance of **200,000 messages per day**. Businesses requiring more than 200,000 messages per day must complete T-Mobile's Special Business Review.

### T-Mobile usage warnings and failures

T-Mobile generates advisory notifications as usage approaches the daily allowance.

| Error | Meaning |
| - | - |
| `30025` | Approximately 50% of the daily limit has been reached. |
| `30026` | Approximately 70% of the daily limit has been reached. |
| `30023` | The daily message limit has been reached. |

When the daily limit is reached, messages to T-Mobile recipients fail with `30023 — Daily message cap reached`. Messages continue to fail for the remainder of that Pacific-time day.

## SMS message length and segments

An SMS message can use one or more segments. The number of characters available in each segment depends on the message encoding.

| Encoding | Single segment | Multi-segment message |
| - | -: | -: |
| GSM-7 | 160 characters | 153 characters per segment |
| UCS-2 | 70 characters | 67 characters per segment |

### GSM-7 messages

A standard GSM-7 message supports up to **160 characters in one SMS segment**. If the message exceeds 160 characters, it is divided into multiple segments. Because concatenated segments include a header that allows the recipient's device to reassemble them, each segment can contain up to **153 characters**.

**Example:**

* 160 GSM-7 characters = 1 segment
* 161 GSM-7 characters = 2 segments

The recipient's phone typically reassembles the segments and displays them as a single message.

### UCS-2 messages

Messages containing characters outside the GSM-7 character set use UCS-2 encoding. These characters commonly include:

* Most emoji
* Many accented characters
* Many non-Latin characters

A UCS-2 message supports **70 characters in one segment**. For concatenated UCS-2 messages, each segment supports **67 characters**.

**Example:**

* 70 UCS-2 characters = 1 segment
* 71 UCS-2 characters = 2 segments

<Warning>
  A single non-GSM character, such as an emoji, can cause the entire SMS to use UCS-2 encoding.
</Warning>

### Maximum SMS length

The platform supports a maximum of **1,600 characters per message**. Messages above this limit fail with `21617 — Message exceeds the supported length`. Inbound messages above the limit are truncated.

Carriers may also reject long UCS-2 messages before they reach the 1,600-character platform limit. These failures can return `30019`.

<Tip>
  For more reliable delivery, keep SMS messages to approximately **320 characters or fewer**. This is roughly equivalent to two SMS segments.
</Tip>

### Why SMS segments matter

T-Mobile's daily allowance counts segments, not simply the number of messages submitted. This means one long SMS can consume several units of the daily allowance even though the recipient sees a single message.

For example, a 400-character message containing one emoji can consume approximately six SMS segments because the emoji changes the message encoding to UCS-2. A single emoji can therefore significantly increase daily segment consumption.

**Recommended practices:**

* Keep templates short.
* Stay within one GSM-7 segment when possible.
* Avoid unnecessary emoji in high-volume templates.
* Review special characters before sending large campaigns.
* Reduce unnecessary message text where practical.

Short, GSM-7-compatible templates are one of the simplest ways to preserve messaging capacity.

## Content and consent requirements

Campaign approval authorizes a particular messaging use case. It does not prevent individual messages from being filtered. Filtered messages typically return `30007 — Message filtered`, and the carrier may not provide a detailed reason for the filtering.

Because of this, prevention is more useful than trying to diagnose individual filtered messages after they occur.

### Prohibited and restricted content

Carrier restrictions apply to prohibited and high-risk messaging categories, including:

* Sex-related content
* Hate-related content
* Alcohol
* Firearms
* Tobacco
* Cannabis and CBD
* High-risk lending
* Debt collection outside permitted rules
* Gambling
* Third-party lead generation

These categories are commonly associated with the carrier restrictions referred to as **SHAFT** and related prohibited-use policies.

### Customer consent requirements

Consent must match the approved campaign use case. For example, consent to receive transactional or customer-care SMS does not automatically authorize promotional SMS. Promotional messaging requires separate and explicit consent where applicable.

### SMS opt-out requirements

Opt-out requests must be honored automatically. The following keywords must stop messaging to the recipient:

* STOP
* END
* QUIT
* CANCEL
* UNSUBSCRIBE

The keyword **HELP** must return the configured support information.

<Warning>
  Continuing to send SMS to a recipient who has opted out can violate carrier requirements and may create TCPA exposure.
</Warning>

### Link and content best practices

To reduce the risk of carrier filtering:

* Use a branded URL domain.
* Avoid public URL shorteners such as bit.ly and TinyURL.
* Identify the sender clearly.
* Avoid excessive capitalization.
* Avoid excessive punctuation.
* Send only content that matches the approved campaign use case.
* Maintain valid customer consent.

Repeated violations can cause an approved campaign to be suspended. When a campaign is suspended, SMS sending is disabled until the compliance issue is resolved.

## Special-use-case limits

Some campaign types receive fixed allocations that do not depend on the standard Trust Score bands.

| Use case | AT\&T throughput | T-Mobile daily allocation | Eligibility |
| - | -: | - | - |
| **Charity** | 40 MPS | Carrier fees waived | 501(c)(3) organizations |
| **Political** | 75 MPS | Unlimited with Campaign Verify token; otherwise 2,000–200,000 | 527 and qualifying 501(c)(4), 501(c)(5), or 501(c)(6) organizations |
| **Emergency services** | 75 MPS | 2,000–200,000; waiver possible | Public safety or health organizations |
| **K-12 education** | 12 MPS per number | Standard allocation; waiver possible | K-12 institutions |
| **Agents, franchises, or local branches** | 1 MPS per number | 2,000–200,000 | Maximum 5,000 numbers per campaign |

## Current provider position: Plivo to Twilio

Zuper Connect accounts are currently provisioned on Plivo. Zuper is migrating accounts and phone numbers to Twilio. Plivo is therefore a temporary provider position during this transition.

The 10DLC approval requirement applies to both providers.

### Current Plivo limits

Plivo currently publishes the following limits and recommendations.

<AccordionGroup>
  <Accordion title="Standard 10DLC brands">
    Plivo supports up to **4,500 transactions per minute per operator**, which is approximately **75 MPS**. The actual rate depends on brand and campaign characteristics.
  </Accordion>

  <Accordion title="Campaign and number limits">
    For a standard brand:

    * Maximum campaigns per brand: **3**
    * Maximum long-code numbers per campaign: **49**
    * Each phone number can belong to only one campaign.
  </Accordion>

  <Accordion title="Sole Proprietor limits">
    Approximate T-Mobile allowance: **1,000 segments per day**

    Approximate allowance across US carriers: **3,000 segments per day**
  </Accordion>

  <Accordion title="Low Volume Standard limits">
    Approximate T-Mobile allowance: **2,000 segments per day**

    Approximate allowance across US carriers: **6,000 segments per day**
  </Accordion>

  <Accordion title="Russell 3000 businesses">
    Russell 3000 brands receive: **200,000 messages per day to T-Mobile**
  </Accordion>

  <Accordion title="Brand vetting">
    Plivo recommends optional brand vetting for businesses sending more than approximately:

    **6,000 messages per day**
  </Accordion>
</AccordionGroup>

<Note>
  **Note**: Plivo does not currently publish a per-carrier, per-Trust-Score breakdown. The underlying carrier limits described earlier in this article come from AT\&T, T-Mobile, and Verizon through the industry registry rather than being provider-specific limits.
</Note>

### After migration to Twilio

After migration, Zuper follows Twilio's published carrier figures. The SMS, MMS, Trust Score, and daily-volume tables in this article represent the limits Zuper uses for capacity planning and support after the account and phone numbers move to Twilio.

### Important considerations during migration

<AccordionGroup>
  <Accordion title="Approval does not automatically transfer">
    10DLC registration is provider-specific. A campaign approved on Plivo must be registered and approved again on Twilio. The migrated phone number cannot send SMS through Twilio until that approval is complete.
  </Accordion>

  <Accordion title="T-Mobile's daily allowance remains shared">
    T-Mobile applies its daily allowance at the brand or EIN level across messaging platforms. If some phone numbers remain on Plivo while other numbers have migrated to Twilio, messages from both providers draw from the same T-Mobile daily allowance.
  </Accordion>
</AccordionGroup>

## How to get SMS sending approved

1. **Submit the brand.** Provide information that matches public business records exactly, including legal business name, EIN, registered business address, and website. Mismatched information is a common reason for a low Trust Score, registration delays, or registration rejection.
2. **Publish a compliant customer opt-in flow.** Publish the opt-in process before submitting the campaign, since carriers can verify the customer consent flow during review. The customer-facing form must include an explicit SMS consent checkbox. The checkbox must not be selected by default and must be separate from general Terms and Conditions acceptance. The business must also include corresponding SMS language in its Privacy Policy and Terms of Service. Verbal-only consent generally does not pass review unless evidence of the consent process is available on a publicly accessible page.
3. **Declare the correct messaging use case.** Select the campaign use case that accurately represents the messages the business intends to send. If the business sends both service or transactional notifications and marketing or promotional messages, these require separate consent and may require separate campaigns.
4. **Wait for complete approval.** Do not schedule SMS sending until approval is confirmed. Brand approval by itself is not sufficient. Confirm that the brand is approved, the campaign is approved, and the phone number is linked to the approved campaign.

## How to increase messaging limits

After approval, use the following options to increase available messaging capacity.

**Complete brand vetting**

Trust Score is one of the main factors determining both throughput and the T-Mobile daily allowance. An unvetted brand can be limited to 12 MPS and 2,000 T-Mobile segments per day. A highly vetted brand can reach 225 total MPS and 200,000 T-Mobile messages or segments per day.

**Shorten SMS templates**

Keep templates within one GSM-7 segment whenever possible. This reduces segment consumption and preserves daily messaging capacity.

**Keep filtering rates low**

Maintain valid consent, compliant content, correct campaign use, and clean opt-out handling. Clean sending behavior helps protect the messaging capacity already available to the business.

**Request T-Mobile Special Business Review**

If the business needs to send more than 200,000 messages per day to T-Mobile, request T-Mobile Special Business Review through Zuper.

## Troubleshooting

<AccordionGroup>
  <Accordion title="SMS sending is not enabled">
    **Possible cause:** The brand or campaign is still pending, the campaign was rejected, or the phone number has not been linked to the approved campaign.

    **What to do:** Confirm that the brand is approved, the campaign is approved, and the number is linked to the approved campaign. Do not treat brand approval alone as authorization to send SMS.
  </Accordion>

  <Accordion title="SMS messages are being delivered slowly">
    **Possible cause:** The campaign is sending messages faster than its approved throughput.

    **What to do:** Reduce the sending rate or allow queued messages to process. Avoid placing bulk campaigns ahead of time-sensitive operational messages.
  </Accordion>

  <Accordion title="Error 30001 — Queue overflow">
    **Cause:** The message remained queued for more than 10 hours.

    **What to do:** Reduce bulk traffic or pace sending according to the approved campaign throughput.
  </Accordion>

  <Accordion title="Error 30023 — Daily message cap reached">
    **Cause:** The business reached its T-Mobile daily allowance.

    **What to do:** Wait until the allowance resets at midnight US Pacific Time. If this occurs regularly, review the brand Trust Score, shorten templates, reduce unnecessary SMS segments, or request additional review if the business qualifies.
  </Accordion>

  <Accordion title="Error 30025">
    **Cause:** Approximately 50% of the T-Mobile daily allowance has been consumed.

    **What to do:** Review the remaining traffic planned for the day.
  </Accordion>

  <Accordion title="Error 30026">
    **Cause:** Approximately 70% of the T-Mobile daily allowance has been consumed.

    **What to do:** Prioritize important messages and reduce unnecessary multi-segment traffic.
  </Accordion>

  <Accordion title="Error 21617 — Message exceeds the supported length">
    **Cause:** The SMS contains more than 1,600 characters.

    **What to do:** Shorten the message and send it again.
  </Accordion>

  <Accordion title="Error 30019">
    **Possible cause:** A carrier rejected a long UCS-2 message.

    **What to do:** Shorten the message. Where appropriate, remove unnecessary emoji or other non-GSM characters.
  </Accordion>

  <Accordion title="Error 30007 — Message filtered">
    **Possible cause:** The carrier filtered the message because of message content, missing or inappropriate consent, campaign-use-case mismatch, sender reputation, public URL shorteners, or restricted or prohibited content.

    **What to do:**

    1. Confirm that the message matches the approved campaign.
    2. Confirm that the recipient provided the appropriate consent.
    3. Confirm that the recipient has not opted out.
    4. Remove prohibited or high-risk content.
    5. Replace public URL shorteners with a branded URL.
    6. Avoid unnecessary capitalization and punctuation.
  </Accordion>

  <Accordion title="Campaign approval is delayed or rejected">
    Possible causes include:

    * Business information does not match public records.
    * The website does not include a compliant SMS opt-in flow.
    * The SMS consent checkbox is selected by default.
    * SMS consent is bundled with acceptance of general terms.
    * The Privacy Policy does not contain the required SMS language.
    * The Terms of Service do not contain the required SMS language.
    * The campaign use case does not match the sample messages.
    * The consent process does not match the declared campaign.

    Review and correct the submitted information before resubmitting.
  </Accordion>
</AccordionGroup>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can I send SMS after my brand is approved?">
    No. The campaign must also be approved, and the number must be linked to the approved campaign.
  </Accordion>

  <Accordion title="Does adding more phone numbers increase campaign throughput?">
    No. The campaign's MPS allocation is shared across all numbers linked to that campaign.
  </Accordion>

  <Accordion title="Does each campaign receive its own T-Mobile daily allowance?">
    No. T-Mobile applies the daily allowance at the brand or EIN level.
  </Accordion>

  <Accordion title="Is the T-Mobile allowance shared across providers?">
    Yes. If the same EIN is registered on multiple messaging platforms, traffic from those platforms counts toward the same T-Mobile allowance.
  </Accordion>

  <Accordion title="Does one long SMS count as one message?">
    Not necessarily. Long SMS messages are divided into segments, and T-Mobile counts each segment toward the daily allowance.
  </Accordion>

  <Accordion title="Can an emoji increase SMS usage?">
    Yes. Most emoji cause the message to use UCS-2 encoding, which reduces the number of characters supported per segment and can significantly increase segment consumption.
  </Accordion>

  <Accordion title="Can I send marketing messages through a customer-care campaign?">
    No. Only send message content that matches the campaign use case approved by the carrier.
  </Accordion>

  <Accordion title="What happens if my campaign is suspended?">
    SMS sending for the affected campaign is disabled until the compliance issue is resolved and the campaign is restored.
  </Accordion>

  <Accordion title="When does the T-Mobile daily allowance reset?">
    At midnight US Pacific Time.
  </Accordion>

  <Accordion title="Can I use a public URL shortener in SMS messages?">
    Public URL shorteners can increase the risk of carrier filtering. Use a branded URL domain whenever possible.
  </Accordion>
</AccordionGroup>

## Best practices

* Complete both brand and campaign approval before sending SMS.
* Match registration information to public business records.
* Publish a compliant SMS opt-in process before campaign submission.
* Keep SMS templates short.
* Use GSM-7 characters when practical.
* Avoid unnecessary emoji in high-volume templates.
* Keep time-sensitive messages separate from large bulk sends.
* Monitor T-Mobile daily usage.
* Use branded URLs.
* Clearly identify the message sender.
* Maintain valid customer consent.
* Honor opt-out requests immediately.
* Only send content covered by the approved campaign.
* Complete brand vetting when higher throughput is required.

## Related topics

<CardGroup cols={2}>
  <Card title="10DLC Registration" href="/Zuper_Connect/10DLC">
    Register a brand and campaign for A2P messaging.
  </Card>

  <Card title="Port a Number" href="/Zuper_Connect/Port-Number">
    Bring an existing phone number into Zuper Connect.
  </Card>

  <Card title="Conversations" href="/Zuper_Connect/conversation">
    Manage SMS and messaging conversations in Zuper Connect.
  </Card>

  <Card title="Twilio Integration" href="/Integrations/SMS_and_Telephony/Twilio">
    Set up Twilio as a messaging provider.
  </Card>
</CardGroup>


## Related topics

- [A2P 10DLC Setup](/Zuper_Connect/10DLC.md)
- [Message Media](/Integrations/SMS_and_Telephony/Message_Media.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.