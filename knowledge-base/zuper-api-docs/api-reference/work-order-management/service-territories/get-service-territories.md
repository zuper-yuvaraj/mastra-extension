---
updatedAt: 2026-10-02T14:13:21.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Territories

Lists service territories. Role-based auto-scoping applies: a Team Leader only sees territories owned/created by users on their teams; a Field Executive only sees their own owned/created territories.

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
    "/territory": {
      "get": {
        "summary": "Get Service Territories",
        "description": "Lists service territories. Role-based auto-scoping applies: a Team Leader only sees territories owned/created by users on their teams; a Field Executive only sees their own owned/created territories.",
        "operationId": "get-service-territories",
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
            "schema": {
              "type": "string",
              "enum": [
                "territory_name",
                "created_at"
              ]
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "For search (includes only territory_name)",
            "schema": {
              "type": "string"
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
            "name": "filter.type",
            "in": "query",
            "description": "created_at",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "Must be sent together with the other updated_at bound. Strict format: YYYY-MM-DDTHH:mm:ssZ, YYYY-MM-DD HH:mm:ss, YYYY-MM-DDTHH:mm:ss.SSSZ, or YYYY-MM-DD HH:mm:ss.SSS.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "Must be sent together with the other updated_at bound. Strict format: YYYY-MM-DDTHH:mm:ssZ, YYYY-MM-DD HH:mm:ss, YYYY-MM-DDTHH:mm:ss.SSSZ, or YYYY-MM-DD HH:mm:ss.SSS.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.zip_code",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.location",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "description": "\"<latitude>,<longitude>\" — applied as an in-memory geo filter (point-in-radius for RADIUS territories, point-in-polygon for GEOFENCE) after the DB query, so pagination totals reflect the post-filter count."
          },
          {
            "name": "filter.territory_uid",
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
            "name": "filter.team_uid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "populate_owners",
            "schema": {
              "type": "boolean"
            },
            "description": "If true, populates owners with user details."
          },
          {
            "in": "query",
            "name": "populate_teams",
            "schema": {
              "type": "boolean"
            },
            "description": "If true, populates teams with team details."
          },
          {
            "in": "query",
            "name": "filter.owned",
            "schema": {
              "type": "boolean"
            },
            "description": "If true, restricts to territories where the requesting user is listed in owners."
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"territory_uid\": \"0f4ee337-85c6-472b-a0c9-f471b67f8ea5\",\n            \"territory_name\": \"check 2\",\n            \"territory_description\": \"check\",\n            \"territory_color\": \"#4960a0\",\n            \"territory_type\": \"ZIPCODE\",\n            \"territory_radius\": {\n                \"radius\": 0\n            },\n            \"territory_zipcodes\": [\n                \"600028\"\n            ],\n            \"territory_coordinates\": [],\n            \"created_by\": {\n                \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n                \"first_name\": \"Hariharan\",\n                \"last_name\": \"M\",\n                \"email\": \"hariharan.m@zuper.co\",\n                \"external_login_id\": \"\",\n                \"home_phone_number\": null,\n                \"designation\": \"Tech\",\n                \"emp_code\": \"1234\",\n                \"prefix\": \"Z22\",\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-07-05T06:42:02.000Z\",\n                \"updated_at\": \"2024-07-05T06:42:02.000Z\"\n            },\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-09-19T10:39:36.663Z\",\n            \"updated_at\": \"2024-09-19T10:39:36.667Z\"\n        },\n        {\n            \"territory_uid\": \"cb7ccfc7-3be6-444f-89e0-749b7079e529\",\n            \"territory_name\": \"Check 1\",\n            \"territory_description\": \"check\",\n            \"territory_color\": \"#4960a0\",\n            \"territory_type\": \"ZIPCODE\",\n            \"territory_radius\": {\n                \"radius\": 0\n            },\n            \"territory_zipcodes\": [\n                \"600028\",\n                \"600026\"\n            ],\n            \"territory_coordinates\": [],\n            \"created_by\": {\n                \"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\",\n                \"first_name\": \"Hariharan\",\n                \"last_name\": \"M\",\n                \"email\": \"hariharan.m@zuper.co\",\n                \"external_login_id\": \"\",\n                \"home_phone_number\": null,\n                \"designation\": \"Tech\",\n                \"emp_code\": \"1234\",\n                \"prefix\": \"Z22\",\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-07-05T06:42:02.000Z\",\n                \"updated_at\": \"2024-07-05T06:42:02.000Z\"\n            },\n            \"is_active\": false,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-09-19T10:06:41.209Z\",\n            \"updated_at\": \"2024-09-19T10:38:58.626Z\"\n        },\n        {\n            \"territory_uid\": \"0c96a029-3d08-426d-8962-165882b0cd36\",\n            \"territory_name\": \"South India\",\n            \"territory_description\": \"NW Zone\",\n            \"territory_color\": \"#4960a0\",\n            \"territory_type\": \"RADIUS\",\n            \"territory_radius\": {\n                \"geo_cordinates\": [\n                    13.079344888934324,\n                    80.26746766555686\n                ],\n                \"radius\": 1665\n            },\n            \"territory_zipcodes\": [],\n            \"territory_coordinates\": [],\n            \"created_by\": {\n                \"user_uid\": \"ccd2c2be-7b00-41ad-a7be-ba2625aef1b6\",\n                \"first_name\": \"Akash\",\n                \"last_name\": \"Raj\",\n                \"email\": \"akashraj@zuper.co\",\n                \"external_login_id\": \"zuper-trainingg\",\n                \"home_phone_number\": null,\n                \"designation\": \"FE\",\n                \"emp_code\": \"1235\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/4933d560-c18c-11ee-8217-9bf65cb17269.jpg\",\n                \"hourly_labor_charge\": 20,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2024-01-09T12:33:36.000Z\",\n                \"updated_at\": \"2024-06-07T12:49:21.000Z\"\n            },\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-08-23T09:28:20.707Z\",\n            \"updated_at\": \"2024-09-02T17:44:09.109Z\"\n        }\n    ],\n    \"total_records\": 3,\n    \"current_page\": \"1\",\n    \"total_pages\": 1\n}"
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
                          "territory_uid": {
                            "type": "string",
                            "example": "0f4ee337-85c6-472b-a0c9-f471b67f8ea5"
                          },
                          "territory_name": {
                            "type": "string",
                            "example": "check 2"
                          },
                          "territory_description": {
                            "type": "string",
                            "example": "check"
                          },
                          "territory_color": {
                            "type": "string",
                            "example": "#4960a0"
                          },
                          "territory_type": {
                            "type": "string",
                            "example": "ZIPCODE"
                          },
                          "territory_radius": {
                            "type": "object",
                            "properties": {
                              "radius": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "territory_zipcodes": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "600028"
                            }
                          },
                          "territory_coordinates": {
                            "type": "array"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "48625036-fef6-4637-99e7-f09377a4f9ba"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Hariharan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "M"
                              },
                              "email": {
                                "type": "string",
                                "example": "hariharan.m@zuper.co"
                              },
                              "external_login_id": {
                                "type": "string",
                                "example": ""
                              },
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Tech"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "1234"
                              },
                              "prefix": {
                                "type": "string",
                                "example": "Z22"
                              },
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
                                "example": "2024-07-05T06:42:02.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-07-05T06:42:02.000Z"
                              }
                            }
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
                            "example": "2024-09-19T10:39:36.663Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-09-19T10:39:36.667Z"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 3,
                      "default": 0
                    },
                    "current_page": {
                      "type": "string",
                      "example": "1"
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
                    "value": "{\"type\": \"error\", \"title\": \"Invalid Updated Date\", \"message\": \"Invalid Updated Date\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
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
                    "value": "{\"type\": \"error\", \"message\": \"Unauthorized Request\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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