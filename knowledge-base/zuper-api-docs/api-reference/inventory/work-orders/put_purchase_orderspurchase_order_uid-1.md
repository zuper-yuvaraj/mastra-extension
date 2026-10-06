---
updatedAt: 2026-07-29T12:46:23.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Work Order

Operates on Service Orders, shown in the Zuper client app as "Work Order" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. All fields are optional (partial update semantics), but the full `purchase_order` wrapper object is still expected. Only allowed while the order is in an editable status; some statuses restrict edits to `line_items` only.

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
    "/service_orders/{purchase_order_uid}": {
      "put": {
        "description": "Operates on Service Orders, shown in the Zuper client app as \"Work Order\" (in every industry). Work Orders share the exact same underlying schema and endpoints as Purchase Orders / Material Orders; they're distinguished only by the `purchase_order_type` field (`SERVICE_ORDER` here) and the `/service_orders` route prefix. All fields are optional (partial update semantics), but the full `purchase_order` wrapper object is still expected. Only allowed while the order is in an editable status; some statuses restrict edits to `line_items` only.",
        "operationId": "put_purchase_orders{purchase_order_uid}-1",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "title",
                    "message"
                  ]
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"title\": \"Work Order updated successfully\", \"message\": \"Work Order updated successfully\"}"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "purchase_order_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "purchase_order": {
                    "type": "object",
                    "properties": {
                      "purchase_order_title": {
                        "type": "string",
                        "description": "Required, min length 1."
                      },
                      "material_request": {
                        "type": "string",
                        "description": "Material Request UID, nullable. Must reference an existing, non-deleted Material Request."
                      },
                      "job": {
                        "type": "string",
                        "description": "Job UID, nullable."
                      },
                      "job_measurement_uids": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Only validated when `job` is set."
                      },
                      "job_attachments_uids": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Only validated when `job` is set."
                      },
                      "estimate": {
                        "type": "string",
                        "description": "Quote/Estimate UID, nullable. Rejected if the estimate has a pending option selection."
                      },
                      "asset": {
                        "type": "string",
                        "description": "Asset UID, nullable."
                      },
                      "project": {
                        "type": "string",
                        "description": "Project UID, nullable."
                      },
                      "parent_po": {
                        "type": "string",
                        "description": "UID of another order in this same module (purchase_order_uid), nullable. Rejected (409) if the parent is at or after SENT_TO_VENDOR with an integrated supplier."
                      },
                      "vendor": {
                        "type": "string",
                        "description": "Vendor UID. Must be an active vendor."
                      },
                      "payment_term": {
                        "type": "string",
                        "description": "Payment term UID."
                      },
                      "template": {
                        "type": "string",
                        "description": "Template UID, nullable."
                      },
                      "ship_to": {
                        "type": "object",
                        "properties": {
                          "street": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "float"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "product_location": {
                            "type": "string",
                            "description": "Product location UID"
                          }
                        }
                      },
                      "billing_address": {
                        "type": "object",
                        "properties": {
                          "street": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "float"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "landmark": {
                            "type": "string"
                          }
                        }
                      },
                      "due_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "purchase_order_date": {
                        "type": "string",
                        "format": "date",
                        "nullable": true
                      },
                      "reference_number": {
                        "type": "string"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "line_items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "line_item_type": {
                              "type": "string",
                              "enum": [
                                "ITEM",
                                "HEADER",
                                "PARTS",
                                "GROUP"
                              ],
                              "default": "ITEM"
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "product_id": {
                              "type": "string"
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
                            "image": {
                              "type": "string"
                            },
                            "name": {
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
                            "description": {
                              "type": "string"
                            },
                            "quantity": {
                              "type": "string"
                            },
                            "unit_price": {
                              "type": "string"
                            },
                            "product_type": {
                              "type": "string",
                              "enum": [
                                "PRODUCT",
                                "SERVICE",
                                "PARTS",
                                "BUNDLE",
                                "LABOR"
                              ]
                            },
                            "purchase_price": {
                              "type": "string"
                            },
                            "serial_nos": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "vendor_sku": {
                              "type": "string"
                            },
                            "discount": {
                              "type": "string"
                            },
                            "discount_type": {
                              "type": "string",
                              "enum": [
                                "FIXED",
                                "PERCENTAGE"
                              ]
                            }
                          }
                        },
                        "description": "Non-empty array required."
                      },
                      "delivery_method": {
                        "type": "string",
                        "enum": [
                          "JOB_ADDRESS",
                          "WAREHOUSE",
                          "PICKUP"
                        ],
                        "description": "Required when creating a Purchase Order; not required for a Work Order (Service Order)."
                      },
                      "delivery_time": {
                        "type": "string",
                        "enum": [
                          "ANYTIME",
                          "MORNING",
                          "AFTERNOON",
                          "SPECIAL_REQUEST"
                        ],
                        "default": "ANYTIME"
                      },
                      "purchase_order_type": {
                        "type": "string",
                        "enum": [
                          "PURCHASE_ORDER",
                          "SERVICE_ORDER"
                        ],
                        "description": "Optional — forced server-side to match the route you call (`/purchase_orders` → PURCHASE_ORDER, `/service_orders` → SERVICE_ORDER). Sending a conflicting value is rejected with 400."
                      },
                      "prefix": {
                        "type": "string",
                        "description": "Supports `{{...}}` template tokens for auto-numbering."
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "file_name": {
                              "type": "string"
                            },
                            "url": {
                              "type": "string"
                            },
                            "file_size": {
                              "type": "integer"
                            },
                            "visible_to_customer": {
                              "type": "boolean"
                            },
                            "created_by": {
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
          }
        },
        "summary": "Update Work Order"
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