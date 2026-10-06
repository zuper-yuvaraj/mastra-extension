---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Organizations

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
    "/organization": {
      "get": {
        "summary": "Get Organizations",
        "description": "",
        "operationId": "get-all-organizations",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Page number to fetch",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "description": "Number of organizations in the page",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Sort order",
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
            "description": "Sort type",
            "schema": {
              "type": "string",
              "enum": [
                "organization_name",
                "created_at"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Keyword search based on organization name and email",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "description": "Filter by active organizations",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.teams",
            "in": "query",
            "description": "Filter by organization teams UIDs",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "Filter by organization updated date from",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "Filter by organization updated date to",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.is_portal_enabled",
            "in": "query",
            "description": "Filter by portal enabled organizations",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "description": "Filter by organization's custom field",
            "schema": {
              "properties": {},
              "type": "object"
            }
          },
          {
            "name": "filter.organization_uid",
            "in": "query",
            "description": "Filter by organization uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "description": "Filter by deleted organizations",
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
                    "value": "{\n      \"type\": \"success\",\n      \"data\": [{\n            \"organization_uid\": \"219cf1e0-5ba1-11ee-8cd0-516f5d67130d\",\n            \"organization_name\": \"Test API docs\",\n            \"organization_logo\": null,\n            \"organization_description\": \"<p>test</p>\",\n            \"organization_email\": \"velu.k24@gmail.com\",\n            \"no_of_customers\": 1,\n            \"organization_address\": {\n                \"city\": \"Chennai \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n                \"country\": \"India\",\n                \"landmark\": \"tt\",\n                \"geo_cordinates\": [\n                    12.9729347,\n                    80.2512452\n                ]\n            },\n            \"organization_billing_address\": {\n                \"city\": \"Chennai \",\n                \"state\": \"Tamil Nadu \",\n                \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n                \"country\": \"India\",\n                \"landmark\": \"tt\",\n                \"geo_cordinates\": [\n                    12.9729347,\n                    80.2512452\n                ]\n            },\n            \"created_by\": {\n                \"user_uid\": \"cfa78be2-b427-4d5a-89fe-7cf4a8e01352\",\n                \"first_name\": \"velmurugan\",\n                \"last_name\": \"k\",\n                \"email\": \"velmurugan.k@zuper.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"hourly_labor_charge\": null,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2022-11-03T11:33:22.000Z\",\n                \"updated_at\": \"2022-11-03T11:33:22.000Z\"\n            },\n            \"is_portal_enabled\": false,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-09-25T12:43:30.690Z\",\n            \"updated_at\": \"2023-09-25T12:43:30.696Z\"\n        }],\n      \"total_records\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 2\n    }"
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
                          "organization_uid": {
                            "type": "string",
                            "example": "219cf1e0-5ba1-11ee-8cd0-516f5d67130d"
                          },
                          "organization_name": {
                            "type": "string",
                            "example": "Test API docs"
                          },
                          "organization_logo": {},
                          "organization_description": {
                            "type": "string",
                            "example": "<p>test</p>"
                          },
                          "organization_email": {
                            "type": "string",
                            "example": "velu.k24@gmail.com"
                          },
                          "no_of_customers": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
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
                                "example": "Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR"
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "landmark": {
                                "type": "string",
                                "example": "tt"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 12.9729347,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "organization_billing_address": {
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
                                "example": "Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR"
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "landmark": {
                                "type": "string",
                                "example": "tt"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 12.9729347,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "created_by": {
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
                          "is_portal_enabled": {
                            "type": "boolean",
                            "example": false,
                            "default": true
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
                            "example": "2023-09-25T12:43:30.690Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-09-25T12:43:30.696Z"
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
                      "example": 2,
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
                    "value": "{\n      \"message\": \"\",\n      \"title\": \"\",\n      \"type\": \"\"\n }"
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
                    "value": "{\n      \"type\": \"\",\n      \"message\": \"\",\n      \"title\": \"\",\n      \"data\": \"\"\n }"
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
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "data": {
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