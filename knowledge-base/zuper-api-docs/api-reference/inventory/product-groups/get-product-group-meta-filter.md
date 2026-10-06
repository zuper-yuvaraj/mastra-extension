---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Product Group Meta Filter

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
    "/product/group/meta/filter": {
      "get": {
        "summary": "Get Product Group Meta Filter",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"product_group_name\", \"displayName\": \"Group Name\", \"fieldDataKey\": \"product_group_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"associated_products.product_uid\", \"displayName\": \"Products\", \"fieldDataKey\": \"associated_products.product_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/products\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"product_uid\", \"bindLabel\": \"product_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"created_by\", \"displayName\": \"Created By\", \"fieldDataKey\": \"created_by\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/users\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"user_uid\", \"bindLabel\": \"name\"}}, {\"type\": \"default_field\", \"displayKey\": \"is_active\", \"displayName\": \"Status\", \"fieldDataKey\": \"is_active\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Active\"}, {\"key\": \"false\", \"value\": \"Inactive\"}]}, {\"type\": \"default_field\", \"displayKey\": \"created_at\", \"displayName\": \"Created At\", \"fieldDataKey\": \"created_at\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"updated_at\", \"displayName\": \"Updated At\", \"fieldDataKey\": \"updated_at\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"group_type\", \"displayName\": \"Group Type\", \"fieldDataKey\": \"group_type\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"PRODUCT_GROUP\", \"value\": \"Product Group\"}, {\"key\": \"ADDON\", \"value\": \"Addon\"}], \"description\": \"Present only when the company has addon groups enabled.\"}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-product-group-meta-filter"
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