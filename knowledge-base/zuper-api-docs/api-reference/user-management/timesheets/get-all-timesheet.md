---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Timesheets

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
    "/timesheets": {
      "get": {
        "summary": "Get Timesheets",
        "description": "",
        "operationId": "get-all-timesheet",
        "parameters": [
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.type",
            "in": "query",
            "description": "Timesheet type",
            "schema": {
              "type": "string"
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
            "name": "filter.user_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.location_uid",
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
                    "value": "{\n    \"status\": \"success\",\n\"data\": {\n    \"total_pages\": 1,\n    \"current_page\": 1,\n    \"timesheets\": [\n        {\n            \"employee_timesheet_uid\": \"47b6b52c-7d83-4bb4-80f9-ba4b880ed36e\",\n            \"type_of_check\": \"CHECK_IN\",\n            \"latitude\": 12.9729,\n            \"longitude\": 80.2512,\n            \"auth_pic\": null,\n            \"remarks\": \"in\",\n            \"checked_time\": \"2023-02-07T06:00:00.000Z\",\n            \"created_at\": \"2023-02-07T11:23:04.000Z\",\n            \"users\": {\n                \"user_uid\": \"607f1361-87de-422e-9315-891ea5c10e49\",\n                \"first_name\": \"Heisen\",\n                \"last_name\": \"berg\",\n                \"email\": \"velmurugan@zuper.co\",\n                \"external_login_id\": \"FE1\",\n                \"home_phone_number\": \"0000000000\",\n                \"designation\": \"FE\",\n                \"emp_code\": \"FE1\",\n                \"prefix\": null,\n                \"work_phone_number\": \"0000000000\",\n                \"mobile_phone_number\": \"0000000000\",\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-14T07:19:24.000Z\",\n                \"updated_at\": \"2022-11-30T06:52:43.000Z\"\n            },\n            \"created_user\": {\n                \"user_uid\": \"cfa78be2-b427-4d5a-89fe-7cf4a8e01352\",\n                \"first_name\": \"velmurugan\",\n                \"last_name\": \"k\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-03T11:33:22.000Z\",\n                \"updated_at\": \"2022-11-03T11:33:22.000Z\"\n            },\n            \"timesheet_location\": {\n                \"location_uid\": \"a7d6bf75-d86e-49ae-a769-39651335f59b\",\n                \"location_name\": \"Zuper chennai\",\n                \"latitude\": 12.9729347,\n                \"longitude\": 80.2512452,\n                \"address\": \"Zupersoft Solution PVT Ltd, \\nRajiv Gandhi Salai, Elango Nagar, \\nOMR, Chennai, \\nTamil Nadu, India\",\n                \"radius\": 10000,\n                \"created_at\": \"2023-01-27T07:20:07.000Z\",\n                \"is_deleted\": false\n            }\n        }\n    ],\n    \"total_records\": 2\n}\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "total_pages": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "current_page": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "timesheets": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "employee_timesheet_uid": {
                                "type": "string",
                                "example": "47b6b52c-7d83-4bb4-80f9-ba4b880ed36e"
                              },
                              "type_of_check": {
                                "type": "string",
                                "example": "CHECK_IN"
                              },
                              "latitude": {
                                "type": "number",
                                "example": 12.9729,
                                "default": 0
                              },
                              "longitude": {
                                "type": "number",
                                "example": 80.2512,
                                "default": 0
                              },
                              "auth_pic": {},
                              "remarks": {
                                "type": "string",
                                "example": "in"
                              },
                              "checked_time": {
                                "type": "string",
                                "example": "2023-02-07T06:00:00.000Z"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2023-02-07T11:23:04.000Z"
                              },
                              "users": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "607f1361-87de-422e-9315-891ea5c10e49"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Heisen"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "berg"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "velmurugan@zuper.co"
                                  },
                                  "external_login_id": {
                                    "type": "string",
                                    "example": "FE1"
                                  },
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "0000000000"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "FE"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "FE1"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "0000000000"
                                  },
                                  "mobile_phone_number": {
                                    "type": "string",
                                    "example": "0000000000"
                                  },
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                  },
                                  "hourly_labor_charge": {},
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
                                    "example": "2022-11-14T07:19:24.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-11-30T06:52:43.000Z"
                                  }
                                }
                              },
                              "created_user": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "cfa78be2-b427-4d5a-89fe-7cf4a8e01352"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "velmurugan"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "k"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "velmurugan.k@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "9600086457"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "001"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "9600086457"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "hourly_labor_charge": {},
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
                                    "example": "2022-11-03T11:33:22.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-11-03T11:33:22.000Z"
                                  }
                                }
                              },
                              "timesheet_location": {
                                "type": "object",
                                "properties": {
                                  "location_uid": {
                                    "type": "string",
                                    "example": "a7d6bf75-d86e-49ae-a769-39651335f59b"
                                  },
                                  "location_name": {
                                    "type": "string",
                                    "example": "Zuper chennai"
                                  },
                                  "latitude": {
                                    "type": "number",
                                    "example": 12.9729347,
                                    "default": 0
                                  },
                                  "longitude": {
                                    "type": "number",
                                    "example": 80.2512452,
                                    "default": 0
                                  },
                                  "address": {
                                    "type": "string",
                                    "example": "Zupersoft Solution PVT Ltd, \nRajiv Gandhi Salai, Elango Nagar, \nOMR, Chennai, \nTamil Nadu, India"
                                  },
                                  "radius": {
                                    "type": "integer",
                                    "example": 10000,
                                    "default": 0
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2023-01-27T07:20:07.000Z"
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
                        "total_records": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n        \"info\": \"Database Error\" \n}"
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
                      "example": "Database Error"
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