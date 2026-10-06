---
updatedAt: 2026-10-02T16:05:14.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Payment Transactions Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint. There is no plain Meta endpoint for this module.

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
    "/payments/transactions/meta/filter": {
      "get": {
        "summary": "Get Payment Transactions Meta Filter",
        "operationId": "get-payment-transactions-meta-filter",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint. There is no plain Meta endpoint for this module.",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"created_at\", \"displayName\": \"Created At\", \"fieldDataKey\": \"created_at\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"amount\", \"displayName\": \"Amount\", \"fieldDataKey\": \"amount\", \"fieldType\": \"DECIMAL\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"payment_mode_uid\", \"displayName\": \"Payment Mode\", \"fieldDataKey\": \"payment_mode_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"action_module\", \"displayName\": \"Module\", \"fieldDataKey\": \"action_module\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true, \"fieldOptions\": [{\"key\": \"INVOICE\", \"value\": \"Invoice\"}, {\"key\": \"ESTIMATE\", \"value\": \"Estimate\"}]}, {\"type\": \"nested_field\", \"displayKey\": \"customer_uid\", \"displayName\": \"Customer\", \"fieldDataKey\": \"customer_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"organization_uid\", \"displayName\": \"Organization\", \"fieldDataKey\": \"organization_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"type\", \"displayName\": \"Type\", \"fieldDataKey\": \"type\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"source\", \"displayName\": \"Source\", \"fieldDataKey\": \"source\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"status\", \"displayName\": \"Status\", \"fieldDataKey\": \"status\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"transaction_id\", \"displayName\": \"Transaction ID\", \"fieldDataKey\": \"transaction_id\", \"fieldType\": \"TEXT\", \"multiSelect\": false}]}"
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