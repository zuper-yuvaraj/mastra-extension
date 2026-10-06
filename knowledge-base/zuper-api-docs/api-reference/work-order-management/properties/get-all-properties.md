---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Properties

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
    "/property": {
      "get": {
        "summary": "Get All Properties",
        "description": "",
        "operationId": "get-all-properties",
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
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
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
            "name": "filter.property_uid",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.organization",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.cusotmer",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.parent_property",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.assigned_to",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "Multiple values are supported with a delimiter ','",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_at_from",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.created_at_to",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "filter.no_of_jobs_from",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "filter.no_of_jobs_to",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
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
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_deleted",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"property_uid\": \"99b76887-e31d-47bd-9e30-16ad17ba0db9\",\n            \"property_name\": \"Property One\",\n            \"no_of_jobs\": 0,\n            \"property_address\": {\n                \"city\": \"Jacquelynfield\",\n                \"state\": \"South Carolina\",\n                \"street\": \"Wiza Trafficway\",\n                \"country\": \"Morocco\",\n                \"landmark\": \"quos\",\n                \"zip_code\": \"80795\",\n                \"geo_cordinates\": [\n                    87.5701,\n                    101.7953\n                ]\n            },\n            \"custom_fields\": [\n                {\n                    \"label\": \"PCF_1\",\n                    \"value\": \"Aut porro quo exercitationem impedit vel aut.\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false\n                },\n                {\n                    \"label\": \"PCF_2\",\n                    \"value\": \"10:51:40\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false\n                }\n            ],\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"3b01e998-8c9a-459f-95cd-f557e7cf3c49\",\n                \"first_name\": \"Valliyappan\",\n                \"last_name\": \"S\",\n                \"email\": \"valliyappan.s@zuper.co\",\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"role\": {\n                    \"role_id\": 1,\n                    \"role_uid\": \"d0169b01-79c1-4262-9231-a386f2df16c3\",\n                    \"role_name\": \"Admin\",\n                    \"role_key\": \"ADMIN\",\n                    \"created_at\": \"2022-09-22T13:14:28.000Z\",\n                    \"updated_at\": \"2022-09-22T13:14:28.000Z\"\n                }\n            },\n            \"property_customers\": [],\n            \"attachments\": [],\n            \"created_at\": \"2023-10-02T07:25:00.220Z\",\n            \"updated_at\": \"2023-10-02T07:25:00.225Z\"\n        },\n        {\n            \"property_uid\": \"99b76887-e31d-47bd-9e30-16ad17ba0db9\",\n            \"property_name\": \"Property Two\",\n            \"no_of_jobs\": 0,\n            \"property_address\": {\n                \"city\": \"Jacquelynfield\",\n                \"state\": \"South Carolina\",\n                \"street\": \"Wiza Trafficway\",\n                \"country\": \"Morocco\",\n                \"landmark\": \"quos\",\n                \"zip_code\": \"80795\",\n                \"geo_cordinates\": [\n                    87.5701,\n                    101.7953\n                ]\n            },\n            \"custom_fields\": [\n                {\n                    \"label\": \"PCF_1\",\n                    \"value\": \"Aut porro quo exercitationem impedit vel aut.\",\n                    \"type\": \"SINGLE_LINE\",\n                    \"hide_to_fe\": false\n                },\n                {\n                    \"label\": \"PCF_2\",\n                    \"value\": \"10:51:40\",\n                    \"type\": \"TIME\",\n                    \"hide_to_fe\": false\n                }\n            ],\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"3b01e998-8c9a-459f-95cd-f557e7cf3c49\",\n                \"first_name\": \"Valliyappan\",\n                \"last_name\": \"S\",\n                \"email\": \"valliyappan.s@zuper.co\",\n                \"home_phone_number\": \"9600086457\",\n                \"designation\": \"Admin\",\n                \"emp_code\": \"001\",\n                \"prefix\": null,\n                \"work_phone_number\": \"9600086457\",\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"\",\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"role\": {\n                    \"role_id\": 1,\n                    \"role_uid\": \"d0169b01-79c1-4262-9231-a386f2df16c3\",\n                    \"role_name\": \"Admin\",\n                    \"role_key\": \"ADMIN\",\n                    \"created_at\": \"2022-09-22T13:14:28.000Z\",\n                    \"updated_at\": \"2022-09-22T13:14:28.000Z\"\n                }\n            },\n            \"property_customers\": [],\n            \"attachments\": [],\n            \"created_at\": \"2023-10-02T07:25:00.220Z\",\n            \"updated_at\": \"2023-10-02T07:25:00.225Z\"\n        }\n    ],\n    \"current_page_records\": 10,\n    \"total_records\": 10,\n    \"current_page\": 2,\n    \"total_pages\": 5\n}"
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
                          "property_uid": {
                            "type": "string",
                            "example": "99b76887-e31d-47bd-9e30-16ad17ba0db9"
                          },
                          "property_name": {
                            "type": "string",
                            "example": "Property One"
                          },
                          "no_of_jobs": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "property_address": {
                            "type": "object",
                            "properties": {
                              "city": {
                                "type": "string",
                                "example": "Jacquelynfield"
                              },
                              "state": {
                                "type": "string",
                                "example": "South Carolina"
                              },
                              "street": {
                                "type": "string",
                                "example": "Wiza Trafficway"
                              },
                              "country": {
                                "type": "string",
                                "example": "Morocco"
                              },
                              "landmark": {
                                "type": "string",
                                "example": "quos"
                              },
                              "zip_code": {
                                "type": "string",
                                "example": "80795"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 87.5701,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "example": "PCF_1"
                                },
                                "value": {
                                  "type": "string",
                                  "example": "Aut porro quo exercitationem impedit vel aut."
                                },
                                "type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
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
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "3b01e998-8c9a-459f-95cd-f557e7cf3c49"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "Valliyappan"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "S"
                              },
                              "email": {
                                "type": "string",
                                "example": "valliyappan.s@zuper.co"
                              },
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
                                  "role_id": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "role_uid": {
                                    "type": "string",
                                    "example": "d0169b01-79c1-4262-9231-a386f2df16c3"
                                  },
                                  "role_name": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "role_key": {
                                    "type": "string",
                                    "example": "ADMIN"
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2022-09-22T13:14:28.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2022-09-22T13:14:28.000Z"
                                  }
                                }
                              }
                            }
                          },
                          "property_customers": {
                            "type": "array"
                          },
                          "attachments": {
                            "type": "array"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-10-02T07:25:00.220Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2023-10-02T07:25:00.225Z"
                          }
                        }
                      }
                    },
                    "current_page_records": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 2,
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
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location --request GET 'https://API-REGION.zuperpro.com/property' \\\n--header 'x-api-key: API-KEY' \\"
            }
          ],
          "samples-languages": [
            "curl"
          ]
        }
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