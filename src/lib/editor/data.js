const base  = {
        "theme": "html",
        "iconlib": "fontawesome4",
        "prompt_before_delete": true,
        "enable_array_copy": true,
        "object_layout": "normal",
        "show_errors": "interaction",
        "schema": {
          "type": "object",
          "description": "JSON schema generated with JSONBuddy https://www.json-buddy.com",
          "properties": {
            "name": {
              "type": "string"
            }
          }
        },
        "startval": {
          "name": "nwp-app"
        },
        "array_controls_top": false
      };
const edit1 = {
  "theme": "html",
  "iconlib": "fontawesome4",
  "prompt_before_delete": true,
  "enable_array_copy": true,
  "object_layout": "grid",
  "show_errors": "interaction",
  "schema": {
    "id": "https://niebert.github.io/json-editor",
    "type": "array",
    "items": {
      "id": "/items",
      "type": "object",
      "title": "Page",
      "options": {
        "hidden": false,
        "collapsed": false,
        "disable_collapse": false,
        "disable_edit_json": false,
        "disable_properties": false
      },
      "properties": {
        "id": {
          "id": "/items/properties/id",
          "type": "integer",
          "title": "Id",
          "default": "0",
          "options": {
            "hidden": false
          },
          "propertyOrder": 10
        },
        "conf": {
          "id": "/items/properties/conf",
          "type": "object",
          "title": "Config",
          "options": {
            "hidden": false,
            "collapsed": false,
            "disable_collapse": false,
            "disable_edit_json": false,
            "disable_properties": false
          },
          "properties": {
            "op1": {
              "id": "/items/properties/conf/properties/op1",
              "type": "boolean",
              "title": "Op 1",
              "format": "checkbox",
              "default": true,
              "options": {
                "hidden": false
              },
              "propertyOrder": 10
            },
            "op2": {
              "id": "/items/properties/conf/properties/op2",
              "type": "boolean",
              "title": "Op 2 ",
              "format": "checkbox",
              "default": false,
              "options": {
                "hidden": false
              },
              "propertyOrder": 20
            }
          },
          "propertyOrder": 60,
          "defaultProperties": [
            "op1",
            "op2"
          ]
        },
        "head": {
          "id": "/items/properties/head",
          "type": "object",
          "title": "Header",
          "options": {
            "hidden": false,
            "collapsed": false,
            "disable_collapse": false,
            "disable_edit_json": false,
            "disable_properties": false
          },
          "properties": {
            "bg": {
              "$ref": "#/definitions/image",
              "title": "Bg",
              "propertyOrder": 30
            },
            "sub": {
              "id": "/items/properties/head/properties/sub",
              "type": "string",
              "title": "Sub",
              "format": "text",
              "default": "nwp-cgn.de",
              "options": {
                "hidden": false
              },
              "propertyOrder": 20
            },
            "link": {
              "type": "string",
              "title": "Link",
              "format": "html",
              "default": "",
              "options": {
                "hidden": false,
                "dependencies": {
                  "hidden": true
                }
              },
              "propertyOrder": 60
            },
            "titel": {
              "id": "/items/properties/head/properties/titel",
              "type": "string",
              "title": "Titel",
              "format": "text",
              "default": "Page Name",
              "options": {
                "hidden": false
              },
              "propertyOrder": 10
            },
            "active": {
              "type": "integer",
              "title": "Active Page",
              "default": "0",
              "options": {
                "hidden": false,
                "infoText": "Active Page Id"
              },
              "propertyOrder": 40
            },
            "hidden": {
              "$ref": "#/definitions/bool",
              "title": "Link?",
              "format": "checkbox",
              "propertyOrder": 50
            }
          },
          "propertyOrder": 30,
          "defaultProperties": [
            "titel",
            "sub",
            "active",
            "hidden",
            "link"
          ]
        },
        "link": {
          "id": "/items/properties/link",
          "type": "object",
          "title": "Link",
          "options": {
            "hidden": false,
            "collapsed": false,
            "disable_collapse": false,
            "disable_edit_json": false,
            "disable_properties": false
          },
          "properties": {
            "icon": {
              "$ref": "#/definitions/icons",
              "title": "Icon",
              "propertyOrder": 30
            },
            "name": {
              "id": "/items/properties/link/properties/name",
              "type": "string",
              "title": "Name",
              "format": "text",
              "default": "Link",
              "options": {
                "hidden": false
              },
              "propertyOrder": 20
            },
            "path": {
              "id": "/items/properties/link/properties/path",
              "type": "string",
              "title": "Path",
              "format": "text",
              "default": "/",
              "options": {
                "hidden": false
              },
              "propertyOrder": 10
            }
          },
          "propertyOrder": 40,
          "defaultProperties": [
            "path",
            "name",
            "icon"
          ]
        },
        "slug": {
          "id": "/items/properties/slug",
          "type": "string",
          "title": "Slug",
          "format": "text",
          "options": {
            "hidden": false
          },
          "propertyOrder": 20
        },
        "files": {
          "id": "/items/properties/files",
          "type": "array",
          "items": {
            "id": "/items/properties/files/items",
            "type": "object",
            "title": "File ",
            "options": {
              "hidden": false,
              "collapsed": false,
              "disable_collapse": false,
              "disable_edit_json": false,
              "disable_properties": false
            },
            "properties": {
              "file": {
                "$ref": "#/definitions/image",
                "title": "File",
                "propertyOrder": 20
              },
              "titel": {
                "id": "/items/properties/files/items/properties/titel",
                "type": "string",
                "title": "Titel",
                "format": "text",
                "default": "Slide",
                "options": {
                  "hidden": false
                },
                "propertyOrder": 10
              }
            },
            "headerTemplate": "Page: {{self.titel}}",
            "defaultProperties": [
              "titel",
              "file"
            ]
          },
          "title": "Files",
          "format": "tabsx",
          "options": {
            "hidden": false,
            "collapsed": false,
            "disable_collapse": false,
            "disable_array_add": false,
            "disable_properties": false,
            "disable_array_delete": false,
            "disable_array_reorder": false
          },
          "propertyOrder": 50
        }
      },
      "headerTemplate": "P{{i}} - {{self.link.name}}",
      "defaultProperties": [
        "id",
        "slug",
        "head",
        "link",
        "files"
      ]
    },
    "title": "App Pages ",
    "format": "tabsx",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "options": {
      "hidden": false,
      "collapsed": false,
      "disable_collapse": false,
      "disable_array_add": false,
      "disable_properties": false,
      "disable_array_delete": false,
      "disable_array_reorder": false
    },
    "definitions": {
      "lib": {
        "type": "object",
        "properties": {
          "audio": {
            "$ref": "#/definitions/audio",
            "title": "Audio",
            "propertyOrder": 90
          },
          "image": {
            "$ref": "#/definitions/image",
            "title": "Image",
            "propertyOrder": 30
          },
          "video": {
            "$ref": "#/definitions/video",
            "title": "Video",
            "propertyOrder": 60
          },
          "disabled": {
            "$ref": "#/definitions/bool",
            "title": "Disabled",
            "propertyOrder": 10
          }
        }
      },
      "bool": {
        "type": "boolean",
        "format": "select",
        "default": false,
        "options": {
          "hidden": false
        }
      },
      "audio": {
        "type": "string",
        "links": [
          {
            "rel": "Download File",
            "href": "{{self}}",
            "mediaType": "audio/mp3"
          }
        ],
        "default": "https://nwp-cgn.de/archiv/audio/break.mp3",
        "options": {
          "hidden": false
        },
        "description": "https://nwp-cgn.de/archiv/audio/break.mp3"
      },
      "icons": {
        "enum": [
          "alert",
          "archive",
          "arrow-left",
          "at",
          "bookmark",
          "camera",
          "cast",
          "check",
          "code",
          "compass",
          "copy",
          "database",
          "eye",
          "eye-off",
          "file",
          "film",
          "filter",
          "globe",
          "grid",
          "home",
          "hsp",
          "image",
          "left",
          "mail",
          "menu",
          "mic",
          "more-vertical",
          "music",
          "navi",
          "pause",
          "play",
          "power",
          "right",
          "save",
          "server",
          "settings",
          "shield",
          "shield-off",
          "speaker",
          "tag",
          "trash",
          "tube",
          "user",
          "user-auth",
          "user-unauth",
          "video",
          "video-off",
          "volume",
          "volume-off",
          "warn",
          "wifi",
          "x",
          "zap",
          "zap-off"
        ],
        "type": "string",
        "options": {
          "hidden": false
        }
      },
      "image": {
        "type": "string",
        "links": [
          {
            "href": "{{self}}",
            "mediaType": "image/png"
          },
          {
            "rel": "Download File",
            "href": "{{self}}",
            "download": true
          }
        ],
        "default": "https://nwp-cgn.de/img/poser/airhostess_128.png",
        "options": {
          "hidden": false
        },
        "description": "https://nwp-cgn.de/img/poser/airhostess_128.png"
      },
      "video": {
        "type": "string",
        "links": [
          {
            "rel": "Download File",
            "href": "{{self}}",
            "mediaType": "video/mp4"
          }
        ],
        "default": "https://nwp-cgn.de/img/video/p1.mp4",
        "options": {
          "hidden": false
        },
        "description": "https://nwp-cgn.de/img/video/p1.mp4"
      },
      "yesno": {
        "enum": [
          "yes",
          "no"
        ],
        "type": "string",
        "default": "yes"
      },
      "comment": {
        "type": "string",
        "title": "Comment:",
        "format": "textarea",
        "default": ""
      }
    },
    "additionalProperties": true
  },
  "startval": [{"id":0,"slug":"start","head":{"titel":"Nwp-Studio","sub":"Startseite","bg":"https://nwp-cgn.de/img/poser/imgA01.png"},"link":{"path":"/","name":"Start","icon":"home"},"files":[{"titel":"Slide 1","file":"https://nwp-cgn.de/img/poser/imgA01.png"}]},{"id":1,"slug":"list","head":{"titel":"Archiv-Jedit","sub":"Json-Editor","bg":"https://nwp-cgn.de/img/poser/imgA02.png"},"link":{"path":"/list","name":"List","icon":"server"},"files":[]},{"id":2,"slug":"editor","head":{"titel":"Nwp-Editor","sub":"Json-Editor","bg":"https://nwp-cgn.de/img/poser/imgA04.png"},"link":{"path":"/editor","name":"Editor","icon":"camera"},"files":[]}],
  "array_controls_top": true
};

const options = [ base, edit1];
export default options;