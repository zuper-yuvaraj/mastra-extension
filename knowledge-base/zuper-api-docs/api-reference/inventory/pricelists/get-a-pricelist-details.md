---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Pricelist Details

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
    "/products/pricelist/{pricelist_uid}": {
      "get": {
        "summary": "Get a Pricelist Details",
        "description": "",
        "operationId": "get-a-pricelist-details",
        "parameters": [
          {
            "name": "pricelist_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"pricelist_uid\": \"82b8f5a0-3e9a-11ef-9ce4-1d9d49193912\",\n        \"pricelist_name\": \"PER ITEM MARGIN $100\",\n        \"pricelist_type\": \"PER_ITEM\",\n        \"line_items\": [\n            {\n                \"product\": {\n                    \"product_uid\": \"ea505360-ea9a-11ee-b542-79f15e682242\",\n                    \"prefix\": \"XR\",\n                    \"product_id\": \"55X90L\",\n                    \"product_category\": {\n                        \"category_uid\": \"758dbca2-72c5-4348-90ef-148eac401ca9\",\n                        \"category_name\": \"TVs\",\n                        \"is_deleted\": false\n                    },\n                    \"product_image\": \"\",\n                    \"brand\": \"Sony\",\n                    \"specification\": \"139 cm (55)\",\n                    \"uom\": \"TV\",\n                    \"product_name\": \"A90L Series\",\n                    \"product_type\": \"PRODUCT\",\n                    \"quantity\": 10,\n                    \"currency\": \"\",\n                    \"price\": 600,\n                    \"purchase_price\": 200,\n                    \"has_custom_tax\": false,\n                    \"tax\": {\n                        \"tax_exempt\": false,\n                        \"tax_exempt_remarks\": null,\n                        \"tax_exempt_number\": null,\n                        \"entity_use_code\": null\n                    },\n                    \"is_available\": true,\n                    \"is_deleted\": false,\n                    \"product_no\": 2,\n                    \"markup\": {\n                        \"markup_type\": \"FLAT\",\n                        \"markup_value\": 500\n                    },\n                    \"original_price\": 700\n                },\n                \"type\": \"FIXED_DISCOUNT\",\n                \"pricelist_value_type\": \"AMOUNT\",\n                \"value\": 100,\n                \"_id\": \"66951e9ea2bf7d061402b3a8\"\n            }\n        ],\n        \"is_active\": false,\n        \"is_deleted\": false,\n        \"created_by\": {\n            \"user_uid\": \"4088adc6-c6ed-45a2-845d-451f28938960\",\n            \"first_name\": \"Valliyappan\",\n            \"last_name\": \"S\",\n            \"email\": \"valliyappan.s@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"9600086457\",\n            \"designation\": \"Admin\",\n            \"emp_code\": \"001\",\n            \"prefix\": null,\n            \"work_phone_number\": \"9600086457\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"\",\n            \"hourly_labor_charge\": null,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-03-22T07:41:38.000Z\",\n            \"updated_at\": \"2024-03-22T07:41:38.000Z\"\n        },\n        \"created_at\": \"2024-07-10T08:58:01.086Z\",\n        \"updated_at\": \"2024-07-15T13:05:34.187Z\",\n        \"pricelist_id\": 34,\n        \"__v\": 1\n    }\n}"
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
                        "pricelist_uid": {
                          "type": "string",
                          "example": "82b8f5a0-3e9a-11ef-9ce4-1d9d49193912"
                        },
                        "pricelist_name": {
                          "type": "string",
                          "example": "PER ITEM MARGIN $100"
                        },
                        "pricelist_type": {
                          "type": "string",
                          "example": "PER_ITEM"
                        },
                        "line_items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "product": {
                                "type": "object",
                                "properties": {
                                  "product_uid": {
                                    "type": "string",
                                    "example": "ea505360-ea9a-11ee-b542-79f15e682242"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "XR"
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "55X90L"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_uid": {
                                        "type": "string",
                                        "example": "758dbca2-72c5-4348-90ef-148eac401ca9"
                                      },
                                      "category_name": {
                                        "type": "string",
                                        "example": "TVs"
                                      },
                                      "is_deleted": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "product_image": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "brand": {
                                    "type": "string",
                                    "example": "Sony"
                                  },
                                  "specification": {
                                    "type": "string",
                                    "example": "139 cm (55)"
                                  },
                                  "uom": {
                                    "type": "string",
                                    "example": "TV"
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "A90L Series"
                                  },
                                  "product_type": {
                                    "type": "string",
                                    "example": "PRODUCT"
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "currency": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "price": {
                                    "type": "integer",
                                    "example": 600,
                                    "default": 0
                                  },
                                  "purchase_price": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "has_custom_tax": {
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
                                      },
                                      "tax_exempt_remarks": {},
                                      "tax_exempt_number": {},
                                      "entity_use_code": {}
                                    }
                                  },
                                  "is_available": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "product_no": {
                                    "type": "integer",
                                    "example": 2,
                                    "default": 0
                                  },
                                  "markup": {
                                    "type": "object",
                                    "properties": {
                                      "markup_type": {
                                        "type": "string",
                                        "example": "FLAT"
                                      },
                                      "markup_value": {
                                        "type": "integer",
                                        "example": 500,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "original_price": {
                                    "type": "integer",
                                    "example": 700,
                                    "default": 0
                                  }
                                }
                              },
                              "type": {
                                "type": "string",
                                "example": "FIXED_DISCOUNT"
                              },
                              "pricelist_value_type": {
                                "type": "string",
                                "example": "AMOUNT"
                              },
                              "value": {
                                "type": "integer",
                                "example": 100,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "66951e9ea2bf7d061402b3a8"
                              }
                            }
                          }
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": false,
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
                              "example": "4088adc6-c6ed-45a2-845d-451f28938960"
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
                        "created_at": {
                          "type": "string",
                          "example": "2024-07-10T08:58:01.086Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-07-15T13:05:34.187Z"
                        },
                        "pricelist_id": {
                          "type": "integer",
                          "example": 34,
                          "default": 0
                        },
                        "__v": {
                          "type": "integer",
                          "example": 1,
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"PriceList Not found for given UID\",\n    \"title\": \"PriceList Not found\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "PriceList Not found for given UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "PriceList Not found"
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