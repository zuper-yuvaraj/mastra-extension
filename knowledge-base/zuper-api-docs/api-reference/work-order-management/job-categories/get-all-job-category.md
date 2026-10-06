---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Job Category

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
    "/jobs/category": {
      "get": {
        "summary": "Get All Job Category",
        "description": "",
        "operationId": "get-all-job-category",
        "parameters": [
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
                "display_order",
                "created_at"
              ]
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
            "name": "filter.category_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "populate_statuses",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"category_name\": \"Installation\",\n      \"category_uid\": \"c506e890-015e-11eb-99a8-e7fcc50f879e\",\n      \"created_at\": \"2020-09-28T07:46:50.905Z\",\n      \"updated_at\": \"2024-02-15T05:17:12.069Z\",\n      \"category_color\": \"#e67e22\",\n      \"category_description\": \"\",\n      \"is_deleted\": false,\n      \"estimated_duration\": {\n        \"days\": 0,\n        \"hours\": 3,\n        \"minutes\": 0\n      },\n      \"job_statuses\": []\n    },\n    {\n      \"category_name\": \"AC Duct cleaning\",\n      \"category_color\": \"#8e44ad\",\n      \"category_uid\": \"5db1b2b0-45a1-11eb-b617-236ea18f68c8\",\n      \"created_at\": \"2020-12-24T04:34:52.892Z\",\n      \"updated_at\": \"2022-07-29T08:03:37.771Z\",\n      \"is_deleted\": false,\n      \"estimated_duration\": {\n        \"hours\": 2,\n        \"minutes\": 0,\n        \"days\": 0\n      },\n      \"job_statuses\": []\n    }\n  ]\n}"
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
                          "category_name": {
                            "type": "string",
                            "example": "Installation"
                          },
                          "category_uid": {
                            "type": "string",
                            "example": "c506e890-015e-11eb-99a8-e7fcc50f879e"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2020-09-28T07:46:50.905Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-02-15T05:17:12.069Z"
                          },
                          "category_color": {
                            "type": "string",
                            "example": "#e67e22"
                          },
                          "category_description": {
                            "type": "string",
                            "example": ""
                          },
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
                                "example": 0,
                                "default": 0
                              },
                              "hours": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "minutes": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "job_statuses": {
                            "type": "array"
                          }
                        }
                      }
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
                    "value": "{\n  \"message\": \"Error in getting categories\",\n  \"title\": \"Error in getting categories\",\n  \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in getting categories"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in getting categories"
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