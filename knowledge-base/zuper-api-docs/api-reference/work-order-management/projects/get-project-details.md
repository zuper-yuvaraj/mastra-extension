---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Project Details

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}.zuperpro.com/api",
      "variables": {
        "dc-region": {
          "default": "dc-region"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "x-api-key"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/projects/{project_uid}": {
      "get": {
        "summary": "Get Project Details",
        "description": "",
        "operationId": "get-project-details",
        "parameters": [
          {
            "name": "project_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"project_uid\": \"90c2dfd0-d185-11ee-bd2e-471adde8df3c\",\n        \"project_prefix\": \"Test \",\n        \"project_number\": 5,\n        \"project_icon\": \"Testing\",\n        \"project_name\": \"color code\",\n        \"project_category\": {\n            \"category_uid\": \"63932f00-c3f8-11ee-8e97-5d343b8a24b1\",\n            \"category_name\": \"textttst\",\n            \"display_order\": 1,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-02-05T07:30:08.514Z\",\n            \"updated_at\": \"2024-02-05T10:28:56.524Z\",\n            \"__v\": 0,\n            \"category_color\": \"#000\",\n            \"category_description\": \"<p>ff<br></p>\",\n            \"estimated_duration\": {\n                \"days\": 1,\n                \"hours\": 1,\n                \"minutes\": 1\n            }\n        },\n        \"project_priority\": \"MEDIUM\",\n        \"project_description\": \"some description about project\",\n        \"project_template\": {\n            \"template_uid\": \"51e984e1-964d-11ed-a3d1-295b79eb7eaa\",\n            \"template_name\": \"Test\",\n            \"template_config\": {\n                \"project_prefix\": \"Testing\",\n                \"project_icon\": \"color code\",\n                \"project_name\": \"FREE_TEXT\",\n                \"project_priority\": \"URGENT\",\n                \"project_description\": \"project_description\",\n                \"project_duration\": 12,\n                \"project_tags\": [\n                    \"one\",\n                    \"two\"\n                ],\n                \"project_attachments\": [\n                    {\n                        \"attachment_uid\": \"51e984e0-964d-11ed-a3d1-295b79eb7eaa\",\n                        \"file_name\": \"test\",\n                        \"url\": \"test.com\",\n                        \"_id\": \"63c670fa24d6764ba006432b\",\n                        \"created_at\": \"2023-01-17T09:57:14.930Z\"\n                    }\n                ],\n                \"custom_fields\": [\n                    {\n                        \"label\": \"Text Input\",\n                        \"value\": \"\",\n                        \"type\": \"SINGLE_LINE\",\n                        \"hide_to_fe\": false,\n                        \"hide_field\": false,\n                        \"read_only\": false,\n                        \"_id\": \"63c670fa24d6764ba006432c\"\n                    },\n                    {\n                        \"label\": \"File Input\",\n                        \"value\": \"\",\n                        \"type\": \"FILE\",\n                        \"hide_to_fe\": false,\n                        \"hide_field\": false,\n                        \"read_only\": false,\n                        \"_id\": \"63c670fa24d6764ba006432d\"\n                    }\n                ]\n            },\n            \"is_deleted\": false,\n            \"is_active\": true\n        },\n        \"project_current_status\": {\n            \"project_status_uid\": \"9c481ec0-6b19-11ed-bae3-7da4b580c234\",\n            \"project_status_name\": \"Started\",\n            \"project_status_type\": \"STARTED\",\n            \"project_status_color\": \"rgb\"\n        },\n        \"project_completion_percentage\": 90,\n        \"project_start_date\": \"2021-11-01T18:30:00.000Z\",\n        \"project_end_date\": \"2021-12-01T18:30:00.000Z\",\n        \"project_actual_start_date\": \"2021-11-01T18:30:00.000Z\",\n        \"project_actual_end_date\": \"2021-12-01T18:30:00.000Z\",\n        \"project_service_address\": {\n            \"landmark\": \"near jain college\",\n            \"city\": \"Thoraipakkam \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Jain College, D B Jain College main enterence, Jothi Nagar\",\n            \"country\": \"India\",\n            \"zip_code\": \"600097\",\n            \"geo_cordinates\": [\n                12.9469543,\n                80.2400814\n            ],\n            \"first_name\": \"Test\",\n            \"last_name\": \"User\",\n            \"phone_number\": \"1234567890\",\n            \"email\": \"testuser@yopmail.com\"\n        },\n        \"project_billing_address\": {\n            \"landmark\": \"near jain college\",\n            \"city\": \"Thoraipakkam \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Jain College, D B Jain College main enterence, Jothi Nagar\",\n            \"country\": \"India\",\n            \"zip_code\": \"600097\",\n            \"geo_cordinates\": [\n                12.9469543,\n                80.2400814\n            ],\n            \"first_name\": \"Test\",\n            \"last_name\": \"User\",\n            \"phone_number\": \"1234567890\",\n            \"email\": \"testuser@yopmail.com\"\n        },\n        \"project_due_date\": \"2021-12-01T18:30:00.000Z\",\n        \"organization\": {\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"organization_address\": {\n                \"city\": \"Chennai \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Amelio Early Education - Ascendas IT Park, CSIR Road, Tharamani, India\",\n                \"landmark\": \"\",\n                \"geo_cordinates\": [\n                    12.9855685,\n                    80.2461915\n                ],\n                \"first_name\": \"\",\n                \"last_name\": \"\",\n                \"phone_number\": \"\",\n                \"email\": \"\"\n            },\n            \"organization_name\": \"Ascendas\",\n            \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n            \"organization_email\": \"ascendas@abc.com\",\n            \"organization_description\": \"<p><span style=\\\"background-color: rgb(255, 255, 0); color: #000000;\\\">Ascendas</span> is located in <strong>Taramani</strong>. It has <span style=\\\"background-color: rgb(239, 239, 239); color: #ff0000;\\\">3 phases. </span>asd sad gfgf fgfg dfdf dfrg dfdf dfddd ddfd dfdf dfd asdasd</p>\\n<ol>\\n<li>one</li>\\n<li>two</li>\\n<li>three</li></ol><p><a href=\\\"https://www.apple.com/in/apple-watch-ultra/\\\">link</a><br></p><ol>\\n</ol>\",\n            \"organization_billing_address\": {\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Ascendas Phase 1\",\n                \"landmark\": \"Near Taramani bus stand\",\n                \"geo_cordinates\": [\n                    0,\n                    0\n                ],\n                \"first_name\": \"\",\n                \"last_name\": \"\",\n                \"phone_number\": \"\",\n                \"email\": \"\"\n            },\n            \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n            \"no_of_customers\": 43,\n            \"custom_fields\": [\n                {\n                    \"label\": \"LookUp\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6401c0251c380c4e487555a6\"\n                }\n            ],\n            \"created_at\": \"2021-03-11T02:32:48.537Z\",\n            \"updated_at\": \"2023-03-14T14:29:04.606Z\"\n        },\n        \"customer\": {\n            \"customer_first_name\": \"Mark\",\n            \"customer_email\": \"gprasath630@gmail.com\",\n            \"customer_company_name\": \"koffee Co\",\n            \"customer_uid\": \"63bc8020-4858-11e8-83d8-9df89bc5d31b\",\n            \"updated_at\": \"2023-03-16T11:42:59.166Z\",\n            \"created_at\": \"2018-04-25T07:15:10.242Z\",\n            \"is_deleted\": false,\n            \"custom_fields\": [\n                {\n                    \"label\": \"Gorgias ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a22\"\n                },\n                {\n                    \"label\": \"Image\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a23\"\n                },\n                {\n                    \"label\": \"Sage Contact ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a24\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a25\"\n                },\n                {\n                    \"label\": \"Date And Time\",\n                    \"value\": \"2023-02-15 06:30:00\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a26\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a27\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a28\"\n                },\n                {\n                    \"label\": \"LookUp\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a29\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a2a\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a2b\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"CHOOSE OPTION\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a2c\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6406d2175f58013486104a2d\"\n                },\n                {\n                    \"label\": \"Field Visit Status\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6129dc26c31f222a4c61b771\"\n                },\n                {\n                    \"label\": \"Zendesk ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6129dc26c31f222a4c61b772\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2020-10-11 12:00:00\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6129dc26c31f222a4c61b773\"\n                },\n                {\n                    \"label\": \"Test\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6129dc26c31f222a4c61b778\"\n                },\n                {\n                    \"label\": \"Zoho CRM Account ID\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Zoho Contact 1\",\n                    \"group_uid\": \"81de6ea0-87e9-11eb-8f74-21a93c8b3c12\",\n                    \"_id\": \"60e407473bb51177f347b921\"\n                },\n                {\n                    \"label\": \"Zoho id\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Zoho Contact 1\",\n                    \"group_uid\": \"81de6ea0-87e9-11eb-8f74-21a93c8b3c12\",\n                    \"_id\": \"60e407473bb51177f347b922\"\n                },\n                {\n                    \"label\": \"Test Field\",\n                    \"value\": \"test field\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": true,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6093b51f0930c169f0d0612b\"\n                },\n                {\n                    \"label\": \"Barcode\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6093b51f0930c169f0d0612c\"\n                },\n                {\n                    \"label\": \"Customer Group\",\n                    \"value\": \"General \",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6093b51f0930c169f0d0612d\"\n                },\n                {\n                    \"label\": \"Hot Notes\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6093b51f0930c169f0d0612e\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"60519dff16a8864d2cc2e6e1\"\n                },\n                {\n                    \"label\": \"PAN Card\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"601b87568fbcc31bff8bef12\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2020-10-12T04:30:00.000Z\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Airport Customer\",\n                    \"group_uid\": \"55c53270-fc0e-11ea-93fa-9513a7784735\",\n                    \"_id\": \"5f828badf4bc3f35d8d5a518\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": true,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Airport Customer\",\n                    \"group_uid\": \"55c53270-fc0e-11ea-93fa-9513a7784735\",\n                    \"_id\": \"5f828badf4bc3f35d8d5a519\"\n                },\n                {\n                    \"label\": \"TAX registration no\",\n                    \"value\": \"\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"5f828badf4bc3f35d8d5a51a\"\n                },\n                {\n                    \"label\": \"Contact Person Name\",\n                    \"value\": \"\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"5f828badf4bc3f35d8d5a51b\"\n                },\n                {\n                    \"label\": \"Contact Person Number\",\n                    \"value\": \"\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"5f828badf4bc3f35d8d5a51c\"\n                },\n                {\n                    \"label\": \"Type of Business\",\n                    \"value\": \"Hardware Company\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"5f828badf4bc3f35d8d5a51d\"\n                },\n                {\n                    \"label\": \"Zoho Books Contact ID\",\n                    \"value\": \"2677134000000149028\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"60e406ef3bb51177f347b8e6\"\n                },\n                {\n                    \"label\": \"Quickbooks ID\",\n                    \"value\": \"97\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"60b8d54ef3ee4e2daad6bd99\"\n                }\n            ],\n            \"customer_contact_no\": {\n                \"work\": \"9600970166\"\n            },\n            \"is_active\": true,\n            \"customer_last_name\": \"Arnold\",\n            \"accounts\": {\n                \"ltv\": 11628817.246,\n                \"receivables\": 126285.53199999999,\n                \"credits\": 15215.942\n            }\n        },\n        \"properties\": [\n            {\n                \"property\": {\n                    \"no_of_jobs\": 1,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"property_uid\": \"b7c98360-5e9f-11eb-98dc-79c25d781098\",\n                    \"property_name\": \"Abbotts Way School\",\n                    \"property_address\": {\n                        \"city\": \"Meare\",\n                        \"state\": \"\",\n                        \"street\": \"\",\n                        \"country\": \"\",\n                        \"landmark\": \"St Marys Road\",\n                        \"zip_code\": \"BA6 9SR\"\n                    },\n                    \"custom_fields\": [\n                        {\n                            \"hide_to_fe\": false,\n                            \"_id\": \"600e09140568ea403df944c5\",\n                            \"label\": \"Zoho Site ID\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\"\n                        }\n                    ],\n                    \"created_at\": \"2021-01-24T23:56:04.120Z\",\n                    \"updated_at\": \"2021-01-24T23:56:04.122Z\"\n                }\n            }\n        ],\n        \"assets\": [\n            {\n                \"asset\": {\n                    \"asset_code\": \"AC002\",\n                    \"asset_name\": \"Air Conditioner\",\n                    \"asset_quantity\": 1,\n                    \"purchase_date\": \"2019-12-02T18:30:00.000Z\",\n                    \"warranty_expiry_date\": \"2019-11-28T18:29:00.000Z\",\n                    \"placed_in_service\": \"2019-11-28T18:30:00.000Z\",\n                    \"asset_uid\": \"596b4dc0-025d-11ea-af45-bd1d48d9fadb\",\n                    \"updated_at\": \"2022-08-18T06:02:03.456Z\",\n                    \"created_at\": \"2019-11-08T19:24:14.366Z\",\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"custom_fields\": [\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab170\"\n                        },\n                        {\n                            \"label\": \"Date Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab171\"\n                        },\n                        {\n                            \"label\": \"Email\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab172\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab173\"\n                        },\n                        {\n                            \"label\": \"DateTime Input\",\n                            \"value\": \"\",\n                            \"type\": \"DATETIME\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab174\"\n                        },\n                        {\n                            \"label\": \"Text Area\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab175\"\n                        },\n                        {\n                            \"label\": \"Select (Hidden to FE)\",\n                            \"value\": \"value one\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": true,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab176\"\n                        },\n                        {\n                            \"label\": \"Text Input (Read only)\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": true,\n                            \"_id\": \"62fdd5cae435f974531ab177\"\n                        },\n                        {\n                            \"label\": \"Select (Required)\",\n                            \"value\": \"Opt 1\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab178\"\n                        },\n                        {\n                            \"label\": \"Select\",\n                            \"value\": \"value one\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab179\"\n                        },\n                        {\n                            \"label\": \"Select\",\n                            \"value\": \"value one\",\n                            \"type\": \"SINGLE_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab17a\"\n                        },\n                        {\n                            \"label\": \"Checkbox\",\n                            \"value\": \"\",\n                            \"type\": \"MULTI_ITEM\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab17b\"\n                        },\n                        {\n                            \"label\": \"Text Input (Number validation)\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab17c\"\n                        },\n                        {\n                            \"label\": \"Radio\",\n                            \"value\": \"value one\",\n                            \"type\": \"RADIO\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab17d\"\n                        },\n                        {\n                            \"label\": \"File Input\",\n                            \"value\": \"\",\n                            \"type\": \"FILE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"62fdd5cae435f974531ab17e\"\n                        },\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"group_name\": \"Desktop Details\",\n                            \"group_uid\": \"f40fe4e0-0a17-11eb-88df-13c7c7a7e229\",\n                            \"_id\": \"62fdd5cae435f974531ab17f\"\n                        },\n                        {\n                            \"label\": \"Text Input 1\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"group_name\": \"Desktop Details\",\n                            \"group_uid\": \"f40fe4e0-0a17-11eb-88df-13c7c7a7e229\",\n                            \"_id\": \"62fdd5cae435f974531ab180\"\n                        },\n                        {\n                            \"label\": \"File Input\",\n                            \"value\": \"\",\n                            \"type\": \"FILE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"group_name\": \"Desktop Details\",\n                            \"group_uid\": \"f40fe4e0-0a17-11eb-88df-13c7c7a7e229\",\n                            \"_id\": \"62fdd5cae435f974531ab181\"\n                        },\n                        {\n                            \"label\": \"W/o cat CF\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"group_name\": \"Group w/o category\",\n                            \"group_uid\": \"6d15a230-0ff2-11ed-a859-596e05a269cd\",\n                            \"_id\": \"62fdd5cae435f974531ab182\"\n                        }\n                    ],\n                    \"asset_serial_number\": null,\n                    \"asset_category\": \"5e986aadcbb0a15839381b24\",\n                    \"asset_image\": null,\n                    \"asset_status\": \"\"\n                }\n            }\n        ],\n        \"jobs\": [\n            {\n                \"job\": {\n                    \"job_uid\": \"b917bbf0-c64b-11ec-a683-c7d53138532e\",\n                    \"prefix\": \"2022 -\",\n                    \"job_title\": \"test\",\n                    \"job_priority\": \"HIGH\",\n                    \"scheduled_start_time\": \"2023-03-30T07:34:00.000Z\",\n                    \"scheduled_end_time\": \"2023-03-30T16:34:00.000Z\",\n                    \"customer_address\": {\n                        \"city\": \"Chennai \",\n                        \"state\": \"Tamil Nadu \",\n                        \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar\",\n                        \"country\": \"India\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"600017\",\n                        \"geo_cordinates\": [\n                            13.0242729,\n                            80.20992969999999\n                        ],\n                        \"first_name\": \"Charles\",\n                        \"last_name\": \"Customer\",\n                        \"email\": \"Charles@Zuper.co\"\n                    },\n                    \"customer_billing_address\": {\n                        \"city\": \"Chennai\",\n                        \"state\": \"Tamil Nadu\",\n                        \"street\": \"22E ,Thiru Vi Ka Industrial Estate ,Saidapet\",\n                        \"country\": \"India\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"600032\",\n                        \"first_name\": \"Charles\",\n                        \"last_name\": \"Customer\",\n                        \"email\": \"Charles@Zuper.co\"\n                    },\n                    \"custom_fields\": [\n                        {\n                            \"label\": \"J-ID\",\n                            \"value\": \"30143524\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccb7\"\n                        },\n                        {\n                            \"label\": \"Last Visit\",\n                            \"value\": \"2022-04-19 00:00:00\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccb8\"\n                        },\n                        {\n                            \"label\": \"Next Visit\",\n                            \"value\": \"2022-05-17 00:00:00\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccb9\"\n                        },\n                        {\n                            \"label\": \"Created\",\n                            \"value\": \"2020-09-08 00:00:00\",\n                            \"type\": \"DATE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccba\"\n                        },\n                        {\n                            \"label\": \"Job Start\",\n                            \"value\": \"2020-09-08 00:00:00\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccbb\"\n                        },\n                        {\n                            \"label\": \"Job #\",\n                            \"value\": \"45\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccbc\"\n                        },\n                        {\n                            \"label\": \"Billing type\",\n                            \"value\": \"Per visit\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccbd\"\n                        },\n                        {\n                            \"label\": \"Visits assigned to\",\n                            \"value\": \"Orlando Truck 3\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccbe\"\n                        },\n                        {\n                            \"label\": \"Total $\",\n                            \"value\": \"60\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccbf\"\n                        },\n                        {\n                            \"label\": \"Line items\",\n                            \"value\": \"Monthly landscape maintenance\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccc0\"\n                        },\n                        {\n                            \"label\": \"Property Square Footage\",\n                            \"value\": \"5292.0 M\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccc1\"\n                        },\n                        {\n                            \"label\": \"Labor cost\",\n                            \"value\": \"39\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccc2\"\n                        },\n                        {\n                            \"label\": \"Automatic payments\",\n                            \"value\": \"No\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"626976fb5c29f9288365ccc3\"\n                        },\n                        {\n                            \"label\": \"Gorgias Ticket ID\",\n                            \"value\": \"Test\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_to_fe\": false,\n                            \"hide_field\": false,\n                            \"read_only\": false,\n                            \"_id\": \"63f8a36a4bdfc724d5715672\"\n                        }\n                    ],\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-04-27T17:01:47.187Z\",\n                    \"updated_at\": \"2023-03-16T07:11:51.804Z\",\n                    \"work_order_number\": 5470,\n                    \"due_date\": \"2023-01-31T00:00:00.000Z\"\n                }\n            }\n        ],\n        \"attachments\": [\n            {\n                \"attachment_uid\": \"908f73c0-d185-11ee-bd2e-471adde8df3c\",\n                \"file_name\": \"test\",\n                \"url\": \"example.com\",\n                \"created_by\": {\n                    \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n                    \"first_name\": \"Jerin\",\n                    \"last_name\": \"Aj\",\n                    \"email\": \"jerin@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"J001\",\n                    \"prefix\": null,\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg\",\n                    \"hourly_labor_charge\": 54.59,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-02-16T10:00:42.000Z\",\n                    \"updated_at\": \"2023-09-15T07:08:08.000Z\"\n                },\n                \"visible_to_customer\": false,\n                \"created_at\": \"2024-02-22T13:23:28.482Z\"\n            }\n        ],\n        \"project_manager\": {\n            \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n            \"first_name\": \"Raghav\",\n            \"last_name\": \"G\",\n            \"email\": \"raghav@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"7397722822\",\n            \"designation\": \"CTO\",\n            \"emp_code\": \"1234\",\n            \"prefix\": null,\n            \"work_phone_number\": \"7397722822\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n            \"hourly_labor_charge\": 500,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-01-16T13:59:59.000Z\",\n            \"updated_at\": \"2024-01-16T13:59:59.000Z\"\n        },\n        \"project_tags\": [\n            \"tag 1\",\n            \"tag 2\"\n        ],\n        \"custom_fields\": [\n            {\n                \"label\": \"Sage Customer ID\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"65d74ad07c7dec84e778b6cc\"\n            }\n        ],\n        \"project_assigned_to\": [\n            {\n                \"user\": {\n                    \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n                    \"first_name\": \"Raghav\",\n                    \"last_name\": \"G\",\n                    \"email\": \"raghav@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"7397722822\",\n                    \"designation\": \"CTO\",\n                    \"emp_code\": \"1234\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"7397722822\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n                    \"hourly_labor_charge\": 500,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-01-16T13:59:59.000Z\",\n                    \"updated_at\": \"2024-01-16T13:59:59.000Z\"\n                },\n                \"team\": {\n                    \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n                    \"team_name\": \"SF Team\",\n                    \"team_color\": \"#3498db\",\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            }\n        ],\n        \"project_public_url\": \"hello.com\",\n        \"is_deleted\": false,\n        \"is_active\": true,\n        \"created_by\": {\n            \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n            \"first_name\": \"Jerin\",\n            \"last_name\": \"Aj\",\n            \"email\": \"jerin@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"J001\",\n            \"prefix\": null,\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg\",\n            \"hourly_labor_charge\": 54.59,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2022-02-16T10:00:42.000Z\",\n            \"updated_at\": \"2023-09-15T07:08:08.000Z\"\n        },\n          \"config\": {\n            \"dependency\": {\n                \"day_shifting\": \"MAINTAIN\",\n                \"consider_weekend\": true\n            }\n        },\n        \"products\": [\n            {\n                \"line_item_uid\": \"4ad3e947-e94e-4abc-800c-4021f9ab69f5\",\n                \"line_item_type\": \"ITEM\",\n                \"product_ref_id\": \"662a0143048d9b94b311311f\",\n                \"location\": \"662b9deeb53b938957d94142\",\n                \"product_id\": \"12345\",\n                \"product_uid\": \"853ba100-02d2-11ef-a901-1f3e4d8db41e\",\n                \"location_uid\": \"7d905c10-03c8-11ef-94cd-01f7121eb721\",\n                \"group_uid\": \"a03a735c-65a7-4aca-b692-be803413f5e2\",\n                \"group_name\": \"general\",\n                \"group\": \"666ace8012141b49b6ff98d3\",\n                \"location_name\": \"chennai\",\n                \"image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/702eaeb0-02d2-11ef-a901-1f3e4d8db41e.png\",\n                \"name\": \"AC\",\n                \"brand\": \"ups\",\n                \"description\": \"\",\n                \"planned\": {\n                    \"quantity\": 1,\n                    \"serial_nos\": []\n                },\n                \"available\": {\n                    \"quantity\": 1,\n                    \"serial_nos\": []\n                },\n                \"used\": {\n                    \"quantity\": 0,\n                    \"serial_nos\": []\n                },\n                \"unit_price\": 1,\n                \"purchase_price\": null,\n                \"discount_type\": \"FIXED\",\n                \"total\": 1,\n                \"_id\": \"666c335303437795e7436cc7\"\n            },\n            {\n                \"line_item_uid\": \"c099d7f4-8747-4b7d-b8db-d6053df247a0\",\n                \"line_item_type\": \"HEADER\",\n                \"name\": \"HEADER MODIFIED\",\n                \"planned\": {\n                    \"serial_nos\": []\n                },\n                \"available\": {\n                    \"serial_nos\": []\n                },\n                \"used\": {\n                    \"serial_nos\": []\n                },\n                \"discount_type\": \"FIXED\",\n                \"_id\": \"666c36f103437795e7436d1f\"\n            }\n        ],\n        \"project_status\": [],\n        \"created_at\": \"2024-02-22T13:23:28.505Z\",\n        \"updated_at\": \"2024-02-22T13:23:28.505Z\",\n        \"project_number_string\": \"Test 1\",\n        \"project_priority_index\": 1,\n        \"__v\": 0\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "90c2dfd0-d185-11ee-bd2e-471adde8df3c"
                        },
                        "project_prefix": {
                          "type": "string",
                          "example": "Test "
                        },
                        "project_number": {
                          "type": "integer",
                          "example": 5,
                          "default": 0
                        },
                        "project_icon": {
                          "type": "string",
                          "example": "Testing"
                        },
                        "project_name": {
                          "type": "string",
                          "example": "color code"
                        },
                        "project_category": {
                          "type": "object",
                          "properties": {
                            "category_uid": {
                              "type": "string",
                              "example": "63932f00-c3f8-11ee-8e97-5d343b8a24b1"
                            },
                            "category_name": {
                              "type": "string",
                              "example": "textttst"
                            },
                            "display_order": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-02-05T07:30:08.514Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-02-05T10:28:56.524Z"
                            },
                            "__v": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "category_color": {
                              "type": "string",
                              "example": "#000"
                            },
                            "category_description": {
                              "type": "string",
                              "example": "<p>ff<br></p>"
                            },
                            "estimated_duration": {
                              "type": "object",
                              "properties": {
                                "days": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "hours": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "minutes": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "project_priority": {
                          "type": "string",
                          "example": "MEDIUM"
                        },
                        "project_description": {
                          "type": "string",
                          "example": "some description about project"
                        },
                        "project_template": {
                          "type": "object",
                          "properties": {
                            "template_uid": {
                              "type": "string",
                              "example": "51e984e1-964d-11ed-a3d1-295b79eb7eaa"
                            },
                            "template_name": {
                              "type": "string",
                              "example": "Test"
                            },
                            "template_config": {
                              "type": "object",
                              "properties": {
                                "project_prefix": {
                                  "type": "string",
                                  "example": "Testing"
                                },
                                "project_icon": {
                                  "type": "string",
                                  "example": "color code"
                                },
                                "project_name": {
                                  "type": "string",
                                  "example": "FREE_TEXT"
                                },
                                "project_priority": {
                                  "type": "string",
                                  "example": "URGENT"
                                },
                                "project_description": {
                                  "type": "string",
                                  "example": "project_description"
                                },
                                "project_duration": {
                                  "type": "integer",
                                  "example": 12,
                                  "default": 0
                                },
                                "project_tags": {
                                  "type": "array",
                                  "items": {
                                    "type": "string",
                                    "example": "one"
                                  }
                                },
                                "project_attachments": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "attachment_uid": {
                                        "type": "string",
                                        "example": "51e984e0-964d-11ed-a3d1-295b79eb7eaa"
                                      },
                                      "file_name": {
                                        "type": "string",
                                        "example": "test"
                                      },
                                      "url": {
                                        "type": "string",
                                        "example": "test.com"
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "63c670fa24d6764ba006432b"
                                      },
                                      "created_at": {
                                        "type": "string",
                                        "example": "2023-01-17T09:57:14.930Z"
                                      }
                                    }
                                  }
                                },
                                "custom_fields": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string",
                                        "example": "Text Input"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "SINGLE_LINE"
                                      },
                                      "hide_to_fe": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "hide_field": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "read_only": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "63c670fa24d6764ba006432c"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            }
                          }
                        },
                        "project_current_status": {
                          "type": "object",
                          "properties": {
                            "project_status_uid": {
                              "type": "string",
                              "example": "9c481ec0-6b19-11ed-bae3-7da4b580c234"
                            },
                            "project_status_name": {
                              "type": "string",
                              "example": "Started"
                            },
                            "project_status_type": {
                              "type": "string",
                              "example": "STARTED"
                            },
                            "project_status_color": {
                              "type": "string",
                              "example": "rgb"
                            }
                          }
                        },
                        "project_completion_percentage": {
                          "type": "integer",
                          "example": 90,
                          "default": 0
                        },
                        "project_start_date": {
                          "type": "string",
                          "example": "2021-11-01T18:30:00.000Z"
                        },
                        "project_end_date": {
                          "type": "string",
                          "example": "2021-12-01T18:30:00.000Z"
                        },
                        "project_actual_start_date": {
                          "type": "string",
                          "example": "2021-11-01T18:30:00.000Z"
                        },
                        "project_actual_end_date": {
                          "type": "string",
                          "example": "2021-12-01T18:30:00.000Z"
                        },
                        "project_service_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": "near jain college"
                            },
                            "city": {
                              "type": "string",
                              "example": "Thoraipakkam "
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu "
                            },
                            "street": {
                              "type": "string",
                              "example": "Jain College, D B Jain College main enterence, Jothi Nagar"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600097"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9469543,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Test"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "User"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "1234567890"
                            },
                            "email": {
                              "type": "string",
                              "example": "testuser@yopmail.com"
                            }
                          }
                        },
                        "project_billing_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": "near jain college"
                            },
                            "city": {
                              "type": "string",
                              "example": "Thoraipakkam "
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu "
                            },
                            "street": {
                              "type": "string",
                              "example": "Jain College, D B Jain College main enterence, Jothi Nagar"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600097"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9469543,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Test"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "User"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": "1234567890"
                            },
                            "email": {
                              "type": "string",
                              "example": "testuser@yopmail.com"
                            }
                          }
                        },
                        "project_due_date": {
                          "type": "string",
                          "example": "2021-12-01T18:30:00.000Z"
                        },
                        "organization": {
                          "type": "object",
                          "properties": {
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "organization_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Chennai "
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu "
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Amelio Early Education - Ascendas IT Park, CSIR Road, Tharamani, India"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9855685,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": ""
                                },
                                "email": {
                                  "type": "string",
                                  "example": ""
                                }
                              }
                            },
                            "organization_name": {
                              "type": "string",
                              "example": "Ascendas"
                            },
                            "organization_logo": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg"
                            },
                            "organization_email": {
                              "type": "string",
                              "example": "ascendas@abc.com"
                            },
                            "organization_description": {
                              "type": "string",
                              "example": "<p><span style=\"background-color: rgb(255, 255, 0); color: #000000;\">Ascendas</span> is located in <strong>Taramani</strong>. It has <span style=\"background-color: rgb(239, 239, 239); color: #ff0000;\">3 phases. </span>asd sad gfgf fgfg dfdf dfrg dfdf dfddd ddfd dfdf dfd asdasd</p>\n<ol>\n<li>one</li>\n<li>two</li>\n<li>three</li></ol><p><a href=\"https://www.apple.com/in/apple-watch-ultra/\">link</a><br></p><ol>\n</ol>"
                            },
                            "organization_billing_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Chennai"
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Ascendas Phase 1"
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": "Near Taramani bus stand"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  }
                                },
                                "first_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": ""
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": ""
                                },
                                "email": {
                                  "type": "string",
                                  "example": ""
                                }
                              }
                            },
                            "organization_uid": {
                              "type": "string",
                              "example": "11d86a70-8212-11eb-ab1f-1ddf213d24b4"
                            },
                            "no_of_customers": {
                              "type": "integer",
                              "example": 43,
                              "default": 0
                            },
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "LookUp"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "LOOKUP"
                                  },
                                  "hide_to_fe": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "hide_field": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "read_only": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "6401c0251c380c4e487555a6"
                                  }
                                }
                              }
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2021-03-11T02:32:48.537Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-03-14T14:29:04.606Z"
                            }
                          }
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "customer_first_name": {
                              "type": "string",
                              "example": "Mark"
                            },
                            "customer_email": {
                              "type": "string",
                              "example": "gprasath630@gmail.com"
                            },
                            "customer_company_name": {
                              "type": "string",
                              "example": "koffee Co"
                            },
                            "customer_uid": {
                              "type": "string",
                              "example": "63bc8020-4858-11e8-83d8-9df89bc5d31b"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-03-16T11:42:59.166Z"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2018-04-25T07:15:10.242Z"
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "Gorgias ID"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "SINGLE_LINE"
                                  },
                                  "hide_to_fe": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "hide_field": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "read_only": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "6406d2175f58013486104a22"
                                  }
                                }
                              }
                            },
                            "customer_contact_no": {
                              "type": "object",
                              "properties": {
                                "work": {
                                  "type": "string",
                                  "example": "9600970166"
                                }
                              }
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "customer_last_name": {
                              "type": "string",
                              "example": "Arnold"
                            },
                            "accounts": {
                              "type": "object",
                              "properties": {
                                "ltv": {
                                  "type": "number",
                                  "example": 11628817.246,
                                  "default": 0
                                },
                                "receivables": {
                                  "type": "number",
                                  "example": 126285.532,
                                  "default": 0
                                },
                                "credits": {
                                  "type": "number",
                                  "example": 15215.942,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "assets": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "asset": {
                                "type": "object",
                                "properties": {
                                  "asset_code": {
                                    "type": "string",
                                    "example": "AC002"
                                  },
                                  "asset_name": {
                                    "type": "string",
                                    "example": "Air Conditioner"
                                  },
                                  "asset_quantity": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "purchase_date": {
                                    "type": "string",
                                    "example": "2019-12-02T18:30:00.000Z"
                                  },
                                  "warranty_expiry_date": {
                                    "type": "string",
                                    "example": "2019-11-28T18:29:00.000Z"
                                  },
                                  "placed_in_service": {
                                    "type": "string",
                                    "example": "2019-11-28T18:30:00.000Z"
                                  },
                                  "asset_uid": {
                                    "type": "string",
                                    "example": "596b4dc0-025d-11ea-af45-bd1d48d9fadb"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-08-18T06:02:03.456Z"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2019-11-08T19:24:14.366Z"
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "custom_fields": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "Text Input"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_LINE"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "read_only": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "62fdd5cae435f974531ab170"
                                        }
                                      }
                                    }
                                  },
                                  "asset_serial_number": {},
                                  "asset_category": {
                                    "type": "string",
                                    "example": "5e986aadcbb0a15839381b24"
                                  },
                                  "asset_image": {},
                                  "asset_status": {
                                    "type": "string",
                                    "example": ""
                                  }
                                }
                              }
                            }
                          }
                        },
                        "jobs": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "job": {
                                "type": "object",
                                "properties": {
                                  "job_uid": {
                                    "type": "string",
                                    "example": "b917bbf0-c64b-11ec-a683-c7d53138532e"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "2022 -"
                                  },
                                  "job_title": {
                                    "type": "string",
                                    "example": "test"
                                  },
                                  "job_priority": {
                                    "type": "string",
                                    "example": "HIGH"
                                  },
                                  "scheduled_start_time": {
                                    "type": "string",
                                    "example": "2023-03-30T07:34:00.000Z"
                                  },
                                  "scheduled_end_time": {
                                    "type": "string",
                                    "example": "2023-03-30T16:34:00.000Z"
                                  },
                                  "customer_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Chennai "
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Tamil Nadu "
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar"
                                      },
                                      "country": {
                                        "type": "string",
                                        "example": "India"
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "zip_code": {
                                        "type": "string",
                                        "example": "600017"
                                      },
                                      "geo_cordinates": {
                                        "type": "array",
                                        "items": {
                                          "type": "number",
                                          "example": 13.0242729,
                                          "default": 0
                                        }
                                      },
                                      "first_name": {
                                        "type": "string",
                                        "example": "Charles"
                                      },
                                      "last_name": {
                                        "type": "string",
                                        "example": "Customer"
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": "Charles@Zuper.co"
                                      }
                                    }
                                  },
                                  "customer_billing_address": {
                                    "type": "object",
                                    "properties": {
                                      "city": {
                                        "type": "string",
                                        "example": "Chennai"
                                      },
                                      "state": {
                                        "type": "string",
                                        "example": "Tamil Nadu"
                                      },
                                      "street": {
                                        "type": "string",
                                        "example": "22E ,Thiru Vi Ka Industrial Estate ,Saidapet"
                                      },
                                      "country": {
                                        "type": "string",
                                        "example": "India"
                                      },
                                      "landmark": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "zip_code": {
                                        "type": "string",
                                        "example": "600032"
                                      },
                                      "first_name": {
                                        "type": "string",
                                        "example": "Charles"
                                      },
                                      "last_name": {
                                        "type": "string",
                                        "example": "Customer"
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": "Charles@Zuper.co"
                                      }
                                    }
                                  },
                                  "custom_fields": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "label": {
                                          "type": "string",
                                          "example": "J-ID"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "30143524"
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_LINE"
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "read_only": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "626976fb5c29f9288365ccb7"
                                        }
                                      }
                                    }
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2022-04-27T17:01:47.187Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2023-03-16T07:11:51.804Z"
                                  },
                                  "work_order_number": {
                                    "type": "integer",
                                    "example": 5470,
                                    "default": 0
                                  },
                                  "due_date": {
                                    "type": "string",
                                    "example": "2023-01-31T00:00:00.000Z"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "908f73c0-d185-11ee-bd2e-471adde8df3c"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "test"
                              },
                              "url": {
                                "type": "string",
                                "example": "example.com"
                              },
                              "created_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "d083c6cb-9202-41fc-8ae2-e986939c5471"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Jerin"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "Aj"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "jerin@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "J001"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg"
                                  },
                                  "hourly_labor_charge": {
                                    "type": "number",
                                    "example": 54.59,
                                    "default": 0
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2022-02-16T10:00:42.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2023-09-15T07:08:08.000Z"
                                  }
                                }
                              },
                              "visible_to_customer": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-02-22T13:23:28.482Z"
                              }
                            }
                          }
                        },
                        "project_manager": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Raghav"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "G"
                            },
                            "email": {
                              "type": "string",
                              "example": "raghav@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {
                              "type": "string",
                              "example": "7397722822"
                            },
                            "designation": {
                              "type": "string",
                              "example": "CTO"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "1234"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "7397722822"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 500,
                              "default": 0
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-01-16T13:59:59.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-01-16T13:59:59.000Z"
                            }
                          }
                        },
                        "project_tags": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "tag 1"
                          }
                        },
                        "custom_fields": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Sage Customer ID"
                              },
                              "value": {
                                "type": "string",
                                "example": ""
                              },
                              "type": {
                                "type": "string",
                                "example": "SINGLE_LINE"
                              },
                              "hide_to_fe": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "hide_field": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "read_only": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "65d74ad07c7dec84e778b6cc"
                              }
                            }
                          }
                        },
                        "project_assigned_to": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "user": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Raghav"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "G"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "raghav@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "7397722822"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "CTO"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "1234"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "7397722822"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg"
                                  },
                                  "hourly_labor_charge": {
                                    "type": "integer",
                                    "example": 500,
                                    "default": 0
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2024-01-16T13:59:59.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-01-16T13:59:59.000Z"
                                  }
                                }
                              },
                              "team": {
                                "type": "object",
                                "properties": {
                                  "team_uid": {
                                    "type": "string",
                                    "example": "18cada40-021b-11e8-8127-43a5add1a9e2"
                                  },
                                  "team_name": {
                                    "type": "string",
                                    "example": "SF Team"
                                  },
                                  "team_color": {
                                    "type": "string",
                                    "example": "#3498db"
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              }
                            }
                          }
                        },
                        "project_public_url": {
                          "type": "string",
                          "example": "hello.com"
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "d083c6cb-9202-41fc-8ae2-e986939c5471"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Jerin"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Aj"
                            },
                            "email": {
                              "type": "string",
                              "example": "jerin@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "J001"
                            },
                            "prefix": {},
                            "work_phone_number": {},
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg"
                            },
                            "hourly_labor_charge": {
                              "type": "number",
                              "example": 54.59,
                              "default": 0
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2022-02-16T10:00:42.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-09-15T07:08:08.000Z"
                            }
                          }
                        },
                        "config": {
                          "type": "object",
                          "properties": {
                            "dependency": {
                              "type": "object",
                              "properties": {
                                "day_shifting": {
                                  "type": "string",
                                  "example": "MAINTAIN"
                                },
                                "consider_weekend": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                }
                              }
                            }
                          }
                        },
                        "products": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "line_item_uid": {
                                "type": "string",
                                "example": "4ad3e947-e94e-4abc-800c-4021f9ab69f5"
                              },
                              "line_item_type": {
                                "type": "string",
                                "example": "ITEM"
                              },
                              "product_ref_id": {
                                "type": "string",
                                "example": "662a0143048d9b94b311311f"
                              },
                              "location": {
                                "type": "string",
                                "example": "662b9deeb53b938957d94142"
                              },
                              "product_id": {
                                "type": "string",
                                "example": "12345"
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "853ba100-02d2-11ef-a901-1f3e4d8db41e"
                              },
                              "location_uid": {
                                "type": "string",
                                "example": "7d905c10-03c8-11ef-94cd-01f7121eb721"
                              },
                              "group_uid": {
                                "type": "string",
                                "example": "a03a735c-65a7-4aca-b692-be803413f5e2"
                              },
                              "group_name": {
                                "type": "string",
                                "example": "general"
                              },
                              "group": {
                                "type": "string",
                                "example": "666ace8012141b49b6ff98d3"
                              },
                              "location_name": {
                                "type": "string",
                                "example": "chennai"
                              },
                              "image": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/702eaeb0-02d2-11ef-a901-1f3e4d8db41e.png"
                              },
                              "name": {
                                "type": "string",
                                "example": "AC"
                              },
                              "brand": {
                                "type": "string",
                                "example": "ups"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "planned": {
                                "type": "object",
                                "properties": {
                                  "quantity": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "serial_nos": {
                                    "type": "array"
                                  }
                                }
                              },
                              "available": {
                                "type": "object",
                                "properties": {
                                  "quantity": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "serial_nos": {
                                    "type": "array"
                                  }
                                }
                              },
                              "used": {
                                "type": "object",
                                "properties": {
                                  "quantity": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "serial_nos": {
                                    "type": "array"
                                  }
                                }
                              },
                              "unit_price": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "purchase_price": {},
                              "discount_type": {
                                "type": "string",
                                "example": "FIXED"
                              },
                              "total": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "666c335303437795e7436cc7"
                              }
                            }
                          }
                        },
                        "project_status": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-02-22T13:23:28.505Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-02-22T13:23:28.505Z"
                        },
                        "project_number_string": {
                          "type": "string",
                          "example": "Test 1"
                        },
                        "project_priority_index": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "__v": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "type": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "items": {
                          "type": "object",
                          "properties": {
                            "property": {
                              "type": "object",
                              "properties": {
                                "no_of_jobs": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "is_active": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "is_deleted": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "property_uid": {
                                  "type": "string",
                                  "example": "b7c98360-5e9f-11eb-98dc-79c25d781098"
                                },
                                "property_name": {
                                  "type": "string",
                                  "example": "Abbotts Way School"
                                },
                                "property_address": {
                                  "type": "object",
                                  "properties": {
                                    "city": {
                                      "type": "string",
                                      "example": "Meare"
                                    },
                                    "state": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "street": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "country": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "landmark": {
                                      "type": "string",
                                      "example": "St Marys Road"
                                    },
                                    "zip_code": {
                                      "type": "string",
                                      "example": "BA6 9SR"
                                    }
                                  }
                                },
                                "custom_fields": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "hide_to_fe": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "600e09140568ea403df944c5"
                                      },
                                      "label": {
                                        "type": "string",
                                        "example": "Zoho Site ID"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "SINGLE_LINE"
                                      }
                                    }
                                  }
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2021-01-24T23:56:04.120Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2021-01-24T23:56:04.122Z"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```