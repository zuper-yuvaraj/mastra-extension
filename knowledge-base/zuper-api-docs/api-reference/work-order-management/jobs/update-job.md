---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Job

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
    "/jobs": {
      "put": {
        "summary": "Update a Job",
        "description": "",
        "operationId": "update-job",
        "parameters": [
          {
            "name": "update_all_jobs",
            "in": "query",
            "description": "We can send this param as true, to update the provided to all the future recurring jobs associated to the job.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "clear_schedule",
            "in": "query",
            "description": "We can send this param as true to clear the scheduled start and end date of the job.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "remove_parent_job",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "is_offline",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "job": {
                    "type": "object",
                    "required": [
                      "job_uid"
                    ],
                    "properties": {
                      "job_uid": {
                        "type": "string",
                        "description": "Job UID"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "job_title": {
                        "type": "string"
                      },
                      "job_description": {
                        "type": "string"
                      },
                      "job_category": {
                        "type": "string"
                      },
                      "job_priority": {
                        "type": "string",
                        "enum": [
                          "LOW",
                          "MEDIUM",
                          "HIGH",
                          "URGENT"
                        ]
                      },
                      "job_type": {
                        "type": "string",
                        "enum": [
                          "NEW",
                          "REVISIT"
                        ]
                      },
                      "job_tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "scheduled_start_time": {
                        "type": "string"
                      },
                      "scheduled_end_time": {
                        "type": "string"
                      },
                      "due_date": {
                        "type": "string"
                      },
                      "work_mins_required": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string"
                      },
                      "customer": {
                        "type": "object",
                        "required": [
                          "customer_first_name"
                        ],
                        "properties": {
                          "customer_first_name": {
                            "type": "string"
                          },
                          "customer_last_name": {
                            "type": "string"
                          },
                          "customer_category": {
                            "type": "string"
                          },
                          "customer_organization": {
                            "type": "string"
                          },
                          "account_manager": {
                            "type": "string"
                          },
                          "customer_contact_no": {
                            "type": "string"
                          },
                          "customer_email": {
                            "type": "string"
                          },
                          "customer_tags": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "properties": {
                                "label": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                },
                                "ref_uid": {
                                  "type": "string"
                                },
                                "module_name": {
                                  "type": "string",
                                  "enum": [
                                    "JOB",
                                    "CUSTOMER",
                                    "EMPLOYEE",
                                    "ESTIMATE",
                                    "INVOICE",
                                    "PRODUCT",
                                    "PURCHASE_ORDER",
                                    "SERVICE_CONTRACT",
                                    "ASSET",
                                    "PROPERTY",
                                    "ORGANIZATION",
                                    "TEAM",
                                    "REQUEST",
                                    "PROJECT"
                                  ]
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "read_only": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "group_name": {
                                  "type": "string"
                                },
                                "group_uid": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "label",
                                "value",
                                "type"
                              ],
                              "type": "object"
                            }
                          },
                          "customer_company_name": {
                            "type": "string"
                          }
                        }
                      },
                      "customer_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            },
                            "description": "Spelled geo_cordinates (missing the second \"o\") — this is the actual field name accepted by the API, not a typo in this documentation. A correctly-spelled geo_coordinates is silently ignored."
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "customer_billing_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            },
                            "description": "Spelled geo_cordinates (missing the second \"o\") — this is the actual field name accepted by the API, not a typo in this documentation. A correctly-spelled geo_coordinates is silently ignored."
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "label": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            },
                            "ref_uid": {
                              "type": "string"
                            },
                            "module_name": {
                              "type": "string",
                              "enum": [
                                "JOB",
                                "CUSTOMER",
                                "EMPLOYEE",
                                "ESTIMATE",
                                "INVOICE",
                                "PRODUCT",
                                "PURCHASE_ORDER",
                                "SERVICE_CONTRACT",
                                "ASSET",
                                "PROPERTY",
                                "ORGANIZATION",
                                "TEAM",
                                "REQUEST",
                                "PROJECT"
                              ]
                            },
                            "hide_to_fe": {
                              "type": "boolean",
                              "default": false
                            },
                            "hide_field": {
                              "type": "boolean",
                              "default": false
                            },
                            "read_only": {
                              "type": "boolean",
                              "default": false
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "label",
                            "value",
                            "type"
                          ],
                          "type": "object"
                        }
                      },
                      "products": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "line_item_type": {
                              "type": "string",
                              "default": "ITEM",
                              "enum": [
                                "ITEM",
                                "HEADER"
                              ]
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "product_category": {
                              "type": "string"
                            },
                            "product_no": {
                              "type": "string"
                            },
                            "product_image": {
                              "type": "string"
                            },
                            "product_name": {
                              "type": "string"
                            },
                            "product_description": {
                              "type": "string"
                            },
                            "brand": {
                              "type": "string"
                            },
                            "specification": {
                              "type": "string"
                            },
                            "uom": {
                              "type": "string"
                            },
                            "product_manual_link": {
                              "type": "string"
                            },
                            "quantity": {
                              "type": "string"
                            },
                            "currency": {
                              "type": "string"
                            },
                            "price": {
                              "type": "string"
                            },
                            "product_type": {
                              "type": "string"
                            },
                            "meta_data": {
                              "type": "string"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "location_uid": {
                              "type": "string"
                            },
                            "location_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "discount": {
                              "type": "string"
                            },
                            "purchase_price": {
                              "type": "string"
                            },
                            "discount_type": {
                              "type": "string"
                            },
                            "total": {
                              "type": "string"
                            },
                            "section_name": {
                              "type": "string"
                            },
                            "section_uid": {
                              "type": "string"
                            },
                            "section_type": {
                              "type": "string",
                              "default": "EXPANDED",
                              "enum": [
                                "COLLAPSED",
                                "EXPANDED",
                                "HIDDEN"
                              ]
                            },
                            "show_child_prices": {
                              "type": "boolean",
                              "default": false
                            },
                            "show_section_total": {
                              "type": "boolean",
                              "default": false
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_name": {
                                  "type": "string"
                                },
                                "tax_rate": {
                                  "type": "string"
                                },
                                "tax_amount": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "type": "object"
                        }
                      },
                      "hide_to_fe": {
                        "type": "boolean"
                      },
                      "customer_uid": {
                        "type": "string"
                      },
                      "assets": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "asset": {
                              "type": "string",
                              "description": "asset uid"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "ppm": {
                        "type": "string"
                      },
                      "service_contract": {
                        "type": "string"
                      },
                      "route": {
                        "type": "string"
                      },
                      "property": {
                        "type": "string"
                      },
                      "request": {
                        "type": "string"
                      },
                      "order_id": {
                        "type": "string"
                      },
                      "skills": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "user.skillsets.skillset_uid": {
                              "type": "string"
                            },
                            "user.skillsets.start_date": {
                              "type": "string",
                              "format": "date"
                            },
                            "user.skillsets.end_date": {
                              "type": "string",
                              "format": "date"
                            },
                            "user.skillsets.skill_level": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "invoice": {
                        "type": "string"
                      },
                      "details_url": {
                        "type": "string"
                      },
                      "feedback_url": {
                        "type": "string"
                      },
                      "bu_uid": {
                        "type": "string",
                        "description": "Trade Type UID"
                      },
                      "source_uid": {
                        "type": "string",
                        "description": "Lead Source"
                      }
                    }
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
                    "value": "{\n\ttype:\"error\",\n  message:\"Job Details updated successfully\"\n}"
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
                    "value": "{\n      message: \"Either customer or organization data is required\",\n      title: \"Customer or Organization data is required\",\n      type: \"error\"\n}"
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