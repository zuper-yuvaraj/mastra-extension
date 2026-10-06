---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Invoice Meta Filter

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
    "/invoice/meta/filter": {
      "get": {
        "summary": "Get Invoice Meta Filter",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"invoice_no\", \"displayName\": \"Invoice #\", \"fieldDataKey\": \"invoice_no\", \"fieldType\": \"NUMBER\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"reference_no\", \"displayName\": \"Reference #\", \"fieldDataKey\": \"reference_no\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"invoice_date\", \"displayName\": \"Invoice Date\", \"fieldDataKey\": \"invoice_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"due_date\", \"displayName\": \"Due Date\", \"fieldDataKey\": \"due_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"paid_date\", \"displayName\": \"Paid Date\", \"fieldDataKey\": \"paid_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"estimate_uid\", \"displayName\": \"Estimate\", \"fieldDataKey\": \"estimate_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/estimate\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"estimate_uid\", \"bindLabel\": \"estimate_no\"}}, {\"type\": \"nested_field\", \"displayKey\": \"customer_uid\", \"displayName\": \"Customer\", \"fieldDataKey\": \"customer_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}, {\"type\": \"default_field\", \"displayKey\": \"invoice_status\", \"displayName\": \"Status\", \"fieldDataKey\": \"invoice_status\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"total\", \"displayName\": \"Total\", \"fieldDataKey\": \"total\", \"fieldType\": \"DECIMAL\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"is_paid\", \"displayName\": \"Paid\", \"fieldDataKey\": \"is_paid\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Yes\"}, {\"key\": \"false\", \"value\": \"No\"}]}, {\"type\": \"default_field\", \"displayKey\": \"created_at\", \"displayName\": \"Created At\", \"fieldDataKey\": \"created_at\", \"fieldType\": \"DATE\", \"multiSelect\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-invoice-meta-filter"
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