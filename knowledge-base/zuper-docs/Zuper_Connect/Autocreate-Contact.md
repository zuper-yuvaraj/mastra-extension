---
title: "Auto Create Contacts"
source: https://docs.zuper.co/Zuper_Connect/Autocreate-Contact.md
fetched_at: 2026-10-06T13:30:04.178Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Auto Create Contacts

## **Overview**

Zuper Connect can automatically create customer records the moment you receive a call from an unknown phone number. This feature eliminates manual data entry, saves valuable time, and lets your team create jobs, invoices, and quotes immediately during the call.

## **Key Benefits**

* **Faster customer creation**: No more manual entry before or after calls.
* **Immediate action:** Start jobs, quotes, or invoices directly from the sidekick while on the call.
* **Better tracking**: Every incoming call (including missed calls) is automatically captured.
* **Automation-ready**: Auto-created customers can trigger workflows for instant job creation.

## **Navigation**

<Frame>
  *Settings --> Zuper Connect  --> Numbers and User Permissions*
</Frame>

<Frame>
  *Zuper Connect  --> Incoming Call (New Number Ringing) --> Customer (Creation done automatically)*
</Frame>

## **Enable Auto-Create Customer**

1. From the left navigation menu, select **Settings** and under **Zuper Connect**, choose **Numbers and User Permissions**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Lk9G6qjRaiHjbcxd/images/aconnectct2-1.png?fit=max&auto=format&n=Lk9G6qjRaiHjbcxd&q=85&s=ccd33174d030539fe85399f078b1e738" alt="Aconnectct2 1" width="1920" height="878" data-path="images/aconnectct2-1.png" />
</Frame>

2. Click the **pencil icon** next to the relevant number.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Lk9G6qjRaiHjbcxd/images/aconnectct3.png?fit=max&auto=format&n=Lk9G6qjRaiHjbcxd&q=85&s=b28c759955fbbc14db7f114d10a235b5" alt="Aconnectct3" width="1920" height="878" data-path="images/aconnectct3.png" />
</Frame>

3. In the "**Update Number**" dialog, turn on the toggle labeled "**Automatically create customer for incoming calls**." Click **Save**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Lk9G6qjRaiHjbcxd/images/aconnectct1.png?fit=max&auto=format&n=Lk9G6qjRaiHjbcxd&q=85&s=954724ab9106abd809addf1e73d79bbb" alt="Aconnectct1" width="1665" height="788" data-path="images/aconnectct1.png" />
</Frame>

**Auto Contact Creation**

When a call comes in:

* Zuper Connect instantly checks whether the phone number already exists in your customer database.

If the "**Automatically create customer for incoming calls**" feature is disabled, the screen will look like this:

<Frame>
  <img src="https://mintcdn.com/zuperinc/ksI4be5fqh4RBG8S/images/aconnectct81.png?fit=max&auto=format&n=ksI4be5fqh4RBG8S&q=85&s=bfcb84fcf614246c5cb21a59db4b954d" alt="Aconnectct81" width="1665" height="787" data-path="images/aconnectct81.png" />
</Frame>

* If no match is found **and** the feature is enabled, a new customer record is created automatically.
* The caller's phone number appears in the dialer (example: "14025642345").
* If the "**Automatically create customer for incoming calls**" feature is enabled, the screen will look like this:

<Frame>
  <img src="https://mintcdn.com/zuperinc/ksI4be5fqh4RBG8S/images/aconnectct9-2.png?fit=max&auto=format&n=ksI4be5fqh4RBG8S&q=85&s=9de259b87ed116ce78035d1d20b09d5b" alt="Aconnectct9 2" width="1649" height="783" data-path="images/aconnectct9-2.png" />
</Frame>

* Click the **redirect icon** in the dialer to jump straight to the new customer profile.

<Frame>
  <img src="https://mintcdn.com/zuperinc/ksI4be5fqh4RBG8S/images/aconnectct10-1.png?fit=max&auto=format&n=ksI4be5fqh4RBG8S&q=85&s=9fae62870a3fc678dcd3098296b4670f" alt="Aconnectct10 1" width="1649" height="783" data-path="images/aconnectct10-1.png" />
</Frame>

* **Auto-Created Customer Details.** The following fields are automatically populated:

| **Field** | **Value** |
| :- | :- |
| Customer Name | Phone number of the caller (e.g., 14025642345) |
| Email | [phonenumber@call.com](mailto:phonenumber@call.com) (auto-generated) |
| Created By | The user who created the call route |
| Tags | auto\_created |
| Service Address | Not pre-filled (add manually) |
| Billing Address | Not pre-filled (add manually) |

## **Managing Auto-Created Customers**

* **Viewing**: Auto-created customers appear in the Customer module exactly like manually created ones. You can easily spot them with the auto\_created tag and the phone-number name.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Lk9G6qjRaiHjbcxd/images/aconnectct6.png?fit=max&auto=format&n=Lk9G6qjRaiHjbcxd&q=85&s=82acb4398d6c09695bdcc2803a66cde8" alt="Aconnectct6" width="1672" height="792" data-path="images/aconnectct6.png" />
</Frame>

