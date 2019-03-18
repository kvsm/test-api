/**
 * TestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Thing from './Thing';

/**
 * The DescribedThing model module.
 * @module Model/DescribedThing
 * @version 0.1.0
 */
class DescribedThing {
    /**
     * Constructs a new <code>DescribedThing</code>.
     * The root of the DescribedThing type&#39;s schema.
     * @alias module:Model/DescribedThing
     * @implements module:Model/Thing
     */
    constructor() { 
        Thing.initialize(this, name);
        DescribedThing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DescribedThing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DescribedThing} obj Optional instance to populate.
     * @return {module:Model/DescribedThing} The populated <code>DescribedThing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribedThing();
            Thing.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DescribedThing.prototype['name'] = undefined;

/**
 * @member {String} description
 */
DescribedThing.prototype['description'] = undefined;


// Implement Thing interface:
/**
 * @member {String} name
 */
Thing.prototype['name'] = undefined;




export default DescribedThing;
