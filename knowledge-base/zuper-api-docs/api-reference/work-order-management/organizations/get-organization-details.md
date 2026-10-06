---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Organization Details

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
    "/organization/{organization_uid}": {
      "get": {
        "summary": "Get Organization Details",
        "description": "",
        "operationId": "get-organization-details",
        "parameters": [
          {
            "name": "organization_uid",
            "in": "path",
            "description": "Organization uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"organization_uid\": \"4cb510d0-5b9a-11ee-b665-fff525290acf\",\n        \"organization_name\": \"Ranson Electric Vehicle Company\",\n        \"organization_logo\": null,\n        \"organization_description\": null,\n        \"organization_email\": null,\n        \"no_of_customers\": 1,\n        \"organization_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n                12.9729537,\n                80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n        },\n        \"organization_billing_address\": {\n            \"city\": \"Chennai \",\n            \"state\": \"Tamil Nadu \",\n            \"street\": \"Zupersoft Solutions Private Limited, Rajiv Gandhi Salai, Elango Nagar, OMR\",\n            \"country\": \"India\",\n            \"landmark\": \"\",\n            \"zip_code\": \"600041\",\n            \"geo_cordinates\": [\n                12.9729537,\n                80.2512351\n            ],\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"govindd\"\n        },\n        \"custom_fields\": [\n            {\n                \"label\": \"LookUp\",\n                \"value\": \"\",\n                \"type\": \"LOOKUP\",\n                \"hide_to_fe\": false,\n                \"hide_field\": false,\n                \"read_only\": false,\n                \"_id\": \"651174fc699147062783f754\"\n            }\n        ],\n        \"created_by\": {\n            \"user_uid\": \"57a967fe-30c1-41a6-a4e5-5a04f5b8c936\",\n            \"first_name\": \"Lavanya\",\n            \"last_name\": \"G\",\n            \"email\": \"lavanya.g@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"Z200\",\n            \"prefix\": null,\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-09-08T07:13:05.000Z\",\n            \"updated_at\": \"2023-09-08T07:13:05.000Z\"\n        },\n        \"is_portal_enabled\": false,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"teams\": [],\n        \"attachments\": [],\n        \"created_at\": \"2023-09-25T11:54:36.514Z\",\n        \"updated_at\": \"2023-09-25T11:54:36.517Z\"\n    }\n}"
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
                        "organization_uid": {
                          "type": "string",
                          "example": "4cb510d0-5b9a-11ee-b665-fff525290acf"
                        },
                        "organization_name": {
                          "type": "string",
                          "example": "Ranson Electric Vehicle Company"
                        },
                        "organization_logo": {},
                        "organization_description": {},
                        "organization_email": {},
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
                              "example": ""
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600041"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9729537,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Lavanya"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "govindd"
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
                              "example": ""
                            },
                            "zip_code": {
                              "type": "string",
                              "example": "600041"
                            },
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9729537,
                                "default": 0
                              }
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Lavanya"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "govindd"
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
                                "example": "LookUp"
                              },
                              "value": {
                                "type": "string",
                                "example": ""
                              },
                              "type": {
                                "type": "string",
                                "example": "LOOKUP"
                              },
                              "hide_to_fe": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "hide_field": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "read_only": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "651174fc699147062783f754"
                              }
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "57a967fe-30c1-41a6-a4e5-5a04f5b8c936"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Lavanya"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "G"
                            },
                            "email": {
                              "type": "string",
                              "example": "lavanya.g@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "Z200"
                            },
                            "prefix": {},
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
                              "example": "2023-09-08T07:13:05.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2023-09-08T07:13:05.000Z"
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
                        "teams": {
                          "type": "array"
                        },
                        "attachments": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2023-09-25T11:54:36.514Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2023-09-25T11:54:36.517Z"
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
                    "value": "{\n    \"message\": \"\",\n     \"title\": \"\",\n     \"type\": \"\"\n }"
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