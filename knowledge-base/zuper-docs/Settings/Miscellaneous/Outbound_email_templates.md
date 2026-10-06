---
title: "Outbound Email Settings"
source: https://docs.zuper.co/Settings/Miscellaneous/Outbound_email_templates.md
fetched_at: 2026-10-06T13:30:16.687Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Outbound Email Settings

<Frame>
  **Navigation**: *Settings -> Miscellaneous -> Outbound Email*
</Frame>

<Note>
  **Coming soon**: Revamped email experience with bi-directional sync of customer replies back to Zuper. Please reach out to your account manager to enroll for Beta.
</Note>

Outbound email settings let you send all customer-facing emails from your own company address. By default, Zuper sends emails from [notifications@email.zuperpro.com](mailto:notifications@email.zuperpro.com) — an address your customers might not recognize, which can cause emails to be marked as spam.

Once configured, emails such as job updates, invoices, and quotes are sent from your domain. Replies are routed directly to the appropriate inbox, ensuring seamless

You can add multiple email accounts, verify each one, and set a default account for sending emails

<Info>
  **What is SMTP?** Email providers use SMTP (Simple Mail Transfer Protocol) to send messages. Connecting Zuper to your SMTP account means Zuper sends emails through your provider, instead of Zuper’s default email address.
</Info>

## **Before you begin**

Complete this setup before you send any customer-facing emails. Ensure you have the following:

* **Admin access** to Zuper **Settings**.
* **Your SMTP credentials:** server address, port, username, and password.
* Access to your email provider’s dashboard to complete sender or domain verification.

## **Add provider-specific requirements**

* **For Gmail:** two-factor authentication (2FA) enabled on your Google account, so you can generate an app password.
* **For Microsoft 365:** multi-factor authentication (MFA) enabled if your organization uses it, so you can generate an app password.

## **Accessing outbound email settings**

1. Select your profile icon, then select **Settings**. Alternatively, navigate to the **Settings** module from the Left Navigation menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/hQNHJ1ovtaik9I-f/images/Outboundemail1.png?fit=max&auto=format&n=hQNHJ1ovtaik9I-f&q=85&s=41c9e7fafc687792ff8781e239629be1" alt="Outboundemail1" width="1920" height="878" data-path="images/Outboundemail1.png" />
</Frame>

2. Under Settings, select **Miscellaneous** from the left panel. Scroll to the **Outbound Email Settings** section.

<Frame>
  **Navigation**: *Settings -> Miscellaneous -> Outbound Email Settings*
</Frame>

## **Adding a new outbound email account**

1.     In the **Outbound Email Settings** section, select **+ Add Email**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/hQNHJ1ovtaik9I-f/images/Outboundemail3.png?fit=max&auto=format&n=hQNHJ1ovtaik9I-f&q=85&s=75d9372d3d225da49bc4d3f913f9ba62" alt="Outboundemail3" width="1920" height="878" data-path="images/Outboundemail3.png" />
</Frame>

2. Fill in the fields as described below and click **Create**.

 After you save, Zuper verifies the connection using the credentials you entered.

<Frame>
  <img src="https://mintcdn.com/zuperinc/hQNHJ1ovtaik9I-f/images/Outboundemail4.png?fit=max&auto=format&n=hQNHJ1ovtaik9I-f&q=85&s=48f3847a6ad024d14eceb9cf94a12c06" alt="Outboundemail4" width="1920" height="878" data-path="images/Outboundemail4.png" />
</Frame>

## **Default SMTP**

<Note>
  Note: If business SMTP is not configured or deleted, Zuper will use its default SMTP settings. In this case, all emails will be sent from [notifications@email.zuperpro.com](mailto:notifications@email.zuperpro.com). To use your own sender address, please make sure your business SMTP settings are configured correctly.  See **General Job Settings – Default from email** for more details.
</Note>

### **Email Configuration Fields**

| **Field** | **Description** |
| :- | :- |
| **Choose Email Provider** | Select your provider: **Gmail**, **Microsoft 365**, or **Others**. |
| **Outgoing SMTP Server** | The SMTP server address. This auto-fills based on the provider you choose. Select **Others** to enter a custom server. |
| **SMTP Port** | The port number. This also auto-fills. You can edit it if needed. |
| **Name** | The display name that appears in your customers’ inboxes. |
| **From Email** | The email address you want to send from. |
| **SMTP Username** | The username your email provider uses to authenticate you. This is often your full email address. |
| **SMTP Password** | The password for your email account. For Gmail and Microsoft 365, this is an app password — see **Setting up Gmail** or **Setting up Microsoft 365**. |
| **Reply To Email** | Optional. Enter a different address if you want replies to go somewhere other than the From Email. |

<Note>
  **Note**: The account shows a **Yet to Verify** status until verification is complete. If the status still shows '**Yet to Verify**' after a few minutes, check your credentials and confirm that you have verified your sending domain in your provider’s dashboard.
</Note>

