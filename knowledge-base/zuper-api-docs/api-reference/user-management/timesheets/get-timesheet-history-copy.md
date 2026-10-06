---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timesheet Summary

Returns summary of timesheets such as total work time of users across from & to date

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
    "/timesheets/summary": {
      "get": {
        "summary": "Get Timesheet Summary",
        "description": "Returns summary of timesheets such as total work time of users across from & to date",
        "operationId": "get-timesheet-history-copy",
        "parameters": [
          {
            "name": "from_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "to_date",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filter": {
                    "properties": {
                      "keyword": {
                        "type": "string"
                      },
                      "team_uid": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "team_uid"
                    ],
                    "type": "object"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"dates\": [\"2024-09-19\"],\n        \"timesheet_data\": [\n            {\n                \"user\": {\n                    \"user_id\": 11440,\n                    \"user_uid\": \"c425fe39-2309-4d2b-87b8-5b4b65546ccb\",\n                    \"first_name\": \"Velmurugan\",\n                    \"last_name\": \"K\",\n                    \"email\": \"velmurugan.k@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": null,\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"Z111\",\n                    \"prefix\": null,\n                    \"work_phone_number\": null,\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg\",\n                    \"hourly_labor_charge\": 120,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2022-11-02T10:35:52.000Z\",\n                    \"updated_at\": \"2024-09-19T09:50:15.000Z\",\n                    \"role\": {\n                        \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                        \"role_key\": \"ADMIN\",\n                        \"role_name\": \"Admin\",\n                        \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                        \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n                    }\n                },\n                \"timesheets\": []\n            }\n        ]\n    }\n}"
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
                        "dates": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "2024-09-19"
                          }
                        },
                        "timesheet_data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "user": {
                                "type": "object",
                                "properties": {
                                  "user_id": {
                                    "type": "integer",
                                    "example": 11440,
                                    "default": 0
                                  },
                                  "user_uid": {
                                    "type": "string",
                                    "example": "c425fe39-2309-4d2b-87b8-5b4b65546ccb"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Velmurugan"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "K"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "velmurugan.k@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {},
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "Z111"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {},
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/0772b941-2f4e-4723-b0d4-cf6ba1064845.jpg"
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
                                    "example": "2022-11-02T10:35:52.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-09-19T09:50:15.000Z"
                                  },
                                  "role": {
                                    "type": "object",
                                    "properties": {
                                      "role_uid": {
                                        "type": "string",
                                        "example": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b"
                                      },
                                      "role_key": {
                                        "type": "string",
                                        "example": "ADMIN"
                                      },
                                      "role_name": {
                                        "type": "string",
                                        "example": "Admin"
                                      },
                                      "created_at": {
                                        "type": "string",
                                        "example": "2018-01-22T00:00:00.000Z"
                                      },
                                      "updated_at": {
                                        "type": "string",
                                        "example": "2018-01-22T00:00:00.000Z"
                                      }
                                    }
                                  }
                                }
                              },
                              "timesheets": {
                                "type": "array"
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