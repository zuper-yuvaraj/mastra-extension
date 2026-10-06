---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Projects

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
    "/projects": {
      "get": {
        "summary": "Get All Projects",
        "description": "",
        "operationId": "get-all-projects",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
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
            "schema": {
              "type": "string",
              "enum": [
                "project_name",
                "project_number",
                "project_priority",
                "created_at",
                "updated_at"
              ]
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.project_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "string"
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
            "name": "filter.due_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.start_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.end_date",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_organization",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.property",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.asset",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.tags",
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
            }
          },
          {
            "name": "filter.project_manager",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.project_status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.priority",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"project_uid\": \"e3f12ca0-cb06-11ee-a449-939bad2b294a\",\n      \"project_prefix\": \"Test \",\n      \"project_number\": 3,\n      \"project_icon\": \"Testing\",\n      \"project_name\": \"color code\",\n      \"project_category\": {\n        \"category_uid\": \"63932f00-c3f8-11ee-8e97-5d343b8a24b1\",\n        \"category_name\": \"textttst\",\n        \"display_order\": 1,\n        \"is_deleted\": false,\n        \"created_at\": \"2024-02-05T07:30:08.514Z\",\n        \"updated_at\": \"2024-02-05T10:28:56.524Z\",\n        \"__v\": 0,\n        \"category_color\": \"#000\",\n        \"category_description\": \"<p>ff<br></p>\",\n        \"estimated_duration\": {\n          \"days\": 1,\n          \"hours\": 1,\n          \"minutes\": 1\n        }\n      },\n      \"project_priority\": \"MEDIUM\",\n      \"project_description\": \"some description about project\",\n      \"project_template\": null,\n      \"project_current_status\": {\n        \"project_status_uid\": \"9c481ec0-6b19-11ed-bae3-7da4b580c234\",\n        \"project_status_name\": \"Started\",\n        \"project_status_type\": \"STARTED\",\n        \"project_status_color\": \"rgb\"\n      },\n      \"project_completion_percentage\": 90,\n      \"project_start_date\": \"2021-11-01T18:30:00.000Z\",\n      \"project_end_date\": \"2021-12-01T18:30:00.000Z\",\n      \"project_actual_start_date\": \"2021-11-01T18:30:00.000Z\",\n      \"project_actual_end_date\": \"2021-12-01T18:30:00.000Z\",\n      \"project_service_address\": {\n        \"landmark\": \"near jain college\",\n        \"city\": \"Thoraipakkam \",\n        \"state\": \"Tamil Nadu \",\n        \"street\": \"Jain College, D B Jain College main enterence, Jothi Nagar\",\n        \"country\": \"India\",\n        \"zip_code\": \"600097\",\n        \"geo_cordinates\": [\n          12.9469543,\n          80.2400814\n        ],\n        \"first_name\": \"Test\",\n        \"last_name\": \"User\",\n        \"phone_number\": \"1234567890\",\n        \"email\": \"testuser@yopmail.com\"\n      },\n      \"project_billing_address\": {\n        \"landmark\": \"near jain college\",\n        \"city\": \"Thoraipakkam \",\n        \"state\": \"Tamil Nadu \",\n        \"street\": \"Jain College, D B Jain College main enterence, Jothi Nagar\",\n        \"country\": \"India\",\n        \"zip_code\": \"600097\",\n        \"geo_cordinates\": [\n          12.9469543,\n          80.2400814\n        ],\n        \"first_name\": \"Test\",\n        \"last_name\": \"User\",\n        \"phone_number\": \"1234567890\",\n        \"email\": \"testuser@yopmail.com\"\n      },\n      \"project_due_date\": \"2021-12-01T18:30:00.000Z\",\n      \"organization\": {\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"organization_address\": {\n          \"city\": \"Chennai \",\n          \"state\": \"Tamil Nadu \",\n          \"street\": \"Amelio Early Education - Ascendas IT Park, CSIR Road, Tharamani, India\",\n          \"landmark\": \"\",\n          \"geo_cordinates\": [\n            12.9855685,\n            80.2461915\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_name\": \"Ascendas\",\n        \"organization_logo\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/acb9ba40-8211-11eb-ab1f-1ddf213d24b4.jpg\",\n        \"organization_email\": \"ascendas@abc.com\",\n        \"organization_description\": \"<p><span style=\\\"background-color: rgb(255, 255, 0); color: #000000;\\\">Ascendas</span> is located in <strong>Taramani</strong>. It has <span style=\\\"background-color: rgb(239, 239, 239); color: #ff0000;\\\">3 phases. </span>asd sad gfgf fgfg dfdf dfrg dfdf dfddd ddfd dfdf dfd asdasd</p>\\n<ol>\\n<li>one</li>\\n<li>two</li>\\n<li>three</li></ol><p><a href=\\\"https://www.apple.com/in/apple-watch-ultra/\\\">link</a><br></p><ol>\\n</ol>\",\n        \"organization_billing_address\": {\n          \"city\": \"Chennai\",\n          \"state\": \"Tamil Nadu\",\n          \"street\": \"Ascendas Phase 1\",\n          \"landmark\": \"Near Taramani bus stand\",\n          \"geo_cordinates\": [\n            0,\n            0\n          ],\n          \"first_name\": \"\",\n          \"last_name\": \"\",\n          \"phone_number\": \"\",\n          \"email\": \"\"\n        },\n        \"organization_uid\": \"11d86a70-8212-11eb-ab1f-1ddf213d24b4\",\n        \"no_of_customers\": 43,\n        \"custom_fields\": [\n          {\n            \"label\": \"LookUp\",\n            \"value\": \"\",\n            \"type\": \"LOOKUP\",\n            \"hide_to_fe\": false,\n            \"hide_field\": false,\n            \"read_only\": false,\n            \"_id\": \"6401c0251c380c4e487555a6\"\n          }\n        ],\n        \"created_at\": \"2021-03-11T02:32:48.537Z\",\n        \"updated_at\": \"2023-03-14T14:29:04.606Z\"\n      },\n      \"project_tags\": [\n        \"tag 1\",\n        \"tag 2\"\n      ],\n      \"custom_fields\": [\n        {\n          \"label\": \"Sage Customer ID\",\n          \"value\": \"\",\n          \"type\": \"SINGLE_LINE\",\n          \"hide_to_fe\": false,\n          \"hide_field\": false,\n          \"read_only\": false,\n          \"_id\": \"65cc654eb213919d9bfc04f9\"\n        }\n      ],\n      \"project_assigned_to\": [\n        {\n          \"user\": {\n            \"user_uid\": \"6c513b60-ff7c-11e7-b3a8-29b417a4f3fa\",\n            \"first_name\": \"Raghav\",\n            \"last_name\": \"G\",\n            \"email\": \"raghav@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"7397722822\",\n            \"designation\": \"CTO\",\n            \"emp_code\": \"1234\",\n            \"prefix\": null,\n            \"work_phone_number\": \"7397722822\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/3d87e6d0-e8d8-11ed-adf9-a5fc91f5c57c.jpeg\",\n            \"hourly_labor_charge\": 500,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-01-16T13:59:59.000Z\",\n            \"updated_at\": \"2024-01-16T13:59:59.000Z\"\n          },\n          \"team\": {\n            \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n            \"team_name\": \"SF Team\",\n            \"team_color\": \"#3498db\",\n            \"is_active\": true,\n            \"is_deleted\": false\n          }\n        }\n      ],\n      \"project_public_url\": \"hello.com\",\n      \"is_deleted\": false,\n      \"is_active\": true,\n      \"created_by\": {\n        \"user_uid\": \"d083c6cb-9202-41fc-8ae2-e986939c5471\",\n        \"first_name\": \"Jerin\",\n        \"last_name\": \"Aj\",\n        \"email\": \"jerin@zuper.co\",\n        \"external_login_id\": null,\n        \"home_phone_number\": null,\n        \"designation\": \"Admin\",\n        \"emp_code\": \"J001\",\n        \"prefix\": null,\n        \"work_phone_number\": null,\n        \"mobile_phone_number\": null,\n        \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9f1e58b0-5396-11ee-af3b-ed82d39ae946.jpg\",\n        \"hourly_labor_charge\": 54.59,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"created_at\": \"2022-02-16T10:00:42.000Z\",\n        \"updated_at\": \"2023-09-15T07:08:08.000Z\"\n      },\n      \"project_status\": [],\n      \"created_at\": \"2024-02-14T07:01:34.978Z\",\n      \"updated_at\": \"2024-02-14T07:01:34.978Z\",\n      \"project_number_string\": \"Test 1\",\n      \"project_priority_index\": 1,\n      \"__v\": 0,\n      \"id\": \"undefined\",\n      \"project_manager\": {}\n    }\n  ],\n  \"total_records\": 1,\n  \"current_page\": 1,\n  \"total_pages\": 1\n}"
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
                          "project_uid": {
                            "type": "string",
                            "example": "e3f12ca0-cb06-11ee-a449-939bad2b294a"
                          },
                          "project_prefix": {
                            "type": "string",
                            "example": "Test "
                          },
                          "project_number": {
                            "type": "integer",
                            "example": 3,
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
                          "project_template": {},
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
                                  "example": "65cc654eb213919d9bfc04f9"
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
                          "project_status": {
                            "type": "array"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-02-14T07:01:34.978Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-02-14T07:01:34.978Z"
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
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          },
                          "project_manager": {
                            "type": "object",
                            "properties": {}
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 1,
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