---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Assets

Lists assets for the company, with pagination (offset or cursor-based) and an extensive set of filter.* query params.

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
    "/assets": {
      "get": {
        "summary": "Get All Assets",
        "description": "Lists assets for the company, with pagination (offset or cursor-based) and an extensive set of filter.* query params.",
        "operationId": "get-all-assets",
        "parameters": [
          {
            "name": "sort_by",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "asset_code",
                "asset_name",
                "warranty_expiry_date",
                "created_at"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "page",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "populate_inspection_form",
            "in": "query",
            "required": true,
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.owned_by_customer",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.asset_category",
            "in": "query",
            "description": "comma separated asset category UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "description": "comma separated customer UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.warranty_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.warranty_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.placed_in_service_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.placed_in_service_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.asset_uid",
            "in": "query",
            "description": "comma separated asset UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "comma separated user UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "description": "comma separated properties UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.organization",
            "in": "query",
            "description": "comma separated organization UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.serial_no",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "description": "Exact match only (comma-separated list, matched as a Mongo $in) — no prefix or partial matching."
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "schema": {
              "properties": {},
              "type": "object"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.asset_status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "READY_TO_INSTALL",
                "INSTALLED",
                "UNDER_SERVICE",
                "REMOVED",
                "OBSOLETE"
              ]
            }
          },
          {
            "name": "filter.orphaned_assets",
            "in": "query",
            "description": "comma separated asset UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.next_service_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.next_service_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.last_service_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.last_service_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.parent_asset",
            "in": "query",
            "description": "comma separated asset UIDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.asset_code",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.service_contract",
            "schema": {
              "type": "string"
            },
            "description": "Service contract UID."
          },
          {
            "in": "query",
            "name": "filter.scan_code",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "cursor",
            "schema": {
              "type": "string"
            },
            "description": "Opaque cursor for cursor-based pagination."
          },
          {
            "in": "query",
            "name": "prev_cursor",
            "schema": {
              "type": "string"
            },
            "description": "Opaque cursor for the previous page."
          },
          {
            "in": "query",
            "name": "cursor_pagination",
            "schema": {
              "type": "string"
            },
            "description": "Set to enable cursor-based pagination instead of offset pagination."
          },
          {
            "in": "query",
            "name": "fields_to_select",
            "schema": {
              "type": "string"
            },
            "description": "Sparse fieldset selector."
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"asset_uid\": \"f3533b10-6829-11ee-af3a-a79966abe7f6\",\n            \"asset_code\": \"tetssf\",\n            \"asset_name\": \"etgasd\",\n            \"asset_image\": null,\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"customer\": null,\n            \"organization\": null,\n            \"property\": null,\n            \"asset_status\": \"\",\n            \"asset_serial_number\": null,\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": false,\n            \"purchase_date\": null,\n            \"warranty_expiry_date\": null,\n            \"placed_in_service\": null,\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf53\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf54\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf55\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf56\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf57\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf58\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf59\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65279eba14c0bef806cadf5a\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65279eba14c0bef806cadf5b\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65279eba14c0bef806cadf5c\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65279eba14c0bef806cadf5d\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65279eba14c0bef806cadf5e\"\n                }\n            ],\n            \"asset_description\": null,\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Rome\",\n                \"state\": \"Lazio\",\n                \"street\": \"Testaccio\",\n                \"zip_code\": \"00153\",\n                \"geo_cordinates\": [\n                    39.913305,\n                    116.471619\n                ],\n                \"first_name\": \"Ashin\",\n                \"last_name\": \"Customer\",\n                \"phone_number\": \"\",\n                \"email\": \"ashin.t@zuper.co\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"1eb1d499-e8b1-4979-a04b-4b0599599529\",\n                \"first_name\": \"Ashin\",\n                \"last_name\": \"Thankachan\",\n                \"email\": \"ashin.t@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z103\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8301907278\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-07-04T06:25:56.000Z\",\n                \"updated_at\": \"2023-10-05T08:30:17.000Z\"\n            },\n            \"created_at\": \"2023-10-11T11:33:08.062Z\",\n            \"updated_at\": \"2023-10-12T07:22:34.379Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"aad8fd10-6825-11ee-af3a-a79966abe7f6\",\n            \"asset_code\": \"test11\",\n            \"asset_name\": \"testtest\",\n            \"asset_image\": null,\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"customer\": null,\n            \"organization\": null,\n            \"property\": null,\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"asset_serial_number\": null,\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": false,\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec2b\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec2c\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec2d\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec2e\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec2f\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec30\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec31\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65268a5614c0bef806c6ec32\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R22\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65268a5614c0bef806c6ec33\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65268a5614c0bef806c6ec34\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65268a5614c0bef806c6ec35\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65268a5614c0bef806c6ec36\"\n                }\n            ],\n            \"asset_description\": null,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"1eb1d499-e8b1-4979-a04b-4b0599599529\",\n                \"first_name\": \"Ashin\",\n                \"last_name\": \"Thankachan\",\n                \"email\": \"ashin.t@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z103\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8301907278\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-07-04T06:25:56.000Z\",\n                \"updated_at\": \"2023-10-05T08:30:17.000Z\"\n            },\n            \"created_at\": \"2023-10-11T11:02:28.483Z\",\n            \"updated_at\": \"2023-10-11T11:43:18.962Z\",\n            \"asset_location\": null,\n            \"warranty_expiry_date\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"9074c8c0-6409-11ee-b5d5-49505c31565c\",\n            \"asset_code\": \"HMT\",\n            \"asset_name\": \"HMT - Watch\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/f98f95b0-5306-11ee-af3b-ed82d39ae946.jpg\",\n            \"asset_category\": {\n                \"category_name\": \"Household Furniture\",\n                \"category_uid\": \"04f74780-7fee-11ea-afe7-09e91c6d0bfa\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_last_name\": \"V33\",\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"hello@sample.co\",\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"customer_first_name\": \"123\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"c9f30940-68c8-11ee-af3a-a79966abe7f6\",\n                    \"organization_name\": \"Antony Das & Co\",\n                    \"organization_logo\": null,\n                    \"organization_description\": null,\n                    \"organization_email\": \"das@das.co\",\n                    \"organization_address\": {\n                        \"city\": \"San Francisco\",\n                        \"state\": \"California\",\n                        \"street\": \"1800 Ellis Street\",\n                        \"country\": \"\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"94115\",\n                        \"geo_cordinates\": [\n                            37.78583393502708,\n                            -122.40641713142396\n                        ],\n                        \"first_name\": \"\",\n                        \"last_name\": \"\",\n                        \"phone_number\": \"\",\n                        \"email\": \"\"\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                },\n                \"customer_contact_no\": {\n                    \"mobile\": \"\",\n                    \"home\": \"\",\n                    \"work\": \"\"\n                },\n                \"customer_uid\": \"f4415c80-058b-11ec-adaf-cbc38b630fba\"\n            },\n            \"organization\": {\n                \"organization_uid\": \"73cc69f0-bd90-11ed-a595-e7363b704a78\",\n                \"organization_name\": \"Treehouse\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/699fbd10-bd90-11ed-a595-e7363b704a78.png\",\n                \"organization_description\": \"<p>Organization created for <strong>testing</strong> <span style=\\\"background-color: rgb(241, 196, 15);\\\">purposes</span></p>\",\n                \"organization_email\": null,\n                \"no_of_customers\": 3,\n                \"organization_address\": {\n                    \"city\": \"New York\",\n                    \"state\": \"New York\",\n                    \"street\": \"123 William Street\",\n                    \"landmark\": \"l1\",\n                    \"geo_cordinates\": [\n                        40.7094756,\n                        -74.0072955\n                    ],\n                    \"first_name\": \"\",\n                    \"last_name\": \"\",\n                    \"phone_number\": \"\",\n                    \"email\": \"\"\n                },\n                \"is_deleted\": false\n            },\n            \"property\": null,\n            \"asset_status\": \"INSTALLED\",\n            \"asset_serial_number\": null,\n            \"owned_by_customer\": false,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"18e67cc4-010f-49b2-baf4-4ddc6023a322\",\n                \"first_name\": \"Cristiano\",\n                \"last_name\": \"Ronaldo\",\n                \"email\": \"ronaldo@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"007\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9d3606c0-8e8c-11e9-a020-d7f139e2a245.png\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2019-03-16T05:52:56.000Z\",\n                \"updated_at\": \"2023-03-14T11:16:49.000Z\"\n            },\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe1\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe2\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe3\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe4\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe5\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe6\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe7\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"65267f9f14c0bef806c68fe8\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68fe9\"\n                },\n                {\n                    \"label\": \"Sample furniture\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68fea\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68feb\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68fec\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68fed\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"65267f9f14c0bef806c68fee\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture\",\n                    \"group_uid\": \"964e8850-0e6c-11ee-9f8e-0f93d9851045\",\n                    \"_id\": \"65267f9f14c0bef806c68fef\"\n                }\n            ],\n            \"created_at\": \"2023-10-06T05:31:13.706Z\",\n            \"updated_at\": \"2023-10-11T10:57:35.235Z\",\n            \"asset_description\": null,\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Louisville \",\n                \"state\": \"Kentucky \",\n                \"street\": \"SDF airport (SDF), Terminal Drive, KY, USA\",\n                \"country\": \"United States\",\n                \"zip_code\": \"40209\",\n                \"geo_cordinates\": [\n                    38.1706549,\n                    -85.7307673\n                ],\n                \"first_name\": \"123\",\n                \"last_name\": \"V33\",\n                \"email\": \"hello@sample.co\"\n            },\n            \"asset_quantity\": 1,\n            \"warranty_expiry_date\": null,\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"904d8670-62b0-11ee-9748-b9370ad4dbd1\",\n            \"asset_code\": \"a1\",\n            \"asset_name\": \"asset4test1\",\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_first_name\": \"sruthi\",\n                \"customer_uid\": \"ba5e9a40-e441-11e9-85c3-45443b31b7d4\",\n                \"is_deleted\": false,\n                \"is_active\": true,\n                \"customer_contact_no\": {\n                    \"mobile\": \"9876543210\",\n                    \"home\": \"0987654321\",\n                    \"work\": \"8976543210\"\n                },\n                \"customer_email\": \"srthnair339@gmail.com\",\n                \"customer_company_name\": \"cura\",\n                \"customer_last_name\": \"krishnan\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"93c4a910-9c71-11ed-9f13-9789cec5f4f1\",\n                    \"organization_name\": \"2501nithintest\",\n                    \"organization_logo\": null,\n                    \"organization_description\": \"<p>test description&nbsp;</p>\",\n                    \"organization_email\": \"2501nithintest@mail.com\",\n                    \"organization_address\": {\n                        \"city\": \"Chennai \",\n                        \"state\": \"Tamil Nadu \",\n                        \"street\": \"Chennai \",\n                        \"country\": \"India\",\n                        \"landmark\": \"test landmark\",\n                        \"geo_cordinates\": [\n                            13.084047736275112,\n                            80.26514743561121\n                        ]\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            },\n            \"organization\": {\n                \"organization_uid\": \"93c4a910-9c71-11ed-9f13-9789cec5f4f1\",\n                \"organization_name\": \"2501nithintest\",\n                \"organization_logo\": null,\n                \"organization_description\": \"<p>test description&nbsp;</p>\",\n                \"organization_email\": \"2501nithintest@mail.com\",\n                \"no_of_customers\": 33,\n                \"organization_address\": {\n                    \"city\": \"Chennai \",\n                    \"state\": \"Tamil Nadu \",\n                    \"street\": \"Chennai \",\n                    \"country\": \"India\",\n                    \"landmark\": \"test landmark\",\n                    \"geo_cordinates\": [\n                        13.084047736275112,\n                        80.26514743561121\n                    ]\n                },\n                \"is_deleted\": false\n            },\n            \"property\": {\n                \"is_deleted\": false,\n                \"property_address\": {\n                    \"city\": \"Chennai \",\n                    \"state\": \"Tamil Nadu \",\n                    \"street\": \"10th Street, S. Kolathur, Engineers Avenue, Mylai Kapaleshwarar Nagar, Kovilambakkam, Chengalpattu\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600088\",\n                    \"geo_cordinates\": [\n                        12.98597,\n                        80.192527\n                    ],\n                    \"_id\": \"64f9efe8fda79d09f63bbeb7\"\n                },\n                \"no_of_jobs\": 8,\n                \"property_name\": \"CostaBlue 111\",\n                \"property_uid\": \"dbe3b550-461e-11ed-a795-832eec976aee\"\n            },\n            \"asset_status\": \"\",\n            \"asset_serial_number\": \"\",\n            \"owned_by_customer\": false,\n            \"purchase_date\": \"2023-10-19T23:29:00.000Z\",\n            \"warranty_expiry_date\": \"2023-12-20T00:29:00.000Z\",\n            \"placed_in_service\": \"2023-10-19T23:29:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f54\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f55\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f56\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f57\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f58\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f59\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5a\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5b\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5c\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5d\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5e\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d58d165e27e90e8b93f5f\"\n                }\n            ],\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"82fe4f21-7dde-41d9-9b9e-70d2ba77056c\",\n                \"first_name\": \"Nithin\",\n                \"last_name\": \"Kumar\",\n                \"email\": \"nithin.a@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"ZUP-110\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-12-27T05:50:05.000Z\",\n                \"updated_at\": \"2022-12-27T05:50:05.000Z\"\n            },\n            \"created_at\": \"2023-10-04T12:21:37.123Z\",\n            \"updated_at\": \"2023-10-04T12:21:37.125Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"54a78c20-62a0-11ee-8597-43c1b67bf36c\",\n            \"asset_code\": \"001155\",\n            \"asset_name\": \"Samsung SG05\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/27117910-62a0-11ee-8597-43c1b67bf36c.jpg\",\n            \"asset_category\": {\n                \"category_uid\": \"8f812d00-6274-11ee-8597-43c1b67bf36c\",\n                \"category_name\": \"New Aero Wings\",\n                \"category_description\": \"New Aero Wings for Wind Turbine\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_first_name\": \"Vidya\",\n                \"customer_last_name\": \"S\",\n                \"customer_company_name\": \"Zuper\",\n                \"customer_uid\": \"485da230-23a6-11e9-bf84-4363e6965871\",\n                \"is_deleted\": false,\n                \"is_active\": true,\n                \"customer_contact_no\": {\n                    \"mobile\": \"+1483578923\",\n                    \"home\": \"\",\n                    \"work\": \"\"\n                },\n                \"customer_email\": \"sreevidya@zuper.co\",\n                \"customer_organization\": {\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"organization_address\": {\n                        \"city\": \"Chennai \",\n                        \"state\": \"Tamil Nadu \",\n                        \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                        \"country\": \"India\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"600041\",\n                        \"geo_cordinates\": [\n                            12.9733389,\n                            80.2508572\n                        ],\n                        \"first_name\": \"Org\",\n                        \"last_name\": \"SC\",\n                        \"phone_number\": \"8220131280\",\n                        \"email\": \"orgsc@abc.com\"\n                    },\n                    \"organization_name\": \"Ascendas\",\n                    \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n                    \"organization_email\": \"zupertest23@gmail.com\",\n                    \"organization_description\": null,\n                    \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\"\n                }\n            },\n            \"organization\": {\n                \"is_deleted\": false,\n                \"organization_address\": {\n                    \"city\": \"Chennai \",\n                    \"state\": \"Tamil Nadu \",\n                    \"street\": \"Turyaa Chennai, Old Mahabalipuram Road, Elango Nagar, Perungudi\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600041\",\n                    \"geo_cordinates\": [\n                        12.9733389,\n                        80.2508572\n                    ],\n                    \"first_name\": \"Org\",\n                    \"last_name\": \"SC\",\n                    \"phone_number\": \"8220131280\",\n                    \"email\": \"orgsc@abc.com\"\n                },\n                \"organization_name\": \"Ascendas\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n                \"organization_email\": \"zupertest23@gmail.com\",\n                \"organization_description\": null,\n                \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n                \"no_of_customers\": 57\n            },\n            \"property\": {\n                \"is_deleted\": false,\n                \"property_address\": {\n                    \"city\": \"Chennai\",\n                    \"state\": \"Tamil Nadu\",\n                    \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n                    \"country\": \"India\",\n                    \"landmark\": null,\n                    \"zip_code\": \"600017\",\n                    \"geo_cordinates\": [\n                        13.0494706,\n                        80.24522139999999\n                    ],\n                    \"_id\": \"64df0dee7c0c9e18fa1777e1\"\n                },\n                \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0d1d0360-35a3-11ed-b193-e956a56bc479.png\",\n                \"no_of_jobs\": 0,\n                \"property_name\": \"Testing_Sp\",\n                \"property_uid\": \"9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f\"\n            },\n            \"asset_status\": \"INSTALLED\",\n            \"asset_serial_number\": null,\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": true,\n            \"purchase_date\": \"2023-10-03T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-10-31T18:29:00.000Z\",\n            \"placed_in_service\": \"2023-10-09T18:30:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"test\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e1\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"value one\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e2\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e3\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e4\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e5\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e6\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e7\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"6526808314c0bef806c696e8\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"6526808314c0bef806c696e9\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"6526808314c0bef806c696ea\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"6526808314c0bef806c696eb\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"6526808314c0bef806c696ec\"\n                }\n            ],\n            \"asset_description\": \"<p><strong data-ogsc=\\\"\\\" style=\\\"color: rgb(87, 14, 64); font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, serif, EmojiFont; font-size: 14px;\\\"><span data-ogsc=\\\"\\\" style=\\\"border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 24px; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; margin: 0px; padding: 0px; vertical-align: baseline; color: inherit;\\\">Wellness events for this&nbsp;</span></strong><strong data-ogsc=\\\"\\\" style=\\\"color: rgb(87, 14, 64); font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, serif, EmojiFont; font-size: 14px;\\\"><span data-ogsc=\\\"\\\" style=\\\"border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 24px; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; margin: 0px; padding: 0px; vertical-align: baseline; color: inherit;\\\">month</span></strong><br></p>\",\n            \"asset_location\": {\n                \"landmark\": null,\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n                \"country\": \"India\",\n                \"zip_code\": \"600017\",\n                \"geo_cordinates\": [\n                    13.0494706,\n                    80.24522139999999\n                ],\n                \"first_name\": \"Vidya\",\n                \"last_name\": \"S\",\n                \"phone_number\": \"+1483578923\",\n                \"email\": \"sreevidya@zuper.co\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                \"first_name\": \"Maruthu\",\n                \"last_name\": \"Raja\",\n                \"email\": \"Maruthu@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Test\",\n                \"emp_code\": \"5000\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8220131280\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b8903d40-eb13-11ed-87d1-291dff240ce4.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                \"updated_at\": \"2023-05-05T07:09:24.000Z\"\n            },\n            \"created_at\": \"2023-10-04T10:25:25.307Z\",\n            \"updated_at\": \"2023-10-11T11:01:23.607Z\",\n            \"next_service_date\": \"2023-10-18T00:00:00.000Z\",\n            \"last_service_date\": \"2023-10-04T00:00:00.000Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"f7f5d770-629f-11ee-8597-43c1b67bf36c\",\n            \"asset_code\": \"7878787878\",\n            \"asset_name\": \"Boat Watch\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/bca02cc0-629f-11ee-8597-43c1b67bf36c.webp\",\n            \"asset_category\": {\n                \"category_uid\": \"8f812d00-6274-11ee-8597-43c1b67bf36c\",\n                \"category_name\": \"New Aero Wings\",\n                \"category_description\": \"New Aero Wings for Wind Turbine\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_uid\": \"62c25df0-4566-11ee-848b-39a80729be63\",\n                \"customer_first_name\": \"Portal\",\n                \"customer_last_name\": \"Consumer\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"f7c48910-4565-11ee-848b-39a80729be63\",\n                    \"organization_name\": \"AhaaTower\",\n                    \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fd58c90-4565-11ee-848b-39a80729be63.webp\",\n                    \"organization_description\": \"<p># Invoice: While viewing the V2 notes updated from the V3, it has shown with HTML code.</p>\",\n                    \"organization_email\": \"Amika@gmail.com\",\n                    \"organization_address\": {\n                        \"city\": \"Września\",\n                        \"state\": \"Wielkopolskie\",\n                        \"street\": \"AMIKA Konsorcjum Medyczne Spółka z o.o., Piastów\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"62-302\",\n                        \"geo_cordinates\": [\n                            0,\n                            0\n                        ],\n                        \"first_name\": \"Amika\",\n                        \"last_name\": \"Tower\",\n                        \"phone_number\": \"01231231231\",\n                        \"email\": \"Amika@gmail.com\"\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                },\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"Amika@gmail.com\",\n                \"customer_contact_no\": {\n                    \"mobile\": \"01231231231\",\n                    \"home\": \"1234567891\",\n                    \"work\": \"555555555\"\n                },\n                \"is_active\": true,\n                \"is_deleted\": false\n            },\n            \"organization\": {\n                \"organization_uid\": \"f7c48910-4565-11ee-848b-39a80729be63\",\n                \"organization_name\": \"AhaaTower\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fd58c90-4565-11ee-848b-39a80729be63.webp\",\n                \"organization_description\": \"<p># Invoice: While viewing the V2 notes updated from the V3, it has shown with HTML code.</p>\",\n                \"organization_email\": \"Amika@gmail.com\",\n                \"no_of_customers\": 2,\n                \"organization_address\": {\n                    \"city\": \"Września\",\n                    \"state\": \"Wielkopolskie\",\n                    \"street\": \"AMIKA Konsorcjum Medyczne Spółka z o.o., Piastów\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"62-302\",\n                    \"geo_cordinates\": [\n                        0,\n                        0\n                    ],\n                    \"first_name\": \"Amika\",\n                    \"last_name\": \"Tower\",\n                    \"phone_number\": \"01231231231\",\n                    \"email\": \"Amika@gmail.com\"\n                },\n                \"is_deleted\": false\n            },\n            \"property\": {\n                \"is_deleted\": false,\n                \"property_address\": {\n                    \"city\": \"Chennai\",\n                    \"state\": \"Tamil Nadu\",\n                    \"street\": \"Indian Medical Practitioners Co-operative Pharmacy, Lattice Bridge Road, L.I.C Colony, Marudeeswarar Nagar\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600041\",\n                    \"geo_cordinates\": [\n                        12.9933924,\n                        80.25724079999999\n                    ],\n                    \"_id\": \"64ec389b7c0c9e18fa17a6aa\"\n                },\n                \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/780183d0-4566-11ee-848b-39a80729be63.jpg\",\n                \"no_of_jobs\": 2,\n                \"property_name\": \"New Tower Property\",\n                \"property_uid\": \"ecacea80-4566-11ee-a025-6fe458af8702\"\n            },\n            \"asset_status\": \"INSTALLED\",\n            \"asset_serial_number\": \"Boat_00045\",\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": true,\n            \"purchase_date\": \"2023-10-03T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-10-04T18:29:59.000Z\",\n            \"placed_in_service\": \"2023-10-09T18:30:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"New Tower Property\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f4d\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-08-28 05:45:41\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f4e\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"value two\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f4f\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"New Tower Property\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f50\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"11:27:00\",\n                    \"type\": \"TIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f51\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"value one,value two\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f52\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"value two\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f53\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"2023-08-28\",\n                    \"type\": \"DATE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3cf9ba147c8fe7a00f54\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"Test TV\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3cf9ba147c8fe7a00f55\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 10:20:40\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3cf9ba147c8fe7a00f56\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e582a2d0-629f-11ee-8597-43c1b67bf36c.jpeg\",\n                    \"type\": \"FILE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3cf9ba147c8fe7a00f57\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3cf9ba147c8fe7a00f58\"\n                }\n            ],\n            \"asset_description\": \"<p><a class=\\\"ml-4 text-xl text-gray-700\\\" href=\\\"https://stagingv3.zuperpro.com/asset_management/1fe3d0d0-629f-11ee-8597-43c1b67bf36c/details\\\"><span class=\\\"ng-star-inserted\\\">Break Cable</span></a></p>\",\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Indian Medical Practitioners Co-operative Pharmacy, Lattice Bridge Road, L.I.C Colony, Marudeeswarar Nagar\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    12.9933924,\n                    80.25724079999999\n                ],\n                \"first_name\": \"Portal\",\n                \"last_name\": \"Consumer\",\n                \"phone_number\": \"\",\n                \"email\": \"Amika@gmail.com\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                \"first_name\": \"Maruthu\",\n                \"last_name\": \"Raja\",\n                \"email\": \"Maruthu@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Test\",\n                \"emp_code\": \"5000\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8220131280\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b8903d40-eb13-11ed-87d1-291dff240ce4.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                \"updated_at\": \"2023-05-05T07:09:24.000Z\"\n            },\n            \"created_at\": \"2023-10-04T10:22:49.671Z\",\n            \"updated_at\": \"2023-10-04T10:22:50.364Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"1fe3d0d0-629f-11ee-8597-43c1b67bf36c\",\n            \"asset_code\": \"BC_0005\",\n            \"asset_name\": \"Break Cable\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/db055a60-629e-11ee-8597-43c1b67bf36c.webp\",\n            \"asset_category\": {\n                \"category_uid\": \"8f812d00-6274-11ee-8597-43c1b67bf36c\",\n                \"category_name\": \"New Aero Wings\",\n                \"category_description\": \"New Aero Wings for Wind Turbine\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_first_name\": \"Aditya\",\n                \"customer_last_name\": \"\",\n                \"customer_uid\": \"c95e0400-9715-11e9-8903-e7201d803309\",\n                \"is_deleted\": false,\n                \"is_active\": true,\n                \"customer_contact_no\": {},\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"hello@ranjith.dev\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"f3e918b0-6bd1-11ed-83b0-5d04d2932d1b\",\n                    \"organization_name\": \"Pegasus\",\n                    \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/8c7b4860-6bd1-11ed-83b0-5d04d2932d1b.webp\",\n                    \"organization_description\": \"<p>Pegasus is an international unicorn delivery service :) Sounding lead who can put around 100k an year<br></p>\",\n                    \"organization_email\": \"johndoe@peg.co\",\n                    \"organization_address\": {\n                        \"city\": \"Seattle \",\n                        \"state\": \"Washington \",\n                        \"street\": \"Wendy's, 15th Avenue Northwest, WA, USA\",\n                        \"country\": \"United States\",\n                        \"landmark\": \"\",\n                        \"geo_cordinates\": [\n                            47.6677464,\n                            -122.3766738\n                        ]\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            },\n            \"organization\": {\n                \"organization_uid\": \"f3e918b0-6bd1-11ed-83b0-5d04d2932d1b\",\n                \"organization_name\": \"Pegasus\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/8c7b4860-6bd1-11ed-83b0-5d04d2932d1b.webp\",\n                \"organization_description\": \"<p>Pegasus is an international unicorn delivery service :) Sounding lead who can put around 100k an year<br></p>\",\n                \"organization_email\": \"johndoe@peg.co\",\n                \"no_of_customers\": 4,\n                \"organization_address\": {\n                    \"city\": \"Seattle \",\n                    \"state\": \"Washington \",\n                    \"street\": \"Wendy's, 15th Avenue Northwest, WA, USA\",\n                    \"country\": \"United States\",\n                    \"landmark\": \"\",\n                    \"geo_cordinates\": [\n                        47.6677464,\n                        -122.3766738\n                    ]\n                },\n                \"is_deleted\": false\n            },\n            \"property\": null,\n            \"asset_status\": \"INSTALLED\",\n            \"asset_serial_number\": \"AV_000005\",\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": true,\n            \"purchase_date\": \"2023-10-03T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-10-31T18:29:59.000Z\",\n            \"placed_in_service\": \"2023-10-09T18:30:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"GAMESA RENEWABLE ENERGY\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11ec\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 10:15:27\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11ed\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"value two\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11ee\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11ef\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11f0\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11f1\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"value two\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11f2\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"2023-10-04\",\n                    \"type\": \"DATE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3b8fba147c8fe79f11f3\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"Test TV\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3b8fba147c8fe79f11f4\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 10:15:57\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3b8fba147c8fe79f11f5\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/16cb04f0-629f-11ee-8597-43c1b67bf36c.png\",\n                    \"type\": \"FILE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3b8fba147c8fe79f11f6\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3b8fba147c8fe79f11f7\"\n                }\n            ],\n            \"asset_description\": \"<p>settings Jobs status.</p>\",\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Koovathur\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"C4V5+PGG\",\n                \"zip_code\": \"603305\",\n                \"geo_cordinates\": [\n                    12.44437661021429,\n                    80.10915711522102\n                ],\n                \"first_name\": \"Aditya\",\n                \"last_name\": \"A\",\n                \"phone_number\": \"7897897897\",\n                \"email\": \"hello@ranjith.dev\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                \"first_name\": \"Maruthu\",\n                \"last_name\": \"Raja\",\n                \"email\": \"Maruthu@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Test\",\n                \"emp_code\": \"5000\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8220131280\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b8903d40-eb13-11ed-87d1-291dff240ce4.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                \"updated_at\": \"2023-05-05T07:09:24.000Z\"\n            },\n            \"created_at\": \"2023-10-04T10:16:47.125Z\",\n            \"updated_at\": \"2023-10-04T10:16:47.127Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"36b28cd0-629e-11ee-8597-43c1b67bf36c\",\n            \"asset_code\": \"122454-FDFJ\",\n            \"asset_name\": \"1/2\\\" ODX 50' Yellow Gas Line Ava\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/ddced010-629d-11ee-8597-43c1b67bf36c.jpg\",\n            \"asset_category\": {\n                \"category_uid\": \"8f812d00-6274-11ee-8597-43c1b67bf36c\",\n                \"category_name\": \"New Aero Wings\",\n                \"category_description\": \"New Aero Wings for Wind Turbine\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_uid\": \"d35e0780-34f9-11ee-9476-2b23ad35d032\",\n                \"customer_first_name\": \"V2\",\n                \"customer_last_name\": \"Aug Customer\",\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"v2@gmail.com\",\n                \"customer_contact_no\": {\n                    \"mobile\": \"07777777777\",\n                    \"home\": \"2222222222\",\n                    \"work\": \"9879879879\"\n                },\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"customer_organization\": {\n                    \"organization_uid\": \"cf1940f0-1b26-11ee-a61c-c7daced78d3d\",\n                    \"organization_name\": \"Acme Inc.\",\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"organization_address\": {\n                        \"city\": \"Chennai\",\n                        \"state\": \"Tamil Nadu\",\n                        \"street\": \"WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"600041\",\n                        \"geo_cordinates\": [\n                            12.9730624,\n                            80.25058969999999\n                        ]\n                    },\n                    \"organization_description\": null,\n                    \"organization_email\": null,\n                    \"organization_logo\": null\n                }\n            },\n            \"organization\": {\n                \"organization_uid\": \"cf1940f0-1b26-11ee-a61c-c7daced78d3d\",\n                \"organization_name\": \"Acme Inc.\",\n                \"no_of_customers\": 20,\n                \"is_deleted\": false,\n                \"organization_address\": {\n                    \"city\": \"Chennai\",\n                    \"state\": \"Tamil Nadu\",\n                    \"street\": \"WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600041\",\n                    \"geo_cordinates\": [\n                        12.9730624,\n                        80.25058969999999\n                    ]\n                },\n                \"organization_description\": null,\n                \"organization_email\": null,\n                \"organization_logo\": null\n            },\n            \"property\": null,\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"asset_serial_number\": \"\",\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": true,\n            \"purchase_date\": \"2023-10-03T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-10-30T18:29:00.000Z\",\n            \"placed_in_service\": \"2023-10-09T18:30:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"sdabv gawrg awegr\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def6e\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 10:10:00\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def6f\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"value one\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def70\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"https://drive.google.com/file/d/15Dz3O02dX6_q7qORA5fiIaIRhDFgCUI2/view?usp=sharing\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def71\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"16:33:00\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def72\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"value one, value two\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def73\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def74\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"2023-08-07\",\n                    \"type\": \"DATE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651d3a07ba147c8fe79def75\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"15SDFGH SRTHG\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3a07ba147c8fe79def76\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 10:10:00\",\n                    \"type\": \"DATETIME\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3a07ba147c8fe79def77\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2d4a8f80-629e-11ee-8597-43c1b67bf36c.webp\",\n                    \"type\": \"FILE\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3a07ba147c8fe79def78\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651d3a07ba147c8fe79def79\"\n                }\n            ],\n            \"asset_description\": \"<p>settings Jobs status.<br></p>\",\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Austin\",\n                \"state\": \"Texas\",\n                \"street\": \"Austin-Bergstrom International Airport (AUS), Presidential Boulevard\",\n                \"country\": \"United States\",\n                \"zip_code\": \"78719\",\n                \"geo_cordinates\": [\n                    30.19747109999999,\n                    -97.66635289999999\n                ],\n                \"first_name\": \"V2\",\n                \"last_name\": \"Aug Customer\",\n                \"phone_number\": \"07777777777\",\n                \"email\": \"v2@gmail.com\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                \"first_name\": \"Maruthu\",\n                \"last_name\": \"Raja\",\n                \"email\": \"Maruthu@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Test\",\n                \"emp_code\": \"5000\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8220131280\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b8903d40-eb13-11ed-87d1-291dff240ce4.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                \"updated_at\": \"2023-05-05T07:09:24.000Z\"\n            },\n            \"created_at\": \"2023-10-04T10:10:15.977Z\",\n            \"updated_at\": \"2023-10-09T00:00:00.926Z\",\n            \"next_service_date\": \"2023-10-10T00:00:00.000Z\",\n            \"last_service_date\": \"2023-10-10T00:00:00.000Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"09b11540-6275-11ee-8597-43c1b67bf36c\",\n            \"asset_code\": \"GAMESA RENEWABLE ENERGY\",\n            \"asset_name\": \"HMT - Watch\",\n            \"asset_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b602a8a0-6274-11ee-8597-43c1b67bf36c.jpg\",\n            \"asset_category\": {\n                \"category_uid\": \"8f812d00-6274-11ee-8597-43c1b67bf36c\",\n                \"category_name\": \"New Aero Wings\",\n                \"category_description\": \"New Aero Wings for Wind Turbine\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_uid\": \"62c25df0-4566-11ee-848b-39a80729be63\",\n                \"customer_first_name\": \"Portal\",\n                \"customer_last_name\": \"Consumer\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"f7c48910-4565-11ee-848b-39a80729be63\",\n                    \"organization_name\": \"AhaaTower\",\n                    \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fd58c90-4565-11ee-848b-39a80729be63.webp\",\n                    \"organization_description\": \"<p># Invoice: While viewing the V2 notes updated from the V3, it has shown with HTML code.</p>\",\n                    \"organization_email\": \"Amika@gmail.com\",\n                    \"organization_address\": {\n                        \"city\": \"Września\",\n                        \"state\": \"Wielkopolskie\",\n                        \"street\": \"AMIKA Konsorcjum Medyczne Spółka z o.o., Piastów\",\n                        \"landmark\": \"\",\n                        \"zip_code\": \"62-302\",\n                        \"geo_cordinates\": [\n                            0,\n                            0\n                        ],\n                        \"first_name\": \"Amika\",\n                        \"last_name\": \"Tower\",\n                        \"phone_number\": \"01231231231\",\n                        \"email\": \"Amika@gmail.com\"\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                },\n                \"customer_company_name\": \"\",\n                \"customer_email\": \"Amika@gmail.com\",\n                \"customer_contact_no\": {\n                    \"mobile\": \"01231231231\",\n                    \"home\": \"1234567891\",\n                    \"work\": \"555555555\"\n                },\n                \"is_active\": true,\n                \"is_deleted\": false\n            },\n            \"organization\": {\n                \"organization_uid\": \"f7c48910-4565-11ee-848b-39a80729be63\",\n                \"organization_name\": \"AhaaTower\",\n                \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9fd58c90-4565-11ee-848b-39a80729be63.webp\",\n                \"organization_description\": \"<p># Invoice: While viewing the V2 notes updated from the V3, it has shown with HTML code.</p>\",\n                \"organization_email\": \"Amika@gmail.com\",\n                \"no_of_customers\": 2,\n                \"organization_address\": {\n                    \"city\": \"Września\",\n                    \"state\": \"Wielkopolskie\",\n                    \"street\": \"AMIKA Konsorcjum Medyczne Spółka z o.o., Piastów\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"62-302\",\n                    \"geo_cordinates\": [\n                        0,\n                        0\n                    ],\n                    \"first_name\": \"Amika\",\n                    \"last_name\": \"Tower\",\n                    \"phone_number\": \"01231231231\",\n                    \"email\": \"Amika@gmail.com\"\n                },\n                \"is_deleted\": false\n            },\n            \"property\": {\n                \"is_deleted\": false,\n                \"property_address\": {\n                    \"city\": \"Chennai\",\n                    \"state\": \"Tamil Nadu\",\n                    \"street\": \"Indian Medical Practitioners Co-operative Pharmacy, Lattice Bridge Road, L.I.C Colony, Marudeeswarar Nagar\",\n                    \"country\": \"India\",\n                    \"landmark\": \"\",\n                    \"zip_code\": \"600041\",\n                    \"geo_cordinates\": [\n                        12.9933924,\n                        80.25724079999999\n                    ],\n                    \"_id\": \"64ec389b7c0c9e18fa17a6aa\"\n                },\n                \"property_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/780183d0-4566-11ee-848b-39a80729be63.jpg\",\n                \"no_of_jobs\": 2,\n                \"property_name\": \"New Tower Property\",\n                \"property_uid\": \"ecacea80-4566-11ee-a025-6fe458af8702\"\n            },\n            \"asset_status\": \"INSTALLED\",\n            \"asset_serial_number\": \"\",\n            \"asset_quantity\": 1,\n            \"owned_by_customer\": true,\n            \"purchase_date\": \"2023-10-01T18:30:00.000Z\",\n            \"warranty_expiry_date\": \"2023-10-31T18:29:59.000Z\",\n            \"placed_in_service\": \"2023-10-03T18:30:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"GAMESA RENEWABLE ENERGY\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab2\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 05:25:10\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab3\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"value one\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab4\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"V3 Web Application - Chats issues\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab5\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"10:59:00\",\n                    \"type\": \"TIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab6\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"value one,value two\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab7\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab8\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"value\": \"2023-10-03\",\n                    \"type\": \"DATE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651cf829ba147c8fe77d0ab9\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture\",\n                    \"group_uid\": \"964e8850-0e6c-11ee-9f8e-0f93d9851045\",\n                    \"_id\": \"651cf829ba147c8fe77d0aba\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"Test TV\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0abb\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"2023-10-04 05:25:36\",\n                    \"type\": \"DATETIME\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0abc\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"value\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/f0925950-6276-11ee-8597-43c1b67bf36c.jpg\",\n                    \"type\": \"FILE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0abd\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"value\": \"R11\",\n                    \"type\": \"RADIO\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Unique Group\",\n                    \"group_uid\": \"24446530-2845-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0abe\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0abf\"\n                },\n                {\n                    \"label\": \"Sample furniture\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"group_name\": \"Furniture & fridge repair\",\n                    \"group_uid\": \"f0e1cb10-2844-11ed-a9af-577002b92099\",\n                    \"_id\": \"651cf829ba147c8fe77d0ac0\"\n                }\n            ],\n            \"asset_description\": \"<p>New Aero Wings for Wind Tubine</p>\",\n            \"asset_location\": {\n                \"landmark\": \"\",\n                \"city\": \"Chennai\",\n                \"state\": \"Tamil Nadu\",\n                \"street\": \"Indian Medical Practitioners Co-operative Pharmacy, Lattice Bridge Road, L.I.C Colony, Marudeeswarar Nagar\",\n                \"zip_code\": \"600041\",\n                \"geo_cordinates\": [\n                    12.9933924,\n                    80.25724079999999\n                ],\n                \"first_name\": \"Portal\",\n                \"last_name\": \"Consumer\",\n                \"phone_number\": \"\",\n                \"email\": \"Amika@gmail.com\"\n            },\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"50689376-6348-41dd-81e3-9d75dc73027d\",\n                \"first_name\": \"Maruthu\",\n                \"last_name\": \"Raja\",\n                \"email\": \"Maruthu@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Test\",\n                \"emp_code\": \"5000\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8220131280\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/b8903d40-eb13-11ed-87d1-291dff240ce4.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-05-05T06:57:26.000Z\",\n                \"updated_at\": \"2023-05-05T07:09:24.000Z\"\n            },\n            \"created_at\": \"2023-10-04T05:15:31.048Z\",\n            \"updated_at\": \"2023-10-11T00:00:01.343Z\",\n            \"next_service_date\": \"2023-10-14T00:00:00.000Z\",\n            \"last_service_date\": \"2023-10-12T00:00:00.000Z\",\n            \"id\": \"undefined\"\n        },\n        {\n            \"asset_uid\": \"bf708280-61e9-11ee-b74b-75f377a82d91\",\n            \"asset_code\": \"a7\",\n            \"asset_name\": \"asset3test7\",\n            \"asset_category\": {\n                \"category_name\": \"Air Conditioner\",\n                \"category_description\": \"Description\",\n                \"category_uid\": \"22b74240-09fe-11ea-b1f3-d505ea8dd454\",\n                \"is_deleted\": false\n            },\n            \"customer\": {\n                \"customer_first_name\": \"sruthi\",\n                \"customer_uid\": \"ba5e9a40-e441-11e9-85c3-45443b31b7d4\",\n                \"is_deleted\": false,\n                \"is_active\": true,\n                \"customer_contact_no\": {\n                    \"mobile\": \"9876543210\",\n                    \"home\": \"0987654321\",\n                    \"work\": \"8976543210\"\n                },\n                \"customer_email\": \"srthnair339@gmail.com\",\n                \"customer_company_name\": \"cura\",\n                \"customer_last_name\": \"krishnan\",\n                \"customer_organization\": {\n                    \"organization_uid\": \"93c4a910-9c71-11ed-9f13-9789cec5f4f1\",\n                    \"organization_name\": \"2501nithintest\",\n                    \"organization_logo\": null,\n                    \"organization_description\": \"<p>test description&nbsp;</p>\",\n                    \"organization_email\": \"2501nithintest@mail.com\",\n                    \"organization_address\": {\n                        \"city\": \"Chennai \",\n                        \"state\": \"Tamil Nadu \",\n                        \"street\": \"Chennai \",\n                        \"country\": \"India\",\n                        \"landmark\": \"test landmark\",\n                        \"geo_cordinates\": [\n                            13.084047736275112,\n                            80.26514743561121\n                        ]\n                    },\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            },\n            \"asset_status\": \"READY_TO_INSTALL\",\n            \"asset_serial_number\": \"\",\n            \"owned_by_customer\": false,\n            \"purchase_date\": \"2023-10-19T23:29:00.000Z\",\n            \"warranty_expiry_date\": \"2023-12-20T00:29:00.000Z\",\n            \"placed_in_service\": \"2023-10-19T23:29:00.000Z\",\n            \"custom_fields\": [\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f7f\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f80\"\n                },\n                {\n                    \"label\": \"Select\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f81\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f82\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f83\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f84\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f85\"\n                },\n                {\n                    \"label\": \"Date Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f86\"\n                },\n                {\n                    \"label\": \"Sample\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f87\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"asset cutome\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f88\"\n                },\n                {\n                    \"label\": \"File Input\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f89\"\n                },\n                {\n                    \"label\": \"Radio\",\n                    \"hide_to_fe\": false,\n                    \"hide_field\": false,\n                    \"read_only\": false,\n                    \"_id\": \"651c0b42d410880f24f41f8a\"\n                }\n            ],\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"created_by\": {\n                \"user_uid\": \"82fe4f21-7dde-41d9-9b9e-70d2ba77056c\",\n                \"first_name\": \"Nithin\",\n                \"last_name\": \"Kumar\",\n                \"email\": \"nithin.a@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"ZUP-110\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-12-27T05:50:05.000Z\",\n                \"updated_at\": \"2022-12-27T05:50:05.000Z\"\n            },\n            \"created_at\": \"2023-10-03T12:38:26.344Z\",\n            \"updated_at\": \"2023-10-03T12:38:26.346Z\",\n            \"id\": \"undefined\"\n        }\n    ],\n    \"total_records\": 799,\n    \"current_page\": 1,\n    \"total_pages\": 80\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "asset_uid": {
                            "type": "string",
                            "example": "f3533b10-6829-11ee-af3a-a79966abe7f6"
                          },
                          "asset_code": {
                            "type": "string",
                            "example": "tetssf"
                          },
                          "asset_name": {
                            "type": "string",
                            "example": "etgasd"
                          },
                          "asset_image": {},
                          "asset_category": {
                            "type": "object",
                            "properties": {
                              "category_name": {
                                "type": "string",
                                "example": "Air Conditioner"
                              },
                              "category_description": {
                                "type": "string",
                                "example": "Description"
                              },
                              "category_uid": {
                                "type": "string",
                                "example": "22b74240-09fe-11ea-b1f3-d505ea8dd454"
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "customer": {},
                          "organization": {},
                          "property": {},
                          "asset_status": {
                            "type": "string",
                            "example": ""
                          },
                          "asset_serial_number": {},
                          "asset_quantity": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "owned_by_customer": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "purchase_date": {},
                          "warranty_expiry_date": {},
                          "placed_in_service": {},
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "Text Area"
                                },
                                "value": {
                                  "type": "string",
                                  "example": ""
                                },
                                "type": {
                                  "type": "string",
                                  "example": "MULTI_LINE"
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
                                  "example": "65279eba14c0bef806cadf53"
                                }
                              }
                            }
                          },
                          "asset_description": {},
                          "asset_location": {
                            "type": "object",
                            "properties": {
                              "landmark": {
                                "type": "string",
                                "example": ""
                              },
                              "city": {
                                "type": "string",
                                "example": "Rome"
                              },
                              "state": {
                                "type": "string",
                                "example": "Lazio"
                              },
                              "street": {
                                "type": "string",
                                "example": "Testaccio"
                              },
                              "zip_code": {
                                "type": "string",
                                "example": "00153"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 39.913305,
                                  "default": 0
                                }
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Ashin"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Customer"
                              },
                              "phone_number": {
                                "type": "string",
                                "example": ""
                              },
                              "email": {
                                "type": "string",
                                "example": "ashin.t@zuper.co"
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
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "1eb1d499-e8b1-4979-a04b-4b0599599529"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Ashin"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "Thankachan"
                              },
                              "email": {
                                "type": "string",
                                "example": "ashin.t@zuper.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z103"
                              },
                              "prefix": {},
                              "work_phone_number": {
                                "type": "string",
                                "example": "8301907278"
                              },
                              "mobile_phone_number": {},
                              "profile_picture": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg"
                              },
                              "hourly_labor_charge": {
                                "type": "integer",
                                "example": 120,
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
                                "example": "2022-07-04T06:25:56.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2023-10-05T08:30:17.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-10-11T11:33:08.062Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-12T07:22:34.379Z"
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 799,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 80,
                      "default": 0
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
                    "value": "{\n    \"message\": \"\",\n    \"title\": \"\",\n    \"type\": \"error\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"User Unauthorized To Access The Data\",\n    \"title\": \"Access Denied\",\n    \"type\": \"error\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "User Unauthorized To Access The Data"
                    },
                    "title": {
                      "type": "string",
                      "example": "Access Denied"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n   type: \"error\",\n   title: \"Invalid Asset UID\",\n   message: \"\"\n}"
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Error In Fetching Assets\",\n    \"title\": \"Error In Fetching Assets\",\n    \"data\": {\n        \"err\": \"your_error\n"
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