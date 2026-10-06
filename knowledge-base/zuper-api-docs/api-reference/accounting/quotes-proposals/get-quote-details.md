---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Quote

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
    "/estimate/{estimate_uid}": {
      "get": {
        "summary": "Get a Quote",
        "description": "",
        "operationId": "get-a-proposal",
        "parameters": [
          {
            "name": "estimate_uid",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"estimate_uid\": \"bde94a1f-6b76-4e6e-b2bb-2c3e985923fd\",\n    \"prefix\": \"10000\",\n    \"reference_no\": \"12345653311\",\n    \"estimate_description\": \"<p>test</p>\",\n    \"plain_text_description\": \"test\",\n    \"markdown_description\": \"test\",\n    \"estimate_date\": \"2025-01-05T18:30:00.000Z\",\n    \"expiry_date\": \"2025-01-06T18:29:00.000Z\",\n    \"project\": null,\n\t\t\"accepted_date\": \"2025-01-06T18:29:00.000Z\",\n\t\t\"sent_date\": \"2025-01-05T18:29:00.000Z\",\n    \"customer\": {\n      \"customer_uid\": \"d41e9fe0-6442-11ee-b5d5-49505c31565c\",\n      \"customer_first_name\": \"Hari\",\n      \"customer_last_name\": \"V\",\n      \"customer_category\": null,\n      \"customer_organization\": {\n        \"organization_uid\": \"cf1940f0-1b26-11ee-a61c-c7daced78d3d\",\n        \"organization_name\": \"Acme Inc.\",\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"custom_fields\": [\n          {\n            \"label\": \"HubSpot Company ID\",\n            \"value\": \"\",\n            \"type\": \"SINGLE_LINE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"group_name\": \"\",\n            \"group_uid\": \"\",\n            \"_id\": \"663b7a242c0524815c8079a4\"\n          },\n          {\n            \"label\": \"Text Input\",\n            \"value\": \"test\",\n            \"type\": \"SINGLE_LINE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": true,\n            \"group_name\": \"\",\n            \"group_uid\": \"\",\n            \"_id\": \"663b7a242c0524815c8079a5\"\n          },\n          {\n            \"label\": \"Time Input\",\n            \"value\": \"11:22:00\",\n            \"type\": \"TIME\",\n            \"hide_to_fe\": true,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"group_name\": \"\",\n            \"group_uid\": \"\",\n            \"_id\": \"663b7a242c0524815c8079a6\"\n          },\n          {\n            \"label\": \"File Input\",\n            \"value\": \"\",\n            \"type\": \"FILE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"group_name\": \"\",\n            \"group_uid\": \"\",\n            \"_id\": \"663b7a242c0524815c8079a7\"\n          },\n          {\n            \"label\": \"Text Input\",\n            \"value\": \"\",\n            \"type\": \"SINGLE_LINE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"group_name\": \"Test Group\",\n            \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n            \"_id\": \"663b7a242c0524815c8079a8\"\n          },\n          {\n            \"label\": \"Time Input\",\n            \"value\": \"\",\n            \"type\": \"TIME\",\n            \"hide_to_fe\": false,\n            \"hide_field\": true,\n            \"read_only\": false,\n            \"group_name\": \"Test Group\",\n            \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n            \"_id\": \"663b7a242c0524815c8079a9\"\n          },\n          {\n            \"label\": \"Org test\",\n            \"value\": \"\",\n            \"type\": \"MULTI_LINE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": true,\n            \"read_only\": false,\n            \"group_name\": \"Test Group\",\n            \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n            \"_id\": \"663b7a242c0524815c8079aa\"\n          },\n          {\n            \"label\": \"Org testing\",\n            \"value\": \"\",\n            \"type\": \"SINGLE_LINE\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"group_name\": \"Test Group\",\n            \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n            \"_id\": \"663b7a242c0524815c8079ab\"\n          }\n        ],\n        \"created_at\": \"2023-07-05T11:26:39.231Z\",\n        \"updated_at\": \"2024-07-26T05:14:58.331Z\",\n        \"organization_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"WorkEZ Willow Square Guindy - Managed Offices and Coworking Spaces, 1st Street, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy\",\n          \"country\": \"India\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600032\",\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\",\n          \"geo_cordinates\": [\n            13.0104643,\n            80.2090733\n          ],\n          \"point_coordinates\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n              80.2090733,\n              13.0104643\n            ]\n          }\n        },\n        \"organization_billing_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"WorkEZ Urban Square OMR - Coworking Spaces, Elango Nagar, Perungudi\",\n          \"country\": \"\",\n          \"landmark\": \"\",\n          \"zip_code\": \"600041\",\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\",\n          \"geo_cordinates\": [\n            12.9730624,\n            80.25058969999999\n          ],\n          \"point_coordinates\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n              80.25058969999999,\n              12.9730624\n            ]\n          }\n        },\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/fb1ecfb0-7f91-11ee-93cb-5be0a22f4e69.png\",\n        \"tax\": {\n          \"tax_exempt\": false\n        },\n        \"organization_timezone\": \"Africa/Cairo\"\n      },\n      \"customer_company_name\": \"\",\n      \"customer_email\": \"hariv+90@gmail.com\",\n      \"customer_all_addresses\": [\n        {\n          \"city\": \"Mumbai\",\n          \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n          \"country\": \"India\",\n          \"zip_code\": \"400070\",\n          \"is_primary\": false,\n          \"_id\": \"658bc57c65e21e305757833e\"\n        },\n        {\n          \"city\": \"Mumbai\",\n          \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n          \"country\": \"India\",\n          \"zip_code\": \"400070\",\n          \"is_primary\": false,\n          \"_id\": \"658bc57c65e21e305757833f\"\n        }\n      ],\n      \"customer_address\": {\n        \"city\": \"Mumbai\",\n        \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n        \"country\": \"India\",\n        \"zip_code\": \"400070\"\n      },\n      \"customer_billing_address\": {\n        \"city\": \"Mumbai\",\n        \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n        \"country\": \"India\",\n        \"zip_code\": \"400070\"\n      },\n      \"custom_fields\": [\n        {\n          \"label\": \"Quickbooks ID\",\n          \"value\": \"400\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"658bc57c65e21e3057578340\"\n        }\n      ],\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"has_card_on_file\": false,\n      \"tax\": {\n        \"tax_exempt\": false\n      },\n      \"created_at\": \"2023-10-06T12:21:08.483Z\",\n      \"updated_at\": \"2024-03-04T06:48:31.770Z\",\n      \"customer_contact_no\": null\n    },\n    \"organization\": {\n      \"organization_uid\": \"cf1940f0-1b26-11ee-a61c-c7daced78d3d\",\n      \"organization_name\": \"Acme Inc.\",\n      \"no_of_customers\": 27,\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"custom_fields\": [\n        {\n          \"label\": \"HubSpot Company ID\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"\",\n          \"group_uid\": \"\",\n          \"_id\": \"663b7a242c0524815c8079a4\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"test\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": true,\n          \"group_name\": \"\",\n          \"group_uid\": \"\",\n          \"_id\": \"663b7a242c0524815c8079a5\"\n        },\n        {\n          \"label\": \"Time Input\",\n          \"value\": \"11:22:00\",\n          \"type\": \"TIME\",\n          \"hide_to_fe\": true,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"\",\n          \"group_uid\": \"\",\n          \"_id\": \"663b7a242c0524815c8079a6\"\n        },\n        {\n          \"label\": \"File Input\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"\",\n          \"group_uid\": \"\",\n          \"_id\": \"663b7a242c0524815c8079a7\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Test Group\",\n          \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n          \"_id\": \"663b7a242c0524815c8079a8\"\n        },\n        {\n          \"label\": \"Time Input\",\n          \"value\": \"\",\n          \"type\": \"TIME\",\n          \"hide_to_fe\": false,\n          \"hide_field\": true,\n          \"read_only\": false,\n          \"group_name\": \"Test Group\",\n          \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n          \"_id\": \"663b7a242c0524815c8079a9\"\n        },\n        {\n          \"label\": \"Org test\",\n          \"value\": \"\",\n          \"type\": \"MULTI_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": true,\n          \"read_only\": false,\n          \"group_name\": \"Test Group\",\n          \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n          \"_id\": \"663b7a242c0524815c8079aa\"\n        },\n        {\n          \"label\": \"Org testing\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Test Group\",\n          \"group_uid\": \"86671760-ccc9-11ee-a15a-0785a4c20173\",\n          \"_id\": \"663b7a242c0524815c8079ab\"\n        }\n      ],\n      \"created_at\": \"2023-07-05T11:26:39.231Z\",\n      \"updated_at\": \"2024-07-26T05:14:58.331Z\",\n      \"organization_address\": {\n        \"city\": \"Chennai\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"WorkEZ Willow Square Guindy - Managed Offices and Coworking Spaces, 1st Street, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy\",\n        \"country\": \"India\",\n        \"landmark\": \"\",\n        \"zip_code\": \"600032\",\n        \"first_name\": \"\",\n        \"last_name\": \"\",\n        \"phone_number\": \"\",\n        \"email\": \"\",\n        \"geo_cordinates\": [\n          13.0104643,\n          80.2090733\n        ],\n        \"point_coordinates\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            80.2090733,\n            13.0104643\n          ]\n        }\n      },\n      \"organization_billing_address\": {\n        \"city\": \"Chennai\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"WorkEZ Urban Square OMR - Coworking Spaces, Elango Nagar, Perungudi\",\n        \"country\": \"\",\n        \"landmark\": \"\",\n        \"zip_code\": \"600041\",\n        \"first_name\": \"\",\n        \"last_name\": \"\",\n        \"phone_number\": \"\",\n        \"email\": \"\",\n        \"geo_cordinates\": [\n          12.9730624,\n          80.25058969999999\n        ],\n        \"point_coordinates\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            80.25058969999999,\n            12.9730624\n          ]\n        }\n      },\n      \"organization_description\": null,\n      \"organization_email\": null,\n      \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/fb1ecfb0-7f91-11ee-93cb-5be0a22f4e69.png\",\n      \"tax\": {\n        \"tax_exempt\": false\n      },\n      \"organization_timezone\": \"Africa/Cairo\"\n    },\n    \"property\": {\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"tax\": {\n        \"tax_exempt\": false\n      },\n      \"custom_fields\": [\n        {\n          \"label\": \"Time Input\",\n          \"value\": \"\",\n          \"type\": \"TIME\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"672b478e3ad6c2466d11b684\"\n        },\n        {\n          \"label\": \"Radio\",\n          \"value\": \"\",\n          \"type\": \"RADIO\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"672b478e3ad6c2466d11b685\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"New Property Rwr\",\n          \"group_uid\": \"b662a7dd-ebb1-4639-b32f-acc156ba6ebf\",\n          \"_id\": \"672b478e3ad6c2466d11b686\"\n        },\n        {\n          \"label\": \"Text Area\",\n          \"value\": \"\",\n          \"type\": \"MULTI_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"New Property Rwr\",\n          \"group_uid\": \"b662a7dd-ebb1-4639-b32f-acc156ba6ebf\",\n          \"_id\": \"672b478e3ad6c2466d11b687\"\n        }\n      ],\n      \"property_address\": {\n        \"city\": \"Chennai\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"RMZ Software Park,Pvt Ltd., Mount Poonamallee Road, Porur\",\n        \"country\": \"India\",\n        \"landmark\": \"\",\n        \"zip_code\": \"600125\",\n        \"geo_cordinates\": [\n          13.0310078,\n          80.1682374\n        ],\n        \"point_coordinates\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            80.1682374,\n            13.0310078\n          ]\n        },\n        \"_id\": \"672b478e3ad6c2466d11b688\"\n      },\n      \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7fc5997a-8efb-4759-86ff-10ef51c3246b.jpg\",\n      \"no_of_jobs\": 1,\n      \"property_name\": \"Acme Property\",\n      \"property_uid\": \"81f5c870-9c2b-11ef-a9ff-dd3068964df0\"\n    },\n    \"request\": null,\n    \"customer_billing_address\": {\n      \"landmark\": \"\",\n      \"city\": \"Chennai\",\n      \"state\": \"Tamil Nadu\",\n      \"street\": \"WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi\",\n      \"zip_code\": \"600041\",\n      \"geo_cordinates\": [\n        12.9730624,\n        80.25058969999999\n      ],\n      \"first_name\": \"\",\n      \"last_name\": \"\",\n      \"phone_number\": \"\",\n      \"email\": \"\"\n    },\n    \"customer_service_address\": {\n      \"landmark\": \"\",\n      \"city\": \"Mumbai\",\n      \"state\": \"\",\n      \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n      \"zip_code\": \"400070\",\n      \"first_name\": \"Hari\",\n      \"last_name\": \"V\",\n      \"phone_number\": \"\",\n      \"email\": \"hariv+90@gmail.com\"\n    },\n    \"job\": {\n      \"job_uid\": \"366a23b0-d9f3-11ee-9054-0be1fec3fea9\",\n      \"prefix\": \"V2-004\",\n      \"job_title\": \"test7\",\n      \"job_description\": \"<p>Tower <strong>maintenance</strong></p>\",\n      \"job_category\": {\n        \"is_deleted\": false,\n        \"estimated_duration\": {\n          \"days\": 2,\n          \"hours\": 0,\n          \"minutes\": 0\n        },\n        \"category_name\": \"Tower Maintenance 1\",\n        \"category_uid\": \"5aa538a0-e38e-11ea-9951-bd17f6a7ddb8\",\n        \"category_color\": \"#4F46E5\"\n      },\n      \"job_priority\": \"URGENT\",\n      \"scheduled_start_time\": \"2019-02-04T08:00:00.000Z\",\n      \"scheduled_end_time\": \"2019-02-06T08:00:00.000Z\",\n      \"due_date\": \"2024-03-31T18:29:59.000Z\",\n      \"customer_address\": {\n        \"landmark\": \"\",\n        \"city\": \"Mumbai\",\n        \"state\": \"\",\n        \"street\": \"Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla\",\n        \"country\": \"\",\n        \"zip_code\": \"400070\",\n        \"geo_cordinates\": [\n          0,\n          0\n        ],\n        \"first_name\": \"Hari\",\n        \"last_name\": \"V\",\n        \"phone_number\": \"\",\n        \"email\": \"hariv+90@gmail.com\",\n        \"point_coordinates\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            0,\n            0\n          ]\n        }\n      },\n      \"customer_billing_address\": {\n        \"landmark\": \"\",\n        \"city\": \"Chennai\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi\",\n        \"country\": \"\",\n        \"zip_code\": \"600041\",\n        \"geo_cordinates\": [\n          12.9730624,\n          80.25058969999999\n        ],\n        \"first_name\": \"\",\n        \"last_name\": \"\",\n        \"phone_number\": \"\",\n        \"email\": \"\"\n      },\n      \"custom_fields\": [\n        {\n          \"label\": \"Feelings\",\n          \"value\": \"\",\n          \"type\": \"MULTI_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": true,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca29\"\n        },\n        {\n          \"label\": \"Doggo Appreciation\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2a\"\n        },\n        {\n          \"label\": \"File Input\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2b\"\n        },\n        {\n          \"label\": \"DateTime Input\",\n          \"value\": \"\",\n          \"type\": \"DATETIME\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2c\"\n        },\n        {\n          \"label\": \"Smiley\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2d\"\n        },\n        {\n          \"label\": \"Job location\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2e\"\n        },\n        {\n          \"label\": \"LookUp\",\n          \"value\": \"\",\n          \"type\": \"LOOKUP\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca2f\"\n        },\n        {\n          \"label\": \"Checkbox\",\n          \"value\": \"\",\n          \"type\": \"MULTI_ITEM\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65e56ebf53d05d1cd388ca30\"\n        },\n        {\n          \"label\": \"Are pets allowed?\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_ITEM\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca31\"\n        },\n        {\n          \"label\": \"Select\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_ITEM\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca32\"\n        },\n        {\n          \"label\": \"Date Input\",\n          \"value\": \"\",\n          \"type\": \"DATE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca33\"\n        },\n        {\n          \"label\": \"Time Input\",\n          \"value\": \"\",\n          \"type\": \"TIME\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca34\"\n        },\n        {\n          \"label\": \"DateTime Input\",\n          \"value\": \"\",\n          \"type\": \"DATETIME\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca35\"\n        },\n        {\n          \"label\": \"Pen name\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"cf_filter_testing\",\n          \"group_uid\": \"e89e4010-89c2-11ee-9be5-ab62793f380f\",\n          \"_id\": \"65e56ebf53d05d1cd388ca36\"\n        },\n        {\n          \"label\": \"Installation comments test\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Installation\",\n          \"group_uid\": \"e36cd8d0-8eaa-11ee-9d86-55ae790a4dc5\",\n          \"_id\": \"65e56ebf53d05d1cd388ca37\"\n        },\n        {\n          \"label\": \"File Input\",\n          \"value\": \"\",\n          \"type\": \"FILE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Installation\",\n          \"group_uid\": \"e36cd8d0-8eaa-11ee-9d86-55ae790a4dc5\",\n          \"_id\": \"65e56ebf53d05d1cd388ca38\"\n        },\n        {\n          \"label\": \"LookUp\",\n          \"value\": \"\",\n          \"type\": \"LOOKUP\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca39\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Test\",\n          \"group_uid\": \"61ace940-aad2-11ee-aa52-bfd5e63cb2c2\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3a\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Installation\",\n          \"group_uid\": \"e36cd8d0-8eaa-11ee-9d86-55ae790a4dc5\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3b\"\n        },\n        {\n          \"label\": \"Select\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_ITEM\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3c\"\n        },\n        {\n          \"label\": \"Time Input\",\n          \"value\": \"\",\n          \"type\": \"TIME\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3d\"\n        },\n        {\n          \"label\": \"Radio\",\n          \"value\": \"\",\n          \"type\": \"RADIO\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3e\"\n        },\n        {\n          \"label\": \"Field 1\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": true,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca3f\"\n        },\n        {\n          \"label\": \"Text Input\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca40\"\n        },\n        {\n          \"label\": \"Field 2\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"module_name\": \"PRODUCT\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"group_name\": \"Custom fields\",\n          \"group_uid\": \"713b0920-8cf3-11ee-94ad-b95ed2886095\",\n          \"_id\": \"65e56ebf53d05d1cd388ca41\"\n        }\n      ],\n      \"is_deleted\": false,\n      \"job_status\": [],\n      \"created_at\": \"2024-03-04T06:48:31.736Z\",\n      \"updated_at\": \"2024-04-03T18:29:59.254Z\",\n      \"work_order_number\": 16147\n    },\n    \"line_items\": [],\n    \"tax_exempt\": false,\n    \"sub_total\": 1350,\n    \"discount\": {\n      \"type\": \"FIXED\",\n      \"value\": 0,\n      \"percent\": 0,\n      \"discount_applicability\": \"TRANSACTION\",\n      \"discount_label\": \"Discount\"\n    },\n    \"fees\": [],\n    \"total\": 1350,\n    \"total_discount\": null,\n    \"remarks\": \"default remarks for quote by ak\",\n    \"template\": {\n      \"template_name\": \"Template 1(dont choose)\",\n      \"template\": \"<style>* { box-sizing: border-box; } body {margin: 0;}*{font-size:12px;font-family:sans-serif;box-sizing:border-box;}table{break-inside:avoid;overflow-x:visible !important;overflow-y:visible !important;border-top-width:initial !important;border-right-width:initial !important;border-bottom-width:initial !important;border-left-width:initial !important;border-top-style:none !important;border-right-style:none !important;border-bottom-style:none !important;border-left-style:none !important;border-top-color:initial !important;border-right-color:initial !important;border-bottom-color:initial !important;border-left-color:initial !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}tr, th, td{padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;border-top-width:initial !important;border-right-width:initial !important;border-bottom-width:initial !important;border-left-width:initial !important;border-top-style:none !important;border-right-style:none !important;border-bottom-style:none !important;border-left-style:none !important;border-top-color:initial !important;border-right-color:initial !important;border-bottom-color:initial !important;border-left-color:initial !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}thead{display:table-header-group;}tfoot{display:table-row-group;}tr{break-inside:avoid;break-before:avoid;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}</style>{{formatCurrency total 'USA' 'USD'}}\",\n      \"template_description\": \"new twmp des\",\n      \"type\": \"ESTIMATE\",\n      \"template_uid\": \"014c1490-d84f-11e9-b7cf-118df12e5532\",\n      \"is_deleted\": false,\n      \"template_options\": {\n        \"format\": \"A4\",\n        \"orientation\": \"portrait\",\n        \"border\": {\n          \"top\": \"10mm\",\n          \"right\": \"10mm\",\n          \"bottom\": \"10mm\",\n          \"left\": \"10mm\"\n        }\n      },\n      \"render_engine\": \"PUPPETEER\"\n    },\n    \"tags\": [\n      \"test\"\n    ],\n    \"tax\": [],\n    \"taxation_meta\": {\n      \"current_status\": \"SAVED\",\n      \"status_history\": []\n    },\n    \"estimate_status\": \"DRAFT\",\n    \"custom_fields\": [\n      {\n        \"label\": \"Text Input\",\n        \"value\": \"test\",\n        \"type\": \"SINGLE_LINE\",\n        \"module_name\": \"PRODUCT\",\n        \"hide_to_fe\": false,\n        \"hide_field\": false,\n        \"read_only\": false,\n        \"_id\": \"677b7bac020106724452218c\"\n      },\n      {\n        \"label\": \"Checkbox\",\n        \"value\": \"Inverts may not be obtainable for structures that are welded, rusted, bolted or sealed shut, paved over or covered with materials or vehicles, filled with debris or water, require MOT or an OSHA Confined Space Entry, elevated above grade, or offset inside the structure where the invert is not accessible.\",\n        \"type\": \"MULTI_ITEM\",\n        \"module_name\": \"PRODUCT\",\n        \"hide_to_fe\": false,\n        \"hide_field\": false,\n        \"read_only\": false,\n        \"group_name\": \"Grouptotestthedependent\",\n        \"group_uid\": \"917731b0-02c7-11ef-8727-3d85d81c857a\",\n        \"_id\": \"677b7bac020106724452218d\"\n      },\n      {\n        \"label\": \"Additional scope clarification.\",\n        \"value\": \"\",\n        \"type\": \"MULTI_ITEM\",\n        \"module_name\": \"PRODUCT\",\n        \"hide_to_fe\": false,\n        \"hide_field\": false,\n        \"read_only\": false,\n        \"group_name\": \"Grouptotestthedependent\",\n        \"group_uid\": \"917731b0-02c7-11ef-8727-3d85d81c857a\",\n        \"_id\": \"677b7bac020106724452218e\"\n      }\n    ],\n    \"status_history\": [\n      {\n        \"status_name\": \"DRAFT\",\n        \"done_by\": {\n          \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n          \"first_name\": \"3e\",\n          \"last_name\": \"M\",\n          \"email\": \"3e.m@zuper.co\",\n          \"external_login_id\": \"\",\n          \"home_phone_number\": null,\n          \"designation\": \"Tech\",\n          \"emp_code\": \"1234\",\n          \"prefix\": \"Z22\",\n          \"work_phone_number\": null,\n          \"mobile_phone_number\": null,\n          \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n          \"hourly_labor_charge\": 20,\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"created_at\": \"2024-07-05T06:42:02.000Z\",\n          \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"done_by_type\": \"EMPLOYEE\",\n        \"_id\": \"677b7595f00d6b1ca76601c4\",\n        \"created_at\": \"2025-01-06T06:17:57.942Z\",\n        \"line_items_status\": [],\n        \"attachments\": []\n      },\n      {\n        \"status_name\": \"DRAFT\",\n        \"customer_signature\": \"\",\n        \"remarks\": \"\",\n        \"done_by\": {\n          \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n          \"first_name\": \"3e\",\n          \"last_name\": \"M\",\n          \"email\": \"3e.m@zuper.co\",\n          \"external_login_id\": \"\",\n          \"home_phone_number\": null,\n          \"designation\": \"Tech\",\n          \"emp_code\": \"1234\",\n          \"prefix\": \"Z22\",\n          \"work_phone_number\": null,\n          \"mobile_phone_number\": null,\n          \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n          \"hourly_labor_charge\": 20,\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"created_at\": \"2024-07-05T06:42:02.000Z\",\n          \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"done_by_type\": \"EMPLOYEE\",\n        \"line_items_status\": [],\n        \"attachments\": [],\n        \"_id\": \"677b7badabf97a014f486cbd\",\n        \"created_at\": \"2025-01-06T06:43:57.579Z\"\n      }\n    ],\n    \"deposit\": {\n      \"total\": 0,\n      \"status\": \"NOT_COLLECTED\",\n      \"is_void\": false\n    },\n    \"is_expired\": false,\n    \"is_converted\": false,\n    \"is_deleted\": false,\n    \"is_active\": true,\n    \"created_by\": {\n      \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n      \"first_name\": \"3e\",\n      \"last_name\": \"M\",\n      \"email\": \"3e.m@zuper.co\",\n      \"external_login_id\": \"\",\n      \"home_phone_number\": null,\n      \"designation\": \"Tech\",\n      \"emp_code\": \"1234\",\n      \"prefix\": \"Z22\",\n      \"work_phone_number\": null,\n      \"mobile_phone_number\": null,\n      \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n      \"hourly_labor_charge\": 20,\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"created_at\": \"2024-07-05T06:42:02.000Z\",\n      \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n    },\n    \"public_url\": \"https://stagingv2.zuperpro.com/api/customer_portal/estimates?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&estimate_uid=bde94a1f-6b76-4e6e-b2bb-2c3e985923fd&to=hariv+90@gmail.com\",\n    \"deposit_payment_url\": \"https://stagingv2.zuperpro.com/api/customer_portal/estimates/collect_deposit?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&estimate_uid=bde94a1f-6b76-4e6e-b2bb-2c3e985923fd\",\n    \"financing\": {\n      \"is_enabled\": false,\n      \"promo_message\": \"As Low as $29.07/month for 24 months at 10%\",\n      \"financing_provider\": {\n        \"financing_provider_uid\": \"dae4be39-ddbe-4edf-9ae4-eb27f9cc755e\",\n        \"financing_provider_name\": \"Sun Financing\",\n        \"financing_provider_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/3c0f3c2b-49de-44b1-95b5-57b44463df95/4d8c0d79-3ee7-4fcd-a8ee-67b432524550.jpg\",\n        \"financing_plans\": [\n          {\n            \"financing_plan_name\": \"Markup Flat\",\n            \"financing_plan_uid\": \"b9ddefdc-dfd2-4911-9284-19ad700b2eca\",\n            \"term\": {\n              \"value\": 2,\n              \"type\": \"YEAR\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": true,\n              \"type\": \"MARKUP\",\n              \"markup\": {\n                \"markup_type\": \"FLAT\",\n                \"markup_value\": 10\n              }\n            },\n            \"_id\": \"69c8190b5fe329f4e70928ec\"\n          },\n          {\n            \"financing_plan_name\": \"Markup percent\",\n            \"financing_plan_uid\": \"e8a969c0-dd65-4b58-a00c-20a9ee08e2f8\",\n            \"term\": {\n              \"value\": 24,\n              \"type\": \"MONTH\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": true,\n              \"type\": \"MARKUP\",\n              \"markup\": {\n                \"markup_type\": \"PERCENTAGE\",\n                \"markup_value\": 10\n              }\n            },\n            \"_id\": \"69c8190b5fe329f4e70928ed\"\n          },\n          {\n            \"financing_plan_name\": \"Markup multi\",\n            \"financing_plan_uid\": \"63c3ead8-793e-41c5-a293-aebf63ed50f8\",\n            \"term\": {\n              \"value\": 2,\n              \"type\": \"YEAR\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": true,\n              \"type\": \"MARKUP\",\n              \"markup\": {\n                \"markup_type\": \"MULTIPLIER\",\n                \"markup_value\": 10\n              }\n            },\n            \"_id\": \"69c8190b5fe329f4e70928ee\"\n          },\n          {\n            \"financing_plan_name\": \"Dealer fee flat\",\n            \"financing_plan_uid\": \"2f833c64-3605-4f4a-8c7d-d0dd015c1807\",\n            \"term\": {\n              \"value\": 24,\n              \"type\": \"MONTH\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": true,\n              \"type\": \"CUSTOM_FEE\",\n              \"custom_fee\": {\n                \"label\": \"Dealer fee ak\",\n                \"value\": 10,\n                \"type\": \"FIXED\"\n              }\n            },\n            \"_id\": \"69c8190b5fe329f4e70928ef\"\n          },\n          {\n            \"financing_plan_name\": \"Dealer fee percent\",\n            \"financing_plan_uid\": \"5ba59819-3f32-48da-aa12-9c648e3fe003\",\n            \"term\": {\n              \"value\": 2,\n              \"type\": \"YEAR\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": true,\n              \"type\": \"CUSTOM_FEE\",\n              \"custom_fee\": {\n                \"label\": \"Dealer fee\",\n                \"value\": 20,\n                \"type\": \"PERCENTAGE\"\n              }\n            },\n            \"_id\": \"69c8190b5fe329f4e70928f0\"\n          },\n          {\n            \"financing_plan_name\": \"no additional charge\",\n            \"financing_plan_uid\": \"5d630811-637a-40ba-90e1-588c43b61ccc\",\n            \"term\": {\n              \"value\": 24,\n              \"type\": \"MONTH\"\n            },\n            \"apr\": 10,\n            \"dealer_fee\": {\n              \"is_enabled\": false\n            },\n            \"_id\": \"69c8190b5fe329f4e70928f1\"\n          }\n        ],\n        \"is_deleted\": false\n      },\n      \"financing_plan_uid\": \"b9ddefdc-dfd2-4911-9284-19ad700b2eca\",\n      \"apr\": 10,\n      \"term\": {\n        \"value\": 2,\n        \"type\": \"YEAR\"\n      },\n      \"monthly_installment\": 29.07\n    },\n    \"is_proposal\": true,\n    \"proposal_title\": \"Proposal for Hari V 2\",\n    \"proposal_template\": {\n      \"template_uid\": \"84c44eb0-4262-11ee-b1a1-7372ef614376\",\n      \"template_name\": \"Proposal Template\"\n    },\n    \"proposal_options\": [\n      {\n        \"option_uid\": \"ba531e08-d8d0-473c-bba1-a6373e8c5eed\",\n        \"option_name\": \"Option 3\",\n        \"option_description\": \"test\",\n        \"is_accepted\": false,\n        \"deposit\": 500,\n        \"package\": {\n          \"package_name\": \"Applot 1\",\n          \"package_description\": \"Sample Packages for companies\",\n          \"master_package\": {\n            \"package_uid\": \"72e0b360-3c21-11ee-82aa-858410f587b5\",\n            \"package_name\": \"Applot 1\",\n            \"package_description\": \"Sample Packages for companies\",\n            \"is_deleted\": false,\n            \"created_at\": \"2023-08-16T10:41:25.403Z\",\n            \"updated_at\": \"2024-07-02T14:04:00.320Z\"\n          }\n        },\n        \"line_items\": [\n          {\n            \"line_item_uid\": \"b4c7ff9d-412f-4e90-ba2b-ecefabdf66b1\",\n            \"line_item_type\": \"ITEM\",\n            \"product_ref_id\": {\n              \"product_uid\": \"7aab9620-5e89-11ee-a16d-d973f75ee849\",\n              \"prefix\": \"PT\",\n              \"product_id\": \"7878787878\",\n              \"product_category\": {\n                \"category_name\": \"Civil Items\",\n                \"category_uid\": \"effde4f0-480d-11ea-85e2-91cf2fb0b4bb\"\n              },\n              \"product_name\": \"Boat Watch\",\n              \"product_type\": \"PRODUCT\",\n              \"meta_data\": [\n                {\n                  \"label\": \"QB Product ID\",\n                  \"value\": \"2286\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b54585a33f2849e25e0\"\n                },\n                {\n                  \"label\": \"QBO Class\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f1139\"\n                },\n                {\n                  \"label\": \"Xero Item Account\",\n                  \"value\": \"408 - Cleaning\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113a\"\n                },\n                {\n                  \"label\": \"Hidden field\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113b\"\n                },\n                {\n                  \"label\": \"testitem\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113c\"\n                },\n                {\n                  \"label\": \"Text Area\",\n                  \"value\": \"Health Insurance that stays with you forever Health Insurance that stays with you forever \",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113d\"\n                },\n                {\n                  \"label\": \"QBO Preferred Vendor\",\n                  \"value\": \"Bob's Burger Joint\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113e\"\n                },\n                {\n                  \"label\": \"New product\",\n                  \"value\": \"\",\n                  \"type\": \"LOOKUP\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f113f\"\n                },\n                {\n                  \"label\": \"QBO Inventory Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f1140\"\n                },\n                {\n                  \"label\": \"QBO Expense Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f1141\"\n                },\n                {\n                  \"label\": \"QBO Income Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66b34b4db06dce040f8f1142\"\n                },\n                {\n                  \"label\": \"Serial Number\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": false,\n                  \"_id\": \"66169dc26c722091c5188ada\"\n                },\n                {\n                  \"label\": \"Empty Text input\",\n                  \"value\": \"Health Insurance that stays with you forever \",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa951372403\"\n                },\n                {\n                  \"label\": \"Select\",\n                  \"value\": \"value one\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa951372407\"\n                },\n                {\n                  \"label\": \"Radio\",\n                  \"value\": \"value one\",\n                  \"type\": \"RADIO\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa95137240a\"\n                },\n                {\n                  \"label\": \"Date Input\",\n                  \"value\": \"2023-09-29\",\n                  \"type\": \"DATE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa95137240b\"\n                },\n                {\n                  \"label\": \"Time Input\",\n                  \"value\": \"10:00:00\",\n                  \"type\": \"TIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa95137240c\"\n                },\n                {\n                  \"label\": \"Checkbox\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"6516614140c32fa95137240d\"\n                },\n                {\n                  \"label\": \"Test Asset\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": true,\n                  \"group_name\": \"Asset group\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34b4db06dce040f8f114a\"\n                },\n                {\n                  \"label\": \"Vignesh Custom\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"test group\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"66b34b4db06dce040f8f114b\"\n                },\n                {\n                  \"label\": \"Text Input\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New group\",\n                  \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34b4db06dce040f8f114c\"\n                },\n                {\n                  \"label\": \"Checkbox\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"test group\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"66b34b4db06dce040f8f114d\"\n                },\n                {\n                  \"label\": \"DateTime Input\",\n                  \"value\": \"\",\n                  \"type\": \"DATETIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"test group\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"66b34b4db06dce040f8f114e\"\n                },\n                {\n                  \"label\": \"Time Input\",\n                  \"value\": \"\",\n                  \"type\": \"TIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"test group\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"66b34b4db06dce040f8f114f\"\n                },\n                {\n                  \"label\": \"Text Area\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"test group\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"66b34b4db06dce040f8f1150\"\n                },\n                {\n                  \"label\": \"Product description\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Asset group\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34b4db06dce040f8f1151\"\n                },\n                {\n                  \"label\": \"Asset set name\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New group\",\n                  \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34b4db06dce040f8f1152\"\n                },\n                {\n                  \"label\": \"Asset decription\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New group\",\n                  \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34b4db06dce040f8f1153\"\n                },\n                {\n                  \"label\": \"Text Input\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New group\",\n                  \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34af9b06dce040f8f0f48\"\n                },\n                {\n                  \"label\": \"Asset set name\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New group\",\n                  \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"66b34af9b06dce040f8f0f4e\"\n                },\n                {\n                  \"label\": \"Test Asset\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": true,\n                  \"group_name\": \"Asset group j\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"6616a0396c722091c518935d\"\n                },\n                {\n                  \"label\": \"Product description\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Asset group j\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"6616a0396c722091c518935e\"\n                },\n                {\n                  \"label\": \"Part Input\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New Part\",\n                  \"group_uid\": \"e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c\",\n                  \"_id\": \"6516614140c32fa951372404\"\n                },\n                {\n                  \"label\": \"DateTime Input\",\n                  \"value\": \"\",\n                  \"type\": \"DATETIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"New Part\",\n                  \"group_uid\": \"e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c\",\n                  \"_id\": \"6516614140c32fa951372408\"\n                }\n              ],\n              \"location_availability\": [],\n              \"price\": 1500,\n              \"purchase_price\": 1500,\n              \"has_custom_tax\": true,\n              \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n              },\n              \"is_deleted\": false,\n              \"created_at\": \"2023-09-29T05:31:45.671Z\",\n              \"updated_at\": \"2024-08-09T09:48:11.948Z\",\n              \"product_no\": 702\n            },\n            \"product_id\": \"7878787878\",\n            \"product_uid\": \"7aab9620-5e89-11ee-a16d-d973f75ee849\",\n            \"location_uid\": \"\",\n            \"image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/44f7b900-5e89-11ee-a16d-d973f75ee849.png\",\n            \"name\": \"Boat Watch\",\n            \"brand\": \"Boat Watch\",\n            \"specification\": \"New Smart Watchs\",\n            \"description\": \"Health Insurance that stays with you forever \",\n            \"uom\": \"1\",\n            \"quantity\": 1,\n            \"unit_price\": 100,\n            \"product_type\": \"PRODUCT\",\n            \"associated_products\": [],\n            \"discount\": 0,\n            \"purchase_price\": 1500,\n            \"serial_nos\": [],\n            \"discount_type\": \"FIXED\",\n            \"total\": 100,\n            \"tax\": {\n              \"tax_exempt\": false\n            },\n            \"_id\": \"668407fec67fdafeda3dbda3\"\n          },\n          {\n            \"line_item_uid\": \"910ac46b-2ce5-44c6-9aca-46a697762ace\",\n            \"line_item_type\": \"ITEM\",\n            \"product_ref_id\": {\n              \"product_name\": \"Product#2\",\n              \"product_category\": {\n                \"category_name\": \"CAR MODELS\",\n                \"category_uid\": \"7c20c340-7319-11ea-844d-235e95026c96\"\n              },\n              \"product_uid\": \"022b9930-a96a-11e9-a952-716e2bba4402\",\n              \"updated_at\": \"2025-01-02T12:23:45.694Z\",\n              \"created_at\": \"2019-07-18T14:40:37.955Z\",\n              \"is_deleted\": false,\n              \"price\": 500,\n              \"location_availability\": [\n                {\n                  \"location\": {\n                    \"is_deleted\": false,\n                    \"location_name\": \"Chennai_1\",\n                    \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                  }\n                },\n                {\n                  \"location\": {\n                    \"is_deleted\": false,\n                    \"location_name\": \"Dallas\",\n                    \"location_uid\": \"fa5c8210-1c2f-11ec-9640-e3d36b3153f4\"\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"0f34c290-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"100\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"12429ed0-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"106\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"62798570-927a-11ed-a0be-1142bea4a374\",\n                    \"location_name\": \"296 W Montauk Hwy\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"12d1fa10-a12b-11ed-9cee-1d71b5cbf00e\",\n                    \"location_name\": \"71\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"978ae290-9ca2-11ed-9f13-9789cec5f4f1\",\n                    \"location_name\": \"South Zone: Tirunelveli\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"138000d0-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"107\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"14b43b10-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"108\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"1b314d70-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"113\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"95e21490-9ca2-11ed-9f13-9789cec5f4f1\",\n                    \"location_name\": \"123 new\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"fd3e10f0-9caa-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"73 1\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"009c0900-9cab-11ed-afcd-e3289b5f2d85\",\n                    \"location_name\": \"87\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"5e50d3a0-9c9c-11ed-9f13-9789cec5f4f1\",\n                    \"location_name\": \"testLocation2501\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"0cfc82ab-e698-4aa3-949d-c79e32f83be9\",\n                    \"location_name\": \"AVK 2\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"813282f0-927a-11ed-a0be-1142bea4a374\",\n                    \"location_name\": \"Bay 4 Service Warehouse\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"d82f2ee0-c24b-11ed-a5fb-819eccddada1\",\n                    \"location_name\": \"Test Filter Location\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"0986e610-f49a-11ed-8436-d1e0a7ce17c7\",\n                    \"location_name\": \"New Jercsey\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"4c90d230-87e6-11ec-a0b1-1bc079724999\",\n                    \"location_name\": \"W1 Warehouse\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"b4a31f90-fcba-11ee-a220-2f0c7f1bdb78\",\n                    \"location_name\": \"test1\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"991dbe50-0166-11ef-9e0f-7d9b1fb7fe27\",\n                    \"location_name\": \"tst1\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"d05d92a0-0166-11ef-9e0f-7d9b1fb7fe27\",\n                    \"location_name\": \"tst2\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"92d64570-0167-11ef-9e0f-7d9b1fb7fe27\",\n                    \"location_name\": \"tst3\",\n                    \"is_deleted\": false\n                  }\n                },\n                {\n                  \"location\": {\n                    \"location_uid\": \"9e1c2790-7542-11ed-b4a1-71af0364aa70\",\n                    \"location_name\": \"Los Angeles\",\n                    \"is_deleted\": false\n                  }\n                }\n              ],\n              \"meta_data\": [\n                {\n                  \"label\": \"Xero Item Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57eed\"\n                },\n                {\n                  \"label\": \"QBO Class\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57eee\"\n                },\n                {\n                  \"label\": \"QB Product ID\",\n                  \"value\": \"55\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57eef\"\n                },\n                {\n                  \"label\": \"Text Area\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef0\"\n                },\n                {\n                  \"label\": \"Hidden field\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef1\"\n                },\n                {\n                  \"label\": \"testitem\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": true,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef2\"\n                },\n                {\n                  \"label\": \"QBO Preferred Vendor\",\n                  \"value\": \"Bob's Burger Joint\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef3\"\n                },\n                {\n                  \"label\": \"New product\",\n                  \"value\": \"\",\n                  \"type\": \"LOOKUP\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef4\"\n                },\n                {\n                  \"label\": \"QBO Inventory Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef5\"\n                },\n                {\n                  \"label\": \"QBO Expense Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef6\"\n                },\n                {\n                  \"label\": \"QBO Income Account\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"_id\": \"677396508fbcd0580ad57ef7\"\n                },\n                {\n                  \"label\": \"Mobile test hidden to FE\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": true,\n                  \"_id\": \"677396508fbcd0580ad57ef8\"\n                },\n                {\n                  \"label\": \"Xero Item ID\",\n                  \"value\": \"852\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": false,\n                  \"_id\": \"673dbd363e30fd820916d5b0\"\n                },\n                {\n                  \"label\": \"Vignesh Custom\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Part/Product\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"677396508fbcd0580ad57efa\"\n                },\n                {\n                  \"label\": \"Checkbox\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_ITEM\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Part/Product\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"677396508fbcd0580ad57efb\"\n                },\n                {\n                  \"label\": \"Time Input\",\n                  \"value\": \"\",\n                  \"type\": \"TIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Part/Product\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"677396508fbcd0580ad57efc\"\n                },\n                {\n                  \"label\": \"DateTime Input\",\n                  \"value\": \"\",\n                  \"type\": \"DATETIME\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Part/Product\",\n                  \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                  \"_id\": \"677396508fbcd0580ad57efd\"\n                },\n                {\n                  \"label\": \"Test Asset\",\n                  \"value\": \"\",\n                  \"type\": \"SINGLE_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": true,\n                  \"group_name\": \"Asset group for product\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"677396508fbcd0580ad57efe\"\n                },\n                {\n                  \"label\": \"Product description\",\n                  \"value\": \"\",\n                  \"type\": \"MULTI_LINE\",\n                  \"hide_field\": false,\n                  \"module_name\": \"PRODUCT\",\n                  \"hide_to_fe\": false,\n                  \"group_name\": \"Asset group for product\",\n                  \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                  \"_id\": \"677396508fbcd0580ad57eff\"\n                },\n                {\n                  \"label\": \"Xero Item ID\",\n                  \"value\": \"852\",\n                  \"hide_field\": false,\n                  \"hide_to_fe\": false,\n                  \"_id\": \"67767e439dd197ac578d1369\"\n                }\n              ],\n              \"product_id\": \"852\",\n              \"has_custom_tax\": false,\n              \"product_type\": \"PRODUCT\",\n              \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n              },\n              \"prefix\": \"ak test\",\n              \"purchase_price\": 100,\n              \"is_billable\": false\n            },\n            \"product_id\": \"852\",\n            \"product_uid\": \"022b9930-a96a-11e9-a952-716e2bba4402\",\n            \"location_uid\": \"\",\n            \"image\": \"\",\n            \"name\": \"Product#2\",\n            \"brand\": \"\",\n            \"specification\": \"\",\n            \"description\": \"Test product description\",\n            \"uom\": \"\",\n            \"quantity\": 5,\n            \"unit_price\": 250,\n            \"unit_price_premarkup\": 100,\n            \"product_type\": \"PRODUCT\",\n            \"associated_products\": [],\n            \"markup\": {\n              \"markup_type\": \"FLAT\",\n              \"markup_value\": 150,\n              \"markup_price\": 150\n            },\n            \"discount\": 0,\n            \"purchase_price\": 100,\n            \"serial_nos\": [],\n            \"discount_type\": \"FIXED\",\n            \"total\": 1250,\n            \"tax\": {\n              \"tax_name\": \"Custom tax\",\n              \"tax_rate\": null,\n              \"tax_amount\": 0,\n              \"tax_exempt\": false\n            },\n            \"_id\": \"66840842c67fdafeda3dc047\"\n          }\n        ],\n        \"discount\": {\n          \"type\": \"PERCENTAGE\",\n          \"value\": 0,\n          \"percent\": 0,\n          \"discount_applicability\": \"LINE_ITEM\",\n          \"discount_label\": \"Discount\"\n        },\n        \"fees\": [],\n        \"tax\": [\n          {\n            \"tax_id\": {\n              \"tax_uid\": \"d7e1bc30-fbbd-11ee-b23b-b9743bfe06c8\",\n              \"tax_name\": \"GST\",\n              \"tax_applicable_to\": [],\n              \"tax_rate\": 8,\n              \"is_local_tax\": false,\n              \"applicable_to\": [],\n              \"is_active\": true\n            },\n            \"tax_uid\": \"d7e1bc30-fbbd-11ee-b23b-b9743bfe06c8\",\n            \"tax_name\": \"GST\",\n            \"tax_percent\": 8,\n            \"tax_amount\": 108,\n            \"_id\": \"677b7bac0201067244522192\"\n          }\n        ],\n        \"financing\": {\n          \"is_enabled\": false,\n          \"promo_message\": \"As Low as $29.07/month for 24 months at 10%\",\n          \"financing_provider\": {\n            \"financing_provider_uid\": \"dae4be39-ddbe-4edf-9ae4-eb27f9cc755e\",\n            \"financing_provider_name\": \"Sun Financing\",\n            \"financing_provider_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/3c0f3c2b-49de-44b1-95b5-57b44463df95/4d8c0d79-3ee7-4fcd-a8ee-67b432524550.jpg\",\n            \"financing_plans\": [\n              {\n                \"financing_plan_name\": \"Markup Flat\",\n                \"financing_plan_uid\": \"b9ddefdc-dfd2-4911-9284-19ad700b2eca\",\n                \"term\": {\n                  \"value\": 2,\n                  \"type\": \"YEAR\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": true,\n                  \"type\": \"MARKUP\",\n                  \"markup\": {\n                    \"markup_type\": \"FLAT\",\n                    \"markup_value\": 10\n                  }\n                },\n                \"_id\": \"69c8190b5fe329f4e70928ec\"\n              },\n              {\n                \"financing_plan_name\": \"Markup percent\",\n                \"financing_plan_uid\": \"e8a969c0-dd65-4b58-a00c-20a9ee08e2f8\",\n                \"term\": {\n                  \"value\": 24,\n                  \"type\": \"MONTH\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": true,\n                  \"type\": \"MARKUP\",\n                  \"markup\": {\n                    \"markup_type\": \"PERCENTAGE\",\n                    \"markup_value\": 10\n                  }\n                },\n                \"_id\": \"69c8190b5fe329f4e70928ed\"\n              },\n              {\n                \"financing_plan_name\": \"Markup multi\",\n                \"financing_plan_uid\": \"63c3ead8-793e-41c5-a293-aebf63ed50f8\",\n                \"term\": {\n                  \"value\": 2,\n                  \"type\": \"YEAR\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": true,\n                  \"type\": \"MARKUP\",\n                  \"markup\": {\n                    \"markup_type\": \"MULTIPLIER\",\n                    \"markup_value\": 10\n                  }\n                },\n                \"_id\": \"69c8190b5fe329f4e70928ee\"\n              },\n              {\n                \"financing_plan_name\": \"Dealer fee flat\",\n                \"financing_plan_uid\": \"2f833c64-3605-4f4a-8c7d-d0dd015c1807\",\n                \"term\": {\n                  \"value\": 24,\n                  \"type\": \"MONTH\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": true,\n                  \"type\": \"CUSTOM_FEE\",\n                  \"custom_fee\": {\n                    \"label\": \"Dealer fee ak\",\n                    \"value\": 10,\n                    \"type\": \"FIXED\"\n                  }\n                },\n                \"_id\": \"69c8190b5fe329f4e70928ef\"\n              },\n              {\n                \"financing_plan_name\": \"Dealer fee percent\",\n                \"financing_plan_uid\": \"5ba59819-3f32-48da-aa12-9c648e3fe003\",\n                \"term\": {\n                  \"value\": 2,\n                  \"type\": \"YEAR\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": true,\n                  \"type\": \"CUSTOM_FEE\",\n                  \"custom_fee\": {\n                    \"label\": \"Dealer fee\",\n                    \"value\": 20,\n                    \"type\": \"PERCENTAGE\"\n                  }\n                },\n                \"_id\": \"69c8190b5fe329f4e70928f0\"\n              },\n              {\n                \"financing_plan_name\": \"no additional charge\",\n                \"financing_plan_uid\": \"5d630811-637a-40ba-90e1-588c43b61ccc\",\n                \"term\": {\n                  \"value\": 24,\n                  \"type\": \"MONTH\"\n                },\n                \"apr\": 10,\n                \"dealer_fee\": {\n                  \"is_enabled\": false\n                },\n                \"_id\": \"69c8190b5fe329f4e70928f1\"\n              }\n            ],\n            \"is_deleted\": false\n          },\n          \"financing_plan_uid\": \"b9ddefdc-dfd2-4911-9284-19ad700b2eca\",\n          \"apr\": 10,\n          \"term\": {\n            \"value\": 2,\n            \"type\": \"YEAR\"\n          },\n          \"monthly_installment\": 29.07\n        },\n        \"sub_total\": 1350,\n        \"total\": 1350,\n        \"_id\": \"677b7bac020106724452218f\"\n      }\n    ],\n    \"attachments\": [\n      {\n        \"attachment_uid\": \"d9136912-db4e-439b-a90f-113f389d2d97\",\n        \"file_name\": \"errors.doc\",\n        \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/952338e7-c752-4652-9f53-17103ec51235.doc\",\n        \"visible_to_customer\": false,\n        \"created_by\": {\n          \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n          \"first_name\": \"3e\",\n          \"last_name\": \"M\",\n          \"email\": \"3e.m@zuper.co\",\n          \"external_login_id\": \"\",\n          \"home_phone_number\": null,\n          \"designation\": \"Tech\",\n          \"emp_code\": \"1234\",\n          \"prefix\": \"Z22\",\n          \"work_phone_number\": null,\n          \"mobile_phone_number\": null,\n          \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n          \"hourly_labor_charge\": 20,\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"created_at\": \"2024-07-05T06:42:02.000Z\",\n          \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"_id\": \"677b75962d9c5266f268dd63\",\n        \"created_at\": \"2025-01-06T06:17:58.291Z\"\n      },\n      {\n        \"attachment_uid\": \"b3eadc-4ea3-4113-acc4-ca19c07fc864\",\n        \"file_name\": \"errors.doc\",\n        \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/dc2132b6-7ab2-469e-babc-cfa833f85e84.doc\",\n        \"visible_to_customer\": false,\n        \"created_by\": {\n          \"user_uid\": \"4866-fef6-4637-99e7-f09377a4f9ba\",\n          \"first_name\": \"e3\",\n          \"last_name\": \"M\",\n          \"email\": \"3e.m@zuper.co\",\n          \"external_login_id\": \"\",\n          \"home_phone_number\": null,\n          \"designation\": \"Tech\",\n          \"emp_code\": \"1234\",\n          \"prefix\": \"Z22\",\n          \"work_phone_number\": null,\n          \"mobile_phone_number\": null,\n          \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n          \"hourly_labor_charge\": 20,\n          \"is_active\": true,\n          \"is_deleted\": false,\n          \"created_at\": \"2024-07-05T06:42:02.000Z\",\n          \"updated_at\": \"2024-12-26T12:12:07.000Z\"\n        },\n        \"_id\": \"677b7a3ff00d6b1ca7660e07\",\n        \"created_at\": \"2025-01-06T06:37:51.368Z\"\n      }\n    ],\n    \"notes\": [],\n    \"created_at\": \"2025-01-06T06:17:57.958Z\",\n    \"updated_at\": \"2025-01-06T06:43:57.625Z\",\n    \"estimate_no\": 8493,\n    \"layout_association\": {\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"layout_association_uid\": \"b1bf66fb-e886-4c8d-b381-94db4c2c7c07\",\n      \"module_uid\": \"41d1dee0-f602-4d1a-b00a-d73ac976461d\",\n      \"layout_uid\": \"e4a16a01-1e22-4e54-a50b-9abab1bf7b4e\",\n      \"layout_module\": \"PROPOSAL\",\n      \"layout_template\": {\n        \"is_active\": false,\n        \"is_deleted\": true,\n        \"layout_uid\": \"e4a16a01-1e22-4e54-a50b-9abab1bf7b4e\",\n        \"layout_name\": \"GAF\",\n        \"layout_module\": \"PROPOSAL\"\n      }\n    }\n  }\n}'"
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
                        "estimate_uid": {
                          "type": "string",
                          "example": "bde94a1f-6b76-4e6e-b2bb-2c3e985923fd"
                        },
                        "prefix": {
                          "type": "string",
                          "example": "10000"
                        },
                        "reference_no": {
                          "type": "string",
                          "example": "12345653311"
                        },
                        "estimate_description": {
                          "type": "string",
                          "example": "<p>test</p>"
                        },
                        "plain_text_description": {
                          "type": "string",
                          "example": "test"
                        },
                        "markdown_description": {
                          "type": "string",
                          "example": "test"
                        },
                        "estimate_date": {
                          "type": "string",
                          "example": "2025-01-05T18:30:00.000Z"
                        },
                        "expiry_date": {
                          "type": "string",
                          "example": "2025-01-06T18:29:00.000Z"
                        },
                        "project": {},
                        "customer": {
                          "type": "object",
                          "properties": {
                            "customer_uid": {
                              "type": "string",
                              "example": "d41e9fe0-6442-11ee-b5d5-49505c31565c"
                            },
                            "customer_first_name": {
                              "type": "string",
                              "example": "Hari"
                            },
                            "customer_last_name": {
                              "type": "string",
                              "example": "V"
                            },
                            "customer_category": {},
                            "customer_organization": {
                              "type": "object",
                              "properties": {
                                "organization_uid": {
                                  "type": "string",
                                  "example": "cf1940f0-1b26-11ee-a61c-c7daced78d3d"
                                },
                                "organization_name": {
                                  "type": "string",
                                  "example": "Acme Inc."
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
                                        "example": "HubSpot Company ID"
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
                                      "group_name": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "group_uid": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "_id": {
                                        "type": "string",
                                        "example": "663b7a242c0524815c8079a4"
                                      }
                                    }
                                  }
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2023-07-05T11:26:39.231Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2024-07-26T05:14:58.331Z"
                                },
                                "organization_address": {
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
                                      "example": "WorkEZ Willow Square Guindy - Managed Offices and Coworking Spaces, 1st Street, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy"
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
                                    },
                                    "geo_cordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 13.0104643,
                                        "default": 0
                                      }
                                    },
                                    "point_coordinates": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "example": "Point"
                                        },
                                        "coordinates": {
                                          "type": "array",
                                          "items": {
                                            "type": "number",
                                            "example": 80.2090733,
                                            "default": 0
                                          }
                                        }
                                      }
                                    }
                                  }
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
                                      "example": "WorkEZ Urban Square OMR - Coworking Spaces, Elango Nagar, Perungudi"
                                    },
                                    "country": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "landmark": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "zip_code": {
                                      "type": "string",
                                      "example": "600041"
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
                                    },
                                    "geo_cordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 12.9730624,
                                        "default": 0
                                      }
                                    },
                                    "point_coordinates": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "example": "Point"
                                        },
                                        "coordinates": {
                                          "type": "array",
                                          "items": {
                                            "type": "number",
                                            "example": 80.2505897,
                                            "default": 0
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "organization_description": {},
                                "organization_email": {},
                                "organization_logo": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/fb1ecfb0-7f91-11ee-93cb-5be0a22f4e69.png"
                                },
                                "tax": {
                                  "type": "object",
                                  "properties": {
                                    "tax_exempt": {
                                      "type": "boolean",
                                      "example": false,
                                      "default": true
                                    }
                                  }
                                },
                                "organization_timezone": {
                                  "type": "string",
                                  "example": "Africa/Cairo"
                                }
                              }
                            },
                            "customer_company_name": {
                              "type": "string",
                              "example": ""
                            },
                            "customer_email": {
                              "type": "string",
                              "example": "hariv+90@gmail.com"
                            },
                            "customer_all_addresses": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "Mumbai"
                                  },
                                  "street": {
                                    "type": "string",
                                    "example": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla"
                                  },
                                  "country": {
                                    "type": "string",
                                    "example": "India"
                                  },
                                  "zip_code": {
                                    "type": "string",
                                    "example": "400070"
                                  },
                                  "is_primary": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "658bc57c65e21e305757833e"
                                  }
                                }
                              }
                            },
                            "customer_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Mumbai"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "400070"
                                }
                              }
                            },
                            "customer_billing_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Mumbai"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "400070"
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
                                    "example": "Quickbooks ID"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "400"
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
                                    "example": "658bc57c65e21e3057578340"
                                  }
                                }
                              }
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
                            "has_card_on_file": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_exempt": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
                              }
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-10-06T12:21:08.483Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-03-04T06:48:31.770Z"
                            },
                            "customer_contact_no": {}
                          }
                        },
                        "organization": {
                          "type": "object",
                          "properties": {
                            "organization_uid": {
                              "type": "string",
                              "example": "cf1940f0-1b26-11ee-a61c-c7daced78d3d"
                            },
                            "organization_name": {
                              "type": "string",
                              "example": "Acme Inc."
                            },
                            "no_of_customers": {
                              "type": "integer",
                              "example": 27,
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
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "HubSpot Company ID"
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
                                  "group_name": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "group_uid": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "663b7a242c0524815c8079a4"
                                  }
                                }
                              }
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-07-05T11:26:39.231Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-07-26T05:14:58.331Z"
                            },
                            "organization_address": {
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
                                  "example": "WorkEZ Willow Square Guindy - Managed Offices and Coworking Spaces, 1st Street, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy"
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
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 13.0104643,
                                    "default": 0
                                  }
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 80.2090733,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              }
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
                                  "example": "WorkEZ Urban Square OMR - Coworking Spaces, Elango Nagar, Perungudi"
                                },
                                "country": {
                                  "type": "string",
                                  "example": ""
                                },
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "600041"
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
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9730624,
                                    "default": 0
                                  }
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 80.2505897,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "organization_description": {},
                            "organization_email": {},
                            "organization_logo": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/fb1ecfb0-7f91-11ee-93cb-5be0a22f4e69.png"
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_exempt": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
                              }
                            },
                            "organization_timezone": {
                              "type": "string",
                              "example": "Africa/Cairo"
                            }
                          }
                        },
                        "property": {
                          "type": "object",
                          "properties": {
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
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_exempt": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
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
                                    "example": "Time Input"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "TIME"
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
                                    "example": "672b478e3ad6c2466d11b684"
                                  }
                                }
                              }
                            },
                            "property_address": {
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
                                  "example": "RMZ Software Park,Pvt Ltd., Mount Poonamallee Road, Porur"
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
                                  "example": "600125"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 13.0310078,
                                    "default": 0
                                  }
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 80.1682374,
                                        "default": 0
                                      }
                                    }
                                  }
                                },
                                "_id": {
                                  "type": "string",
                                  "example": "672b478e3ad6c2466d11b688"
                                }
                              }
                            },
                            "property_image": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/7fc5997a-8efb-4759-86ff-10ef51c3246b.jpg"
                            },
                            "no_of_jobs": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "property_name": {
                              "type": "string",
                              "example": "Acme Property"
                            },
                            "property_uid": {
                              "type": "string",
                              "example": "81f5c870-9c2b-11ef-a9ff-dd3068964df0"
                            }
                          }
                        },
                        "request": {},
                        "customer_billing_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": ""
                            },
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
                              "example": "WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600041"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9730624,
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
                        "customer_service_address": {
                          "type": "object",
                          "properties": {
                            "landmark": {
                              "type": "string",
                              "example": ""
                            },
                            "city": {
                              "type": "string",
                              "example": "Mumbai"
                            },
                            "state": {
                              "type": "string",
                              "example": ""
                            },
                            "street": {
                              "type": "string",
                              "example": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla"
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "400070"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Hari"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "V"
                            },
                            "phone_number": {
                              "type": "string",
                              "example": ""
                            },
                            "email": {
                              "type": "string",
                              "example": "hariv+90@gmail.com"
                            }
                          }
                        },
                        "job": {
                          "type": "object",
                          "properties": {
                            "job_uid": {
                              "type": "string",
                              "example": "366a23b0-d9f3-11ee-9054-0be1fec3fea9"
                            },
                            "prefix": {
                              "type": "string",
                              "example": "V2-004"
                            },
                            "job_title": {
                              "type": "string",
                              "example": "test7"
                            },
                            "job_description": {
                              "type": "string",
                              "example": "<p>Tower <strong>maintenance</strong></p>"
                            },
                            "job_category": {
                              "type": "object",
                              "properties": {
                                "is_deleted": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "estimated_duration": {
                                  "type": "object",
                                  "properties": {
                                    "days": {
                                      "type": "integer",
                                      "example": 2,
                                      "default": 0
                                    },
                                    "hours": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "minutes": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    }
                                  }
                                },
                                "category_name": {
                                  "type": "string",
                                  "example": "Tower Maintenance 1"
                                },
                                "category_uid": {
                                  "type": "string",
                                  "example": "5aa538a0-e38e-11ea-9951-bd17f6a7ddb8"
                                },
                                "category_color": {
                                  "type": "string",
                                  "example": "#4F46E5"
                                }
                              }
                            },
                            "job_priority": {
                              "type": "string",
                              "example": "URGENT"
                            },
                            "scheduled_start_time": {
                              "type": "string",
                              "example": "2019-02-04T08:00:00.000Z"
                            },
                            "scheduled_end_time": {
                              "type": "string",
                              "example": "2019-02-06T08:00:00.000Z"
                            },
                            "due_date": {
                              "type": "string",
                              "example": "2024-03-31T18:29:59.000Z"
                            },
                            "customer_address": {
                              "type": "object",
                              "properties": {
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
                                "city": {
                                  "type": "string",
                                  "example": "Mumbai"
                                },
                                "state": {
                                  "type": "string",
                                  "example": ""
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla"
                                },
                                "country": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "400070"
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
                                  "example": "Hari"
                                },
                                "last_name": {
                                  "type": "string",
                                  "example": "V"
                                },
                                "phone_number": {
                                  "type": "string",
                                  "example": ""
                                },
                                "email": {
                                  "type": "string",
                                  "example": "hariv+90@gmail.com"
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "customer_billing_address": {
                              "type": "object",
                              "properties": {
                                "landmark": {
                                  "type": "string",
                                  "example": ""
                                },
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
                                  "example": "WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi"
                                },
                                "country": {
                                  "type": "string",
                                  "example": ""
                                },
                                "zip_code": {
                                  "type": "string",
                                  "example": "600041"
                                },
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9730624,
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
                            "custom_fields": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "Feelings"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "MULTI_LINE"
                                  },
                                  "module_name": {
                                    "type": "string",
                                    "example": "PRODUCT"
                                  },
                                  "hide_to_fe": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "hide_field": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "read_only": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "_id": {
                                    "type": "string",
                                    "example": "65e56ebf53d05d1cd388ca29"
                                  }
                                }
                              }
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "job_status": {
                              "type": "array"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-03-04T06:48:31.736Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-04-03T18:29:59.254Z"
                            },
                            "work_order_number": {
                              "type": "integer",
                              "example": 16147,
                              "default": 0
                            }
                          }
                        },
                        "line_items": {
                          "type": "array"
                        },
                        "tax_exempt": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "sub_total": {
                          "type": "integer",
                          "example": 1350,
                          "default": 0
                        },
                        "discount": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "FIXED"
                            },
                            "value": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "percent": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "discount_applicability": {
                              "type": "string",
                              "example": "TRANSACTION"
                            },
                            "discount_label": {
                              "type": "string",
                              "example": "Discount"
                            }
                          }
                        },
                        "fees": {
                          "type": "array"
                        },
                        "total": {
                          "type": "integer",
                          "example": 1350,
                          "default": 0
                        },
                        "total_discount": {},
                        "remarks": {
                          "type": "string",
                          "example": "default remarks for quote by ak"
                        },
                        "template": {
                          "type": "object",
                          "properties": {
                            "template_name": {
                              "type": "string",
                              "example": "Template 1(dont choose)"
                            },
                            "template": {
                              "type": "string",
                              "example": "<style>* { box-sizing: border-box; } body {margin: 0;}*{font-size:12px;font-family:sans-serif;box-sizing:border-box;}table{break-inside:avoid;overflow-x:visible !important;overflow-y:visible !important;border-top-width:initial !important;border-right-width:initial !important;border-bottom-width:initial !important;border-left-width:initial !important;border-top-style:none !important;border-right-style:none !important;border-bottom-style:none !important;border-left-style:none !important;border-top-color:initial !important;border-right-color:initial !important;border-bottom-color:initial !important;border-left-color:initial !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}tr, th, td{padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;border-top-width:initial !important;border-right-width:initial !important;border-bottom-width:initial !important;border-left-width:initial !important;border-top-style:none !important;border-right-style:none !important;border-bottom-style:none !important;border-left-style:none !important;border-top-color:initial !important;border-right-color:initial !important;border-bottom-color:initial !important;border-left-color:initial !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}thead{display:table-header-group;}tfoot{display:table-row-group;}tr{break-inside:avoid;break-before:avoid;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}</style>{{formatCurrency total 'USA' 'USD'}}"
                            },
                            "template_description": {
                              "type": "string",
                              "example": "new twmp des"
                            },
                            "type": {
                              "type": "string",
                              "example": "ESTIMATE"
                            },
                            "template_uid": {
                              "type": "string",
                              "example": "014c1490-d84f-11e9-b7cf-118df12e5532"
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "template_options": {
                              "type": "object",
                              "properties": {
                                "format": {
                                  "type": "string",
                                  "example": "A4"
                                },
                                "orientation": {
                                  "type": "string",
                                  "example": "portrait"
                                },
                                "border": {
                                  "type": "object",
                                  "properties": {
                                    "top": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "right": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "bottom": {
                                      "type": "string",
                                      "example": "10mm"
                                    },
                                    "left": {
                                      "type": "string",
                                      "example": "10mm"
                                    }
                                  }
                                }
                              }
                            },
                            "render_engine": {
                              "type": "string",
                              "example": "PUPPETEER"
                            }
                          }
                        },
                        "tags": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "test"
                          }
                        },
                        "tax": {
                          "type": "array"
                        },
                        "taxation_meta": {
                          "type": "object",
                          "properties": {
                            "current_status": {
                              "type": "string",
                              "example": "SAVED"
                            },
                            "status_history": {
                              "type": "array"
                            }
                          }
                        },
                        "estimate_status": {
                          "type": "string",
                          "example": "DRAFT"
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
                                "example": "test"
                              },
                              "type": {
                                "type": "string",
                                "example": "SINGLE_LINE"
                              },
                              "module_name": {
                                "type": "string",
                                "example": "PRODUCT"
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
                                "example": "677b7bac020106724452218c"
                              }
                            }
                          }
                        },
                        "status_history": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status_name": {
                                "type": "string",
                                "example": "DRAFT"
                              },
                              "done_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "3e"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "M"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "3e.m@zuper.co"
                                  },
                                  "external_login_id": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "Tech"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "1234"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "Z22"
                                  },
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                  },
                                  "hourly_labor_charge": {
                                    "type": "integer",
                                    "example": 20,
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
                                    "example": "2024-07-05T06:42:02.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-12-26T12:12:07.000Z"
                                  }
                                }
                              },
                              "done_by_type": {
                                "type": "string",
                                "example": "EMPLOYEE"
                              },
                              "_id": {
                                "type": "string",
                                "example": "677b7595f00d6b1ca76601c4"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2025-01-06T06:17:57.942Z"
                              },
                              "line_items_status": {
                                "type": "array"
                              },
                              "attachments": {
                                "type": "array"
                              }
                            }
                          }
                        },
                        "deposit": {
                          "type": "object",
                          "properties": {
                            "total": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "status": {
                              "type": "string",
                              "example": "NOT_COLLECTED"
                            },
                            "is_void": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "is_expired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_converted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
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
                        "sold_by_user": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "50689376-6348-41dd-81e3-9d75dc73027d"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Maruthu"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Raja"
                            },
                            "email": {
                              "type": "string",
                              "example": "Maruthu@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Test"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "5000"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "8220131280"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/04a37b90-9a53-11ee-8187-39c77e7ec503.webp"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 20,
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
                              "example": "2023-05-05T06:57:26.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-12-14T07:33:04.000Z"
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "3e"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "M"
                            },
                            "email": {
                              "type": "string",
                              "example": "3e.m@zuper.co"
                            },
                            "external_login_id": {
                              "type": "string",
                              "example": ""
                            },
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Tech"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "1234"
                            },
                            "prefix": {
                              "type": "string",
                              "example": "Z22"
                            },
                            "work_phone_number": {},
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 20,
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
                              "example": "2024-07-05T06:42:02.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-12-26T12:12:07.000Z"
                            }
                          }
                        },
                        "public_url": {
                          "type": "string",
                          "example": "https://stagingv2.zuperpro.com/api/customer_portal/estimates?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&estimate_uid=bde94a1f-6b76-4e6e-b2bb-2c3e985923fd&to=hariv+90@gmail.com"
                        },
                        "deposit_payment_url": {
                          "type": "string",
                          "example": "https://stagingv2.zuperpro.com/api/customer_portal/estimates/collect_deposit?company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa&estimate_uid=bde94a1f-6b76-4e6e-b2bb-2c3e985923fd"
                        },
                        "financing": {
                          "type": "object",
                          "properties": {
                            "promo_message": {
                              "type": "string",
                              "example": "From $61.61/month at 8.90% APR for 24 months, totaling $1478.70*."
                            },
                            "is_enabled": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            }
                          }
                        },
                        "is_proposal": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "proposal_title": {
                          "type": "string",
                          "example": "Proposal for Hari V 2"
                        },
                        "proposal_template": {
                          "type": "object",
                          "properties": {
                            "template_uid": {
                              "type": "string",
                              "example": "84c44eb0-4262-11ee-b1a1-7372ef614376"
                            },
                            "template_name": {
                              "type": "string",
                              "example": "Proposal Template"
                            }
                          }
                        },
                        "proposal_options": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "option_uid": {
                                "type": "string",
                                "example": "ba531e08-d8d0-473c-bba1-a6373e8c5eed"
                              },
                              "option_name": {
                                "type": "string",
                                "example": "Option 3"
                              },
                              "option_description": {
                                "type": "string",
                                "example": "test"
                              },
                              "is_accepted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "deposit": {
                                "type": "integer",
                                "example": 500,
                                "default": 0
                              },
                              "package": {
                                "type": "object",
                                "properties": {
                                  "package_name": {
                                    "type": "string",
                                    "example": "Applot 1"
                                  },
                                  "package_description": {
                                    "type": "string",
                                    "example": "Sample Packages for companies"
                                  },
                                  "master_package": {
                                    "type": "object",
                                    "properties": {
                                      "package_uid": {
                                        "type": "string",
                                        "example": "72e0b360-3c21-11ee-82aa-858410f587b5"
                                      },
                                      "package_name": {
                                        "type": "string",
                                        "example": "Applot 1"
                                      },
                                      "package_description": {
                                        "type": "string",
                                        "example": "Sample Packages for companies"
                                      },
                                      "is_deleted": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "created_at": {
                                        "type": "string",
                                        "example": "2023-08-16T10:41:25.403Z"
                                      },
                                      "updated_at": {
                                        "type": "string",
                                        "example": "2024-07-02T14:04:00.320Z"
                                      }
                                    }
                                  }
                                }
                              },
                              "line_items": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "line_item_uid": {
                                      "type": "string",
                                      "example": "b4c7ff9d-412f-4e90-ba2b-ecefabdf66b1"
                                    },
                                    "line_item_type": {
                                      "type": "string",
                                      "example": "ITEM"
                                    },
                                    "product_ref_id": {
                                      "type": "object",
                                      "properties": {
                                        "product_uid": {
                                          "type": "string",
                                          "example": "7aab9620-5e89-11ee-a16d-d973f75ee849"
                                        },
                                        "prefix": {
                                          "type": "string",
                                          "example": "PT"
                                        },
                                        "product_id": {
                                          "type": "string",
                                          "example": "7878787878"
                                        },
                                        "product_category": {
                                          "type": "object",
                                          "properties": {
                                            "category_name": {
                                              "type": "string",
                                              "example": "Civil Items"
                                            },
                                            "category_uid": {
                                              "type": "string",
                                              "example": "effde4f0-480d-11ea-85e2-91cf2fb0b4bb"
                                            }
                                          }
                                        },
                                        "product_name": {
                                          "type": "string",
                                          "example": "Boat Watch"
                                        },
                                        "product_type": {
                                          "type": "string",
                                          "example": "PRODUCT"
                                        },
                                        "meta_data": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "label": {
                                                "type": "string",
                                                "example": "QB Product ID"
                                              },
                                              "value": {
                                                "type": "string",
                                                "example": "2286"
                                              },
                                              "hide_field": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "hide_to_fe": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "_id": {
                                                "type": "string",
                                                "example": "66b34b54585a33f2849e25e0"
                                              }
                                            }
                                          }
                                        },
                                        "location_availability": {
                                          "type": "array"
                                        },
                                        "price": {
                                          "type": "integer",
                                          "example": 1500,
                                          "default": 0
                                        },
                                        "purchase_price": {
                                          "type": "integer",
                                          "example": 1500,
                                          "default": 0
                                        },
                                        "has_custom_tax": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        },
                                        "tax": {
                                          "type": "object",
                                          "properties": {
                                            "tax_rate": {},
                                            "tax_name": {
                                              "type": "string",
                                              "example": ""
                                            },
                                            "tax_exempt": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
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
                                          "example": "2023-09-29T05:31:45.671Z"
                                        },
                                        "updated_at": {
                                          "type": "string",
                                          "example": "2024-08-09T09:48:11.948Z"
                                        },
                                        "product_no": {
                                          "type": "integer",
                                          "example": 702,
                                          "default": 0
                                        }
                                      }
                                    },
                                    "product_id": {
                                      "type": "string",
                                      "example": "7878787878"
                                    },
                                    "product_uid": {
                                      "type": "string",
                                      "example": "7aab9620-5e89-11ee-a16d-d973f75ee849"
                                    },
                                    "location_uid": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "image": {
                                      "type": "string",
                                      "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/44f7b900-5e89-11ee-a16d-d973f75ee849.png"
                                    },
                                    "name": {
                                      "type": "string",
                                      "example": "Boat Watch"
                                    },
                                    "brand": {
                                      "type": "string",
                                      "example": "Boat Watch"
                                    },
                                    "specification": {
                                      "type": "string",
                                      "example": "New Smart Watchs"
                                    },
                                    "description": {
                                      "type": "string",
                                      "example": "Health Insurance that stays with you forever "
                                    },
                                    "uom": {
                                      "type": "string",
                                      "example": "1"
                                    },
                                    "quantity": {
                                      "type": "integer",
                                      "example": 1,
                                      "default": 0
                                    },
                                    "unit_price": {
                                      "type": "integer",
                                      "example": 100,
                                      "default": 0
                                    },
                                    "product_type": {
                                      "type": "string",
                                      "example": "PRODUCT"
                                    },
                                    "associated_products": {
                                      "type": "array"
                                    },
                                    "discount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "purchase_price": {
                                      "type": "integer",
                                      "example": 1500,
                                      "default": 0
                                    },
                                    "serial_nos": {
                                      "type": "array"
                                    },
                                    "discount_type": {
                                      "type": "string",
                                      "example": "FIXED"
                                    },
                                    "total": {
                                      "type": "integer",
                                      "example": 100,
                                      "default": 0
                                    },
                                    "tax": {
                                      "type": "object",
                                      "properties": {
                                        "tax_exempt": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        }
                                      }
                                    },
                                    "_id": {
                                      "type": "string",
                                      "example": "668407fec67fdafeda3dbda3"
                                    }
                                  }
                                }
                              },
                              "addons": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "line_item_uid": {
                                      "type": "string",
                                      "example": "b4c7ff9d-412f-4e90-ba2b-ecefabdf66b1"
                                    },
                                    "line_item_type": {
                                      "type": "string",
                                      "example": "ITEM"
                                    },
                                    "product_ref_id": {
                                      "type": "object",
                                      "properties": {
                                        "product_uid": {
                                          "type": "string",
                                          "example": "7aab9620-5e89-11ee-a16d-d973f75ee849"
                                        },
                                        "prefix": {
                                          "type": "string",
                                          "example": "PT"
                                        },
                                        "product_id": {
                                          "type": "string",
                                          "example": "7878787878"
                                        },
                                        "product_category": {
                                          "type": "object",
                                          "properties": {
                                            "category_name": {
                                              "type": "string",
                                              "example": "Civil Items"
                                            },
                                            "category_uid": {
                                              "type": "string",
                                              "example": "effde4f0-480d-11ea-85e2-91cf2fb0b4bb"
                                            }
                                          }
                                        },
                                        "product_name": {
                                          "type": "string",
                                          "example": "Boat Watch"
                                        },
                                        "product_type": {
                                          "type": "string",
                                          "example": "PRODUCT"
                                        },
                                        "meta_data": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "label": {
                                                "type": "string",
                                                "example": "QB Product ID"
                                              },
                                              "value": {
                                                "type": "string",
                                                "example": "2286"
                                              },
                                              "hide_field": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "hide_to_fe": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "_id": {
                                                "type": "string",
                                                "example": "66b34b54585a33f2849e25e0"
                                              }
                                            }
                                          }
                                        },
                                        "location_availability": {
                                          "type": "array"
                                        },
                                        "price": {
                                          "type": "integer",
                                          "example": 1500,
                                          "default": 0
                                        },
                                        "purchase_price": {
                                          "type": "integer",
                                          "example": 1500,
                                          "default": 0
                                        },
                                        "has_custom_tax": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        },
                                        "tax": {
                                          "type": "object",
                                          "properties": {
                                            "tax_rate": {},
                                            "tax_name": {
                                              "type": "string",
                                              "example": ""
                                            },
                                            "tax_exempt": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
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
                                          "example": "2023-09-29T05:31:45.671Z"
                                        },
                                        "updated_at": {
                                          "type": "string",
                                          "example": "2024-08-09T09:48:11.948Z"
                                        },
                                        "product_no": {
                                          "type": "integer",
                                          "example": 702,
                                          "default": 0
                                        }
                                      }
                                    },
                                    "product_id": {
                                      "type": "string",
                                      "example": "7878787878"
                                    },
                                    "product_uid": {
                                      "type": "string",
                                      "example": "7aab9620-5e89-11ee-a16d-d973f75ee849"
                                    },
                                    "location_uid": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "image": {
                                      "type": "string",
                                      "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/44f7b900-5e89-11ee-a16d-d973f75ee849.png"
                                    },
                                    "name": {
                                      "type": "string",
                                      "example": "Boat Watch"
                                    },
                                    "brand": {
                                      "type": "string",
                                      "example": "Boat Watch"
                                    },
                                    "specification": {
                                      "type": "string",
                                      "example": "New Smart Watchs"
                                    },
                                    "description": {
                                      "type": "string",
                                      "example": "Health Insurance that stays with you forever "
                                    },
                                    "uom": {
                                      "type": "string",
                                      "example": "1"
                                    },
                                    "quantity": {
                                      "type": "integer",
                                      "example": 1,
                                      "default": 0
                                    },
                                    "unit_price": {
                                      "type": "integer",
                                      "example": 100,
                                      "default": 0
                                    },
                                    "product_type": {
                                      "type": "string",
                                      "example": "PRODUCT"
                                    },
                                    "associated_products": {
                                      "type": "array"
                                    },
                                    "discount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "purchase_price": {
                                      "type": "integer",
                                      "example": 1500,
                                      "default": 0
                                    },
                                    "serial_nos": {
                                      "type": "array"
                                    },
                                    "discount_type": {
                                      "type": "string",
                                      "example": "FIXED"
                                    },
                                    "total": {
                                      "type": "integer",
                                      "example": 100,
                                      "default": 0
                                    },
                                    "tax": {
                                      "type": "object",
                                      "properties": {
                                        "tax_exempt": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        }
                                      }
                                    },
                                    "_id": {
                                      "type": "string",
                                      "example": "668407fec67fdafeda3dbda3"
                                    }
                                  }
                                }
                              },
                              "discount": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "PERCENTAGE"
                                  },
                                  "value": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "percent": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "discount_applicability": {
                                    "type": "string",
                                    "example": "LINE_ITEM"
                                  },
                                  "discount_label": {
                                    "type": "string",
                                    "example": "Discount"
                                  }
                                }
                              },
                              "fees": {
                                "type": "array"
                              },
                              "tax": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "tax_id": {
                                      "type": "object",
                                      "properties": {
                                        "tax_uid": {
                                          "type": "string",
                                          "example": "d7e1bc30-fbbd-11ee-b23b-b9743bfe06c8"
                                        },
                                        "tax_name": {
                                          "type": "string",
                                          "example": "GST"
                                        },
                                        "tax_applicable_to": {
                                          "type": "array"
                                        },
                                        "tax_rate": {
                                          "type": "integer",
                                          "example": 8,
                                          "default": 0
                                        },
                                        "is_local_tax": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "applicable_to": {
                                          "type": "array"
                                        },
                                        "is_active": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        }
                                      }
                                    },
                                    "tax_uid": {
                                      "type": "string",
                                      "example": "d7e1bc30-fbbd-11ee-b23b-b9743bfe06c8"
                                    },
                                    "tax_name": {
                                      "type": "string",
                                      "example": "GST"
                                    },
                                    "tax_percent": {
                                      "type": "integer",
                                      "example": 8,
                                      "default": 0
                                    },
                                    "tax_amount": {
                                      "type": "integer",
                                      "example": 108,
                                      "default": 0
                                    },
                                    "_id": {
                                      "type": "string",
                                      "example": "677b7bac0201067244522192"
                                    }
                                  }
                                }
                              },
                              "financing": {
                                "type": "object",
                                "properties": {
                                  "promo_message": {
                                    "type": "string",
                                    "example": "From $61.61/month at 8.90% APR for 24 months, totaling $1478.70*."
                                  }
                                }
                              },
                              "sub_total": {
                                "type": "integer",
                                "example": 1350,
                                "default": 0
                              },
                              "total": {
                                "type": "integer",
                                "example": 1350,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "677b7bac020106724452218f"
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
                                "example": "d9136912-db4e-439b-a90f-113f389d2d97"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "errors.doc"
                              },
                              "url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/952338e7-c752-4652-9f53-17103ec51235.doc"
                              },
                              "visible_to_customer": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "3e"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "M"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "3e.m@zuper.co"
                                  },
                                  "external_login_id": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "Tech"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "1234"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "Z22"
                                  },
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                  },
                                  "hourly_labor_charge": {
                                    "type": "integer",
                                    "example": 20,
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
                                    "example": "2024-07-05T06:42:02.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-12-26T12:12:07.000Z"
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "677b75962d9c5266f268dd63"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2025-01-06T06:17:58.291Z"
                              }
                            }
                          }
                        },
                        "notes": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-01-06T06:17:57.958Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-01-06T06:43:57.625Z"
                        },
                        "estimate_no": {
                          "type": "integer",
                          "example": 8493,
                          "default": 0
                        },
                        "accepted_date": {
                          "type": "string",
                          "format": "date-time"
                        },
                        "sent_date": {
                          "type": "string",
                          "format": "date-time"
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
                    "value": "{\n\t\t\t\"message\": \"Estimate UID Missing\",\n\t\t\t\"title\": \"Missing Estimate UID\",\n\t\t\t\"type\":\"error\"\n\t\t}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Estimate UID Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Estimate UID"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
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