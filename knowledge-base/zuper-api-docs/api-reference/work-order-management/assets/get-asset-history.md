---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Asset History

Returns the audit history of actions performed on an asset (installs, removals, status changes, product/part/serial-number updates, etc).

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
    "/assets/{asset_uid}/history": {
      "get": {
        "summary": "Get Asset History",
        "description": "Returns the audit history of actions performed on an asset (installs, removals, status changes, product/part/serial-number updates, etc).",
        "operationId": "get-asset-history",
        "parameters": [
          {
            "name": "asset_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.action_type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "organization",
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
            "name": "filter.product",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.job",
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
            "name": "filter.from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_from_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to_date",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
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
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.asset_history_uid",
            "in": "query",
            "schema": {
              "type": "string"
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
              "default": 50
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
            "name": "sort_by",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "action_type",
                "updated_at",
                "created_at"
              ],
              "default": "created_at"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"asset_history_uid\": \"c888a400-68ed-11ee-a8d5-f53a2c9a4252\",\n            \"serial_number\": null,\n            \"status\": \"READY_TO_INSTALL\",\n            \"action_type\": \"STATUS_UPDATE\",\n            \"meta_data\": {\n                \"updated_status\": \"OBSOLETE\"\n            },\n            \"remarks\": \"From Asset Status Update\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"1eb1d499-e8b1-4979-a04b-4b0599599529\",\n                \"first_name\": \"Ashin\",\n                \"last_name\": \"Thankachan\",\n                \"email\": \"ashin.t@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Admin\",\n                \"emp_code\": \"Z103\",\n                \"prefix\": null,\n                \"work_phone_number\": \"8301907278\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg\",\n                \"hourly_labor_charge\": 120,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-07-04T06:25:56.000Z\",\n                \"updated_at\": \"2023-10-05T08:30:17.000Z\"\n            },\n            \"attachments\": [],\n            \"created_at\": \"2023-10-12T10:54:57.673Z\",\n            \"updated_at\": \"2023-10-12T10:54:57.676Z\",\n            \"id\": \"undefined\"\n        }\n    ],\n    \"total_records\": 1,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                          "asset_history_uid": {
                            "type": "string",
                            "example": "c888a400-68ed-11ee-a8d5-f53a2c9a4252"
                          },
                          "serial_number": {},
                          "status": {
                            "type": "string",
                            "example": "READY_TO_INSTALL"
                          },
                          "action_type": {
                            "type": "string",
                            "example": "STATUS_UPDATE"
                          },
                          "meta_data": {
                            "type": "object",
                            "properties": {
                              "updated_status": {
                                "type": "string",
                                "example": "OBSOLETE"
                              }
                            }
                          },
                          "remarks": {
                            "type": "string",
                            "example": "From Asset Status Update"
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
                          "attachments": {
                            "type": "array"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-10-12T10:54:57.673Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-12T10:54:57.676Z"
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