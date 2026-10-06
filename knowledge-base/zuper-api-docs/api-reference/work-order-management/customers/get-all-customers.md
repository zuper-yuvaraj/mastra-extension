---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Customers

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
    "/customers": {
      "get": {
        "summary": "Get all Customers",
        "description": "",
        "operationId": "get-all-customers",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Page number",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "count",
            "in": "query",
            "description": "Maximum allowed 1000",
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
                "customer_first_name",
                "customer_last_name",
                "no_of_jobs",
                "created_at"
              ],
              "default": "created_at"
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "description": "Used for search",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.city",
            "in": "query",
            "description": "Filter based on city",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.zipcode",
            "in": "query",
            "description": "Filter based on Zipcode",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.category",
            "in": "query",
            "description": "Filter based on customer category",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_tags",
            "in": "query",
            "description": "Filter based on customer tags",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_date",
            "in": "query",
            "description": "Filter based on created date (greater than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_date",
            "in": "query",
            "description": "Filter based on created date (lesser than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.from_no_of_jobs",
            "in": "query",
            "description": "Filter based on number of jobs (greater than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.to_no_of_jobs",
            "in": "query",
            "description": "Filter based on number of jobs (lesser than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "description": "Filter based on active status",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.account_manager",
            "in": "query",
            "description": "Filter based on account manager",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "description": "Filter based on created user",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at",
            "in": "query",
            "description": "Filter based on updated date",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_from",
            "in": "query",
            "description": "Filter based on updated date (greater than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.updated_at_to",
            "in": "query",
            "description": "Filter based on updated date (lesser than or equal to)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.custom_field",
            "in": "query",
            "description": "Filter based on custom fields",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.ltv_from",
            "in": "query",
            "description": "Filter based on ltv from",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.ltv_to",
            "in": "query",
            "description": "Filter based on ltv to",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.credit_from",
            "in": "query",
            "description": "Filter based on credit from",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.credit_to",
            "in": "query",
            "description": "Filter based on credit to",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.receivable_from",
            "in": "query",
            "description": "Filter based on receivable from",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.receivable_to",
            "in": "query",
            "description": "Filter based on receivable to",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_uid",
            "in": "query",
            "description": "Filter based on customer uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_email",
            "in": "query",
            "description": "Filter based on customer email",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.customer_organization",
            "in": "query",
            "description": "Filter based on customer organization",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.has_org",
            "in": "query",
            "description": "Filter based on, if or not customer has organization",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.has_card_on_file",
            "in": "query",
            "description": "Filter based on, if or not customer has card on file",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "description": "Filter based to get the deleted customers",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_portal_enabled",
            "in": "query",
            "description": "Filter based on customer portal",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.do_not_service",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
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
                    "value": {
                      "type": "success",
                      "data": [
                        {
                          "customer_uid": "e6b11af9-3c09-4459-9331-1384da339391",
                          "customer_first_name": "Dev",
                          "customer_last_name": "George",
                          "customer_category": {
                            "category_uid": "f73a3587-a8f2-4311-a825-2308cabcd132",
                            "category_name": "Commercial"
                          },
                          "customer_organization": {
                            "organization_uid": "c60f3cd2-c430-49dd-8c9c-7903cc38d3ca",
                            "organization_name": "Prime Care Nursing Home",
                            "organization_email": "support@primecare.com",
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
                            "is_active": true,
                            "is_deleted": false
                          },
                          "customer_company_name": "",
                          "customer_email": "dev.george@primecare.com",
                          "no_of_jobs": 1,
                          "customer_contact_no": {
                            "mobile": "",
                            "home": "+91 9600086457",
                            "work": ""
                          },
                          "customer_tags": [],
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
                          "accounts": {
                            "ltv": 0,
                            "receivables": 440,
                            "credits": 0
                          },
                          "is_active": true,
                          "is_portal_enabled": false,
                          "account_manager": null,
                          "has_card_on_file": false,
                          "tax": {
                            "tax_exempt": false
                          },
                          "created_at": "2024-08-28T11:59:31.317Z",
                          "source": {
                            "source_uid": "53c9f94f-d7d2-4902-b4e6-e14412f2b6fe",
                            "source_name": "Website"
                          },
                          "id": "undefined"
                        },
                        {
                          "customer_uid": "437f7462-d3a2-4268-ae7f-04012dea6394",
                          "customer_first_name": "Kwahi",
                          "customer_last_name": "George",
                          "customer_category": null,
                          "customer_organization": {
                            "organization_uid": "c60f3cd2-c430-49dd-8c9c-7903cc38d3ca",
                            "organization_name": "Prime Care Nursing Home",
                            "organization_email": "support@primecare.com",
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
                            "is_active": true,
                            "is_deleted": false
                          },
                          "customer_company_name": "",
                          "customer_email": "kwahi.george@primecare.com",
                          "no_of_jobs": 0,
                          "customer_contact_no": {
                            "mobile": "",
                            "home": "",
                            "work": ""
                          },
                          "customer_tags": [],
                          "customer_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Adambakkam",
                            "country": "India",
                            "landmark": null,
                            "zip_code": "600088",
                            "first_name": null,
                            "last_name": null,
                            "phone_number": null,
                            "email": null,
                            "geo_cordinates": [
                              12.9880288,
                              80.20471330000001
                            ],
                            "point_coordinates": {
                              "type": "Point",
                              "coordinates": [
                                80.20471330000001,
                                12.9880288
                              ]
                            }
                          },
                          "customer_billing_address": {
                            "city": "Chennai",
                            "state": "Tamil Nadu",
                            "street": "Adambakkam",
                            "country": "India",
                            "landmark": null,
                            "zip_code": "600088",
                            "first_name": null,
                            "last_name": null,
                            "phone_number": null,
                            "email": null,
                            "geo_cordinates": [
                              12.9880288,
                              80.20471330000001
                            ],
                            "point_coordinates": {
                              "type": "Point",
                              "coordinates": [
                                80.20471330000001,
                                12.9880288
                              ]
                            }
                          },
                          "custom_fields": [],
                          "has_sla": false,
                          "accounts": {
                            "ltv": 0,
                            "receivables": 0,
                            "credits": 0
                          },
                          "is_active": true,
                          "is_portal_enabled": false,
                          "account_manager": null,
                          "has_card_on_file": false,
                          "tax": {
                            "tax_exempt": false
                          },
                          "created_at": "2024-09-18T08:54:01.211Z",
                          "source": {
                            "source_uid": "53c9f94f-d7d2-4902-b4e6-e14412f2b6fe",
                            "source_name": "Website"
                          },
                          "id": "undefined"
                        }
                      ],
                      "total_records": 2,
                      "current_page": 1,
                      "total_pages": 1
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
                      "type": "array",
                      "items": {
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
                              "category_uid": {
                                "type": "string",
                                "example": "f73a3587-a8f2-4311-a825-2308cabcd132"
                              },
                              "category_name": {
                                "type": "string",
                                "example": "Commercial"
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
                                "example": "support@primecare.com"
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
                              "is_active": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "customer_company_name": {
                            "type": "string",
                            "example": ""
                          },
                          "customer_email": {
                            "type": "string",
                            "example": "dev.george@primecare.com"
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
                          "customer_tags": {
                            "type": "array"
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
                          "accounts": {
                            "type": "object",
                            "properties": {
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
                          "is_active": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_portal_enabled": {
                            "type": "boolean",
                            "example": false,
                            "default": true
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
                          "created_at": {
                            "type": "string",
                            "example": "2024-08-28T11:59:31.317Z"
                          },
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          },
                          "source": {
                            "type": "object",
                            "properties": {
                              "source_uid": {
                                "type": "string"
                              },
                              "source_name": {
                                "type": "string"
                              }
                            },
                            "description": "Lead Source"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Category UIDs\",\n    \"message\":  \"The Category UIDs sent is not valid\"\n}"
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
                      "example": "Invalid Category UIDs"
                    },
                    "message": {
                      "type": "string",
                      "example": "The Category UIDs sent is not valid"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "text/plain": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Error in getting Customers\",\n    \"message\":  \"<some error message>\"\n}\n"
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
                      "example": "Error in getting Customers"
                    },
                    "message": {
                      "type": "string",
                      "example": "<some error message>"
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