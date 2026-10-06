---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Product Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators and (for LOOKUP/nested fields) the companion API to call for typeahead options. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.

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
    "/product/meta/filter": {
      "get": {
        "summary": "Get Product Meta Filter",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators and (for LOOKUP/nested fields) the companion API to call for typeahead options. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.",
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
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "default_field",
                              "nested_field",
                              "custom_field"
                            ]
                          },
                          "displayKey": {
                            "type": "string"
                          },
                          "displayName": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "fieldType": {
                            "type": "string",
                            "enum": [
                              "TEXT",
                              "NUMBER",
                              "DATE",
                              "DECIMAL",
                              "DROPDOWN",
                              "LOOKUP"
                            ]
                          },
                          "multiSelect": {
                            "type": "boolean"
                          },
                          "fieldOptions": {
                            "type": "array",
                            "items": {
                              "type": "object"
                            }
                          },
                          "operators": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "displayKey": {
                                  "type": "string"
                                },
                                "displayValue": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "data": {
                            "type": "object",
                            "description": "Present on LOOKUP/nested fields — tells the client which API to call for typeahead options.",
                            "properties": {
                              "url": {
                                "type": "string"
                              },
                              "lazyLoad": {
                                "type": "boolean"
                              },
                              "searchParam": {
                                "type": "string"
                              },
                              "dataKey": {
                                "type": "string"
                              },
                              "bindLabel": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"product_no\", \"displayName\": \"Product #\", \"fieldDataKey\": \"product_no\", \"fieldType\": \"NUMBER\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"product_id\", \"displayName\": \"ID\", \"fieldDataKey\": \"product_id\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"product_name\", \"displayName\": \"Product Name\", \"fieldDataKey\": \"product_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"product_category_uid\", \"displayName\": \"Category\", \"fieldDataKey\": \"product_category_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/product/category\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"category_uid\", \"bindLabel\": \"category_name\"}}, {\"type\": \"default_field\", \"displayKey\": \"product_type\", \"displayName\": \"Type\", \"fieldDataKey\": \"product_type\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true, \"fieldOptions\": [{\"key\": \"PRODUCT\", \"value\": \"Product\"}, {\"key\": \"SERVICE\", \"value\": \"Service\"}, {\"key\": \"PARTS\", \"value\": \"Parts\"}, {\"key\": \"BUNDLE\", \"value\": \"Bundle\"}, {\"key\": \"LABOR SERVICE\", \"value\": \"Labor Service\"}]}, {\"type\": \"default_field\", \"displayKey\": \"is_available\", \"displayName\": \"Available\", \"fieldDataKey\": \"is_available\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Yes\"}, {\"key\": \"false\", \"value\": \"No\"}]}, {\"type\": \"default_field\", \"displayKey\": \"low_stock\", \"displayName\": \"Stock\", \"fieldDataKey\": \"low_stock\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Low Stock\"}, {\"key\": \"false\", \"value\": \"In Stock\"}, {\"key\": \"out_of_stock\", \"value\": \"Out of Stock\"}]}, {\"type\": \"default_field\", \"displayKey\": \"created_at\", \"displayName\": \"Created At\", \"fieldDataKey\": \"created_at\", \"fieldType\": \"DATE\", \"multiSelect\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-product-meta-filter"
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