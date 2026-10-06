---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Products

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
    "/product": {
      "get": {
        "summary": "Get all Products",
        "description": "",
        "operationId": "get-all-products",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Page",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "description": "Count",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Sort",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ]
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "description": "Sort By Value",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pricelist",
            "in": "query",
            "description": "Pricelist UID",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "description": "From Date",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "description": "To Date",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Keyword",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.location_uid",
            "in": "query",
            "description": "Location UID",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_available",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.product_category",
            "in": "query",
            "description": "Product Category UID",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.product_type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "description": "Expects JSON: {\"label\": \"<custom field label>\", \"value\": \"<value>\"} (matched against meta_data, not custom_fields). An optional third key, \"is_regex\": true, matches value as a case-insensitive regex. Valid JSON with different keys returns 200 with 0 rows. Unlike the equivalent filter on GET /jobs, a non-JSON string here returns 500 \"Error Fetching Products\" rather than a 400 — treat a 500 from this filter as a client-side format error, not a server fault."
          },
          {
            "name": "filter.brand",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.specification",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.product_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.product_id",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filter.min_quantity",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
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
            "name": "filter.serial_no",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.pricing_level",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_billable",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.low_stock",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "filter.scan_code",
            "in": "query",
            "description": "Scan code",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.associated_product_uid",
            "in": "query",
            "description": "Associated Product UID",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.business_unit",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"6618d5eb65b1bbb161a6930d\",\n            \"product_uid\": \"b13f69d0-f896-11ee-b23b-b9743bfe06c8\",\n            \"prefix\": \"PT\",\n            \"product_id\": \"PART005\",\n            \"product_category\": {\n                \"category_name\": \"Plumbing Tool\",\n                \"category_uid\": \"9e264c70-4813-11ea-85e2-91cf2fb0b4bb\"\n            },\n            \"product_image\": \"\",\n            \"product_barcode\": \"16\",\n            \"product_files\": [\n                {\n                    \"attachment_uid\": \"cce94303-3153-497c-9f3a-4a9693a4f8f2\",\n                    \"file_name\": \"10 mb .jpg\",\n                    \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg\",\n                    \"created_by\": 1,\n                    \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg\"\n                },\n                {\n                    \"attachment_uid\": \"39eb6882-132b-4546-8f8a-e6b8811efdad\",\n                    \"file_name\": \"BlackMarble_2016_464m_caribbean.png\",\n                    \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e8ed09c5-8e0d-4d75-8006-24d3d123b274.png\",\n                    \"created_by\": 1,\n                    \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e8ed09c5-8e0d-4d75-8006-24d3d123b274.png\"\n                },\n                {\n                    \"attachment_uid\": \"53209c10-c9c2-4fe5-8855-5457862eb983\",\n                    \"file_name\": \"BlackMarble_2016_928m_europe.png\",\n                    \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2946f908-0756-45ab-acad-b5a85cf1b8ac.png\",\n                    \"created_by\": 1,\n                    \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2946f908-0756-45ab-acad-b5a85cf1b8ac.png\"\n                },\n                {\n                    \"attachment_uid\": \"ef06aa66-97be-4811-b1bd-bfbb4e2b21ed\",\n                    \"file_name\": \"BlackMarble_2016_1200m_australia.png\",\n                    \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e0128680-9eb5-4647-9ebe-b031d2107a1c.png\",\n                    \"created_by\": 1,\n                    \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e0128680-9eb5-4647-9ebe-b031d2107a1c.png\"\n                },\n                {\n                    \"attachment_uid\": \"ff30220a-e8ab-460c-8b62-a2470fdf6341\",\n                    \"file_name\": \"sample 1.jpg\",\n                    \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg\",\n                    \"created_by\": 1,\n                    \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg\"\n                }\n            ],\n            \"brand\": \"GLB\",\n            \"product_name\": \"#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1\",\n            \"product_description\": \"<p>Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.</p>\",\n            \"product_type\": \"PRODUCT\",\n            \"meta_data\": [\n                {\n                    \"label\": \"Xero Item Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82ee\"\n                },\n                {\n                    \"label\": \"QBO Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82ef\"\n                },\n                {\n                    \"label\": \"QB Product ID\",\n                    \"value\": \"65\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"677b7d1ff00d6b1ca766504b\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f1\"\n                },\n                {\n                    \"label\": \"Hidden field\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f2\"\n                },\n                {\n                    \"label\": \"testitem\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f3\"\n                },\n                {\n                    \"label\": \"QBO Preferred Vendor\",\n                    \"value\": \"Bob's Burger Joint\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f4\"\n                },\n                {\n                    \"label\": \"New product\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f5\"\n                },\n                {\n                    \"label\": \"QBO Inventory Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f6\"\n                },\n                {\n                    \"label\": \"QBO Expense Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f7\"\n                },\n                {\n                    \"label\": \"QBO Income Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6763de60eaf9e660fc7d82f8\"\n                },\n                {\n                    \"label\": \"Mobile test hidden to FE\",\n                    \"value\": \"TEST DATA\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"_id\": \"6763de60eaf9e660fc7d82f9\"\n                },\n                {\n                    \"label\": \"QBO Item Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"666a9328aa7bec7667fefb44\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6763de60eaf9e660fc7d82fb\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6763de60eaf9e660fc7d82fc\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6763de60eaf9e660fc7d82fd\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6763de60eaf9e660fc7d82fe\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6763de60eaf9e660fc7d82ff\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6763de60eaf9e660fc7d8300\"\n                },\n                {\n                    \"label\": \"Asset decription\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66d01b95ddb31075168482d9\"\n                },\n                {\n                    \"label\": \"Xero Item ID\",\n                    \"value\": \"PART005\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6777b0af41dbf734c91fbfcb\"\n                }\n            ],\n            \"product_manual_link\": \"\",\n            \"location_availability\": [\n                {\n                    \"location\": {\n                        \"location_uid\": \"4c90d230-87e6-11ec-a0b1-1bc079724999\",\n                        \"location_name\": \"W1 Warehouse\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": -5,\n                    \"min_quantity\": 1,\n                    \"serial_nos\": [],\n                    \"_id\": \"6763de60eaf9e660fc7d8309\",\n                    \"created_at\": \"2024-12-19T08:50:40.784Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"9e1c2790-7542-11ed-b4a1-71af0364aa70\",\n                        \"location_name\": \"Los Angeles\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": 109.87,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [\n                        \"345345\",\n                        \"234234\",\n                        \"123432432\"\n                    ],\n                    \"_id\": \"6763de60eaf9e660fc7d830a\",\n                    \"created_at\": \"2024-12-19T08:50:40.785Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"1Team location\",\n                        \"location_uid\": \"86977dc0-151e-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": 1,\n                    \"min_quantity\": 1,\n                    \"serial_nos\": [\n                        \"2323\"\n                    ],\n                    \"_id\": \"6763de60eaf9e660fc7d830b\",\n                    \"created_at\": \"2024-12-19T08:50:40.785Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Team location 1\",\n                        \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": 1,\n                    \"min_quantity\": 2,\n                    \"serial_nos\": [],\n                    \"_id\": \"6763de60eaf9e660fc7d830c\",\n                    \"created_at\": \"2024-12-19T08:50:40.785Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Chennai_1\",\n                        \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                    },\n                    \"quantity\": 28.130000000000003,\n                    \"min_quantity\": 1,\n                    \"serial_nos\": [\n                        \"gdu1tdiqj\",\n                        \"7wyidy99\"\n                    ],\n                    \"_id\": \"6763de60eaf9e660fc7d830d\",\n                    \"created_at\": \"2024-12-19T08:50:40.785Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"f1e6dac0-87ed-11ec-a0b1-1bc079724999\",\n                        \"location_name\": \"W2 Warehouse\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": 8,\n                    \"min_quantity\": 1,\n                    \"serial_nos\": [],\n                    \"_id\": \"6763de60eaf9e660fc7d830e\",\n                    \"created_at\": \"2024-12-19T08:50:40.786Z\"\n                }\n            ],\n            \"track_quantity\": true,\n            \"quantity\": 143,\n            \"min_quantity\": 16,\n            \"currency\": \"\",\n            \"price\": 5.6,\n            \"has_custom_tax\": false,\n            \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n            },\n            \"is_available\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"06aaed4d-80de-41f2-a977-c32d67cce739\",\n                \"first_name\": \"def\",\n                \"last_name\": \"B\",\n                \"email\": \"def@def.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z168\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-06-15T11:56:58.000Z\",\n                \"updated_at\": \"2025-01-06T07:02:58.000Z\"\n            },\n            \"created_at\": \"2024-04-12T06:34:19.760Z\",\n            \"updated_at\": \"2025-01-06T06:50:07.367Z\",\n            \"product_no\": 814,\n            \"uom\": \"\",\n            \"specification\": \"\",\n            \"associated_products\": [],\n            \"purchase_price\": null,\n            \"is_billable\": false,\n            \"markdown_description\": \"Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.\",\n            \"plain_text_description\": \"Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.\",\n            \"id\": \"6618d5eb65b1bbb161a6930d\"\n        },\n        {\n            \"_id\": \"6618d77165b1bbb161a6997a\",\n            \"product_uid\": \"996b24b0-f897-11ee-b23b-b9743bfe06c8\",\n            \"prefix\": \"PT\",\n            \"product_id\": \"PART001\",\n            \"product_category\": {\n                \"category_name\": \"Civil Items\",\n                \"category_uid\": \"effde4f0-480d-11ea-85e2-91cf2fb0b4bb\"\n            },\n            \"product_image\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/dc19ced0-06b9-11ef-957d-079a76f91aab.jpg\",\n            \"product_barcode\": \"37\",\n            \"product_files\": [],\n            \"product_name\": \"#P/O Labor - Mech Opening Labor\",\n            \"product_description\": \"<h1>Easy HTML editing</h1>\\n<p>CKEditor 5's HTML <strong>source code editing</strong> feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code <a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://stagingv3.zuperpro.com/dashboard</a> &nbsp;includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!</p>\\n<p>&nbsp;</p>\\n<p><a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Test</a></p>\\n<h1>Easy HTML editing</h1>\\n<p>CKEditor 5's HTML <strong>source code editing</strong> feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code <a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://stagingv3.zuperpro.com/dashboard</a> &nbsp;includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!</p>\\n<p>&nbsp;</p>\\n<p><a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Test</a></p>\\n<h1>Easy HTML editing</h1>\\n<p>CKEditor 5's HTML <strong>source code editing</strong> feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code <a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://stagingv3.zuperpro.com/dashboard</a> &nbsp;includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!</p>\\n<p>&nbsp;</p>\\n<p><a href=\\\"https://stagingv3.zuperpro.com/dashboard\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Test</a></p>\",\n            \"product_type\": \"PARTS\",\n            \"meta_data\": [\n                {\n                    \"label\": \"Xero Item Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e7f\"\n                },\n                {\n                    \"label\": \"QBO Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e80\"\n                },\n                {\n                    \"label\": \"QB Product ID\",\n                    \"value\": \"65\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"67736264710899e26d3f5a32\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e82\"\n                },\n                {\n                    \"label\": \"Hidden field\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e83\"\n                },\n                {\n                    \"label\": \"testitem\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e84\"\n                },\n                {\n                    \"label\": \"QBO Preferred Vendor\",\n                    \"value\": \"Bob's Burger Joint\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e85\"\n                },\n                {\n                    \"label\": \"New product\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e86\"\n                },\n                {\n                    \"label\": \"QBO Inventory Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e87\"\n                },\n                {\n                    \"label\": \"QBO Expense Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e88\"\n                },\n                {\n                    \"label\": \"QBO Income Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6769735ab9b34d059bb80e89\"\n                },\n                {\n                    \"label\": \"Mobile test hidden to FE\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"_id\": \"6769735ab9b34d059bb80e8a\"\n                },\n                {\n                    \"label\": \"QBO Item Class\",\n                    \"value\": \"Electrical Part Repairing\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"666bed895c985fba2c1f0ede\"\n                },\n                {\n                    \"label\": \"Expense Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"664b453c3df6fbdbc03a63f1\"\n                },\n                {\n                    \"label\": \"Xero Item ID\",\n                    \"value\": \"PART001\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"665585cf35258dd28db42e48\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6769735ab9b34d059bb80e8e\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6769735ab9b34d059bb80e8f\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6769735ab9b34d059bb80e90\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6769735ab9b34d059bb80e91\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6769735ab9b34d059bb80e92\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6769735ab9b34d059bb80e93\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66cd7c73cb6b91a111105690\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66cd7c73cb6b91a11110568d\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66cd7c73cb6b91a11110568f\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66cd7c73cb6b91a111105691\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66cd7c73cb6b91a111105692\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group j\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66308df433ada69b5e492671\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group j\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66308df433ada69b5e492677\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66cd7c73cb6b91a11110568e\"\n                },\n                {\n                    \"label\": \"Asset set name\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66cd7c73cb6b91a111105694\"\n                },\n                {\n                    \"label\": \"Asset decription\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66cd7c73cb6b91a111105695\"\n                }\n            ],\n            \"product_manual_link\": \"\",\n            \"location_availability\": [\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Team location 1\",\n                        \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": -198,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [],\n                    \"_id\": \"6769735ab9b34d059bb80ea5\",\n                    \"created_at\": \"2024-12-23T14:27:38.888Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"1Team location\",\n                        \"location_uid\": \"86977dc0-151e-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": -2,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [],\n                    \"_id\": \"6769735ab9b34d059bb80ea6\",\n                    \"created_at\": \"2024-12-23T14:27:38.888Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"4c90d230-87e6-11ec-a0b1-1bc079724999\",\n                        \"location_name\": \"W1 Warehouse\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": -46,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [],\n                    \"_id\": \"6769735ab9b34d059bb80ea7\",\n                    \"created_at\": \"2024-12-23T14:27:38.889Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"09d7d6c0-0f29-11ee-b6f0-437234dd27a1\",\n                        \"location_name\": \"Houston\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": 0,\n                    \"min_quantity\": 0,\n                    \"serial_nos\": [],\n                    \"_id\": \"6769735ab9b34d059bb80ea8\",\n                    \"created_at\": \"2024-12-23T14:27:38.889Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Chennai_1\",\n                        \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                    },\n                    \"quantity\": 40,\n                    \"min_quantity\": 7,\n                    \"serial_nos\": [],\n                    \"_id\": \"6769735ab9b34d059bb80ea9\",\n                    \"created_at\": \"2024-12-23T14:27:38.890Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"9e1c2790-7542-11ed-b4a1-71af0364aa70\",\n                        \"location_name\": \"Los Angeles\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": 6,\n                    \"min_quantity\": 0,\n                    \"serial_nos\": [\n                        \"TEST001\",\n                        \"TEST002\",\n                        \"TEST003\",\n                        \"TEST004\",\n                        \"TEST005\",\n                        \"TEST006\",\n                        \"TEST007\",\n                        \"TEST008\",\n                        \"TEST009\",\n                        \"TEST010\"\n                    ],\n                    \"_id\": \"6769735ab9b34d059bb80eaa\",\n                    \"created_at\": \"2024-12-23T14:27:38.890Z\"\n                }\n            ],\n            \"track_quantity\": true,\n            \"quantity\": -200,\n            \"min_quantity\": 37,\n            \"currency\": \"\",\n            \"price\": 120,\n            \"has_custom_tax\": false,\n            \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n            },\n            \"is_available\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"06aaed4d-80de-41f2-a977-c32d67cce739\",\n                \"first_name\": \"def\",\n                \"last_name\": \"B\",\n                \"email\": \"def@def.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z168\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-06-15T11:56:58.000Z\",\n                \"updated_at\": \"2025-01-06T07:02:58.000Z\"\n            },\n            \"created_at\": \"2024-04-12T06:40:49.282Z\",\n            \"updated_at\": \"2024-12-31T03:17:56.418Z\",\n            \"product_no\": 815,\n            \"uom\": \"\",\n            \"brand\": \"\",\n            \"specification\": \"\",\n            \"associated_products\": [],\n            \"purchase_price\": 100,\n            \"markup\": {\n                \"markup_type\": \"FLAT\",\n                \"markup_value\": 20\n            },\n            \"markdown_description\": \"Easy HTML editing\\n=================\\n\\nCKEditor 5's HTML **source code editing** feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code [https://stagingv3.zuperpro.com/dashboard](https://stagingv3.zuperpro.com/dashboard)  includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!\\n\\n[Test](https://stagingv3.zuperpro.com/dashboard)\\n\\nEasy HTML editing\\n=================\\n\\nCKEditor 5's HTML **source code editing** feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code [https://stagingv3.zuperpro.com/dashboard](https://stagingv3.zuperpro.com/dashboard)  includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!\\n\\n[Test](https://stagingv3.zuperpro.com/dashboard)\\n\\nEasy HTML editing\\n=================\\n\\nCKEditor 5's HTML **source code editing** feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code [https://stagingv3.zuperpro.com/dashboard](https://stagingv3.zuperpro.com/dashboard)  includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks!\\n\\n[Test](https://stagingv3.zuperpro.com/dashboard)\",\n            \"plain_text_description\": \"Easy HTML editing CKEditor 5's HTML source code editing feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code https://stagingv3.zuperpro.com/dashboard [https://stagingv3.zuperpro.com/dashboard] includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks! Test [https://stagingv3.zuperpro.com/dashboard] Easy HTML editing CKEditor 5's HTML source code editing feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code https://stagingv3.zuperpro.com/dashboard [https://stagingv3.zuperpro.com/dashboard] includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks! Test [https://stagingv3.zuperpro.com/dashboard] Easy HTML editing CKEditor 5's HTML source code editing feature allows it to be used as an online HTML editor. It includes syntax highlighting to make it easier for you to follow code. It can be forced to accept any type of code https://stagingv3.zuperpro.com/dashboard [https://stagingv3.zuperpro.com/dashboard] includingtags by simply turning off the HTML filtering. You can also switch to WYSIWYG mode anytime to check how your code output looks! Test [https://stagingv3.zuperpro.com/dashboard]\",\n            \"is_billable\": false,\n            \"id\": \"6618d77165b1bbb161a6997a\"\n        },\n        {\n            \"_id\": \"6618d56d65b1bbb161a6905c\",\n            \"product_uid\": \"6642f0f0-f896-11ee-b23b-b9743bfe06c8\",\n            \"prefix\": \"PT\",\n            \"product_id\": \"PART003\",\n            \"product_category\": {\n                \"category_uid\": \"6d4c2690-cf94-11ed-8f0d-05ed42e5cf59\",\n                \"category_name\": \"Design\"\n            },\n            \"product_image\": \"\",\n            \"product_barcode\": \"10\",\n            \"product_files\": [],\n            \"brand\": \"Pro-Team\",\n            \"product_name\": \"#PTM-50-9002 - Prevent, 1 qt Bottle, 12/Case\",\n            \"product_description\": \"\",\n            \"product_type\": \"PARTS\",\n            \"meta_data\": [\n                {\n                    \"label\": \"QB Product ID\",\n                    \"value\": \"3326\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df186\"\n                },\n                {\n                    \"label\": \"QBO Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df187\"\n                },\n                {\n                    \"label\": \"Xero Item Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df188\"\n                },\n                {\n                    \"label\": \"Hidden field\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df189\"\n                },\n                {\n                    \"label\": \"testitem\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18a\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18b\"\n                },\n                {\n                    \"label\": \"QBO Preferred Vendor\",\n                    \"value\": \"Bob's Burger Joint\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18c\"\n                },\n                {\n                    \"label\": \"New product\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18d\"\n                },\n                {\n                    \"label\": \"QBO Inventory Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18e\"\n                },\n                {\n                    \"label\": \"QBO Expense Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df18f\"\n                },\n                {\n                    \"label\": \"QBO Income Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"673608f7b8d5f765098df190\"\n                },\n                {\n                    \"label\": \"Mobile test hidden to FE\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"_id\": \"673608f7b8d5f765098df191\"\n                },\n                {\n                    \"label\": \"QBO Item Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6659754f9501cbe650c22a67\"\n                },\n                {\n                    \"label\": \"Xero Item ID\",\n                    \"value\": \"PART003\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"664b1c2c3df6fbdbc0394e56\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"673608f7b8d5f765098df194\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"673608f7b8d5f765098df195\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"673608f7b8d5f765098df196\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"673608f7b8d5f765098df197\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"Testing\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"673608f7b8d5f765098df198\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"asdfatst\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"673608f7b8d5f765098df199\"\n                },\n                {\n                    \"label\": \"Text Input\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"669578978124fde68cc1b17d\"\n                },\n                {\n                    \"label\": \"Asset set name\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"669578978124fde68cc1b183\"\n                },\n                {\n                    \"label\": \"Asset decription\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"669578978124fde68cc1b184\"\n                }\n            ],\n            \"product_manual_link\": \"\",\n            \"location_availability\": [\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Team location 1\",\n                        \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": -1,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [],\n                    \"_id\": \"673608f7b8d5f765098df19f\",\n                    \"created_at\": \"2024-11-14T14:28:07.131Z\"\n                }\n            ],\n            \"track_quantity\": true,\n            \"quantity\": -1,\n            \"min_quantity\": 10,\n            \"currency\": \"\",\n            \"price\": 100,\n            \"purchase_price\": 50,\n            \"has_custom_tax\": false,\n            \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n            },\n            \"is_available\": false,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"06aaed4d-80de-41f2-a977-c32d67cce739\",\n                \"first_name\": \"def\",\n                \"last_name\": \"B\",\n                \"email\": \"def@def.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z168\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-06-15T11:56:58.000Z\",\n                \"updated_at\": \"2025-01-06T07:02:58.000Z\"\n            },\n            \"created_at\": \"2024-04-12T06:32:13.955Z\",\n            \"updated_at\": \"2024-12-17T13:28:29.454Z\",\n            \"product_no\": 812,\n            \"uom\": \"\",\n            \"specification\": \"\",\n            \"associated_products\": [],\n            \"markup\": {\n                \"markup_type\": \"FLAT\",\n                \"markup_value\": 50\n            },\n            \"markdown_description\": \"\",\n            \"plain_text_description\": \"\",\n            \"id\": \"6618d56d65b1bbb161a6905c\"\n        },\n        {\n            \"_id\": \"6618d5a965b1bbb161a69117\",\n            \"product_uid\": \"8979fc80-f896-11ee-b23b-b9743bfe06c8\",\n            \"prefix\": \"PT\",\n            \"product_id\": \"PART004\",\n            \"product_category\": {\n                \"category_uid\": \"3bfe7c60-869b-11ed-a15a-8956ad7e5220\",\n                \"category_name\": \"GAME\"\n            },\n            \"product_image\": \"\",\n            \"product_barcode\": \"10\",\n            \"product_files\": [],\n            \"product_name\": \"#PTM-50-9103 - 1 qt Metal Magic\",\n            \"product_description\": \"\",\n            \"product_type\": \"PARTS\",\n            \"meta_data\": [\n                {\n                    \"label\": \"QB Product ID\",\n                    \"value\": \"109\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5ec943f32d2b20de5cb\"\n                },\n                {\n                    \"label\": \"QBO Class\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfabd\"\n                },\n                {\n                    \"label\": \"Xero Item Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfabe\"\n                },\n                {\n                    \"label\": \"Hidden field\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfabf\"\n                },\n                {\n                    \"label\": \"testitem\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": true,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac0\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac1\"\n                },\n                {\n                    \"label\": \"QBO Preferred Vendor\",\n                    \"value\": \"Bob's Burger Joint\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac2\"\n                },\n                {\n                    \"label\": \"New product\",\n                    \"value\": \"\",\n                    \"type\": \"LOOKUP\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac3\"\n                },\n                {\n                    \"label\": \"QBO Inventory Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac4\"\n                },\n                {\n                    \"label\": \"QBO Expense Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac5\"\n                },\n                {\n                    \"label\": \"QBO Income Account\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"_id\": \"6729c5e2469a079d13fbfac6\"\n                },\n                {\n                    \"label\": \"Mobile test hidden to FE\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"_id\": \"6729c5e2469a079d13fbfac7\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6729c5e2469a079d13fbfac8\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6729c5e2469a079d13fbfac9\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6729c5e2469a079d13fbfaca\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Part/Product\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"6729c5e2469a079d13fbfacb\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6729c5e2469a079d13fbfacc\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"module_name\": \"PRODUCT\",\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group for product\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6729c5e2469a079d13fbfacd\"\n                },\n                {\n                    \"label\": \"Vignesh Custom\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66915dec3d3a28f367e64c4e\"\n                },\n                {\n                    \"label\": \"Checkbox\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_ITEM\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66915dec3d3a28f367e64c4f\"\n                },\n                {\n                    \"label\": \"DateTime Input\",\n                    \"value\": \"\",\n                    \"type\": \"DATETIME\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66915dec3d3a28f367e64c50\"\n                },\n                {\n                    \"label\": \"Time Input\",\n                    \"value\": \"\",\n                    \"type\": \"TIME\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66915dec3d3a28f367e64c51\"\n                },\n                {\n                    \"label\": \"Text Area\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"test group\",\n                    \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                    \"_id\": \"66915dec3d3a28f367e64c52\"\n                },\n                {\n                    \"label\": \"Asset decription\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"New group\",\n                    \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"66915dec3d3a28f367e64c53\"\n                },\n                {\n                    \"label\": \"Test Asset\",\n                    \"value\": \"\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": true,\n                    \"group_name\": \"Asset group j\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6618d5a965b1bbb161a69124\"\n                },\n                {\n                    \"label\": \"Product description\",\n                    \"value\": \"\",\n                    \"type\": \"MULTI_LINE\",\n                    \"hide_field\": false,\n                    \"hide_to_fe\": false,\n                    \"group_name\": \"Asset group j\",\n                    \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                    \"_id\": \"6618d5a965b1bbb161a69125\"\n                }\n            ],\n            \"product_manual_link\": \"\",\n            \"location_availability\": [\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Team location 1\",\n                        \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": -2,\n                    \"min_quantity\": 10,\n                    \"serial_nos\": [],\n                    \"_id\": \"6729c5e2469a079d13fbfad9\",\n                    \"created_at\": \"2024-11-05T07:14:42.959Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"Chennai_1\",\n                        \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                    },\n                    \"quantity\": 10,\n                    \"min_quantity\": 0,\n                    \"serial_nos\": [],\n                    \"_id\": \"6729c5e2469a079d13fbfada\",\n                    \"created_at\": \"2024-11-05T07:14:42.960Z\"\n                },\n                {\n                    \"location\": {\n                        \"is_deleted\": false,\n                        \"location_name\": \"1Team location\",\n                        \"location_uid\": \"86977dc0-151e-11ec-9f07-294a44e6be4e\"\n                    },\n                    \"quantity\": 5,\n                    \"min_quantity\": null,\n                    \"serial_nos\": [],\n                    \"_id\": \"6747fb94be3c1998d43eb87f\",\n                    \"created_at\": \"2024-11-28T05:11:48.164Z\"\n                },\n                {\n                    \"location\": {\n                        \"location_uid\": \"20499810-896c-11ec-be25-67cf7f623b46\",\n                        \"location_name\": \"W3 Warehouse\",\n                        \"is_deleted\": false\n                    },\n                    \"quantity\": 25,\n                    \"min_quantity\": null,\n                    \"serial_nos\": [],\n                    \"_id\": \"67641e3249579ce682b7e5da\",\n                    \"created_at\": \"2024-12-19T13:22:58.589Z\"\n                }\n            ],\n            \"track_quantity\": true,\n            \"quantity\": 38,\n            \"min_quantity\": 10,\n            \"currency\": \"\",\n            \"price\": 28.1,\n            \"has_custom_tax\": false,\n            \"tax\": {\n                \"tax_rate\": null,\n                \"tax_name\": \"\",\n                \"tax_exempt\": false\n            },\n            \"is_available\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"06aaed4d-80de-41f2-a977-c32d67cce739\",\n                \"first_name\": \"def\",\n                \"last_name\": \"B\",\n                \"email\": \"def@def.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z168\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2023-06-15T11:56:58.000Z\",\n                \"updated_at\": \"2025-01-06T07:02:58.000Z\"\n            },\n            \"created_at\": \"2024-04-12T06:33:13.035Z\",\n            \"updated_at\": \"2024-12-20T20:16:53.234Z\",\n            \"product_no\": 813,\n            \"uom\": \"\",\n            \"associated_products\": [],\n            \"brand\": \"\",\n            \"specification\": \"\",\n            \"is_billable\": true,\n            \"markdown_description\": \"\",\n            \"plain_text_description\": \"\",\n            \"id\": \"6618d5a965b1bbb161a69117\"\n        }\n    ],\n    \"total_records\": 10,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                          "_id": {
                            "type": "string",
                            "example": "6618d5eb65b1bbb161a6930d"
                          },
                          "product_uid": {
                            "type": "string",
                            "example": "b13f69d0-f896-11ee-b23b-b9743bfe06c8"
                          },
                          "prefix": {
                            "type": "string",
                            "example": "PT"
                          },
                          "product_id": {
                            "type": "string",
                            "example": "PART005"
                          },
                          "product_category": {
                            "type": "object",
                            "properties": {
                              "category_name": {
                                "type": "string",
                                "example": "Plumbing Tool"
                              },
                              "category_uid": {
                                "type": "string",
                                "example": "9e264c70-4813-11ea-85e2-91cf2fb0b4bb"
                              }
                            }
                          },
                          "product_image": {
                            "type": "string",
                            "example": ""
                          },
                          "product_barcode": {
                            "type": "string",
                            "example": "16"
                          },
                          "product_files": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "attachment_uid": {
                                  "type": "string",
                                  "example": "cce94303-3153-497c-9f3a-4a9693a4f8f2"
                                },
                                "file_name": {
                                  "type": "string",
                                  "example": "10 mb .jpg"
                                },
                                "url": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg"
                                },
                                "created_by": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "file_url": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg"
                                }
                              }
                            }
                          },
                          "brand": {
                            "type": "string",
                            "example": "GLB"
                          },
                          "product_name": {
                            "type": "string",
                            "example": "#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1"
                          },
                          "product_description": {
                            "type": "string",
                            "example": "<p>Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.</p>"
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
                                  "example": "Xero Item Account"
                                },
                                "value": {
                                  "type": "string",
                                  "example": ""
                                },
                                "type": {
                                  "type": "string",
                                  "example": "SINGLE_ITEM"
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
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
                                "_id": {
                                  "type": "string",
                                  "example": "6763de60eaf9e660fc7d82ee"
                                }
                              }
                            }
                          },
                          "product_manual_link": {
                            "type": "string",
                            "example": ""
                          },
                          "location_availability": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "location": {
                                  "type": "object",
                                  "properties": {
                                    "location_uid": {
                                      "type": "string",
                                      "example": "4c90d230-87e6-11ec-a0b1-1bc079724999"
                                    },
                                    "location_name": {
                                      "type": "string",
                                      "example": "W1 Warehouse"
                                    },
                                    "is_deleted": {
                                      "type": "boolean",
                                      "example": false,
                                      "default": true
                                    }
                                  }
                                },
                                "quantity": {
                                  "type": "integer",
                                  "example": -5,
                                  "default": 0
                                },
                                "min_quantity": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "serial_nos": {
                                  "type": "array"
                                },
                                "_id": {
                                  "type": "string",
                                  "example": "6763de60eaf9e660fc7d8309"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2024-12-19T08:50:40.784Z"
                                }
                              }
                            }
                          },
                          "track_quantity": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "quantity": {
                            "type": "integer",
                            "example": 143,
                            "default": 0
                          },
                          "min_quantity": {
                            "type": "integer",
                            "example": 16,
                            "default": 0
                          },
                          "currency": {
                            "type": "string",
                            "example": ""
                          },
                          "price": {
                            "type": "number",
                            "example": 5.6,
                            "default": 0
                          },
                          "has_custom_tax": {
                            "type": "boolean",
                            "example": false,
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
                          "is_available": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "06aaed4d-80de-41f2-a977-c32d67cce739"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "def"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "B"
                              },
                              "email": {
                                "type": "string",
                                "example": "def@def.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "Z168"
                              },
                              "prefix": {},
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
                                "example": "2023-06-15T11:56:58.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-01-06T07:02:58.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-04-12T06:34:19.760Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2025-01-06T06:50:07.367Z"
                          },
                          "product_no": {
                            "type": "integer",
                            "example": 814,
                            "default": 0
                          },
                          "uom": {
                            "type": "string",
                            "example": ""
                          },
                          "specification": {
                            "type": "string",
                            "example": ""
                          },
                          "associated_products": {
                            "type": "array"
                          },
                          "purchase_price": {},
                          "is_billable": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "markdown_description": {
                            "type": "string",
                            "example": "Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami."
                          },
                          "plain_text_description": {
                            "type": "string",
                            "example": "Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami."
                          },
                          "id": {
                            "type": "string",
                            "example": "6618d5eb65b1bbb161a6930d"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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