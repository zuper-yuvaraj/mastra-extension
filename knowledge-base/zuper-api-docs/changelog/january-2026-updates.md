---
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# January 2026 Updates

:new: **Introducing Trade Type / Business Units** [Trade Types](https://developers.zuper.co/reference/create-trade-type) are designed to help you organize and manage operations more efficiently. With Trade types, you can segment and manage businesses that cut across multiple trades. This enables better reporting, with data grouped by trade, and improves operational efficiency by granting users exclusive access to jobs, quotes, invoices, and more, specific to their assigned trade type(s).

You can associate one or more business unit to the following modules: [Users](https://developers.zuper.co/reference/create-user), [Teams](https://developers.zuper.co/reference/create-team), [Parts & Services](https://developers.zuper.co/reference/create-a-product). All transactional modules support associating a single business unit including [Jobs](https://developers.zuper.co/reference/create-job), [Quotes & Proposals](https://developers.zuper.co/reference/create-a-quote), [Invoices](https://developers.zuper.co/reference/create-a-invoice)

:new: **Support for`pricelist` in Proposal Options** We have added a new string field `pricelist`in <Anchor label="Create New Proposal" target="_blank" href="https://developers.zuper.co/reference/create-a-proposal">Create New Proposal</Anchor>  API to support pricelist on individual options of the proposal.

:new: **Support for`AND/OR` operator in Filter APIs** All our filters were earlier performing AND operation on the filters. With the new update, our filter API now supports a new param `filter_rule_operator` key that you can send `AND` or `OR` to filter if retrieve records as long as any one of the filter is matched.

:new: **Support for`formula` in Product** As part of our CPQ enhancements, you can now associate `formula` directly within the product master. This is now supported in both [CREATE Product](https://developers.zuper.co/reference/create-a-product) and [UPDATE Product](https://developers.zuper.co/reference/update-a-product) API.

⭐ **Measurement Token UOM updates**  We have updated the Unit of Measurement (UOM) for a few default measurement tokens from SF to SQFT for consistency in the [Measurement APIs](https://developers.zuper.co/reference/create-measurement). Incase you are sending the measurements programmatically, please ensure to send the values to reflect with the right UOM.

⭐ **Support for `email_config_uid` in Jobs, Quotes & Invoices**  If you have custom mailbox connected to your Zuper account, you can now define the respective FROM email that needs to be used on an individual job, quote or invoice record. This is helpful if you would like to route mails based on any custom logic.

⭐ **Introducing READ Only API keys**  We have introduced a new read only privilege API key to restrict new API Keys to only GET APIs, this is useful if you are generating an API key just for retrieving the data and don't want the key to be used for any create or update operations.

⭐ **Stripe Customer ID is now returned in Customer API**  If you are a Zuper Pay customer or use Stripe connected to Zuper for payment, our [GET customer API ](https://developers.zuper.co/update/reference/get-all-customers-copy) now also returns the `stripe_customer_id` associated. This is improved based on the [feedback](https://developers.zuper.co/discuss/696bebf689447d554f0d2050) we received on our discussion forum.

**🐞 Assigned Jobs filter bug for Team Leader Role** We have fixed a minor bug in [GET Jobs](https://developers.zuper.co/reference/get-all-jobs) API filter where `filter.assignment_status` as `ASSIGNED` was returning the job even though the job was assigned to only the team and not individual user.