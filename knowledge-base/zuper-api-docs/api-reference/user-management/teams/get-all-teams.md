---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Teams

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
    "/teams/summary": {
      "get": {
        "summary": "Get All Teams",
        "description": "",
        "operationId": "get-all-teams",
        "parameters": [
          {
            "name": "filter.team_name",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.user_uid",
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
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.team_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.user_keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.skillset_uid",
            "in": "query",
            "description": "Multiple skillset_uid comma separated",
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
            "name": "filter.business_unit",
            "in": "query",
            "description": "Multiple trade type uid comma separated",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_dispatchable",
            "in": "query",
            "schema": {
              "type": "boolean"
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\",\n            \"team_name\": \"SF Team\",\n            \"team_color\": \"#3498db\",\n            \"team_description\": \"This team covers 603211, 603222, 603223\",\n            \"team_timezone\": \"\",\n            \"user_count\": 0,\n            \"is_active\": true,\n            \"created_at\": \"2018-01-25T22:00:03.000Z\",\n            \"updated_at\": \"2023-10-12T11:24:19.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"94d84b0f-ca91-40b6-b8b6-69c811476de9\",\n            \"team_name\": \"Installation Team\",\n            \"team_color\": \"#27ae60\",\n            \"team_description\": \"install\",\n            \"team_timezone\": null,\n            \"user_count\": 22,\n            \"is_active\": true,\n            \"created_at\": \"2018-05-31T05:50:42.000Z\",\n            \"updated_at\": \"2023-10-12T11:29:09.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"335c25ef-c54a-43d3-9c88-7c62921e4da4\",\n            \"team_name\": \"Maintanence\",\n            \"team_color\": \"#1abc9c\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 11,\n            \"is_active\": true,\n            \"created_at\": \"2018-05-31T06:09:13.000Z\",\n            \"updated_at\": \"2023-10-03T06:39:13.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"eca3ea7c-c3be-492e-9dc5-3ba26ea22ad7\",\n            \"team_name\": \"Team1\",\n            \"team_color\": \"#27ae60\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 6,\n            \"is_active\": true,\n            \"created_at\": \"2019-08-27T11:37:15.000Z\",\n            \"updated_at\": \"2023-01-23T07:26:51.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"4d3db48d-241c-4f89-8cda-b0372c33082e\",\n            \"team_name\": \"Team S\",\n            \"team_color\": \"#3498db\",\n            \"team_description\": \"Test team for S\",\n            \"team_timezone\": null,\n            \"user_count\": 15,\n            \"is_active\": true,\n            \"created_at\": \"2020-07-06T10:15:31.000Z\",\n            \"updated_at\": \"2023-06-07T10:34:21.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"9f620406-0a8c-430b-858d-ced59cef93a7\",\n            \"team_name\": \"Sales Team\",\n            \"team_color\": \"#4960a0\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 7,\n            \"is_active\": true,\n            \"created_at\": \"2021-02-22T08:15:09.000Z\",\n            \"updated_at\": \"2023-09-20T08:36:53.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"a9aa15ed-de29-4a0d-9948-5cbf1aee53ed\",\n            \"team_name\": \"Web test\",\n            \"team_color\": \"#4960a0\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 4,\n            \"is_active\": true,\n            \"created_at\": \"2021-03-19T11:29:17.000Z\",\n            \"updated_at\": \"2023-07-21T09:51:18.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"71eee401-bde6-4072-b6cd-255cfe6fe6ee\",\n            \"team_name\": \"Scheduler Testing\",\n            \"team_color\": \"#000000\",\n            \"team_description\": null,\n            \"team_timezone\": \"\",\n            \"user_count\": 6,\n            \"is_active\": true,\n            \"created_at\": \"2021-08-13T12:01:58.000Z\",\n            \"updated_at\": \"2023-09-16T17:04:58.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"3ea86d4b-f89e-423b-9b18-16e6699644d4\",\n            \"team_name\": \"Test Dec 23\",\n            \"team_color\": \"#4960a0\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 1,\n            \"is_active\": true,\n            \"created_at\": \"2021-12-23T06:14:53.000Z\",\n            \"updated_at\": \"2023-09-20T10:12:25.000Z\",\n            \"created_by\": null\n        },\n        {\n            \"team_uid\": \"75c131e5-9fdf-433b-8032-e5282750330b\",\n            \"team_name\": \"Backend\",\n            \"team_color\": \"#27ae60\",\n            \"team_description\": null,\n            \"team_timezone\": null,\n            \"user_count\": 49,\n            \"is_active\": true,\n            \"created_at\": \"2022-05-09T16:11:15.000Z\",\n            \"updated_at\": \"2023-08-31T09:44:28.000Z\",\n            \"created_by\": null\n        }\n    ],\n    \"total_records\": 44,\n    \"current_page\": 1,\n    \"total_pages\": 5\n}"
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
                          "team_description": {
                            "type": "string",
                            "example": "This team covers 603211, 603222, 603223"
                          },
                          "team_timezone": {
                            "type": "string",
                            "example": ""
                          },
                          "user_count": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "is_active": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2018-01-25T22:00:03.000Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-12T11:24:19.000Z"
                          },
                          "created_by": {}
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 44,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 5,
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\"\n}"
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
                      "example": ""
                    }
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n          \"info\":\"\"\n}"
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
                      "example": ""
                    },
                    "info": {
                      "type": "string",
                      "example": ""
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