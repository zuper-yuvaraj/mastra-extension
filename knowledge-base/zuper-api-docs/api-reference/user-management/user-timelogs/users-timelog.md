---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Users Timelog

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
    "/users/timelog": {
      "get": {
        "summary": "Get Users Timelog",
        "description": "",
        "operationId": "users-timelog",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "ASC"
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "created_at"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
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
            "name": "filter.team_uid",
            "in": "query",
            "description": "Support multiple team_uids with `,`",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.user_uid",
            "in": "query",
            "description": "Support multiple user_uid with `,`",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"user_uid\": \"641aacc5-3a7a-4c3c-beec-fa6c186e37ec\",\n            \"first_name\": \"John\",\n            \"last_name\": \"Doe\",\n            \"designation\": \"Admin\",\n            \"email\": \"john.doe@zuper.co\",\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG\",\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"role\": {\n                \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                \"role_name\": \"Admin\",\n                \"role_key\": \"ADMIN\"\n            },\n            \"teams\": [\n                {\n                    \"team_uid\": \"853f37b4-ffe7-433f-aade-f9b8efcc44d2\",\n                    \"team_name\": \"Team Maverix\",\n                    \"team_description\": null,\n                    \"team_color\": \"#4960a0\",\n                    \"user_count\": 12,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2025-01-08T05:42:48.000Z\"\n                }\n            ],\n            \"timelog_summary\": [\n                {\n                    \"date\": \"2025-04-17\",\n                    \"travel_time\": 0,\n                    \"break_time\": 60,\n                    \"work_time\": 180,\n                    \"day_total_time\": 240\n                }\n            ],\n            \"total_travel_time\": 0,\n            \"total_break_time\": 60,\n            \"total_work_time\": 180,\n            \"total_minutes\": 240\n        }\n    ],\n    \"total_records\": 1,\n    \"total_pages\": 1,\n    \"current_page\": 1\n}"
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
                          "user_uid": {
                            "type": "string",
                            "example": "641aacc5-3a7a-4c3c-beec-fa6c186e37ec"
                          },
                          "first_name": {
                            "type": "string",
                            "example": "John"
                          },
                          "last_name": {
                            "type": "string",
                            "example": "Doe"
                          },
                          "designation": {
                            "type": "string",
                            "example": "Admin"
                          },
                          "email": {
                            "type": "string",
                            "example": "john.doe@zuper.co"
                          },
                          "profile_picture": {
                            "type": "string",
                            "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/c5914720-043e-11ee-89dd-7d1eb09002c4.JPG"
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
                          "role": {
                            "type": "object",
                            "properties": {
                              "role_uid": {
                                "type": "string",
                                "example": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b"
                              },
                              "role_name": {
                                "type": "string",
                                "example": "Admin"
                              },
                              "role_key": {
                                "type": "string",
                                "example": "ADMIN"
                              }
                            }
                          },
                          "teams": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "team_uid": {
                                  "type": "string",
                                  "example": "853f37b4-ffe7-433f-aade-f9b8efcc44d2"
                                },
                                "team_name": {
                                  "type": "string",
                                  "example": "Team Maverix"
                                },
                                "team_description": {},
                                "team_color": {
                                  "type": "string",
                                  "example": "#4960a0"
                                },
                                "user_count": {
                                  "type": "integer",
                                  "example": 12,
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
                                  "example": "2025-01-08T05:42:48.000Z"
                                }
                              }
                            }
                          },
                          "timelog_summary": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "date": {
                                  "type": "string",
                                  "example": "2025-04-17"
                                },
                                "travel_time": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "break_time": {
                                  "type": "integer",
                                  "example": 60,
                                  "default": 0
                                },
                                "work_time": {
                                  "type": "integer",
                                  "example": 180,
                                  "default": 0
                                },
                                "day_total_time": {
                                  "type": "integer",
                                  "example": 240,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "total_travel_time": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "total_break_time": {
                            "type": "integer",
                            "example": 60,
                            "default": 0
                          },
                          "total_work_time": {
                            "type": "integer",
                            "example": 180,
                            "default": 0
                          },
                          "total_minutes": {
                            "type": "integer",
                            "example": 240,
                            "default": 0
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "current_page": {
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Missing From Date / To Dates\",\n    \"message\": \"From Date / To Dates are required to fetch user timelogs\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing From Date / To Dates"
                    },
                    "message": {
                      "type": "string",
                      "example": "From Date / To Dates are required to fetch user timelogs"
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