* **Editing**: Open the customer profile and update the real name, email, address, notes, etc., at any time.
* **Deleting**: Delete them the same way you delete any other customer record.

<Frame>
  <img src="https://mintcdn.com/zuperinc/Lk9G6qjRaiHjbcxd/images/aconnectct7.png?fit=max&auto=format&n=Lk9G6qjRaiHjbcxd&q=85&s=4694bbf54ff9b2b7b75f2fa4b918af2a" alt="Aconnectct7" width="1667" height="786" data-path="images/aconnectct7.png" />
</Frame>

## **CSR Agent Integration**

If you use the CSR Agent, calls handled by the feature automatically trigger customer creation with all mandatory fields populated, ensuring your database remains complete and up to date

## **Best Practices**

* Update customer details promptly after the call (add real name, email, addresses, etc.).
* Use the auto\_created tag to filter and review records that still need enrichment.
* Set up workflows so that auto-created customers automatically trigger job creation.
* Periodically review and merge any duplicate records to keep your data clean.

## FAQs

<AccordionGroup>
  <Accordion title="What happens if the same number calls multiple times?">
    Zuper Connect recognizes returning customers by their phone number. After Zuper Connect creates a customer record, every later call from that number links to the same record automatically. Zuper Connect does not create duplicate customer records for a caller.
  </Accordion>

  <Accordion title="Is the Auto-Create Customer toggle turned on by default?">
    No, the **Auto-Create Customer** toggle is turned off by default. Go to **Settings**, select **Zuper Connect**, and then select **General Settings** to turn it on.
  </Accordion>

  <Accordion title="What happens when I turn off the toggle?">
    When you turn off the toggle, calls from unknown numbers show as **Unknown Number** in your dialer. Zuper Connect does not create a customer record for these calls until you add the customer yourself.
  </Accordion>

  <Accordion title="Can I still create customers manually?">
    Yes, turning on automatic customer creation does not change how you create customers manually. You can continue to add customers through the regular process at any time.
  </Accordion>

  <Accordion title="Do missed calls also create customer records?">
    Yes, when you turn on this feature, Zuper Connect creates a customer record for every incoming call from an unknown number, including missed calls. This way, you do not lose potential leads.
  </Accordion>

  <Accordion title="Does a spam number that calls repeatedly create duplicate customer records?">
    No, spam calls do not fill your database with duplicate records. Zuper Connect checks whether a phone number already has a customer record before it creates a new one. The first call creates the customer. Every later call, even one that arrives seconds later, links to that same record. You see multiple call logs listed under one customer, not multiple customers.
  </Accordion>

  <Accordion title="How do I keep records separate when two people share one phone number?">
    Zuper Connect cannot separate two callers automatically, since it identifies customers by phone number only. Use the following steps to manage a shared number:

    1. Open the customer record after the first call, and add a note that names both callers, for example, "Shared line: the first caller and the second caller."
    2. Create a new customer record manually for the second caller, and then use the **Merge Customers** tool to link their call logs. Contact support if you need help merging two records.
    3. Ask callers to use a unique mobile number where possible, or add a sub-contact field to your notes for shared lines going forward.
  </Accordion>

  <Accordion title="What should I do if an automatically created email address is incorrect and bounces?">
    Zuper Connect generates a placeholder email address for unknown callers, for example, the customer's phone number combined with @call.com. If this address is incorrect and bounces, follow these steps:

    1. Open the customer record, and replace the automatically generated email address with the correct one.
    2. Add a note that states you corrected the email address and the date you made the change.
    3. Pause any automated email workflow linked to that customer until you confirm the new address is correct.

    Consider adding a custom field, such as **Preferred Email Verified**, to confirm email addresses before you send automated messages.
  </Accordion>

  <Accordion title="What should I do if a customer profile is still loading while I am on a call?">
    Stay on the **Sidekick Dialer** screen, and collect the customer's details, such as name and address, verbally. Enter these details directly into the customer form, since it refreshes in real time as the profile finishes loading. The profile opens in a new tab, so the call is never interrupted.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

## Reach out to Zuper support

Need help with the **Auto-Create Customer** feature or another part of **Zuper Connect**? Contact [Zuper Support](mailto:support@zuper.co).

### Quick Ways to Contact Us

| Channel | Details | Best For |
| :- | :- | :- |
| **Support Email** | [support@zuper.co](mailto:support@zuper.co) | Technical issues, feature questions, and troubleshooting. |
| **Support Portal** | [docs.zuper.co](https://docs.zuper.co/Zuper_Connect/Overview) | Browse the knowledge base. |


## Related topics

- [Adding new contact](/Client/Contact/Create_contact.md)
- [Configuring Customer-Contact Settings](/Settings/Modules/Customers-Contacts/Customers-Contacts-Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.