---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update a Proposal

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
    "/estimate/{estimate_uid}": {
      "put": {
        "summary": "Update a Proposal",
        "description": "",
        "operationId": "update-a-proposal",
        "parameters": [
          {
            "name": "estimate_uid",
            "in": "path",
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
                  "estimate": {
                    "properties": {
                      "proposal_title": {
                        "type": "string"
                      },
                      "proposal_options": {
                        "type": "array",
                        "description": "Proposal Options",
                        "items": {
                          "properties": {
                            "option_name": {
                              "type": "string",
                              "description": "Option Name"
                            },
                            "option_description": {
                              "type": "string",
                              "description": "Description"
                            },
                            "option_image": {
                              "type": "string",
                              "description": "Image URL"
                            },
                            "discount": {
                              "type": "object",
                              "description": "Discount",
                              "properties": {
                                "discount_applicability": {
                                  "type": "string",
                                  "enum": [
                                    "TRANSACTION",
                                    "LINE_ITEM"
                                  ]
                                },
                                "discount_label": {
                                  "type": "string"
                                },
                                "percent": {
                                  "type": "integer",
                                  "format": "int64"
                                },
                                "type": {
                                  "type": "string",
                                  "enum": [
                                    "FIXED",
                                    "PERCENTAGE"
                                  ]
                                },
                                "value": {
                                  "type": "string"
                                },
                                "discount_fee_uid": {
                                  "type": "string"
                                }
                              }
                            },
                            "line_items": {
                              "type": "array",
                              "description": "Line Items",
                              "items": {
                                "properties": {
                                  "discount_type": {
                                    "type": "string",
                                    "description": "Discount type"
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "description": "Product id"
                                  },
                                  "product_uid": {
                                    "type": "string",
                                    "description": "Product uid"
                                  },
                                  "name": {
                                    "type": "string",
                                    "description": "Line item name"
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "description": "Line item quantity",
                                    "format": "int32"
                                  },
                                  "available_quantity": {
                                    "type": "integer",
                                    "description": "Line item available quantity",
                                    "format": "int32"
                                  },
                                  "unit_price": {
                                    "type": "integer",
                                    "description": "Line item unit price",
                                    "format": "int32"
                                  },
                                  "total": {
                                    "type": "integer",
                                    "description": "total amount",
                                    "format": "int32"
                                  },
                                  "description": {
                                    "type": "string",
                                    "description": "Line item description"
                                  },
                                  "discount": {
                                    "type": "integer",
                                    "description": "Discount amount",
                                    "format": "int32"
                                  },
                                  "image": {
                                    "type": "string",
                                    "description": "product image"
                                  },
                                  "brand": {
                                    "type": "string",
                                    "description": "Product brand name"
                                  },
                                  "specification": {
                                    "type": "string",
                                    "description": "product specification"
                                  },
                                  "uom": {
                                    "type": "string",
                                    "description": "uom"
                                  },
                                  "serial_nos": {
                                    "type": "array",
                                    "description": "serial nos",
                                    "default": [],
                                    "items": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  },
                                  "has_custom_tax": {
                                    "type": "boolean",
                                    "description": "Custom tax flag"
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
                                        "type": "string",
                                        "description": "Tax name"
                                      },
                                      "tax_rate": {
                                        "type": "integer",
                                        "description": "Tax rate",
                                        "format": "int32"
                                      },
                                      "tax_amount": {
                                        "type": "integer",
                                        "description": "Tax amount",
                                        "format": "int32"
                                      }
                                    }
                                  }
                                },
                                "type": "object"
                              }
                            },
                            "addons": {
                              "type": "array",
                              "items": {
                                "properties": {
                                  "line_item_uid": {
                                    "type": "string"
                                  },
                                  "location_uid": {
                                    "type": "string"
                                  },
                                  "product_uid": {
                                    "type": "string"
                                  },
                                  "product_id": {
                                    "type": "string"
                                  },
                                  "group_uid": {
                                    "type": "string"
                                  },
                                  "group_name": {
                                    "type": "string"
                                  },
                                  "location_name": {
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
                                  "description": {
                                    "type": "string"
                                  },
                                  "uom": {
                                    "type": "string"
                                  },
                                  "quantity": {
                                    "type": "string"
                                  },
                                  "unit_price": {
                                    "type": "string"
                                  },
                                  "discount": {
                                    "type": "string"
                                  },
                                  "purchase_price": {
                                    "type": "string"
                                  },
                                  "serial_nos": {
                                    "type": "array",
                                    "default": [],
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "total": {
                                    "type": "string"
                                  },
                                  "enable_customer_selection_for_option": {
                                    "type": "boolean"
                                  }
                                },
                                "type": "object"
                              }
                            },
                            "deposit": {
                              "type": "string",
                              "description": "Deposit Amount"
                            },
                            "package": {
                              "type": "object",
                              "description": "Package",
                              "properties": {
                                "package_name": {
                                  "type": "string",
                                  "description": "Package Name"
                                },
                                "package_description": {
                                  "type": "string",
                                  "description": "Description"
                                },
                                "master_package": {
                                  "type": "string",
                                  "description": "Master Package UID"
                                }
                              }
                            }
                          },
                          "required": [
                            "option_name"
                          ],
                          "type": "object"
                        }
                      },
                      "organization": {
                        "type": "string"
                      },
                      "customer": {
                        "type": "string"
                      },
                      "property": {
                        "type": "string"
                      },
                      "job": {
                        "type": "string"
                      },
                      "project": {
                        "type": "string"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "template": {
                        "type": "string"
                      },
                      "reference_no": {
                        "type": "string"
                      },
                      "estimate_description": {
                        "type": "string"
                      },
                      "tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "deposit": {
                        "properties": {
                          "total": {
                            "type": "number",
                            "format": "float"
                          },
                          "status": {
                            "type": "string"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "sub_total": {
                        "type": "number",
                        "format": "float"
                      },
                      "pricelist": {
                        "type": "string"
                      },
                      "estimate_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "expiry_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "is_proposal": {
                        "type": "boolean"
                      },
                      "customer_service_address": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "customer_billing_address": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
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
                      "line_items": {
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
                            "line_item_uid": {
                              "type": "string"
                            },
                            "location_uid": {
                              "type": "string"
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "product_id": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "location_name": {
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
                            "description": {
                              "type": "string"
                            },
                            "uom": {
                              "type": "string"
                            },
                            "quantity": {
                              "type": "string"
                            },
                            "unit_price": {
                              "type": "string"
                            },
                            "unit_price_premarkup": {
                              "type": "string"
                            },
                            "markup": {
                              "type": "object",
                              "properties": {
                                "markup_type": {
                                  "type": "string",
                                  "enum": [
                                    "FLAT",
                                    "PERCENTAGE",
                                    "MULTIPLIER"
                                  ]
                                },
                                "markup_value": {
                                  "type": "integer",
                                  "format": "int32"
                                },
                                "markup_price": {
                                  "type": "integer",
                                  "format": "int32"
                                }
                              }
                            },
                            "discount": {
                              "type": "string"
                            },
                            "purchase_price": {
                              "type": "string"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "discount_type": {
                              "type": "string",
                              "default": "FIXED",
                              "enum": [
                                "FIXED",
                                "PERCENTAGE"
                              ]
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
                                },
                                "tax_exempt": {
                                  "type": "string"
                                },
                                "tax_exempt_remarks": {
                                  "type": "string"
                                },
                                "tax_exempt_number": {
                                  "type": "string"
                                },
                                "entity_use_code": {
                                  "type": "string"
                                },
                                "tax_customer_code": {
                                  "type": "string"
                                },
                                "tax_code": {
                                  "type": "string"
                                }
                              }
                            },
                            "associated_to": {
                              "type": "string"
                            },
                            "associated_module_uid": {
                              "type": "string"
                            },
                            "approval_status": {
                              "type": "string",
                              "enum": [
                                "PENDING",
                                "APPROVED",
                                "REJECTED"
                              ]
                            },
                            "job_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "discount": {
                        "type": "object",
                        "properties": {
                          "discount_applicability": {
                            "type": "string",
                            "enum": [
                              "TRANSACTION",
                              "LINE_ITEM"
                            ]
                          },
                          "discount_label": {
                            "type": "string"
                          },
                          "percent": {
                            "type": "integer",
                            "format": "int64"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "FIXED",
                              "PERCENTAGE"
                            ]
                          },
                          "value": {
                            "type": "string"
                          },
                          "discount_fee_uid": {
                            "type": "string"
                          }
                        }
                      },
                      "tax": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "tax_uid": {
                              "type": "string",
                              "description": "Tax uid"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "sold_by_user": {
                        "type": "string",
                        "description": "Sold By User UID"
                      },
                      "bu_uid": {
                        "type": "string"
                      },
                      "layout_template_uid": {
                        "type": "string",
                        "description": "Proposal Layout Template UID"
                      }
                    },
                    "required": [
                      "proposal_title",
                      "is_proposal"
                    ],
                    "type": "object"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "estimate": {
                      "customer": "d41e9fe0-6442-11ee-b5d5-49505c31565c",
                      "customer_billing_address": {
                        "city": "Chennai",
                        "geo_cordinates": [
                          12.9730624,
                          80.2505897
                        ],
                        "landmark": "",
                        "state": "Tamil Nadu",
                        "street": "WorkEZ Urban Square OMR - Managed Offices and Coworking Spaces, Elango Nagar, Perungudi",
                        "zip_code": "600041",
                        "first_name": "",
                        "last_name": "",
                        "email": "",
                        "phone_number": ""
                      },
                      "customer_service_address": {
                        "city": "Mumbai",
                        "geo_cordinates": [],
                        "landmark": "",
                        "state": "",
                        "street": "Phoenix Marketcity, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla",
                        "zip_code": "400070",
                        "first_name": "Hari",
                        "last_name": "V",
                        "email": "hariv+90@gmail.com",
                        "phone_number": ""
                      },
                      "custom_fields": [
                        {
                          "group_name": "Grouptotestthedependent",
                          "group_uid": "917731b0-02c7-11ef-8727-3d85d81c857a",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 2,
                          "label": "Additional scope clarification.",
                          "read_only": false,
                          "type": "MULTI_ITEM",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        }
                      ],
                      "job": "366a23b0-d9f3-11ee-9054-0be1fec3fea9",
                      "project": null,
                      "property": "81f5c870-9c2b-11ef-a9ff-dd3068964df0",
                      "line_items": [],
                      "organization": "cf1940f0-1b26-11ee-a61c-c7daced78d3d",
                      "prefix": "10000",
                      "remarks": "default remarks for quote by ak",
                      "tax": [],
                      "template": "014c1490-d84f-11e9-b7cf-118df12e5532",
                      "reference_no": "12345653311",
                      "estimate_description": "<p>test</p>",
                      "tags": [
                        "test"
                      ],
                      "deposit": {
                        "total": 0,
                        "status": "NOT_COLLECTED"
                      },
                      "discount": {
                        "discount_applicability": "TRANSACTION",
                        "discount_label": "Discount",
                        "percent": 0,
                        "type": "FIXED",
                        "value": 0
                      },
                      "fees": [],
                      "estimate_date": "2025-01-05 18:30:00",
                      "expiry_date": "2025-01-06 18:29:00",
                      "is_proposal": true,
                      "proposal_options": [
                        {
                          "option_name": "Option 3",
                          "option_description": "test",
                          "option_image": "",
                          "discount": {
                            "type": "PERCENTAGE",
                            "value": 0,
                            "percent": 0,
                            "discount_applicability": "LINE_ITEM",
                            "discount_label": "Discount"
                          },
                          "line_items": [
                            {
                              "tax": {
                                "tax_exempt": false
                              },
                              "line_item_uid": "b4c7ff9d-412f-4e90-ba2b-ecefabdf66b1",
                              "line_item_type": "ITEM",
                              "product_ref_id": {
                                "tax": {
                                  "tax_rate": null,
                                  "tax_name": "",
                                  "tax_exempt": false
                                },
                                "is_billable": true,
                                "product_uid": "7aab9620-5e89-11ee-a16d-d973f75ee849",
                                "prefix": "PT",
                                "product_id": "7878787878",
                                "product_category": {
                                  "category_name": "Civil Items",
                                  "category_uid": "effde4f0-480d-11ea-85e2-91cf2fb0b4bb"
                                },
                                "product_name": "Boat Watch",
                                "product_type": "PRODUCT",
                                "meta_data": [
                                  {
                                    "label": "QB Product ID",
                                    "value": "2286",
                                    "hide_field": false,
                                    "hide_to_fe": false,
                                    "_id": "66b34b54585a33f2849e25e0"
                                  },
                                  {
                                    "label": "QBO Class",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f1139"
                                  },
                                  {
                                    "label": "Xero Item Account",
                                    "value": "408 - Cleaning",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113a"
                                  },
                                  {
                                    "label": "Hidden field",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113b"
                                  },
                                  {
                                    "label": "testitem",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113c"
                                  },
                                  {
                                    "label": "Text Area",
                                    "value": "Health Insurance that stays with you forever Health Insurance that stays with you forever ",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113d"
                                  },
                                  {
                                    "label": "QBO Preferred Vendor",
                                    "value": "Bob's Burger Joint",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113e"
                                  },
                                  {
                                    "label": "New product",
                                    "value": "",
                                    "type": "LOOKUP",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f113f"
                                  },
                                  {
                                    "label": "QBO Inventory Account",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f1140"
                                  },
                                  {
                                    "label": "QBO Expense Account",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f1141"
                                  },
                                  {
                                    "label": "QBO Income Account",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "66b34b4db06dce040f8f1142"
                                  },
                                  {
                                    "label": "Serial Number",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "hide_to_fe": false,
                                    "_id": "66169dc26c722091c5188ada"
                                  },
                                  {
                                    "label": "Empty Text input",
                                    "value": "Health Insurance that stays with you forever ",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa951372403"
                                  },
                                  {
                                    "label": "Select",
                                    "value": "value one",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa951372407"
                                  },
                                  {
                                    "label": "Radio",
                                    "value": "value one",
                                    "type": "RADIO",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa95137240a"
                                  },
                                  {
                                    "label": "Date Input",
                                    "value": "2023-09-29",
                                    "type": "DATE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa95137240b"
                                  },
                                  {
                                    "label": "Time Input",
                                    "value": "10:00:00",
                                    "type": "TIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa95137240c"
                                  },
                                  {
                                    "label": "Checkbox",
                                    "value": "",
                                    "type": "MULTI_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "6516614140c32fa95137240d"
                                  },
                                  {
                                    "label": "Test Asset",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": true,
                                    "group_name": "Asset group",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34b4db06dce040f8f114a"
                                  },
                                  {
                                    "label": "Vignesh Custom",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "test group",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "66b34b4db06dce040f8f114b"
                                  },
                                  {
                                    "label": "Text Input",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New group",
                                    "group_uid": "a862c080-9033-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34b4db06dce040f8f114c"
                                  },
                                  {
                                    "label": "Checkbox",
                                    "value": "",
                                    "type": "MULTI_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "test group",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "66b34b4db06dce040f8f114d"
                                  },
                                  {
                                    "label": "DateTime Input",
                                    "value": "",
                                    "type": "DATETIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "test group",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "66b34b4db06dce040f8f114e"
                                  },
                                  {
                                    "label": "Time Input",
                                    "value": "",
                                    "type": "TIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "test group",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "66b34b4db06dce040f8f114f"
                                  },
                                  {
                                    "label": "Text Area",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "test group",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "66b34b4db06dce040f8f1150"
                                  },
                                  {
                                    "label": "Product description",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Asset group",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34b4db06dce040f8f1151"
                                  },
                                  {
                                    "label": "Asset set name",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New group",
                                    "group_uid": "a862c080-9033-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34b4db06dce040f8f1152"
                                  },
                                  {
                                    "label": "Asset decription",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New group",
                                    "group_uid": "a862c080-9033-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34b4db06dce040f8f1153"
                                  },
                                  {
                                    "label": "Text Input",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New group",
                                    "group_uid": "a862c080-9033-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34af9b06dce040f8f0f48"
                                  },
                                  {
                                    "label": "Asset set name",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New group",
                                    "group_uid": "a862c080-9033-11ee-b81e-f95ba7e47d6e",
                                    "_id": "66b34af9b06dce040f8f0f4e"
                                  },
                                  {
                                    "label": "Test Asset",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "hide_to_fe": true,
                                    "group_name": "Asset group j",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "6616a0396c722091c518935d"
                                  },
                                  {
                                    "label": "Product description",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "hide_to_fe": false,
                                    "group_name": "Asset group j",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "6616a0396c722091c518935e"
                                  },
                                  {
                                    "label": "Part Input",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New Part",
                                    "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                    "_id": "6516614140c32fa951372404"
                                  },
                                  {
                                    "label": "DateTime Input",
                                    "value": "",
                                    "type": "DATETIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "New Part",
                                    "group_uid": "e3adc6c0-8b4e-11ed-a63c-7d46adaa7b2c",
                                    "_id": "6516614140c32fa951372408"
                                  }
                                ],
                                "has_custom_tax": true,
                                "is_deleted": false,
                                "created_at": "2023-09-29T05:31:45.671Z",
                                "updated_at": "2024-08-09T09:48:11.948Z",
                                "product_no": 702
                              },
                              "product_id": "7878787878",
                              "product_uid": "7aab9620-5e89-11ee-a16d-d973f75ee849",
                              "location_uid": "",
                              "image": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/44f7b900-5e89-11ee-a16d-d973f75ee849.png",
                              "name": "Boat Watch",
                              "brand": "Boat Watch",
                              "specification": "New Smart Watchs",
                              "description": "Health Insurance that stays with you forever ",
                              "uom": "1",
                              "quantity": 1,
                              "unit_price": 100,
                              "discount": 0,
                              "purchase_price": 1500,
                              "serial_nos": [],
                              "discount_type": "FIXED",
                              "total": 100,
                              "_id": "668407fec67fdafeda3dbda3",
                              "associated_products": [],
                              "price": 100,
                              "pre_total": 0,
                              "has_rollup_custom_tax": false
                            },
                            {
                              "markup": {
                                "markup_type": "FLAT",
                                "markup_value": 150,
                                "markup_price": 150
                              },
                              "tax": {
                                "tax_name": "Custom tax",
                                "tax_rate": null,
                                "tax_amount": 0,
                                "tax_exempt": false
                              },
                              "line_item_uid": "910ac46b-2ce5-44c6-9aca-46a697762ace",
                              "line_item_type": "ITEM",
                              "product_ref_id": {
                                "tax": {
                                  "tax_rate": null,
                                  "tax_name": "",
                                  "tax_exempt": false
                                },
                                "product_name": "Product#2",
                                "product_category": {
                                  "category_name": "CAR MODELS",
                                  "category_uid": "7c20c340-7319-11ea-844d-235e95026c96"
                                },
                                "product_uid": "022b9930-a96a-11e9-a952-716e2bba4402",
                                "updated_at": "2025-01-02T12:23:45.694Z",
                                "created_at": "2019-07-18T14:40:37.955Z",
                                "is_deleted": false,
                                "meta_data": [
                                  {
                                    "label": "Xero Item Account",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57eed"
                                  },
                                  {
                                    "label": "QBO Class",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57eee"
                                  },
                                  {
                                    "label": "QB Product ID",
                                    "value": "55",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57eef"
                                  },
                                  {
                                    "label": "Text Area",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef0"
                                  },
                                  {
                                    "label": "Hidden field",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef1"
                                  },
                                  {
                                    "label": "testitem",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": true,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef2"
                                  },
                                  {
                                    "label": "QBO Preferred Vendor",
                                    "value": "Bob's Burger Joint",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef3"
                                  },
                                  {
                                    "label": "New product",
                                    "value": "",
                                    "type": "LOOKUP",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef4"
                                  },
                                  {
                                    "label": "QBO Inventory Account",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef5"
                                  },
                                  {
                                    "label": "QBO Expense Account",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef6"
                                  },
                                  {
                                    "label": "QBO Income Account",
                                    "value": "",
                                    "type": "SINGLE_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "_id": "677396508fbcd0580ad57ef7"
                                  },
                                  {
                                    "label": "Mobile test hidden to FE",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": true,
                                    "_id": "677396508fbcd0580ad57ef8"
                                  },
                                  {
                                    "label": "Xero Item ID",
                                    "value": "852",
                                    "hide_field": false,
                                    "hide_to_fe": false,
                                    "_id": "673dbd363e30fd820916d5b0"
                                  },
                                  {
                                    "label": "Vignesh Custom",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Part/Product",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "677396508fbcd0580ad57efa"
                                  },
                                  {
                                    "label": "Checkbox",
                                    "value": "",
                                    "type": "MULTI_ITEM",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Part/Product",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "677396508fbcd0580ad57efb"
                                  },
                                  {
                                    "label": "Time Input",
                                    "value": "",
                                    "type": "TIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Part/Product",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "677396508fbcd0580ad57efc"
                                  },
                                  {
                                    "label": "DateTime Input",
                                    "value": "",
                                    "type": "DATETIME",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Part/Product",
                                    "group_uid": "1901d190-877f-11ee-aa27-2d1135934da0",
                                    "_id": "677396508fbcd0580ad57efd"
                                  },
                                  {
                                    "label": "Test Asset",
                                    "value": "",
                                    "type": "SINGLE_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": true,
                                    "group_name": "Asset group for product",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "677396508fbcd0580ad57efe"
                                  },
                                  {
                                    "label": "Product description",
                                    "value": "",
                                    "type": "MULTI_LINE",
                                    "hide_field": false,
                                    "module_name": "PRODUCT",
                                    "hide_to_fe": false,
                                    "group_name": "Asset group for product",
                                    "group_uid": "a3042dc0-9044-11ee-b81e-f95ba7e47d6e",
                                    "_id": "677396508fbcd0580ad57eff"
                                  },
                                  {
                                    "label": "Xero Item ID",
                                    "value": "852",
                                    "hide_field": false,
                                    "hide_to_fe": false,
                                    "_id": "67767e439dd197ac578d1369"
                                  }
                                ],
                                "product_id": "852",
                                "has_custom_tax": false,
                                "product_type": "PRODUCT",
                                "prefix": "ak test",
                                "is_billable": false
                              },
                              "product_id": "852",
                              "product_uid": "022b9930-a96a-11e9-a952-716e2bba4402",
                              "location_uid": "",
                              "image": "",
                              "name": "Product#2",
                              "brand": "",
                              "specification": "",
                              "description": "Test product description",
                              "uom": "",
                              "quantity": 5,
                              "unit_price": 250,
                              "unit_price_premarkup": 100,
                              "discount": 0,
                              "purchase_price": 100,
                              "serial_nos": [],
                              "discount_type": "FIXED",
                              "total": 1250,
                              "_id": "66840842c67fdafeda3dc047",
                              "associated_products": [],
                              "price": 250,
                              "pre_total": 0,
                              "has_rollup_custom_tax": false
                            }
                          ],
                          "tax": [
                            {
                              "tax_uid": "d7e1bc30-fbbd-11ee-b23b-b9743bfe06c8"
                            }
                          ],
                          "package": {
                            "master_package": "72e0b360-3c21-11ee-82aa-858410f587b5",
                            "package_description": "Sample Packages for companies",
                            "package_name": "Applot 1"
                          },
                          "deposit": "500.0000"
                        }
                      ],
                      "proposal_title": "Proposal for Hari V 2",
                      "request": null
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Proposal Updated Successfully\",\n    \"data\": {\n        \"estimate_uid\": \"bde94a1f-6b76-4e6e-b2bb-2c3e985923fd\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Proposal Updated Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "estimate_uid": {
                          "type": "string",
                          "example": "bde94a1f-6b76-4e6e-b2bb-2c3e985923fd"
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
                    "value": "{\n\t\t\tmessage: 'Mandatory details are Missing',\n\t\t\ttitle: 'Missing Mandatory fields',\n\t\t\ttype: 'error'\n\t\t}"
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