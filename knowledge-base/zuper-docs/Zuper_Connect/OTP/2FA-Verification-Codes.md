---
title: "OTP and 2FA Codes on Connect Numbers"
source: https://docs.zuper.co/Zuper_Connect/OTP/2FA%20Verification%20Codes.md
fetched_at: 2026-10-06T13:30:02.274Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# OTP and 2FA Codes on Connect Numbers

> Learn why some third-party services can't deliver OTP or 2FA verification codes to your Zuper Connect number, and what alternatives to use.

Your Zuper Connect number is a VoIP (Voice over IP) number, provisioned through Plivo. Some third-party services and identity verification platforms may restrict delivery of one-time passwords (OTP) and two-factor authentication (2FA) codes to VoIP numbers. This is a policy decision made by the third-party service.

## What to do instead

For services that require secure account verification, use one of the following:

* A mobile phone number provided by your wireless carrier
* An authenticator app, such as Google Authenticator or Microsoft Authenticator
* Passkeys
* A hardware security key
* Backup verification codes provided by the service

<Tip>
  These methods are not affected by VoIP restrictions and are generally more reliable and secure than SMS based verification.
</Tip>

## What works on your Zuper Connect number

Your Zuper Connect number handles standard business communication without issue:

* Inbound and outbound voice calls
* Inbound and outbound SMS, subject to carrier and messaging regulations
* MMS, where supported
* Customer communication through Zuper Connect

## What may not work on your Zuper Connect number

Some third-party services won't deliver these to a Zuper Connect number:

* SMS verification codes (OTP)
* Two-factor authentication text messages
* Automated verification voice calls
* Account recovery verification messages

Services known to restrict VoIP verification include Google Workspace, Google Accounts, Microsoft, banks, payment providers, and identity verification platforms. Support varies by provider. Some services deliver verification messages successfully. Others do not.

## Why this happens

Many verification providers check the number type before sending an OTP. If they identify the number as VoIP instead of mobile, they may choose not to send the code at all.

When this occurs:

1. The verification request never reaches Plivo.
2. No SMS or voice call is received by Zuper Connect.
3. Nothing appears in your Zuper Connect logs, because the provider never attempted delivery.

## Does enabling geo permissions help?

No. Plivo Geo Permissions only control outbound SMS destinations from your account. They do not affect inbound SMS or voice calls, and they cannot override the delivery policies of third-party providers.

<Warning>
  Enabling additional countries or changing Geo Permission settings will not improve OTP or 2FA delivery.
</Warning>

## Will voice verification calls work?

Possibly, but they are not guaranteed. Some providers offer a verification call as an alternative to SMS. Whether it works depends entirely on the provider's policy:

* The provider may recognize the number as valid and place the call successfully.
* The provider may detect a VoIP number and skip the call entirely.

Since this decision is made by the third-party provider, Zuper Connect cannot guarantee support for verification calls.

## FAQs

<AccordionGroup>
  <Accordion title="Why don't I see the OTP attempt in my Zuper Connect logs?">
    If nothing appears in your logs, the provider likely never sent the code. This is common when a provider blocks verification delivery to VoIP numbers.
  </Accordion>

  <Accordion title="Can Zuper Connect or Plivo whitelist my number?">
    No. Verification policies are controlled entirely by the third-party service sending the OTP. Neither Zuper Connect nor Plivo can override these restrictions.
  </Accordion>

  <Accordion title="Is this a Zuper Connect issue?">
    No. Your Zuper Connect number is functioning normally for business communications. The limitation exists because some verification providers intentionally restrict OTP and 2FA delivery to VoIP numbers.
  </Accordion>

  <Accordion title="Which services are affected?">
    There is no universal list. Each provider maintains its own verification policy, and support may change over time. Some providers allow verification to VoIP numbers, while others restrict it for security and fraud prevention.
  </Accordion>
</AccordionGroup>

Zuper Connect numbers are designed for business communications, such as voice calls and customer messaging. Because they are classified as VoIP numbers, some third-party services may not send OTP or 2FA verification messages or calls to them. If you require reliable account verification, use a mobile carrier number or an alternative method such as an authenticator app or passkey.


## Related topics

- [Getting a New Phone number](/Zuper_Connect/Setup-Zuper-Connect/getting_zuper_phone_number.md)
- [Using Connect on Web](/Zuper_Connect/Using_Connect_on_web.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.