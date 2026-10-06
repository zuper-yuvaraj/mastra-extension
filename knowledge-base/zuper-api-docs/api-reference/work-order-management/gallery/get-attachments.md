---
updatedAt: 2026-06-09T06:10:22.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Gallery

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
    "/attachments/group": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": "{\n  /* Page - 1\n  limit - 1 */\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"group_label\": \"Thursday, 3 July 2025\",\n      \"date\": \"2025-07-03\",\n      \"attachments\": [\n        {\n          \"attachment_uid\": \"8bceeb93-9744-46bd-a3e5-70addd515f93\",\n          \"module\": \"JOB\",\n          \"module_uid\": \"b6baf2e5-83b3-4ccc-a12b-5a2c7edc1aa7\",\n          \"mime_type\": \"image/jpeg\",\n          \"attachment_size\": 1662,\n          \"attachment_path\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/b845a724-62c0-474f-9a87-5213ed397b64/ca530118-8b33-4f7b-9349-7d2b89a9660a.jpeg\",\n          \"attachment_name\": \"scene.jpeg\",\n          \"attachment_description\": null,\n          \"attachment_visibility\": \"INTERNAL\",\n          \"type_of_attachment\": \"CHECKLIST\",\n          \"is_deleted\": false,\n          \"created_at\": \"2025-07-03T03:51:01.000Z\",\n          \"created_by\": {\n            \"user_uid\": \"3ab638af-b3b5-44e9-a061-523e24df2ed0\",\n            \"first_name\": \"Jayasoorya\",\n            \"last_name\": \"Zuper\",\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/b845a724-2130-474f-9a87-5d5ed3957b64/6aa0be07-e054-4016-a3aa-723b347ba6d4.jpg\"\n          },\n          \"geo_cords\": null,\n          \"updated_at\": \"2025-09-15T09:46:03.000Z\",\n          \"attachment_tags\": []\n        }\n      ]\n    }\n  ],\n  \"total_pages\": 2094,\n  \"current_page\": 1,\n  \"total_records\": 2094\n}"
                  }
                }
              }
            }
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                },
                "examples": {
                  "Internal Server Error": {
                    "summary": "Internal Server Error",
                    "value": {
                      "type": "error",
                      "title": "Error in grouping attachments",
                      "message": "An Error occured while grouping the attachments"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "page",
            "schema": {
              "type": "number",
              "default": "1"
            },
            "description": "Positive number"
          },
          {
            "in": "query",
            "name": "limit",
            "schema": {
              "type": "number",
              "default": "10"
            },
            "description": "Positive number"
          },
          {
            "in": "query",
            "name": "sort",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "ASC"
            }
          },
          {
            "in": "query",
            "name": "sort_by",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "created_by"
              ],
              "default": "created_at"
            }
          },
          {
            "in": "query",
            "name": "group_by",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "attachment_tag",
                "created_by"
              ],
              "default": "created_at"
            },
            "required": false
          },
          {
            "in": "query",
            "name": "filter.attachment_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.folder_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.type_of_attachment",
            "schema": {
              "type": "string"
            },
            "description": "JOB_NOTE, NOTE, CHECKLIST, ATTACHMENT, GLASS"
          },
          {
            "in": "query",
            "name": "filter.mime_type",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.type",
            "schema": {
              "type": "string"
            },
            "description": "IMAGE, VIDEO"
          },
          {
            "in": "query",
            "name": "filter.module",
            "schema": {
              "type": "string",
              "enum": [
                "JOB",
                "PROJECT",
                "CUSTOMER",
                "PROPERTY"
              ]
            },
            "description": ""
          },
          {
            "in": "query",
            "name": "filter.module_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "is_photo_feed",
            "description": "If only module is sent then we can make enable this flag",
            "schema": {
              "type": "boolean",
              "default": "false"
            }
          },
          {
            "in": "query",
            "name": "filter.created_by",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.from_date",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.to_date",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.attachment_tag",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.attachment_visibility",
            "schema": {
              "type": "string",
              "enum": [
                "INTERNAL",
                "PUBLIC"
              ]
            }
          },
          {
            "in": "query",
            "name": "include_thumbnail",
            "schema": {
              "type": "boolean",
              "default": "false"
            }
          }
        ],
        "operationId": "get_attachments-group",
        "summary": "Gallery"
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