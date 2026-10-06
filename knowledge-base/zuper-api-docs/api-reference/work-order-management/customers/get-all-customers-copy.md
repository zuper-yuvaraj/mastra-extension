---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Customer Details

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
    "/customers/{customer_uid}": {
      "get": {
        "summary": "Get Customer Details",
        "description": "",
        "operationId": "get-all-customers-copy",
        "parameters": [
          {
            "name": "customer_uid",
            "in": "path",
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
                    "value": {
                      "type": "success",
                      "data": {
                        "customer_uid": "e6b11af9-3c09-4459-9331-1384da339391",
                        "customer_first_name": "Dev",
                        "customer_last_name": "George",
                        "customer_category": {
                          "_id": "668e858be921d32f9eb33bfe",
                          "category_uid": "f73a3587-a8f2-4311-a825-2308cabcd132",
                          "category_name": "Commercial",
                          "sla_duration": {
                            "days": 2,
                            "hours": 1,
                            "minutes": 1
                          }
                        },
                        "customer_organization": {
                          "organization_uid": "c60f3cd2-c430-49dd-8c9c-7903cc38d3ca",
                          "organization_name": "Prime Care Nursing Home",
                          "organization_email": "devGeorge@primecare.com",
                          "organization_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Prime Care Nursing Home, Sakthi Nagar Main Road, Bharathidasan Nagar, Balaji Nagar, Adambakkam",
                            "country": "India",
                            "landmark": null,
                            "zip_code": "600088",
                            "first_name": null,
                            "last_name": null,
                            "phone_number": null,
                            "email": null,
                            "geo_cordinates": [
                              12.9799711,
                              80.2044245
                            ],
                            "point_coordinates": {
                              "type": "Point",
                              "coordinates": [
                                80.2044245,
                                12.9799711
                              ]
                            }
                          },
                          "organization_billing_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Prime Care Nursing Home, Sakthi Nagar Main Road, Bharathidasan Nagar, Balaji Nagar, Adambakkam",
                            "country": "India",
                            "landmark": null,
                            "zip_code": "600088",
                            "first_name": null,
                            "last_name": null,
                            "phone_number": null,
                            "email": null,
                            "geo_cordinates": [
                              12.9799711,
                              80.2044245
                            ],
                            "point_coordinates": {
                              "type": "Point",
                              "coordinates": [
                                80.2044245,
                                12.9799711
                              ]
                            }
                          },
                          "custom_fields": [],
                          "tax": {
                            "tax_exempt": false
                          },
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2024-08-28T11:51:40.817Z",
                          "updated_at": "2024-09-12T10:05:36.734Z"
                        },
                        "customer_company_name": "",
                        "customer_email": "devGeorge@primecare.com",
                        "no_of_jobs": 1,
                        "customer_contact_no": {
                          "mobile": "",
                          "home": "+91 9600086457",
                          "work": ""
                        },
                        "customer_description": "",
                        "customer_tags": [],
                        "customer_all_addresses": [
                          {
                            "first_name": null,
                            "last_name": null,
                            "phone_number": null,
                            "email": null,
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur",
                            "country": "India",
                            "landmark": null,
                            "zip_code": "600119",
                            "geo_cordinates": [
                              12.9007222,
                              80.2344109
                            ],
                            "is_primary": false,
                            "_id": "66cf112377d8a3001c9bd104"
                          }
                        ],
                        "customer_address": {
                          "city": "Chennai",
                          "state": "Tamil Nadu",
                          "street": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur",
                          "country": "India",
                          "landmark": null,
                          "zip_code": "600119",
                          "first_name": null,
                          "last_name": null,
                          "phone_number": null,
                          "email": null,
                          "geo_cordinates": [
                            12.9007222,
                            80.2344109
                          ],
                          "point_coordinates": {
                            "type": "Point",
                            "coordinates": [
                              80.2344109,
                              12.9007222
                            ]
                          }
                        },
                        "customer_billing_address": {
                          "city": "Chennai",
                          "state": "Tamil Nadu",
                          "street": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur",
                          "country": "India",
                          "landmark": null,
                          "zip_code": "600119",
                          "first_name": null,
                          "last_name": null,
                          "phone_number": null,
                          "email": null,
                          "geo_cordinates": [
                            12.9007222,
                            80.2344109
                          ],
                          "point_coordinates": {
                            "type": "Point",
                            "coordinates": [
                              80.2344109,
                              12.9007222
                            ]
                          }
                        },
                        "custom_fields": [],
                        "has_sla": false,
                        "customer_notifications": {
                          "email": true,
                          "sms": true,
                          "call": true
                        },
                        "accounts": {
                          "tax": {
                            "tax_exempt": false
                          },
                          "ltv": 0,
                          "receivables": 440,
                          "credits": 0
                        },
                        "visible_to_all": false,
                        "is_active": true,
                        "auto_charge": {
                          "is_enabled": false
                        },
                        "is_portal_enabled": false,
                        "portal_permissions": {
                          "can_access_organization_records": false,
                          "can_create_property": false,
                          "can_create_asset": false
                        },
                        "created_by": {
                          "user_uid": "4088adc6-c6ed-45a2-845d-451f28938960",
                          "first_name": "John",
                          "last_name": "S",
                          "email": "john@zuper.co",
                          "external_login_id": null,
                          "home_phone_number": "9600086457",
                          "designation": "Admin",
                          "emp_code": "001",
                          "prefix": null,
                          "work_phone_number": "9600086457",
                          "mobile_phone_number": null,
                          "profile_picture": "",
                          "hourly_labor_charge": null,
                          "is_active": true,
                          "is_deleted": false,
                          "created_at": "2024-03-22T07:41:38.000Z",
                          "updated_at": "2024-03-22T07:41:38.000Z"
                        },
                        "account_manager": null,
                        "has_card_on_file": false,
                        "tax": {
                          "tax_exempt": false
                        },
                        "favorited_users": [],
                        "attachments": [],
                        "source": {
                          "source_uid": "53c9f94f-d7d2-4902-b4e6-e14412f2b6fe",
                          "source_name": "Website"
                        },
                        "created_at": "2024-08-28T11:59:31.317Z"
                      }
                    }
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
                        "customer_uid": {
                          "type": "string",
                          "example": "e6b11af9-3c09-4459-9331-1384da339391"
                        },
                        "customer_first_name": {
                          "type": "string",
                          "example": "Dev"
                        },
                        "customer_last_name": {
                          "type": "string",
                          "example": "George"
                        },
                        "customer_category": {
                          "type": "object",
                          "properties": {
                            "_id": {
                              "type": "string",
                              "example": "668e858be921d32f9eb33bfe"
                            },
                            "category_uid": {
                              "type": "string",
                              "example": "f73a3587-a8f2-4311-a825-2308cabcd132"
                            },
                            "category_name": {
                              "type": "string",
                              "example": "Commercial"
                            },
                            "sla_duration": {
                              "type": "object",
                              "properties": {
                                "days": {
                                  "type": "integer",
                                  "example": 2,
                                  "default": 0
                                },
                                "hours": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "minutes": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "customer_organization": {
                          "type": "object",
                          "properties": {
                            "organization_uid": {
                              "type": "string",
                              "example": "c60f3cd2-c430-49dd-8c9c-7903cc38d3ca"
                            },
                            "organization_name": {
                              "type": "string",
                              "example": "Prime Care Nursing Home"
                            },
                            "organization_email": {
                              "type": "string",
                              "example": "devGeorge@primecare.com"
                            },
                            "organization_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Chennai"
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Prime Care Nursing Home, Sakthi Nagar Main Road, Bharathidasan Nagar, Balaji Nagar, Adambakkam"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "landmark": {},
                                "zip_code": {
                                  "type": "string",
                                  "example": "600088"
                                },
                                "first_name": {},
                                "last_name": {},
                                "phone_number": {},
                                "email": {},
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9799711,
                                    "default": 0
                                  }
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 80.2044245,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "organization_billing_address": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "Chennai"
                                },
                                "state": {
                                  "type": "string",
                                  "example": "Tamil Nadu"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Prime Care Nursing Home, Sakthi Nagar Main Road, Bharathidasan Nagar, Balaji Nagar, Adambakkam"
                                },
                                "country": {
                                  "type": "string",
                                  "example": "India"
                                },
                                "landmark": {},
                                "zip_code": {
                                  "type": "string",
                                  "example": "600088"
                                },
                                "first_name": {},
                                "last_name": {},
                                "phone_number": {},
                                "email": {},
                                "geo_cordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.9799711,
                                    "default": 0
                                  }
                                },
                                "point_coordinates": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "Point"
                                    },
                                    "coordinates": {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "example": 80.2044245,
                                        "default": 0
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "custom_fields": {
                              "type": "array"
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_exempt": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
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
                              "example": "2024-08-28T11:51:40.817Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-09-12T10:05:36.734Z"
                            }
                          }
                        },
                        "customer_company_name": {
                          "type": "string",
                          "example": ""
                        },
                        "customer_email": {
                          "type": "string",
                          "example": "devGeorge@primecare.com"
                        },
                        "no_of_jobs": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "customer_contact_no": {
                          "type": "object",
                          "properties": {
                            "mobile": {
                              "type": "string",
                              "example": ""
                            },
                            "home": {
                              "type": "string",
                              "example": "+91 9600086457"
                            },
                            "work": {
                              "type": "string",
                              "example": ""
                            }
                          }
                        },
                        "customer_description": {
                          "type": "string",
                          "example": ""
                        },
                        "customer_tags": {
                          "type": "array"
                        },
                        "customer_all_addresses": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "first_name": {},
                              "last_name": {},
                              "phone_number": {},
                              "email": {},
                              "city": {
                                "type": "string",
                                "example": "Chennai"
                              },
                              "state": {
                                "type": "string",
                                "example": "Tamil Nadu"
                              },
                              "street": {
                                "type": "string",
                                "example": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur"
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "landmark": {},
                              "zip_code": {
                                "type": "string",
                                "example": "600119"
                              },
                              "geo_cordinates": {
                                "type": "array",
                                "items": {
                                  "type": "number",
                                  "example": 12.9007222,
                                  "default": 0
                                }
                              },
                              "is_primary": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "66cf112377d8a3001c9bd104"
                              }
                            }
                          }
                        },
                        "customer_address": {
                          "type": "object",
                          "properties": {
                            "city": {
                              "type": "string",
                              "example": "Chennai"
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu"
                            },
                            "street": {
                              "type": "string",
                              "example": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "landmark": {},
                            "zip_code": {
                              "type": "string",
                              "example": "600119"
                            },
                            "first_name": {},
                            "last_name": {},
                            "phone_number": {},
                            "email": {},
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9007222,
                                "default": 0
                              }
                            },
                            "point_coordinates": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "Point"
                                },
                                "coordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 80.2344109,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "customer_billing_address": {
                          "type": "object",
                          "properties": {
                            "city": {
                              "type": "string",
                              "example": "Chennai"
                            },
                            "state": {
                              "type": "string",
                              "example": "Tamil Nadu"
                            },
                            "street": {
                              "type": "string",
                              "example": "Ramaniyam Pushkar Phase 1 Apartment, Kalaignar Karunanidhi Salai, Sholinganallur"
                            },
                            "country": {
                              "type": "string",
                              "example": "India"
                            },
                            "landmark": {},
                            "zip_code": {
                              "type": "string",
                              "example": "600119"
                            },
                            "first_name": {},
                            "last_name": {},
                            "phone_number": {},
                            "email": {},
                            "geo_cordinates": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.9007222,
                                "default": 0
                              }
                            },
                            "point_coordinates": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "Point"
                                },
                                "coordinates": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 80.2344109,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "custom_fields": {
                          "type": "array"
                        },
                        "has_sla": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "customer_notifications": {
                          "type": "object",
                          "properties": {
                            "email": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "sms": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "call": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            }
                          }
                        },
                        "accounts": {
                          "type": "object",
                          "properties": {
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_exempt": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
                              }
                            },
                            "ltv": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "receivables": {
                              "type": "integer",
                              "example": 440,
                              "default": 0
                            },
                            "credits": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            }
                          }
                        },
                        "visible_to_all": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "auto_charge": {
                          "type": "object",
                          "properties": {
                            "is_enabled": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "is_portal_enabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "portal_permissions": {
                          "type": "object",
                          "properties": {
                            "can_access_organization_records": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "can_create_property": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "can_create_asset": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "4088adc6-c6ed-45a2-845d-451f28938960"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "John"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "S"
                            },
                            "email": {
                              "type": "string",
                              "example": "john@zuper.co"
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
                              "example": "2024-03-22T07:41:38.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-03-22T07:41:38.000Z"
                            }
                          }
                        },
                        "account_manager": {},
                        "has_card_on_file": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "tax": {
                          "type": "object",
                          "properties": {
                            "tax_exempt": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "favorited_users": {
                          "type": "array"
                        },
                        "attachments": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-08-28T11:59:31.317Z"
                        },
                        "source": {
                          "type": "object",
                          "description": "Lead Source",
                          "properties": {
                            "source_uid": {
                              "type": "string"
                            },
                            "source_name": {
                              "type": "string"
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
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": ""
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {},
              "examples": {
                "Request Example": {
                  "value": {
                    "type": "success",
                    "data": {
                      "customer_uid": "e281888a-6475-4413-91e0-124bea908597",
                      "customer_first_name": "test",
                      "customer_last_name": "",
                      "customer_category": null,
                      "customer_organization": {
                        "organization_uid": "74590dc0-371d-4a19-b1ed-17d0a5c556ea",
                        "organization_name": "Test",
                        "organization_logo": null,
                        "organization_description": null,
                        "organization_email": null,
                        "organization_address": {
                          "city": "Chennai ",
                          "state": "Tamil Nadu ",
                          "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                          "country": "India",
                          "landmark": "",
                          "zip_code": "600027",
                          "geo_cordinates": [
                            12.9811068,
                            80.159623
                          ]
                        },
                        "organization_billing_address": {
                          "city": "Chennai ",
                          "state": "Tamil Nadu ",
                          "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                          "country": "India",
                          "landmark": "",
                          "zip_code": "600027",
                          "geo_cordinates": [
                            12.9811068,
                            80.159623
                          ]
                        },
                        "custom_fields": [],
                        "tax": {
                          "tax_exempt": false
                        },
                        "is_active": true,
                        "is_deleted": false,
                        "created_at": "2024-06-14T07:55:11.896Z",
                        "updated_at": "2024-06-14T07:55:11.898Z"
                      },
                      "customer_company_name": "",
                      "customer_email": "test@fd.co",
                      "no_of_jobs": 5,
                      "customer_description": "",
                      "customer_tags": [],
                      "customer_all_addresses": [
                        {
                          "email": "test@fd.co",
                          "city": "Chennai ",
                          "state": "Tamil Nadu ",
                          "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                          "country": "India",
                          "landmark": "",
                          "zip_code": "600027",
                          "geo_cordinates": [
                            12.9811068,
                            80.159623
                          ],
                          "is_primary": true,
                          "_id": "666bf78cb2b63722da7cd13d"
                        }
                      ],
                      "customer_address": {
                        "city": "Chennai ",
                        "state": "Tamil Nadu ",
                        "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                        "country": "India",
                        "landmark": "",
                        "zip_code": "600027",
                        "geo_cordinates": [
                          12.9811068,
                          80.159623
                        ],
                        "email": "test@fd.co",
                        "point_coordinates": {
                          "type": "Point",
                          "coordinates": [
                            80.159623,
                            12.9811068
                          ]
                        }
                      },
                      "customer_billing_address": {
                        "city": "Chennai ",
                        "state": "Tamil Nadu ",
                        "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                        "country": "India",
                        "landmark": "",
                        "zip_code": "600027",
                        "geo_cordinates": [
                          12.9811068,
                          80.159623
                        ],
                        "email": "test@fd.co",
                        "point_coordinates": {
                          "type": "Point",
                          "coordinates": [
                            80.159623,
                            12.9811068
                          ]
                        }
                      },
                      "custom_fields": [],
                      "has_sla": false,
                      "customer_notifications": {
                        "email": true,
                        "sms": true,
                        "call": true
                      },
                      "accounts": {
                        "tax": {
                          "tax_exempt": false
                        },
                        "ltv": 0,
                        "receivables": 0,
                        "credits": 0
                      },
                      "visible_to_all": true,
                      "is_active": true,
                      "auto_charge": {
                        "is_enabled": false
                      },
                      "is_portal_enabled": false,
                      "portal_permissions": {
                        "can_access_organization_records": false,
                        "can_create_property": false,
                        "can_create_asset": false
                      },
                      "created_by": {
                        "user_uid": "b9c91ee7-850f-47b7-b2cd-a6b78f4254d3",
                        "first_name": "Test",
                        "last_name": "R",
                        "email": "test@zuper.co",
                        "external_login_id": null,
                        "home_phone_number": "1235368875",
                        "designation": "Admin",
                        "emp_code": "001",
                        "prefix": null,
                        "work_phone_number": "1256977820",
                        "mobile_phone_number": null,
                        "profile_picture": "",
                        "hourly_labor_charge": null,
                        "is_active": true,
                        "is_deleted": false,
                        "created_at": "2024-06-14T07:34:28.000Z",
                        "updated_at": "2024-06-14T07:34:28.000Z"
                      },
                      "account_manager": null,
                      "has_card_on_file": false,
                      "tax": {
                        "tax_exempt": false,
                        "tax_exempt_remarks": null,
                        "tax_exempt_number": null,
                        "entity_use_code": null
                      },
                      "favorited_users": [],
                      "attachments": [],
                      "created_at": "2024-06-14T07:55:56.721Z"
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
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```