<AccordionGroup>
  <Accordion title="Setting up Gmail">
    ## **Setting up Gmail**

    Google blocks third-party tools from logging in with your regular password as a security measure. Gmail requires an app password instead — a 16-character code that gives Zuper access to your account without using your main password. You must have 2-Step Verification enabled before you can generate one.

    1.     Go to [myaccount.google.com](http://myaccount.google.com).

    2.    Go to **Security** in the left panel.

    3.    Under **How you sign in to Google**, select **2-Step Verification**. If prompted, enter your password. The 2-Step Verification settings page opens.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/g11.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=6d3773b91af7fe45c8992fa417acffcb" alt="G11" width="860" height="517" data-path="images/g11.png" />
    </Frame>

    4.    Scroll to the bottom of the page and select **App passwords**.

    5.    In the **Select app** dropdown, choose **Mail** or **Other (custom name)**. If you choose **Other**, enter **Zuper** as the name.

    6.    If you choose **Mail**, also select your device from the **Select device** dropdown. This step only appears for some account types.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/g12.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=a916d50252985f1c75385b17b0ac385c" alt="G12" width="844" height="508" data-path="images/g12.png" />
    </Frame>

    7.    Select **Generate**. Google displays a 16-character app password.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/WWRryQiWANaj5aW3/images/g13.png?fit=max&auto=format&n=WWRryQiWANaj5aW3&q=85&s=d04fe1398804f6d9b643cd498aad8afe" alt="G13" width="837" height="515" data-path="images/g13.png" />
    </Frame>

    8.    Copy the password.

    9.    Go back to Zuper, paste the generated password into the **SMTP Password** field, and select **Create**.

     
  </Accordion>

  <Accordion title="Setting up Microsoft 365">
    If your Microsoft 365 account has multi-factor authentication (MFA) enabled, you must generate an app password to use with Zuper. Using your regular account password will not work.

    ## **Setting up Microsoft 364**

     1.     In Zuper, set Outgoing SMTP Server to [smtp.office365.com](http://smtp.office365.com).

    2.    Set SMTP Port to 587.

    3.    Go to [account.microsoft.com](http://account.microsoft.com) and sign in.

    4.    Select Security from the top navigation.

    5.    Under Advanced security options, select App passwords.

    6.    Select **Create a new app password**. Microsoft generates and displays the password.

    7.    Copy the generated password.

    8.    Go back to Zuper, paste the generated password into the SMTP Password field, and select Create.

    For more details, see [Microsoft’s SMTP guide](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission).

     
  </Accordion>

  <Accordion title="Setting up a custom SMTP provider">
    ## **Setting up a custom SMTP provider**

    If you use a provider other than Gmail or Microsoft 365, such as Mailgun, SendGrid, SMTP2GO, Zoho, Brevo, or any other provider, select **Others** as your email provider.

    1.     In the **Outgoing SMTP Server** field, enter your provider’s SMTP server address.

    2.    In the **SMTP Port** field, enter the correct port. Usually, this is 587 (TLS, a secure connection type) or 465 (SSL, an older secure connection type).

    3.    Enter your SMTP username and password from your provider’s dashboard.
  </Accordion>
</AccordionGroup>

## **Managing outbound email accounts**

### **Edit or delete an account**

1.     Go to **Settings → Miscellaneous → Outbound Email Settings**.

2.    Find the email account in the listing.

3.    Select the three-dot menu (⋮) next to the account.

4.    Select **Edit** or **Delete**. Update the details and select **Save**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/hQNHJ1ovtaik9I-f/images/Outboundemail5.png?fit=max&auto=format&n=hQNHJ1ovtaik9I-f&q=85&s=0f2a3090e7a30455a57c3d0737965d0f" alt="Outboundemail5" width="1920" height="878" data-path="images/Outboundemail5.png" />
</Frame>

## **Set a default account**

The default account is what Zuper uses to send all customer-facing emails, unless a workflow or template specifies otherwise.

1.     Select the three-dot menu (⋮) next to the account and select **Edit**.

2.    In the panel that opens, select **Set as default**.

3.    Select **Update**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/hQNHJ1ovtaik9I-f/images/Outboundemail6.png?fit=max&auto=format&n=hQNHJ1ovtaik9I-f&q=85&s=1b854869dd77671cbdc6ce921f55bebe" alt="Outboundemail6" width="1920" height="878" data-path="images/Outboundemail6.png" />
</Frame>

## **Troubleshooting**

<Accordion title="Emails not sending after SMTP setup">
  If your emails are not sending after you have configured your SMTP settings, work through the steps below.

   

  ### **Step 1 — Verify your SMTP configuration**

  Check that the following details in Zuper match exactly what your email provider gave you:

  * SMTP host
  * SMTP port
  * SMTP username
  * SMTP password
  * Encryption type (TLS or SSL)

  Confirm the credentials are still active and that your email provider has enabled sending permissions on the account.

  **Gmail users:** Gmail blocks standard password-based SMTP logins. If you see a "**Username and Password not accepted**" error (535 5.7.8), Gmail is rejecting your password because it requires an App Password for third-party tools. Go to **Setting up Gmail** above, generate an App Password, then edit your account in Zuper and replace the password.

   **Step 2 — Check your email provider’s dashboard**

  Sign in to your provider’s dashboard and look for sending errors, authentication failures, or account restrictions.

  If you are using Gmail or Microsoft 365, generate your app password before filling in the SMTP Password field. See **"Setting up Gmail" or "Setting up Microsoft 365"** above.

  | **Provider** | **Where to check** |
  | :- | :- |
  | **Microsoft 365 / Outlook** | [Microsoft SMTP guide](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission) |
  | **Gmail** | [Gmail SMTP guide](https://support.google.com/mail/answer/7126229) |
  | **Mailgun** | [Mailgun dashboard](https://app.mailgun.com/app/sending/domains) |
  | **SendGrid** | [SendGrid sender authentication](https://app.sendgrid.com/settings/sender_auth) |
  | **SMTP2GO** | [SMTP2GO verified senders](https://app.smtp2go.com/sending/senders) |

  ### **Step 3 — Confirm sender email and domain verification**

  Most SMTP providers require you to verify your sending domain before they will send emails on your behalf. In your provider's dashboard, check that:

  *  Your domain is verified.
  * Your sender email address is verified.
  * ·The From Email you entered in Zuper matches the verified domain.

  ### **Step 4 — Check your DNS records**

  Your domain needs three types of DNS records. Each one helps email servers trust that your messages are genuine. Add these in your domain provider’s dashboard (GoDaddy, Cloudflare, Namecheap, or Google Domains).

  | **Record** | **Purpose** |
  | :- | :- |
  | **SPF** | Tells email servers which servers are allowed to send on behalf of your domain. |
  | **DKIM** | Adds a digital signature to your emails to prove they came from you. |
  | **DMARC** | Use SPF and DKIM together to improve security and deliverability. |

  Use a free tool like [MXToolbox](https://mxtoolbox.com) or [DMARC Analyzer](https://dmarcian.com) to check that your DNS records are set up correctly.

  To set up these records, log in to your domain provider and add the values provided by your SMTP provider. Most providers — including Mailgun, SendGrid, and SMTP2GO — show the exact records you need under a section called **Domain Verification** or **Sender Authentication** in their dashboard.

  **Step 5 — Send a test email**

  1. Send a test email from Zuper.
  2. Check whether it arrives in the intended inbox.
  3. Review the outbound email logs in Zuper.
  4. Check your SMTP provider's logs for delivery details if your plan includes log access.

   If the issue continues, contact [support@zuper.co](mailto:support@zuper.co) with your SMTP provider name, sender email address, a screenshot of any error message, and a screenshot of your SMTP configuration (mask your password before sharing).
</Accordion>

## FAQs

<AccordionGroup>
  <Accordion title="Why does my email show &#x22;Yet to verify&#x22; status?">
    Your account has been saved but has not completed verification yet. This might mean the SMTP credentials are incorrect, or that your provider has not finished processing the connection.

    Check your credentials and confirm you have verified your sending domain in your provider's dashboard. See "Setting up Gmail" or "Setting up Microsoft 365" above for the step-by-step process.
  </Accordion>

  <Accordion title="Can I add more than one outbound email account?">
    Yes. You can add as many accounts as you need. Each one appears in the listing. You can set any one of them as the default at any time.
  </Accordion>

  <Accordion title="What is the difference between &#x22;From Email&#x22; and &#x22;Reply To Email&#x22;?">
    **From Email** is the address your customers see as the sender. **Reply To Email** is where replies go when a customer selects Reply in their email app.

    If you do not fill in Reply To Email, replies go to the From Email address.
  </Accordion>

  <Accordion title="What happens if I do not set up outbound email?">
    Zuper sends all customer-facing emails from [notifications@email.zuperpro.com](mailto:notifications@email.zuperpro.com). Your customers might not recognize this address, which increases the chance of emails going to spam.

    We recommend setting up your own SMTP account.
  </Accordion>

  <Accordion title="Can I use a shared mailbox or alias as the From Email?">
    This depends on your email provider. Most providers support shared mailboxes as sending addresses, provided you have verified the address and your SMTP credentials have permission to send from it.

    Check your provider's documentation for details.
  </Accordion>

  <Accordion title="My emails are going to spam. What should I do?">
    Check that your SPF, DKIM, and DMARC records are correctly set up for your domain. See Step 4 in the Troubleshooting section above.

    Misconfigured or missing DNS records are the most common reason emails land in spam.
  </Accordion>

  <Accordion title="Can I configure multiple outbound email addresses for different franchisees or locations?">
    Yes. In Outbound Email Settings, you can add multiple email accounts — one per franchisee or location. Each account is configured separately with its own SMTP credentials.

    Set the most commonly used account as the default, or specify per-account usage through email templates or workflows.
  </Accordion>
</AccordionGroup>

## **Related articles**

* [Set a default sender email in General Job Settings](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_General_Job_settings#general-settings-options)
* [Create and manage email templates](https://docs.zuper.co/Settings/Miscellaneous/Email_Templates)


## Related topics

- [Configuring General Job Settings](/Settings/Modules/Jobs/Configuring_General_Job_settings.md)
- [Setting up an Instant Estimate Widget](/Zuper_for_Roofing/Website_Widget/Instant_Estimate.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.